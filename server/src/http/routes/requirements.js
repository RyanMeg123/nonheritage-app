import { submitRequirement } from '../../service.js';
import { validateRequirementSubmission } from '../../validators.js';
import { parseJsonBody } from '../request-body.js';
import { json } from '../response.js';

export async function handleRequirementsRoute({ req, traceId, url }) {
  if (req.method !== 'POST' || url.pathname !== '/v1/requirements') {
    return null;
  }

  const body = await parseJsonBody(req);
  validateRequirementSubmission(body);
  return json({ data: await submitRequirement(body), traceId }, 201);
}
