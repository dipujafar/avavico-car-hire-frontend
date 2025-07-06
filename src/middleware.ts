import { authRoutes } from "@/lib/authRoutes";
import { NextResponse } from "next/server";


export default function middleware(req: any) {
  const { nextUrl } = req;
  const isLoggedIn = req.cookies.get("avavico-car-hire-access-token")?.value;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isLoggedIn && !isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/user/:path*",
    "/vendor/:path*"
  ],
};