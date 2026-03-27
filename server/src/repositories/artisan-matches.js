import { getDb } from '../db.js';
import { rememberArtisanMatches } from './orders.js';

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

  const savedRows = await db.$transaction(rows);
  await rememberArtisanMatches(savedRows);
  return savedRows;
}

export async function getMatches(planId) {
  const db = getDb();
  return db.artisanMatch.findMany({
    where: { planId },
    orderBy: { rank: 'asc' },
  });
}
