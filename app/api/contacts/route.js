import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';
import { ContactSchema } from '@/lib/schema';

async function requireAdmin(request, resForSession) {
  const session = await getIronSession(request, resForSession, sessionOptions);
  return session.user?.role === 'admin';
}

export async function GET(request) {
  const res = new NextResponse(); 
  const ok = await requireAdmin(request, res);
  if (!ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') || '25', 10), 100);
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('contacts')
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

  return new NextResponse(JSON.stringify({ items, nextCursor, limit }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...Object.fromEntries(res.headers),
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const issues = parsed.error.flatten();
      return NextResponse.json(
        { error: 'Validation failed', issues },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, phone, subject, message }])
      .select('id, created_at')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: 'Contact submitted successfully',
        id: data.id,
        created_at: data.created_at,
      },
      { status: 201, headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const res = new NextResponse();
  const ok = await requireAdmin(request, res);
  if (!ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: 'Missing contact id' }, { status: 400 });
  }

  const { error } = await supabase.from('contacts').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return new NextResponse(null, {
    status: 204,
    headers: { 'Cache-Control': 'no-store', ...Object.fromEntries(res.headers) },
  });
}
