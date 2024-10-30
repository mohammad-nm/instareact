import { NextApiRequest, NextApiResponse } from "next";
import { getSLToken } from "../../../services/instagram/getSLToken";
import { getLLToken } from "../../../services/instagram/getLLToken";
import { sendInstaInfo } from "../../../services/instagram/sendInstaInfo";
import getProfile from "../../../services/instagram/getProfile";
import { redirect } from "next/navigation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code;
  const state = (req.query.state as string).replace(/#_$/, "");
  const id = state;
  try {
    if (!code) {
      return res.status(400).json({ message: "no code" });
    }
    if (code) {
      try {
        const SLToken = await getSLToken(code as string);
        console.log(SLToken);
        if (!SLToken.access_token) {
          return res.status(400).json({
            messsage: "didnt get the SLToken!",
            SLToken: SLToken.access_token,
          });
        }
        if (SLToken.access_token) {
          try {
            const LLToken = await getLLToken(SLToken.access_token as string);
            console.log(LLToken);
            if (!LLToken.access_token) {
              return res
                .status(400)
                .json({ messsage: "didnt get the LLToken!", LLToken });
            }
            if (LLToken.access_token) {
              try {
                const instaInfo = await getProfile(LLToken.access_token);
                if (instaInfo.user_id) {
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
              } catch (error) {
                return res.status(400).json({
                  message: "error in instaInfo",
                  error: error,
                });
              }
            }
          } catch (error) {
            return res.status(400).json({
              message: "error in LLtoken",
              error: error,
              SLToken: SLToken,
            });
          }
        }
      } catch (error) {
        return res
          .status(400)
          .json({ message: "error in sltoken", error: error });
      }
    }
  } catch (error) {
    return res.status(400).json({ message: "did nothing", error: error });
  }
}
