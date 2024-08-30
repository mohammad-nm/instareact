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

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Deck() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div
      className={`bg-custom-bg-gradient  text-white h-full ${nunito.className}`}
    >
      <div className="">
        <Navbar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        {sidebarIsOpen ? <Sidebar /> : null}
      </div>
      <div className="flex items-center">
        <Profile />
        <SearchBox />
      </div>
      <div className="flex justify-between h-auto items-center">
        <div className="flex items-center pl-5 text-2xl mt-5 min-[600px]:text-3xl">
          Reacts:
        </div>
        <div className="flex items-center justify-end ">
          <SortBy />
          <Category />
        </div>
      </div>
      <div className="flex justify-center ">
        <ReactList />
      </div>
      <div className="flex justify-center min-[450px]:justify-end">
        <AddNew />
      </div>
    </div>
  );
}
