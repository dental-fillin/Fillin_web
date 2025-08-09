import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';

async function requireAdmin(request, resForSession) {
  const session = await getIronSession(request, resForSession, sessionOptions);
  return session.user?.role === 'admin';
}

export async function POST(request) {
  const payload = await request.json();

  const res = new NextResponse();
  const ok = await requireAdmin(request, res);
  if (!ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

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
  
  const { data, error } = await supabase
    .from('job_openings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, {
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
