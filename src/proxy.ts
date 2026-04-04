import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const PROTECTED_PREFIXES = ['/jobs', '/content'];

const ROLE_MAP: Record<string, string[]> = {
  '/jobs': ['nurse', 'jobs_admin', 'admin'],
  '/content': ['blogger', 'content_admin', 'admin'],
};

export default async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));

  if (isProtected) {
    let user = null;
    let clearAuthCookies = false;
    try {
      const { data, error } = await supabase.auth.getUser();
      user = data.user;
      if (error) {
        clearAuthCookies = true;
      }
    } catch {
      clearAuthCookies = true;
    }

    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.search = '';
      const redirectResponse = NextResponse.redirect(url);
      if (clearAuthCookies) {
        request.cookies.getAll()
          .filter(({ name }) => name.startsWith('sb-'))
          .forEach(({ name }) => redirectResponse.cookies.delete(name));
      }
      return redirectResponse;
    }

    const role = (user.user_metadata?.role as string) || 'nurse';

    const matchedPrefix = PROTECTED_PREFIXES.find((p) => pathname.startsWith(p));
    if (matchedPrefix) {
      const allowedRoles = ROLE_MAP[matchedPrefix];
      if (!allowedRoles?.includes(role)) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        url.search = '';
        return NextResponse.redirect(url);
      }
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
