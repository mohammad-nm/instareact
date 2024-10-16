export const getLLToken = async (SLToken: string) => {
  const response = await fetch(
    `hhttps://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process
      .env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET!}&access_token=${SLToken}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};
