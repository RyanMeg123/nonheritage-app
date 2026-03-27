import { AppError, ErrorCode } from '../../errors.js';
import { assertPayloadObject, assertString } from '../shared.js';

const ALLOWED_FIELDS = new Set([
  'userId',
  'artisanId',
  'designConfirmationId',
  'totalPriceFen',
  'agreedDeliveryDate',
  'notes',
]);

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// 创建订单参数校验预留位。
// 后续 POST /v1/orders 的参数检查放在这里。
export function validateCreateOrderRequest(payload) {
  assertPayloadObject(payload, '请求内容不能为空。');

  for (const field of Object.keys(payload)) {
    if (!ALLOWED_FIELDS.has(field)) {
      throw new AppError('请求包含不支持的字段。', {
        statusCode: 400,
        code: ErrorCode.DATA_SHAPE_INVALID,
        details: { field },
      });
    }
  }

  assertString(payload.userId, 'userId');
  assertString(payload.artisanId, 'artisanId');
  assertString(payload.designConfirmationId, 'designConfirmationId');
  assertString(payload.agreedDeliveryDate, 'agreedDeliveryDate');

  if (!DATE_PATTERN.test(payload.agreedDeliveryDate)) {
    throw new AppError('请填写正确的交付日期。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: 'agreedDeliveryDate' },
    });
  }

  if (!Number.isInteger(payload.totalPriceFen) || payload.totalPriceFen <= 0) {
    throw new AppError('请填写正确的订单金额。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: 'totalPriceFen' },
    });
  }

  if ('notes' in payload && typeof payload.notes !== 'string') {
    throw new AppError('请填写有效内容。', {
      statusCode: 400,
      code: ErrorCode.DATA_SHAPE_INVALID,
      details: { field: 'notes' },
    });
  }
}
