import { assertString } from '../shared.js';

export function validateGetOrderDetailParams({ orderId }) {
  assertString(orderId, 'orderId');
}
