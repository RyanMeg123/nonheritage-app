import { AppError, ErrorCode, toErrorResponse } from './errors.js';
import { captureClientErrorEnvelope, captureServerError, createTraceId } from './observability.js';
import { uploadBuffer } from './oss.js';
import {
  generateCraftPlan,
  getArtisanMatches,
  getBootstrapPayload,
  getCraftPlan,
  submitRequirement,
} from './service.js';
import {
  validateClientErrorEnvelope,
  validatePlanRequest,
  validateRequirementSubmission,
} from './validators.js';

function json(data, statusCode = 200) {
  return {
    statusCode,
    body: data,
  };
}

async function parseJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (!chunks.length) {
    return {};
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new AppError('请求格式不是有效 JSON。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
    });
  }
}

export async function handleRequest(req, res) {
  const traceId = createTraceId();
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Trace-Id', traceId);

  try {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'GET' && url.pathname === '/health') {
      return writeResponse(res, json({ status: 'ok', traceId }));
    }

    if (req.method === 'GET' && url.pathname === '/v1/bootstrap') {
      return writeResponse(res, json({ data: getBootstrapPayload(), traceId }));
    }

    // ── 图片上传（multipart/form-data，单文件）──────────────────
    // 客户端 POST /v1/uploads，field 名 "file"
    // 返回 { url } 供后续 requirement 的 images 字段使用
    if (req.method === 'POST' && url.pathname === '/v1/uploads') {
      const contentType = req.headers['content-type'] ?? '';
      const boundary = contentType.split('boundary=')[1];
      if (!boundary) {
        throw new AppError('必须使用 multipart/form-data 格式上传图片。', {
          statusCode: 400,
          code: ErrorCode.DATA_SHAPE_INVALID,
        });
      }
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const body = Buffer.concat(chunks);
      const { buffer, mimeType } = parseMultipartSingleFile(body, boundary);
      const url2 = await uploadBuffer(buffer, mimeType, 'submissions');
      return writeResponse(res, json({ data: { url: url2 }, traceId }, 201));
    }

    if (req.method === 'POST' && url.pathname === '/v1/requirements') {
      const body = await parseJsonBody(req);
      validateRequirementSubmission(body);
      return writeResponse(res, json({ data: await submitRequirement(body), traceId }, 201));
    }

    if (req.method === 'POST' && url.pathname === '/v1/craft-plans') {
      const body = await parseJsonBody(req);
      validatePlanRequest(body);
      return writeResponse(res, json({ data: await generateCraftPlan(body), traceId }, 201));
    }

    if (req.method === 'GET' && url.pathname.startsWith('/v1/craft-plans/')) {
      const parts = url.pathname.split('/').filter(Boolean);
      const planId = parts[2];
      const child = parts[3];

      if (parts.length === 3 && planId) {
        return writeResponse(res, json({ data: await getCraftPlan(planId), traceId }));
      }

      if (parts.length === 4 && child === 'matches' && planId) {
        return writeResponse(res, json({ data: await getArtisanMatches(planId), traceId }));
      }
    }

    if (req.method === 'POST' && url.pathname === '/v1/client-errors') {
      const body = await parseJsonBody(req);
      validateClientErrorEnvelope(body);
      captureClientErrorEnvelope(body);
      return writeResponse(res, json({ data: { accepted: true }, traceId }, 202));
    }

    throw new AppError('接口不存在。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { method: req.method, path: url.pathname },
    });
  } catch (error) {
    captureServerError(error, { url: req.url, method: req.method, traceId });
    return writeResponse(res, toErrorResponse(error, traceId));
  }
}

function writeResponse(res, response) {
  res.statusCode = response.statusCode;
  res.end(JSON.stringify(response.body, null, 2));
}

/**
 * 极简 multipart 解析：只取第一个文件 field。
 * 不依赖任何第三方库，够用于单图上传场景。
 */
function parseMultipartSingleFile(body, boundary) {
  const sep = Buffer.from(`--${boundary}`);
  const parts = [];
  let start = 0;
  while (start < body.length) {
    const idx = body.indexOf(sep, start);
    if (idx === -1) break;
    const end = body.indexOf(sep, idx + sep.length);
    const part = body.slice(idx + sep.length, end === -1 ? body.length : end);
    if (part.length > 4) parts.push(part);
    start = idx + sep.length;
  }

  for (const part of parts) {
    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd === -1) continue;
    const header = part.slice(0, headerEnd).toString('utf8');
    if (!header.includes('filename')) continue;

    const ctMatch = header.match(/Content-Type:\s*([^\r\n]+)/i);
    const mimeType = ctMatch ? ctMatch[1].trim() : 'application/octet-stream';
    // 跳过开头的 \r\n 和末尾的 \r\n
    const fileData = part.slice(headerEnd + 4, part.length - 2);
    return { buffer: fileData, mimeType };
  }

  throw new AppError('multipart body 中未找到文件 field。', {
    statusCode: 400,
    code: ErrorCode.DATA_SHAPE_INVALID,
  });
}
