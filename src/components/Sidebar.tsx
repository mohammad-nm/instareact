export default function Sidebar() {
  return (
    <div className="h-full w-[50%] fixed right-1 top-1">
      <div className="w-full h-auto bg-[#979797] bg-opacity-80 rounded-md outline outline-1 p-4 flex justify-center text-white">
        <div className="w-[100%] mt-10 grid gap-y-3">
          <div className="flex">
            <div>Dark Mode</div>
            <input type="checkbox" className="mr-4 ml-auto" />
          </div>
          <div>LogOut</div>
          <div>Account settings</div>
        </div>
      </div>
    </div>
  );
}
