import { AppError, ErrorCode } from '../errors.js';

export async function parseJsonBody(req) {
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
