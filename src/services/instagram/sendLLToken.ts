import { supabase } from "../../utils/supabaseClient";
type LLToken = {
  access_token: string;
  expires_in: number;
  token_type: string;
};
export const sendLLToken = async (id: string, LLToken: LLToken) => {
  const { data, error } = await supabase
    .from("profiles")
    .update({
      instagram: {
        LLToken: LLToken.access_token,
        when: new Date().toISOString(),
        expires_in: LLToken.expires_in,
        token_type: LLToken.token_type,
      },
    })
    .eq("id", id)
    .select("instagram");
  if (error) {
    return error;
  } else {
    return data;
  }
};
