"use client";
import axios from "axios";
import Reacts from "./Reacts";
import { useEffect } from "react";
import { setReactsSlice } from "@/store/reactsSlice";

import { useDispatch } from "react-redux";
export default function ReactList({ id }: { id: string }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchReacts() {
      if (id === undefined || null) return;
      const response = await axios.post("/api/reacts/getReacts", { id });
      if (response.status !== 200) return;
      const reacts = response.data;
      dispatch(setReactsSlice(reacts));
    }
    fetchReacts();
  });

  return (
    <div className="columns-[170px] min-[600px]:columns-[250px] p-3 mt-8 w-full">
      <Reacts id={id} />
    </div>
  );
}
