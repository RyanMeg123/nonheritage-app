import { json } from '../response.js';

export async function handleHealthRoute({ req, traceId, url }) {
  if (req.method !== 'GET' || url.pathname !== '/health') {
    return null;
  }

  return json({ status: 'ok', traceId });
}
