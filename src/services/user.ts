import { toast } from "react-toastify";

import { api } from "src/helpers/api";
import {USER_REPORT, USER_REVIEW, SETTING_EMAIL, SERVER_ERROR, SETTING_NOTIFICATION} from "src/messages/notification";

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
      toast.success(USER_REPORT);
    }
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const userReview = async (userId: string, body: object) => {
  try {
    const res = await api.post(`/user/${userId}/review`, body);
    console.log(res)
    if (res.data.error_code !== "200" || res.data.error_code !== "201") {
      toast.error(res.data.message);
    } else {
      toast.success(USER_REVIEW);
    }
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const userSettingEmail = async (body: any) => {
  try {
    const res = await api.patch("/user/email", body);
    if (!res.data) {
      toast.error(SERVER_ERROR);
    } else {
      toast.success(SETTING_EMAIL);
    }
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const userSettingNotification = async (body: any) => {
  try {
    const res = await api.patch("/user/setting", body);
    if (!res.data) {
      toast.error(SERVER_ERROR);
    } else {
      toast.success(SETTING_NOTIFICATION);
    }
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};
