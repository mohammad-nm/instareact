import { supabase } from "../utils/supabaseClient";

export const getReacts = async (id: string) => {
  let { data, error } = await supabase
    .from("profiles")
    .select("reacts")
    .eq("id", id)
    .single();
  if (error) {
    console.log("error while fetching reacts:", error);
  } else {
    return data?.reacts;
  }
};

export const sendReact = async (id: string, newReact: object, reacts: any) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(reacts ? { reacts: [...reacts, newReact] } : { reacts: [newReact] })
    .eq("id", id)
    .select("reacts");
  if (error) {
    console.log("error while sendReact: ", error);
  } else {
    return data;
  }
};
