import { refreshToken } from "src/services/auth";

import actionTypes from "./actionTypes";

// REDUCERS
const reducer = (state, action: any) => {
  const { type } = action;
  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action?.user?.profile || {},
        is_profile_edited: action?.user?.is_profile_edited || false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: {},
        notifications: {},
      };
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        user: { ...action.payload },
      };
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        user: {
          ...state?.user,
          favorite_count: (state?.user?.favorite_count || 0) + 1,
        },
      };
    case actionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        user: {
          ...state?.user,
          favorite_count: (state?.user?.favorite_count || 0) - 1,
        },
      };
    case actionTypes.ADD_MATCH_REQUEST_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          match_request_count: (state?.user?.match_request_count || 0) + 1,
        },
      };
    case actionTypes.ADD_MATCH_REQUEST_PENDING_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          match_request_pending_count: (state?.user?.match_request_pending_count || 0) + 1,
        },
      };
    case actionTypes.REMOVE_MATCH_REQUEST_PENDING_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          match_request_pending_count: (state?.user?.match_request_pending_count || 0) - 1,
        },
      };
    case actionTypes.REMOVE_MATCH_REQUEST_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          match_request_count: (state?.user?.match_request_count || 0) - 1,
        },
      };
    case actionTypes.ADD_COMMUNITY_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          community_count: (state?.user?.community_count || 0) + 1,
        },
      }
    case actionTypes.REMOVE_COMMUNITY_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          community_count: (state?.user?.community_count || 0) - 1,
        }
      }
    case actionTypes.UPDATE_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          ...state?.notifications,
          items: action?.payload?.items || {},
          hasMore: action?.payload?.hasMore ?? false,
          cursor: action?.payload?.cursor ?? "",
          unread_count: action?.payload?.unread_count || 0,
          items_count: action?.payload?.items_count || 0,
        },
      }
    case actionTypes.ADD_UNREAD_NOTIFICATIONS_COUNT:
      return {
        ...state,
        notifications: {
          ...state?.items,
          unread_count: (state?.notifications?.unread_count || 0) + 1
        }
      }
    case actionTypes.REMOVE_UNREAD_NOTIFICATIONS_COUNT:
      return {
        ...state,
        notifications: {
          ...state?.notifications,
          unread_count: 0
        }
      }
    case actionTypes.REFRESH_TOKEN:
      refreshToken();
      return state;
    default:
      return state;
  }
};

export default reducer;
