export default function SortBy() {
  return (
    <div className="flex h-auto items-center mt-6">
      <div className="text-lg">Sort by:</div>
      <div>
        <div className="ml-2 pl-2 pr-2 pt-1 pb-1 text-xs rounded-[4px] w-auto bg-white  bg-opacity-50 flex text-black">
          <span>DM</span>
          <div className="ml-2 items-center flex">
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.92456 6.42709C4.72444 6.67467 4.34697 6.67467 4.14684 6.42709L0.399833 1.79135C0.135547 1.46438 0.368265 0.977041 0.78869 0.977041L8.28271 0.977041C8.70314 0.977041 8.93586 1.46438 8.67157 1.79135L4.92456 6.42709Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
