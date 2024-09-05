"use client";
"strict mode";
import { useState } from "react";
import {
  signUp,
  signIn,
  getCurrentUser,
  getSession,
} from "../../services/authService";
import { validateEmail, validatePassword } from "@/services/formValidation";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }
      if (!validatePassword(password)) {
        setError(
          "Password must be at least 8 characters long and contain both letters and numbers"
        );
        return;
      }
      await signUp(email, password);
    } catch (error: any) {
      setError("⚠️ " + error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }
      if (!validatePassword(password)) {
        setError(
          "Password must be at least 8 characters long and contain both letters and numbers"
        );
        return;
      }
      const { user } = await signIn(email, password);
      console.log(user);
    } catch (error: any) {
      setError("⚠️ " + error.message);
    }
  };

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
              onClick={() => setLogin(false)}
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
              <form className="flex flex-col items-center ">
                <input
                  type="email"
                  placeholder="Email:"
                  className="h-12 w-4/5 border border-opacity-30 border-[#000000] mt-6 p-3 rounded-[2px]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (
                      e.target.value.length >= 5 &&
                      !validateEmail(e.target.value)
                    ) {
                      setError("Please enter a valid email address");
                    } else if (e.target.value.length < 5) {
                      setError("");
                    } else {
                      setError("");
                    }
                  }}
                />
                <input
                  type="password"
                  placeholder="Password:"
                  className="h-12 w-4/5 border border-opacity-30 border-[#000000] mt-8 p-3 rounded-[2px]"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (
                      e.target.value.length >= 5 &&
                      !validatePassword(e.target.value)
                    ) {
                      setError(
                        "Password must be at least 8 characters long and contain both letters and numbers"
                      );
                    } else if (e.target.value.length < 8) {
                      setError("");
                    } else {
                      setError("");
                    }
                  }}
                />
                <div className="mt-3 text-orange-400 font-semibold text-[.5rem] w-3/5 flex justify-center">
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
                >
                  {login ? "Login" : "SignUp"}
                </button>
              </form>
            </div>
            {/* Login with google functionality */}
            <div className="mt-10 mb-8">Login with google</div>
          </div>
        </div>
      </div>
    </>
  );
}
