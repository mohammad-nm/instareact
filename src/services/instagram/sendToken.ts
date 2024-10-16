import { supabase } from "../../utils/supabaseClient";

export const sendToken = async (id: string, token: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .update({
      instagram: {
        LLToken: token,
        when: new Date().toISOString(),
      },
    })
    .eq("id", id)
    .select("instagram");
  if (error) {
    console.log("error while sendToken: ", error);
    return null;
  } else {
    return data;
  }
};
