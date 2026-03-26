import { PrismaClient } from './generated/prisma/index.js';

// 单例：避免开发热重载时创建多个连接
let _client;

export function getDb() {
  if (!_client) {
    _client = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['warn', 'error'],
    });
  }
  return _client;
}

// 用于进程退出时优雅断开连接
export async function disconnectDb() {
  if (_client) {
    await _client.$disconnect();
    _client = undefined;
  }
}
