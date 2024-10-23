export default function Sidebar({ handleLogOut }: any) {
  return (
    <div className="h-full w-[150px] fixed right-1 top-1 min-[550px]:w-[270px]">
      <div className="w-full h-auto rounded-md  p-4  justify-center text-[#ededed] bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] ">
        <div className="text-xl ml-2 font-semibold min-[550px]:text-2xl">
          InstaReact
        </div>
        <div className="w-[90%] mt-5 grid gap-y-3 ml-8">
          <div className="flex">
            <div className="w-fit  rounded-lg text-white text-xs min-[550px]:text-base">
              Dark Mode
            </div>
            <input type="checkbox" className="mr-4 ml-auto" />
          </div>
          <div
            onClick={() => handleLogOut()}
            className="w-fit rounded-lg text-white text-xs min-[550px]:text-base"
          >
            LogOut
          </div>
          <div className="w-fit rounded-lg text-white  text-xs min-[550px]:text-base">
            Account settings
          </div>
        </div>
      </div>
    </div>
  );
}
