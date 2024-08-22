export default function Navbar() {
  return (
    <div className="w-full h-10  border-b-2 border-black flex">
      <div className="ml-4 text-2xl place-content-center">InstaReact</div>
      <div className="mr-4 ml-auto place-content-center">
        <button>
          <svg
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="19.0024" y2="0.5" stroke="black" />
            <line y1="6" x2="19.0024" y2="6" stroke="black" />
            <line y1="11.5" x2="19.0024" y2="11.5" stroke="black" />
          </svg>
        </button>
      </div>
    </div>
  );
}
