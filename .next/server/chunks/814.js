"use strict";
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 6105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8383);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(668);
/* harmony import */ var src_services_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1727);
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1493);
/* harmony import */ var src_messages_validate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3249);

















/* event change select option */ const DialogReport = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()))({
    "& .MuiPaper-root": {
        maxWidth: "100%"
    },
    "& .MuiDialog-paper": {
        backgroundColor: `${src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].whiteBlue */ .Z.whiteBlue}`,
        borderRadius: "12px",
        width: "44.44%",
        margin: 0,
        paddingLeft: "40px",
        paddingRight: "40px"
    },
    "@media (max-width: 1200px)": {
        "& .MuiDialog-paper": {
            width: "93%",
            paddingLeft: "20px",
            paddingRight: "20px"
        }
    }
});
const SelectCustom = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Select)({
    borderRadius: 6,
    marginTop: "8px",
    width: "100%",
    height: "40px",
    "& fieldset": {
        border: "none"
    },
    borderColor: "#fff",
    "&:hover": {
        borderRadius: 12,
        borderColor: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].whiteBlue */ .Z.whiteBlue
    },
    "@media (max-width: 1200px)": {
        width: "100%"
    },
    "& .MuiSelect-select": {
        position: "relative",
        backgroundColor: "#fff",
        border: "2px solid #03BCDB",
        fontSize: 16,
        padding: "9px 16px",
        borderRadius: 12,
        fontFamily: "Noto Sans",
        "@media (max-width: 1200px)": {
            fontSize: 14
        }
    }
});
const FieldTextArea = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)((_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_9___default()))({
    width: "100%",
    marginTop: "8px",
    border: "2px solid #03BCDB",
    backgroundColor: "#fff",
    fontSize: 16,
    padding: "10px",
    borderRadius: "12px",
    "&::-webkit-input-placeholder": {
        fontSize: 14,
        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].gray */ .Z.gray
    },
    "@media (max-width: 1200px)": {
        fontSize: 14,
        width: "100%"
    }
});
const ButtonAction = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()))({
    width: "240px",
    height: "56px",
    fontSize: "18px",
    borderRadius: "28px"
});
const TypoContentReport = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography)({
    fontSize: "20px",
    lineHeight: "40px",
    fontWeight: 500,
    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
    "@media (max-width: 1200px)": {
        fontSize: "14px",
        lineHeight: "30px"
    }
});
const popupReportUser = ({ showPopup , setShowPopup , user  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [option, setOption] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(src_constants_constants__WEBPACK_IMPORTED_MODULE_15__/* .USER_REPORT_OPTIONS[0].value */ .bJ[0].value);
    const [report, setReport] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { 0: userReportRequest , 1: setUserReportRequest  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        reason: null,
        detail: ""
    });
    const errorMessages = {
        reason: null,
        detail: null
    };
    const { 0: errorValidates , 1: setErrorValidates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        reason: null,
        detail: null
    });
    const onChangeReportRequest = (key, value)=>{
        // eslint-disable-next-line no-use-before-define
        if (key === "reason") {
            setOption(value);
        }
        setUserReportRequest({
            ...userReportRequest,
            [key]: typeof value === "string" ? value.trim() : value
        });
    };
    const handleValidateForm = ()=>{
        let isValidForm = true;
        // validate purpose;
        if (!userReportRequest?.reason || userReportRequest?.reason?.length === 0) {
            isValidForm = false;
            errorMessages.reason = src_messages_validate__WEBPACK_IMPORTED_MODULE_16__/* .VALIDATE_FORM_USER_PORT.reason.required */ .Yh.reason.required;
        }
        if (!userReportRequest?.detail || userReportRequest?.detail?.length > 1000) {
            isValidForm = false;
            errorMessages.detail = src_messages_validate__WEBPACK_IMPORTED_MODULE_16__/* .VALIDATE_FORM_USER_PORT.detail.max_length */ .Yh.detail.max_length;
        }
        setErrorValidates(errorMessages);
        return isValidForm;
    };
    const submitUserReportRequest = async ()=>{
        if (handleValidateForm()) {
            const res = await (0,src_services_user__WEBPACK_IMPORTED_MODULE_14__/* .userReport */ .Mx)(user.id, userReportRequest);
            setReport(true);
            return res.data;
        }
    };
    const handleClose = ()=>{
        errorMessages.reason = null;
        errorMessages.detail = null;
        setOption(src_constants_constants__WEBPACK_IMPORTED_MODULE_15__/* .USER_REPORT_OPTIONS[0].value */ .bJ[0].value);
        setErrorValidates(errorMessages);
        setShowPopup(false);
        setReport(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogReport, {
            open: showPopup,
            onClose: handleClose,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "end",
                        m: {
                            xs: "10px -10px 0 0",
                            lg: "10px -30px 0 0"
                        },
                        cursor: "pointer"
                    },
                    onClick: handleClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
                        src: "/assets/images/icon/ic_close.png",
                        sx: {
                            width: "42px",
                            height: "42px"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default()), {
                    sx: {
                        p: 0,
                        mb: "32px",
                        display: report ? "none" : "block"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
                                src: user?.profile_image
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                component: "span",
                                sx: {
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: "24px",
                                    ml: "20px"
                                },
                                children: [
                                    user?.username,
                                    " ",
                                    t("chat:popup.report_user")
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        p: 0,
                        display: report ? "block" : "none",
                        mt: "-27px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
                                src: "/assets/images/report/content_report.png",
                                sx: {
                                    width: {
                                        xs: "160px",
                                        lg: "180px"
                                    },
                                    height: {
                                        xs: "160px",
                                        lg: "180px"
                                    }
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                            sx: {
                                m: "20px 0 34px 0"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoContentReport, {
                                    children: t("chat:popup.thanks-report1")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoContentReport, {
                                    children: t("chat:popup.thanks-report2")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                            sx: {
                                mb: "36px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonAction, {
                                onClick: ()=>router.push("/")
                                ,
                                sx: {
                                    background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                    color: "#fff",
                                    "&:hover": {
                                        background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)"
                                    }
                                },
                                children: t("chat:popup.home")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        p: 0,
                        display: report ? "none" : "block"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default()), {
                            id: "alert-dialog-description",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                    component: "span",
                                                    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                                    children: t("chat:popup.reason-for-reporting")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                    sx: {
                                                        background: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].orange */ .Z.orange,
                                                        borderRadius: "11px",
                                                        height: "20px",
                                                        width: "54px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        ml: "4px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                        component: "span",
                                                        fontSize: 12,
                                                        color: "#fff",
                                                        children: t("chat:popup.required")
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectCustom, {
                                            onChange: (e)=>onChangeReportRequest("reason", e.target.value)
                                            ,
                                            defaultValue: src_constants_constants__WEBPACK_IMPORTED_MODULE_15__/* .USER_REPORT_OPTIONS[0].value */ .bJ[0].value,
                                            displayEmpty: true,
                                            value: option,
                                            children: src_constants_constants__WEBPACK_IMPORTED_MODULE_15__/* .USER_REPORT_OPTIONS.map */ .bJ.map((optionValue, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    value: optionValue.value,
                                                    sx: {
                                                        color: optionValue.value ? src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy : src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].gray */ .Z.gray,
                                                        fontSize: optionValue.value ? "16px" : "14px"
                                                    },
                                                    children: optionValue.label
                                                }, index)
                                            )
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                            sx: {
                                                color: "red"
                                            },
                                            children: errorValidates.reason
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                    sx: {
                                        m: "40px 0 46px 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                            component: "span",
                                            color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                            children: t("chat:popup.background-to-the-report")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldTextArea, {
                                            style: {
                                                height: "195px"
                                            },
                                            placeholder: t("chat:popup.form.placeholder.background-to-the-report"),
                                            onChange: (e)=>onChangeReportRequest("detail", e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                            sx: {
                                                color: "red"
                                            },
                                            children: errorValidates.detail
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                        component: "span",
                                        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                        fontSize: 14,
                                        children: t("chat:popup.text-confirm-report")
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                            sx: {
                                textAlign: "center",
                                display: {
                                    xs: "block",
                                    lg: "flex"
                                },
                                m: "26px 0 56px 0",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonAction, {
                                    onClick: handleClose,
                                    sx: {
                                        background: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].gray */ .Z.gray,
                                        color: "#fff",
                                        m: {
                                            xs: "0 0 40px 0",
                                            lg: "0 40px 0 0"
                                        },
                                        "&:hover": {
                                            backgroundColor: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].gray */ .Z.gray
                                        }
                                    },
                                    children: t("chat:popup.cancel")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonAction, {
                                    onClick: ()=>submitUserReportRequest()
                                    ,
                                    sx: {
                                        backgroundColor: "#FFDA58",
                                        color: "#000000",
                                        "&:hover": {
                                            backgroundColor: "#FFDA58"
                                        }
                                    },
                                    children: t("chat:popup.send-report")
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupReportUser);


/***/ }),

/***/ 7133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5374);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8383);
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_services_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1727);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(668);
/* harmony import */ var src_messages_validate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3249);















/* event change select option */ const DialogReview = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default()))({
    "& .MuiPaper-root": {
        maxWidth: "100%"
    },
    "& .MuiDialog-paper": {
        backgroundColor: `${src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].whiteBlue */ .Z.whiteBlue}`,
        borderRadius: "12px",
        width: "44.44%",
        margin: 0,
        paddingLeft: "40px",
        paddingRight: "40px"
    },
    "@media (max-width: 1200px)": {
        "& .MuiDialog-paper": {
            width: "93%",
            paddingLeft: "20px",
            paddingRight: "20px"
        }
    }
});
const TypoTitleReview = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
    width: "100px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1200px)": {
        fontSize: "16px",
        marginBottom: "14px"
    }
});
const TypoContentReview = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1200px)": {
        alignItems: "unset"
    }
});
const FieldTextAreaReview = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)((_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_10___default()))({
    width: "440px",
    border: "1px solid #03BCDB",
    backgroundColor: "#fff",
    fontSize: 16,
    padding: "9px 16px",
    borderRadius: "12px",
    "&:placeholder": {
        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].gray */ .Z.gray
    },
    "@media (max-width: 1200px)": {
        fontSize: 14,
        width: "293px"
    }
});
const FieldTextAreaCheck = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)((_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_10___default()))({
    width: "440px",
    fontSize: 16,
    background: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].whiteBlue */ .Z.whiteBlue,
    border: "none",
    "@media (max-width: 1200px)": {
        width: "293px"
    }
});
const BoxContentReview = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({
    display: "flex",
    marginBottom: "25px",
    "@media (max-width: 1200px)": {
        display: "block",
        marginBottom: "40px"
    }
});
const BoxContentReviewIsCheck = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({
    display: "flex",
    marginBottom: "25px",
    "@media (max-width: 1200px)": {
        display: "flex",
        marginBottom: "40px"
    }
});
const PopupReviewComponent = ({ showPopup , setShowPopup , user  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
    const [isCheck, setIsCheck] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [isPost, setIsPost] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handleUnCheck = ()=>{
        setIsCheck(false);
    };
    const isGood = "good";
    const isBad = "bad";
    const [selectedValueRating, setSelectedValueRating] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(isGood);
    const [selectedHideReviewer, setSelectedHideReviewer] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [selectedReportToAdmin, setSelectedReportToAdmin] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const [valueComment, setValueComment] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    const { 0: userReviewRequest , 1: setUserReviewRequest  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        rating: selectedValueRating,
        comment: "",
        hide_reviewer: selectedHideReviewer,
        send_report_to_admin: selectedReportToAdmin
    });
    const errorMessages = {
        comment: null
    };
    const { 0: errorValidates , 1: setErrorValidates  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        comment: null
    });
    const handleValidateForm = ()=>{
        let isValidForm = true;
        if (!userReviewRequest?.comment || userReviewRequest?.comment.length > 400) {
            isValidForm = false;
            errorMessages.comment = src_messages_validate__WEBPACK_IMPORTED_MODULE_14__/* .VALIDATE_FORM_USER_REVIEW.comment.max_length */ .Gf.comment.max_length;
        }
        setErrorValidates(errorMessages);
        return isValidForm;
    };
    const handleClose = ()=>{
        setShowPopup(false);
        setIsPost(false);
        setIsCheck(false);
        setSelectedValueRating(isGood);
    };
    const handleIsCheck = ()=>{
        if (handleValidateForm()) {
            setIsCheck(true);
        }
    };
    const onChangeReviewRequest = (key, value)=>{
        if (key === "rating") {
            setSelectedValueRating(value);
        }
        if (key === "hide_reviewer") {
            setSelectedHideReviewer(value);
        }
        if (key === "send_report_to_admin") {
            setSelectedReportToAdmin(value);
        }
        if (key === "comment") {
            setValueComment(value);
        }
        // eslint-disable-next-line no-unreachable
        setUserReviewRequest({
            ...userReviewRequest,
            [key]: typeof value === "string" ? value.trim() : value
        });
    };
    const submitUserReviewRequest = async ()=>{
        const res = await (0,src_services_user__WEBPACK_IMPORTED_MODULE_12__/* .userReview */ .DL)(user.id, userReviewRequest);
        setIsPost(true);
        return res.data;
    };
    // @ts-ignore
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogReview, {
                open: showPopup,
                onClose: handleClose,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                sx: {
                    display: isPost ? "block" : "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "end",
                            m: {
                                xs: "8px -14px 0 0",
                                lg: "24px -8px 0 0"
                            },
                            cursor: "pointer"
                        },
                        onClick: handleClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            src: "/assets/images/icon/ic_close.png"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                textAlign: {
                                    xs: "left",
                                    lg: "center"
                                },
                                m: "30px 0 96px 0"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    sx: {
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        lineHeight: "40px",
                                        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy
                                    },
                                    children: t("chat:popup.text-thanks-review")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    sx: {
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        lineHeight: "40px",
                                        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy
                                    },
                                    children: t("chat:popup.text-share-review")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    sx: {
                                        background: "#55ACEE",
                                        color: "#fff",
                                        width: "280px",
                                        height: "48px",
                                        mt: "37px",
                                        borderRadius: "40px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                            src: "/assets/images/logo/logo_twitter.png",
                                            sx: {
                                                width: "27px",
                                                height: "21.9px",
                                                mr: "13px"
                                            }
                                        }),
                                        t("chat:popup.twitter")
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogReview, {
                open: showPopup,
                onClose: handleClose,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                sx: {
                    display: isPost ? "none" : "block"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            display: isCheck ? "none" : "flex",
                            justifyContent: "end",
                            m: {
                                xs: "8px -14px 0 0",
                                lg: "8px -32px 0 0"
                            },
                            cursor: "pointer"
                        },
                        onClick: handleClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            src: "/assets/images/icon/ic_close.png"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default()), {
                        sx: {
                            p: isCheck ? "40px 0 40px 0" : "0 0 40px 0"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                    src: user?.profile_image
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    sx: {
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        lineHeight: "24px",
                                        ml: "20px"
                                    },
                                    children: [
                                        user?.username,
                                        " ",
                                        t("chat:popup.review")
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            p: "0",
                            display: isCheck ? "none" : "block"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default()), {
                            id: "alert-dialog-description",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReview, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            children: t("chat:popup.evaluation")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            checked: selectedValueRating === isGood,
                                                            onChange: (e)=>onChangeReviewRequest("rating", e.target.value)
                                                            ,
                                                            value: isGood,
                                                            name: "radio-buttons",
                                                            sx: {
                                                                color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue,
                                                                mr: "15px",
                                                                p: 0,
                                                                "&.Mui-checked": {
                                                                    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue
                                                                }
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                            fontWeight: 500,
                                                            color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                                            children: t("chat:popup.form.it-was-good")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        ml: "29px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            checked: selectedValueRating === isBad,
                                                            onChange: (e)=>onChangeReviewRequest("rating", e.target.value)
                                                            ,
                                                            value: isBad,
                                                            name: "radio-buttons",
                                                            sx: {
                                                                color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue,
                                                                mr: "15px",
                                                                p: 0,
                                                                "&.Mui-checked": {
                                                                    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue
                                                                }
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                            fontWeight: 500,
                                                            color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                                            children: t("chat:popup.form.it-was-bad")
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReview, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            children: t("chat:popup.report")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                                    onChange: (e)=>onChangeReviewRequest("send_report_to_admin", e.target.checked)
                                                    ,
                                                    value: true,
                                                    sx: {
                                                        p: 0,
                                                        mr: "15px",
                                                        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue,
                                                        "&.Mui-checked": {
                                                            color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue
                                                        }
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                    fontWeight: 500,
                                                    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                                    children: t("chat:popup.form.report-management")
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReview, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            children: t("chat:popup.anonymous")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                                    onChange: (e)=>onChangeReviewRequest("hide_reviewer", e.target.checked)
                                                    ,
                                                    value: true,
                                                    sx: {
                                                        p: 0,
                                                        mr: "15px",
                                                        color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue,
                                                        "&.Mui-checked": {
                                                            color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].blue */ .Z.blue
                                                        }
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                    fontWeight: 500,
                                                    color: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].navy */ .Z.navy,
                                                    children: t("chat:popup.form.post-anonymously")
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReview, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            sx: {
                                                alignItems: "unset"
                                            },
                                            children: t("chat:popup.comment")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldTextAreaReview, {
                                                    minRows: 12,
                                                    placeholder: t("chat:popup.form.placeholder.comment"),
                                                    onChange: (e)=>onChangeReviewRequest("comment", e.target.value)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    sx: {
                                                        color: "red"
                                                    },
                                                    children: errorValidates.comment
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            p: "0",
                            display: isCheck ? "block" : "none"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default()), {
                            id: "alert-dialog-description",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReviewIsCheck, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TypoTitleReview, {
                                            children: [
                                                t("chat:popup.evaluation"),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoContentReview, {
                                            children: selectedValueRating === isGood ? t("chat:popup.form.it-was-good") : t("chat:popup.form.it-was-bad")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReviewIsCheck, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            children: t("chat:popup.report")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoContentReview, {
                                            children: selectedReportToAdmin ? t("chat:popup.form.report-management") : t("chat:popup.form.report-management-null")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReviewIsCheck, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            children: t("chat:popup.anonymous")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoContentReview, {
                                            children: selectedHideReviewer ? t("chat:popup.form.post-anonymously") : t("chat:popup.form.post-anonymously-null")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxContentReviewIsCheck, {
                                    sx: {
                                        display: "display !important"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypoTitleReview, {
                                            sx: {
                                                alignItems: "unset"
                                            },
                                            children: t("chat:popup.comment")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldTextAreaCheck, {
                                                minRows: 12,
                                                value: valueComment
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4___default()), {
                        sx: {
                            dislay: "flex",
                            justifyContent: "center",
                            pb: "31px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    display: isCheck ? "none" : "block"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    sx: {
                                        background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                        color: "#fff",
                                        borderRadius: {
                                            xs: "28px",
                                            lg: "40px"
                                        },
                                        width: {
                                            xs: "240px",
                                            lg: "280px"
                                        },
                                        height: {
                                            xs: "56px",
                                            lg: "48px"
                                        }
                                    },
                                    onClick: ()=>handleIsCheck()
                                    ,
                                    children: t("chat:popup.check-review")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    display: isCheck ? "block" : "none",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            sx: {
                                                background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                                color: "#fff",
                                                borderRadius: {
                                                    xs: "28px",
                                                    lg: "40px"
                                                },
                                                width: {
                                                    xs: "240px",
                                                    lg: "280px"
                                                },
                                                height: {
                                                    xs: "56px",
                                                    lg: "48px"
                                                },
                                                mb: "20px"
                                            },
                                            onClick: ()=>submitUserReviewRequest()
                                            ,
                                            children: t("chat:popup.post-review")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        sx: {
                                            background: src_theme__WEBPACK_IMPORTED_MODULE_13__/* ["default"].gray */ .Z.gray,
                                            color: "#fff",
                                            borderRadius: "40px",
                                            width: "200px",
                                            height: "40px"
                                        },
                                        onClick: handleUnCheck,
                                        children: t("chat:popup.to-fix")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupReviewComponent);


/***/ })

};
;