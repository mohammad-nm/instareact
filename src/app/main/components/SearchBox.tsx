export default function SearchBox() {
  return (
    <div className="mr-8 ml-auto mt-4  ">
      <div className="flex items-center ml-16 min-[950px]:ml-48  ">
        <input
          type="text"
          className="bg-white text-[9px] placeholder-black w-40 h-7 min-[600px]:h-9 p-2 pl-4 rounded-xl min-[600px]:w-72 font-semibold"
          placeholder="search in reacts:"
        />
        <div className="-ml-7">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.152 7.17802C8.11141 7.13689 8.10061 7.07241 8.13368 7.02502C8.75666 6.1319 9.03277 5.04075 8.90774 3.95662C8.77872 2.83786 8.23203 1.80908 7.37705 1.07609C6.52208 0.343097 5.42187 -0.0400447 4.29653 0.00331643C3.1712 0.0466776 2.10373 0.513343 1.30769 1.30995C0.511652 2.10656 0.0457503 3.17436 0.00319437 4.29973C-0.0393615 5.42509 0.344567 6.52503 1.07817 7.37948C1.81177 8.23393 2.84095 8.77988 3.95979 8.90811C5.0785 9.03632 6.20437 8.73745 7.1122 8.07129C7.11231 8.07122 7.11225 8.07105 7.11212 8.07105C7.11201 8.07105 7.11194 8.07117 7.11201 8.07127C7.13213 8.09869 7.15454 8.12497 7.17922 8.15011L9.826 10.7969C9.9549 10.9259 10.1298 10.9984 10.3121 10.9985C10.4945 10.9985 10.6694 10.9261 10.7984 10.7972C10.9274 10.6683 10.9999 10.4934 11 10.3111C11.0001 10.1287 10.9277 9.95379 10.7988 9.82479L8.152 7.17802ZM8.25031 4.46731C8.25031 4.96385 8.15251 5.45553 7.96249 5.91428C7.77247 6.37302 7.49396 6.78985 7.14285 7.14095C6.79174 7.49206 6.37491 7.77058 5.91617 7.9606C5.45742 8.15061 4.96574 8.24842 4.4692 8.24842C3.97266 8.24842 3.48098 8.15061 3.02223 7.9606C2.56349 7.77058 2.14666 7.49206 1.79555 7.14095C1.44444 6.78985 1.16593 6.37302 0.975911 5.91428C0.785893 5.45553 0.688091 4.96385 0.688091 4.46731C0.688091 3.4645 1.08646 2.50276 1.79555 1.79366C2.50465 1.08457 3.46639 0.686201 4.4692 0.686201C5.47201 0.686201 6.43375 1.08457 7.14285 1.79366C7.85194 2.50276 8.25031 3.4645 8.25031 4.46731Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
