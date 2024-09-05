import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "../../../services/authService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      // Call the signIn function from authService
      const { user, session } = await signIn(email, password);
      return res
        .status(200)
        .json({ message: "Signed in successfully!", user, session });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
