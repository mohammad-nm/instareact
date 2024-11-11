"use server";
import { cookies } from "next/headers";
const cookieStore = cookies();
export default async function getSessionCookie() {
  const session = cookieStore.get("sessionCookie");
  return session ? JSON.parse(session.value) : null;
}
