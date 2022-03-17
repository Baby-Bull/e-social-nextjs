/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 6000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});
// api.interceptors.response.use(
//   (res) => Promise.resolve(res),
//   (error) => {
//     if (error.response.data.type === "wrong-token") {
//       window.location.href = "/sign-in";
//     }
//     return Promise.reject(error);
//   },
// );
