import { NextRequest, NextResponse } from 'next/server';
import { CSRF_COOKIE, CSRF_HEADER } from '@/lib/csrf-const';

/**
 * Объединённый middleware:
 *   1. CSRF-чек для всех mutating /api/* роутов.
 *   2. Прокидывание pathname в request header — i18n resolver
 *      использует его, чтобы форсить en на /login и /app/*
 *      (форма регистрации и приложение всегда на английском,
 *      cookie pc_locale игнорируется в этих зонах).
 *
 * Исключения CSRF:
 *   - /api/rfs/* — bearer-токен (агент → master), не cookie-based
 */
export const config = {
  matcher: ['/api/:path*', '/login', '/app/:path*'],
};

const SKIP_PATHS = ['/api/rfs/'];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Не-API пути — прокидываем x-pathname для i18n resolver
  if (!path.startsWith('/api/')) {
    const reqHeaders = new Headers(req.headers);
    reqHeaders.set('x-pathname', path);
    return NextResponse.next({ request: { headers: reqHeaders } });
  }

  // Дальше — CSRF логика для /api/*
  const method = req.method.toUpperCase();
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') return NextResponse.next();
  for (const skip of SKIP_PATHS) {
    if (path.startsWith(skip)) return NextResponse.next();
  }

  const cookie = req.cookies.get(CSRF_COOKIE)?.value;
  const header = req.headers.get(CSRF_HEADER);
  if (!cookie || !header || cookie !== header) {
    return new NextResponse(
      JSON.stringify({ error: 'CSRF token mismatch — get GET /api/auth first to obtain pc_csrf cookie' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } },
    );
  }
  return NextResponse.next();
}
