const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                auth: action.payload,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                auth: null,
                error: true,
            };
        case "ADD_FAVORITE":
            return {
                auth: {
                    ...state?.auth,
                    user: {
                        ...state?.auth?.user,
                        profile: {
                            ...state?.auth?.user?.profile,
                            favorite_count: state?.auth?.user?.profile?.favorite_count + 1,
                        }
                    }
                }
            };
        case "REMOVE_FAVORITE":
            return {
                auth: {
                    ...state?.auth,
                    user: {
                        ...state?.auth?.user,
                        profile: {
                            ...state?.auth?.user?.profile,
                            favorite_count: state?.auth?.user?.profile?.favorite_count - 1,
                        }
                    }
                }
            };
        case "ADD_MATCH_REQUEST_COUNT":
            return {
                auth: {
                    ...state?.auth,
                    user: {
                        ...state?.auth?.user,
                        profile: {
                            ...state?.auth?.user?.profile,
                            match_request_count: state?.auth?.user?.profile?.match_request_count + 1,
                        }
                    }
                }
            };
        case "REMOVE_MATCH_REQUEST_COUNT":
            return {
                auth: {
                    ...state?.auth,
                    user: {
                        ...state?.auth?.user,
                        profile: {
                            ...state?.auth?.user?.profile,
                            match_request_count: state?.auth?.user?.profile?.match_request_count - 1,
                        }
                    }
                }
            };
        case "UPDATE_SUCCESS":
            return {
                auth: action.payload,
                error: false,
            };
        case "UPDATE_FAILURE":
            return {
                auth: state.auth,
                error: true,
            };
        case "LOGOUT":
            return {
                auth: null,
                error: false,
            };
        default:
            return state;
    }
};

export default Reducer;
