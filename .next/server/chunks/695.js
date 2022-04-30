exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ AuthContext),
  "H": () => (/* binding */ AuthContextProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./context/Reducer.ts
const Reducer = (state, action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                auth: action.payload,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                auth: null,
                error: true
            };
        case "ADD_FAVORITE":
            return {
                auth: {
                    ...state?.auth,
                    user: {
                        ...state?.auth?.user,
                        profile: {
                            ...state?.auth?.user?.profile,
                            favorite_count: state?.auth?.user?.profile?.favorite_count + 1
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
                            favorite_count: state?.auth?.user?.profile?.favorite_count - 1
                        }
                    }
                }
            };
        case "UPDATE_SUCCESS":
            return {
                auth: action.payload,
                error: false
            };
        case "UPDATE_FAILURE":
            return {
                auth: state.auth,
                error: true
            };
        case "LOGOUT":
            return {
                auth: null,
                error: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const context_Reducer = (Reducer);

;// CONCATENATED MODULE: ./context/AuthContext.tsx



const setAuthValue = ()=>{
    if (false) {}
};
const INITIAL_STATE = {
    auth: setAuthValue() || null,
    error: false,
    dispatch: null
};
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)(INITIAL_STATE);
const AuthContextProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(context_Reducer, INITIAL_STATE);
    (0,external_react_.useEffect)(()=>{
        sessionStorage.setItem("auth", JSON.stringify(state.auth));
    }, [
        state.auth
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: {
            auth: state.auth,
            error: state.error,
            dispatch
        },
        children: children
    }));
};


/***/ }),

/***/ 3612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api),
/* harmony export */   "o": () => (/* binding */ setToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* eslint-disable no-underscore-dangle */ 

let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null)=>{
    failedQueue.forEach((prom)=>{
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://odlt7iukp3.execute-api.ap-northeast-1.amazonaws.com/staging"
});
const set = (token)=>{
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.post["Access-Control-Allow-Origin"]) = "*";
};
function setToken(token, expiresIn) {
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .setToken */ .o4)(token, expiresIn);
    set(token);
}
api.interceptors.response.use((response)=>response
, (err)=>{
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise((resolve, reject)=>{
                failedQueue.push({
                    resolve,
                    reject
                });
            }).then((token)=>{
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios__WEBPACK_IMPORTED_MODULE_0___default()(originalRequest);
            }).catch((error)=>Promise.reject(error)
            );
        }
        originalRequest._retry = true;
        isRefreshing = true;
        return new Promise((resolve, reject)=>{
            axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://odlt7iukp3.execute-api.ap-northeast-1.amazonaws.com/staging"}/auth/tokens`, {
                access_token: (0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)(),
                refresh_token: (0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .getRefreshToken */ .YV)()
            }).then(({ data  })=>{
                api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
                originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
                setToken(data?.access_token);
                (0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .setRefreshToken */ .zI)(data?.refresh_token);
                processQueue(null, data.access_token);
                resolve(api(originalRequest));
            }).catch((error1)=>{
                processQueue(error1, null);
                setToken("");
                (0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .setRefreshToken */ .zI)("");
                if (false) {}
                reject(err);
            }).then(()=>{
                isRefreshing = false;
            });
        });
    }
    return Promise.reject(err);
});
api.interceptors.response.use((response)=>response.data
, (error)=>({
        data: error.response.data,
        statusCode: error.response.status
    })
);
set((0,_storage__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)());


/***/ }),

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G$": () => (/* binding */ USER_TOKEN),
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "zI": () => (/* binding */ setRefreshToken),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "YV": () => (/* binding */ getRefreshToken)
/* harmony export */ });
/* unused harmony exports REFRESH_TOKEN, EXPIRES_IN, setItem, getItem, clearToken, getExpireIn */
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);


const USER_TOKEN = "USER_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const EXPIRES_IN = "EXPIRES_IN";
const setItem = (key, value)=>{
    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, key, value, {
        path: "/"
    });
};
const getItem = (key)=>{
    const cookieStorage = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)((cookie__WEBPACK_IMPORTED_MODULE_1___default()));
    return cookieStorage[key] ?? "";
};
const setToken = (value, expiresIn)=>{
    setItem(USER_TOKEN, value);
    if (expiresIn) {
        const date = new Date();
        setItem(EXPIRES_IN, date.getTime() + expiresIn * 1000);
    }
};
const setRefreshToken = (value)=>{
    setItem(REFRESH_TOKEN, value);
};
const clearToken = ()=>setToken("")
;
const getToken = ()=>getItem(USER_TOKEN)
;
const getRefreshToken = ()=>getItem(REFRESH_TOKEN)
;
const getExpireIn = ()=>getItem(EXPIRES_IN)
;


/***/ }),

/***/ 3851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "g$": () => (/* binding */ refreshToken)
/* harmony export */ });
/* unused harmony exports getAccessTokenTwitter, authWithProvider, updateProfile */
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2574);
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_helpers_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3612);
/* harmony import */ var src_helpers_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* eslint-disable import/prefer-default-export */ 


const PREVENT_CORS_URL = "https://cors.bridged.cc";
const getAccessTokenTwitter = async (code, redirectUri)=>{
    const headers = new Headers();
    headers.append("Authorization", `Basic ${base64.encode(`${"WFJLbktvUGlpOGZmYU5ZUDdDUVY6MTpjaQ"}:${"xZUVmlOyy5_Capvu3ZAxN_C9synxgHL8ID3iZ8hWPKsI5hNX0H"}`)}`);
    headers.append("x-cors-grida-api-key", "875c0462-6309-4ddf-9889-5227b1acc82c");
    const formData = new FormData();
    formData.append("code", code);
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", redirectUri);
    formData.append("code_verifier", "challenge");
    try {
        const res = await fetch(`${PREVENT_CORS_URL}/https://api.twitter.com/2/oauth2/token`, {
            method: "POST",
            headers,
            body: new URLSearchParams({
                code,
                grant_type: "authorization_code",
                client_id: "WFJLbktvUGlpOGZmYU5ZUDdDUVY6MTpjaQ",
                redirect_uri: redirectUri,
                code_verifier: "challenge"
            })
        });
        const response = await res.json();
        return response;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return false;
    }
};
const authWithProvider = async (provider, accessToken)=>{
    try {
        const res = await api.post(`/auth/${provider}`, {
            access_token: accessToken
        });
        if (res?.data?.access_token) {
            setToken(res?.data?.access_token, res?.data?.access_token_expires_in_seconds);
            setRefreshToken(res?.data?.refresh_token);
        }
        return res;
    } catch (error) {
        return error;
    }
};
const logout = async ()=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post("/auth/logout");
        (0,src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .setToken */ .o)("");
        return res;
    } catch (error) {
        return error;
    }
};
const refreshToken = async ()=>{
    try {
        if ((0,src_helpers_storage__WEBPACK_IMPORTED_MODULE_2__/* .getToken */ .LP)()) {
            const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post("/auth/tokens", {
                access_token: (0,src_helpers_storage__WEBPACK_IMPORTED_MODULE_2__/* .getToken */ .LP)(),
                refresh_token: (0,src_helpers_storage__WEBPACK_IMPORTED_MODULE_2__/* .getRefreshToken */ .YV)()
            });
            if (res?.data?.access_token) {
                (0,src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .setToken */ .o)(res?.data?.access_token, res?.data?.access_token_expires_in_seconds);
                (0,src_helpers_storage__WEBPACK_IMPORTED_MODULE_2__/* .setRefreshToken */ .zI)(res?.data?.refresh_token);
            }
            return res;
        }
    } catch (error) {
        return error;
    }
};
const updateProfile = async (dataUpdate)=>{
    try {
        const res = await api.patch("/user/profile", dataUpdate);
        return res;
    } catch (error) {
        return error;
    }
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;