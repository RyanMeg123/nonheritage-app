import { getBootstrapPayload } from '../../service.js';
import { json } from '../response.js';

export async function handleBootstrapRoute({ req, traceId, url }) {
  if (req.method !== 'GET' || url.pathname !== '/v1/bootstrap') {
    return null;
  }

  return json({ data: getBootstrapPayload(), traceId });
}
