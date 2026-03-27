import test from 'node:test';
import assert from 'node:assert/strict';

import { repository } from '../src/repository.js';
import { startTestServer } from '../support/http-server.js';

test.beforeEach(() => {
  repository.reset();
});

test('生成工艺方案后可以取回方案和匹配结果', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const submitResponse = await fetch(baseUrl + '/v1/requirements', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: [{ url: 'https://example.com/look-2.jpg' }],
      requirementText: '我想做一件有东方感的礼服外套。',
      preferredCraft: 'su-embroidery',
      budgetRange: '¥8,000 - ¥12,000',
      expectedDeliveryDate: '2026-05-30',
    }),
  });
  const submitPayload = await submitResponse.json();

  const planResponse = await fetch(baseUrl + '/v1/craft-plans', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      submissionId: submitPayload.data.submission.id,
    }),
  });

  assert.equal(planResponse.status, 201);
  const planPayload = await planResponse.json();
  const planId = planPayload.data.plan.id;
  assert.equal(planPayload.data.pipeline.previewRenderer, 'mock');
  assert.equal(planPayload.data.matches.length, 2);

  const fetchPlanResponse = await fetch(baseUrl + '/v1/craft-plans/' + planId);
  assert.equal(fetchPlanResponse.status, 200);
  const fetchPlanPayload = await fetchPlanResponse.json();
  assert.equal(fetchPlanPayload.data.id, planId);

  const matchesResponse = await fetch(baseUrl + '/v1/craft-plans/' + planId + '/matches');
  assert.equal(matchesResponse.status, 200);
  const matchesPayload = await matchesResponse.json();
  assert.equal(matchesPayload.data[0].name, '周师傅工作室');
});
