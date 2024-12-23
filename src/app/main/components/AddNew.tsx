"use client";
import { validateNewReactLookFor } from "@/services/formValidation";
import { setReactsSlice } from "@/store/reactsSlice";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import axios from "axios";
interface NewReact {
  reactTo: string[];
  lookFor: string[];
  message: string;
  photos: string[];
  id: string;
  active: boolean;
}
export default function AddNew({ ID }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const reacts = useSelector((state: any) => state.reacts.reacts);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [validationError, setValidationError] = useState({
    reactTo: "",
    lookFor: "",
    message: "",
    addNew: "",
  });
  const [newReact, setNewReact] = useState<NewReact>({
    reactTo: [],
    lookFor: [],
    message: "",
    photos: [],
    id: v4(),
    active: true,
  });
  const handleValidation = () => {
    let valid = true;
    const errors = {
      reactTo: "",
      lookFor: "",
      message: "",
      addNew: "",
    };

    if (newReact.reactTo.length === 0) {
      errors.reactTo = "*Check one at least!";
      valid = false;
    }
    if (newReact.lookFor.length === 0) {
      errors.lookFor = "*Add one at least!";
      valid = false;
    }
    if (newReact.message.length > 500 || newReact.message.length === 0) {
      errors.message = "*1 to 500 characters!";
      valid = false;
    }

    if (valid) {
      setValidationError({ reactTo: "", lookFor: "", message: "", addNew: "" });
    }
    if (!valid) {
      errors.addNew = "*Complete the from!";
    }
    setValidationError(errors);
    return valid;
  };
  const handelSendNewReact = async () => {
    const validated = handleValidation();
    if (validated) {
      try {
        const res = await axios.post("/api/reacts/sendReacts", {
          id: ID,
          newReact,
          reacts,
        });
        if (res.status === 200) {
          const data = res.data;
          dispatch(setReactsSlice(data[0].reacts));
          setNewReact({
            reactTo: [],
            lookFor: [],
            message: "",
            photos: [],
            id: v4(),
            active: false,
          });
          setIsOpen(false);
        } else {
          console.error(res.statusText);
        }
      } catch (error) {
        console.error("Error sending react:", error);
      }
    }
  };
  return (
    <>
      <div
        className="fixed bottom-7 right-7 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 51 51"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM26.5625 14.0625C26.5625 13.6481 26.3979 13.2507 26.1049 12.9576C25.8118 12.6646 25.4144 12.5 25 12.5C24.5856 12.5 24.1882 12.6646 23.8951 12.9576C23.6021 13.2507 23.4375 13.6481 23.4375 14.0625V23.4375H14.0625C13.6481 23.4375 13.2507 23.6021 12.9576 23.8951C12.6646 24.1882 12.5 24.5856 12.5 25C12.5 25.4144 12.6646 25.8118 12.9576 26.1049C13.2507 26.3979 13.6481 26.5625 14.0625 26.5625H23.4375V35.9375C23.4375 36.3519 23.6021 36.7493 23.8951 37.0424C24.1882 37.3354 24.5856 37.5 25 37.5C25.4144 37.5 25.8118 37.3354 26.1049 37.0424C26.3979 36.7493 26.5625 36.3519 26.5625 35.9375V26.5625H35.9375C36.3519 26.5625 36.7493 26.3979 37.0424 26.1049C37.3354 25.8118 37.5 25.4144 37.5 25C37.5 24.5856 37.3354 24.1882 37.0424 23.8951C36.7493 23.6021 36.3519 23.4375 35.9375 23.4375H26.5625V14.0625Z"
            fill="white"
          />
        </svg>
      </div>
      {isOpen ? (
        <div
          className="w-[90%] h-auto bg-[#ffffff] p-4 fixed bottom-4 rounded-xl  text-black [box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset] max-w-[400px]  min-[450px]:mr-5
"
        >
          <div className="flex items-center">
            <div>React to: </div>
            <div className="flex items-center ml-6">
              <input
                type="checkbox"
                name="DM"
                id="DM"
                onChange={(e) =>
                  e.target.checked
                    ? setNewReact((prev) => ({
                        ...prev,
                        reactTo: [...(prev.reactTo || []), "DM"],
                      }))
                    : setNewReact((prev) => ({
                        ...prev,
                        reactTo: (prev.reactTo || []).filter(
                          (item) => item !== "DM"
                        ),
                      }))
                }
              />
              <label htmlFor="DM" className="ml-2">
                DM
              </label>
            </div>
            <div className="flex items-center ml-6">
              <input
                type="checkbox"
                name="comments"
                id="comments"
                onChange={(e) =>
                  e.target.checked
                    ? setNewReact((prev) => ({
                        ...prev,
                        reactTo: [...(prev.reactTo || []), "Comments"],
                      }))
                    : setNewReact((prev) => ({
                        ...prev,
                        reactTo: (prev.reactTo || []).filter(
                          (item) => item !== "Comments"
                        ),
                      }))
                }
              />
              <label htmlFor="comments" className="ml-2">
                Comments
              </label>
            </div>
            <div className="w-fit mr-4 ml-auto mt-2">
              <button onClick={() => setIsOpen(false)}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.518734 0.518734C0.663877 0.373224 0.836301 0.257778 1.02613 0.179007C1.21596 0.100237 1.41946 0.0596924 1.62498 0.0596924C1.83051 0.0596924 2.03401 0.100237 2.22384 0.179007C2.41367 0.257778 2.58609 0.373224 2.73123 0.518734L11 8.79061L19.2687 0.518734C19.414 0.37346 19.5865 0.258221 19.7763 0.179599C19.9661 0.100977 20.1695 0.0605105 20.375 0.0605105C20.5804 0.0605105 20.7839 0.100977 20.9737 0.179599C21.1635 0.258221 21.336 0.37346 21.4812 0.518734C21.6265 0.664009 21.7417 0.836475 21.8204 1.02629C21.899 1.2161 21.9395 1.41953 21.9395 1.62498C21.9395 1.83043 21.899 2.03387 21.8204 2.22368C21.7417 2.41349 21.6265 2.58596 21.4812 2.73123L13.2094 11L21.4812 19.2687C21.6265 19.414 21.7417 19.5865 21.8204 19.7763C21.899 19.9661 21.9395 20.1695 21.9395 20.375C21.9395 20.5804 21.899 20.7839 21.8204 20.9737C21.7417 21.1635 21.6265 21.336 21.4812 21.4812C21.336 21.6265 21.1635 21.7417 20.9737 21.8204C20.7839 21.899 20.5804 21.9395 20.375 21.9395C20.1695 21.9395 19.9661 21.899 19.7763 21.8204C19.5865 21.7417 19.414 21.6265 19.2687 21.4812L11 13.2094L2.73123 21.4812C2.58596 21.6265 2.41349 21.7417 2.22368 21.8204C2.03387 21.899 1.83043 21.9395 1.62498 21.9395C1.41953 21.9395 1.2161 21.899 1.02629 21.8204C0.836475 21.7417 0.664009 21.6265 0.518734 21.4812C0.37346 21.336 0.258221 21.1635 0.179599 20.9737C0.100977 20.7839 0.0605105 20.5804 0.0605105 20.375C0.0605105 20.1695 0.100977 19.9661 0.179599 19.7763C0.258221 19.5865 0.37346 19.414 0.518734 19.2687L8.79061 11L0.518734 2.73123C0.373224 2.58609 0.257778 2.41367 0.179007 2.22384C0.100237 2.03401 0.0596924 1.83051 0.0596924 1.62498C0.0596924 1.41946 0.100237 1.21596 0.179007 1.02613C0.257778 0.836301 0.373224 0.663877 0.518734 0.518734Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          {validationError.reactTo === "" ? null : (
            <span className="text-xs text-orange-400 font-semibold">
              {validationError.reactTo}
            </span>
          )}
          <div className="flex mt-4 flex-wrap items-center ">
            <div className="">Look for:</div>
            <div className="w-1/3 flex items-center">
              <input
                type="text"
                name="lookFor"
                className="ml-2 bg-[#efefef] p-2 w-full text-[.5rem] rounded-sm "
                placeholder="What to look for?"
                ref={inputRef}
              />
              <div
                className="-ml-8"
                onClick={() => {
                  const inputValue = inputRef.current?.value || "";
                  if (validateNewReactLookFor(inputValue)) {
                    setNewReact((prev) => ({
                      ...prev,
                      lookFor: [...(prev.lookFor || []), inputValue],
                    }));
                    setValidationError({
                      lookFor: "",
                      reactTo: validationError.reactTo,
                      message: validationError.message,
                      addNew: validationError.addNew,
                    });
                  } else {
                    setValidationError({
                      lookFor: "*1 to 12 charachters!",
                      reactTo: validationError.reactTo,
                      message: validationError.message,
                      addNew: validationError.addNew,
                    });
                  }
                  if (inputRef.current) {
                    inputRef.current.value = "";
                  }
                }}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9662 6.51418C16.2154 6.51418 16.4544 6.59508 16.6306 6.73908C16.8068 6.88308 16.9058 7.07839 16.9058 7.28204V11.8892H22.5435C22.7927 11.8892 23.0316 11.9701 23.2079 12.1141C23.3841 12.2581 23.4831 12.4534 23.4831 12.657C23.4831 12.8607 23.3841 13.056 23.2079 13.2C23.0316 13.344 22.7927 13.4249 22.5435 13.4249H16.9058V18.032C16.9058 18.2357 16.8068 18.431 16.6306 18.575C16.4544 18.719 16.2154 18.7999 15.9662 18.7999C15.717 18.7999 15.478 18.719 15.3018 18.575C15.1256 18.431 15.0266 18.2357 15.0266 18.032V13.4249H9.38895C9.13975 13.4249 8.90076 13.344 8.72455 13.2C8.54834 13.056 8.44934 12.8607 8.44934 12.657C8.44934 12.4534 8.54834 12.2581 8.72455 12.1141C8.90076 11.9701 9.13975 11.8892 9.38895 11.8892H15.0266V7.28204C15.0266 7.07839 15.1256 6.88308 15.3018 6.73908C15.478 6.59508 15.717 6.51418 15.9662 6.51418Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            {validationError ? (
              <span className="text-orange-400 text-xs ml-2 font-semibold">
                {validationError.lookFor}
              </span>
            ) : (
              ""
            )}
            {newReact.lookFor.map((item, index) => {
              return (
                <div
                  className="flex ml-4 items-center bg-[#efefef] bg-opacity-60 rounded-lg mt-1 mb-1"
                  key={index}
                >
                  <div className="ml-2">{item}</div>
                  <div
                    className="ml-2"
                    onClick={() => {
                      setNewReact((prev) => ({
                        ...prev,
                        lookFor: prev.lookFor.filter((i, ind) => ind !== index),
                      }));
                    }}
                  >
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.76184 7.50625C7.83317 7.43474 7.9179 7.37801 8.01119 7.3393C8.10448 7.30059 8.20448 7.28066 8.30548 7.28066C8.40648 7.28066 8.50649 7.30059 8.59978 7.3393C8.69307 7.37801 8.7778 7.43474 8.84913 7.50625L12.9126 11.5713L16.9761 7.50625C17.0475 7.43486 17.1323 7.37823 17.2255 7.33959C17.3188 7.30095 17.4188 7.28106 17.5198 7.28106C17.6207 7.28106 17.7207 7.30095 17.814 7.33959C17.9073 7.37823 17.992 7.43486 18.0634 7.50625C18.1348 7.57764 18.1914 7.6624 18.2301 7.75567C18.2687 7.84895 18.2886 7.94893 18.2886 8.04989C18.2886 8.15086 18.2687 8.25083 18.2301 8.34411C18.1914 8.43739 18.1348 8.52214 18.0634 8.59353L13.9984 12.657L18.0634 16.7205C18.1348 16.7919 18.1914 16.8767 18.2301 16.97C18.2687 17.0632 18.2886 17.1632 18.2886 17.2642C18.2886 17.3651 18.2687 17.4651 18.2301 17.5584C18.1914 17.6517 18.1348 17.7364 18.0634 17.8078C17.992 17.8792 17.9073 17.9358 17.814 17.9745C17.7207 18.0131 17.6207 18.033 17.5198 18.033C17.4188 18.033 17.3188 18.0131 17.2255 17.9745C17.1323 17.9358 17.0475 17.8792 16.9761 17.8078L12.9126 13.7428L8.84913 17.8078C8.77773 17.8792 8.69298 17.9358 8.5997 17.9745C8.50642 18.0131 8.40645 18.033 8.30548 18.033C8.20452 18.033 8.10454 18.0131 8.01127 17.9745C7.91799 17.9358 7.83323 17.8792 7.76184 17.8078C7.69045 17.7364 7.63382 17.6517 7.59518 17.5584C7.55654 17.4651 7.53666 17.3651 7.53666 17.2642C7.53666 17.1632 7.55654 17.0632 7.59518 16.97C7.63382 16.8767 7.69045 16.7919 7.76184 16.7205L11.8269 12.657L7.76184 8.59353C7.69033 8.52221 7.6336 8.43747 7.59489 8.34419C7.55618 8.2509 7.53625 8.15089 7.53625 8.04989C7.53625 7.94889 7.55618 7.84888 7.59489 7.7556C7.6336 7.66231 7.69033 7.57758 7.76184 7.50625Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <div className="mt-4 ">
            <div>Message:</div>
            <div className="h-28 mt-1">
              <textarea
                className="h-full w-full bg-[#efefef] rounded-sm p-2 block "
                placeholder="Type your message here:"
                onChange={(e) => {
                  setNewReact((prev) => ({ ...prev, message: e.target.value }));
                  newReact.message.length > 500
                    ? setValidationError({
                        reactTo: validationError.reactTo,
                        lookFor: validationError.lookFor,
                        message: "*Less than 500 characters!",
                        addNew: validationError.addNew,
                      })
                    : null;
                }}
              />
            </div>
          </div>
          {validationError.message && (
            <div className=" font-semibold text-xs text-orange-400 mt-2">
              {validationError.message}
            </div>
          )}
          <div className="mt-3 bg-[#efefef] w-fit p-1 pr-2 rounded-lg flex items-center  ">
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7134 6.14322C12.917 6.14322 13.1124 6.22412 13.2564 6.36812C13.4004 6.51212 13.4813 6.70743 13.4813 6.91107V11.5182H18.0884C18.292 11.5182 18.4873 11.5991 18.6313 11.7431C18.7753 11.8871 18.8562 12.0824 18.8562 12.2861C18.8562 12.4897 18.7753 12.685 18.6313 12.829C18.4873 12.973 18.292 13.0539 18.0884 13.0539H13.4813V17.6611C13.4813 17.8647 13.4004 18.06 13.2564 18.204C13.1124 18.348 12.917 18.4289 12.7134 18.4289C12.5098 18.4289 12.3144 18.348 12.1704 18.204C12.0264 18.06 11.9455 17.8647 11.9455 17.6611V13.0539H7.33841C7.13476 13.0539 6.93946 12.973 6.79546 12.829C6.65146 12.685 6.57056 12.4897 6.57056 12.2861C6.57056 12.0824 6.65146 11.8871 6.79546 11.7431C6.93946 11.5991 7.13476 11.5182 7.33841 11.5182H11.9455V6.91107C11.9455 6.70743 12.0264 6.51212 12.1704 6.36812C12.3144 6.22412 12.5098 6.14322 12.7134 6.14322Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>Photo</div>
          </div>
          <div className="flex w-full mt-3 mb-2">
            <div className="bg-black text-white p-2 w-full items-center text-center rounded-lg ml-4 mr-4 ">
              <button className="" onClick={() => handelSendNewReact()}>
                Add new
              </button>
            </div>
          </div>
          {validationError.addNew ? (
            <span className="text-xs text-orange-400 font-semibold">
              {validationError.addNew}
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
