import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

import { PrismaClient } from '../generated/prisma/index.js';

// 单例：避免开发热重载时创建多个连接
let _client;
let _pool;
let _testDb;

function createTestDbState() {
  return {
    users: new Map(),
    submissions: new Map(),
    structuredRequirements: new Map(),
    craftPlans: new Map(),
    previewResults: new Map(),
    artisanMatches: [],
    designConfirmations: new Map(),
    orders: new Map(),
    orderMessages: [],
    orderStages: [],
  };
}

function matchesCondition(value, condition) {
  if (condition === undefined) {
    return true;
  }

  if (condition && typeof condition === 'object' && Array.isArray(condition.in)) {
    return condition.in.includes(value);
  }

  return value === condition;
}

function matchesWhere(row, where = {}) {
  return Object.entries(where).every(([field, condition]) =>
    matchesCondition(row[field], condition),
  );
}

function createTestDb() {
  let state = createTestDbState();
  const db = {
    user: {
      create: async ({ data }) => {
        const row = {
          ...data,
          id: data.id ?? `user-test-${state.users.size + 1}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.users.set(row.id, row);
        return row;
      },
      findUnique: async ({ where }) => {
        if (where.id) {
          return state.users.get(where.id) ?? null;
        }

        if (where.phone) {
          return (
            Array.from(state.users.values()).find((user) => user.phone === where.phone) ?? null
          );
        }

        if (where.sessionToken) {
          return (
            Array.from(state.users.values()).find(
              (user) => user.sessionToken === where.sessionToken,
            ) ?? null
          );
        }

        return null;
      },
      update: async ({ where, data }) => {
        const existing =
          (where.id ? state.users.get(where.id) : null) ??
          (where.phone
            ? Array.from(state.users.values()).find((user) => user.phone === where.phone) ?? null
            : null);

        if (!existing) {
          return null;
        }

        const row = {
          ...existing,
          ...data,
          updatedAt: new Date().toISOString(),
        };
        state.users.set(row.id, row);
        return row;
      },
      delete: async ({ where }) => {
        const existing =
          (where.id ? state.users.get(where.id) : null) ??
          (where.phone
            ? Array.from(state.users.values()).find((user) => user.phone === where.phone) ?? null
            : null);

        if (!existing) {
          return null;
        }

        state.users.delete(existing.id);
        return existing;
      },
    },
    submission: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.submissions.set(row.id, row);
        return row;
      },
      findUnique: async ({ where }) => state.submissions.get(where.id) ?? null,
      findMany: async ({ where } = {}) =>
        Array.from(state.submissions.values()).filter((row) => matchesWhere(row, where)),
      deleteMany: async ({ where } = {}) => {
        const matchedIds = Array.from(state.submissions.values())
          .filter((row) => matchesWhere(row, where))
          .map((row) => row.id);

        for (const id of matchedIds) {
          state.submissions.delete(id);
        }

        return { count: matchedIds.length };
      },
    },
    structuredRequirement: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.structuredRequirements.set(row.submissionId, row);
        return row;
      },
      findUnique: async ({ where }) => state.structuredRequirements.get(where.submissionId) ?? null,
      deleteMany: async ({ where } = {}) => {
        const matchedKeys = Array.from(state.structuredRequirements.entries())
          .filter(([, row]) => matchesWhere(row, where))
          .map(([key]) => key);

        for (const key of matchedKeys) {
          state.structuredRequirements.delete(key);
        }

        return { count: matchedKeys.length };
      },
    },
    craftPlan: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.craftPlans.set(row.id, row);
        return row;
      },
      findUnique: async ({ where }) => state.craftPlans.get(where.id) ?? null,
      findMany: async ({ where } = {}) =>
        Array.from(state.craftPlans.values()).filter((row) => matchesWhere(row, where)),
      deleteMany: async ({ where } = {}) => {
        const matchedIds = Array.from(state.craftPlans.values())
          .filter((row) => matchesWhere(row, where))
          .map((row) => row.id);

        for (const id of matchedIds) {
          state.craftPlans.delete(id);
        }

        return { count: matchedIds.length };
      },
    },
    previewResult: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.previewResults.set(row.planId, row);
        return row;
      },
      findMany: async ({ where, take } = {}) =>
        Array.from(state.previewResults.values())
          .filter((row) => matchesWhere(row, where))
          .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)))
          .slice(0, take ?? state.previewResults.size),
      deleteMany: async ({ where } = {}) => {
        const matchedKeys = Array.from(state.previewResults.entries())
          .filter(([, row]) => matchesWhere(row, where))
          .map(([key]) => key);

        for (const key of matchedKeys) {
          state.previewResults.delete(key);
        }

        return { count: matchedKeys.length };
      },
    },
    artisanMatch: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
        };
        state.artisanMatches.push(row);
        return row;
      },
      findMany: async ({ where } = {}) =>
        state.artisanMatches
          .filter((row) => matchesWhere(row, where))
          .sort((left, right) => left.rank - right.rank),
      deleteMany: async ({ where } = {}) => {
        const before = state.artisanMatches.length;
        state.artisanMatches = state.artisanMatches.filter((row) => !matchesWhere(row, where));
        return { count: before - state.artisanMatches.length };
      },
    },
    designConfirmation: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.designConfirmations.set(row.planId, row);
        return row;
      },
      findUnique: async ({ where }) => {
        if (where.id) {
          return Array.from(state.designConfirmations.values()).find((row) => row.id === where.id) ?? null;
        }

        if (where.planId) {
          return state.designConfirmations.get(where.planId) ?? null;
        }

        return null;
      },
      deleteMany: async ({ where } = {}) => {
        const matchedKeys = Array.from(state.designConfirmations.entries())
          .filter(([, row]) => matchesWhere(row, where))
          .map(([key]) => key);

        for (const key of matchedKeys) {
          state.designConfirmations.delete(key);
        }

        return { count: matchedKeys.length };
      },
    },
    order: {
      create: async ({ data }) => {
        const row = {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.orders.set(row.id, row);
        return row;
      },
      findMany: async ({ where } = {}) =>
        Array.from(state.orders.values()).filter((row) => matchesWhere(row, where)),
      deleteMany: async ({ where } = {}) => {
        const matchedIds = Array.from(state.orders.values())
          .filter((row) => matchesWhere(row, where))
          .map((row) => row.id);

        for (const id of matchedIds) {
          state.orders.delete(id);
        }

        return { count: matchedIds.length };
      },
    },
    orderMessage: {
      deleteMany: async ({ where } = {}) => {
        const before = state.orderMessages.length;
        state.orderMessages = state.orderMessages.filter((row) => !matchesWhere(row, where));
        return { count: before - state.orderMessages.length };
      },
    },
    orderStage: {
      deleteMany: async ({ where } = {}) => {
        const before = state.orderStages.length;
        state.orderStages = state.orderStages.filter((row) => !matchesWhere(row, where));
        return { count: before - state.orderStages.length };
      },
    },
  };

  return {
    ...db,
    $transaction: async (operations) =>
      typeof operations === 'function' ? operations(db) : Promise.all(operations),
    $disconnect: async () => undefined,
    __reset: () => {
      state = createTestDbState();
    },
  };
}

export function getDb() {
  if (process.env.NODE_ENV === 'test') {
    if (!_testDb) {
      _testDb = createTestDb();
    }
    return _testDb;
  }

  if (!_client) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL 未配置，无法初始化数据库连接。');
    }

    if (!_pool) {
      _pool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });
    }

    _client = new PrismaClient({
      adapter: new PrismaPg(_pool),
      log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['warn', 'error'],
    });
  }
  return _client;
}

// 用于进程退出时优雅断开连接
export async function disconnectDb() {
  if (_testDb) {
    _testDb = undefined;
  }

  if (_client) {
    await _client.$disconnect();
    _client = undefined;
  }

  if (_pool) {
    await _pool.end();
    _pool = undefined;
  }
}

export function resetTestDb() {
  if (process.env.NODE_ENV !== 'test') {
    return;
  }

  if (!_testDb) {
    _testDb = createTestDb();
    return;
  }

  _testDb.__reset();
}
