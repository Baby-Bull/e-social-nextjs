/* eslint-disable no-underscore-dangle */
import axios from "axios";
import { toast } from "react-toastify";

import { FORBIDDEN, NOT_FOUND, SERVER_ERROR } from "src/messages/notification";

import {
  setToken as setTokenStorage,
  getToken as getTokenStorage,
  getToken,
  getRefreshToken,
  setRefreshToken,
  setIsProfileEdited,
} from "./storage";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const setApiAuth = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};

export function setToken(token: string, expiresIn?: number) {
  setTokenStorage(token, expiresIn);
  setApiAuth(token);
}
api.interceptors.response.use(
  (response) => response,
  async (err: any) => {
    if (err.response.status === 403) {
      toast.warning(FORBIDDEN);
      window.location.href = "/";
    }

    if (err.response.status === 404) {
      toast.warning(NOT_FOUND);
      window.location.href = "/";
    }

    if (err.response.status === 422) {
      if (!err?.response?.data?.message?.email && !err.response.data?.message?.access_token) {
        toast.error(SERVER_ERROR);
      }
      window.location.href = "/";
    }
    const originalRequest = err.config;
    if (originalRequest.url !== "/auth/tokens") {
      if (err.response.status === 401 && !originalRequest._retry) {
        // toast.error("セッションの有効期限が切れました。");
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return axios(originalRequest);
            })
            .catch((error) => Promise.reject(error));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const res = await api.post("/auth/tokens", { access_token: getToken(), refresh_token: getRefreshToken() });
          if (res?.data?.access_token) {
            setToken(res?.data?.access_token, res?.data?.access_token_expires_in_seconds);
            setRefreshToken(res?.data?.refresh_token);
            setIsProfileEdited(res?.data?.user?.is_profile_edited);
            api.defaults.headers.common.Authorization = `Bearer ${res.data?.access_token}`;
            originalRequest.headers.Authorization = `Bearer ${res.data?.access_token}`;
            processQueue(null, res.data.access_token);
            isRefreshing = false;
            Promise.resolve(api(originalRequest));
          }
        } catch (_error) {
          processQueue(_error, null);
          setToken("");
          setRefreshToken("");
          setIsProfileEdited("");
          if (typeof window !== "undefined") {
            console.log(window.location.href);
            window.location.href = `/login?oldUrl=${window.location.pathname}`;
          }
          return Promise.reject(_error);
        }
      }
      return Promise.reject(err);
    }
    if (err.response.status === 401) {
      setToken("");
      setRefreshToken("");
      setIsProfileEdited("");
      if (typeof window !== "undefined") {
        console.log(window.location.href);
        window.location.href = `/login?oldUrl=${window.location.pathname}`;
      }
    }
  },
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => ({
    data: error.response.data,
    statusCode: error.response.status,
  }),
);

setApiAuth(getTokenStorage());
