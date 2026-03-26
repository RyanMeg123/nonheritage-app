import { randomUUID } from 'node:crypto';

import { aiAdapters } from './ai-adapters.js';
import { AppError, ErrorCode } from './errors.js';
import { supportedCrafts, mockHomeFeed } from './mock-data.js';
import {
  saveSubmission,
  getSubmission,
  saveStructuredRequirement,
  savePlan,
  getPlan,
  savePreview,
  saveMatches,
  getMatches,
  saveConfirmation,
} from './repository.js';

export function getBootstrapPayload() {
  return {
    home: mockHomeFeed,
    publishForm: {
      maxImages: 6,
      supportedCrafts,
      budgetHints: ['¥6,800 以内', '¥8,000 以内', '¥12,000 以内'],
      deliveryHints: ['4 月下旬前', '5 月中旬前', '6 月上旬前'],
    },
  };
}

export async function submitRequirement(payload) {
  const submission = await saveSubmission({
    id: `submission-${randomUUID()}`,
    images: payload.images,
    requirementText: payload.requirementText,
    preferredCraft: payload.preferredCraft,
    budgetRange: payload.budgetRange,
    expectedDeliveryDate: payload.expectedDeliveryDate,
    status: 'submitted',
  });

  const structuredRequirement = await saveStructuredRequirement(
    await aiAdapters.requirementParser.run(submission),
  );

  return {
    submission,
    structuredRequirement,
    nextAction: 'generate_craft_plan',
  };
}

export async function generateCraftPlan(payload) {
  const submission = await getSubmission(payload.submissionId);
  if (!submission) {
    throw new AppError('没有找到对应需求，请先重新提交需求。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { submissionId: payload.submissionId },
    });
  }

  const structuredRequirement = await aiAdapters.requirementParser.run(submission);
  const plan = await savePlan(
    await aiAdapters.craftPlanGenerator.run(submission, structuredRequirement),
  );
  const preview = await savePreview(await aiAdapters.previewRenderer.run(submission, plan));
  const matches = await saveMatches(
    plan.id,
    await aiAdapters.artisanMatcher.run(submission, structuredRequirement),
  );
  const designConfirmation = await saveConfirmation(
    await aiAdapters.designConfirmationBuilder.run(submission, plan),
  );

  return {
    plan,
    preview,
    matches,
    designConfirmation,
    pipeline: {
      requirementParser: aiAdapters.requirementParser.mode,
      craftPlanGenerator: aiAdapters.craftPlanGenerator.mode,
      previewRenderer: aiAdapters.previewRenderer.mode,
      artisanMatcher: aiAdapters.artisanMatcher.mode,
      designConfirmationBuilder: aiAdapters.designConfirmationBuilder.mode,
    },
  };
}

export async function getCraftPlan(planId) {
  const plan = await getPlan(planId);
  if (!plan) {
    throw new AppError('当前方案不存在，请重新生成。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { planId },
    });
  }
  return plan;
}

export async function getArtisanMatches(planId) {
  const matches = await getMatches(planId);
  if (!matches.length) {
    throw new AppError('当前还没有匹配结果。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { planId },
    });
  }
  return matches;
}
