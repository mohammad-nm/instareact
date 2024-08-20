export default function SearchBox() {
  return (
    <div className="mr-8 ml-auto mt-4  ">
      <div className="flex items-center">
        <input
          type="text"
          className="bg-[#D9D9D9] text-[9px] w-48 h-7 p-2 rounded-sm"
          placeholder="search in reacts:"
        />
        <div className="-ml-5 ">X</div>
      </div>
    </div>
  );
}
