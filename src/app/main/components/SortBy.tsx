import { useState } from "react";

export default function SortBy() {
  const [isOpen, setIsOpen] = useState(false);
  const [sorting, setSorting] = useState("All");
  return (
    <div className="flex h-auto items-center mt-6">
      <div className="text-lg min-[600px]:text-3xl">Sort by:</div>
      <div className="">
        <button
          className="ml-2 pl-2 pr-2 pt-1 pb-1 text-xs rounded-[4px] w-fit font-semibold flex text-white bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] min-[600px]:text-base items-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{sorting}</span>
          <div className="ml-2">
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.92456 6.42709C4.72444 6.67467 4.34697 6.67467 4.14684 6.42709L0.399833 1.79135C0.135547 1.46438 0.368265 0.977041 0.78869 0.977041L8.28271 0.977041C8.70314 0.977041 8.93586 1.46438 8.67157 1.79135L4.92456 6.42709Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="text-xs rounded-[4px] font-semibold text-white bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] p-2 mt-2 ml-2 fixed pr-4 pl-3">
            <div className="mb-2">
              <button
                onClick={() => {
                  setSorting("All");
                  setIsOpen(!isOpen);
                }}
              >
                All
              </button>
            </div>
            <div className="mb-2">
              <button
                onClick={() => {
                  setSorting("DM");
                  setIsOpen(!isOpen);
                }}
              >
                DM
              </button>
            </div>

            <div className="">
              <button
                onClick={() => {
                  setSorting("Comments");
                  setIsOpen(!isOpen);
                }}
              >
                Comments
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
