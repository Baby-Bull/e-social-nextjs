/* eslint-disable import/prefer-default-export */
import base64 from "base-64";

import { api, setToken } from "src/helpers/api";
import { getRefreshToken, getToken, setIsProfileEdited, setRefreshToken } from "src/helpers/storage";

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

export const authWithProvider = async (provider: string, accessToken: string) => {
  try {
    const res = await api.post(`/auth/${provider}`, { access_token: accessToken });
    if (res?.data?.access_token) {
      setToken(res?.data?.access_token, res?.data?.access_token_expires_in_seconds);
      setRefreshToken(res?.data?.refresh_token);
      setIsProfileEdited(res?.data?.user?.is_profile_edited);
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  try {
    const res = await api.post("/auth/logout");
    setToken("");
    setIsProfileEdited("");
    return res;
  } catch (error) {
    return error;
  }
};

export const refreshToken = async () => {
  try {
    if (getToken()) {
      const res = await api.post("/auth/tokens", { access_token: getToken(), refresh_token: getRefreshToken() });
      if (res?.data?.access_token) {
        setToken(res?.data?.access_token, res?.data?.access_token_expires_in_seconds);
        setRefreshToken(res?.data?.refresh_token);
      }
      return res;
    }
  } catch (error) {
    return error;
  }
};

export const updateProfile = async (dataUpdate: any) => {
  try {
    const res = await api.patch("/user/profile", dataUpdate);
    return res;
  } catch (error) {
    return error;
  }
};
