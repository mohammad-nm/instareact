import { supabase } from "../../utils/supabaseClient";
export const logout = async (id: string) => {
  console.log("id", id);
  const { data, error } = await supabase
    .from("profiles")
    .update({
      instagram: null,
    })
    .eq("id", id)
    .select("instagram");
  if (error) {
    console.log("Error during logout, failed to update profile:", error);
    return { success: false, error };
  }
  return { success: true, data };
};
