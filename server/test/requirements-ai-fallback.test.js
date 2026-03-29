import test from 'node:test';
import assert from 'node:assert/strict';

test('需求解析在 mock 图片或 AI 失败时会降级为 mock 结构化结果', async (t) => {
  const originalParserMode = process.env.AI_REQUIREMENT_PARSER;
  const originalApiKey = process.env.AIHUBMIX_API_KEY;
  const originalFetch = global.fetch;

  process.env.AI_REQUIREMENT_PARSER = 'aihubmix';
  process.env.AIHUBMIX_API_KEY = 'test-key';

  global.fetch = async () => ({
    ok: false,
    json: async () => ({
      error: {
        message: 'Failed to download image from mock:///submissions/test.heic.',
      },
    }),
  });

  t.after(() => {
    process.env.AI_REQUIREMENT_PARSER = originalParserMode;
    process.env.AIHUBMIX_API_KEY = originalApiKey;
    global.fetch = originalFetch;
  });

  const { aiAdapters } = await import(`../src/ai-adapters.js?fallback=${Date.now()}`);
  const result = await aiAdapters.requirementParser.run({
    id: 'submission-test',
    images: [{ url: 'mock:///submissions/test.heic' }],
    requirementText: '想做一件偏东方气质的外套。',
    preferredCraft: 'tie-dye',
    budgetRange: '¥8,000 以内',
    expectedDeliveryDate: '5 月中旬前',
  });

  assert.equal(result.submissionId, 'submission-test');
  assert.equal(result.status, 'ready');
  assert.equal(result.craftPreference, 'tie-dye');
  assert.equal(result.deliveryDate, '5 月中旬前');
  assert.equal(result.acceptsModification, true);
  assert.equal(result.aiMode, undefined);
});
