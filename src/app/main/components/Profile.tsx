"use server";
import InstaProfileBtn from "./InstaProfileBtn";
import axios from "axios";
import InstaLoginBtn from "./InstaLoginBtn";
export default async function Profile({ id }: { id: string }) {
  if (!id) return null;
  const response = await axios.post(
    "https://instareact-beta.vercel.app/api/instagram/fetchInfo",
    { id }
  );
  if (response.status !== 200) return null;
  const instagram = response.data.instagram;

  return (
    <div>
      <button className="mt-4 ml-4  p-3 rounded-lg text-white bg-[#0A0A0A] [box-shadow:#666666_0px_0px_0px_1px]">
        {instagram ? (
          <InstaProfileBtn id={id} instagram={instagram} />
        ) : (
          <InstaLoginBtn id={id} />
        )}
      </button>
    </div>
  );
}
