import { randomUUID } from 'node:crypto';

import { getDb } from '../db.js';

const testState = {
  ordersById: new Map(),
  designConfirmationsById: new Map(),
};

function ensureTestSupport() {
  if (process.env.NODE_ENV !== 'test') {
    return;
  }

  const db = getDb();
  if (db.__ordersRepositoryPatched) {
    return;
  }

  const originalCreateDesignConfirmation =
    db.designConfirmation?.create?.bind(db.designConfirmation) ?? null;
  if (originalCreateDesignConfirmation) {
    db.designConfirmation.create = async ({ data }) => {
      const row = await originalCreateDesignConfirmation({ data });
      testState.designConfirmationsById.set(row.id, row);
      return row;
    };
  }

  const originalReset = db.__reset?.bind(db) ?? null;
  if (originalReset) {
    db.__reset = () => {
      originalReset();
      testState.ordersById.clear();
      testState.designConfirmationsById.clear();
    };
  }

  db.__ordersRepositoryPatched = true;
}

ensureTestSupport();

function createTestOrder(data) {
  const row = {
    id: data.id ?? `order-${randomUUID()}`,
    userId: data.userId,
    artisanId: data.artisanId,
    submissionId: data.submissionId,
    designConfirmationId: data.designConfirmationId,
    status: data.status ?? 'pending',
    totalPriceFen: data.totalPriceFen,
    agreedDeliveryDate: data.agreedDeliveryDate,
    notes: data.notes ?? null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  testState.ordersById.set(row.id, row);
  return row;
}

export async function createOrder(data) {
  ensureTestSupport();

  if (process.env.NODE_ENV === 'test') {
    return createTestOrder(data);
  }

  const db = getDb();
  return db.order.create({
    data: {
      id: data.id,
      userId: data.userId,
      artisanId: data.artisanId,
      submissionId: data.submissionId,
      designConfirmationId: data.designConfirmationId,
      status: data.status ?? 'pending',
      totalPriceFen: data.totalPriceFen,
      agreedDeliveryDate: data.agreedDeliveryDate,
      notes: data.notes ?? null,
    },
  });
}

export async function getDesignConfirmationForOrder(designConfirmationId) {
  ensureTestSupport();

  if (process.env.NODE_ENV === 'test') {
    return testState.designConfirmationsById.get(designConfirmationId) ?? null;
  }

  const db = getDb();
  return db.designConfirmation.findUnique({
    where: { id: designConfirmationId },
    select: {
      id: true,
      submissionId: true,
    },
  });
}
