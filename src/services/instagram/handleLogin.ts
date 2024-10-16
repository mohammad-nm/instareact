"use server";

// Function to get the Instagram access token (short-lived)
export const getShortLivedToken = async (code: string) => {
  try {
    const response = await fetch(
      "https://api.instagram.com/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.INSTAGRAM_CLIENT_ID!,
          client_secret: process.env.INSTAGRAM_CLIENT_SECRET!,
          grant_type: "authorization_code",
          redirect_uri: process.env.INSTAGRAM_REDIRECT_URI!,
          code: code,
        }).toString(),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error_message || "Failed to retrieve access token");
    }
    console.log(data);

    // Return the short-lived access token
    return data;
  } catch (error) {
    console.error("Error fetching Instagram access token:", error);
    throw error;
  }
};

// Function to exchange the short-lived access token for a long-lived token
export const getLongLivedToken = async (shortLivedToken: string) => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${shortLivedToken}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error.message || "Failed to retrieve long-lived access token"
      );
    }

    // Return the long-lived access token
    return data;
  } catch (error) {
    console.error("Error exchanging for long-lived token:", error);
    throw error;
  }
};
