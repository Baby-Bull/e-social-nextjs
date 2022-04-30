"use strict";
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 3378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BB": () => (/* binding */ InputCustom),
/* harmony export */   "xD": () => (/* binding */ TextareaAutosizeCustom),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(668);
/* harmony import */ var src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8460);
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2586);









const BoxTitle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)({
    fontSize: 18,
    "@media (max-width: 425px)": {
        fontSize: 16
    },
    fontWeight: 700
});
const InputCustom = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputBase)({
    backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].whiteBlue */ .Z.whiteBlue,
    borderRadius: "6px",
    width: "100%",
    "&.MuiInputBase-root": {
        marginLeft: "0px",
        "& .MuiInputBase-input": {
            "@media (max-width: 425px)": {
                fontSize: 14
            },
            "&::-webkit-input-placeholder": {
                color: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].gray */ .Z.gray,
                opacity: 1
            },
            height: 36,
            paddingTop: 0,
            paddingBottom: 0,
            border: `2px solid transparent`,
            paddingLeft: "18px",
            "&:focus": {
                border: `2px solid ${src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].blue */ .Z.blue}`,
                borderRadius: "6px"
            }
        }
    }
});
const TextareaAutosizeCustom = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextareaAutosize)({
    backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].whiteBlue */ .Z.whiteBlue,
    paddingTop: "9px",
    paddingLeft: "18px",
    width: "100%",
    resize: "none",
    minHeight: "80px",
    border: `2px solid transparent`,
    borderRadius: "6px",
    fontFamily: "Noto Sans JP",
    color: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].navy */ .Z.navy,
    fontSize: 14,
    "&::-webkit-input-placeholder": {
        color: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].gray */ .Z.gray
    },
    "@media (min-width: 768px)": {
        fontSize: 16
    },
    "&:focus-visible": {
        border: `2px solid ${src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].blue */ .Z.blue}`,
        outline: "none"
    }
});
const FormComponent = ({ editable  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                sx: {
                    fontSize: [
                        18,
                        20
                    ],
                    fontWeight: 700
                },
                children: editable ? t("community:form.edit") : t("community:form.create")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    flexGrow: 1,
                    backgroundColor: "white",
                    mt: "8px",
                    p: [
                        "23px",
                        "40px"
                    ],
                    color: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].navy */ .Z.navy,
                    borderRadius: "12px",
                    border: [
                        `1px solid ${src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].lightGray_1 */ .Z.lightGray_1}`,
                        "none"
                    ]
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxTitle, {
                                    children: t("community:form.title")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 9,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputCustom, {
                                    sx: {
                                        ml: 1,
                                        flex: 1
                                    },
                                    placeholder: t("community:form.placeholder.title"),
                                    inputProps: {
                                        "aria-label": t("community:form.placeholder.title")
                                    },
                                    defaultValue: editable && t("community:form.title-value")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxTitle, {
                                    children: t("community:form.detail")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 9,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        height: "100%",
                                        borderRadius: "6px",
                                        "& div": {
                                            backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].whiteBlue */ .Z.whiteBlue,
                                            height: "100%",
                                            border: "2px solid transparent",
                                            outline: "none",
                                            borderRadius: "6px",
                                            pb: "8px",
                                            pr: {
                                                sm: "20%"
                                            }
                                        },
                                        "& div:focus-visible": {
                                            border: `2px solid ${src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].blue */ .Z.blue}`
                                        }
                                    },
                                    children: editable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        contentEditable: "true",
                                        dangerouslySetInnerHTML: {
                                            __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_5___default().sanitize(_mockData__WEBPACK_IMPORTED_MODULE_8__/* .postDetail.content */ .Qd.content)
                                        },
                                        style: {
                                            paddingLeft: "18px"
                                        }
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextareaAutosizeCustom, {
                                        "aria-label": "write-comment",
                                        placeholder: t("community:place-holder"),
                                        style: {}
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxTitle, {
                                    children: t("community:form.url")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 9,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputCustom, {
                                    sx: {
                                        ml: 1,
                                        flex: 1
                                    },
                                    placeholder: t("community:form.placeholder.url"),
                                    inputProps: {
                                        "aria-label": t("community:form.placeholder.url")
                                    },
                                    defaultValue: editable && _mockData__WEBPACK_IMPORTED_MODULE_8__/* .postDetail.url */ .Qd.url
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxTitle, {
                                    children: t("community:form.address")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 9,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputCustom, {
                                    sx: {
                                        ml: 1,
                                        flex: 1
                                    },
                                    placeholder: t("community:form.placeholder.address"),
                                    inputProps: {
                                        "aria-label": t("community:form.placeholder.address")
                                    },
                                    defaultValue: editable && _mockData__WEBPACK_IMPORTED_MODULE_8__/* .postDetail.address */ .Qd.address
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            mt: "40px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_common_ButtonComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            props: {
                                dimension: "medium",
                                bgColor: src_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].blue */ .Z.blue
                            },
                            children: editable ? t("community:form.submit-edit") : t("community:form.submit-create")
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormComponent);


/***/ })

};
;