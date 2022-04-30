"use strict";
(() => {
var exports = {};
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ community),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/chat/chat.module.scss
var chat_module = __webpack_require__(1573);
var chat_module_default = /*#__PURE__*/__webpack_require__.n(chat_module);
// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/components/chat/Community/Blocks/NoDataComponent.tsx









const InputCustom = (0,styles_.styled)(material_.InputBase)({
    "&.MuiInputBase-root": {
        color: `${theme/* default.gray */.Z.gray}`
    },
    "& .MuiInputBase-input": {
        padding: 0
    }
});
const BlockNoDataComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                className: external_classnames_default()((chat_module_default()).chatContainerPC, "content-pc"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        className: (chat_module_default()).chatBoxLeft,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                className: "box-title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    className: "title",
                                    children: t("chat:box-left-title")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                className: "box-search",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                    component: "form",
                                    className: "input-search",
                                    sx: {
                                        p: "2px 4px",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: "search",
                                            src: "/assets/images/svg/ic_search.svg"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InputCustom, {
                                            sx: {
                                                ml: 1,
                                                flex: 1
                                            },
                                            placeholder: t("chat:box-left-input-search-placeholder"),
                                            inputProps: {
                                                "aria-label": t("chat:box-left-input-search-placeholder")
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                className: "box-content"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        className: (chat_module_default()).chatBoxRight,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                className: "box-title"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                className: "box-content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        className: (chat_module_default()).boxNoData,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                className: "title",
                                                children: t("chat:box-right-no-data")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: "no-data",
                                                src: "/assets/images/chat-no-data.png",
                                                width: 245
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                className: "btn-find",
                                                mode: "gradient",
                                                children: t("chat:box-right-button-find")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        className: "box-chat",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                            component: "form",
                                            className: "paper-chat",
                                            sx: {
                                                p: "2px 4px",
                                                display: "flex",
                                                alignItems: "center",
                                                width: "100%"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(InputCustom, {
                                                    className: "input-chat",
                                                    sx: {
                                                        ml: 1,
                                                        flex: 1
                                                    },
                                                    placeholder: t("chat:input-chat-placeholder"),
                                                    inputProps: {
                                                        "aria-label": t("chat:input-chat-placeholder")
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                                    color: "primary",
                                                    sx: {
                                                        p: "10px"
                                                    },
                                                    "aria-label": "directions",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "search",
                                                        src: "/assets/images/svg/ic_attachment.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                                    color: "primary",
                                                    sx: {
                                                        p: "10px"
                                                    },
                                                    "aria-label": "directions",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "search",
                                                        src: "/assets/images/svg/ic_send_message.svg"
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
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                className: external_classnames_default()((chat_module_default()).chatContainerMobile, "content-mobile"),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    xs: 12,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            className: "box-title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                className: "title",
                                children: t("chat:box-left-title")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            className: "box-search",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                component: "form",
                                className: "input-search",
                                sx: {
                                    p: "2px 4px",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "search",
                                        src: "/assets/images/svg/ic_search.svg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InputCustom, {
                                        sx: {
                                            ml: 1,
                                            flex: 1
                                        },
                                        placeholder: t("chat:box-left-input-search-placeholder"),
                                        inputProps: {
                                            "aria-label": t("chat:box-left-input-search-placeholder")
                                        }
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            className: (chat_module_default()).boxNoData,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    className: "title",
                                    children: t("chat:box-right-no-data-mobile")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "no-data",
                                    src: "/assets/images/chat-no-data.png",
                                    width: 137
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                    className: "btn-find",
                                    mode: "gradient",
                                    children: t("chat:box-right-button-find")
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const NoDataComponent = (BlockNoDataComponent);

// EXTERNAL MODULE: ./src/components/chat/ElementCustom/InputCustom.tsx
var ElementCustom_InputCustom = __webpack_require__(7183);
;// CONCATENATED MODULE: ./src/components/chat/mockData.ts
const listThreadsMockData = [
    {
        id: 1,
        avatar: "/assets/images/chat/avatar_1.svg",
        name: "名前がここに入ります",
        messageHide: "text",
        status: 1
    },
    {
        id: 2,
        avatar: "/assets/images/chat/avatar_2.svg",
        name: "名前がここに入ります",
        messageHide: "text",
        status: 2
    },
    {
        id: 3,
        avatar: "/assets/images/chat/avatar_3.svg",
        name: "名前がここに入ります",
        messageHide: "text",
        status: 1
    },
    {
        id: 4,
        avatar: "/assets/images/chat/avatar_4.svg",
        name: "名前がここに入ります",
        messageHide: "テキストテキストテキストテキステキストテキストテキストテキス",
        status: 1
    },
    {
        id: 5,
        avatar: "/assets/images/chat/avatar_5.svg",
        name: "名前がここに入ります",
        messageHide: "text",
        status: 1
    },
    {
        id: 6,
        avatar: "/assets/images/chat/avatar_6.svg",
        name: "名前がここに入ります",
        messageHide: "text",
        status: 1
    },
    {
        id: 7,
        avatar: "/assets/images/chat/avatar_7.svg",
        name: "Tom & 名前がここに入ります",
        messageHide: "text",
        status: 1
    }, 
];
const listMessagesMockData = {
    id: 1,
    name: "名前がここに入ります",
    nameCommunity: "コミュニティ名がここに入りますコミュニティ名がここに入りますコミュニティ名がここに入ります",
    members: 30,
    avatar: "/assets/images/chat/avatar_chat.svg",
    messages: [
        {
            message: "先日、条件の記載された内定通知書をいただいたので、後ほどまたメールで送付しておきます。\n\nご確認よろしくお願いいたします。",
            time: "23:54",
            isMe: false
        },
        {
            message: "了解ですー",
            time: "23:54",
            isMe: true
        },
        {
            message: "他の企業様の選考いかがされますか？",
            time: "01:54",
            isMe: false
        },
        {
            message: "ちょっと考えさせていただけますか？\n今回の企業は志望度も高くかなりいいなとは思ってるんですが、条件次第ではって感じなので、、、",
            time: "23:54",
            isMe: true,
            hasOption: true
        },
        {
            message: "承知いたしました！",
            time: "01:58",
            isMe: false
        },
        {
            message: "ちょっと考えさせていただけますか？\n今回の企業は志望度も高くかなりいいなとは思ってるんですが、条件次第ではって感じなので、、、",
            time: "23:54",
            isMe: true,
            isStartOfDay: true
        },
        {
            message: "ちょっと考えさせていただけますか？\n今回の企業は志望度も高くかなりいいなとは思ってるんですが、条件次第ではって感じなので、、、",
            time: "23:54",
            isMe: true,
            isErrorMessage: true
        }, 
    ]
};
const listThreadsCommunityMockData = [
    {
        id: 1,
        avatar: "/assets/images/chat/community_avatar_1.svg",
        name: "コミュニティ名がここに入...　(30)",
        messageHide: "text",
        members: 30,
        status: 1
    },
    {
        id: 2,
        avatar: "/assets/images/chat/community_avatar_2.svg",
        name: "コミュニティ名がここに...　(1220)",
        messageHide: "text",
        members: 1220,
        status: 2
    }, 
];
const nameUser = "佐藤太郎さんを運営に通報する";

;// CONCATENATED MODULE: ./src/components/chat/Community/Blocks/ChatBoxLeftComponent.tsx

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ 







const ThreadDropdown = ({ open , handleClose , anchorEl  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Menu, {
        open: open,
        className: "dropdown-option-thread",
        anchorEl: anchorEl,
        onClose: handleClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                onClick: handleClose,
                children: "Menu 1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                onClick: handleClose,
                children: "Menu 2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                onClick: handleClose,
                children: "Menu 3"
            })
        ]
    })
;
const TabsCustom = (0,styles_.styled)(material_.Tabs)(()=>({
        padding: 0,
        color: "black",
        fontSize: "20px",
        fontWeight: 500,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        "& .MuiTab-root": {
            fontSize: "20px",
            fontWeight: 500,
            whiteSpace: "nowrap"
        },
        "& .Mui-selected": {
            color: theme/* default.blue */.Z.blue
        },
        "& .MuiTabs-indicator": {
            backgroundColor: theme/* default.blue */.Z.blue
        }
    })
);
const ChatBoxLeftComponent = ({ toggleRenderSide  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: listThreads  } = (0,external_react_.useState)(listThreadsCommunityMockData);
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        item: true,
        className: (chat_module_default()).chatBoxLeft,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "box-title",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabsCustom, {
                    value: 2,
                    "aria-label": "chat-tab",
                    variant: "fullWidth",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                            label: t("chat:box-left-title"),
                            value: 1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                            label: t("chat:community-box-left-title"),
                            value: 2
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "box-search",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                    component: "form",
                    className: "input-search",
                    sx: {
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "search",
                            src: "/assets/images/svg/ic_search.svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElementCustom_InputCustom/* default */.Z, {
                            sx: {
                                ml: 1,
                                flex: 1
                            },
                            placeholder: t("chat:community-box-left-input-search-placeholder"),
                            inputProps: {
                                "aria-label": t("chat:community-box-left-input-search-placeholder")
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "box-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (chat_module_default()).boxThreads,
                    children: listThreads?.map((thread, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: toggleRenderSide,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `thread-item ${thread.status === 2 ? "active" : ""}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "avatar",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: "avatar",
                                            src: thread?.avatar
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "thread-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                className: "name",
                                                children: thread?.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                className: "message-hide",
                                                children: thread?.messageHide
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "more-options",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                                onClick: handleClick,
                                                "aria-label": "more",
                                                "aria-haspopup": "true",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "more-options",
                                                    src: "/assets/images/chat/more_options.svg"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ThreadDropdown, {
                                                open: open,
                                                handleClose: handleClose,
                                                anchorEl: anchorEl
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const Blocks_ChatBoxLeftComponent = (ChatBoxLeftComponent);

// EXTERNAL MODULE: ./src/helpers/useViewport.tsx
var useViewport = __webpack_require__(3597);
// EXTERNAL MODULE: ./src/helpers/scrollEl.tsx
var scrollEl = __webpack_require__(9294);
;// CONCATENATED MODULE: ./src/components/chat/Community/Blocks/ChatBoxRightComponent.tsx

/* eslint-disable jsx-a11y/label-has-associated-control */ 






const BoxMyChat = ({ message , time , isStartOfDay =false , isErrorMessage =false  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            isStartOfDay ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (chat_module_default()).spanStartOfDay,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "今日"
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                className: (chat_module_default()).itemMessageMyChat,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: "time",
                        children: time
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `message-content ${isErrorMessage ? "error-message" : ""}`,
                        children: message
                    })
                ]
            }),
            isErrorMessage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (chat_module_default()).errorMessage,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "span-error-message",
                        children: t("chat:span-error-message")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "div-btn-action",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                type: "button",
                                className: "btn-action btn-resend",
                                children: t("chat:btn-resend")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                type: "button",
                                className: "btn-action btn-delete",
                                children: t("chat:btn-delete")
                            })
                        ]
                    })
                ]
            }) : null
        ]
    }));
};
const BoxChatOthers = ({ avatar , message , time  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        className: (chat_module_default()).itemMsgOther,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                className: "avatar",
                alt: "Avatar",
                src: avatar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "message-content",
                children: message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                className: "time",
                children: time
            })
        ]
    })
;
const NameOfChatSP = ({ name , handleClick  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                onClick: handleClick,
                sx: {
                    paddingLeft: 0,
                    paddingRight: "20px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    alt: "back",
                    src: "/assets/images/chat/ic_back.svg",
                    width: 6
                })
            }),
            name
        ]
    })
;
const ChatBoxRightComponent = ({ isMobile , toggleRenderSide  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: listMessages  } = (0,external_react_.useState)(listMessagesMockData);
    (0,external_react_.useEffect)(()=>{
        (0,scrollEl/* default */.Z)(document.querySelector("#box-message"));
    }, [
        listMessagesMockData
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        item: true,
        className: (chat_module_default()).chatBoxRight,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                className: "box-title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: "username-community",
                        children: isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(NameOfChatSP, {
                            name: listMessages?.nameCommunity,
                            handleClick: toggleRenderSide
                        }) : listMessages?.nameCommunity
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "(",
                            listMessages?.members,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "box-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    className: (chat_module_default()).boxData,
                    id: "box-message",
                    children: listMessages?.messages?.map((message, index)=>message?.isMe ? /*#__PURE__*/ jsx_runtime_.jsx(BoxMyChat, {
                            message: message?.message,
                            time: message?.time,
                            isStartOfDay: !!message?.isStartOfDay,
                            isErrorMessage: !!message?.isErrorMessage
                        }, index) : /*#__PURE__*/ jsx_runtime_.jsx(BoxChatOthers, {
                            avatar: listMessages?.avatar,
                            message: message?.message,
                            time: message?.time
                        }, index)
                    )
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: (chat_module_default()).boxChat,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                    component: "form",
                    className: "paper-chat",
                    sx: {
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ElementCustom_InputCustom/* default */.Z, {
                            className: "input-chat",
                            sx: {
                                ml: 1,
                                flex: 1
                            },
                            placeholder: t("chat:input-chat-placeholder"),
                            inputProps: {
                                "aria-label": t("chat:input-chat-placeholder")
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            accept: "image/*",
                            hidden: true,
                            id: "icon-button-file",
                            type: "file"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "icon-button-file",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                color: "primary",
                                sx: {
                                    p: "10px"
                                },
                                "aria-label": "directions",
                                component: "span",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "search",
                                    src: "/assets/images/svg/ic_attachment.svg"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            color: "primary",
                            sx: {
                                p: "10px"
                            },
                            "aria-label": "directions",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "search",
                                src: "/assets/images/svg/ic_send_message.svg"
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Blocks_ChatBoxRightComponent = (ChatBoxRightComponent);

;// CONCATENATED MODULE: ./src/components/chat/Community/Blocks/ChatComponent.tsx








const BlockChatComponent = ()=>{
    // Responsive
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 992;
    const { 0: isRenderRightSide , 1: setIsRenderRightSide  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (isMobile) {
            setIsRenderRightSide(true);
        }
    }, []);
    const toggleRenderSide = ()=>setIsRenderRightSide(!isRenderRightSide)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        className: external_classnames_default()((chat_module_default()).chatContainerPC),
        children: [
            !isMobile || isMobile && !isRenderRightSide ? /*#__PURE__*/ jsx_runtime_.jsx(Blocks_ChatBoxLeftComponent, {
                toggleRenderSide: toggleRenderSide
            }) : null,
            !isMobile || isMobile && isRenderRightSide ? /*#__PURE__*/ jsx_runtime_.jsx(Blocks_ChatBoxRightComponent, {
                isMobile: isMobile,
                toggleRenderSide: toggleRenderSide
            }) : null
        ]
    }));
};
/* harmony default export */ const ChatComponent = (BlockChatComponent);

;// CONCATENATED MODULE: ./src/components/chat/Community/CommunityChatComponent.tsx





const CommunityChatComponent = ({ hasData =true  })=>/*#__PURE__*/ jsx_runtime_.jsx(ContentComponent/* default */.Z, {
        showFooter: false,
        children: hasData ? /*#__PURE__*/ jsx_runtime_.jsx(ChatComponent, {}) : /*#__PURE__*/ jsx_runtime_.jsx(NoDataComponent, {})
    })
;
/* harmony default export */ const Community_CommunityChatComponent = (CommunityChatComponent);

;// CONCATENATED MODULE: ./pages/chat/community/index.tsx




const ChatCommunityPage = ()=>/*#__PURE__*/ jsx_runtime_.jsx(Community_CommunityChatComponent, {
        hasData: true
    })
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "chat"
            ])
        }
    })
;
/* harmony default export */ const community = (ChatCommunityPage);


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

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

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,944,597,593], () => (__webpack_exec__(218)));
module.exports = __webpack_exports__;

})();