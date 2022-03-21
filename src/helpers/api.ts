import axios from "axios";

import { setToken as setTokenStorage, getToken as getTokenStorage } from "./storage";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => ({
    data: error.response.data,
    statusCode: error.response.status,
  }),
);

const set = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
};

export function setToken(token) {
  setTokenStorage(token);
  set(token);
}

set(getTokenStorage());
