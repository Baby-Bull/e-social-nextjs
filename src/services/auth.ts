/* eslint-disable import/prefer-default-export */
import { api, setToken } from "src/helpers/api";
import { getRefreshToken, getToken, setRefreshToken } from "src/helpers/storage";

type TwitterAccessToken = {
  oauth_token: string;
  oauth_verifier: string;
  oauth_token_secret: string;
};

export const getAuthUrlTwitter = async (redirectUrl: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/twitter/authorize`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        callback_url: redirectUrl,
      }),
    });
    const response = await res.json();
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
};
export const authWithProvider = async (provider: string, accessToken: string | TwitterAccessToken) => {
  try {
    const res = await api.post(`/auth/${provider}`, { access_token: accessToken });
    if (res?.data?.access_token) {
      setToken(res?.data?.access_token, res?.data?.access_token_expires_in_seconds);
      setRefreshToken(res?.data?.refresh_token);
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
