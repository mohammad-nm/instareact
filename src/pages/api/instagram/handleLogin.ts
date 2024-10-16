import { NextApiRequest, NextApiResponse } from "next";
import {
  getShortLivedToken,
  getLongLivedToken,
} from "@/services/instagram/handleLogin";

import { sendToken } from "@/services/instagram/sendToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("API handler called");
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Authorization code not provided" });
  }
  if (!state) {
    return res.status(400).json({ error: "State parameter not provided" });
  }

  try {
    const shortLivedTokenData = await getShortLivedToken(code as string);
    const longLivedTokenData = await getLongLivedToken(
      shortLivedTokenData.access_token
    );
    const saveToken: any = await sendToken(state as string, longLivedTokenData);
    console.log(longLivedTokenData);
    return res.status(200).json({ longLivedTokenData, saveToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to retrieve access token" });
  }
}
