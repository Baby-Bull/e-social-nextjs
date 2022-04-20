import { api } from "src/helpers/api";
import {toast} from "react-toastify";

export const getUserFavorite = async (limit: number, cursor: string) => {
  try {
    const res = await api.get(`/user/favorite?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getUserFavoriteTags = async (limit: number, cursor: string = "") => {
  try {
    const res = await api.get(`/user/favorite/tag-users?limit=${limit}&cursor=${cursor}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const getUserProvince = async (limit: number, cursor: string = "") => {
  try {
    const res = await api.get(`/user/province-users?limit=${limit}&cursor=${cursor}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const getUserNewMembers = async (limit: number, cursor: string = "") => {
  try {
    const res = await api.get(`/user/members-new?limit=${limit}&cursor=${cursor}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const getUserRecentlyLogin = async (limit: number, cursor: string = "") => {
  try {
    const res = await api.get(`/user/logged-in?limit=${limit}&cursor=${cursor}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const addUserFavorite = async (userId: string) => {
  try {
    const res = await api.post(`/user/favorite/${userId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteUserFavorite = async (userId: string) => {
  try {
    const res = await api.delete(`/user/favorite/${userId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const userReport = async (userId: string, body: object) => {
  try {
    const res = await api.post(`/user/${userId}/report`, body);
    if (res.data.error_code !== "200" || res.data.error_code !== "201") {
      toast.error(res.data.message);
    } else {
      toast.success("運営に通報が送信されました。");
    }
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};
