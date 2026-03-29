import { getDb } from '../db.js';

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
