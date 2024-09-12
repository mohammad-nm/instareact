"use client";
import AddNew from "@/components/AddNew";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import ReactList from "@/components/ReactsList";
import SearchBox from "@/components/SearchBox";
import Sidebar from "@/components/Sidebar";
import SortBy from "@/components/SortBy";
import { useState } from "react";
import { Nunito } from "next/font/google";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { clearUser } from "../../store/userSlice";
import { useRouter } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Main() {
  const user = useSelector((state: any) => state.user);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(user);
  const handleLogout = () => {
    dispatch(clearUser());
    router.push("/login");
  };
  return (
    <div
      className={`bg-[#252525ea]  text-white min-h-screen ${nunito.className} min-[500px]:tracking-wider`}
    >
      <div className="">
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
