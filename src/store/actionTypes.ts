const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REFRESH_TOKEN: "REFRESH_TOKEN",

  UPDATE_PROFILE: "UPDATE_PROFILE",
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  ADD_MATCH_REQUEST_COUNT: "ADD_MATCH_REQUEST_COUNT",
  REMOVE_MATCH_REQUEST_COUNT: "REMOVE_MATCH_REQUEST_COUNT",
  ADD_MATCH_REQUEST_PENDING_COUNT: "ADD_MATCH_REQUEST_PENDING_COUNT",
  REMOVE_MATCH_REQUEST_PENDING_COUNT: "REMOVE_MATCH_REQUEST_PENDING_COUNT",
  ADD_COMMUNITY_COUNT: "ADD_COMMUNITY_COUNT",
  REMOVE_COMMUNITY_COUNT: "REMOVE_COMMUNITY_COUNT",

  UPDATE_NOTIFICATIONS: "UPDATE_NOTIFICATIONS",
  UPDATE_NOTIFICATION_UNREAD_COUNT: "UPDATE_NOTIFICATION_UNREAD_COUNT",
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  ADD_UNREAD_NOTIFICATIONS_COUNT: "ADD_UNREAD_NOTIFICATIONS_COUNT",
  REMOVE_UNREAD_NOTIFICATIONS_COUNT: "REMOVE_UNREAD_NOTIFICATIONS_COUNT",

  UPDATE_PERMISSION_NOTIFICATION: "UPDATE_PERMISSION_NOTIFICATION",

  UPDATE_LIST_ROOMS: "UPDATE_LIST_ROOMS",
  UPDATE_LIST_PERSONAL_CHAT_ROOMS: "UPDATE_LIST_PERSONAL_CHAT_ROOMS",
  UPDATE_LIST_COMMUNITY_CHAT_ROOMS: "UPDATE_LIST_COMMUNITY_CHAT_ROOMS",
  UPDATE_PERSONAL_CHATROOM_UNREAD_COUNT: "UPDATE_PERSONAL_CHATROOM_UNREAD_COUNT",
  UPDATE_COMMUNITY_CHATROOM_UNREAD_COUNT: "UPDATE_COMMUNITY_CHATROOM_UNREAD_COUNT",
  UPDATE_UNREAD_LISTROOMS_COUNT: "UPDATE_UNREAD_LISTROOMS_COUNT",
  REMOVE_UNREAD_LISTROOMS_COUNT: "REMOVE_UNREAD_LISTROOMS_COUNT",
  ADD_UNREAD_LISTROOMS_COUNT: "ADD_UNREAD_LISTROOMS_COUNT",
};

export const searchUserActions = {
  UPDATE_SCROLL_POSITION: "UPDATE_SEARCH_USER_SCROLL_POSITION",
  UPDATE_RESULT: "UPDATE_SEARCH_USER_RESULT",
  UPDATE_FORM: "UPDATE_SEARCH_USER_FORM",
  CLEAR_FORM: "CLEAR_SEARCH_USER_FORM",
  SEARCH_TAG_ONLY: "SEARCH_USER_TAG_ONLY",
  APPEND_TAG: "SEARCH_USER_APPEND_TAG",
};

export const searchCommunityActions = {
  UPDATE_SCROLL_POSITION: "UPDATE_SEARCH_COMMUNITY_SCROLL_POSITION",
  UPDATE_FORM: "UPDATE_SEARCH_COMMUNITY_FORM",
  CLEAR_FORM: "CLEAR_SEARCH_COMMUNITY_FORM",
  UPDATE_RESULT: "UPDATE_SEARCH_COMMUNITY_RESULT",
  SEARCH_TAG_ONLY: "SEARCH_COMMUNITY_TAG_ONLY",
  APPEND_TAG: "SEARCH_COMMUNITY_APPEND_TAG",
}

export default actionTypes;
