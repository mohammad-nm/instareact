export default async function getProfile(LLToken: string) {
  const response = await fetch(
    `https://graph.instagram.com/v21.0/me?fields=user_id,username,profile_picture_url,account_type&access_token=${LLToken}`
  );
  const data = await response.json();

  if (data.data) {
    return data.data;
  } else return data;
}
