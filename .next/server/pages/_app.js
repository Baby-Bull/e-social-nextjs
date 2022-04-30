"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(8544);
// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(1493);
// EXTERNAL MODULE: ./src/helpers/storage.ts
var storage = __webpack_require__(528);
// EXTERNAL MODULE: ./src/services/auth.ts
var auth = __webpack_require__(3851);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(699);
;// CONCATENATED MODULE: ./pages/_app.tsx




















// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
// eslint-disable-next-line no-undef
const MyApp = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps , pathname  } = props;
    const [queryClient] = external_react_.useState(()=>new external_react_query_.QueryClient()
    );
    external_react_.useEffect(()=>{
        const cookies = (0,external_nookies_.parseCookies)();
        if (!constants/* AUTH_PAGE_PATHS.includes */.rG.includes(pathname) && !cookies[storage/* USER_TOKEN */.G$]) {
            router_default().push("/login");
        }
        if (!constants/* AUTH_PAGE_PATHS.includes */.rG.includes(pathname) && cookies[storage/* USER_TOKEN */.G$]) {
            const now = new Date();
            const expiresIn = parseInt(cookies.EXPIRES_IN, 10) || now.getTime();
            const timeOutFreshToken = expiresIn - now.getTime() - 300000;
            setTimeout(()=>{
                (0,auth/* refreshToken */.g$)();
                setInterval(()=>{
                    (0,auth/* refreshToken */.g$)();
                }, 2700000);
            }, timeOutFreshToken);
        }
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(AuthContext/* AuthContextProvider */.H, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
            value: emotionCache,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width, maximum-scale=1"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                    theme: theme/* default */.Z,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
                            client: queryClient,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.Hydrate, {
                                state: pageProps.dehydratedState,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    let pageProps = {};
    const { query , pathname , res  } = ctx;
    const cookies = (0,external_nookies_.parseCookies)(ctx);
    if (!constants/* AUTH_PAGE_PATHS.includes */.rG.includes(pathname)) {
        if (!cookies[storage/* USER_TOKEN */.G$]) {
            if (res) {
            // ctx.res.writeHead(302, {
            //   Location: "/login",
            // });
            // ctx.res.end();
            // return {};
            } else {
                router_default().push("/login");
            }
        }
    }
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return {
        pageProps,
        query,
        pathname,
        cookies
    };
};
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));


/***/ }),

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.ts

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    return cache_default()({
        key: 'css',
        prepend: true
    });
};


/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2574:
/***/ ((module) => {

module.exports = require("base-64");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,493], () => (__webpack_exec__(3437)));
module.exports = __webpack_exports__;

})();