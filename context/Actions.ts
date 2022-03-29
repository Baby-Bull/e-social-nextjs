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

export const UpdateStart = (authCredentials: any) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (auth: object) => ({
    type: "UPDATE_SUCCESS",
    payload: auth,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});