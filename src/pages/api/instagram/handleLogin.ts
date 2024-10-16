import { getLLToken } from "@/services/instagram/getLLToken";
import { getSLToken } from "@/services/instagram/getSLToken";
import { NextApiRequest, NextApiResponse } from "next";
import { sendLLToken } from "@/services/instagram/sendLLToken";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.code) {
    const code = req.query.code;
    const SLToken = await getSLToken(code as string);
    if (SLToken.data) {
      const LLToken = await getLLToken(SLToken);
      if (LLToken.access_token) {
        const sendToken = await sendLLToken(req.body.state, LLToken);
        console.log(sendToken);
      } else if (!LLToken.access_token) {
      }
    } else if (!SLToken.data) {
    }
  } else if (req.query.error) {
  }
}
