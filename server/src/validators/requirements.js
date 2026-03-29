import { assertArray, assertPayloadObject, assertString } from './shared.js';

export function validateRequirementSubmission(payload) {
  assertPayloadObject(payload, '请求内容不能为空。');

  assertArray(payload.images, 'images');
  payload.images.forEach((image, index) => {
    assertString(image.url, `images[${index}].url`);
  });
  assertString(payload.requirementText, 'requirementText');
  assertString(payload.preferredCraft, 'preferredCraft');
  assertString(payload.budgetRange, 'budgetRange');
  assertString(payload.expectedDeliveryDate, 'expectedDeliveryDate');
}
