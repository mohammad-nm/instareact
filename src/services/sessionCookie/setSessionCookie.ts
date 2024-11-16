"use server";

import { cookies } from "next/headers";

const cookieStore = cookies();

export default async function setCookieSession(session: string) {
  cookieStore.set("sessionCookie", session, {
    maxAge: 864000,
  });
}
