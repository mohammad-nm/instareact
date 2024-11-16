import { getReacts } from "@/services/handleReacts";

export default async function handler(req: any, res: any) {
  const id: string = await req.body.id;

  const data = await getReacts(id);
  res.status(200).json(data);
}
