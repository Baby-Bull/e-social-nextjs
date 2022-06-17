import { toast } from "react-toastify";
import { useRouter } from "next/router";

import {
  APPPROVE_MEMBER,
  BLOCK_MEMBER,
  BLOCKED_MEMBER,
  CREATE_COMMUNITY,
  DELETE_COMMUNITY,
  DELETE_POST,
  NOTE_FOUNT_POST,
  REJECT_MEMBER,
  SERVER_ERROR,
  UPDATE_COMMUNITY,
  UPDATE_POST,
  CREATE_POST,
} from "src/messages/notification";
import { api } from "src/helpers/api";

// eslint-disable-next-line import/prefer-default-export
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

export const createCommunity = async (body: any) => {
  try {
    const res = await api.post(`community`, body);
    if (res.data) {
      toast.success(CREATE_COMMUNITY);
    }
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const updateCommunity = async (communityId, body: any) => {
  try {
    const res = await api.patch(`community/${communityId}`, body);
    if (!res.data.error_code) {
      toast.success(UPDATE_COMMUNITY);
    } else {
      toast.error(SERVER_ERROR);
    }
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const CommunityMembers = async (communityId, limit: number = 10, cursor: string = "") => {
  try {
    const res = await api.get(`community/${communityId}/members?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const deleteCommunity = async (communityId) => {
  try {
    const res = await api.delete(`community/${communityId}`);
    if (!res.data.error_code) {
      toast.success(DELETE_COMMUNITY);
    } else {
      toast.error(SERVER_ERROR);
    }
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const CommunityMembersBlocked = async (communityId, limit: number = 10, cursor: string = "") => {
  try {
    const res = await api.get(`community/${communityId}/members/blocked?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const MemberBlocked = async (communityId, userId) => {
  try {
    const res = await api.post(`community/${communityId}/members/${userId}/block`);
    if (!res.data.error_code) {
      toast.success(BLOCK_MEMBER);
    } else {
      toast.error(SERVER_ERROR);
    }
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const MemberUnBlock = async (communityId, userId) => {
  try {
    const res = await api.post(`community/${communityId}/members/${userId}/unblock`);
    if (!res.data.error_code) {
      toast.success(BLOCKED_MEMBER);
    } else {
      toast.error(SERVER_ERROR);
    }
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const getParticipates = async (communityId, limit: number = 10, cursor: string = "") => {
  try {
    const res = await api.get(`community/${communityId}/join-requests?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const MemberApprove = async (communityId, joinRequestId) => {
  try {
    const res = await api.post(`community/${communityId}/join-requests/${joinRequestId}/accept`);
    if (!res.data.error_code) {
      toast.success(APPPROVE_MEMBER);
    } else {
      toast.error(SERVER_ERROR);
    }
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const MemberReject = async (communityId, joinRequestId) => {
  try {
    const res = await api.delete(`community/${communityId}/join-requests/${joinRequestId}/reject`);
    if (!res.data.error_code) {
      toast.success(REJECT_MEMBER);
    } else {
      toast.error(SERVER_ERROR);
    }
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const checkMemberCommunity = async (communityId, memberId) => {
  try {
    const res = await api.get(`community/${communityId}/member/${memberId}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const createCommunityPost = async (communityId, body) => {
  try {
    const res = await api.post(`community/${communityId}/posts`, body);
    if (!res.data.error_code) {
      toast.success(CREATE_POST);
      return res.data;
    }
    toast.error(SERVER_ERROR);
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const detailCommunityPost = async (communityId, postId) => {
  try {
    const res = await api.get(`community/${communityId}/posts/${postId}`);
    if (res.data.error_code === "404") {
      toast.error(NOTE_FOUNT_POST);
      const router = useRouter();
      setTimeout(() => router.push(`community/${communityId}`), 1000);
      return false;
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateCommunityPost = async (communityId, postId, body) => {
  try {
    const res = await api.patch(`community/${communityId}/posts/${postId}`, body);
    if (!res.data.error_code) {
      toast.success(UPDATE_POST);
      return res.data;
    }
    toast.error(SERVER_ERROR);
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const deleteCommunityPost = async (communityId, postId) => {
  try {
    const res = await api.delete(`community/${communityId}/posts/${postId}`);
    if (res.data.error_code === "404") {
      toast.error(NOTE_FOUNT_POST);
      const router = useRouter();
      setTimeout(() => router.push(`community/${communityId}`), 1000);
      return false;
    }
    toast.success(DELETE_POST);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const createPostComment = async (communityId, postId, body) => {
  try {
    const res = await api.post(`community/${communityId}/posts/${postId}/comments`, body);
    if (!res.data.error_code) {
      toast.success(CREATE_POST);
      return res.data;
    }
    toast.error(SERVER_ERROR);
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const getListComment = async (communityId, postId, limit: number = 10, cursor: string = "") => {
  try {
    const res = await api.get(`community/${communityId}/posts/${postId}/comments?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const deleteCommunityPostComment = async (communityId, postId, commentId) => {
  try {
    const res = await api.delete(`community/${communityId}/posts/${postId}/comments/${commentId}`);
    if (res.data.error_code === "404") {
      toast.error(NOTE_FOUNT_POST);
      const router = useRouter();
      setTimeout(() => router.push(`community/${communityId}`), 1000);
      return false;
    }
    toast.success(DELETE_POST);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const getListCommunityPost = async (communityId, limit: number = 10, cursor: string = "") => {
  try {
    const res = await api.get(`community/${communityId}/posts/?limit=${limit}&cursor=${cursor}`);
    return res.data;
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const joinCommunity = async (communityId) => {
  try {
    const res = await api.post(`community/${communityId}/join`);
    if (!res.data.error_code) {
      toast.success(CREATE_POST);
      return res.data;
    }
    toast.error(SERVER_ERROR);
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};

export const leaveCommunity = async (communityId) => {
  try {
    const res = await api.post(`community/${communityId}/leave`);
    if (!res.data.error_code) {
      toast.success(CREATE_POST);
      return res.data;
    }
    toast.error(SERVER_ERROR);
  } catch (error) {
    toast.error(SERVER_ERROR);
    return error;
  }
};
