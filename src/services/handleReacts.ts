import { supabase } from "../utils/supabaseClient";
type ReactType = {
  reactTo: string[];
  lookFor: string[];
  message: string;
  photos: string[];
  id: string;
  active: boolean;
};

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

export const sendReact = async (
  id: string,
  newReact: ReactType,
  reacts: ReactType[] | null
) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(
      // reacts ? { reacts: [...reacts, newReact] } : { reacts: [newReact] }
      {
        reacts:
          reacts && reacts.length > 0 ? [...reacts, newReact] : [newReact],
      }
    )
    .eq("id", id)
    .select("reacts");
  if (error) {
    console.log("error while sendReact: ", error);
  } else {
    return data;
  }
};

export const deleteReact = async (reacts: [], reactId: string, id: string) => {
  const newReacts = reacts.filter((item: any) => item.id !== reactId);
  const { data, error } = await supabase
    .from("profiles")
    .update({
      reacts: newReacts,
    })
    .eq("id", id)
    .select("reacts");
  if (error) {
    console.log("error while deleteReact: ", error);
  } else {
    return data;
  }
};
