export const getLLToken = async (SLToken: string) => {
  const response = await fetch(`https://graph.instagram.com/access_token`, {
    method: "GET",
    body: new URLSearchParams({
      grant_type: "ig_exchange_token",
      client_secret: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET!,
      access_token: SLToken,
    }),
  });

  const data = await response.json();
  return data;
};
