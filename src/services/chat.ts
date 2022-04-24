import { LIMIT_PER_PAGE } from "src/constants/constants";
import { api } from "src/helpers/api";

interface IParamsListChatRooms {
  search?: string;
  cursor?: string;
  limit: number;
}

export const getListChatRooms = async (search: string = "", cursor: string = "", limit: number = LIMIT_PER_PAGE) => {
  try {
    let params: IParamsListChatRooms;
    if (!search) {
      params = {
        cursor,
        limit,
      };
    } else {
      params = { cursor, limit, search };
    }
    const res = await api.get(`/user/chat-rooms`, { params });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getMessages = async (userId: string, cursor: string = "", limit: number = LIMIT_PER_PAGE) => {
  try {
    const res = await api.get(`/user/${userId}/messages?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
