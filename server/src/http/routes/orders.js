import { getOrderDetail } from '../../services/orders/get-order-detail.js';
import { validateGetOrderDetailParams } from '../../validators/orders/get-order-detail.js';
import { json } from '../response.js';

// 订单域总入口。
// 后续创建订单、订单详情等接口都收敛在这里，避免把逻辑再次铺回 http.js。
export async function handleOrdersRoute({ req, traceId, url }) {
  if (req.method === 'GET' && url.pathname.startsWith('/v1/orders/')) {
    const parts = url.pathname.split('/').filter(Boolean);
    const orderId = parts[2];

    if (parts.length === 3 && orderId) {
      validateGetOrderDetailParams({ orderId });
      return json({ data: await getOrderDetail(orderId), traceId });
    }
  }

  return null;
}
