export default function handler(req: any, res: any) {
  res.setHeader("Set-Cookie", "session=; Max-Age=0; Path=/; HttpOnly"); // Clear the session cookie
  res.status(200).json({ message: "Logged out successfully" });
}
