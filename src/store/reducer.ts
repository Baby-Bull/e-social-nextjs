import actionTypes from "./actionTypes";

// REDUCERS
const reducer = (state, action: any) => {
  switch (action.type) {
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
    case actionTypes.REMOVE_MATCH_REQUEST_COUNT:
      return {
        ...state,
        user: {
          ...state?.user,
          match_request_count: (state?.user?.match_request_count || 0) - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
