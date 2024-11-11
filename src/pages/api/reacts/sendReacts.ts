import { sendReact } from "@/services/handleReacts";

export default async function handler(req: any, res: any) {
  const { id, newReact, reacts } = req.body;
  const data = await sendReact(id, newReact, reacts);
  return res.status(200).json(data);
}
