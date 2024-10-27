import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
interface Profile {
  user_id: string;
  username: string;
  profile_picture_url: string;
  account_type: string;
}
export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>();
  const instagram = useSelector((state: any) => state.insta.insta);
  const clientID = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;
  const userId = useSelector((state: any) => state.session.session?.user?.id);
  const handleLogOut = async () => {
    try {
      const response = await fetch("api/instagram/handleLogout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) {
        console.error("Failed to log out:", response.statusText);
        return;
      }
      console.log("Logout successfully:", response);
    } catch (error) {
      console.log("error while logging out", error);
    }
  };
  return (
    <div>
      <button
        className="mt-4 ml-4  p-3 rounded-lg text-white bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!instagram?.token?.LLToken ? (
          <a
            className="flex items-center"
            href={`https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientID}&redirect_uri=${redirectUri}&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments&state=${userId}`}
            target="_blank"
          >
            <div className="ml-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C9.10781 0 8.68125 0.015625 7.34844 0.075C6.01563 0.1375 5.10781 0.346875 4.3125 0.65625C3.47788 0.969259 2.7221 1.46156 2.09844 2.09844C1.46156 2.7221 0.969259 3.47788 0.65625 4.3125C0.346875 5.10625 0.135938 6.01562 0.075 7.34375C0.015625 8.67969 0 9.10469 0 12.5016C0 15.8953 0.015625 16.3203 0.075 17.6531C0.1375 18.9844 0.346875 19.8922 0.65625 20.6875C0.976562 21.5094 1.40313 22.2062 2.09844 22.9016C2.79219 23.5969 3.48906 24.025 4.31094 24.3437C5.10781 24.6531 6.01406 24.8641 7.34531 24.925C8.67969 24.9844 9.10469 25 12.5 25C15.8953 25 16.3188 24.9844 17.6531 24.925C18.9828 24.8625 19.8938 24.6531 20.6891 24.3437C21.5231 24.0305 22.2784 23.5382 22.9016 22.9016C23.5969 22.2062 24.0234 21.5094 24.3437 20.6875C24.6516 19.8922 24.8625 18.9844 24.925 17.6531C24.9844 16.3203 25 15.8953 25 12.5C25 9.10469 24.9844 8.67969 24.925 7.34531C24.8625 6.01563 24.6516 5.10625 24.3437 4.3125C24.0307 3.47788 23.5384 2.7221 22.9016 2.09844C22.2779 1.46156 21.5221 0.969259 20.6875 0.65625C19.8906 0.346875 18.9812 0.135938 17.6516 0.075C16.3172 0.015625 15.8938 0 12.4969 0H12.5ZM11.3797 2.25313H12.5016C15.8391 2.25313 16.2344 2.26406 17.5516 2.325C18.7703 2.37969 19.4328 2.58438 19.8734 2.75469C20.4562 2.98125 20.8734 3.25312 21.3109 3.69062C21.7484 4.12812 22.0188 4.54375 22.2453 5.12813C22.4172 5.56719 22.6203 6.22969 22.675 7.44844C22.7359 8.76563 22.7484 9.16094 22.7484 12.4969C22.7484 15.8328 22.7359 16.2297 22.675 17.5469C22.6203 18.7656 22.4156 19.4266 22.2453 19.8672C22.0435 20.4092 21.7238 20.8997 21.3094 21.3031C20.8719 21.7406 20.4563 22.0109 19.8719 22.2375C19.4344 22.4094 18.7719 22.6125 17.5516 22.6688C16.2344 22.7281 15.8391 22.7422 12.5016 22.7422C9.16406 22.7422 8.76719 22.7281 7.45 22.6688C6.23125 22.6125 5.57031 22.4094 5.12969 22.2375C4.58724 22.0363 4.09625 21.7172 3.69219 21.3031C3.27699 20.8994 2.95676 20.4084 2.75469 19.8656C2.58438 19.4266 2.37969 18.7641 2.325 17.5453C2.26563 16.2281 2.25313 15.8328 2.25313 12.4937C2.25313 9.15469 2.26563 8.7625 2.325 7.44531C2.38125 6.22656 2.58438 5.56406 2.75625 5.12344C2.98281 4.54063 3.25469 4.12344 3.69219 3.68594C4.12969 3.24844 4.54531 2.97813 5.12969 2.75156C5.57031 2.57969 6.23125 2.37656 7.45 2.32031C8.60313 2.26719 9.05 2.25156 11.3797 2.25V2.25313ZM19.1734 4.32812C18.9765 4.32812 18.7814 4.36692 18.5994 4.44231C18.4174 4.51769 18.2521 4.62818 18.1128 4.76746C17.9735 4.90675 17.863 5.07211 17.7876 5.2541C17.7122 5.43609 17.6734 5.63114 17.6734 5.82813C17.6734 6.02511 17.7122 6.22016 17.7876 6.40215C17.863 6.58414 17.9735 6.7495 18.1128 6.88879C18.2521 7.02807 18.4174 7.13856 18.5994 7.21394C18.7814 7.28933 18.9765 7.32813 19.1734 7.32813C19.5713 7.32813 19.9528 7.17009 20.2341 6.88879C20.5154 6.60748 20.6734 6.22595 20.6734 5.82813C20.6734 5.4303 20.5154 5.04877 20.2341 4.76746C19.9528 4.48616 19.5713 4.32812 19.1734 4.32812ZM12.5016 6.08125C11.6501 6.06797 10.8045 6.2242 10.014 6.54085C9.22353 6.85749 8.50393 7.32824 7.89711 7.92566C7.29029 8.52309 6.80838 9.23526 6.47944 10.0207C6.1505 10.8062 5.98109 11.6492 5.98109 12.5008C5.98109 13.3523 6.1505 14.1954 6.47944 14.9808C6.80838 15.7663 7.29029 16.4785 7.89711 17.0759C8.50393 17.6733 9.22353 18.1441 10.014 18.4607C10.8045 18.7774 11.6501 18.9336 12.5016 18.9203C14.1868 18.894 15.7941 18.2061 16.9765 17.0051C18.159 15.804 18.8217 14.1862 18.8217 12.5008C18.8217 10.8154 18.159 9.19752 16.9765 7.99648C15.7941 6.79545 14.1868 6.10754 12.5016 6.08125ZM12.5016 8.33281C13.0488 8.33281 13.5907 8.4406 14.0963 8.65002C14.6019 8.85944 15.0613 9.16639 15.4482 9.55335C15.8352 9.94031 16.1421 10.3997 16.3515 10.9053C16.561 11.4109 16.6688 11.9528 16.6688 12.5C16.6688 13.0472 16.561 13.5891 16.3515 14.0947C16.1421 14.6003 15.8352 15.0597 15.4482 15.4466C15.0613 15.8336 14.6019 16.1406 14.0963 16.35C13.5907 16.5594 13.0488 16.6672 12.5016 16.6672C11.3964 16.6672 10.3364 16.2281 9.55492 15.4466C8.77342 14.6651 8.33438 13.6052 8.33438 12.5C8.33438 11.3948 8.77342 10.3349 9.55492 9.55335C10.3364 8.77185 11.3964 8.33281 12.5016 8.33281Z"
                  fill="white"
                />
              </svg>
            </div>{" "}
            <div className="text-center text-[1rem] font-semibold ml-4 mr-2">
              Login
            </div>
          </a>
        ) : (
          <>
            <div
              className="w-auto flex items-center "
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* "https://xsgames.co/randomusers/avatar.php?g=female" */}
              <div className="border-solid border-2 border-[#8f8f8f] rounded-full">
                <Image
                  src={
                    instagram.profile?.profile_picture_url
                      ? instagram.profile?.profile_picture_url
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
                    {instagram.profile
                      ? instagram.profile.username
                      : "Loading..."}
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
              </div>
            </div>
          </>
        )}
      </button>
      {isOpen && (
        <button className="bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] rounded-lg ml-4 font-semibold p-3 mt-2 fixed block">
          <div className="w-fit text-red-400 " onClick={() => handleLogOut()}>
            LogOut
          </div>
        </button>
      )}
    </div>
  );
}
