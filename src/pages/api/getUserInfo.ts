import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Methode not allowed!" });
  }
  if (!req.body.id) {
    return res
      .status(400)
      .json({ message: "id not provided", id: req.body.id });
  }
  try {
    const id = req.body.id;
    const { data, error } = await supabase
      .from("profiles")
      .select("instagram, reacts")
      .eq("instagram->profile->user_id", id);
    if (error) {
      console.error("Supabase query error:", error);
      return res.status(500).json({ message: "Failed to fetch data", error });
    }
    if (data.length === 0) {
      return res.status(404).json({ message: "No matching data found" });
    }
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}
