"use strict";
(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 3702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mail_setting),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tabs"
const Tabs_namespaceObject = require("@mui/material/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tab"
const Tab_namespaceObject = require("@mui/material/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
const Checkbox_namespaceObject = require("@mui/material/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/RadioButtonUnchecked"
const RadioButtonUnchecked_namespaceObject = require("@mui/icons-material/RadioButtonUnchecked");
var RadioButtonUnchecked_default = /*#__PURE__*/__webpack_require__.n(RadioButtonUnchecked_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/CheckCircle"
const CheckCircle_namespaceObject = require("@mui/icons-material/CheckCircle");
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/common/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(8460);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/components/mail-setting/PopupOptionRecommendComponent.tsx









/* event change select option */ const DialogReport = (0,styles_.styled)((Dialog_default()))({
    "& .MuiPaper-root": {
        maxWidth: "100%"
    },
    "& .MuiDialog-paper": {
        backgroundColor: `${theme/* default.whiteBlue */.Z.whiteBlue}`,
        borderRadius: "12px",
        width: "44.44%",
        margin: 0
    },
    "@media (max-width: 1200px)": {
        "& .MuiDialog-paper": {
            width: "93%"
        }
    }
});
const IcQuestion = (0,styles_.styled)(material_.Avatar)({
    width: "18px",
    height: "22px",
    marginLeft: "8px",
    cursor: "pointer"
});
const PopupOptionRecommendComponent = ({ showPopup , setShowPopup , contentPopup  })=>{
    const handleClose = ()=>{
        setShowPopup(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogReport, {
            open: showPopup,
            onClose: handleClose,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "end",
                        m: {
                            xs: "20px 20px 0 0",
                            lg: "10px 10px 0 0"
                        },
                        cursor: "pointer"
                    },
                    onClick: handleClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        src: "/assets/images/icon/ic_close_2.png",
                        sx: {
                            width: {
                                xs: "25px",
                                lg: "18px"
                            },
                            height: {
                                xs: "25px",
                                lg: "22px"
                            }
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    id: "alert-dialog-title",
                    sx: {
                        mt: "4px",
                        mb: "15px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                fontWeight: 300,
                                color: theme/* default.navy */.Z.navy,
                                children: contentPopup.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(IcQuestion, {
                                src: "/assets/images/icon/ic_question_blue.png"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                    sx: {
                        p: "0 10px 85px 10px",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContentText_default()), {
                        id: "alert-dialog-description",
                        sx: {
                            fontSize: {
                                xs: "16px",
                                lg: "20px"
                            },
                            lineHeight: {
                                xs: "32px",
                                lg: "40px"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: {
                                        xs: "none",
                                        lg: "block"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        color: theme/* default.navy */.Z.navy,
                                        sx: {
                                            fontSize: {
                                                xs: "16px",
                                                lg: "20px"
                                            },
                                            lineHeight: {
                                                xs: "32px",
                                                lg: "40px"
                                            }
                                        },
                                        children: contentPopup.content1
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        color: theme/* default.navy */.Z.navy,
                                        sx: {
                                            fontSize: {
                                                xs: "16px",
                                                lg: "20px"
                                            },
                                            lineHeight: {
                                                xs: "32px",
                                                lg: "40px"
                                            }
                                        },
                                        children: contentPopup.content2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: {
                                        xs: "block",
                                        lg: "none"
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    color: theme/* default.navy */.Z.navy,
                                    sx: {
                                        fontSize: {
                                            xs: "16px",
                                            lg: "20px"
                                        },
                                        lineHeight: {
                                            xs: "32px",
                                            lg: "40px"
                                        }
                                    },
                                    children: [
                                        contentPopup.content1,
                                        " ",
                                        contentPopup.content2
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const mail_setting_PopupOptionRecommendComponent = (PopupOptionRecommendComponent);

// EXTERNAL MODULE: ./src/messages/validate.ts
var validate = __webpack_require__(3249);
// EXTERNAL MODULE: ./src/services/user.ts
var user = __webpack_require__(1727);
;// CONCATENATED MODULE: ./src/components/mail-setting/mockData.ts
const notifyMess = {
    title: "メッセージ通知",
    content1: "メッセージが届いたらメールで通知が送信される設定です。",
    content2: "チェックを外すとメールは送信されなくなります。"
};
const notifyRecommend = {
    title: "レコメンド通知",
    content1: "オススメの新着レコメンドを自動でメールにて案内する設定です。",
    content2: "チェックを外すとメールは送信されなくなります。"
};

;// CONCATENATED MODULE: ./src/components/mail-setting/MailSettingComponent.tsx



// eslint-disable-next-line import/no-extraneous-dependencies











// eslint-disable-next-line import/order





const TabPanel = (props)=>{
    const { children , value , index  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `vertical-tabpanel-${index}`,
        "aria-labelledby": `vertical-tab-${index}`,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                p: 3
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                children: children
            })
        })
    }));
};
TabPanel.propTypes = {
    children: (external_prop_types_default()).node,
    index: (external_prop_types_default()).number.isRequired,
    value: (external_prop_types_default()).number.isRequired
};
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}
const TitleTab = (0,styles_.styled)((Tab_default()))({
    fontWeight: 500,
    color: theme/* default.navy */.Z.navy,
    lineHeight: "23.17px",
    fontSize: "16px",
    marginTop: "30px",
    "&.Mui-selected": {
        background: theme/* default.blue */.Z.blue,
        color: "#fff",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        fontWeight: 700
    },
    "@media (max-width: 1200px)": {
        height: "78px",
        background: "#fff",
        width: "50%",
        border: "1px solid rgba(196, 196, 196, 0.4)",
        "&.Mui-selected": {
            borderRadius: "0"
        }
    }
});
const InputCustom = (0,styles_.styled)(material_.InputBase)({
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "white",
        border: `1px solid ${theme/* default.blue */.Z.blue}`,
        fontSize: 16,
        padding: "10px 12px",
        borderRadius: 12,
        fontFamily: "Noto Sans",
        "@media (max-width: 425px)": {
            width: 294,
            height: 38
        },
        "@media (min-width: 769px)": {
            width: 360,
            height: 18
        },
        "&:focus": {
            boxShadow: `${theme/* default.blue */.Z.blue} 0 0 0 0.1rem`,
            borderColor: theme/* default.blue */.Z.blue
        }
    }
});
const MailSettingComponent_IcQuestion = (0,styles_.styled)(material_.Avatar)({
    width: "18px",
    height: "22px",
    marginLeft: "8px",
    cursor: "pointer"
});
const BtnSave = (0,styles_.styled)(material_.Button)({
    width: "200px",
    height: "48px",
    marginTop: "80px",
    borderRadius: "24px",
    "@media (max-width: 1200px)": {
        marginBottom: "31px",
        marginTop: "66px"
    }
});
const MailSettingComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const [value, setValue] = external_react_default().useState(0);
    const [isNotifyMess, setIsNotifyMess] = external_react_default().useState(true);
    const [valueOnchange, setValueOnchange] = external_react_default().useState(false);
    const [mailOnChange, setMailOnChange] = external_react_default().useState(false);
    const [newMessage, setNewMessage] = external_react_default().useState(false);
    const [newRecommended, setNewRecommended] = external_react_default().useState(false);
    const [email, setEmail] = external_react_default().useState(null);
    const { 0: settingNotificationRequest , 1: setSettingNotificationRequest  } = (0,external_react_.useState)({
        new_message_email_notify: newMessage,
        new_recommended_user_email_notify: newRecommended
    });
    (0,external_react_.useEffect)(()=>{
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        setNewMessage(auth?.user?.profile?.setting?.new_message_email_notify);
        setNewRecommended(auth?.user?.profile?.setting?.new_recommended_user_email_notify);
        setEmail(auth?.user?.profile?.email);
    }, []);
    const { 0: showPopup , 1: setShowPopup  } = (0,external_react_.useState)(false);
    const handleShowPopupNotifyMess = ()=>{
        setShowPopup(true);
        setIsNotifyMess(true);
    };
    const handleShowPopupNotifyRecommend = ()=>{
        setShowPopup(true);
        setIsNotifyMess(false);
    };
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const { 0: settingMailRequest , 1: setSettingMailRequest  } = (0,external_react_.useState)({
        email: null
    });
    const errorMessages = {
        email: null
    };
    const { 0: errorValidates , 1: setErrorValidates  } = (0,external_react_.useState)({
        email: null
    });
    // setting notification
    const onChangeSettingNotificationRequest = (key, valueRequest)=>{
        setValueOnchange(true);
        if (key === "new_message_email_notify") {
            setNewMessage(valueRequest);
        }
        if (key === "new_recommended_user_email_notify") {
            setNewRecommended(valueRequest);
        }
        setSettingNotificationRequest({
            ...settingNotificationRequest,
            [key]: typeof valueRequest === "string" ? valueRequest.trim() : valueRequest
        });
    };
    // submit setting notification
    const handleSaveSettingNotification = async ()=>{
        const res = await (0,user/* userSettingNotification */.cU)(settingNotificationRequest);
        if (res) {
            const auth = JSON.parse(sessionStorage.getItem("auth"));
            auth.user.profile.setting = settingNotificationRequest;
            sessionStorage.setItem("auth", JSON.stringify(auth));
            return res.data;
        }
    };
    // on chage email
    const onChangeSettingMailRequest = (key, valueRequest)=>{
        setEmail(valueRequest);
        setMailOnChange(true);
        setSettingMailRequest({
            ...settingMailRequest,
            [key]: typeof valueRequest === "string" ? valueRequest.trim() : valueRequest
        });
    };
    // validate form
    const handleValidateForm = ()=>{
        let isValidForm = true;
        // validate purpose;
        if (!settingMailRequest?.email || settingMailRequest?.email?.length === 0) {
            isValidForm = false;
            errorMessages.email = validate/* VALIDATE_MESSAGE_FORM_REGISTER.email.required */.G8.email.required;
        } else if (!validate/* REGEX_RULES.email.test */.aB.email.test(settingMailRequest.email)) {
            isValidForm = false;
            errorMessages.email = validate/* VALIDATE_MESSAGE_FORM_REGISTER.email.invalid */.G8.email.invalid;
        }
        setErrorValidates(errorMessages);
        return isValidForm;
    };
    // submit setting mail
    const submitSettingMailRequest = async ()=>{
        if (handleValidateForm()) {
            setMailOnChange(false);
            const res = await (0,user/* userSettingEmail */.Xm)(settingMailRequest);
            if (res) {
                const auth = JSON.parse(sessionStorage.getItem("auth"));
                auth.user.profile.email = settingMailRequest.email;
                sessionStorage.setItem("auth", JSON.stringify(auth));
                return res.data;
            }
        }
    };
    // @ts-ignore
    return(/*#__PURE__*/ jsx_runtime_.jsx(ContentComponent/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                background: theme/* default.whiteBlue */.Z.whiteBlue,
                p: {
                    xs: "0 0 0 0",
                    lg: "40px 200px 129px 40px"
                }
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        mb: "200px"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: {
                                    xs: "center",
                                    lg: "start"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                    src: "/assets/images/icon/ic_setting_black.png",
                                    sx: {
                                        width: "18px",
                                        height: "22px",
                                        mr: "8px"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    fontWeight: 700,
                                    fontSize: 20,
                                    lineHeight: "28.96px",
                                    color: theme/* default.navy */.Z.navy,
                                    children: t("mail-setting:configuration")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "block",
                                    lg: "flex"
                                },
                                height: {
                                    xs: "375px",
                                    lg: "475px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                                    orientation: "vertical",
                                    value: value,
                                    onChange: handleChange,
                                    sx: {
                                        width: {
                                            xs: "100%",
                                            lg: "20%"
                                        },
                                        background: theme/* default.whiteBlue */.Z.whiteBlue,
                                        border: "none",
                                        "& .MuiTabs-flexContainer": {
                                            flexDirection: {
                                                xs: "row",
                                                lg: "column"
                                            }
                                        }
                                    },
                                    TabIndicatorProps: {
                                        style: {
                                            backgroundColor: "transparent"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TitleTab, {
                                            label: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                component: "span",
                                                sx: {
                                                    width: "100%",
                                                    textAlign: {
                                                        xs: "center",
                                                        lg: "left"
                                                    }
                                                },
                                                children: t("mail-setting:email-address-setting")
                                            }),
                                            ...a11yProps(0)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TitleTab, {
                                            label: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                component: "span",
                                                sx: {
                                                    width: "100%",
                                                    textAlign: {
                                                        xs: "center",
                                                        lg: "left"
                                                    }
                                                },
                                                children: t("mail-setting:notification-settings")
                                            }),
                                            ...a11yProps(1)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        background: "#fff",
                                        borderRadius: {
                                            xs: "12px",
                                            lg: "0"
                                        },
                                        m: {
                                            xs: "24px 20px 0px 20px",
                                            lg: "0"
                                        },
                                        width: {
                                            xs: "unset",
                                            lg: "80%"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                            value: value,
                                            index: 0,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    p: {
                                                        xs: "0",
                                                        lg: "6px 0 0 59px"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            mb: "19px",
                                                            display: {
                                                                xs: "none",
                                                                lg: "block"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            component: "span",
                                                            fontSize: 20,
                                                            fontWeight: 700,
                                                            lineHeight: "28.96px",
                                                            color: theme/* default.navy */.Z.navy,
                                                            children: t("mail-setting:email-address-setting")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        fontFamily: "Roboto",
                                                        fontSize: 16,
                                                        fontWeight: 300,
                                                        lineHeight: "28.96px",
                                                        color: theme/* default.navy */.Z.navy,
                                                        children: t("mail-setting:mail-setting-description")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: "40px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            component: "div",
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            lineHeight: "18.75px",
                                                            color: theme/* default.navy */.Z.navy,
                                                            children: t("mail-setting:your-current-email-address")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: "18px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            component: "div",
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            lineHeight: "18.75px",
                                                            color: theme/* default.navy */.Z.navy,
                                                            children: "tanakataro@rebase.co.jp"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: "39px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                                            shrink: true,
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                color: "black"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                display: "flex",
                                                                children: [
                                                                    t("mail-setting:new-email-address"),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                                        label: "必須",
                                                                        sx: {
                                                                            display: "",
                                                                            ml: 1,
                                                                            width: "54px",
                                                                            height: "22px",
                                                                            fontSize: 12,
                                                                            fontWeight: 600,
                                                                            color: "white",
                                                                            backgroundColor: theme/* default.orange */.Z.orange
                                                                        }
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(InputCustom, {
                                                        onChange: (e)=>onChangeSettingMailRequest("email", e.target.value)
                                                        ,
                                                        placeholder: "tanakataro@rebase.co.jp",
                                                        id: "mail",
                                                        value: email
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            color: "#FF0000",
                                                            fontSize: "10px"
                                                        },
                                                        children: errorValidates.email
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: "55px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                            sx: {
                                                                background: mailOnChange ? "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" : theme/* default.gray */.Z.gray,
                                                                color: "#fff",
                                                                "&:hover": {
                                                                    background: mailOnChange ? "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" : theme/* default.gray */.Z.gray
                                                                }
                                                            },
                                                            props: {
                                                                mode: "gradient",
                                                                dimension: "x-medium"
                                                            },
                                                            onClick: submitSettingMailRequest,
                                                            children: t("mail-setting:send")
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                            value: value,
                                            index: 1,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    p: {
                                                        xs: "0",
                                                        lg: "6px 0 0 59px"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            mb: "40px",
                                                            display: {
                                                                xs: "none",
                                                                lg: "block"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            component: "span",
                                                            fontSize: 20,
                                                            fontWeight: 700,
                                                            lineHeight: "28.96px",
                                                            color: theme/* default.navy */.Z.navy,
                                                            children: t("mail-setting:notification-settings")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        component: "span",
                                                        fontWeight: 700,
                                                        color: theme/* default.gray */.Z.gray,
                                                        sx: {
                                                            fontSize: {
                                                                xs: "20px",
                                                                lg: "24px"
                                                            },
                                                            lineHeight: {
                                                                xs: "23.44px",
                                                                lg: "28.13px"
                                                            }
                                                        },
                                                        children: t("mail-setting:email-reception-settings")
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: "23px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                component: "span",
                                                                fontSize: 16,
                                                                fontWeight: 300,
                                                                lineHeight: "18.75px",
                                                                color: theme/* default.navy */.Z.navy,
                                                                children: t("mail-setting:message-notification")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MailSettingComponent_IcQuestion, {
                                                                src: "/assets/images/icon/ic_question_blue.png",
                                                                onClick: handleShowPopupNotifyMess
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                checked: newMessage,
                                                                sx: {
                                                                    ml: "65px",
                                                                    color: theme/* default.blue */.Z.blue,
                                                                    "&.Mui-checked": {
                                                                        color: theme/* default.blue */.Z.blue
                                                                    }
                                                                },
                                                                onChange: (e)=>onChangeSettingNotificationRequest("new_message_email_notify", e.target.checked)
                                                                ,
                                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {})
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            mt: {
                                                                xs: "40px",
                                                                lg: "0"
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                component: "span",
                                                                fontSize: 16,
                                                                fontWeight: 300,
                                                                lineHeight: "18.75px",
                                                                color: theme/* default.navy */.Z.navy,
                                                                children: t("mail-setting:recommendation-notification")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MailSettingComponent_IcQuestion, {
                                                                src: "/assets/images/icon/ic_question_blue.png",
                                                                onClick: handleShowPopupNotifyRecommend
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                checked: newRecommended,
                                                                sx: {
                                                                    ml: "65px",
                                                                    color: theme/* default.blue */.Z.blue,
                                                                    "&.Mui-checked": {
                                                                        color: theme/* default.blue */.Z.blue
                                                                    }
                                                                },
                                                                onChange: (e)=>onChangeSettingNotificationRequest("new_recommended_user_email_notify", e.target.checked)
                                                                ,
                                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {})
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            justifyContent: {
                                                                xs: "center",
                                                                lg: "start"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(BtnSave, {
                                                            sx: {
                                                                background: valueOnchange ? "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" : theme/* default.gray */.Z.gray,
                                                                color: "#fff",
                                                                "&:hover": {
                                                                    background: valueOnchange ? "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" : theme/* default.gray */.Z.gray
                                                                }
                                                            },
                                                            onClick: handleSaveSettingNotification,
                                                            children: t("mail-setting:save-changes")
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(mail_setting_PopupOptionRecommendComponent, {
                    showPopup: showPopup,
                    setShowPopup: setShowPopup,
                    contentPopup: isNotifyMess ? notifyMess : notifyRecommend
                })
            ]
        })
    }));
};
/* harmony default export */ const mail_setting_MailSettingComponent = (MailSettingComponent);

;// CONCATENATED MODULE: ./pages/mail-setting/index.tsx




const MailSetting = ()=>/*#__PURE__*/ jsx_runtime_.jsx(mail_setting_MailSettingComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "mail-setting"
            ])
        }
    })
;
/* harmony default export */ const mail_setting = (MailSetting);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 5168:
/***/ ((module) => {

module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8855:
/***/ ((module) => {

module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

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

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

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

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,460,893], () => (__webpack_exec__(3702)));
module.exports = __webpack_exports__;

})();