export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] p-5 ">
      <section className="text-center items-center mt-12">
        <div>
          <h1 className="text-5xl font-bold min-[1024px]:text-8xl">
            InstaReact
          </h1>
          <h1 className="text-4xl font-bold leading-snug text-blue-500 min-[1024px]:text-6xl mt-20">
            Effortlessly Engage with Your Audience!
          </h1>
        </div>
      </section>

      <section className="text-center mt-24">
        <h2 className="text-3xl font-bold text-gray-800">
          Get Started with 10 Free Reactions!
        </h2>
        <h2 className="text-2xl mt-24 text-gray-600 font-bold">
          Sign Up and try!
        </h2>
      </section>

      <section className="mt-10 text-center">
        <a href="/login">
          <button className="text-xl font-semibold w-60 h-14 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
            Sign In / Sign Up
          </button>
        </a>
      </section>

      <footer className="mt-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-center py-6 border-t border-gray-200">
        <div className="font-medium text-lg">
          Made by:{" "}
          <a
            href="https://github.com/mohammad-nm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/mohammad-nickmagham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Linkedin
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://www.termsfeed.com/live/488dd180-31ba-41fd-b861-6c954f2f5e70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-lg"
          >
            Privacy & Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
