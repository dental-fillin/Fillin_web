import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../../lib/sessionOptions';

export async function POST(request) {
  const { username, password } = await request.json();

  const validUser = process.env.ADMIN_USERNAME || 'admin';
  const validPass = process.env.ADMIN_PASSWORD || 'admin123';

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const res = NextResponse.json({ message: 'Logged in' });

  const session = await getIronSession(request, res, sessionOptions);

  session.user = { role: 'admin' };
  await session.save();

  return res;
}
