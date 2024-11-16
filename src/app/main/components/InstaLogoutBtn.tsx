"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function InstaLogoutBtn({ id }: { id: string }) {
  const router = useRouter();
  if (!id) return null;

  const handleLogOut = async () => {
    try {
      const response = await axios.post("api/instagram/handleLogout", {
        id,
      });
      if (response.status !== 200) {
        console.error("Failed to log out:", response.statusText);
        return;
      }
      router.refresh();
    } catch (error) {
      console.log("error while logging out", error);
    }
  };

  return (
    <div
      className="bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px] rounded-lg font-semibold p-3 mt-5 fixed block"
      onClick={() => handleLogOut()}
    >
      <div className="w-fit text-red-400 ">LogOut</div>
    </div>
  );
}
