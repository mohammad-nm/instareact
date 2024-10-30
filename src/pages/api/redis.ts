import { redis } from "@/utils/redisClient";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Alowed`);
    }
    const { command, key, value } = await req.body;
    if (!command || !key || !value) {
      console.log(command, key, value);
      return res.status(400).json({
        message: "command or key or value not provided!",
        data: { command, key, value },
      });
    }
    let result;
    switch (command) {
      case "get":
        result = await redis.get(key);
        break;
      case "set":
        if (!value) {
          return res.status(400).json({ error: "Value is not provided" });
        }
        result = await redis.set(key, value);
        break;
      case "del":
        result = await redis.del(key);
        break;
      case "exists":
        result = await redis.exists(key);
        break;
      default:
        return res.status(400).json({ error: "Command not correct" });
    }
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Redis error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
