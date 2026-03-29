import { getFeaturedCases } from '../../service.js';
import { json } from '../response.js';

export async function handleHomeRoute({ req, traceId, url }) {
  if (req.method !== 'GET' || url.pathname !== '/v1/home/featured-cases') {
    return null;
  }

  return json({ data: await getFeaturedCases(), traceId });
}
