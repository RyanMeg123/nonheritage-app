import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

import { PrismaClient } from './generated/prisma/index.js';

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
  };
}

function createTestDb() {
  let state = createTestDbState();

  return {
    user: {
      create: async ({ data }) => {
        const row = {
          ...data,
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
      findMany: async ({ where }) =>
        state.artisanMatches
          .filter((item) => item.planId === where.planId)
          .sort((left, right) => left.rank - right.rank),
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
    },
    $transaction: async (operations) => Promise.all(operations),
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
