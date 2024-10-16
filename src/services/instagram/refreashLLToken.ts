export const refreashLLToken = async (LLToken: string) => {
  const response = await fetch(
    "https://graph.instagram.com/refresh_access_token",
    {
      method: "GET",
      body: new URLSearchParams({
        grant_type: "ig_refresh_token",
        access_token: LLToken,
      }),
    }
  );

  const data = await response.json();
  return data;
};
