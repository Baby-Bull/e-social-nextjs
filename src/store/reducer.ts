import { SearchUserFormStatus } from "src/constants/constants";
import { fetchToken } from "src/helpers/api";

import actionTypes, { searchUserActions } from "./actionTypes";

// REDUCERS
const reducer = (state, action: any) => {
  const { type } = action;
  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action?.user?.profile || {},
        notifications: {
          ...state.notifications,
          askPermissionNotification: true,
        },
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
      };
    case actionTypes.REMOVE_COMMUNITY_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          community_count: (state?.user?.community_count || 0) - 1,
        },
      };
    case actionTypes.UPDATE_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          ...state?.notifications,
          items: action?.payload?.items || [],
          hasMore: action?.payload?.hasMore ?? false,
          cursor: action?.payload?.cursor ?? "",
          unread_count: action?.payload?.unread_count || 0,
          items_count: action?.payload?.items_count || 0,
        },
      };
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state?.notifications,
          items: [action.payload.notification, ...state.notifications.items],
          unread_count: (state?.notifications.unread_count || 0) + 1,
          items_count: (state?.notifications.items_count || 0) + 1,
        },
      };
    case actionTypes.ADD_UNREAD_NOTIFICATIONS_COUNT:
      return {
        ...state,
        notifications: {
          ...state?.items,
          unread_count: (state?.notifications?.unread_count || 0) + 1,
        },
      };
    case actionTypes.REMOVE_UNREAD_NOTIFICATIONS_COUNT:
      return {
        ...state,
        notifications: {
          ...state?.notifications,
          unread_count: 0,
        },
      };
    case actionTypes.UPDATE_PERMISSION_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state?.notifications,
          askPermissionNotification: false,
        },
      };
    case actionTypes.UPDATE_LIST_ROOMS:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          itemsPersonal: action.payload?.itemsPersonal || [],
          itemsCommunity: action.payload?.itemsCommunity || [],
          hasMorePersonal: action?.payload?.hasMorePersonal ?? false,
          hasMoreCommunity: action?.payload?.hasMoreCommunity ?? false,
          cursorPersonal: action?.payload?.cursorPersonal ?? "",
          cursorCommunity: action?.payload?.cursorCommunity ?? "",
          unread_count: action?.payload?.unread_count || 0,
        },
      };
    case actionTypes.UPDATE_LIST_PERSONAL_CHAT_ROOMS:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          itemsPersonal: action.payload.items,
          ...(action.payload.hasMore !== undefined ? { hasMorePersonal: action.payload.hasMore } : {}),
          ...(action.payload.cursor !== undefined ? { cursorPersonal: action.payload.cursor } : {}),
        },
      };
    case actionTypes.UPDATE_LIST_COMMUNITY_CHAT_ROOMS:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          itemsCommunity: action.payload.items,
          ...(action.payload.hasMore !== undefined ? { hasMoreCommunity: action.payload.hasMore } : {}),
          ...(action.payload.cursor !== undefined ? { cursorCommunity: action.payload.cursor } : {}),
        },
      };
    case actionTypes.UPDATE_PERSONAL_CHATROOM_UNREAD_COUNT:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          itemsPersonal: state.listrooms.itemsPersonal.map((chatroom) =>
            chatroom.id === action.payload.chatRoomId
              ? {
                ...chatroom,
                unread_message_count: action.payload.count,
              }
              : chatroom,
          ),
        },
      };

    case actionTypes.UPDATE_COMMUNITY_CHATROOM_UNREAD_COUNT:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          itemsCommunity: state.listrooms.itemsCommunity.map((chatroom) =>
            chatroom.id === action.payload.chatRoomId
              ? {
                ...chatroom,
                unread_message_count: action.payload.count,
              }
              : chatroom,
          ),
        },
      };
    case actionTypes.UPDATE_UNREAD_LISTROOMS_COUNT:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          unread_count: action.payload.count,
        },
      };
    case actionTypes.ADD_UNREAD_LISTROOMS_COUNT:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          unread_count: (state?.listrooms?.unread_count || 0) + 1,
        },
      };
    case actionTypes.REMOVE_UNREAD_LISTROOMS_COUNT:
      return {
        ...state,
        listrooms: {
          ...state?.listrooms,
          unread_count: 0,
        },
      };

    case searchUserActions.UPDATE_SCROLL_POSITION: {
      return {
        ...state,
        search_users: {
          ...state.search_users,
          scrollPosition: action.payload.scrollPosition,
        },
      };
    }

    case searchUserActions.UPDATE_RESULT: {
      return {
        ...state,
        search_users: {
          ...state.search_users,
          formStatus: SearchUserFormStatus.Cached,
          result: {
            ...state.search_users.result,
            ...action.payload,
          },
        },
      };
    }

    case searchUserActions.UPDATE_FORM: {
      return {
        ...state,
        search_users: {
          ...state.search_users,
          form: {
            ...state.search_users.form,
            ...action.payload,
          },
        },
      };
    }

    case searchUserActions.SEARCH_TAG_ONLY: {
      return {
        ...state,
        search_users: {
          ...state.search_users,
          formStatus: SearchUserFormStatus.Init,
          form: {
            job: 0,
            employeeStatus: 0,
            lastLogin: 0,
            review: 0,
            statusCanTalk: false,
            statusLookingForFriend: false,
            statusNeedConsult: false,
            tags: [...(action.payload || [])],
          },
        },
      };
    }

    case searchUserActions.APPEND_TAG: {
      return {
        ...state,
        search_users: {
          ...state.search_users,
          formStatus: SearchUserFormStatus.Init,
          form: {
            ...state.search_users.form,
            tags: Array.from(new Set([...state.search_users.form.tags, ...action.payload])),
          },
        },
      };
    }

    case searchUserActions.CLEAR_FORM: {
      return {
        ...state,
        search_users: {
          ...state.search_users,
          formStatus: SearchUserFormStatus.Init,
          form: {
            job: 0,
            employeeStatus: 0,
            lastLogin: 0,
            review: 0,
            statusCanTalk: false,
            statusLookingForFriend: false,
            statusNeedConsult: false,
            tags: [],
          },
        },
      };
    }

    case actionTypes.REFRESH_TOKEN:
      fetchToken();
      return state;
    default:
      return state;
  }
};

export default reducer;
