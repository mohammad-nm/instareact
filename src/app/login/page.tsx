"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../store/sessionSlice";
import { validateEmail, validatePassword } from "@/services/formValidation";
import { useRouter } from "next/navigation";
import setCookieSession from "@/services/sessionCookie/setSessionCookie";
import getSessionCookie from "@/services/sessionCookie/getSessionCookie";
export default function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchCookie() {
      const cookie: string | null = await getSessionCookie();
      if (cookie) {
        router.push("/main");
      }
    }
    fetchCookie();
  }, []);

  const handleSignUp = async () => {
    setIsLoading(true);
    setError("");
    //email and password validation
    try {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        setIsLoading(false);
        return;
      }
      if (!validatePassword(password)) {
        setError(
          "Password must be at least 8 characters long and contain both letters and numbers"
        );
        setIsLoading(false);
        return;
      }
      //signing up the user
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      //signing up error handling
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error: ${text}`);
      }
      // const data = await res.json();

      if (res.ok) {
        setError(
          "Signed Up successfully. Please check your email for verification. And then you can log into your account."
        );
        setLogin(true);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const text = await res.json();
        throw new Error(`${text.message}`);
      }
      const data = await res.json();

      if (res.ok) {
        const session: string = JSON.stringify(data.data.data.session);
        console.log("session", data.data.data.session.user.id);
        loginAsync(session);
        await setCookieSession(session);
        router.push("/main");
      }
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  function handleReset() {
    setError("");
    setIsLoading(false);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-6xl mt-20">InstaReact</div>
        <div className="w-96 h-auto mt-24 min-[]">
          <div className="flex">
            <div
              className={`w-1/2 h-12 flex justify-center  rounded-tl-md
                ${
                  login ? "bg-[#000000] text-white" : "bg-[#DEDEDE] text-black"
                }`}
              onClick={() => setLogin(true)}
            >
              <button className="opacity-100">Login</button>
            </div>
            <div
              className={`w-1/2 h-12 flex justify-center  rounded-tr-md
                
                ${login ? "bg-[#DEDEDE] text-black" : "bg-[#000000] text-white"}
                `}
              onClick={() => {
                setLogin(false);

                handleReset();
              }}
            >
              <button className="opacity-100" onClick={() => setLogin(false)}>
                SignUp
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center border">
            <div className="w-full">
              <div className="ml-8 mt-6 text-2xl">
                <h3>{login ? "Login:" : "SignUp:"}</h3>
              </div>
              <form
                className="flex flex-col items-center "
                id="login"
                autoComplete="on"
              >
                <input
                  autoComplete="on"
                  name="email"
                  type="email"
                  placeholder="Email:"
                  className="h-12 w-4/5 border border-opacity-30 border-[#000000] mt-6 p-3 rounded-[2px]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  autoComplete="on"
                  name="password"
                  type="password"
                  placeholder="Password:"
                  className="h-12 w-4/5 border border-opacity-30 border-[#000000] mt-8 p-3 rounded-[2px]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="mt-3 text-orange-400 font-semibold text-[.5rem] w-3/5 flex justify-center text-center">
                  {error && <p>⚠️ {error}</p>}
                </div>
                <a href="" className="mt-8 text-sm text-gray-400">
                  Forgot password?
                </a>
                <button
                  className="mt-5  bg-[#DEDEDE] w-36 h-8 rounded-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    if (login) {
                      handleSignIn();
                    } else {
                      handleSignUp();
                    }
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : login ? "Login" : "SignUp"}
                </button>
              </form>
            </div>
            {/* Login with google*/}
            <div className="mt-10 mb-8">Login with google</div>
            <div className="mt-2 mb-8">Login with github</div>
          </div>
        </div>
      </div>
    </>
  );
}
