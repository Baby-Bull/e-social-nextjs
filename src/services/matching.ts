import { toast } from "react-toastify";

import { api } from "src/helpers/api";
import { ACCEPT_MATCHING, REJECT_MATCHING, CANCEL_MATCHING, SERVER_ERROR } from "src/messages/notification";
import { apiNestServer } from "src/utils/API-infra.util";

export const sendMatchingRequest = async (userId: string | string[], body: any) => {
  try {
    const res = await apiNestServer.post(`/users/match/${userId}`, body);
    if (res.data.error_code) {
      toast.error(SERVER_ERROR);
    } else {
      toast.success("マッチングリクエストを送りました。");
      toast.success("Send matching request successfully!");
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getMatchingRequestSent = async (typeRequest: string, take: number, page: number = 1) => {
  try {
    const res = await apiNestServer.get(
      `users/me/match-requests/sent?take=${take}&page=${page}&typeRequest=${typeRequest}`,
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getMatchingRequestReceived = async (typeRequest: string, take: number, page: number = 1) => {
  try {
    const res = await apiNestServer.get(
      `users/me/match-requests/received?take=${take}&page=${page}&typeRequest=${typeRequest}`,
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getMatchedRequest = async (take: number, page: number = 1) => {
  try {
    const res = await apiNestServer.get(`users/me/match-requests/matched?take=${take}&page=${page}`);
    return res;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const acceptMatchingRequestReceived = async (userId: number) => {
  try {
    const res = await apiNestServer.post(`users/match-requests/${userId}/accept`);
    toast.success(ACCEPT_MATCHING);
    return res;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const rejectMatchingRequestReceived = async (matchRequestReceivedId: string) => {
  try {
    const res = await api.post(`/user/match-requests/${matchRequestReceivedId}/reject`);
    toast.success(REJECT_MATCHING);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};
export const cancelMatchingRequestSent = async (matchRequestSentId: string) => {
  try {
    const res = await api.delete(`/user/match-requests/${matchRequestSentId}/cancel`);
    toast.success(CANCEL_MATCHING);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};
