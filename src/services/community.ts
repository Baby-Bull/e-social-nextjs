import { toast } from "react-toastify";
import { SERVER_ERROR } from "src/messages/notification";

import { api } from "src/helpers/api";

export const getListCommunities = async (limit: number, cursor: string) => {
  try {
    const res = await api.get(`/user/communities?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const getCommunity = async (communityId) => {
  try {
    const res = await api.get(`/community/${communityId}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};