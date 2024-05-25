import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { IUser } from "./types";

type Role = keyof typeof roleBasedRoutes;

const commonRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/travel-request",
];
const roleBasedRoutes = {
  ADMIN: [/^\/dashboard\/admin/],
  USER: [/^\/dashboard\/user/],
};
const authRoutes = ["/auth/login", "/auth/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // get authToken from cookies
  const token = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;

  console.log({ token, pathname });

  // if token is not present redirect to login page
  if (!token) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  if (token && commonRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // get user role from token
  let decodedToken;
  decodedToken = jwtDecode(token) as IUser;
  const userRole = decodedToken?.role;

  /// allow user to access path according to their role
  const allowedRoutes = roleBasedRoutes[userRole as Role];

  if (userRole && allowedRoutes) {
    const isAllowed = allowedRoutes.some((route) => pathname.match(route));
    if (isAllowed) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*", "/travel-request/:path*"],
};
