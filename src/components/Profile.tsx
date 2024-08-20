import Image from "next/image";

export default function Profile() {
  return (
    <div className="">
      <div className="w-auto mt-4 flex items-center">
        <div className="ml-4 mt-2">
          <Image
            src={"https://xsgames.co/randomusers/avatar.php?g=female"}
            width={30}
            height={30}
            alt="instagram profile"
            className="rounded-full"
          />
        </div>
        <div className="ml-4">
          <div className="text-center text-[10px]">
            <div>username</div>
          </div>
          <div className="flex text-center">
            <div className="text-[5px]">
              <div>posts</div>
              <div>0</div>
            </div>
            <div className="text-[5px] ml-2 ">
              <div className="">followers</div>
              <div>0</div>
            </div>
            <div className="text-[5px] ml-2">
              <div>following</div>
              <div>0</div>
            </div>
          </div>
        </div>
        <div className=" self-center ml-4">X</div>
      </div>
    </div>
  );
}
