import http from 'node:http';

import { handleRequest } from '../src/http.js';

export function startTestServer() {
  const server = http.createServer((req, res) => {
    handleRequest(req, res);
  });

  return new Promise((resolve) => {
    server.listen(0, () => {
      const address = server.address();
      resolve({
        server,
        baseUrl: 'http://127.0.0.1:' + address.port,
      });
    });
  });
}
