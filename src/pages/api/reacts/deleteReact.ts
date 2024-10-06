import { deleteReact } from "@/services/handleData";
export default async function handler(req: any, res: any) {
  const { reacts, reactId, id } = req.body;
  const data = await deleteReact(reacts, reactId, id);
  res.status(200).json(data);
}
