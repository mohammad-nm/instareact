import { NextApiRequest, NextApiResponse } from "next";
import { handleGoogleResponse } from "../../../services/authService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { credential } = req.body;
    const data = await handleGoogleResponse(credential);

    if (!data) {
      return res.status(400).json({ message: "Invalid credentials", data });
    }

    return res.status(200).json({ message: "Signed in successfully!", data });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
