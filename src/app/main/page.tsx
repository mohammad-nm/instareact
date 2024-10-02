"use client";
import AddNew from "@/app/main/components/AddNew";
import Category from "@/app/main/components/Category";
import Navbar from "@/app/main/components/Navbar";
import Profile from "@/app/main/components/Profile";
import ReactList from "@/app/main/components/ReactsList";
import SearchBox from "@/app/main/components/SearchBox";
import Sidebar from "@/app/main/components/Sidebar";
import SortBy from "@/app/main/components/SortBy";
import { useEffect, useState } from "react";
import { getSession, refreshSession, signOut } from "@/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { clearSession, setSession } from "../../store/sessionSlice";
import { useRouter } from "next/navigation";

export default function Main() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const session = useSelector((state: any) => state.session.session);
  useEffect(() => {
    if (session === null) {
      handleLogout();
    }
    console.log(session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleLogout = () => {
    signOut();
    dispatch(clearSession());
    setSession(null);
    localStorage.setItem("session", "");
    router.push("/login");
  };

  return (
    <div
      className={`bg-[#252525ea]  text-white min-h-screen min-[500px]:tracking-wider`}
    >
      <div>
        <Navbar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        {sidebarIsOpen ? <Sidebar handleLogOut={handleLogout} /> : null}
      </div>
      <div className="min-[780px]:flex min-[780px]:justify-between      min-[950px]:mt-8">
        <div className="flex items-center  min-[920px]:ml-12  ">
          <Profile />
          <SearchBox />
        </div>
        <div className="flex justify-between h-auto items-center">
          <div className="flex items-center pl-5 text-2xl mt-5 min-[600px]:text-3xl min-[780px]:hidden">
            Reacts:
          </div>
          <div className="flex items-center justify-end min-[920px]:mr-20">
            <SortBy />
            <Category />
          </div>
        </div>
      </div>
      <div className="">
        <ReactList session={session} />
      </div>
      <div className="flex justify-center min-[450px]:justify-end">
        <AddNew session={session} />
      </div>
    </div>
  );
}
