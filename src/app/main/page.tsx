"use client";
import AddNew from "@/components/AddNew";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import ReactList from "@/components/ReactsList";
import SearchBox from "@/components/SearchBox";
import Sidebar from "@/components/Sidebar";
import SortBy from "@/components/SortBy";
import { useEffect, useState } from "react";
import { getSession, refreshSession, signOut } from "@/services/authService";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../store/userSlice";
import { useRouter } from "next/navigation";

export default function Main() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [session, setSession] = useState(localStorage.getItem("session"));

  const handleLogout = () => {
    signOut();
    dispatch(clearUser());
    localStorage.setItem("session", "");
    router.push("/login");
  };
  useEffect(() => {
    if (session === null) {
      handleLogout();
    }
  }, [session]);

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
        <ReactList />
      </div>
      <div className="flex justify-center min-[450px]:justify-end">
        <AddNew />
      </div>
    </div>
  );
}
