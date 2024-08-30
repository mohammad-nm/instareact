import Image from "next/image";

export default function Profile() {
  return (
    <div className="mt-4 ml-4 bg-white p-2 bg-opacity-50 rounded-3xl text-black">
      <div className="w-auto  flex items-center">
        <div className="">
          <Image
            src={"https://xsgames.co/randomusers/avatar.php?g=female"}
            width={30}
            height={30}
            alt="instagram profile"
            className="rounded-full"
          />
        </div>
        <div className="ml-4">
          <div className="text-center text-[1rem]">
            <div>username</div>
          </div>
          <div className="flex text-center">
            <div className="text-[.5rem]">
              <div>posts</div>
              <div>0</div>
            </div>
            <div className="text-[.5rem] ml-2 ">
              <div className="">followers</div>
              <div>0</div>
            </div>
            <div className="text-[.5rem] ml-2">
              <div>following</div>
              <div>0</div>
            </div>
          </div>
        </div>
        <div className=" self-center ml-4">
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.85315 6.33581C4.65302 6.5834 4.27556 6.5834 4.07543 6.33581L0.328422 1.70007C0.0641356 1.3731 0.296854 0.885763 0.717278 0.885763L8.2113 0.885763C8.63173 0.885763 8.86445 1.3731 8.60016 1.70007L4.85315 6.33581Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
