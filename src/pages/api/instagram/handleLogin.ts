import { NextApiRequest, NextApiResponse } from "next";
import { getSLToken } from "@/services/instagram/getSLToken";
import { getLLToken } from "@/services/instagram/getLLToken";
import { sendLLToken } from "@/services/instagram/sendLLToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code;
  const state = req.query.state as string;
  const id = state.split("#_")[0];
  try {
    if (code) {
      const SLToken = await getSLToken(code as string);
      if (SLToken.data) {
        const LLToken = await getLLToken(SLToken);
        if (LLToken.access_token) {
          const sendToken = await sendLLToken(id, LLToken);
          return res.status(200).json({
            message: "token has been sent!",
            LLToken,
            sendToken,
          });
        } else if (!LLToken.access_token) {
          return res.status(901).json({ messsage: "didnt get the LLToken!" });
        }
      } else if (!SLToken.data) {
        return res.status(901).json({ messsage: "didnt get the SLToken!" });
      }
    } else if (!code) {
      return res.status(900).json({ message: "no code" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}
