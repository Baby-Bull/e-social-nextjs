"use strict";
exports.id = 581;
exports.ids = [581];
exports.modules = {

/***/ 8151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blocks_ModalMatchingComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: external "@mui/lab/AdapterDateFns"
var AdapterDateFns_ = __webpack_require__(6715);
var AdapterDateFns_default = /*#__PURE__*/__webpack_require__.n(AdapterDateFns_);
// EXTERNAL MODULE: external "@mui/lab/LocalizationProvider"
var LocalizationProvider_ = __webpack_require__(9904);
var LocalizationProvider_default = /*#__PURE__*/__webpack_require__.n(LocalizationProvider_);
// EXTERNAL MODULE: external "@mui/lab/DatePicker"
var DatePicker_ = __webpack_require__(2089);
var DatePicker_default = /*#__PURE__*/__webpack_require__.n(DatePicker_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(5564);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/components/common/Form/_Field.tsx









const InputCustom = (0,styles_.styled)(material_.InputBase)({
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "white",
        border: `1px solid ${theme/* default.blue */.Z.blue}`,
        fontSize: 14,
        padding: "10px 8px",
        borderRadius: 12,
        fontFamily: "Noto Sans JP",
        "&:focus": {
            boxShadow: `${theme/* default.blue */.Z.blue} 0 0 0 0.1rem`,
            borderColor: theme/* default.blue */.Z.blue
        }
    }
});
const SelectCustom = (0,styles_.styled)(material_.Select)({
    borderRadius: 12,
    borderColor: theme/* default.blue */.Z.blue,
    "&:before": {
        display: "none"
    },
    "&:hover": {
        borderRadius: 12,
        borderColor: theme/* default.blue */.Z.blue
    },
    "&:focus-visible": {
        outline: "none"
    },
    "& .MuiSelect-select": {
        position: "relative",
        backgroundColor: "white",
        border: `1px solid ${theme/* default.blue */.Z.blue}`,
        fontSize: 14,
        padding: "8px 10px",
        borderRadius: 12,
        fontFamily: "Noto Sans JP",
        "&:focus": {
            borderRadius: 12,
            boxShadow: `${theme/* default.blue */.Z.blue} 0 0 0 0.1rem`,
            borderColor: theme/* default.blue */.Z.blue
        }
    }
});
const labelStyle = {
    display: "flex",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "48px"
};
const Field = ({ required , id , label , placeholder , editor , options , value , error , onChangeValue ,  })=>{
    const [date, setDate] = external_react_.useState(new Date());
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                className: "form-group",
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "32px"
                },
                children: [
                    editor.toLowerCase() === "textbox" && /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                        variant: "standard",
                        fullWidth: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 3,
                                    xs: 12,
                                    sx: {
                                        height: "40px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                        shrink: true,
                                        htmlFor: id,
                                        sx: labelStyle,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            display: "flex",
                                            children: [
                                                label,
                                                required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "input-required-mark",
                                                    children: "＊"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 9,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InputCustom, {
                                        placeholder: placeholder,
                                        defaultValue: value,
                                        id: id,
                                        onChange: (e)=>onChangeValue(id, e.target.value)
                                        ,
                                        fullWidth: true
                                    })
                                })
                            ]
                        })
                    }),
                    editor.toLowerCase() === "textarea" && /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                        variant: "standard",
                        fullWidth: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 3,
                                    xs: 12,
                                    sx: {
                                        height: "40px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                        shrink: true,
                                        htmlFor: id,
                                        sx: labelStyle,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            display: "flex",
                                            children: [
                                                label,
                                                required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "input-required-mark",
                                                    children: "＊"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 9,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InputCustom, {
                                        multiline: true,
                                        rows: 10,
                                        placeholder: placeholder,
                                        defaultValue: value,
                                        id: id,
                                        onChange: (e)=>onChangeValue(id, e.target.value)
                                        ,
                                        fullWidth: true
                                    })
                                })
                            ]
                        })
                    }),
                    editor.toLowerCase() === "dropdown" && /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                        variant: "standard",
                        fullWidth: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 3,
                                    xs: 12,
                                    sx: {
                                        height: "40px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                        shrink: true,
                                        htmlFor: id,
                                        sx: labelStyle,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            display: "flex",
                                            children: [
                                                label,
                                                required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "input-required-mark",
                                                    children: "＊"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 9,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                        autoWidth: false,
                                        value: value,
                                        defaultValue: options[0]?.value,
                                        placeholder: placeholder,
                                        onChange: (e)=>onChangeValue(id, e.target.value)
                                        ,
                                        displayEmpty: true,
                                        fullWidth: true,
                                        children: options && options.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                sx: {
                                                    fontSize: "14px"
                                                },
                                                value: option?.value,
                                                children: option?.label
                                            }, index)
                                        )
                                    })
                                })
                            ]
                        })
                    }),
                    editor.toLowerCase() === "date-picker" && /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControl, {
                        variant: "standard",
                        fullWidth: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 3,
                                    xs: 12,
                                    sx: {
                                        height: "40px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                        shrink: true,
                                        htmlFor: id,
                                        sx: labelStyle,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            display: "flex",
                                            children: [
                                                label,
                                                required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "input-required-mark",
                                                    children: "＊"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 9,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((LocalizationProvider_default()), {
                                        dateAdapter: (AdapterDateFns_default()),
                                        locale: locale_.ja,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((DatePicker_default()), {
                                            minDate: new Date(),
                                            value: date,
                                            inputFormat: "dd/MM/yyyy",
                                            onChange: (newValue)=>{
                                                onChangeValue(id, newValue?.toLocaleString("sv-SE", {
                                                    dateStyle: "short",
                                                    timeStyle: "short"
                                                }));
                                                setDate(newValue);
                                            },
                                            // renderInput={(params) => (
                                            //   <Box
                                            //     sx={{
                                            //       backgroundColor: "white",
                                            //       border: `1px solid ${theme.blue}`,
                                            //       padding: "10px 12px",
                                            //       borderRadius: "12px",
                                            //       fontFamily: "Noto Sans JP",
                                            //       alignItems: "center",
                                            //       display: "flex",
                                            //     }}
                                            //   >
                                            //     <TextField
                                            //       fullWidth
                                            //       {...params}
                                            //       inputProps={{
                                            //         ...params.inputProps,
                                            //         placeholder: "日日/月月/年年年年"
                                            //       }}
                                            //       variant="standard"
                                            //       InputProps={{
                                            //         disableUnderline: true,
                                            //       }}
                                            //     />
                                            //     {params.InputProps?.endAdornment}
                                            //   </Box>
                                            // )}
                                            renderInput: ({ inputRef , inputProps , InputProps  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                    sx: {
                                                        backgroundColor: "white",
                                                        border: `1px solid ${theme/* default.blue */.Z.blue}`,
                                                        padding: "10px 12px",
                                                        borderRadius: "12px",
                                                        fontFamily: "Noto Sans JP",
                                                        alignItems: "center",
                                                        display: "flex"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            style: {
                                                                outlineStyle: "none",
                                                                borderStyle: "none",
                                                                fontSize: "16px",
                                                                width: "100%"
                                                            },
                                                            placeholder: "クリックして日付を選択",
                                                            ref: inputRef,
                                                            ...inputProps,
                                                            readOnly: true
                                                        }),
                                                        InputProps?.endAdornment
                                                    ]
                                                })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    fontSize: "10px",
                    color: "red",
                    textAlign: editor === "checkbox" ? "center" : "left",
                    "&": {
                        "@media (max-width: 425px)": {
                            maxWidth: 320
                        },
                        "@media (min-width: 768px)": {
                            maxWidth: 220
                        },
                        "@media (min-width: 1024px)": {
                            maxWidth: 320
                        },
                        "@media (min-width: 900px)": {
                            marginLeft: "150px"
                        }
                    }
                },
                children: error
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/home/home.module.scss
var home_module = __webpack_require__(7151);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(1493);
// EXTERNAL MODULE: ./src/messages/validate.ts
var validate = __webpack_require__(3249);
;// CONCATENATED MODULE: ./src/components/home/blocks/ModalMatchingComponent.tsx










const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 640,
    boxShadow: 24,
    borderRadius: "12px",
    p: 5,
    pb: 4,
    maxWidth: "90%",
    marginTop: "100px",
    paddingTop: "60px",
    padding: "21px"
};
const ModalMatchingComponent = ({ open , setOpen , userRequestMatching , handleSendMatchingRequest ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: matchingRequest , 1: setMatchingRequest  } = (0,external_react_.useState)({
        desired_match_date: new Date()?.toLocaleString("sv-SE", {
            dateStyle: "short",
            timeStyle: "short"
        }),
        purpose: "",
        message: null
    });
    const { 0: errorValidates , 1: setErrorValidates  } = (0,external_react_.useState)({
        desired_match_date: null,
        purpose: null,
        message: null
    });
    const onChangeMatchingRequest = (key, value)=>{
        setMatchingRequest({
            ...matchingRequest,
            [key]: typeof value === "string" ? value.trim() : value
        });
    };
    const handleValidateForm = ()=>{
        let isValidForm = true;
        const errorMessages = {
            desired_match_date: null,
            purpose: null,
            message: null
        };
        // validate purpose;
        if (!matchingRequest?.purpose || matchingRequest?.purpose?.length === 0) {
            isValidForm = false;
            errorMessages.purpose = validate/* VALIDATE_FORM_MATCHING_REQUEST.purpose.required */.$j.purpose.required;
        }
        // validate message
        if (!matchingRequest?.message && matchingRequest?.message?.length > 1000) {
            isValidForm = false;
            errorMessages.message = validate/* VALIDATE_FORM_MATCHING_REQUEST.message.max_length */.$j.message.max_length;
        }
        // validate desired_match_date
        if (matchingRequest?.desired_match_date) {
            if (JSON.stringify(matchingRequest?.desired_match_date) === "null" || matchingRequest?.desired_match_date === "Invalid Date") {
                isValidForm = false;
                errorMessages.desired_match_date = validate/* VALIDATE_FORM_MATCHING_REQUEST.desired_match_date.invalid_date */.$j.desired_match_date.invalid_date;
            }
        } else {
            isValidForm = false;
            errorMessages.desired_match_date = validate/* VALIDATE_FORM_MATCHING_REQUEST.desired_match_date.required_date */.$j.desired_match_date.required_date;
        }
        setErrorValidates(errorMessages);
        return isValidForm;
    };
    const submitMatchingRequest = ()=>{
        if (handleValidateForm()) {
            handleSendMatchingRequest(matchingRequest);
            setMatchingRequest({
                desired_match_date: null,
                purpose: "",
                message: null
            });
        }
    };
    const handleClose = ()=>{
        setMatchingRequest({
            desired_match_date: null,
            purpose: "",
            message: null
        });
        setOpen(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        sx: {
            overflow: "scroll"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: style,
            className: external_classnames_default()((home_module_default()).modalMatchingRequest, "gth-modal"),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    className: "icon-close",
                    onClick: handleClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/images/home_page/ic_close_modal.svg",
                        alt: "close-modal"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "title-modal",
                    id: "modal-modal-title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                            alt: "avatar",
                            src: userRequestMatching?.profile_image || "/assets/images/home_page/ic_avatar_modal.svg",
                            sx: {
                                width: 52,
                                height: 52
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "name",
                            children: `${userRequestMatching?.username ?? ""} さんへのマッチングリクエスト`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                            id: "purpose",
                            required: true,
                            label: t("home:modal-matching.purpose"),
                            placeholder: t("home:modal-matching.purpose-placeholder"),
                            editor: "dropdown",
                            value: matchingRequest?.purpose,
                            options: constants/* MATCHING_PURPOSE_OPTIONS */.uH,
                            onChangeValue: onChangeMatchingRequest,
                            error: errorValidates.purpose
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                            id: "desired_match_date",
                            required: true,
                            label: t("home:modal-matching.frequency"),
                            placeholder: t("home:modal-matching.frequency-placeholder"),
                            editor: "date-picker",
                            value: matchingRequest?.desired_match_date,
                            onChangeValue: onChangeMatchingRequest,
                            error: errorValidates.desired_match_date
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                            id: "message",
                            label: t("home:modal-matching.message"),
                            placeholder: t("home:modal-matching.message-placeholder"),
                            editor: "textarea",
                            value: matchingRequest?.message,
                            onChangeValue: onChangeMatchingRequest,
                            error: errorValidates.message
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                sx: {
                                    mt: 4,
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                    mode: "gradient",
                                    fullWidth: true,
                                    onClick: ()=>submitMatchingRequest()
                                    ,
                                    children: t("home:modal-matching.button")
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const blocks_ModalMatchingComponent = (ModalMatchingComponent);


/***/ }),

/***/ 1144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XV": () => (/* binding */ sendMatchingRequest),
/* harmony export */   "Yr": () => (/* binding */ getMatchingRequestSent),
/* harmony export */   "d5": () => (/* binding */ getMatchingRequestReceived),
/* harmony export */   "nC": () => (/* binding */ getMatchedRequest),
/* harmony export */   "m7": () => (/* binding */ acceptMatchingRequestReceived),
/* harmony export */   "PV": () => (/* binding */ rejectMatchingRequestReceived),
/* harmony export */   "CP": () => (/* binding */ cancelMatchingRequestSent)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_helpers_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3612);
/* harmony import */ var src_messages_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4247);



const sendMatchingRequest = async (userId, body)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post(`/user/match/${userId}`, body);
        if (res.data.error_code) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success("マッチングリクエストを送りました。");
        }
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const getMatchingRequestSent = async (limit, cursor, status)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get(`/user/me/match-requests/sent?limit=${limit}&cursor=${cursor}&status=${status}`);
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const getMatchingRequestReceived = async (limit, cursor, status)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get(`/user/me/match-requests/received?limit=${limit}&cursor=${cursor}&status=${status}`);
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const getMatchedRequest = async (limit, cursor, sort)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get(`/user/match/?limit=${limit}&cursor=${cursor}&sort=${sort}`);
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const acceptMatchingRequestReceived = async (matchRequestReceivedId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post(`/user/match-requests/${matchRequestReceivedId}/accept`);
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .ACCEPT_MATCHING */ ._6);
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const rejectMatchingRequestReceived = async (matchRequestReceivedId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post(`/user/match-requests/${matchRequestReceivedId}/reject`);
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .REJECT_MATCHING */ .W3);
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const cancelMatchingRequestSent = async (matchRequestSentId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post(`/user/match-requests/${matchRequestSentId}/cancel`);
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .CANCEL_MATCHING */ .aU);
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_2__/* .SERVER_ERROR */ .CA);
        return error;
    }
};


/***/ })

};
;