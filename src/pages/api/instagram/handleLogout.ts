import { logout } from "@/services/instagram/logout";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }

  if (req.method === "POST") {
    try {
      const response = await logout(id);
      if (response.success === true) {
        return res
          .status(200)
          .json({ message: "Logout successful", data: response });
      } else {
        return res.status(500).json({ error: "Failed to log out" });
      }
    } catch (error) {
      console.error("Error in logout:", error);
      return res.status(500).json({ error: "Server error during logout" });
    }
  }
}
