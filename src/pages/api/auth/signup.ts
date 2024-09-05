import { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "../../../services/authService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Perform server-side validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      // Call the signUp function from authService
      const user = await signUp(email, password);
      return res
        .status(200)
        .json({ message: "User created successfully!", user });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
