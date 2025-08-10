import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/sessionOptions';

export async function middleware(request) {
  const url = request.nextUrl;
  if (!url.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  try {
    const session = await getIronSession(request, response, sessionOptions);
    if (session?.user?.role === 'admin') {
      return response;
    }
  } catch (e) {
    console.error('Session read failed in middleware:', e);
  }
  return NextResponse.redirect(new URL('/admin-login', url));
}

export const config = {
  matcher: ['/admin/:path*'],
};
