import { AppError, ErrorCode, toErrorResponse } from './errors.js';
import { captureClientErrorEnvelope, captureServerError, createTraceId } from './observability.js';
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

    if (req.method === 'POST' && url.pathname === '/v1/requirements') {
      const body = await parseJsonBody(req);
      validateRequirementSubmission(body);
      return writeResponse(res, json({ data: submitRequirement(body), traceId }, 201));
    }

    if (req.method === 'POST' && url.pathname === '/v1/craft-plans') {
      const body = await parseJsonBody(req);
      validatePlanRequest(body);
      return writeResponse(res, json({ data: generateCraftPlan(body), traceId }, 201));
    }

    if (req.method === 'GET' && url.pathname.startsWith('/v1/craft-plans/')) {
      const parts = url.pathname.split('/').filter(Boolean);
      const planId = parts[2];
      const child = parts[3];

      if (parts.length === 3 && planId) {
        return writeResponse(res, json({ data: getCraftPlan(planId), traceId }));
      }

      if (parts.length === 4 && child === 'matches' && planId) {
        return writeResponse(res, json({ data: getArtisanMatches(planId), traceId }));
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
