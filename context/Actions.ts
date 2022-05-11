export const LoginSuccess = (auth: object) => ({
    type: "LOGIN_SUCCESS",
    payload: auth,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const AddFavoriteUser = (auth: object) => ({
    type: "ADD_FAVORITE",
    payload: auth,
});

export const RemoveFavoriteUser = (auth: object) => ({
    type: "REMOVE_FAVORITE",
    payload: auth,
});

export const AddMarchRequestCount = (auth: object) => ({
    type: "ADD_MATCH_REQUEST_COUNT",
    payload: auth,
});

export const RemoveMarchRequestCount = (auth: object) => ({
    type: "REMOVE_MATCH_REQUEST_COUNT",
    payload: auth,
});

export const UpdateSuccess = (auth: object) => ({
    type: "UPDATE_SUCCESS",
    payload: auth,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});