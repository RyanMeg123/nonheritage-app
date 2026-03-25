export const ErrorCode = {
  PAGE_ERROR: 'PAGE_ERROR',
  REQUEST_FAILED: 'REQUEST_FAILED',
  DATA_SHAPE_INVALID: 'DATA_SHAPE_INVALID',
  UPLOAD_FAILED: 'UPLOAD_FAILED',
  AI_EMPTY: 'AI_EMPTY',
  AI_TIMEOUT: 'AI_TIMEOUT',
  AI_INVALID_FORMAT: 'AI_INVALID_FORMAT',
  NOT_FOUND: 'NOT_FOUND',
};

export class AppError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = 'AppError';
    this.statusCode = options.statusCode ?? 500;
    this.code = options.code ?? ErrorCode.REQUEST_FAILED;
    this.details = options.details ?? null;
  }
}

export function toErrorResponse(error, traceId) {
  const normalized =
    error instanceof AppError
      ? error
      : new AppError('服务暂时不可用，请稍后重试。', {
          statusCode: 500,
          code: ErrorCode.REQUEST_FAILED,
        });

  return {
    statusCode: normalized.statusCode,
    body: {
      error: {
        code: normalized.code,
        message: normalized.message,
        details: normalized.details,
        traceId,
      },
    },
  };
}
