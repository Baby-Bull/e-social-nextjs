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
        case "UPDATE_START":
            return {
                ...state
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
