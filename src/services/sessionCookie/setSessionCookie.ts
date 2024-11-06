"use server";

import { cookies } from "next/headers";

const cookieStore = cookies();

export default async function setCookieSession(session: string) {
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 864000,
    sameSite: "strict",
  });
}
