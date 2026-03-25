import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';

import { handleRequest } from '../src/http.js';
import { repository } from '../src/repository.js';

function startTestServer() {
  const server = http.createServer((req, res) => {
    handleRequest(req, res);
  });

  return new Promise((resolve) => {
    server.listen(0, () => {
      const address = server.address();
      resolve({
        server,
        baseUrl: 'http://127.0.0.1:' + address.port,
      });
    });
  });
}

test.beforeEach(() => {
  repository.reset();
});

test('提交需求后会返回结构化需求', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const submissionResponse = await fetch(baseUrl + '/v1/requirements', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: [{ url: 'https://example.com/look-1.jpg' }],
      requirementText: '我想做一件偏东方轮廓的短外套，预算在 8 千以内。',
      preferredCraft: 'tie-dye',
      budgetRange: '¥6,800 - ¥8,000',
      expectedDeliveryDate: '2026-05-18',
    }),
  });

  assert.equal(submissionResponse.status, 201);
  const submissionPayload = await submissionResponse.json();
  assert.equal(submissionPayload.data.submission.status, 'submitted');
  assert.equal(submissionPayload.data.structuredRequirement.status, 'ready');
  assert.equal(submissionPayload.data.nextAction, 'generate_craft_plan');
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

test('错误上报接口会接受页面和请求错误', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const response = await fetch(baseUrl + '/v1/client-errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      category: 'REQUEST_FAILED',
      message: '上传需求时网络中断',
      source: 'mobile-app',
      screenName: 'PublishScreen',
      traceId: 'trace-demo',
    }),
  });

  assert.equal(response.status, 202);
  const payload = await response.json();
  assert.equal(payload.data.accepted, true);
});
