import { useState } from "react";

export default function Sidebar({ handleLogOut }: any) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div className="h-full w-[190px] fixed right-1 top-1 min-[550px]:w-[270px]">
      <div className="w-full h-auto bg-[#ffffff]  rounded-md  p-4 flex justify-center text-black [box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset] ">
        <div className="w-[100%] mt-10 grid gap-y-3">
          <div className="flex">
            <div>Dark Mode</div>
            <input type="checkbox" className="mr-4 ml-auto" />
          </div>
          <div onClick={() => handleLogOut()}>LogOut</div>
          <div>Account settings</div>
        </div>
      </div>
    </div>
  );
}
