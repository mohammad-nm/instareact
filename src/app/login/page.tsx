"use client";
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState(true);
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
              <form
                action="http://localhost:3000/deck"
                className="flex flex-col items-center "
              >
                <input
                  type="email"
                  placeholder="Email:"
                  className="h-12 w-4/5 border border-opacity-30 border-[#000000] mt-6 p-3 rounded-[2px]"
                />

                <input
                  type="password"
                  placeholder="Password:"
                  className="h-12 w-4/5 border border-opacity-30 border-[#000000] mt-8 p-3 rounded-[2px]"
                />
                <a href="" className="mt-8 text-sm text-gray-400">
                  Forgot password?
                </a>
                <button
                  type="submit"
                  className="mt-5  bg-[#DEDEDE] w-36 h-8 rounded-xl"
                >
                  Login
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
