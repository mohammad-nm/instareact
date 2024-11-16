"use client";

import setCookieSession from "@/services/sessionCookie/setSessionCookie";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
declare global {
  interface Window {
    handleGoogleSignIn?: (response: any) => Promise<void>;
  }
}
function setCookie(name: string, value: string) {
  const date = new Date();
  date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
export default function GoogleSignin() {
  const GoogleSignInScript = dynamic(() => import("./GoogleSigninScript"), {
    ssr: false,
  });
  const router = useRouter();
  useEffect(() => {
    window.handleGoogleSignIn = async (response: any) => {
      const data = await axios.post("/api/auth/signinGoogle", {
        credential: response.credential,
      });
      if (data.status === 200) {
        try {
          const session: string = JSON.stringify(
            data.data.data.session.user.id
          );

          setCookie("sessionCookie", session);
          router.push("/main");
        } catch (error) {
          console.log(error);
        }
      }
    };
    return () => {
      delete window.handleGoogleSignIn;
    };
  }, [router]);

  return (
    <div className="mt-10 mb-8">
      <GoogleSignInScript />
      <div
        id="g_id_onload"
        data-client_id="458511414124-5408vtdl0r05c5a3k2f51k4r9q45770u.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleGoogleSignIn"
        data-auto_prompt="false"
        data-use_fedcm_for_prompt="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-locale="en"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}
