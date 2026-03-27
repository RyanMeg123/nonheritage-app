import { randomUUID } from 'node:crypto';

import { AppError, ErrorCode } from '../../errors.js';
import {
  createOrder as createOrderRecord,
  getDesignConfirmationForOrder,
} from '../../repositories/orders.js';

// 创建订单业务逻辑预留位。
// 后续 POST /v1/orders 的实现放在这里。
export async function createOrder(payload) {
  const designConfirmation = await getDesignConfirmationForOrder(payload.designConfirmationId);

  if (!designConfirmation) {
    throw new AppError('设计确认单不存在，无法创建订单。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { designConfirmationId: payload.designConfirmationId },
    });
  }

  return createOrderRecord({
    id: `order-${randomUUID()}`,
    userId: payload.userId,
    artisanId: payload.artisanId,
    submissionId: designConfirmation.submissionId,
    designConfirmationId: payload.designConfirmationId,
    status: 'pending',
    totalPriceFen: payload.totalPriceFen,
    agreedDeliveryDate: payload.agreedDeliveryDate,
    notes: payload.notes ?? null,
  });
}
