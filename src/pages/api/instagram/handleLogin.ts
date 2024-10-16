// import { NextApiRequest, NextApiResponse } from "next";
// import router from "next/router";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { code } = req.query;
//   if (!code) {
//     return res.status(400).json({ error: "Authorization code not provided" });
//   }
//   if (code) {
//     console.log(code);
//     router.push("/main");
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import {
  getShortLivedToken,
  getLongLivedToken,
} from "../../../services/instagram/handleLogin";

import { sendToken } from "@/services/instagram/sendToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, state } = req.query;

  console.log(code, state);
  if (!code) {
    return res.status(400).json({ error: "Authorization code not provided" });
  }
  if (!state) {
    return res.status(400).json({ error: "State parameter not provided" });
  }

  try {
    // Step 1: Get the short-lived access token
    console.log(code);
    const shortLivedTokenData = await getShortLivedToken(code as string);
    console.log(shortLivedTokenData);
    // Step 2: Exchange for the long-lived token
    const longLivedTokenData = await getLongLivedToken(
      shortLivedTokenData.access_token
    );
    console.log(longLivedTokenData);

    const saveToken: any = await sendToken(state as string, longLivedTokenData);
    // Step 3: Return the long-lived access token data
    return res.status(200).json({ longLivedTokenData, saveToken });
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve access token" });
  }
}
