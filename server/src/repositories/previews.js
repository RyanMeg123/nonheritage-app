import { getDb } from '../db.js';

export async function savePreview(data) {
  const db = getDb();
  return db.previewResult.create({
    data: {
      id: data.id,
      submissionId: data.submissionId,
      planId: data.planId,
      sourceImages: data.sourceImages,
      previewImages: data.previewImages,
      description: data.description,
      status: data.status ?? 'pending_generation',
    },
  });
}
