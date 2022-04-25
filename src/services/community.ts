import { toast } from "react-toastify";

import { api } from "src/helpers/api";

export const getListCommunities = async (limit: number, cursor: string) => {
  try {
    const res = await api.get(`/user/communities?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};