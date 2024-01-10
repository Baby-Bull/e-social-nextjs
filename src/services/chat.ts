import { LIMIT_ROOMS_PER_PAGE, LIMIT_MESSAGES_PER_PAGE } from "src/constants";
import { api } from "src/helpers/api";
import { apiNestServer } from "src/utils/API-infra.util";

interface IParamsListChatRooms {
  search?: string;
  cursor?: string;
  limit: number;
}

export const getListPrivateChatRooms = async (
  search: string = "",
  cursor: string = "",
  limit: number = LIMIT_ROOMS_PER_PAGE,
) => {
  try {
    const res = await apiNestServer.get("/chatroom/private");
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPrivateMessages = async (chatroomId: number) => {
  try {
    const res = await apiNestServer.get(`/chatroom/messages/${chatroomId}`);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const getListChatRooms = async (
  search: string = "",
  cursor: string = "",
  limit: number = LIMIT_ROOMS_PER_PAGE,
) => {
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

export const getMessages = async (
  userId: string | string[],
  cursor: string = "",
  limit: number = LIMIT_MESSAGES_PER_PAGE,
) => {
  try {
    const res = await api.get(`/user/${userId}/messages?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getListChatRoomsCommunity = async (
  search: string = "",
  cursor: string = "",
  limit: number = LIMIT_ROOMS_PER_PAGE,
) => {
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
    const res = await api.get(`/user/communities/chat-rooms`, { params });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getMessagesCommunity = async (
  communityId: string,
  cursor: string = "",
  limit: number = LIMIT_MESSAGES_PER_PAGE,
) => {
  try {
    const res = await api.get(`/user/communities/chat-rooms/${communityId}/messages?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const uploadFile = async (body) => {
  try {
    const res = await api.post(`/storage/upload`, body);
    return res.data;
  } catch (error) {
    return error;
  }
};
