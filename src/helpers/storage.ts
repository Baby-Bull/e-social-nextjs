import { parseCookies, setCookie } from "nookies";
import cookie from "cookie";

export const USER_TOKEN = "USER_TOKEN";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const EXPIRES_IN = "EXPIRES_IN";

export const setItem = (key: string, value: any) => {
  setCookie(null, key, value, {
    path: "/",
  });
};

export const getItem = (key: string) => {
  const cookieStorage = parseCookies(cookie);
  return cookieStorage[key] ?? "";
};

export const setToken = (value: string, expiresIn?: number) => {
  setItem(USER_TOKEN, value);
  if (expiresIn) {
    const date = new Date();
    setItem(EXPIRES_IN, date.getTime() + expiresIn * 1000);
  }
};

export const setRefreshToken = (value: string) => {
  setItem(REFRESH_TOKEN, value);
};

export const clearToken = () => setToken("");

export const getToken = () => getItem(USER_TOKEN);

export const getRefreshToken = () => getItem(REFRESH_TOKEN);

export const getExpireIn = () => getItem(EXPIRES_IN);
