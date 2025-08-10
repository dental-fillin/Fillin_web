import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';
import { JobOpeningSchema } from '@/lib/schema';

async function requireAdmin(request, resForSession) {
  const session = await getIronSession(request, resForSession, sessionOptions);
  return session.user?.role === 'admin';
}

export async function POST(request) {
  const res = new NextResponse();
  const ok = await requireAdmin(request, res);
  if (!ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let json;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = JobOpeningSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        issues: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  const payload = parsed.data;

  const { data, error } = await supabase
    .from('job_openings')
    .insert([payload])
    .select('job_id, created_at')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    {
      message: 'Job opening saved successfully.',
      id: data.job_id,
      created_at: data.created_at,
    },
    { status: 201, headers: { 'Cache-Control': 'no-store' } }
  );
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') || '25', 10), 100);
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('job_openings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let nextCursor = null;
  let items = data;
  if (data.length === limit + 1) {
    const last = data[data.length - 2];
    nextCursor = last.created_at;
    items = data.slice(0, -1);
  }

  return NextResponse.json({ items, nextCursor, limit }, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export async function DELETE(request) {
  const res = new NextResponse();
  const ok = await requireAdmin(request, res);
  if (!ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { job_id } = await request.json();
    if (!job_id) {
      return NextResponse.json({ error: 'Missing job_id' }, { status: 400 });
    }

    const { error } = await supabase
      .from('job_openings')
      .delete()
      .eq('job_id', job_id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return new NextResponse(null, {
      status: 204,
      headers: { 'Cache-Control': 'no-store', ...Object.fromEntries(res.headers) },
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
