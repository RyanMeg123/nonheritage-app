import { AppError, ErrorCode } from '../../errors.js';
import { getOrderById } from '../../repositories/orders.js';

export async function getOrderDetail(orderId) {
  const order = await getOrderById(orderId);
  if (!order) {
    throw new AppError('订单不存在。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { orderId },
    });
  }

  return order;
}
