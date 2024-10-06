import { getReacts } from "@/services/handleData";

export default async function handler(req: any, res: any) {
  const { id } = req.body;
  const data = await getReacts(id);
  res.status(200).json(data);
}