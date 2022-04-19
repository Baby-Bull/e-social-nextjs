import { LIMIT_PER_PAGE } from "src/constants/constants";
import { api } from "src/helpers/api";

export const getListChatRooms = async (limit: number = LIMIT_PER_PAGE, cursor: string = "") => {
  try {
    const res = await api.get(`/user/chat-rooms?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getMessages = async (userId: string, limit: number = LIMIT_PER_PAGE, cursor: string = "") => {
  try {
    const res = await api.get(`/user/${userId}/messages?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
