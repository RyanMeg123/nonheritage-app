import 'dotenv/config';
import http from 'node:http';

import { config } from './config.js';
import { disconnectDb } from './db.js';
import { handleRequest } from './http.js';

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

const host = process.env.HOST ?? '0.0.0.0';

server.listen(config.port, host, () => {
  console.log(`server listening on http://${host}:${config.port}`);
});

// 优雅退出：断开 Prisma 连接
async function shutdown() {
  server.close();
  await disconnectDb();
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
