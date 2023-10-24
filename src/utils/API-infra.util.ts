import axios from "axios";
import { toast } from "react-toastify";

import { FORBIDDEN, NOT_FOUND, SERVER_ERROR } from "src/messages/notification";
import { ENDPOINT_NEST_SERVER } from "src/constants/env.constant";

import {
  setToken as setTokenStorage,
  getToken as getTokenStorage,
  setRefreshToken,
  getToken,
  getRefreshToken,
} from "./token.util";

let fetchTokenPromise = Promise.resolve(null);
let isFetchingToken = false;
/**
 * we have tow types of api:
 * api: using for normal request
 * apiAuth: used for retrieving auth token (refresh_token, access_token, ...) from api
 *
 */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const apiAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// api from nest server ***************************************
export const apiNestServer = axios.create({
  baseURL: ENDPOINT_NEST_SERVER,
});

export const configApiAuthNestServer = (token: string) => {
  fetchTokenPromise = Promise.resolve(token);
  if (token) {
    apiNestServer.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};
configApiAuthNestServer(getTokenStorage());
apiNestServer.interceptors.response.use(
  (response) => response.data,
  (error) => ({
    data: error.response.data,
    statusCode: error.response.status,
  }),
);

// api from social server ******************************************
export const setApiAuth = (token: string) => {
  fetchTokenPromise = Promise.resolve(token);
  if (token) {
    apiNestServer.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};

export function setToken(token: string, expiresIn?: number) {
  setTokenStorage(token, expiresIn ?? null);
  setApiAuth(token);
}

export const fetchToken = async ({ accessToken, refreshToken }) => {
  if (!isFetchingToken) {
    isFetchingToken = true;
    fetchTokenPromise = apiNestServer
      .post("/auth/refresh-token", { accessToken, refreshToken })
      .then(({ data }) => {
        const { accessToken, refreshToken } = data;
        setToken(accessToken, 10000);
        setRefreshToken(refreshToken);
        isFetchingToken = false;
        return accessToken;
      })
      .catch(() => null);
  }

  return fetchTokenPromise;
};

apiAuth.interceptors.response.use(
  (response) => response.data,
  async (err: any) => {
    if (err.response.status === 422 || err.response.status === 401) {
      setToken("", null);
      setRefreshToken("");
      if (typeof window !== "undefined") {
        window.location.href = `/login?oldUrl=${window.location.pathname}`;
      }
    }
    Promise.reject(err);
  },
);

apiNestServer.interceptors.request.use(
  async (config) => {
    const accessToken = getToken();
    const refreshToken = getRefreshToken();
    let token = await fetchTokenPromise;
    if (!token && accessToken && refreshToken) {
      token = await fetchToken({ accessToken, refreshToken });
    }
    if (token) {
      apiNestServer.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

apiNestServer.interceptors.response.use(
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
    }

    const originalRequest = err.config;
    if (originalRequest.url !== "/auth/refresh-token") {
      if (err.response.status === 401 && typeof window !== "undefined") {
        // only refresh on client
        const accessToken = getToken();
        const refreshToken = getRefreshToken();
        if (accessToken && refreshToken) {
          const token = await fetchToken({
            accessToken,
            refreshToken,
          });
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest).then((result) => ({ data: result }));
        }
        setToken("", null);
        setRefreshToken("");
        if (typeof window !== "undefined") {
          window.location.href = `/login?oldUrl=${window.location.pathname}`;
        }
      }
    }
    return Promise.reject(err);
  },
);

// apiNestServer.interceptors.response.use(
//   (response) => response.data,
//   (error) => ({
//     data: error.response.data,
//     statusCode: error.response.status,
//   }),
// );

setApiAuth(getTokenStorage());
