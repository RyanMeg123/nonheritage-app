import test from 'node:test';
import assert from 'node:assert/strict';

import { repository } from '../src/repository.js';
import { startTestServer } from '../support/http-server.js';

test.beforeEach(() => {
  repository.reset();
});

test('设计确认单可以创建订单，并返回首版约定字段', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const designConfirmation = await createDesignConfirmation(baseUrl);

  const response = await fetch(baseUrl + '/v1/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 'user-demo-1',
      artisanId: 'artisan-demo-1',
      designConfirmationId: designConfirmation.id,
      totalPriceFen: 128000,
      agreedDeliveryDate: '2026-06-18',
      notes: '领口保留盘扣细节。',
    }),
  });

  assert.equal(response.status, 201);
  const payload = await response.json();

  assert.deepEqual(Object.keys(payload).sort(), ['data', 'traceId']);
  assert.deepEqual(Object.keys(payload.data).sort(), [
    'agreedDeliveryDate',
    'artisanId',
    'createdAt',
    'designConfirmationId',
    'id',
    'notes',
    'status',
    'submissionId',
    'totalPriceFen',
    'updatedAt',
    'userId',
  ]);
  assert.equal(payload.data.userId, 'user-demo-1');
  assert.equal(payload.data.artisanId, 'artisan-demo-1');
  assert.equal(payload.data.designConfirmationId, designConfirmation.id);
  assert.equal(payload.data.submissionId, designConfirmation.submissionId);
  assert.equal(payload.data.status, 'pending');
  assert.equal(payload.data.totalPriceFen, 128000);
  assert.equal(payload.data.notes, '领口保留盘扣细节。');
  assert.ok(payload.traceId);
});

test('designConfirmationId 不存在时返回 404', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const response = await fetch(baseUrl + '/v1/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 'user-demo-2',
      artisanId: 'artisan-demo-2',
      designConfirmationId: 'confirmation-missing',
      totalPriceFen: 56000,
      agreedDeliveryDate: '2026-07-01',
    }),
  });

  assert.equal(response.status, 404);
  const payload = await response.json();
  assert.equal(payload.error.code, 'NOT_FOUND');
  assert.equal(payload.error.details.designConfirmationId, 'confirmation-missing');
  assert.ok(payload.error.traceId);
});

test('客户端不能传 submissionId 或 status', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const designConfirmation = await createDesignConfirmation(baseUrl);

  const response = await fetch(baseUrl + '/v1/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 'user-demo-3',
      artisanId: 'artisan-demo-3',
      designConfirmationId: designConfirmation.id,
      submissionId: 'submission-from-client',
      status: 'completed',
      totalPriceFen: 88000,
      agreedDeliveryDate: '2026-07-10',
    }),
  });

  assert.equal(response.status, 400);
  const payload = await response.json();
  assert.equal(payload.error.code, 'DATA_SHAPE_INVALID');
  assert.ok(['submissionId', 'status'].includes(payload.error.details.field));
});

async function createDesignConfirmation(baseUrl) {
  const requirementResponse = await fetch(baseUrl + '/v1/requirements', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: [{ url: 'https://example.com/order-look.jpg' }],
      requirementText: '想做一件带苏绣细节的短外套。',
      preferredCraft: 'su-embroidery',
      budgetRange: '¥10,000 - ¥15,000',
      expectedDeliveryDate: '2026-06-30',
    }),
  });
  const requirementPayload = await requirementResponse.json();

  const planResponse = await fetch(baseUrl + '/v1/craft-plans', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      submissionId: requirementPayload.data.submission.id,
    }),
  });
  const planPayload = await planResponse.json();

  return {
    id: planPayload.data.designConfirmation.id,
    submissionId: requirementPayload.data.submission.id,
  };
}
