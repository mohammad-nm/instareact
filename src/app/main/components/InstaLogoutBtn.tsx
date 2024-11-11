"use client";
import axios from "axios";
export default function InstaLogoutBtn({ id }: { id: string }) {
  const handleLogOut = async () => {
    try {
      const response = await axios.post("api/instagram/handleLogout", {
        id,
      });
      if (response.status !== 200) {
        console.error("Failed to log out:", response.statusText);
      }
      console.log("Logout successfully:", response);
    } catch (error) {
      console.log("error while logging out", error);
    }
  };
  return (
    <button className="bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] rounded-lg ml-4 font-semibold p-3 mt-2 fixed block">
      <div className="w-fit text-red-400 " onClick={() => handleLogOut()}>
        LogOut
      </div>
    </button>
  );
}
