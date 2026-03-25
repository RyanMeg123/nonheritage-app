import http from 'node:http';

import { config } from './config.js';
import { handleRequest } from './http.js';

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

server.listen(config.port, () => {
  console.log('server listening on http://localhost:' + config.port);
});
