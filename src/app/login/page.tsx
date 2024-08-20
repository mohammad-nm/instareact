export default function Login() {
  return (
    <div className="w-full h-svh ">
      <div className="w-full mt-[90px] flex justify-center">
        <div className="text-7xl">InstaReact</div>
      </div>
      <div>
        <div className="w-full flex justify-center mt-20">
          <div className="w-full h-[4%] flex justify-center ">
            <div className="bg-black text-white h-9 w-[33%] flex justify-center rounded-sm">
              <button>Login</button>
            </div>
            <div className="h-12 w-[33%] justify-center flex rounded-tr-sm bg-[#979797] text-black opacity-50">
              <button className=" opacity-100 font-bold text-black">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[66%] outline outline-2 -outline-offset-2 -mt-[1px]">
            <div>email</div>
            <div>pass</div>
            <div>forgot</div>
            <div>login with google</div>
            <div>login</div>
          </div>
        </div>
      </div>
    </div>
  );
}
