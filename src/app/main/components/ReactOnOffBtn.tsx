import { setReactsSlice } from "@/store/reactsSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ReactOnOffBtn({ reactId, id, reacts, react }: any) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(react.active);
  const handleOnOffReact = async () => {
    try {
      const res = await axios.post("/api/reacts/onOffReact", {
        reacts,
        reactId,
        id,
      });
      if (res.status === 200) {
        const data = res.data;
        dispatch(setReactsSlice(data[0].reacts));

        setActive(!active);
      } else {
        console.error(res.statusText);
      }
    } catch (error) {
      console.error("Error sending react:", error);
    }
  };
  return (
    <div className=" text-center">
      <button
        className={`${
          !active ? "bg-red-500" : "bg-green-500"
        } w-full rounded-md p-1 text-sm min-[600px]:text-lg`}
        onClick={() => handleOnOffReact()}
      >
        {!active ? "Off" : "On"}
      </button>
    </div>
  );
}
