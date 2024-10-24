export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 h-screen ">
      {/* DIV 3333333333 */}
      <div className="text-center text-xl md:hidden">
        <div className="">
          <a href="/login">
            <button className="text-white bg-black w-60 h-16 rounded-md p-2 font-semibold text-xl ">
              Sign In / Sign Up
            </button>
          </a>
        </div>
      </div>
      {/* DIV 111111111111 */}
      <div className="md:col-span-3 text-center text-xl">
        <div>
          <div className="">
            <div>React to your</div>
            <div>messages and comments</div>
            <div>with gerami!</div>
          </div>
        </div>
        <div>grami will do the job!</div>
      </div>
      {/* DIV 22222222222 */}
      <div className=" p-10 text-center text-xl">
        <div className="">Up to 10 reacts for free!</div>
        <div>Sign Up and try it for free!</div>
      </div>
      {/* DIV 33333333333 */}
      <div className=" p-10 text-center text-xl">
        <div>
          <a href="/login">
            <button className="text-white bg-black w-60 h-16 rounded-md p-2 font-semibold text-xl">
              Sign In / Sign Up
            </button>
          </a>
        </div>
      </div>
      {/* DIV 44444444444 */}
      <div className=" p-10 text-center text-xl">
        Made by:{" "}
        <a href="https://github.com/mohammad-nm/instareact" target="_blank">
          Github
        </a>{" "}
        <a href="https://linkedin.com" target="_blank">
          Linkedin
        </a>
      </div>
      {/* DIV 55555555555 */}
      <div className="md:col-span-3 text-blue-400 p-10 text-center text-xl">
        <a
          href="https://www.termsfeed.com/live/488dd180-31ba-41fd-b861-6c954f2f5e70"
          target="_blank"
        >
          Privecy and policy
        </a>
      </div>
      {/* DIV 333333333333 */}
      <div className=" p-10 text-center text-xl md:hidden">
        <div>
          <a href="/login">
            <button className="text-white bg-black w-60 h-16 rounded-md p-2 font-semibold text-xl">
              Sign In / Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
