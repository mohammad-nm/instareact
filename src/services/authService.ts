"use server";

import { supabase } from "../utils/supabaseClient";

///////////////////SIGNUP function
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    throw new Error("User already exists!");
  }
  if (error) {
    throw error;
  }

  return data;
};

//////////////////////SIGNIN function
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return { data };
};

export const getCurrentUser = () => {
  return supabase.auth.getUser();
};

export const getSession = () => {
  return supabase.auth.getSession();
};
