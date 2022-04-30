"use strict";
(() => {
var exports = {};
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 9809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_matching),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/components/common/Tab/BlueTabComponent.tsx
var BlueTabComponent = __webpack_require__(5656);
// EXTERNAL MODULE: ./src/components/common/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(8460);
;// CONCATENATED MODULE: ./src/components/matching/blocks/EmptyMatchingComponent.tsx






const EmptyMatchingComponent = ({ text , mode  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            mx: [
                "48px",
                0
            ],
            borderTop: {
                sm: `2px solid ${theme/* default.lightGray */.Z.lightGray}`
            },
            height: {
                sm: "490px"
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: [
                theme/* default.whiteBlue */.Z.whiteBlue,
                "white"
            ]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    my: "40px",
                    fontSize: [
                        "16px",
                        "20px"
                    ],
                    fontWeight: 400
                },
                children: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                display: mode === "community" && "none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/images/svg/account_with_phone.svg",
                    width: "156px",
                    alt: "account_with_phone"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                underline: "none",
                href: mode === "community" ? "/search_community" : "/search_user",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                    props: {
                        mode: "gradient"
                    },
                    sx: {
                        mt: [
                            "30px",
                            "15px"
                        ]
                    },
                    children: mode === "community" ? t("matching:button.find-community") : t("matching:button.find-engineer")
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                underline: "none",
                href: "/community/setting",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                    props: {
                        dimension: "medium",
                        bgColor: theme/* default.orange */.Z.orange
                    },
                    sx: {
                        mt: "40px",
                        display: mode !== "community" && "none",
                        borderRadius: "4px"
                    },
                    children: t("matching:button.create-community")
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_EmptyMatchingComponent = (EmptyMatchingComponent);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "moment/locale/ja"
var ja_ = __webpack_require__(3122);
// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(699);
// EXTERNAL MODULE: ./src/components/chat/Personal/Blocks/PopupReportUser.tsx
var PopupReportUser = __webpack_require__(6105);
// EXTERNAL MODULE: ./src/components/chat/Personal/Blocks/PopupReviewComponent.tsx
var PopupReviewComponent = __webpack_require__(7133);
// EXTERNAL MODULE: ./src/components/home/blocks/ModalMatchingComponent.tsx + 1 modules
var ModalMatchingComponent = __webpack_require__(8151);
// EXTERNAL MODULE: ./src/services/matching.ts
var matching = __webpack_require__(1144);
;// CONCATENATED MODULE: ./src/constants/matching.ts
const TYPE = {
    RECEIVED: 1,
    SENT: 2,
    FAVORITE: 3,
    MATCHED: 4,
    COMMUNITY: 5
};
const TAB_VALUE_BY_KEY = {
    received: 0,
    sent: 1,
    favorite: 2,
    matched: 3,
    community: 4
};

;// CONCATENATED MODULE: ./src/components/matching/blocks/ThreadComponent.tsx
















const ThreadTitle = (0,styles_.styled)(material_.Typography)({
    paddingLeft: "20px",
    fontWeight: 700,
    minWidth: "110px"
});
const ThreadContent = (0,styles_.styled)(material_.Typography)({
    marginLeft: "20px"
});
const handlePurposeMatchingTab12 = (tempValue)=>{
    switch(tempValue){
        case "talk-casually":
            return "カジュアルにお話ししたい";
        case "technical-consultation":
            return "技術的な相談がしたい";
        case "work-with":
            return "一緒に働けるエンジニアを探している";
        default:
            return "その他";
    }
};
const ThreadComponent = ({ data , type , setKeyRefetchData , dataType  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const { auth  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const isOnline = "online";
    const isShowThread = type === "unConfirm" || type === "reject";
    const isConfirmOrFavoriteOrMatched = type === "confirm" || type === "favorite" || type === "matched";
    const [showPopupReport, setShowPopupReport] = external_react_default().useState(false);
    const handleShowReport = ()=>setShowPopupReport(true)
    ;
    const [showPopupReview, setShowPopupReview] = external_react_default().useState(false);
    const handleShowReview = ()=>setShowPopupReview(true)
    ;
    const [showModalMatching, setModalMatching] = external_react_default().useState(false);
    const [userRequestMatchingId, setUserRequestMatchingId] = external_react_default().useState(null);
    const handleSendMatchingRequest = async (matchingRequest)=>{
        const res = await (0,matching/* sendMatchingRequest */.XV)(userRequestMatchingId, matchingRequest);
        if (setKeyRefetchData) {
            setKeyRefetchData({
                type: TYPE.FAVORITE
            });
        }
        setModalMatching(false);
        return res;
    };
    const handleRejectMatchingRequest = async (userId)=>{
        const res = await (0,matching/* rejectMatchingRequestReceived */.PV)(userId);
        if (setKeyRefetchData) {
            setKeyRefetchData({
                type: dataType
            });
        }
        return res;
    };
    const handleCancelMatchingRequest = async (userId)=>{
        const res = await (0,matching/* cancelMatchingRequestSent */.CP)(userId);
        if (setKeyRefetchData) {
            setKeyRefetchData({
                type: dataType
            });
        }
        return res;
    };
    const handleAcceptMatchingRequest = async (userId)=>{
        const res = await (0,matching/* acceptMatchingRequestReceived */.m7)(userId);
        if (setKeyRefetchData) {
            setKeyRefetchData({
                type: dataType
            });
        }
        return res;
    };
    const handleOpenMatchingModal = (userMatchingId)=>{
        setModalMatching(true);
        setUserRequestMatchingId(userMatchingId);
    };
    const handleFormatTime = (tempValue)=>{
        if (tempValue === "favorite") return "";
        if (tempValue === "matched") return external_moment_default()(data?.matchRequest?.match_date).utc().fromNow() + t("thread:request");
        return external_moment_default()(data?.created_at).utc().format("lll").toString() + t("thread:request");
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    py: [
                        "20px",
                        "22px"
                    ],
                    px: [
                        "20px",
                        0
                    ],
                    mb: [
                        isConfirmOrFavoriteOrMatched ? "20px" : "40px",
                        0
                    ],
                    borderTop: [
                        `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
                        `2px solid ${theme/* default.lightGray */.Z.lightGray}`
                    ],
                    borderBottom: [
                        `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
                        "none"
                    ],
                    color: theme/* default.navy */.Z.navy,
                    backgroundColor: "white"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            display: {
                                sm: "none",
                                xs: type !== "favorite" ? "inherit" : "none"
                            },
                            fontSize: [
                                12,
                                14
                            ],
                            fontWeight: 400,
                            mb: "15px"
                        },
                        children: external_moment_default()(data?.desired_match_date).utc().fromNow()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    display: [
                                        type !== "favorite" && "none",
                                        "none"
                                    ],
                                    position: "absolute",
                                    top: "-8px",
                                    right: "-8px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/images/svg/heart.svg",
                                    alt: "heart"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItems: type === "favorite" ? "start" : "center",
                                    pl: type === "matched" && data?.matchRequest?.match_direction !== "sent" ? "25px" : "7px"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: type === "favorite" ? "flex" : "inherit",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    position: "relative",
                                                    mr: type === "matched" && data?.matchRequest?.match_direction === "sent" && "18px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                        variant: "square",
                                                        sx: {
                                                            borderRadius: "50%",
                                                            width: [
                                                                "32px",
                                                                isConfirmOrFavoriteOrMatched ? "54px" : "80px"
                                                            ],
                                                            height: "100%"
                                                        },
                                                        src: type === "favorite" || type === "matched" ? data?.profile_image : data?.user?.profile_image
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                        variant: "square",
                                                        sx: {
                                                            borderRadius: "50%",
                                                            display: type !== "matched" && "none",
                                                            position: "absolute",
                                                            top: data?.matchRequest?.match_direction === "sent" ? "-15px" : [
                                                                "30px",
                                                                "42px"
                                                            ],
                                                            left: data?.matchRequest?.match_direction === "sent" ? [
                                                                "-10px",
                                                                "-20px"
                                                            ] : [
                                                                "30px",
                                                                "52px"
                                                            ],
                                                            width: [
                                                                "15px",
                                                                "24px"
                                                            ],
                                                            height: [
                                                                "15px",
                                                                "24px"
                                                            ]
                                                        },
                                                        src: auth?.user?.profile?.profile_image
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: type !== "matched" && "none",
                                                            backgroundImage: `url("/assets/images/svg/send.svg")`,
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            position: "absolute",
                                                            top: data?.matchRequest?.match_direction === "sent" ? "-5px" : [
                                                                "24px",
                                                                "34px"
                                                            ],
                                                            left: data?.matchRequest?.match_direction === "sent" ? "0" : [
                                                                "23px",
                                                                "43px"
                                                            ],
                                                            width: [
                                                                "15px",
                                                                "20px"
                                                            ],
                                                            height: [
                                                                "100%"
                                                            ]
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    display: [
                                                        type === "matched" ? "none" : "inherit",
                                                        type === "favorite" ? "inherit" : "none"
                                                    ],
                                                    color: theme/* default.gray */.Z.gray,
                                                    fontSize: [
                                                        10,
                                                        14
                                                    ],
                                                    fontWeight: 500,
                                                    mt: "9px"
                                                },
                                                children: data?.activity_status === isOnline ? external_moment_default()(data?.last_login_at).utc().fromNow() : "ログイン中"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            pl: type === "favorite" ? "26px" : "20px",
                                            display: "flex",
                                            flexDirection: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                component: "span",
                                                sx: {
                                                    display: [
                                                        "none",
                                                        "inherit"
                                                    ],
                                                    fontSize: [
                                                        12,
                                                        14
                                                    ],
                                                    fontWeight: 400
                                                },
                                                children: handleFormatTime(type)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    fontSize: [
                                                        16,
                                                        20
                                                    ],
                                                    fontWeight: 700,
                                                    display: "flex",
                                                    flexDirection: [
                                                        "column",
                                                        "row"
                                                    ],
                                                    alignItems: [
                                                        "flex-start",
                                                        "center"
                                                    ]
                                                },
                                                children: [
                                                    (type === "favorite" || type === "matched" ? data?.username : data?.user?.username) ?? "情報なし",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            pl: {
                                                                sm: "7px"
                                                            },
                                                            fontSize: 12,
                                                            fontWeight: 500,
                                                            color: theme/* default.gray */.Z.gray
                                                        },
                                                        children: (type === "favorite" || type === "matched" ? data?.job_position : data?.user?.job_position) ?? "情報なし"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        sx: {
                                                            pl: "15px",
                                                            display: [
                                                                "none",
                                                                type === "favorite" && "inherit"
                                                            ]
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/images/svg/heart.svg",
                                                            alt: "heart"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                component: "span",
                                                sx: {
                                                    display: [
                                                        "none",
                                                        type === "favorite" && "inherit"
                                                    ]
                                                },
                                                children: data?.discussion_topic ?? "情報なし"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: [
                                        "none",
                                        "flex"
                                    ]
                                },
                                children: [
                                    type === "unConfirm" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                props: {
                                                    color: theme/* default.gray */.Z.gray,
                                                    bgColor: theme/* default.whiteGray */.Z.whiteGray,
                                                    dimension: "x-small"
                                                },
                                                sx: {
                                                    display: !data?.receiver_id && "none",
                                                    borderRadius: "12px"
                                                },
                                                onClick: ()=>handleCancelMatchingRequest(data?.id)
                                                ,
                                                children: t("thread:button.canceled")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                props: {
                                                    bgColor: theme/* default.orange */.Z.orange,
                                                    dimension: "x-small"
                                                },
                                                onClick: ()=>handleAcceptMatchingRequest(data?.id)
                                                ,
                                                sx: {
                                                    display: data?.receiver_id && "none",
                                                    mr: "20px"
                                                },
                                                children: t("thread:button.approve")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                props: {
                                                    bgColor: theme/* default.gray */.Z.gray,
                                                    dimension: "x-small"
                                                },
                                                sx: {
                                                    display: data?.receiver_id && "none"
                                                },
                                                onClick: ()=>handleRejectMatchingRequest(data?.id)
                                                ,
                                                children: t("thread:button.reject")
                                            })
                                        ]
                                    }),
                                    type === "confirm" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                disabled: data?.is_reviewed,
                                                props: {
                                                    color: data?.is_reviewed && theme/* default.gray */.Z.gray,
                                                    bgColor: !data?.is_reviewed && theme/* default.orange */.Z.orange,
                                                    dimension: "small"
                                                },
                                                sx: {
                                                    mr: "20px"
                                                },
                                                onClick: handleShowReview,
                                                children: data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                props: {
                                                    bgColor: theme/* default.blue */.Z.blue,
                                                    dimension: "small"
                                                },
                                                onClick: ()=>router.push(`/chat/personal`)
                                                ,
                                                children: t("thread:button.open-message")
                                            })
                                        ]
                                    }),
                                    type === "reject" && /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.blue */.Z.blue
                                        },
                                        sx: {
                                            width: "80px",
                                            mr: "20px",
                                            borderRadius: "12px"
                                        },
                                        onClick: handleShowReport,
                                        children: t("thread:button.report")
                                    }),
                                    type === "favorite" && /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        disabled: data?.match_status,
                                        props: {
                                            color: data?.match_status && theme/* default.gray */.Z.gray,
                                            bgColor: !data?.match_status && theme/* default.green */.Z.green,
                                            dimension: "small"
                                        },
                                        sx: {
                                            ml: "15px"
                                        },
                                        onClick: ()=>handleOpenMatchingModal(data?.id)
                                        ,
                                        children: data?.match_status ? t("thread:button.applied") : t("thread:button.apply-matching")
                                    }),
                                    type === "matched" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                disabled: data?.is_reviewed,
                                                props: {
                                                    color: data?.is_reviewed && theme/* default.gray */.Z.gray,
                                                    bgColor: !data?.is_reviewed && theme/* default.orange */.Z.orange,
                                                    dimension: "small"
                                                },
                                                sx: {
                                                    mr: "20px"
                                                },
                                                onClick: handleShowReview,
                                                children: data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                props: {
                                                    bgColor: theme/* default.blue */.Z.blue,
                                                    dimension: "small"
                                                },
                                                onClick: ()=>router.push(`/chat/personal`)
                                                ,
                                                children: t("thread:button.open-message")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            pr: "20px",
                            display: [
                                type !== "favorite" && "none",
                                "none"
                            ]
                        },
                        children: data.message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: isShowThread ? "block" : "none",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            display: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        minWidth: [
                                            "32px",
                                            "80px"
                                        ],
                                        display: [
                                            "none",
                                            "flex"
                                        ],
                                        justifyContent: "center",
                                        color: theme/* default.gray */.Z.gray,
                                        fontSize: [
                                            10,
                                            14
                                        ],
                                        fontWeight: 500
                                    },
                                    children: data?.activity_status === isOnline ? external_moment_default()(data?.last_login_at).utc().fromNow() : "ログイン中"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        mt: [
                                            "17px",
                                            0
                                        ],
                                        mb: [
                                            "40px",
                                            0
                                        ],
                                        ml: [
                                            0,
                                            "18px"
                                        ],
                                        pt: "20px",
                                        pb: "5px",
                                        width: "100%",
                                        backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue,
                                        borderRadius: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                mb: "15px",
                                                display: "flex",
                                                flexDirection: [
                                                    "column",
                                                    "row"
                                                ]
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThreadTitle, {
                                                    children: t("thread:purpose")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThreadContent, {
                                                    children: handlePurposeMatchingTab12(data?.purpose)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                mb: "15px",
                                                display: "flex",
                                                flexDirection: [
                                                    "column",
                                                    "row"
                                                ]
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThreadTitle, {
                                                    children: t("thread:date-interview")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThreadContent, {
                                                    children: external_moment_default()(data?.desired_match_date).utc().format("LL")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                mb: "15px",
                                                display: "flex",
                                                flexDirection: [
                                                    "column",
                                                    "row"
                                                ]
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThreadTitle, {
                                                    children: t("thread:message")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThreadContent, {
                                                    children: data?.message
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: [
                                "flex",
                                "none"
                            ],
                            flexDirection: type === "unConfirm" ? "column" : "row",
                            justifyContent: type === "confirm" || type === "matched" ? "space-between" : "center",
                            alignItems: "center"
                        },
                        children: [
                            type === "unConfirm" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            color: theme/* default.gray */.Z.gray,
                                            bgColor: theme/* default.whiteGray */.Z.whiteGray,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            mb: "20px",
                                            display: !data?.receiver_id && "none",
                                            borderRadius: "12px"
                                        },
                                        children: t("thread:button.canceled")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.orange */.Z.orange,
                                            dimension: "medium"
                                        },
                                        sx: {
                                            display: data?.receiver_id && "none"
                                        },
                                        children: t("thread:button.approve")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.gray */.Z.gray,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            display: data?.receiver_id && "none",
                                            mt: "42px",
                                            mb: "20px"
                                        },
                                        children: t("thread:button.reject")
                                    })
                                ]
                            }),
                            type === "confirm" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        disabled: data?.is_reviewed,
                                        props: {
                                            color: data?.is_reviewed && theme/* default.gray */.Z.gray,
                                            bgColor: !data?.is_reviewed && theme/* default.orange */.Z.orange,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            mt: "27px",
                                            mb: "5px",
                                            fontSize: 14
                                        },
                                        onClick: handleShowReview,
                                        children: data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.blue */.Z.blue,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            mt: "27px",
                                            mb: "5px",
                                            fontSize: 14
                                        },
                                        onClick: ()=>router.push(`/chat/personal`)
                                        ,
                                        children: t("thread:button.open-message-SP")
                                    })
                                ]
                            }),
                            type === "reject" && /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                props: {
                                    bgColor: theme/* default.blue */.Z.blue
                                },
                                sx: {
                                    width: "80px",
                                    borderRadius: "12px",
                                    mb: "20px"
                                },
                                onClick: handleShowReport,
                                children: t("thread:button.report")
                            }),
                            type === "favorite" && /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                disabled: data?.match_status,
                                props: {
                                    dimension: "small",
                                    color: data?.match_status && theme/* default.gray */.Z.gray,
                                    bgColor: !data?.match_status && theme/* default.green */.Z.green
                                },
                                sx: {
                                    mt: "20px",
                                    height: 40
                                },
                                onClick: ()=>handleOpenMatchingModal(data?.id)
                                ,
                                children: data?.match_status ? t("thread:button.applied") : t("thread:button.apply-matching")
                            }),
                            type === "matched" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        disabled: data?.is_reviewed,
                                        props: {
                                            color: data?.is_reviewed && theme/* default.gray */.Z.gray,
                                            bgColor: !data?.is_reviewed && theme/* default.orange */.Z.orange,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            mt: "27px",
                                            mb: "5px",
                                            fontSize: 14
                                        },
                                        onClick: handleShowReview,
                                        children: data?.is_reviewed ? t("thread:button.reviewed") : t("thread:button.review")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.blue */.Z.blue,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            mt: "27px",
                                            mb: "5px",
                                            fontSize: 14
                                        },
                                        onClick: ()=>router.push(`/chat/personal`)
                                        ,
                                        children: t("thread:button.open-message-SP")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PopupReportUser/* default */.Z, {
                showPopup: showPopupReport,
                setShowPopup: setShowPopupReport,
                user: data.user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PopupReviewComponent/* default */.Z, {
                showPopup: showPopupReview,
                setShowPopup: setShowPopupReview,
                user: data.user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalMatchingComponent/* default */.Z, {
                open: showModalMatching,
                setOpen: setModalMatching,
                userRequestMatching: data,
                handleSendMatchingRequest: handleSendMatchingRequest
            })
        ]
    }));
};
/* harmony default export */ const blocks_ThreadComponent = (ThreadComponent);

// EXTERNAL MODULE: ./src/components/common/Tab/BlueChildTabComponent.tsx
var BlueChildTabComponent = __webpack_require__(3709);
;// CONCATENATED MODULE: ./src/components/matching/blocks/ChildTabComponent.tsx








const ChildTabComponent = ({ dataId , dataChild , dataType , maxWidth , setKeyRefetchData ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const [valueChildTab, setValueChildTab] = external_react_default().useState(0);
    const onChangeChildTab = (event, newValue)=>{
        setValueChildTab(newValue);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
                variant: "fullWidth",
                value: valueChildTab,
                onChange: onChangeChildTab,
                "aria-label": "tab children",
                sx: {
                    mx: {
                        sm: "42px"
                    },
                    pt: {
                        sm: "38px"
                    },
                    borderBottom: [
                        `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
                        "none"
                    ],
                    ".MuiTabs-indicator": {
                        backgroundColor: [
                            theme/* default.blue */.Z.blue,
                            "transparent"
                        ]
                    }
                },
                children: dataChild?.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BlueChildTabComponent/* ChildTabCustom */.u7, {
                        props: {
                            fontSize: "10px",
                            mdWidth: maxWidth,
                            smFontSize: "14px",
                            mdFontSize: "21px"
                        },
                        iconPosition: "top",
                        label: tab.text + (tab?.count ? `（${tab?.count}）` : ""),
                        ...(0,BlueChildTabComponent/* a11yProps */.Pf)(index)
                    }, index.toString())
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueChildTabComponent/* TabPanel */.x4, {
                value: valueChildTab,
                index: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        pb: [
                            "120px",
                            "98px"
                        ],
                        backgroundColor: [
                            theme/* default.whiteBlue */.Z.whiteBlue,
                            "white"
                        ]
                    },
                    children: dataChild[0]?.data?.length ? dataChild[0]?.data.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    mx: [
                                        0,
                                        "45px"
                                    ],
                                    "&:first-of-type": {
                                        paddingTop: [
                                            "20px",
                                            "27px"
                                        ]
                                    },
                                    "&:last-of-type": {
                                        borderBottom: {
                                            sm: `2px solid ${theme/* default.lightGray */.Z.lightGray}`
                                        }
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ThreadComponent, {
                                    data: tab,
                                    type: "unConfirm",
                                    dataType: dataType,
                                    setKeyRefetchData: setKeyRefetchData
                                })
                            })
                        }, index.toString())
                    ) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            mx: [
                                0,
                                "45px"
                            ],
                            paddingTop: [
                                "20px",
                                "27px"
                            ]
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyMatchingComponent, {
                            text: dataId === 1 ? t("matching:text-empty.tab-1.1") : t("matching:text-empty.tab-2.1")
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueChildTabComponent/* TabPanel */.x4, {
                value: valueChildTab,
                index: 1,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        pb: [
                            "120px",
                            "98px"
                        ],
                        backgroundColor: [
                            theme/* default.whiteBlue */.Z.whiteBlue,
                            "white"
                        ]
                    },
                    children: dataChild[1]?.data?.length ? dataChild[1]?.data.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    mx: [
                                        0,
                                        "45px"
                                    ],
                                    "&:first-of-type": {
                                        paddingTop: [
                                            "20px",
                                            "27px"
                                        ]
                                    },
                                    "&:last-of-type": {
                                        borderBottom: {
                                            sm: `2px solid ${theme/* default.lightGray */.Z.lightGray}`
                                        }
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ThreadComponent, {
                                    data: tab,
                                    type: "confirm",
                                    dataType: dataType,
                                    setKeyRefetchData: setKeyRefetchData
                                })
                            })
                        }, index.toString())
                    ) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            mx: [
                                0,
                                "45px"
                            ],
                            paddingTop: [
                                "20px",
                                "27px"
                            ]
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyMatchingComponent, {
                            text: dataId === 1 ? t("matching:text-empty.tab-1.2") : t("matching:text-empty.tab-2.2")
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueChildTabComponent/* TabPanel */.x4, {
                value: valueChildTab,
                index: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        pb: [
                            "120px",
                            "98px"
                        ],
                        backgroundColor: [
                            theme/* default.whiteBlue */.Z.whiteBlue,
                            "white"
                        ]
                    },
                    children: dataChild[2]?.data?.length ? dataChild[2]?.data.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    mx: [
                                        0,
                                        "45px"
                                    ],
                                    "&:first-of-type": {
                                        paddingTop: [
                                            "20px",
                                            "27px"
                                        ]
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ThreadComponent, {
                                    data: tab,
                                    type: "reject",
                                    dataType: dataType,
                                    setKeyRefetchData: setKeyRefetchData
                                })
                            })
                        }, index.toString())
                    ) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            mx: [
                                0,
                                "45px"
                            ],
                            paddingTop: [
                                "20px",
                                "27px"
                            ]
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyMatchingComponent, {
                            text: dataId === 1 ? t("matching:text-empty.tab-1.3") : t("matching:text-empty.tab-2.3")
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_ChildTabComponent = (ChildTabComponent);

;// CONCATENATED MODULE: ./src/components/matching/TabComponent.tsx








// import ChildTabComponent, { IDataChild } from "src/components/matching/blocks/ChildTabComponent";



const LIMIT = 20;
const OPTIONS = [
    {
        value: "newest",
        label: "新しい順"
    },
    {
        value: "oldest",
        label: "古い順"
    },
    {
        value: "name-asc",
        label: "名前順"
    }, 
];
const TabComponent = ({ data , setKeyRefetchData , tabValue , setTabValue  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const onChangeParentTab = (event, newValue)=>{
        setTabValue(newValue);
    };
    const [optionSelected, setOption] = external_react_default().useState("oldest");
    const handleChange = (event)=>{
        setOption(event.target.value);
    };
    const { 0: matchedUsers , 1: setMatchUsers  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (tabValue === TAB_VALUE_BY_KEY.matched) {
            const fetchMatchedUsers = async ()=>{
                const res = await (0,matching/* getMatchedRequest */.nC)(LIMIT, "", optionSelected);
                setMatchUsers(res?.items);
            };
            fetchMatchedUsers();
        }
    }, [
        optionSelected,
        tabValue
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
                value: tabValue,
                onChange: onChangeParentTab,
                "aria-label": "tab children",
                TabIndicatorProps: {
                    style: {
                        backgroundColor: "transparent"
                    }
                },
                children: data?.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabCustom */.F1, {
                        props: {
                            xsBorderColor: theme/* default.lightGray */.Z.lightGray
                        },
                        iconPosition: "top",
                        icon: tab.icon,
                        label: tab.text,
                        ...(0,BlueTabComponent/* a11yProps */.Pf)(index),
                        sx: {
                            backgroundColor: "white",
                            "&.Mui-selected": {
                                "&:before": {
                                    content: `url("/assets/images/svg/red_dot.svg")`,
                                    position: "absolute",
                                    top: "-5px",
                                    right: "10px",
                                    "@media (max-width: 768px)": {
                                        top: "5px",
                                        right: "5px"
                                    }
                                }
                            }
                        }
                    }, index.toString())
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: tabValue,
                index: TAB_VALUE_BY_KEY.received,
                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ChildTabComponent, {
                    dataId: 1,
                    dataType: data[0]?.type,
                    dataChild: data[0]?.children ?? [],
                    maxWidth: "230px",
                    setKeyRefetchData: setKeyRefetchData
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: tabValue,
                index: TAB_VALUE_BY_KEY.sent,
                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ChildTabComponent, {
                    dataId: 2,
                    dataType: data[1]?.type,
                    dataChild: data[1]?.children ?? [],
                    maxWidth: "160px",
                    setKeyRefetchData: setKeyRefetchData
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: tabValue,
                index: TAB_VALUE_BY_KEY.favorite,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        pb: [
                            "120px",
                            "98px"
                        ],
                        paddingTop: [
                            "20px",
                            "0"
                        ],
                        backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue
                    },
                    children: data[2]?.data?.length ? data[2]?.data?.map((tab, tabIndex)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    px: [
                                        0,
                                        "40px"
                                    ],
                                    backgroundColor: "white",
                                    "&:last-of-type": {
                                        borderBottom: {
                                            sm: `2px solid ${theme/* default.lightGray */.Z.lightGray}`
                                        }
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ThreadComponent, {
                                    data: tab,
                                    type: "favorite",
                                    setKeyRefetchData: setKeyRefetchData
                                })
                            })
                        }, tabIndex.toString())
                    ) : /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyMatchingComponent, {
                        text: t("matching:text-empty.tab-4")
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: tabValue,
                index: TAB_VALUE_BY_KEY.matched,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        pb: [
                            "120px",
                            "98px"
                        ],
                        backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue
                    },
                    children: data[3]?.data?.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    py: "20px",
                                    pl: {
                                        sm: "40px"
                                    },
                                    display: [
                                        "flex",
                                        "inherit"
                                    ],
                                    justifyContent: "center",
                                    backgroundColor: {
                                        sm: "white"
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Select, {
                                    value: optionSelected,
                                    onChange: handleChange,
                                    inputProps: {
                                        "aria-label": "Without label"
                                    },
                                    sx: {
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: theme/* default.navy */.Z.navy,
                                        width: [
                                            "320px",
                                            "240px"
                                        ],
                                        height: "40px",
                                        backgroundColor: "white",
                                        fieldset: {
                                            borderColor: [
                                                theme/* default.lightGray */.Z.lightGray,
                                                theme/* default.gray */.Z.gray
                                            ]
                                        }
                                    },
                                    children: OPTIONS && OPTIONS.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                            value: option.value,
                                            children: option.label
                                        }, index.toString())
                                    )
                                })
                            }),
                            matchedUsers?.map((tab, tabIndex)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            px: [
                                                0,
                                                "40px"
                                            ],
                                            backgroundColor: "white",
                                            "&:last-of-type": {
                                                borderBottom: {
                                                    sm: `2px solid ${theme/* default.lightGray */.Z.lightGray}`
                                                }
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_ThreadComponent, {
                                            data: tab,
                                            type: "matched"
                                        })
                                    })
                                }, tabIndex.toString())
                            )
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyMatchingComponent, {
                        text: t("matching:text-empty.tab-4")
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: tabValue,
                index: TAB_VALUE_BY_KEY.community,
                children: data[4]?.data?.length ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        mt: [
                            "40px",
                            0
                        ],
                        mx: [
                            "20px",
                            "40px"
                        ],
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap"
                    },
                    children: data[4]?.data?.map((tab, tabIndex)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    mt: [
                                        0,
                                        "40px"
                                    ],
                                    mb: [
                                        "20px",
                                        0
                                    ],
                                    mx: [
                                        0,
                                        "20px"
                                    ],
                                    flex: [
                                        "0 0 50%",
                                        "0 0 18%"
                                    ],
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        variant: "square",
                                        sx: {
                                            width: [
                                                "149px",
                                                "124px"
                                            ],
                                            height: [
                                                "149px",
                                                "124px"
                                            ]
                                        },
                                        src: tab?.profile_image
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "span",
                                        pt: "10px",
                                        sx: {
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: "black"
                                        },
                                        children: tab?.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        component: "span",
                                        pt: "8px",
                                        sx: {
                                            fontSize: [
                                                10,
                                                14
                                            ],
                                            color: theme/* default.gray */.Z.gray
                                        },
                                        children: [
                                            t("matching:count-member"),
                                            " ",
                                            tab?.member_count
                                        ]
                                    })
                                ]
                            })
                        }, tabIndex.toString())
                    )
                }) : /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyMatchingComponent, {
                    text: t("matching:text-empty.tab-5"),
                    mode: "community"
                })
            })
        ]
    }));
};
/* harmony default export */ const matching_TabComponent = (TabComponent);

// EXTERNAL MODULE: ./src/services/user.ts
var user = __webpack_require__(1727);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/helpers/api.ts
var api = __webpack_require__(3612);
;// CONCATENATED MODULE: ./src/services/community.ts


const getListCommunities = async (limit, cursor)=>{
    try {
        const res = await api/* api.get */.h.get(`/user/communities?limit=${limit}&cursor=${cursor}`);
        return res.data;
    } catch (error) {
        external_react_toastify_.toast.error("server error");
        return error;
    }
};

;// CONCATENATED MODULE: ./src/components/matching/MatchingComponent.tsx










const MatchingComponent_LIMIT = 20;
const MatchingComponent = ()=>{
    const typeQuery = (0,router_.useRouter)()?.query?.type;
    const { 0: tabs , 1: setTabs  } = (0,external_react_.useState)([
        {
            text: "マッチングリクエスト",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/svg/person.svg",
                alt: "person"
            }),
            type: TYPE.RECEIVED,
            tabValue: TAB_VALUE_BY_KEY.received,
            isFetched: false,
            children: [
                {
                    text: "未承認リクエスト",
                    data: [],
                    count: 0,
                    key: "pending"
                },
                {
                    text: "承認済みリクエスト",
                    data: [],
                    count: 0,
                    key: "confirmed"
                },
                {
                    text: "否承認リクエスト",
                    data: [],
                    count: 0,
                    key: "rejected"
                }, 
            ]
        },
        {
            text: "申請中のマッチング",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/svg/pan_tool.svg",
                alt: "pan_tool"
            }),
            type: TYPE.SENT,
            tabValue: TAB_VALUE_BY_KEY.sent,
            isFetched: false,
            children: [
                {
                    text: "未承認",
                    data: [],
                    count: 0,
                    key: "pending"
                },
                {
                    text: "マッチング済み",
                    data: [],
                    count: 0,
                    key: "confirmed"
                },
                {
                    text: "否承認",
                    data: [],
                    count: 0,
                    key: "rejected"
                }, 
            ]
        },
        {
            text: "話したい人リスト",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/svg/favorite.svg",
                alt: "favorite"
            }),
            data: [],
            type: TYPE.FAVORITE,
            tabValue: TAB_VALUE_BY_KEY.favorite,
            isFetched: false
        },
        {
            text: "マッチング済",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/svg/perm_contact_calendar.svg",
                alt: "perm_contact_calendar"
            }),
            type: TYPE.MATCHED,
            tabValue: TAB_VALUE_BY_KEY.matched,
            data: [
                {
                    avatar: "/assets/images/svg/account.svg",
                    avatar2: "/assets/images/svg/account_2.svg",
                    name: "佐藤 太郎",
                    date_request: "2021年8月27日13時48分にリクエスト",
                    job: "フロントエンドエンジニア",
                    last_login: "8分前",
                    message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
                    is_send_message: false,
                    is_reviewed: false
                },
                {
                    avatar: "/assets/images/svg/account.svg",
                    avatar2: "/assets/images/svg/account_2.svg",
                    name: "佐藤 太郎",
                    date_request: "2021年8月27日13時48分にリクエスト",
                    job: "フロントエンドエンジニア",
                    last_login: "8分前",
                    message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
                    is_send_message: false,
                    is_reviewed: false
                },
                {
                    avatar: "/assets/images/svg/account.svg",
                    avatar2: "/assets/images/svg/account_2.svg",
                    name: "佐藤 太郎",
                    date_request: "2021年8月27日13時48分にリクエスト",
                    job: "フロントエンドエンジニア",
                    last_login: "8分前",
                    message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
                    is_send_message: true,
                    is_reviewed: true
                },
                {
                    avatar: "/assets/images/svg/account.svg",
                    avatar2: "/assets/images/svg/account_2.svg",
                    name: "佐藤 太郎",
                    date_request: "2021年8月27日13時48分にリクエスト",
                    job: "フロントエンドエンジニア",
                    last_login: "8分前",
                    message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
                    is_send_message: true,
                    is_reviewed: false
                }, 
            ]
        },
        {
            text: "参加中のコミュニティ",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/svg/stars.svg",
                alt: "stars"
            }),
            type: TYPE.COMMUNITY,
            tabValue: TAB_VALUE_BY_KEY.community,
            data: []
        }, 
    ]);
    const { 0: keyRefetchData , 1: setKeyRefetchData  } = (0,external_react_.useState)(null);
    const { 0: tabValue , 1: setTabValue  } = (0,external_react_.useState)(TAB_VALUE_BY_KEY[typeQuery] || TAB_VALUE_BY_KEY.received);
    (0,external_react_.useEffect)(()=>{
        const refetchData = async ()=>{
            let dataRefetch;
            const tabTemp = tabs?.find((item)=>item?.tabValue === tabValue
            );
            if (tabTemp && (keyRefetchData || !tabTemp?.isFetched)) {
                switch(tabValue){
                    case TAB_VALUE_BY_KEY.received:
                        dataRefetch = [
                            (0,matching/* getMatchingRequestReceived */.d5)(MatchingComponent_LIMIT, "", "pending"),
                            (0,matching/* getMatchingRequestReceived */.d5)(MatchingComponent_LIMIT, "", "confirmed"),
                            (0,matching/* getMatchingRequestReceived */.d5)(MatchingComponent_LIMIT, "", "rejected"), 
                        ];
                        break;
                    case TAB_VALUE_BY_KEY.sent:
                        dataRefetch = [
                            (0,matching/* getMatchingRequestSent */.Yr)(MatchingComponent_LIMIT, "", "pending"),
                            (0,matching/* getMatchingRequestSent */.Yr)(MatchingComponent_LIMIT, "", "confirmed"),
                            (0,matching/* getMatchingRequestSent */.Yr)(MatchingComponent_LIMIT, "", "rejected"), 
                        ];
                        break;
                    case TAB_VALUE_BY_KEY.favorite:
                        {
                            const res = await (0,user/* getUserFavorite */.zV)(MatchingComponent_LIMIT, "");
                            tabTemp.data = res.items || [];
                            tabTemp.isFetched = true;
                            setTabs(tabs.map((item)=>item?.tabValue === tabValue ? tabTemp : item
                            ));
                            break;
                        }
                    case TAB_VALUE_BY_KEY.community:
                        {
                            const res = await getListCommunities(MatchingComponent_LIMIT, "");
                            tabTemp.data = res.items || [];
                            tabTemp.isFetched = true;
                            setTabs(tabs.map((item)=>item?.tabValue === tabValue ? tabTemp : item
                            ));
                            break;
                        }
                    default:
                        break;
                }
                if (dataRefetch && dataRefetch.length) {
                    const result = await Promise.all(dataRefetch);
                    tabTemp.children = tabTemp?.children?.map((item, index)=>({
                            ...item,
                            data: result[index]?.items?.reverse() || [],
                            count: result[index]?.items?.length
                        })
                    );
                    tabTemp.isFetched = true;
                    setTabs(tabs.map((item)=>item?.tabValue === tabValue ? tabTemp : item
                    ));
                }
            }
        };
        refetchData();
    }, [
        keyRefetchData,
        tabValue
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(ContentComponent/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                minHeight: "60vh",
                mt: [
                    "88px"
                ],
                px: [
                    0,
                    "8.4%"
                ],
                mb: [
                    "0",
                    "114px"
                ]
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(matching_TabComponent, {
                tabValue: tabValue,
                setTabValue: setTabValue,
                data: tabs,
                setKeyRefetchData: setKeyRefetchData
            })
        })
    }));
};
/* harmony default export */ const matching_MatchingComponent = (MatchingComponent);

;// CONCATENATED MODULE: ./pages/matching.tsx




const Matching = ()=>/*#__PURE__*/ jsx_runtime_.jsx(matching_MatchingComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "thread",
                "register",
                "matching",
                "chat",
                "home"
            ])
        }
    })
;
/* harmony default export */ const pages_matching = (Matching);


/***/ }),

/***/ 6715:
/***/ ((module) => {

module.exports = require("@mui/lab/AdapterDateFns");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("@mui/lab/DatePicker");

/***/ }),

/***/ 9904:
/***/ ((module) => {

module.exports = require("@mui/lab/LocalizationProvider");

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

/***/ 5564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3122:
/***/ ((module) => {

module.exports = require("moment/locale/ja");

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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,460,493,944,893,581,709,814,656], () => (__webpack_exec__(9809)));
module.exports = __webpack_exports__;

})();