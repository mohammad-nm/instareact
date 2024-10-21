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
      res.status(200).send(challenge);
    } else {
      res
        .status(403)
        .json({ error: "verify token invalid!:", verify_token: verifyToken });
    }
  } else if (req.method === "POST") {
    //handling notifs
  }
}
