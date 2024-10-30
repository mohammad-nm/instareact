// import { redis } from "@/utils/redisClient";
// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     //handling webhook handler verification
//     const {
//       "hub.mode": mode,
//       "hub.challenge": challenge,
//       "hub.verify_token": verifyToken,
//     } = req.query || {};
//     if (mode && process.env.WEBHOOK_VERIFICATION_TOKEN === verifyToken) {
//       res.status(200).send(challenge);
//     } else {
//       res
//         .status(403)
//         .json({ error: "verify token invalid!:", verify_token: verifyToken });
//     }
//   } else if (req.method === "POST") {
//     //handling notifs
//     // console.log(JSON.stringify(req.body));
//     //messgaes
//     if (req.body.entry[0].messaging) {
//       const recipentID = req.body.entry[0].id;
//       const senderID = req.body.entry[0].messaging[0].sender.id;
//       const messageText = req.body.entry[0].messaging[0].message.text;
//       const userInfo = await axios.post(
//         "https://instareact-beta.vercel.app/api/getUserInfo",
//         { recipentID }
//       );
//       const access_token = userInfo.data[0].instagram.access_token;
//       const reacts = userInfo.data[0].reacts;
//       const foundReact = reacts.find((item: any) =>
//         item.lookFor.includes(messageText)
//       );
//       const message = foundReact ? foundReact.message : null;
//       if (message) {
//         const response = await fetch(
//           `https://graph.instagram.com/v21.0/${recipentID}/messages`,
//           {
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${access_token}`,
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               recipant: { id: senderID },
//               message: { text: message },
//             }),
//           }
//         );
//         console.log("Message sent:", await response.json());
//       }
//     }
//     //comments
//     if (req.body.entry[0].changes) {
//       const recipentID = req.body.entry[0].id;
//       const senderID = req.body.entry[0].changes[0].value.from.id;
//       const messageText = req.body.entry[0].changes[0].value.text;
//     }
//     return res.status(200).json({ message: "Received!" });
//   }
// }

////////////////////////////////////////////////////////////////
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Webhook verification
    const {
      "hub.mode": mode,
      "hub.challenge": challenge,
      "hub.verify_token": verifyToken,
    } = req.query || {};
    if (mode && process.env.WEBHOOK_VERIFICATION_TOKEN === verifyToken) {
      return res.status(200).send(challenge);
    }
    return res.status(403).json({ error: "Invalid verification token" });
  }

  if (req.method === "POST") {
    // Handling incoming messages
    const messagingEvents = req.body.entry[0]?.messaging;

    if (messagingEvents) {
      const senderID = messagingEvents[0]?.sender.id;
      const messageText = messagingEvents[0]?.message.text;
      const recipentID = req.body.entry[0].id; // Ensure this is the right recipient ID

      // Send a response message
      const responseMessage = "Thank you for your message!"; // Customize this message as needed

      await axios.post(
        `https://graph.instagram.com/v21.0/${recipentID}/messages`,
        {
          recipient: { id: senderID },
          message: { text: responseMessage },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.INSTAGRAM_ACCESS_TOKEN}`, // Ensure this is set in your environment variables
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(200).json({ message: "Message sent!" });
    }

    return res.status(400).json({ error: "No messaging events found" });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
