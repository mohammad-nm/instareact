import { redis } from "@/utils/redisClient";
import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface InstagramMessageResponse {
  message_id: string;
  recipient_id: string;
}

interface React {
  lookFor: string[];
  active: boolean;
  reactTo: string[];
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const getUserInfo = async () => {
    const redisData = await axios.post(
      "https://instareact-beta.vercel.app/api/redis",
      { command: "get", key: req.body.entry[0].id }
    );
    console.log(redisData.data.result);
    if (redisData.data.result) {
      return redisData.data.result;
    }
    const supaData = await axios.post(
      "https://instareact-beta.vercel.app/api/instagram/getUserInfo",
      { id: req.body.entry[0].id }
    );
    console.log(supaData.data);
    const sendToRedis = await axios.post(
      "https://instareact-beta.vercel.app/api/redis",
      {
        command: "set",
        key: req.body.entry[0].id,
        value: supaData.data,
      }
    );
    console.log(sendToRedis.data);
    return supaData.data;
  };
  const userInfo = await getUserInfo();
  if (!userInfo) {
    return;
  }
  const data: {
    instagram: {
      instagram: { access_token: string };
    };
    reacts: React[];
  } = userInfo.data.data[0];
  // const reacts: React[] = data.reacts;
  //temporary because of instagram restriction
  const reacts: React[] = userInfo.data.data.reduce(
    (acc: React[], user: { reacts: React[] }) => {
      return [...acc, ...user.reacts];
    },
    []
  );
  const access_token: string = data.instagram.instagram.access_token;
  async function sendMessage(
    recipentID: string,
    senderID: string,
    message: string,
    access_token: string,
    retryCount: number = 3
  ) {
    let attempt = 0;
    while (attempt < retryCount) {
      try {
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
        return response;
      } catch (error) {
        console.log(`Attempt ${attempt + 1} failed:`, error);
        if (attempt === retryCount - 1) throw error;
        attempt++;
      }
    }
  }
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

        const message: string = foundReact.message;

        const send = await sendMessage(
          recipentID,
          senderID,
          message,
          access_token,
          50
        );

        res.status(200).json({ message: "Message sent!" });
      }

      // Check if comment exist
      if (req.body.entry[0].changes) {
        const recipentID: string = req.body.entry[0].id;
        const senderID: string = req.body.entry[0].changes[0].value.from.id;
        const messageText: string = req.body.entry[0].changes[0].value.text;

        const foundReact: React | undefined = reacts.find((item: React) => {
          return (
            item.lookFor.includes(messageText) &&
            item.active &&
            item.reactTo.includes("Comments")
          );
        });

        if (!foundReact?.lookFor) {
          return res.status(400).json({ message: "No React found!" });
        }

        const message: string = foundReact.message;
        const send = await sendMessage(
          recipentID,
          senderID,
          message,
          access_token,
          50
        );

        res.status(200).json({ message: "Message sent!" });
      }

      return res.status(200).json({ message: "Received!" });
    } catch (error) {
      console.error("Error handling POST request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
