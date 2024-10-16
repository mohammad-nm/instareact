import { supabase } from "../../utils/supabaseClient";

export async function sendLLToken(id: string, token: string) {
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
    return error;
  } else {
    return data;
  }
}
