"use server";
import { cookies } from "next/headers";
const cookieStore = cookies();

export default async function getSessionCookie() {
  try {
    const session = cookieStore.get("sessionCookie");
    if (session === undefined) return null;

    return JSON.parse(session.value);
  } catch (error) {
    console.error("Error parsing session cookie:", error);
    return null;
  }
}
