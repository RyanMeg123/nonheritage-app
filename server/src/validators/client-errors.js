import { assertPayloadObject, assertString } from './shared.js';

export function validateClientErrorEnvelope(payload) {
  assertPayloadObject(payload, '错误内容不能为空。');
  assertString(payload.category, 'category');
  assertString(payload.message, 'message');
  assertString(payload.source, 'source');
}
