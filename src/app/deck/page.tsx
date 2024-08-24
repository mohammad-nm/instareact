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

export default function Deck() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div>
      <Navbar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      {sidebarIsOpen ? <Sidebar /> : null}
      <div className="flex items-center">
        <Profile />
        <SearchBox />
      </div>

      <div className="flex items-center justify-end">
        <SortBy />
        <Category />
      </div>
      <div className="flex justify-center ">
        <ReactList />
      </div>
      <div className="flex justify-center">
        <AddNew />
      </div>
    </div>
  );
}
