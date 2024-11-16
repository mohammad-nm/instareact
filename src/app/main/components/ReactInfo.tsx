import { useEffect, useState } from "react";
import ReactDeleteBtn from "./ReactDeleteBtn";
import ReactEditBtn from "./ReactEditBtn";
import ReactOnOffBtn from "./ReactOnOffBtn";

export default function ReactInfo({ react, id, reacts }: any) {
  const reactId: string = react.id;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Render nothing on the server initially

  return (
    <div
      className="w-[160px] min-[600px]:w-80 max-[388px]:w-[90%] h-auto rounded-md p-4 bg-[#0A0A0A] box-content mx-auto [box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset] break-inside-avoid mb-4 "
      key={reactId}
    >
      <div className="flex w-full ">
        <div className="w-3/5">
          <h2>
            <div className="text-[.5rem] ">React to: </div>
            <div className="text-[.6rem] font-semibold min-[600px]:text-sm flex">
              {react.reactTo.map((item: string, index: number) => (
                <div key={index}>
                  {item}
                  {react.reactTo.length > index + 1 && ", "}
                </div>
              ))}
            </div>
          </h2>
          <h2>
            <div className="text-[.5rem] mt-2 ">Look for: </div>
            <div className="text-[.6rem] font-semibold min-[600px]:text-sm flex">
              {react.lookFor.map((item: string, index: number) => (
                <div key={index} className="mr-3">
                  {item}
                  {react.lookFor.length > index + 1 && ", "}
                </div>
              ))}
            </div>{" "}
          </h2>
        </div>
        <div className="w-2/5">
          <div className="grid grid-cols-2 grid-rows-2 min-[600px]:grid-cols-3 gap-2 overflow-hidden max-h-[60px] ">
            <div className="min-[420px]:w-8 min-[420px]:h-8 w-6 h-6 bg-gray-500 rounded-lg col-span-1 row-span-1"></div>
            <div className="min-[420px]:w-8 min-[420px]:h-8 w-6 h-6 bg-gray-500 rounded-lg col-span-1 row-span-1"></div>
            <div className="min-[420px]:w-8 min-[420px]:h-8 w-6 h-6 bg-gray-500 rounded-lg col-span-1 row-span-1"></div>
            <div className="min-[420px]:w-8 min-[420px]:h-8 w-6 h-6 bg-gray-500 rounded-lg col-span-1 row-span-1"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto overflow-hidden">
        <div className="text-[.5rem] mt-2 ">Message:</div>
        <div
          className="ml-1 text-[.6rem] min-[600px]:text-sm font-semibold text-ellipsis overflow-hidden min-[500px]:line-clamp-1 line-clamp-3"
          dir="auto"
        >
          {react.message}
        </div>
      </div>
      {/* buttons  */}
      <div className="grid grid-rows-2 gap-2 mt-2">
        <ReactOnOffBtn
          reactId={reactId}
          reacts={reacts}
          id={id}
          react={react}
        />
        <div className="grid grid-cols-2 gap-2 text-center mt-1">
          <ReactEditBtn />
          <ReactDeleteBtn reactId={reactId} reacts={reacts} id={id} />
        </div>
      </div>
    </div>
  );
}
