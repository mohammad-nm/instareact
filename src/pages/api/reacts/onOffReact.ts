import { onOffReact } from "@/services/handleReacts";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { reacts, reactId, id } = req.body;
  if (req.method === "POST") {
    const data = await onOffReact(reacts, reactId, id);
    res.status(200).json(data);
  }
}
