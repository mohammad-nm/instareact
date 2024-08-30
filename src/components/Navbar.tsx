type NavbarProps = {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Navbar({
  sidebarIsOpen,
  setSidebarIsOpen,
}: NavbarProps) {
  return (
    <div className="w-full h-11   flex">
      <div className="ml-4 text-3xl place-content-center">InstaReact</div>
      <div className="mr-4 ml-auto place-content-center mt-2 z-50">
        <button className="" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H20.0024"
              stroke={sidebarIsOpen ? "black" : "white"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M1 7H20.0024"
              stroke={sidebarIsOpen ? "black" : "white"}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M1 13H20.0024"
              stroke={sidebarIsOpen ? "black" : "white"}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
