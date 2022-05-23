import { NextRequest, NextResponse } from "next/server";

import { AUTH_PAGE_PATHS } from "src/constants/constants";
import { USER_TOKEN } from "src/helpers/storage";

const PUBLIC_FILE = /\.(.*)$/;
const STATIC_FILE = /^\/(assets)\/(.*)$/;

export default function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes("/api/") &&
    request.nextUrl.locale === "default";

  const { cookies } = request;
  const { pathname } = request.nextUrl;
  if (!STATIC_FILE.test(pathname) && pathname !== "/favicon.ico") {
    if (!AUTH_PAGE_PATHS.includes(pathname) && !cookies[USER_TOKEN]) {
      return NextResponse.redirect("/login");
    }
    if (AUTH_PAGE_PATHS.includes(pathname) && cookies[USER_TOKEN]) {
      return NextResponse.redirect("/");
    }
  }

  return shouldHandleLocale ? NextResponse.redirect(`/ja${request.nextUrl.href}`) : undefined;
}
