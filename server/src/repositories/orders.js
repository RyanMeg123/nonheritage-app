import { getDb } from '../db.js';

export async function getOrderById(orderId) {
  const db = getDb();
  return db.order.findUnique({
    where: { id: orderId },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      userId: true,
      artisanId: true,
      submissionId: true,
      designConfirmationId: true,
      status: true,
      totalPriceFen: true,
      agreedDeliveryDate: true,
      notes: true,
    },
  });
}
