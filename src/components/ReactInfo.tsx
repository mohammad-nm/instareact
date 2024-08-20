"use client";
import { useState } from "react";

export default function ReactInfo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className=" h-auto w-[90%] outline-1 outline mt-6 rounded-md p-2  bg-[#F0EEEB] shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="text-[8px] w-1/4 grid gap-y-1">
            <h2>
              react to: <span>DM, comments</span>
            </h2>
            <h2>
              look for: <span>44, Hoodie</span>{" "}
            </h2>
            <h2>
              date: <span>13th Sep</span>
            </h2>
          </div>
          <div className="text-[8px] h-[55px] w-3/6 overflow-hidden ml-4">
            <h2 className="">message: </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              delectus, error velit tempora quis nisi doloremque doloribus esse
              incidunt reiciendis commodi, modi adipisci. Omnis eius corporis,
              quaerat sapiente quidem assumenda.
            </p>
          </div>
          <div className="mr-4 ml-auto">photo</div>
        </div>
        {isOpen ? <div>aaaaaaaaa</div> : null}
      </div>
    </>
  );
}
