export default function Sidebar({ handleLogOut }: any) {
  return (
    <div className="h-full w-[150px] fixed right-1 top-1 min-[550px]:w-[270px]">
      <div className="w-full h-auto bg-[#ffffff]  rounded-md  p-4  justify-center text-black [box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset] ">
        <div className="text-xl ml-2 font-semibold min-[550px]:text-2xl">
          InstaReact
        </div>
        <div className="w-[100%] mt-5 grid gap-y-3 ml-3">
          <div className="flex">
            <div className="w-fit bg-black rounded-lg text-white py-2 px-5 text-xs min-[550px]:text-base">
              Dark Mode
            </div>
            <input type="checkbox" className="mr-4 ml-auto" />
          </div>
          <div
            onClick={() => handleLogOut()}
            className="w-fit bg-black rounded-lg text-white py-2 px-5 text-xs min-[550px]:text-base"
          >
            LogOut
          </div>
          <div className="w-fit bg-black rounded-lg text-white py-2 px-5 text-xs min-[550px]:text-base">
            Account settings
          </div>
        </div>
      </div>
    </div>
  );
}
