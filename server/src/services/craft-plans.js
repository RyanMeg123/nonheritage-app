import { aiAdapters } from '../ai-adapters.js';
import { AppError, ErrorCode } from '../errors.js';
import {
  getMatches,
  getPlan,
  getSubmission,
  saveConfirmation,
  saveMatches,
  savePlan,
  savePreview,
} from '../repository.js';

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
