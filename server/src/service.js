import { randomUUID } from 'node:crypto';

import { aiAdapters } from './ai-adapters.js';
import { AppError, ErrorCode } from './errors.js';
import { supportedCrafts, mockHomeFeed } from './mock-data.js';
import { repository } from './repository.js';

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

export function submitRequirement(payload) {
  const submission = {
    id: `submission-${randomUUID()}`,
    images: payload.images,
    requirementText: payload.requirementText,
    preferredCraft: payload.preferredCraft,
    budgetRange: payload.budgetRange,
    expectedDeliveryDate: payload.expectedDeliveryDate,
    status: 'submitted',
    createdAt: new Date().toISOString(),
  };

  repository.saveSubmission(submission);
  const structuredRequirement = repository.saveStructuredRequirement(
    aiAdapters.requirementParser.run(submission),
  );

  return {
    submission,
    structuredRequirement,
    nextAction: 'generate_craft_plan',
  };
}

export function generateCraftPlan(payload) {
  const submission = repository.getSubmission(payload.submissionId);
  if (!submission) {
    throw new AppError('没有找到对应需求，请先重新提交需求。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { submissionId: payload.submissionId },
    });
  }

  const structuredRequirement = aiAdapters.requirementParser.run(submission);
  const plan = repository.savePlan(
    aiAdapters.craftPlanGenerator.run(submission, structuredRequirement),
  );
  const preview = repository.savePreview(aiAdapters.previewRenderer.run(submission));
  const matches = repository.saveMatches(plan.id, aiAdapters.artisanMatcher.run(submission));
  const designConfirmation = repository.saveConfirmation(
    aiAdapters.designConfirmationBuilder.run(submission, plan),
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

export function getCraftPlan(planId) {
  const plan = repository.getPlan(planId);
  if (!plan) {
    throw new AppError('当前方案不存在，请重新生成。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { planId },
    });
  }

  return plan;
}

export function getArtisanMatches(planId) {
  const matches = repository.getMatches(planId);
  if (!matches.length) {
    throw new AppError('当前还没有匹配结果。', {
      statusCode: 404,
      code: ErrorCode.NOT_FOUND,
      details: { planId },
    });
  }

  return matches;
}
