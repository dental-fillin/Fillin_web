import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  if (url.pathname.startsWith('/admin')) {
    const hasCookie = request.cookies.get('admin_session'); 
    if (!hasCookie) {
      return NextResponse.redirect(new URL('/admin-login', url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
