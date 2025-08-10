import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const started = Date.now();
  let dbOk = false;
  try {
    const { error } = await supabase.from('job_openings').select('job_id').limit(1);
    dbOk = !error;
  } catch {
    dbOk = false;
  }
  const durationMs = Date.now() - started;
  const status = dbOk ? 'ok' : 'degraded';
  return NextResponse.json({ status, db: dbOk, durationMs, timestamp: new Date().toISOString() }, { status: dbOk ? 200 : 500 });
}
