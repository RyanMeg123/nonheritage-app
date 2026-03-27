import { AppError, ErrorCode } from '../errors.js';

const REQUIRED_STRING = '请填写有效内容。';

export function assertPayloadObject(payload, message) {
  if (!payload || typeof payload !== 'object') {
    throw new AppError(message, {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
    });
  }
}

export function assertString(value, fieldName) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError(REQUIRED_STRING, {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: fieldName },
    });
  }
}

export function assertArray(value, fieldName) {
  if (!Array.isArray(value)) {
    throw new AppError('请使用正确的数组格式。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: fieldName },
    });
  }
}
