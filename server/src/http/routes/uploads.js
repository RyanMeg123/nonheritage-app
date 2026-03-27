import { AppError, ErrorCode } from '../../errors.js';
import { uploadBuffer } from '../../oss.js';
import { json } from '../response.js';

export async function handleUploadsRoute({ req, traceId, url }) {
  if (req.method !== 'POST' || url.pathname !== '/v1/uploads') {
    return null;
  }

  const contentType = req.headers['content-type'] ?? '';
  const boundary = contentType.split('boundary=')[1];
  if (!boundary) {
    throw new AppError('必须使用 multipart/form-data 格式上传图片。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
    });
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks);
  const { buffer, mimeType } = parseMultipartSingleFile(body, boundary);
  const uploadedUrl = await uploadBuffer(buffer, mimeType, 'submissions');
  return json({ data: { url: uploadedUrl }, traceId }, 201);
}

function parseMultipartSingleFile(body, boundary) {
  const sep = Buffer.from(`--${boundary}`);
  const parts = [];
  let start = 0;

  while (start < body.length) {
    const idx = body.indexOf(sep, start);
    if (idx === -1) {
      break;
    }

    const end = body.indexOf(sep, idx + sep.length);
    const part = body.slice(idx + sep.length, end === -1 ? body.length : end);
    if (part.length > 4) {
      parts.push(part);
    }
    start = idx + sep.length;
  }

  for (const part of parts) {
    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd === -1) {
      continue;
    }

    const header = part.slice(0, headerEnd).toString('utf8');
    if (!header.includes('filename')) {
      continue;
    }

    const ctMatch = header.match(/Content-Type:\s*([^\r\n]+)/i);
    const mimeType = ctMatch ? ctMatch[1].trim() : 'application/octet-stream';
    const fileData = part.slice(headerEnd + 4, part.length - 2);
    return { buffer: fileData, mimeType };
  }

  throw new AppError('multipart body 中未找到文件 field。', {
    statusCode: 400,
    code: ErrorCode.DATA_SHAPE_INVALID,
  });
}
