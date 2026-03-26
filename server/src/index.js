import 'dotenv/config';
import http from 'node:http';

import { config } from './config.js';
import { disconnectDb } from './db.js';
import { handleRequest } from './http.js';

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

server.listen(config.port, () => {
  console.log('server listening on http://localhost:' + config.port);
});

// 优雅退出：断开 Prisma 连接
async function shutdown() {
  server.close();
  await disconnectDb();
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
