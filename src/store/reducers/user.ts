import actionTypes from "../actionTypes";


const initState = {}
export default function (state: any = initState, action: any) {
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
                user: {
                    ...state.user,
                    ...action.payload,
                },
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

        default:
            return state;

    }
}