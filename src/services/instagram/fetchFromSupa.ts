import { supabase } from "../../utils/supabaseClient";
export const fetchFromSupa = async (id: string) => {
  let { data, error } = await supabase
    .from("profiles")
    .select("instagram")
    .eq("id", id)
    .single();
  if (error) {
    console.log("error while fetching reacts:", error);
  } else {
    return data;
  }
};
