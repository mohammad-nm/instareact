import { useRouter } from "next/navigation";
import { clearReactsSlice } from "@/store/reactsSlice";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  function deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  const handleLogOut = () => {
    deleteCookie("sessionCookie");
    dispatch(clearReactsSlice());

    return router.push("/login");
  };
  return (
    <div className="h-full w-[180px] fixed right-2 top-2 min-[550px]:w-[270px]">
      <div className="w-full h-auto rounded-md justify-center text-[#ededed] bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] ">
        <div className="text-xl ml-3 font-semibold min-[550px]:text-2xl pt-2">
          InstaReact
        </div>
        <div className="w-[90%] mt-5 grid gap-y-3 ml-5 pb-4">
          {/* <div className="flex">
            <div className="w-fit  rounded-lg text-white text-xs min-[550px]:text-base ">
              Dark Mode
            </div>
            <input type="checkbox" className="mr-4 ml-auto" />
          </div> */}
          <button
            onClick={() => handleLogOut()}
            className="w-fit rounded-lg text-white text-xs min-[550px]:text-base bg-orange-500 p-2"
          >
            Log Out from InstaReact
          </button>
          <div className="w-fit rounded-lg text-white  text-xs min-[550px]:text-base bg-orange-500 p-2">
            Account settings
          </div>
        </div>
      </div>
    </div>
  );
}
