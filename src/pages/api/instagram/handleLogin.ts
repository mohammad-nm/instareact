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
      const SLToken = await getSLToken(code as string);
      if (!SLToken.data) {
        return res.status(400).json({ messsage: "didnt get the SLToken!" });
      }
      if (SLToken.data) {
        const LLToken = await getLLToken(SLToken);
        if (!LLToken.access_token) {
          return res.status(400).json({ messsage: "didnt get the LLToken!" });
        }
        if (LLToken.access_token) {
          const sendToken = await sendLLToken(id, LLToken);
          if (sendToken) {
            return res.status(200).json({
              message: "token has been sent!",
              LLToken,
              sendToken,
            });
          }
        }
      }
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
