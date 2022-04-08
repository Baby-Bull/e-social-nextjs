import { toast } from "react-toastify";

import { api } from "src/helpers/api";

export const sendMatchingRequest = async (userId: string, body: any) => {
  try {
    const res = await api.post(`/user/match/${userId}`, body);
    toast.success("マッチングリクエストを送りました。");
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};

export const getMatchingRequestSent = async (limit: number, cursor: string, status: string) => {
  try {
    const res = await api.get(`/user/me/match-requests/sent?limit=${limit}&cursor=${cursor}&status=${status}`);
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};

export const getMatchingRequestReceived = async (limit: number, cursor: string, status: string) => {
  try {
    const res = await api.get(`/user/me/match-requests/received?limit=${limit}&cursor=${cursor}&status=${status}`);
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};

export const getMatchedRequest = async (limit: number, cursor: string, sort: string) => {
  try {
    const res = await api.get(`/user/match/?limit=${limit}&cursor=${cursor}&sort=${sort}`);
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};

export const acceptMatchingRequestReceived = async (matchRequestReceivedId: string) => {
  try {
    const res = await api.post(`/user/match-requests/${matchRequestReceivedId}/accept`);
    toast.success("マッチングリクエストを承認しました。");
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};

export const rejectMatchingRequestReceived = async (matchRequestReceivedId: string) => {
  try {
    const res = await api.post(`/user/match-requests/${matchRequestReceivedId}/reject`);
    toast.success("マッチングリクエストを拒否しました。");
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};
export const cancelMatchingRequestSent = async (matchRequestSentId: string) => {
  try {
    const res = await api.post(`/user/match-requests/${matchRequestSentId}/cancel`);
    toast.success("マッチングリクエストをキャンセルしました。");
    return res.data;
  } catch (error) {
    toast.error("server error");
    return error;
  }
};
