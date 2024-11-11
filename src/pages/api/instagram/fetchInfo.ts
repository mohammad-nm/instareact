import { fetchFromSupa } from "@/services/instagram/fetchFromSupa";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  if (id) {
    if (req.method === "POST") {
      const data = await fetchFromSupa(id as string);
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(400).json(data);
      }
    }
  }
}
