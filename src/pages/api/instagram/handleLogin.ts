import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: "Authorization code not provided" });
  }
  if (code) {
    console.log(code);
  }
}
