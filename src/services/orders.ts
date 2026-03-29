import { request } from './api';
import type { CreateOrderPayload, OrderRecord } from '../types/orders';

export const ordersApi = {
  createOrder: (payload: CreateOrderPayload) =>
    request<OrderRecord>('/v1/orders', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getOrderDetail: (orderId: string) =>
    request<OrderRecord>(`/v1/orders/${orderId}`),
};
