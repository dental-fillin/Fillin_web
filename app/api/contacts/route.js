import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';
import { ContactSchema } from '@/lib/schema';
import nodemailer from 'nodemailer';

function toBoolean(value) {
  return String(value).toLowerCase() === 'true';
}

async function sendContactNotification({ name, email, phone, subject, message }) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_NOTIFY_TO,
    CONTACT_NOTIFY_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_NOTIFY_TO) {
    return { attempted: false, sent: false, reason: 'email_not_configured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: toBoolean(SMTP_SECURE),
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: CONTACT_NOTIFY_FROM || SMTP_USER,
      to: CONTACT_NOTIFY_TO,
      replyTo: email,
      subject: `New contact form submission${subject ? `: ${subject}` : ''}`,
      text: [
        'You received a new contact form submission.',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Subject: ${subject || 'Not provided'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return { attempted: true, sent: true };
  } catch (error) {
    return { attempted: true, sent: false, reason: error.message };
  }
}

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

    const emailResult = await sendContactNotification({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (emailResult.attempted && !emailResult.sent) {
      console.error('Failed to send contact notification email:', emailResult.reason);
    }

    return NextResponse.json(
      {
        message: 'Contact submitted successfully',
        id: data.id,
        created_at: data.created_at,
        email_sent: emailResult.sent,
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
