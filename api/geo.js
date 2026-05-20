import { jsonResponse } from './_json-response.js';

export const config = { runtime: 'edge' };

export default function handler(req) {
  return jsonResponse({ country: 'MY' }, 200, {
    'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-if-error=3600',
    'Access-Control-Allow-Origin': '*',
  });
}
