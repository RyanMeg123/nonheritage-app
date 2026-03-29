import {
  assertAllowedFields,
  assertPassword,
  assertPayloadObject,
  assertPhone,
} from '../shared.js';

const ALLOWED_FIELDS = ['phone', 'password'];

export function validateLoginRequest(payload) {
  assertPayloadObject(payload, '请求内容不能为空。');
  assertAllowedFields(payload, ALLOWED_FIELDS);
  assertPhone(payload.phone, 'phone');
  assertPassword(payload.password, 'password');
}
