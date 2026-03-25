import { randomUUID } from 'node:crypto';

export function createTraceId() {
  return randomUUID();
}

export function buildErrorTags(error) {
  return {
    error_code: error.code ?? 'UNKNOWN',
    error_type: error.name ?? 'Error',
  };
}

export function captureServerError(error, context = {}) {
  const payload = {
    level: 'error',
    message: error.message,
    code: error.code ?? 'UNKNOWN',
    tags: buildErrorTags(error),
    context,
  };

  if (process.env.NODE_ENV !== 'test') {
    console.error('[server-error]', JSON.stringify(payload));
  }
}

export function captureClientErrorEnvelope(envelope) {
  const payload = {
    level: 'warning',
    category: envelope.category,
    source: envelope.source,
    traceId: envelope.traceId,
    screen: envelope.screenName,
  };

  if (process.env.NODE_ENV !== 'test') {
    console.warn('[client-error]', JSON.stringify(payload));
  }
}
