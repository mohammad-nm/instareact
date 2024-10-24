import { setActiveSlice } from "@/store/activeSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Category() {
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveSlice(category));
  });
  return (
    <div className="h-auto mt-6 mr-6 ml-4">
      <div className="flex rounded-[4px] bg-[#0a0a0a] [box-shadow:#666666_0px_0px_0px_1px] font-semibold pl-2 pr-2 p-1 text-xs text-white min-[600px]:text-base">
        <button>
          <div
            onClick={() => setCategory("All")}
            className={
              category === "All"
                ? "underline-offset-2 underline decoration-green-500 decoration-2"
                : ""
            }
          >
            All
          </div>
        </button>
        <div className="ml-2 mr-2">|</div>
        <button
          className={
            category === "Active"
              ? "underline-offset-2 underline decoration-green-500 decoration-2"
              : ""
          }
          onClick={() => setCategory("Active")}
        >
          <div>Active</div>
        </button>
      </div>
    </div>
  );
}
