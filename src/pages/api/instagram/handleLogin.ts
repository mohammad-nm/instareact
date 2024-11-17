import { NextApiRequest, NextApiResponse } from "next";
import { getSLToken } from "../../../services/instagram/getSLToken";
import { getLLToken } from "../../../services/instagram/getLLToken";
import { sendInstaInfo } from "../../../services/instagram/sendInstaInfo";
import getProfile from "../../../services/instagram/getProfile";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getSend = () => {};
  const code = req.query.code;
  const state = (req.query.state as string).replace(/#_$/, "");
  const id = state;
  if (!code) {
    return res.status(400).json({ message: "no code" });
  }

  const SLToken = await getSLToken(code as string);
  if (!SLToken.access_token) {
    return res.status(400).json({
      messsage: "didnt get the SLToken!",
      SLToken: SLToken,
    });
  }

  const LLToken = await getLLToken(SLToken.access_token as string);
  if (!LLToken.access_token) {
    const instaInfo = await getProfile(SLToken.access_token);
    if (!instaInfo.user_id) {
      return res.status(400).json({
        message: "didnt get the instaInfo",
        instaInfo,
        SLToken,
        LLToken,
      });
    }

    const instagram = {
      access_token: SLToken.access_token,
      expires_in: SLToken.expires_in,
      token_type: SLToken.token_type,
      account_type: instaInfo.account_type,
      profile_picture_url: instaInfo.profile_picture_url,
      user_id: instaInfo.user_id,
      username: instaInfo.username,
    };
    const sendToSupa = await sendInstaInfo(id, instagram);
    if (sendToSupa) {
      res.writeHead(302, {
        Location: "https://instareact-beta.vercel.app/main",
      });
      res.end();
    }
    if (!sendToSupa) {
      return res.status(400).json({
        message: "error in sendtoken",
      });
    }
  }

  const instaInfo = await getProfile(LLToken.access_token);
  if (!instaInfo.user_id) {
    return res.status(400).json({
      message: "didnt get the instaInfo",
      instaInfo,
      SLToken,
      LLToken,
    });
  }
  try {
    const instagram = {
      access_token: LLToken.access_token,
      expires_in: LLToken.expires_in,
      token_type: LLToken.token_type,
      account_type: instaInfo.account_type,
      profile_picture_url: instaInfo.profile_picture_url,
      user_id: instaInfo.user_id,
      username: instaInfo.username,
    };
    const sendToSupa = await sendInstaInfo(id, instagram);
    if (sendToSupa) {
      res.writeHead(302, {
        Location: "https://instareact-beta.vercel.app/main",
      });
      res.end();
    }
  } catch (error) {
    return res.status(400).json({
      message: "error in sendtoken",
      error: error,
    });
  }
}
