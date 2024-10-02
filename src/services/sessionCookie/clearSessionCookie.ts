"use server";

import { cookies } from "next/headers";

const cookieStore = cookies();
export default async function clearSessionCookie() {
  cookieStore.delete("session");
}
