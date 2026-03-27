import { getDb } from '../db.js';

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
