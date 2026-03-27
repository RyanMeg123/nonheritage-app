import { getDb } from '../db.js';

export async function saveMatches(planId, entities) {
  const db = getDb();
  const rows = entities.map((entity, index) =>
    db.artisanMatch.create({
      data: {
        id: entity.id,
        planId,
        name: entity.name,
        craftExpertise: entity.craftExpertise,
        priceRange: entity.priceRange,
        timelineRange: entity.timelineRange,
        matchReason: entity.matchReason,
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
