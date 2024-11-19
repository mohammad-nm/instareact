"use server";
import AddNew from "@/app/main/components/AddNew";
import Category from "@/app/main/components/Category";
import Navbar from "@/app/main/components/Navbar";
import Profile from "@/app/main/components/Profile";
import ReactList from "@/app/main/components/ReactList";
import SearchBox from "@/app/main/components/SearchBox";
import SortBy from "@/app/main/components/SortBy";

import { cookies } from "next/headers";

export default async function Main() {
  const cookieStore = await cookies();
  const id: string | undefined = cookieStore.get("sessionCookie")?.value;
  if (id === undefined) return;
  return (
    <div
      className={`bg-[#101010]  text-white min-h-screen min-[500px]:tracking-wider `}
    >
      <div>
        <Navbar />
      </div>
      <div className="min-[780px]:flex min-[780px]:justify-between min-[950px]:mt-8">
        <div className="flex items-center  min-[920px]:ml-12  ">
          <Profile id={id ? JSON.parse(id) : null} />
          <SearchBox />
        </div>
        <div className="flex justify-between h-auto items-center">
          <div className="flex items-center pl-5 text-2xl mt-5 min-[600px]:text-3xl min-[780px]:hidden ">
            Reacts:
          </div>
          <div className="flex items-center justify-end min-[920px]:mr-20">
            <SortBy />
            <Category />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ReactList id={id ? JSON.parse(id) : null} />
      </div>
      <div className="flex justify-center min-[450px]:justify-end">
        <AddNew ID={id ? JSON.parse(id) : null} />
      </div>
    </div>
  );
}
