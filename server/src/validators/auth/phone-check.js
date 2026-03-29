import {
  assertAllowedFields,
  assertPayloadObject,
  assertPhone,
} from '../shared.js';

const ALLOWED_FIELDS = ['phone'];

export function validatePhoneCheckRequest(payload) {
  assertPayloadObject(payload, '请求内容不能为空。');
  assertAllowedFields(payload, ALLOWED_FIELDS);
  assertPhone(payload.phone, 'phone');
}
