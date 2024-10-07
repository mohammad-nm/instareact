import { useEffect } from "react";
import ReactInfo from "./ReactInfo";

import { useSelector } from "react-redux";

interface ReactItem {
  lookFor: string[];
  message: string;
  reactTo: string[];
  id: string;
  saved: boolean;
  photos: string[];
}

export default function ReactList({ session }: any) {
  const reacts = useSelector((state: any) => state.reacts.reacts);
  useEffect(() => {}, [reacts]);
  if (reacts === null)
    return (
      <div className="w-full flex ">
        <div className="mx-auto text-2xl font-semibold mt-14">Loading... </div>
      </div>
    );
  return (
    <div className="columns-[170px] min-[600px]:columns-[250px] p-3 mt-8 ">
      {reacts.length > 0 ? (
        reacts.map((react: ReactItem, index: number) => {
          return <ReactInfo react={react} key={index} />;
        })
      ) : (
        <div className=" mt-4 text-2xl font-semibold">
          No Reacts! Add new reacts to show here!
        </div>
      )}
    </div>
    // className="flex flex-wrap mt-8 min-[600px]:gap-6 gap-4  p-3 w-full h-fit"
  );
}
