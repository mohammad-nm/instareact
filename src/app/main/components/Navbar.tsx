import { useState } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

export default function Navbar({ handleLogout }: any) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <div className="w-full h-11 flex">
      <div className="ml-4 text-3xl place-content-center min-[600px]:text-4xl min-[600px]:ml-6 min-[600px]:mt-2">
        InstaReact
      </div>
      <div className="font-semibold w-56  text-ellipsis overflow-hidden place-content-center mx-auto">
        {useSelector((state: any) => state.session.session?.user?.email)}
      </div>
      <div className="mr-4 ml-auto place-content-center mt-2 z-50">
        <button onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H20.0024"
              stroke={sidebarIsOpen ? "black" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 7H20.0024"
              stroke={sidebarIsOpen ? "black" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 13H20.0024"
              stroke={sidebarIsOpen ? "black" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {sidebarIsOpen ? <Sidebar handleLogOut={handleLogout} /> : null}
    </div>
  );
}
