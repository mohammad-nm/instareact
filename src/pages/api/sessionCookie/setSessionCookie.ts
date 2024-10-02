// pages/api/set-cookie.js
import cookie from "cookie";

export default function handler(req, res) {
  // Set a cookie named 'token' with value '12345' that expires in 1 hour
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "12345", {
      httpOnly: true, // Prevent client-side JS access
      secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      maxAge: 3600, // Expires in 1 hour
      path: "/", // Cookie is available on all routes
    })
  );

  res.status(200).json({ message: "Cookie set" });
}
