export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 h-screen">
      <div className="bg-gray-300 border-2 border-black p-10 text-center text-xl md:hidden">
        <div>
          <a href="/login">
            <button className="text-white bg-black w-60 h-16 rounded-md p-2 font-semibold text-xl">
              Sign In / Sign Up
            </button>
          </a>
        </div>
      </div>

      <div className="md:col-span-3 bg-gray-300 border-2 border-black p-10 text-center text-xl">
        React to your messages comments with gerami!
      </div>

      <div className="bg-gray-300 border-2 border-black p-10 text-center text-xl">
        Sign Up and try it for free!
      </div>

      <div className="bg-gray-300 border-2 border-black p-10 text-center text-xl">
        <div>
          <a href="/login">
            <button className="text-white bg-black w-60 h-16 rounded-md p-2 font-semibold text-xl">
              Sign In / Sign Up
            </button>
          </a>
        </div>
      </div>

      <div className="bg-gray-300 border-2 border-black p-10 text-center text-xl">
        Made by &quot;github or linkedin link&quot;
      </div>

      <div className="md:col-span-3 bg-gray-300 border-2 border-black p-10 text-center text-xl">
        <a href="https://www.termsfeed.com/live/488dd180-31ba-41fd-b861-6c954f2f5e70">
          Privecy and policy
        </a>
      </div>

      <div className="bg-gray-300 border-2 border-black p-10 text-center text-xl md:hidden">
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
