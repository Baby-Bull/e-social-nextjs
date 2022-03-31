/* eslint-disable no-underscore-dangle */
import axios from "axios";

import {
  setToken as setTokenStorage,
  getToken as getTokenStorage,
  getToken,
  getRefreshToken,
  setRefreshToken,
} from "./storage";

const PREVENT_CORS_URL: string = "https://cors.bridged.cc";

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

const set = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};

export function setToken(token: string) {
  setTokenStorage(token);
  set(token);
}

api.interceptors.response.use(
  (response) => response,
  (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
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

      return new Promise((resolve, reject) => {
        axios
          .post(`${PREVENT_CORS_URL}/${process.env.NEXT_PUBLIC_API}/auth/tokens`, {
            access_token: getToken(),
            refresh_token: getRefreshToken(),
          })
          .then(({ data }) => {
            api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
            originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
            setToken(data?.access_token);
            setRefreshToken(data?.refresh_token);
            processQueue(null, data.access_token);
            resolve(api(originalRequest));
          })
          .catch((error1) => {
            processQueue(error1, null);
            setToken("");
            setRefreshToken("");
            if (typeof window !== "undefined") {
              window.location.href = "/login";
            }
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(err);
  },
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => ({
    data: error.response.data,
    statusCode: error.response.status,
  }),
);

set(getTokenStorage());
