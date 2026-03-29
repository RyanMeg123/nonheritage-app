import {
  assertAllowedFields,
  assertPassword,
  assertPayloadObject,
  assertPhone,
  assertString,
} from '../shared.js';

const ALLOWED_FIELDS = ['phone', 'password', 'nickname'];

export function validateRegisterLoginRequest(payload) {
  assertPayloadObject(payload, '请求内容不能为空。');
  assertAllowedFields(payload, ALLOWED_FIELDS);
  assertPhone(payload.phone, 'phone');
  assertPassword(payload.password, 'password');

  if (payload.nickname !== undefined) {
    assertString(payload.nickname, 'nickname');
  }
}
