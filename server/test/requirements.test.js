import test from 'node:test';
import assert from 'node:assert/strict';

import { repository } from '../src/repository.js';
import { startTestServer } from '../support/http-server.js';

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
