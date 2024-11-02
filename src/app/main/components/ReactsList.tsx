import axios from "axios";
import ReactInfo from "./ReactInfo";
import { useSelector } from "react-redux";

interface ReactItem {
  lookFor: string[];
  message: string;
  reactTo: string[];
  id: string;
  saved: boolean;
  photos: string[];
  active: boolean;
}

export default function ReactList() {
  const reacts = useSelector((state: any) => state.reacts.reacts);
  const sortingSlice = useSelector((state: any) => state.sorting.sorting);
  const activeSlice = useSelector((state: any) => state.active.sorting);

  return (
    <div className="columns-[170px] min-[600px]:columns-[250px] p-3 mt-8 w-full">
      {reacts.length > 0 ? (
        reacts.map((react: ReactItem, index: number) => {
          const sorting =
            sortingSlice === "All" || react.reactTo.includes(sortingSlice);
          const active =
            activeSlice === "All" || (activeSlice === "Active" && react.active);
          if (sorting && active) {
            return <ReactInfo react={react} key={index} />;
          } else {
            return null;
          }
        })
      ) : (
        <div className=" mt-4 text-xl min-[600px]:text-3xl font-semibold ">
          No Reacts! Add new reacts to show here!
        </div>
      )}
    </div>
  );
}
