import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';

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

  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...Object.fromEntries(res.headers),
    },
  });
}

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json();

  if (!name || !email || !message || !phone) {
    return NextResponse.json(
      { error: 'Missing required fields: name, email, phone, message' },
      { status: 400 }
    );
  }

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
