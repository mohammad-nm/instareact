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
      instagram: {
        supaID: id,
        token: {
          LLToken: instagram.access_token,
          when: new Date().toISOString(),
          expires_in: instagram.expires_in,
          token_type: instagram.token_type,
        },
        profile: {
          account_type: instagram.account_type,
          profile_picture_url: instagram.profile_picture_url,
          user_id: instagram.user_id,
          username: instagram.username,
        },
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
