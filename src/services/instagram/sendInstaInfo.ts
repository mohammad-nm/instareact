import { supabase } from "../../utils/supabaseClient";
type instagram = {
  access_token: string;
  expires_in: number;
  token_type: string;
  account_type: string;
  profile_picture_url: string;
  user_id: string;
  username: string;
};
export const sendInstaInfo = async (id: string, instagram: instagram) => {
  const { data, error } = await supabase
    .from("profiles")
    .update({
      supaID: id,
      instagram,
    })
    .eq("id", id)
    .select("instagram");
  if (error) {
    return error;
  } else {
    return data;
  }
};
