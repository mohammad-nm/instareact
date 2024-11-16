"use client";

import Image from "next/image";

import InstaLogoutBtn from "./InstaLogoutBtn";
import { useState } from "react";
export default function InstaProfileBtn({
  id,
  instagram,
}: {
  id: string;
  instagram: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!instagram) return null;
  if (!id) return null;

  return (
    <>
      <div
        className="w-auto flex items-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="border-solid border-2 border-[#8f8f8f] rounded-full">
          <Image
            src={
              instagram.instagram?.profile_picture_url
                ? instagram.instagram?.profile_picture_url
                : ""
            }
            width={30}
            height={30}
            alt="instagram profile"
            className="rounded-full "
          />
        </div>
        <div className="ml-4">
          <div className="text-center text-[1rem] font-semibold">
            <div>
              {instagram.instagram ? instagram.instagram.username : "Loading"}
            </div>
          </div>
        </div>
        <div className={`self-center ml-4 ${isOpen && "rotate-180"}`}>
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.85315 6.33581C4.65302 6.5834 4.27556 6.5834 4.07543 6.33581L0.328422 1.70007C0.0641356 1.3731 0.296854 0.885763 0.717278 0.885763L8.2113 0.885763C8.63173 0.885763 8.86445 1.3731 8.60016 1.70007L4.85315 6.33581Z"
              fill="white"
            />
          </svg>
        </div>{" "}
      </div>

      {isOpen ? <InstaLogoutBtn id={id} /> : null}
    </>
  );
}
