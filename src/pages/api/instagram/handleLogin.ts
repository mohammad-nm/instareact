import { NextApiRequest, NextApiResponse } from "next";
import { getSLToken } from "../../../services/instagram/getSLToken";
import { getLLToken } from "../../../services/instagram/getLLToken";
import { sendLLToken } from "../../../services/instagram/sendLLToken";

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
        if (!SLToken.access_token) {
          return res.status(400).json({
            messsage: "didnt get the SLToken!",
            SLToken: SLToken.access_token,
          });
        }
        if (SLToken.access_token) {
          try {
            const LLToken = await getLLToken(SLToken.access_token);
            console.log(LLToken);
            if (!LLToken.access_token) {
              return res
                .status(400)
                .json({ messsage: "didnt get the LLToken!", LLToken });
            }
            if (LLToken.access_token) {
              try {
                const sendToken = await sendLLToken(id, LLToken.access_token);
                if (sendToken) {
                  return res.status(200).json({
                    message: "token has been sent!",
                    LLToken,
                    sendToken,
                  });
                }
              } catch (error) {
                return res
                  .status(400)
                  .json({ message: "error in sendtoken", error: error });
              }
            }
          } catch (error) {
            return res.status(400).json({
              message: "error in LLtoken",
              error: error,
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
