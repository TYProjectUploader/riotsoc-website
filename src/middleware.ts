import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const legacyRedirects: Record<string, string> = {
  "/home": "/",
  "/About": "/about",
  "/Events": "/events",
  "/Sponsors": "/sponsors",
};

export function middleware(request: NextRequest) {
  const destination = legacyRedirects[request.nextUrl.pathname];

  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }
}

export const config = {
  matcher: ["/home", "/About", "/Events", "/Sponsors"],
};
