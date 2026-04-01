import test from 'node:test';
import assert from 'node:assert/strict';

import { repository } from '../src/repository.js';
import { startTestServer } from '../support/http-server.js';

test.beforeEach(() => {
  repository.reset();
});

test('已登录用户可以删除账号，并且原密码不能再登录', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const registerResponse = await fetch(baseUrl + '/v1/auth/register-login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '13800138000',
      password: '123456',
    }),
  });

  assert.equal(registerResponse.status, 201);
  const registerPayload = await registerResponse.json();
  const token = registerPayload.data.session.token;

  const deleteResponse = await fetch(baseUrl + '/v1/auth/account', {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  assert.equal(deleteResponse.status, 200);
  const deletePayload = await deleteResponse.json();
  assert.equal(deletePayload.data.deleted, true);
  assert.equal(deletePayload.data.deletedUserId, registerPayload.data.user.id);

  const loginResponse = await fetch(baseUrl + '/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '13800138000',
      password: '123456',
    }),
  });

  assert.equal(loginResponse.status, 401);
  const loginPayload = await loginResponse.json();
  assert.equal(loginPayload.error.code, 'AUTH_INVALID');
});

test('没有登录态时不能删除账号', async (t) => {
  const { server, baseUrl } = await startTestServer();
  t.after(() => server.close());

  const response = await fetch(baseUrl + '/v1/auth/account', {
    method: 'DELETE',
  });

  assert.equal(response.status, 401);
  const payload = await response.json();
  assert.equal(payload.error.code, 'AUTH_INVALID');
});
