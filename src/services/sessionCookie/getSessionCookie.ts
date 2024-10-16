"use server";
import { cookies } from "next/headers";
const cookieStore = cookies();
export default async function getSessionCookie() {
  const session = cookieStore.get("session");
  return session ? session.value : null;
}
