"use server";

import { cookies } from "next/headers";

const cookieStore = cookies();

export default async function setCookieSession(session: string) {
  cookieStore.set("sessionCookie", session, {
    httpOnly: true,
    secure: true,
    maxAge: 864000,
    sameSite: "strict",
  });
}
