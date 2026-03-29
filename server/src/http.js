import { AppError, ErrorCode, toErrorResponse } from './errors.js';
import { captureServerError, createTraceId } from './observability.js';
import { routes } from './http/routes/index.js';
import { writeResponse } from './http/response.js';

export async function handleRequest(req, res) {
  const traceId = createTraceId();
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Trace-Id', traceId);

  try {
    const url = new URL(req.url, 'http://localhost');

    for (const route of routes) {
      const response = await route({ req, traceId, url });
      if (response) {
        return writeResponse(res, response);
      }
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
