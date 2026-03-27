import { AppError, ErrorCode } from '../errors.js';

const REQUIRED_STRING = '请填写有效内容。';
const PHONE_PATTERN = /^1\d{10}$/;
const MIN_PASSWORD_LENGTH = 6;

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

export function assertAllowedFields(payload, allowedFields) {
  const unknownFields = Object.keys(payload).filter((field) => !allowedFields.includes(field));
  if (unknownFields.length > 0) {
    throw new AppError('请求字段不符合预期。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { fields: unknownFields },
    });
  }
}

export function assertPhone(value, fieldName) {
  assertString(value, fieldName);

  if (!PHONE_PATTERN.test(value.trim())) {
    throw new AppError('请填写正确的手机号。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: fieldName },
    });
  }
}

export function assertPassword(value, fieldName) {
  assertString(value, fieldName);

  if (value.trim().length < MIN_PASSWORD_LENGTH) {
    throw new AppError('密码至少需要 6 位。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: fieldName },
    });
  }
}
