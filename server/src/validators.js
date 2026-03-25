import { AppError, ErrorCode } from './errors.js';

const REQUIRED_STRING = '请填写有效内容。';

function assertString(value, fieldName) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError(REQUIRED_STRING, {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: fieldName },
    });
  }
}

function assertArray(value, fieldName) {
  if (!Array.isArray(value)) {
    throw new AppError('请使用正确的数组格式。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: fieldName },
    });
  }
}

export function validateRequirementSubmission(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new AppError('请求内容不能为空。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
    });
  }

  assertArray(payload.images, 'images');
  payload.images.forEach((image, index) => {
    assertString(image.url, `images[${index}].url`);
  });
  assertString(payload.requirementText, 'requirementText');
  assertString(payload.preferredCraft, 'preferredCraft');
  assertString(payload.budgetRange, 'budgetRange');
  assertString(payload.expectedDeliveryDate, 'expectedDeliveryDate');
}

export function validatePlanRequest(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new AppError('请求内容不能为空。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
    });
  }

  assertString(payload.submissionId, 'submissionId');
}

export function validateClientErrorEnvelope(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new AppError('错误内容不能为空。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
    });
  }

  assertString(payload.category, 'category');
  assertString(payload.message, 'message');
  assertString(payload.source, 'source');
}
