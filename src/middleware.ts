import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "@/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const whiteList = [
  "/_next",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/icon.svg",
  "apple-icon.png",
	"f4136e75f1c84ebdbfc8cb8119d81d28.txt",
];

function WhiteListCheck(url: string) {
  for (let i = 0; i < whiteList.length; i++) {
    if (url.startsWith(whiteList[i])) return true;
  }
  return false;
}

const cookieName = "i18next";

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !WhiteListCheck(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(String(req.headers.get("referer")));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
