import { getDb } from '../db.js';

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
