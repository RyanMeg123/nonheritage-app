import { getDb } from '../db.js';

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
