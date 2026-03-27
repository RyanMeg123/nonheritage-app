import test from 'node:test';
import assert from 'node:assert/strict';

import { getDb } from '../src/db.js';
import { repository } from '../src/repository.js';
import { startTestServer } from '../support/http-server.js';

function installOrderTable() {
  const db = getDb();
  const orders = new Map();

  db.order = {
    create: async ({ data }) => {
      const row = {
        ...data,
        createdAt: data.createdAt ?? new Date().toISOString(),
        updatedAt: data.updatedAt ?? new Date().toISOString(),
      };
      orders.set(row.id, row);
      return row;
    },
    findUnique: async ({ where, select }) => {
      const row = orders.get(where.id) ?? null;
      if (!row) {
        return null;
      }

      if (!select) {
        return row;
      }

      return Object.fromEntries(
        Object.entries(select)
          .filter(([, enabled]) => enabled)
          .map(([field]) => [field, row[field]]),
      );
    },
  };

  return db;
}

test.beforeEach(() => {
  repository.reset();
  installOrderTable();
});

test('可以取回刚创建的订单详情', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const db = getDb();
  const order = await db.order.create({
    data: {
      id: 'order-001',
      createdAt: '2026-03-27T10:00:00.000Z',
      updatedAt: '2026-03-27T10:00:00.000Z',
      userId: 'user-001',
      artisanId: 'artisan-001',
      submissionId: 'submission-001',
      designConfirmationId: 'design-confirmation-001',
      status: 'pending',
      totalPriceFen: 128000,
      agreedDeliveryDate: '2026-05-01',
      notes: '领口想再收一点。',
      messages: [{ id: 'message-001' }],
      stages: [{ id: 'stage-001' }],
      attachments: [{ url: 'https://example.com/file.png' }],
      artisan: { id: 'artisan-001' },
      user: { id: 'user-001' },
      stageCount: 3,
    },
  });

  const response = await fetch(baseUrl + '/v1/orders/' + order.id);

  assert.equal(response.status, 200);
  const payload = await response.json();

  assert.deepEqual(Object.keys(payload).sort(), ['data', 'traceId']);
  assert.deepEqual(payload.data, {
    id: 'order-001',
    createdAt: '2026-03-27T10:00:00.000Z',
    updatedAt: '2026-03-27T10:00:00.000Z',
    userId: 'user-001',
    artisanId: 'artisan-001',
    submissionId: 'submission-001',
    designConfirmationId: 'design-confirmation-001',
    status: 'pending',
    totalPriceFen: 128000,
    agreedDeliveryDate: '2026-05-01',
    notes: '领口想再收一点。',
  });
  assert.equal(typeof payload.traceId, 'string');
  assert.equal('messages' in payload.data, false);
  assert.equal('stages' in payload.data, false);
  assert.equal('attachments' in payload.data, false);
  assert.equal('artisan' in payload.data, false);
  assert.equal('user' in payload.data, false);
  assert.equal('stageCount' in payload.data, false);
});

test('订单不存在时返回 404', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const response = await fetch(baseUrl + '/v1/orders/order-missing');

  assert.equal(response.status, 404);
  const payload = await response.json();
  assert.deepEqual(payload.error, {
    code: 'NOT_FOUND',
    message: '订单不存在。',
    details: { orderId: 'order-missing' },
    traceId: payload.error.traceId,
  });
  assert.equal(typeof payload.error.traceId, 'string');
});
