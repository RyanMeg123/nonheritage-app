import { assertPayloadObject, assertString } from './shared.js';

export function validatePlanRequest(payload) {
  assertPayloadObject(payload, '请求内容不能为空。');
  assertString(payload.submissionId, 'submissionId');
}
