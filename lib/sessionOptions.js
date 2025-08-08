export const sessionOptions = {
  password: process.env.SESSION_PASSWORD,   // 32+ chars
  cookieName: 'admin_session',
  cookieOptions: {
    httpOnly: true,
    maxAge: 60 * 60,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  },
};
