"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 3968:
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
/* harmony import */ var src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8460);





const DialogConfirmComponent = ({ isShow , title , content , btnLeft , btnRight , handleClose , handleCancel , handleOK ,  })=>{
    const [fullWidth] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        PaperProps: {
            style: {
                borderRadius: 12,
                maxWidth: "640px"
            }
        },
        open: isShow,
        onClose: handleClose,
        scroll: "paper",
        fullWidth: fullWidth,
        "aria-labelledby": "scroll-dialog-title",
        "aria-describedby": "scroll-dialog-description",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                id: "scroll-dialog-title",
                sx: {
                    backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].whiteBlue */ .Z.whiteBlue,
                    textAlign: "right",
                    position: "relative"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Fab, {
                    variant: "circular",
                    onClick: handleClose,
                    sx: {
                        position: "absolute",
                        top: [
                            "7px",
                            "10px"
                        ],
                        right: [
                            "7px",
                            "15px"
                        ],
                        width: [
                            "30px",
                            "inherit"
                        ],
                        height: [
                            "30px",
                            "inherit"
                        ],
                        backgroundColor: "transparent",
                        boxShadow: "unset",
                        "&:hover": {
                            backgroundColor: "transparent",
                            opacity: 0.8
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                        variant: "square",
                        sx: {
                            width: [
                                "24px",
                                "22px"
                            ],
                            height: [
                                "24px",
                                "22px"
                            ],
                            display: "flex",
                            justifyContent: "center"
                        },
                        src: "/assets/images/svg/delete-x.svg"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                sx: {
                    backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].whiteBlue */ .Z.whiteBlue,
                    px: [
                        "14px",
                        "40px"
                    ]
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        textAlign: "center",
                        pt: [
                            "35px",
                            "37px"
                        ],
                        px: [
                            0,
                            "50px"
                        ],
                        mb: [
                            "22px",
                            0
                        ]
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                component: "span",
                                sx: {
                                    px: [
                                        "15px",
                                        "10px"
                                    ],
                                    color: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].navy */ .Z.navy,
                                    fontSize: [
                                        16,
                                        20
                                    ],
                                    fontWeight: 700
                                },
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                component: "span",
                                sx: {
                                    mt: [
                                        "35px"
                                    ],
                                    px: [
                                        0,
                                        "50px"
                                    ],
                                    fontSize: [
                                        14,
                                        16
                                    ],
                                    color: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].navy */ .Z.navy
                                },
                                children: content
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                sx: {
                    backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].whiteBlue */ .Z.whiteBlue,
                    display: "flex",
                    flexDirection: [
                        "column",
                        "row"
                    ],
                    alignItems: "center",
                    justifyContent: [
                        "center",
                        "space-around"
                    ],
                    p: [
                        "30px 45px 60px 45px",
                        "30px 45px 55px 45px"
                    ],
                    "&.MuiDialogActions-root": {
                        "& > :not(:first-of-type)": {
                            marginLeft: 0
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        props: {
                            dimension: "medium",
                            bgColor: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].gray */ .Z.gray
                        },
                        sx: {
                            height: "56px"
                        },
                        onClick: handleCancel,
                        children: btnLeft
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        props: {
                            dimension: "medium",
                            bgColor: src_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].blue */ .Z.blue
                        },
                        sx: {
                            height: "56px",
                            mt: [
                                "40px",
                                0
                            ]
                        },
                        onClick: handleOK,
                        children: btnRight
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogConfirmComponent);


/***/ })

};
;