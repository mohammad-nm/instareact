import { useState } from "react";

export default function Category() {
  const [category, setCategory] = useState("all");
  return (
    <div className="h-auto mt-6 mr-6 ml-10">
      <div className="flex rounded-[4px] bg-[#0a0a0a] [box-shadow:#666666_0px_0px_0px_1px] font-semibold pl-2 pr-2 p-1 text-xs text-white min-[600px]:text-base">
        <button>
          <div
            onClick={() => setCategory("all")}
            className={
              category === "all"
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
            category === "active"
              ? "underline-offset-2 underline decoration-green-500 decoration-2"
              : ""
          }
          onClick={() => setCategory("active")}
        >
          <div>Active</div>
        </button>
      </div>
    </div>
  );
}
