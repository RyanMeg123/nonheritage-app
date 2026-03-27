import { captureClientErrorEnvelope } from '../../observability.js';
import { validateClientErrorEnvelope } from '../../validators.js';
import { parseJsonBody } from '../request-body.js';
import { json } from '../response.js';

export async function handleClientErrorsRoute({ req, traceId, url }) {
  if (req.method !== 'POST' || url.pathname !== '/v1/client-errors') {
    return null;
  }

  const body = await parseJsonBody(req);
  validateClientErrorEnvelope(body);
  captureClientErrorEnvelope(body);
  return json({ data: { accepted: true }, traceId }, 202);
}
