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
