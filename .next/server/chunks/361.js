"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 4812:
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
/* harmony import */ var src_components_layouts_ContentComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2633);




const LayoutComponent = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_layouts_ContentComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                mt: [
                    "20px",
                    "80px"
                ],
                mb: [
                    "80px",
                    "141px"
                ],
                mx: [
                    "20px",
                    "8.4%"
                ]
            },
            children: children
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutComponent);


/***/ }),

/***/ 1209:
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
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(668);
/* harmony import */ var src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8460);
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2586);








const IntroCommunityComponent = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    backgroundColor: "white",
                    p: "20px 20px 40px 20px",
                    minHeight: {
                        sm: "601px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    border: `2px solid ${src_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].whiteGray */ .Z.whiteGray}`,
                    borderRadius: "12px",
                    color: src_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].navy */ .Z.navy
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        sx: {
                            fontSize: 18,
                            fontWeight: 700
                        },
                        children: t("community:intro.title.detail")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        children: _mockData__WEBPACK_IMPORTED_MODULE_7__/* .infoAdmin.description */ .x9.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        sx: {
                            mt: "22px",
                            pb: "8px",
                            fontSize: 18,
                            fontWeight: 700
                        },
                        children: t("community:intro.title.administrator")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        display: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                sx: {
                                    mr: "8px",
                                    width: "32px",
                                    height: "32px"
                                },
                                src: "/assets/images/svg/dog.svg"
                            }),
                            _mockData__WEBPACK_IMPORTED_MODULE_7__/* .infoAdmin.name */ .x9.name
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        sx: {
                            mt: "22px",
                            fontSize: 18,
                            fontWeight: 700
                        },
                        children: t("community:intro.title.open-date")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        children: _mockData__WEBPACK_IMPORTED_MODULE_7__/* .infoAdmin.open_date */ .x9.open_date
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        sx: {
                            mt: "22px",
                            fontSize: 18,
                            fontWeight: 700
                        },
                        children: t("community:intro.title.role-create-post")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "span",
                        children: _mockData__WEBPACK_IMPORTED_MODULE_7__/* .infoAdmin.role */ .x9.role
                    }),
                    _mockData__WEBPACK_IMPORTED_MODULE_7__/* .status */ .i7 === "withdraw" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        props: {
                            square: true,
                            bgColor: src_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orange */ .Z.orange
                        },
                        sx: {
                            mt: [
                                "55px",
                                "26px"
                            ],
                            width: "197px",
                            height: "102px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                t("community:button.go-to-virtual-room"),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    sx: {
                                        pt: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/images/svg/community_message.svg",
                                            alt: "community_message"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            pl: "16px",
                                            fontWeight: 700,
                                            children: _mockData__WEBPACK_IMPORTED_MODULE_7__/* .countMemberOnVirtualRoom */ .Hn
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            _mockData__WEBPACK_IMPORTED_MODULE_7__/* .canCreatePost */ .sm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    props: {
                        square: true,
                        mode: "gradient",
                        dimension: "medium"
                    },
                    sx: {
                        mt: [
                            "20px",
                            "40px"
                        ],
                        height: "54px"
                    },
                    onClick: ()=>router.push(`/community/post/create`)
                    ,
                    children: t("community:button.intro.create-post")
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroCommunityComponent);


/***/ })

};
;