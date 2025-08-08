import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';

export async function POST(request) {
  const res = NextResponse.json({ message: 'Logged out' });
  const session = await getIronSession(request, res, sessionOptions);
  session.destroy();
  return res;
}
