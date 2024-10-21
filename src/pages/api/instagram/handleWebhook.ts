import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //handling verification
  if (req.method === "GET") {
    const {
      "hub.mode": mode,
      "hub.challenge": challenge,
      "hub.verify_token": verifyToken,
    } = req.query;
    if (mode && process.env.WEBHOOK_VERIFICATION_TOKEN === verifyToken) {
      res.status(200).json(challenge);
    } else {
      res
        .status(500)
        .json({ error: "verify token invalid!:", verify_token: verifyToken });
    }
  } //handling notifs
  else if (req.method === "POST") {
  }
}
