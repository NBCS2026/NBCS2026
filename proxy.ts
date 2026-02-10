import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /transactions or /[locale]/transactions to home page
  if (
    pathname === "/transactions" ||
    pathname === "/en/transactions" ||
    pathname === "/fr/transactions"
  ) {
    const locale = pathname.startsWith("/fr") ? "fr" : "en";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Use the default next-intl middleware for all other routes
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
