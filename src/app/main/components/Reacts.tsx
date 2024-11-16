"use client";
import { useSelector } from "react-redux";
import ReactInfo from "./ReactInfo";

interface ReactItem {
  lookFor: string[];
  message: string;
  reactTo: string[];
  id: string;
  saved: boolean;
  photos: string[];
  active: boolean;
}

export default function Reacts({ id }: { id: string }) {
  const sortingSlice = useSelector((state: any) => state.sorting.sorting);
  const activeSlice = useSelector((state: any) => state.active.sorting);
  const reacts = useSelector((state: any) => state.reacts.reacts);

  if (reacts === undefined) return null;
  if (reacts.length === 0)
    return (
      <div className=" mt-4 text-xl min-[600px]:text-3xl font-semibold ">
        No Reacts! Add new reacts to show here!
      </div>
    );

  return reacts.map((react: ReactItem, index: number) => {
    const sorting =
      sortingSlice === "All" || react.reactTo.includes(sortingSlice);
    const active =
      activeSlice === "All" || (activeSlice === "Active" && react.active);
    if (sorting && active) {
      return <ReactInfo react={react} id={id} reacts={reacts} key={index} />;
    } else {
      return null;
    }
  });
}
