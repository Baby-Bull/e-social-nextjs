/* eslint-disable import/prefer-default-export */
import base64 from "base-64";

const PREVENT_CORS_URL: string = "https://cors.bridged.cc";

export const getAccessTokenTwitter = async (code: string, redirectUri: string) => {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Basic ${base64.encode(
      `${process.env.NEXT_PUBLIC_TWITTER_API_KEY}:${process.env.NEXT_PUBLIC_TWITTER_API_KEY_SECRET}`,
    )}`,
  );

  headers.append("x-cors-grida-api-key", "875c0462-6309-4ddf-9889-5227b1acc82c");

  const formData = new FormData();
  formData.append("code", code);
  formData.append("grant_type", "authorization_code");
  formData.append("redirect_uri", redirectUri);
  formData.append("code_verifier", "challenge");

  try {
    const res = await fetch(`${PREVENT_CORS_URL}/https://api.twitter.com/2/oauth2/token`, {
      method: "POST",
      headers,
      body: new URLSearchParams({
        code,
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
        redirect_uri: redirectUri,
        code_verifier: "challenge",
      }),
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return false;
  }
};
