import getProfile from "@/services/instagram/getProfile";

import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const LLToken: string = req.body.LLToken;

  if (LLToken) {
    const data = await getProfile(LLToken);

    if (data) {
      res.status(200).json(data);
    } else res.status(800).json({ data: data });
  } else
    res.status(800).json({ error: "error with LLToken:", LLToken: LLToken });
}
