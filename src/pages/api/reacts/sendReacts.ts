import { sendReact } from "@/services/handleReacts";

export default async function handler(req: any, res: any) {
  const { id, newReact, reacts } = req.body;
  const data = await sendReact(id, newReact, reacts);
  res.status(200).json(data);
}
// vercel env:
// https://instareact-beta.vercel.app/pages/api/instagram/handleLogin
//instagram dash :
// https://instareact-beta.vercel.app/pages/api/instagram/handleLogin
