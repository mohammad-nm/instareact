import { redis } from "@/utils/redisClient";
import axios, { AxiosResponse } from "axios";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

// Add this interface at the top of the file
interface React {
  lookFor: string[];
  active: boolean;
  reactTo: string[];
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    //handling webhook handler verification
    const {
      "hub.mode": mode,
      "hub.challenge": challenge,
      "hub.verify_token": verifyToken,
    } = req.query || {};
    if (mode && process.env.WEBHOOK_VERIFICATION_TOKEN === verifyToken) {
      res.status(200).send(challenge);
    } else {
      res
        .status(403)
        .json({ error: "verify token invalid!:", verify_token: verifyToken });
    }
  } else if (req.method === "POST") {
    try {
      if (!req.body.entry[0].messaging && !req.body.entry[0].changes) {
        return res
          .status(400)
          .json({ message: "No message or comment found!" });
      }
      // Check if message exists
      if (req.body.entry[0].messaging) {
        const recipentID: string = req.body.entry[0].id;
        const senderID: string = req.body.entry[0].messaging[0].sender.id;
        const messageText: string = req.body.entry[0].messaging[0].message.text;
        const userInfo: AxiosResponse = await axios.post(
          "https://instareact-beta.vercel.app/api/getUserInfo",
          { id: recipentID }
        );
        const data: {
          instagram: {
            instagram: { access_token: string };
          };
          reacts: React[];
        } = userInfo.data.data[0];

        console.log("data:", data);
        const access_token: string = data.instagram.instagram.access_token;
        const reacts: React[] = data.reacts;
        const foundReact: React | undefined = reacts.find((item: React) => {
          return (
            item.lookFor.includes(messageText) &&
            item.active &&
            item.reactTo.includes("DM")
          );
        });

        if (!foundReact?.lookFor) {
          return res.status(400).json({ message: "No React found!" });
        }
        console.log("founded reactTTTTTTTTTTTTTTTTTTTTTT:", foundReact);

        const message: string = foundReact.message;
        console.log("message:", message);
        try {
          interface InstagramMessageResponse {
            message_id: string;
            recipient_id: string;
          }
          console.log("starting to send the message!");
          const response: AxiosResponse<InstagramMessageResponse> =
            await axios.post(
              `https://graph.instagram.com/v21.0/${recipentID}/messages`,
              {
                recipient: { id: senderID },
                message: { text: message },
              },
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-Type": "application/json",
                },
              }
            );
          console.log("Message sent:", response);
          res.status(200).json({ message: "Message sent!" });
        } catch (error) {
          console.log("error:", error);
          return res.status(400).json({ message: "error sending message!" });
        }
      }

      // Check if comment exist
      if (req.body.entry[0].changes) {
        const recipentID = req.body.entry[0].id;
        const senderID = req.body.entry[0].changes[0].value.from.id;
        const messageText = req.body.entry[0].changes[0].value.text;
        // Handle comments logic here
      }

      return res.status(200).json({ message: "Received!" });
    } catch (error) {
      console.error("Error handling POST request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
