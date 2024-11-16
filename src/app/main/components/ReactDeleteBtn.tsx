import { setReactsSlice } from "@/store/reactsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
export default function ReactDeleteBtn({ reacts, reactId, id }: any) {
  const dispatch = useDispatch();
  const handleDeleteReact = async (reactId: string) => {
    try {
      const res = await axios.post("/api/reacts/deleteReact", {
        reacts,
        reactId,
        id,
      });
      if (res.status === 200) {
        const data = res.data;
        dispatch(setReactsSlice(data[0].reacts));
      } else {
        console.error(res.statusText);
      }
    } catch (error) {
      console.error("Error sending react:", error);
    }
  };
  return (
    <div className="col-span-1">
      <button
        className="p-1 bg-[#1f1f1f] w-full rounded-md text-sm min-[600px]:text-lg"
        onClick={() => {
          handleDeleteReact(reactId);
        }}
      >
        Delete
      </button>
    </div>
  );
}
