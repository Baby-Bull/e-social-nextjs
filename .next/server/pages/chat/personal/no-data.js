"use strict";
(() => {
var exports = {};
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ no_data),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/components/chat/chat.module.scss
var chat_module = __webpack_require__(1573);
var chat_module_default = /*#__PURE__*/__webpack_require__.n(chat_module);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_namespaceObject);
;// CONCATENATED MODULE: external "react-infinite-scroller"
const external_react_infinite_scroller_namespaceObject = require("react-infinite-scroller");
var external_react_infinite_scroller_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroller_namespaceObject);
// EXTERNAL MODULE: ./src/components/chat/ElementCustom/InputCustom.tsx
var InputCustom = __webpack_require__(7183);
;// CONCATENATED MODULE: ./src/helpers/helper.ts

const sortListRoomChat = (listRooms)=>{
    listRooms.sort((a, b)=>{
        const dateA = external_dayjs_default()(a.last_chat_message_at);
        const dateB = external_dayjs_default()(b.last_chat_message_at);
        return dateB.isAfter(dateA) ? 1 : -1;
    });
    return listRooms;
};
const formatChatDateRoom = (date)=>{
    if (external_dayjs_default()(new Date()).format("YYYYMMDD") === external_dayjs_default()(date).format("YYYYMMDD")) {
        return external_dayjs_default()(date).format("HH:mm");
    }
    return external_dayjs_default()(date).format("YYYY/MM/DD");
};
const formatChatDate = (date)=>dayjs(date).format("HH:mm")
;

;// CONCATENATED MODULE: ./src/components/chat/Personal/Blocks/ChatBoxLeftComponent.tsx

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ 







// interface IThreadDropDownProps {
//   open: boolean;
//   handleClose: () => void;
//   anchorEl: any;
// }
// const ThreadDropdown: React.SFC<IThreadDropDownProps> = ({ open, handleClose, anchorEl }) => (
//   <Menu open={open} className="dropdown-option-thread" anchorEl={anchorEl} onClose={handleClose}>
//     <MenuItem onClick={handleClose}>Menu 1</MenuItem>
//     <MenuItem onClick={handleClose}>Menu 2</MenuItem>
//     <MenuItem onClick={handleClose}>Menu 3</MenuItem>
//   </Menu>
// );
const ChatBoxLeftComponent = ({ listRooms , userId , onSelectRoom , setSearchChatRoom , hasMoreChatRoom , loadMoreChatRooms ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const inputSearchRef = (0,external_react_.useRef)(null);
    const debounce = (0,external_react_.useCallback)(external_lodash_default().debounce((_searchVal)=>{
        setSearchChatRoom({
            search: _searchVal,
            cursor: null
        });
    // send the server request here
    }, 1000), []);
    const handleOnKeyUpInputSearchRef = ()=>{
        debounce(inputSearchRef.current.value);
    };
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
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
                        /*#__PURE__*/ jsx_runtime_.jsx(InputCustom/* default */.Z, {
                            inputRef: inputSearchRef,
                            sx: {
                                ml: 1,
                                flex: 1
                            },
                            placeholder: t("chat:box-left-input-search-placeholder"),
                            inputProps: {
                                "aria-label": t("chat:box-left-input-search-placeholder")
                            },
                            onKeyUp: handleOnKeyUpInputSearchRef
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "box-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (chat_module_default()).boxThreads,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_infinite_scroller_default()), {
                        loadMore: loadMoreChatRooms,
                        hasMore: hasMoreChatRoom.hasMore,
                        loader: "",
                        useWindow: false,
                        children: listRooms?.map((thread, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: ()=>onSelectRoom(index)
                                ,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `thread-item ${thread?.user?.id === userId ? "active" : ""}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "avatar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: "avatar",
                                                src: thread?.user?.profile_image || "/assets/images/svg/avatar.svg"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "thread-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    className: "name",
                                                    children: thread?.user?.username
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    className: "message-hide",
                                                    children: thread?.last_chat_message_received
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "thread-last-time",
                                            children: formatChatDateRoom(thread?.last_chat_message_at)
                                        })
                                    ]
                                })
                            }, index)
                        )
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const Blocks_ChatBoxLeftComponent = (ChatBoxLeftComponent);

// EXTERNAL MODULE: ./src/helpers/useViewport.tsx
var useViewport = __webpack_require__(3597);
// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(1493);
// EXTERNAL MODULE: ./src/helpers/api.ts
var api = __webpack_require__(3612);
;// CONCATENATED MODULE: ./src/services/chat.ts


const getListChatRooms = async (search = "", cursor = "", limit = constants/* LIMIT_PER_PAGE */.PX)=>{
    try {
        let params;
        if (!search) {
            params = {
                cursor,
                limit
            };
        } else {
            params = {
                cursor,
                limit,
                search
            };
        }
        const res = await api/* api.get */.h.get(`/user/chat-rooms`, {
            params
        });
        return res.data;
    } catch (error) {
        return error;
    }
};
const getMessages = async (userId, cursor = "", limit = constants/* LIMIT_PER_PAGE */.PX)=>{
    try {
        const res = await api/* api.get */.h.get(`/user/${userId}/messages?limit=${limit}&cursor=${cursor}`);
        return res.data;
    } catch (error) {
        return error;
    }
};

// EXTERNAL MODULE: ./src/helpers/storage.ts
var storage = __webpack_require__(528);
// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: ./src/components/chat/Personal/Blocks/PopupReportUser.tsx
var PopupReportUser = __webpack_require__(6105);
// EXTERNAL MODULE: ./src/components/chat/Personal/Blocks/PopupReviewComponent.tsx
var PopupReviewComponent = __webpack_require__(7133);
// EXTERNAL MODULE: ./src/helpers/scrollEl.tsx
var scrollEl = __webpack_require__(9294);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
;// CONCATENATED MODULE: ./src/components/chat/Personal/Blocks/ChatBoxRightComponent.tsx

/* eslint-disable jsx-a11y/label-has-associated-control */ 








// @ts-ignore






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
const ChatBoxRightComponent = ({ isMobile , toggleRenderSide , userId , roomSelect , sendTextMessage , newMessageOfRoom , user ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const inputChatRef = (0,external_react_.useRef)(null);
    const boxMessageRef = (0,external_react_.useRef)(null);
    const isFirstRender = (0,external_react_.useRef)(true);
    const { 0: listMessages , 1: setListMessages  } = (0,external_react_.useState)([]);
    const { 0: hasMoreParams , 1: setHasMoreParams  } = (0,external_react_.useState)({
        cursor: null,
        hasMore: false
    });
    const { 0: showPopup , 1: setShowPopup  } = (0,external_react_.useState)(false);
    const handleShow = ()=>{
        setShowPopup(true);
    };
    const { 0: showPopupReview , 1: setShowPopupReview  } = (0,external_react_.useState)(false);
    const handleShowReview = ()=>setShowPopupReview(true)
    ;
    (0,external_react_.useEffect)(()=>{
        if (isFirstRender.current || boxMessageRef.current.offsetHeight + boxMessageRef.current.scrollTop + 100 >= boxMessageRef.current.scrollHeight) {
            (0,scrollEl/* default */.Z)(boxMessageRef.current);
            if (listMessages?.length) {
                isFirstRender.current = false;
            }
        }
    }, [
        listMessages
    ]);
    const { data: listMessageResQuery  } = (0,external_react_query_.useQuery)([
        constants/* REACT_QUERY_KEYS.PERSONAL_CHAT.LIST_MESSAGES */.pn.PERSONAL_CHAT.LIST_MESSAGES,
        userId
    ], async ()=>{
        const res = await getMessages(userId);
        return {
            ...res,
            items: res?.items?.reverse() || []
        };
    }, {
        refetchOnWindowFocus: false,
        enabled: !!userId
    });
    (0,external_react_.useEffect)(()=>{
        setListMessages([]);
        setHasMoreParams({
            cursor: null,
            hasMore: false
        });
        setListMessages(listMessageResQuery?.items || []);
        setHasMoreParams({
            cursor: listMessageResQuery?.cursor,
            hasMore: listMessageResQuery?.hasMore
        });
        isFirstRender.current = true;
        inputChatRef.current.focus();
    }, [
        listMessageResQuery
    ]);
    const loadMoreData = async ()=>{
        if (hasMoreParams?.cursor?.length && listMessages.length) {
            const res = await getMessages(userId, hasMoreParams?.cursor);
            setListMessages([
                ...res?.items?.reverse() || [],
                ...listMessages
            ]);
            setHasMoreParams({
                cursor: res?.cursor,
                hasMore: res?.hasMore
            });
            isFirstRender.current = false;
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (newMessageOfRoom && newMessageOfRoom?.chat_room_id === roomSelect.id) {
            setListMessages([
                ...listMessages,
                newMessageOfRoom
            ]);
        }
    }, [
        newMessageOfRoom
    ]);
    const handleSendTextMessage = ()=>{
        const message = inputChatRef.current.value.trim();
        if (message) {
            sendTextMessage(message);
            setListMessages([
                ...listMessages,
                {
                    content: message,
                    content_type: constants/* MESSAGE_CONTENT_TYPES.TEXT */.wM.TEXT,
                    created_at: external_dayjs_default()(new Date()).toISOString(),
                    sender_id: "123"
                }, 
            ]);
            inputChatRef.current.value = "";
        }
    };
    const onKeyUpMessageText = (e)=>{
        if (!e.shiftKey && e.keyCode === 13 && e.target.value) {
            handleSendTextMessage();
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        item: true,
        className: (chat_module_default()).chatBoxRight,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                className: "box-title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: "username",
                        children: isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(NameOfChatSP, {
                            name: "福くん株式会社",
                            handleClick: toggleRenderSide
                        }) : roomSelect?.user?.username
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                        mode: "info",
                        size: "medium",
                        className: "btn-chat",
                        onClick: handleShow,
                        children: t("chat:btn-report")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "btn-review",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                            mode: "orange",
                            size: "medium",
                            className: "btn-chat",
                            onClick: handleShowReview,
                            children: isMobile ? t("chat:btn-review-sp") : t("chat:btn-review")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "box-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    className: (chat_module_default()).boxData,
                    id: "box-message",
                    ref: boxMessageRef,
                    children: listMessages?.length ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_infinite_scroller_default()), {
                        loadMore: loadMoreData,
                        hasMore: !!listMessages?.length && hasMoreParams.hasMore && !isFirstRender.current,
                        loader: "loading...",
                        isReverse: true,
                        useWindow: false,
                        children: listMessages?.map((message, index)=>message?.sender_id !== userId ? /*#__PURE__*/ jsx_runtime_.jsx(BoxMyChat, {
                                message: message?.content,
                                time: (0,utils/* formatChatDate */.N)(message?.created_at)
                            }, index) : /*#__PURE__*/ jsx_runtime_.jsx(BoxChatOthers, {
                                avatar: message?.user?.profile_image || "/assets/images/svg/avatar.svg",
                                message: message?.content,
                                time: (0,utils/* formatChatDate */.N)(message?.created_at)
                            }, index)
                        )
                    }) : null
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: (chat_module_default()).boxChat,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                    className: "paper-chat",
                    sx: {
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InputCustom/* default */.Z, {
                            multiline: true,
                            className: "input-chat",
                            inputRef: inputChatRef,
                            id: "input_chat_text",
                            sx: {
                                ml: 1,
                                flex: 1
                            },
                            placeholder: t("chat:input-chat-placeholder"),
                            inputProps: {
                                "aria-label": t("chat:input-chat-placeholder")
                            },
                            onKeyUp: onKeyUpMessageText
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
                            onClick: handleSendTextMessage,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "search",
                                src: "/assets/images/svg/ic_send_message.svg"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PopupReportUser/* default */.Z, {
                showPopup: showPopup,
                setShowPopup: setShowPopup,
                user: user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PopupReviewComponent/* default */.Z, {
                showPopup: showPopupReview,
                setShowPopup: setShowPopupReview,
                user: user
            })
        ]
    }));
};
/* harmony default export */ const Blocks_ChatBoxRightComponent = (ChatBoxRightComponent);

;// CONCATENATED MODULE: ./src/components/chat/Personal/Blocks/ChatBoxRightNoDataComponent.tsx

/* eslint-disable jsx-a11y/label-has-associated-control */ 





const ChatBoxRightNoDataComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
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
                                /*#__PURE__*/ jsx_runtime_.jsx(InputCustom/* default */.Z, {
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
    }));
};
/* harmony default export */ const Blocks_ChatBoxRightNoDataComponent = (ChatBoxRightNoDataComponent);

;// CONCATENATED MODULE: ./src/components/chat/Personal/Blocks/ChatComponent.tsx

/* eslint-disable no-console */ 














const BlockChatComponent = ({ hasData , setHasData  })=>{
    const router = (0,router_.useRouter)();
    const { room: roomQuery  } = router.query;
    // Responsive
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 992;
    const { 0: isRenderRightSide , 1: setIsRenderRightSide  } = (0,external_react_.useState)(false);
    const { 0: listRooms , 1: setListRooms  } = (0,external_react_.useState)([]);
    const { 0: userId , 1: setUserId  } = (0,external_react_.useState)(null);
    const { 0: user , 1: setUser  } = (0,external_react_.useState)({});
    const { 0: roomSelect , 1: setRoomSelect  } = (0,external_react_.useState)(null);
    const { 0: hasMoreChatRoom , 1: setHasMoreChatRoom  } = (0,external_react_.useState)({
        cursor: null,
        hasMore: false
    });
    const { 0: newMessageOfRoom , 1: setNewMessageOfRoom  } = (0,external_react_.useState)(null);
    // Search chat-room
    const { 0: searchChatRoom , 1: setSearchChatRoom  } = (0,external_react_.useState)({
        search: null,
        cursor: null
    });
    const listRoomRef = (0,external_react_.useRef)([]);
    const chatRoomIdRef = (0,external_react_.useRef)(null);
    const sk = (0,external_react_.useRef)(null);
    const updateLastMessageOfListRooms = async (message)=>{
        let hasChatRoomExist = false;
        setListRooms(sortListRoomChat(listRoomRef.current?.map((item)=>{
            if (item.id === message.chat_room_id) {
                hasChatRoomExist = true;
                return {
                    ...item,
                    last_chat_message_at: external_dayjs_default()(new Date()).toISOString(),
                    last_chat_message_received: message.content
                };
            }
            return item;
        })));
        if (!hasChatRoomExist && message?.user) {
            setListRooms(sortListRoomChat([
                {
                    id: message.chat_room_id,
                    user: message?.user || {},
                    last_chat_message_at: external_dayjs_default()(new Date()).toISOString(),
                    last_chat_message_received: message.content
                },
                ...listRoomRef.current, 
            ]));
        }
    };
    (0,external_react_.useEffect)(()=>{
        listRoomRef.current = listRooms;
        if (!hasData && listRooms?.length) {
            setHasData(true);
        }
    }, [
        listRooms
    ]);
    (0,external_react_.useEffect)(()=>{
        chatRoomIdRef.current = roomSelect?.id || null;
        if (roomSelect?.id) {
            router.push({
                pathname: "/chat/personal",
                query: {
                    room: roomSelect?.id
                }
            }, undefined, {
                shallow: true
            });
        }
    }, [
        roomSelect
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isMobile) {
            setIsRenderRightSide(true);
        }
        sk.current = new WebSocket(`${"wss://c9b60njp5b.execute-api.ap-northeast-1.amazonaws.com/staging?token="}${(0,storage/* getToken */.LP)()}`);
        sk.current.addEventListener("open", ()=>{
            console.log("WebSocket is connected");
        });
        sk.current.addEventListener("error", (e)=>{
            console.error("WebSocket is in error", e);
            sk.current = new WebSocket(`${"wss://c9b60njp5b.execute-api.ap-northeast-1.amazonaws.com/staging?token="}${(0,storage/* getToken */.LP)()}`);
        });
        sk.current.addEventListener("message", (e)=>{
            const messageReceived = JSON.parse(e.data);
            console.log("WebSocket received a message", Object.keys(messageReceived));
            if (messageReceived["get.chatRoom.message"]) {
                const message = messageReceived["get.chatRoom.message"];
                if (chatRoomIdRef.current === message.chat_room_id) {
                    setNewMessageOfRoom(message);
                }
                updateLastMessageOfListRooms(message);
            }
        });
    }, []);
    const { data: listRoomResQuery  } = (0,external_react_query_.useQuery)([
        constants/* REACT_QUERY_KEYS.PERSONAL_CHAT.LIST_CHAT_ROOMS */.pn.PERSONAL_CHAT.LIST_CHAT_ROOMS,
        searchChatRoom
    ], async ()=>{
        const res = await getListChatRooms(searchChatRoom?.search, searchChatRoom?.cursor);
        return res;
    }, {
        refetchOnWindowFocus: false
    });
    (0,external_react_.useEffect)(()=>{
        setListRooms(sortListRoomChat(listRoomResQuery?.items || []));
        if (!roomSelect?.id) {
            const roomQuerySelect = listRoomResQuery?.items?.find((item)=>item.id === roomQuery
            );
            if (roomQuerySelect) {
                setRoomSelect(roomQuerySelect);
                setUserId(roomQuerySelect?.user?.id);
                setUser(roomQuerySelect?.user);
            } else {
                setRoomSelect(listRoomResQuery?.items[0] || {});
                setUserId(listRoomResQuery?.items[0]?.user?.id);
                setUser(listRoomResQuery?.items[0]?.user);
            }
        }
        setHasMoreChatRoom({
            cursor: listRoomResQuery?.cursor,
            hasMore: listRoomResQuery?.hasMore
        });
    }, [
        listRoomResQuery
    ]);
    const loadMoreChatRooms = async ()=>{
        if (hasMoreChatRoom.cursor?.length) {
            const listRoomRes = await getListChatRooms(searchChatRoom?.search, hasMoreChatRoom.cursor);
            setListRooms(sortListRoomChat([
                ...listRooms,
                ...listRoomRes?.items || []
            ]));
            setHasMoreChatRoom({
                cursor: listRoomRes?.cursor,
                hasMore: listRoomRes?.hasMore
            });
        }
    };
    const sendTextMessage = (message)=>{
        if (message) {
            const payload = {
                event: "chatRoom.message",
                chatRoomId: roomSelect?.id,
                content: message,
                content_type: "text"
            };
            sk.current.send(JSON.stringify(payload));
            updateLastMessageOfListRooms({
                content: message,
                chat_room_id: roomSelect.id
            });
        }
    };
    const onSelectRoom = (index)=>{
        setIsRenderRightSide(!isRenderRightSide);
        if (listRooms[index]?.user?.id !== userId) {
            setRoomSelect(listRooms[index]);
            setUserId(listRooms[index]?.user?.id);
            setUser(listRooms[index]?.user);
        }
    };
    const toggleRenderSide = ()=>setIsRenderRightSide(!isRenderRightSide)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        className: external_classnames_default()((chat_module_default()).chatContainerPC),
        children: [
            !isMobile || isMobile && !isRenderRightSide ? /*#__PURE__*/ jsx_runtime_.jsx(Blocks_ChatBoxLeftComponent, {
                listRooms: listRooms,
                userId: userId,
                onSelectRoom: onSelectRoom,
                setSearchChatRoom: setSearchChatRoom,
                hasMoreChatRoom: hasMoreChatRoom,
                loadMoreChatRooms: loadMoreChatRooms
            }) : null,
            !hasData && /*#__PURE__*/ jsx_runtime_.jsx(Blocks_ChatBoxRightNoDataComponent, {}),
            hasData && (!isMobile || isMobile && isRenderRightSide) ? /*#__PURE__*/ jsx_runtime_.jsx(Blocks_ChatBoxRightComponent, {
                isMobile: isMobile,
                toggleRenderSide: toggleRenderSide,
                userId: userId,
                user: user,
                roomSelect: roomSelect,
                sendTextMessage: sendTextMessage,
                newMessageOfRoom: newMessageOfRoom
            }) : null
        ]
    }));
};
/* harmony default export */ const ChatComponent = (BlockChatComponent);

;// CONCATENATED MODULE: ./src/components/chat/Personal/PersonalChatComponent.tsx




const PersonalChatComponent = ()=>{
    const { 0: hasData , 1: setHasData  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx(ContentComponent/* default */.Z, {
        showFooter: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ChatComponent, {
            hasData: hasData,
            setHasData: setHasData
        })
    }));
};
/* harmony default export */ const Personal_PersonalChatComponent = (PersonalChatComponent);

;// CONCATENATED MODULE: ./pages/chat/personal/no-data.tsx




const ChatPersonalNoDataPage = ()=>/*#__PURE__*/ jsx_runtime_.jsx(Personal_PersonalChatComponent, {})
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
/* harmony default export */ const no_data = (ChatPersonalNoDataPage);


/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ replaceLabelByTranslate),
/* harmony export */   "N": () => (/* binding */ formatChatDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const replaceLabelByTranslate = (message, textReplace)=>message.replace("%s", textReplace.toString())
;
const formatChatDate = (date)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("HH:mm")
;


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

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

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

/***/ 5374:
/***/ ((module) => {

module.exports = require("@mui/material/Radio");

/***/ }),

/***/ 8383:
/***/ ((module) => {

module.exports = require("@mui/material/TextareaAutosize");

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,493,944,893,597,814,593], () => (__webpack_exec__(8981)));
module.exports = __webpack_exports__;

})();