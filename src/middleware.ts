import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get("sessionCookie");
  if (sessionCookie === undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/main"],
};
