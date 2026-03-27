import { createOrder } from '../../services/orders/create-order.js';
import { validateCreateOrderRequest } from '../../validators/orders/create-order.js';
import { parseJsonBody } from '../request-body.js';
import { json } from '../response.js';

// 订单域总入口。
// 后续创建订单、订单详情等接口都收敛在这里，避免把逻辑再次铺回 http.js。
export async function handleOrdersRoute({ req, traceId, url }) {
  if (req.method === 'POST' && url.pathname === '/v1/orders') {
    const body = await parseJsonBody(req);
    validateCreateOrderRequest(body);
    return json({ data: await createOrder(body), traceId }, 201);
  }

  return null;
}
