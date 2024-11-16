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

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return error;
  } else {
    return data;
  }
};

export const refreshSession = async (token: any) => {
  const { data, error } = await supabase.auth.refreshSession(token);
  if (error) {
    console.error("error with refreshing session", error.message);
  }
  return data;
};
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};

//google sign in
export const handleGoogleResponse = async (response: any) => {
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "google",
    token: response,
  });
  if (error) {
    return null;
  }
  return data;
};
