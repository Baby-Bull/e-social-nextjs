"use strict";
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 7568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(668);




const GridViewComponent = ({ title , data  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                sx: {
                    display: !title && "none",
                    mt: "10px",
                    color: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].navy */ .Z.navy,
                    fontWeight: 700,
                    textAlign: "center"
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    mt: [
                        "21px",
                        "10px"
                    ],
                    mx: [
                        "24px"
                    ],
                    mb: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                },
                children: data?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                mt: [
                                    0,
                                    "30px"
                                ],
                                mb: [
                                    "20px",
                                    0
                                ],
                                flex: [
                                    "0 0 30%",
                                    "0 0 18%"
                                ],
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                    variant: "square",
                                    sx: {
                                        width: "149px",
                                        height: "149px"
                                    },
                                    src: item.avatar
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    component: "span",
                                    pt: "10px",
                                    sx: {
                                        fontWeight: 700,
                                        color: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].navy */ .Z.navy
                                    },
                                    children: item.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    component: "span",
                                    pt: "8px",
                                    sx: {
                                        fontSize: 12,
                                        color: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].gray */ .Z.gray
                                    },
                                    children: item.job
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    component: "span",
                                    pt: "8px",
                                    sx: {
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].gray */ .Z.gray
                                    },
                                    children: item.last_login
                                })
                            ]
                        })
                    }, index.toString())
                )
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridViewComponent);


/***/ })

};
;