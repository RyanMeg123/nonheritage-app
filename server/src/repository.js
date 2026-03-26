/**
 * repository.js
 *
 * 所有数据库操作的唯一入口层（Prisma Client 封装）。
 * service.js 只通过这里读写数据，不直接触碰 DB。
 *
 * 注意：所有方法均为 async，调用方需要 await。
 */

import { getDb } from './db.js';

// ─────────────────────────────────────────
// Submission
// ─────────────────────────────────────────

export async function saveSubmission(data) {
  const db = getDb();
  return db.submission.create({
    data: {
      id: data.id,
      images: data.images,
      requirementText: data.requirementText,
      preferredCraft: data.preferredCraft,
      budgetRange: data.budgetRange,
      expectedDeliveryDate: data.expectedDeliveryDate,
      status: data.status ?? 'submitted',
    },
  });
}

export async function getSubmission(id) {
  const db = getDb();
  return db.submission.findUnique({ where: { id } });
}

// ─────────────────────────────────────────
// StructuredRequirement
// ─────────────────────────────────────────

export async function saveStructuredRequirement(data) {
  const db = getDb();
  return db.structuredRequirement.create({
    data: {
      id: data.id,
      submissionId: data.submissionId,
      category: data.category,
      style: data.style,
      craftPreference: data.craftPreference,
      materialPreference: data.materialPreference,
      colorPreference: data.colorPreference,
      budgetRange: data.budgetRange,
      deliveryDate: data.deliveryDate,
      acceptableVariance: data.acceptableVariance,
      acceptsModification: data.acceptsModification ?? true,
      status: data.status ?? 'ready',
      aiMode: data.aiMode ?? 'mock',
      rawResponse: data.rawResponse ?? undefined,
    },
  });
}

export async function getStructuredRequirementBySubmissionId(submissionId) {
  const db = getDb();
  return db.structuredRequirement.findUnique({ where: { submissionId } });
}

// ─────────────────────────────────────────
// CraftPlan
// ─────────────────────────────────────────

export async function savePlan(data) {
  const db = getDb();
  return db.craftPlan.create({
    data: {
      id: data.id,
      submissionId: data.submissionId,
      structuredRequirementId: data.structuredRequirementId,
      recommendedCraft: data.recommendedCraft,
      recommendationReason: data.recommendationReason,
      planSummary: data.planSummary,
      riskNotes: data.riskNotes,
      timelineRange: data.timelineRange,
      priceRange: data.priceRange,
      status: data.status ?? 'generated',
      aiMode: data.aiMode ?? 'mock',
      rawResponse: data.rawResponse ?? undefined,
    },
  });
}

export async function getPlan(id) {
  const db = getDb();
  return db.craftPlan.findUnique({ where: { id } });
}

// ─────────────────────────────────────────
// PreviewResult
// ─────────────────────────────────────────

export async function savePreview(data) {
  const db = getDb();
  return db.previewResult.create({
    data: {
      id: data.id,
      submissionId: data.submissionId,
      planId: data.planId ?? data.submissionId,
      sourceImages: data.sourceImages,
      previewImages: data.previewImages,
      description: data.description,
      status: data.status ?? 'pending_generation',
    },
  });
}

// ─────────────────────────────────────────
// ArtisanMatch
// ─────────────────────────────────────────

export async function saveMatches(planId, entities) {
  const db = getDb();
  const rows = entities.map((e, index) =>
    db.artisanMatch.create({
      data: {
        id: e.id,
        planId,
        name: e.name,
        craftExpertise: e.craftExpertise,
        priceRange: e.priceRange,
        timelineRange: e.timelineRange,
        matchReason: e.matchReason,
        rank: index,
      },
    })
  );
  return db.$transaction(rows);
}

export async function getMatches(planId) {
  const db = getDb();
  return db.artisanMatch.findMany({
    where: { planId },
    orderBy: { rank: 'asc' },
  });
}

// ─────────────────────────────────────────
// DesignConfirmation
// ─────────────────────────────────────────

export async function saveConfirmation(data) {
  const db = getDb();
  return db.designConfirmation.create({
    data: {
      id: data.id,
      submissionId: data.submissionId,
      planId: data.planId,
      title: data.title,
      sections: data.sections,
      status: data.status ?? 'draft',
    },
  });
}
