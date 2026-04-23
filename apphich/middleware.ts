import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/browse", "/watch", "/my-list"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const hasSessionToken =
    !!request.cookies.get("sb-access-token")?.value ||
    !!request.cookies.get("sb-refresh-token")?.value;

  if (!hasSessionToken) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/auth/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/browse/:path*", "/watch/:path*", "/my-list/:path*"],
};
