import test from 'node:test';
import assert from 'node:assert/strict';

import { repository } from '../src/repository.js';
import { startTestServer } from '../support/http-server.js';

test.beforeEach(() => {
  repository.reset();
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
