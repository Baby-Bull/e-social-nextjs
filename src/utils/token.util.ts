import { parseCookies, setCookie } from "nookies";
import cookie from "cookie";

import {
  EXPIRES_IN,
  IS_PROFILE_EDITED,
  IS_RENEWAL,
  REFRESH_TOKEN,
  TRIGGER_REFRESH,
  USER_TOKEN,
} from "src/constants/Token.constant";

export const setItem = (key: string, value: any) => {
  setCookie(null, key, value, {
    path: "/",
  });
};

export const getItem = (key: string): string => {
  const cookieStorage = parseCookies(cookie);
  return cookieStorage[key] ?? "";
};

export const setToken = (value: string, expiresIn?: number) => {
  setItem(USER_TOKEN, value);
  if (expiresIn !== undefined) {
    setItem(EXPIRES_IN, expiresIn);
  }
};

export const setRefreshToken = (value: string) => {
  setItem(TRIGGER_REFRESH, "true");
  setItem(REFRESH_TOKEN, value);
};

export const setIsProfileEdited = (value: string) => {
  setItem(IS_PROFILE_EDITED, value);
};

export const setIsRenewal = (value: string) => {
  setItem(IS_RENEWAL, value);
};

//* ******** Block functions ***************************************************//
export const clearToken = () => setToken("");
export const getToken = () => getItem(USER_TOKEN);
export const getRefreshToken = () => getItem(REFRESH_TOKEN);
export const getIsProfileEdited = () => getItem(IS_PROFILE_EDITED);
export const getIsRenewal = () => getItem(IS_RENEWAL);
export const getExpireIn = () => getItem(EXPIRES_IN);
