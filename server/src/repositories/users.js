import { getDb } from '../db.js';

function toUserRecord(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    phone: user.phone ?? null,
    nickname: user.nickname ?? null,
    passwordHash: user.passwordHash ?? null,
    sessionToken: user.sessionToken ?? null,
    sessionIssuedAt: user.sessionIssuedAt ?? null,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export async function findUserByPhone(phone) {
  const db = getDb();
  const user = await db.user.findUnique({
    where: { phone },
  });

  return toUserRecord(user);
}

export async function findUserBySessionToken(sessionToken) {
  const db = getDb();
  const user = await db.user.findUnique({
    where: { sessionToken },
  });

  return toUserRecord(user);
}

export async function createUserWithPhone({
  phone,
  nickname,
  passwordHash,
  sessionToken,
  sessionIssuedAt,
}) {
  const db = getDb();
  const user = await db.user.create({
    data: {
      phone,
      nickname,
      passwordHash,
      sessionToken,
      sessionIssuedAt,
    },
  });

  return toUserRecord(user);
}

export async function updateUserSession(userId, { sessionToken, sessionIssuedAt }) {
  const db = getDb();
  const user = await db.user.update({
    where: { id: userId },
    data: {
      sessionToken,
      sessionIssuedAt,
    },
  });

  return toUserRecord(user);
}

async function removeUserGraph(tx, userId) {
  const submissions = await tx.submission.findMany({
    where: { userId },
  });
  const submissionIds = submissions.map((row) => row.id);

  const plans = submissionIds.length
    ? await tx.craftPlan.findMany({
        where: { submissionId: { in: submissionIds } },
      })
    : [];
  const planIds = plans.map((row) => row.id);

  const orders = await tx.order.findMany({
    where: { userId },
  });
  const orderIds = orders.map((row) => row.id);

  if (orderIds.length) {
    await tx.orderStage.deleteMany({
      where: { orderId: { in: orderIds } },
    });
    await tx.orderMessage.deleteMany({
      where: { orderId: { in: orderIds } },
    });
    await tx.order.deleteMany({
      where: { id: { in: orderIds } },
    });
  }

  if (planIds.length) {
    await tx.artisanMatch.deleteMany({
      where: { planId: { in: planIds } },
    });
    await tx.previewResult.deleteMany({
      where: { planId: { in: planIds } },
    });
    await tx.designConfirmation.deleteMany({
      where: { planId: { in: planIds } },
    });
    await tx.craftPlan.deleteMany({
      where: { id: { in: planIds } },
    });
  }

  if (submissionIds.length) {
    await tx.structuredRequirement.deleteMany({
      where: { submissionId: { in: submissionIds } },
    });
    await tx.submission.deleteMany({
      where: { id: { in: submissionIds } },
    });
  }

  await tx.user.delete({
    where: { id: userId },
  });
}

export async function deleteUserAccount(userId) {
  const db = getDb();

  if (process.env.NODE_ENV === 'test') {
    await removeUserGraph(db, userId);
    return;
  }

  await db.$transaction(async (tx) => {
    await removeUserGraph(tx, userId);
  });
}
