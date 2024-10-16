import { getLLToken } from "@/services/instagram/getLLToken";
import { getSLToken } from "@/services/instagram/getSLToken";
import { NextApiRequest, NextApiResponse } from "next";
import { sendLLToken } from "@/services/instagram/sendLLToken";
import { error } from "console";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code;
  try {
    if (req.query.code) {
      const SLToken = await getSLToken(code as string);
      if (SLToken.data) {
        const LLToken = await getLLToken(SLToken);
        if (LLToken.access_token) {
          const sendToken = await sendLLToken(
            req.query.state as string,
            LLToken
          );
          console.log(sendToken);
        } else if (!LLToken.access_token) {
          return res.status(901).json({ messsage: "didnt get the LLToken!" });
        }
      } else if (!SLToken.data) {
        return res.status(901).json({ messsage: "didnt get the SLToken!" });
      }
    } else if (!req.query.code) {
      return res.status(900).json({ message: "no code" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}
