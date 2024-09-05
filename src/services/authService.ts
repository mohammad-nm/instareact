"use server";
import { redirect } from "next/dist/server/api-utils";
import { supabase } from "../utils/supabaseClient";

export const signUp = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return user;
};

export const signIn = async (email: string, password: string) => {
  const { user, session, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return { user, session };
};

export const getCurrentUser = () => {
  return supabase.auth.getUser();
};

export const getSession = () => {
  return supabase.auth.getSession();
};
// ejma tnzj orti rlsu
