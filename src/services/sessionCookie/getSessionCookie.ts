"use server";
import { cookies } from "next/headers";
const cookieStore = cookies();

export default async function getSessionCookie() {
  const session = cookieStore.get("sessionCookie");
  if (session === undefined) return null;

  try {
    return JSON.parse(session.value);
  } catch (error) {
    console.error("Error parsing session cookie:", error);
    return null;
  }
}
