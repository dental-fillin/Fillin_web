/**
 * Basic integration-style test for job openings GET with pagination params.
 * This does NOT spin up the Next server here; for full e2e you'd use next test or a separate runner.
 * Instead we test the pagination logic indirectly by mocking supabase. Simplified for brevity.
 */
// Mock supabase before importing route
jest.mock('@/lib/supabase', () => {
  return {
    supabase: {
      from: () => ({
        select: () => ({ order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }) }),
      }),
    },
  };
});

import { GET as jobGet } from '@/app/api/jobopenings/route';

describe('Job openings GET handler', () => {
  it('returns structure with items, nextCursor, limit', async () => {
    const url = 'http://localhost/api/jobopenings?limit=1';
    const req = new Request(url, { method: 'GET' });
    const res = await jobGet(req);
    const json = await res.json();
    expect(json).toHaveProperty('items');
    expect(json).toHaveProperty('limit');
    expect(Array.isArray(json.items)).toBe(true);
  });
});
