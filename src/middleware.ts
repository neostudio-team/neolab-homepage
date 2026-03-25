import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return;
  }

  // /admin 경로: 로그인 페이지 제외하고 쿠키 확인
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return;
    const loggedIn = request.cookies.get("admin_logged_in")?.value;
    if (!loggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return;
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  const locale = i18n.defaultLocale;
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|.*\\.).*)"],
};
