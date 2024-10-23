import { setReactsSlice } from "@/store/reactsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ReactInfo({ react, index }: any) {
  const reacts = useSelector((state: any) => state.reacts.reacts);
  const dispatch = useDispatch();
  const id = useSelector((state: any) => state.session.session?.user?.id);
  const reactId = react.id;
  const handleDeleteReact = async () => {
    try {
      const res = await fetch("/api/reacts/deleteReact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reacts, reactId, id }),
      });
      if (res.ok) {
        const data = await res.json();

        dispatch(setReactsSlice(data[0].reacts));
      } else {
        console.error(res.statusText);
      }
    } catch (error) {
      console.error("Error sending react:", error);
    }
  };
  return (
    <div
      className="w-[160px] min-[600px]:w-80 max-[388px]:w-[90%] h-auto rounded-md p-4 bg-[#0A0A0A] box-content mx-auto [box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset] break-inside-avoid mb-4 "
      key={index}
    >
      {/* bg-[#cdcdcd] */}
      <div className="flex w-full ">
        <div className="w-3/5">
          <h2>
            <div className="text-[.5rem] ">React to: </div>
            <div className="text-[.6rem] font-semibold ">
              {react.reactTo.map((item: string, index: number) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </h2>
          <h2>
            <div className="text-[.5rem] mt-2 ">Look for: </div>
            <div className="text-[.6rem] font-semibold">
              {react.lookFor.map((item: string, index: number) => (
                <div key={index} className="mr-3">
                  {item}
                </div>
              ))}
            </div>{" "}
          </h2>
        </div>
        <div className="w-2/5 justify-center flex">
          <div className="">
            <svg
              width="55"
              height="49"
              viewBox="0 0 55 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.800049"
                y="15.0739"
                width="35.4158"
                height="35.4158"
                rx="5"
                transform="rotate(-20 0.800049 15.0739)"
                fill="#39CFFF"
              />
              <rect
                x="20.591"
                y="0.599991"
                width="35.4158"
                height="35.4158"
                rx="5"
                transform="rotate(15 20.591 0.599991)"
                fill="#9C39FF"
              />
              <rect
                x="10.2443"
                y="11.2247"
                width="35.4158"
                height="35.4158"
                rx="5"
                fill="#FF3939"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="text-[.5rem] mt-2 ">Message:</div>
        <div
          className="ml-1 text-[.6rem] font-semibold  text-ellipsis overflow-hidden whitespace-normal line-clamp-5 "
          dir="auto"
        >
          {react.message}
        </div>
      </div>
      {/* buttons */}
      <div className="grid grid-rows-2 gap-2 mt-2">
        <div className=" text-center">
          <button className="bg-green-500 w-full rounded-md p-1">
            Activate
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center mt-1">
          <div className="col-span-1">
            <button className="bg-[#1f1f1f] w-full rounded-md p-1">Edit</button>
          </div>
          <div className="col-span-1">
            <button
              className="p-1 bg-[#1f1f1f] w-full rounded-md"
              onClick={() => {
                handleDeleteReact();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
