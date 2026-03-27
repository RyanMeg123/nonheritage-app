import { generateCraftPlan, getArtisanMatches, getCraftPlan } from '../../service.js';
import { validatePlanRequest } from '../../validators.js';
import { parseJsonBody } from '../request-body.js';
import { json } from '../response.js';

export async function handleCraftPlansRoute({ req, traceId, url }) {
  if (req.method === 'POST' && url.pathname === '/v1/craft-plans') {
    const body = await parseJsonBody(req);
    validatePlanRequest(body);
    return json({ data: await generateCraftPlan(body), traceId }, 201);
  }

  if (req.method === 'GET' && url.pathname.startsWith('/v1/craft-plans/')) {
    const parts = url.pathname.split('/').filter(Boolean);
    const planId = parts[2];
    const child = parts[3];

    if (parts.length === 3 && planId) {
      return json({ data: await getCraftPlan(planId), traceId });
    }

    if (parts.length === 4 && child === 'matches' && planId) {
      return json({ data: await getArtisanMatches(planId), traceId });
    }
  }

  return null;
}
