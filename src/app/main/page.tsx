"use client";
import AddNew from "@/app/main/components/AddNew";
import Category from "@/app/main/components/Category";
import Navbar from "@/app/main/components/Navbar";
import Profile from "@/app/main/components/Profile";
import ReactList from "@/app/main/components/ReactsList";
import SearchBox from "@/app/main/components/SearchBox";
import SortBy from "@/app/main/components/SortBy";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { clearSession, setSessionSlice } from "../../store/sessionSlice";
import { useRouter } from "next/navigation";
import getSessionCookie from "@/services/sessionCookie/getSessionCookie";
import { clearReactsSlice, setReactsSlice } from "@/store/reactsSlice";
import { clearInstaSlice, setInstaSlice } from "@/store/instaSlice";
import axios from "axios";
import clearSessionCookie from "@/services/sessionCookie/clearSessionCookie";

export default function Main(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const [id, setId] = useState<string>();
  const handleLogout = async () => {
    try {
      await clearSessionCookie();

      dispatch(clearReactsSlice());

      router.push("/login");
    } catch (error) {
      console.error("Network or other error while logging out:", error);
    }
  };
  useEffect(() => {
    const fetchSession = async () => {
      const id: string | null = await getSessionCookie();
      if (!id) return;
      setId(id);
    };

    fetchSession();
  }, [dispatch]);

  useEffect(() => {
    const fetchReacts = async () => {
      if (!id) return;

      try {
        const response = await axios.post("/api/reacts/getReacts", { id });

        if (response.status === 200) {
          const data = response.data;

          dispatch(setReactsSlice(data));
        } else {
          console.error("Failed to fetch reacts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching reacts:", error);
      }
    };
    fetchReacts();
  }, [id, dispatch]);
  useEffect(() => {
    const fetchInsta = async () => {
      if (!id) return;
      try {
        const response = await fetch("/api/instagram/fetchInfo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (response.ok) {
          const data = await response.json();
          dispatch(setInstaSlice(data.instagram));
        } else {
          console.log("error in insta fetching");
        }
      } catch (error) {
        console.log("error while fetching insta info:", error);
      }
    };
    fetchInsta();
  }, [id, dispatch]);

  return (
    <div
      className={`bg-[#101010]  text-white h-screen min-[500px]:tracking-wider `}
    >
      <div>
        <Navbar handleLogout={handleLogout} />
      </div>
      <div className="min-[780px]:flex min-[780px]:justify-between min-[950px]:mt-8">
        <div className="flex items-center  min-[920px]:ml-12  ">
          <Profile id={id} />
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
        <ReactList id={id} />
      </div>
      <div className="flex justify-center min-[450px]:justify-end">
        <AddNew ID={id} />
      </div>
    </div>
  );
}
