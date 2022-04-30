"use strict";
(() => {
var exports = {};
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 6155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ detail),
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
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/components/community/mockData.ts
var mockData = __webpack_require__(2586);
// EXTERNAL MODULE: ./src/components/common/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(8460);
// EXTERNAL MODULE: ./src/components/community/blocks/IntroCommunityComponent.tsx
var IntroCommunityComponent = __webpack_require__(1209);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(3059);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);
// EXTERNAL MODULE: ./src/components/common/dialog/DialogConfirmComponent.tsx
var DialogConfirmComponent = __webpack_require__(3968);
;// CONCATENATED MODULE: ./src/components/community/post/detail/blocks/ButtonDropDownComponent.tsx






const ButtonDropDownComponent = ({ top , right  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const [openDialog, setOpen] = external_react_default().useState(false);
    const handleOpenDialog = ()=>{
        setOpen(true);
    };
    const handleCloseDialog = ()=>setOpen(false)
    ;
    const handleDialogCancel = ()=>{
        handleCloseDialog();
        setOpen(false);
    };
    const handleDialogOK = ()=>{
        handleCloseDialog();
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                onClick: handleClick,
                size: "small",
                "aria-controls": open ? "account-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": open ? "true" : undefined,
                sx: {
                    position: "absolute",
                    top: top || 13,
                    right: right || 30
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    sx: {
                        width: 24,
                        height: 24
                    },
                    src: "/assets/images/svg/three_dot.svg"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Menu, {
                anchorEl: anchorEl,
                id: "account-menu",
                open: open,
                onClose: handleClose,
                onClick: handleClose,
                PaperProps: {
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        border: `1px solid ${theme/* default.blue */.Z.blue}`,
                        borderRadius: "16px",
                        width: "106px",
                        mt: 1.5
                    }
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                        sx: {
                            py: "0px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                            href: "/community/post/edit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    color: theme/* default.gray */.Z.gray,
                                    fontSize: 14
                                },
                                children: t("community:button.dropdown.edit")
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                        sx: {
                            py: "0px"
                        },
                        onClick: handleOpenDialog,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                color: theme/* default.gray */.Z.gray,
                                fontSize: 14
                            },
                            children: t("community:button.dropdown.delete")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogConfirmComponent/* default */.Z, {
                title: t("community:dialog.confirm-delete-title"),
                content: t("community:dialog.note-delete-title"),
                btnLeft: t("community:button.dialog.cancel"),
                btnRight: t("community:button.dialog.withdraw"),
                isShow: openDialog,
                handleClose: handleCloseDialog,
                handleCancel: handleDialogCancel,
                handleOK: handleDialogOK
            })
        ]
    }));
};
/* harmony default export */ const blocks_ButtonDropDownComponent = (ButtonDropDownComponent);

;// CONCATENATED MODULE: ./src/components/community/post/detail/blocks/PostDetailComponent.tsx








const BoxInfo = ({ title , text , textColor , fontWeight  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            border: `1px solid ${theme/* default.blue */.Z.blue}`,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            height: [
                "32px",
                "40px"
            ],
            lineHeight: [
                "32px",
                "40px"
            ],
            mb: [
                "8px",
                "7px"
            ]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    backgroundColor: theme/* default.blue */.Z.blue,
                    borderRadius: "12px 0px 0px 12px",
                    color: "white",
                    fontWeight: 700,
                    fontSize: [
                        10,
                        14
                    ],
                    width: [
                        "48px",
                        "80px"
                    ],
                    textAlign: "center"
                },
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: {
                    ml: "20px",
                    color: textColor || "black",
                    fontSize: [
                        10,
                        14
                    ],
                    fontWeight
                },
                children: text
            })
        ]
    })
;
const PostDetailComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            pt: [
                "20px",
                "30px"
            ],
            pb: "40px",
            px: [
                "15px",
                "40px"
            ],
            border: `2px solid ${theme/* default.whiteGray */.Z.whiteGray}`,
            borderRadius: "12px",
            color: theme/* default.navy */.Z.navy,
            position: "relative",
            backgroundColor: "white"
        },
        children: [
            mockData/* isContributor */.Uz && /*#__PURE__*/ jsx_runtime_.jsx(blocks_ButtonDropDownComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                component: "span",
                sx: {
                    fontSize: [
                        18,
                        32
                    ],
                    fontWeight: 700
                },
                children: mockData/* postDetail.title */.Qd.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    my: "20px",
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        sx: {
                            mr: [
                                "8px",
                                "24px"
                            ],
                            width: [
                                "32px",
                                "54px"
                            ],
                            height: [
                                "32px",
                                "54px"
                            ]
                        },
                        src: mockData/* postDetail.avatar */.Qd.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            flexDirection: [
                                "row-reverse",
                                "column"
                            ],
                            alignItems: [
                                "center",
                                "inherit"
                            ]
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                sx: {
                                    color: theme/* default.gray */.Z.gray,
                                    fontSize: [
                                        10,
                                        14
                                    ]
                                },
                                children: mockData/* postDetail.last_login */.Qd.last_login
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                sx: {
                                    fontSize: [
                                        14,
                                        20
                                    ],
                                    fontWeight: 700,
                                    mr: [
                                        "16px",
                                        0
                                    ]
                                },
                                children: mockData/* postDetail.name */.Qd.name
                            })
                        ]
                    })
                ]
            }),
            mockData/* status */.i7 === "withdraw" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BoxInfo, {
                        title: t("community:url"),
                        text: mockData/* postDetail.url */.Qd.url,
                        textColor: theme/* default.blue */.Z.blue,
                        fontWeight: 500
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BoxInfo, {
                        title: t("community:address"),
                        text: mockData/* postDetail.address */.Qd.address,
                        fontWeight: 400
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                sx: {
                    my: "20px",
                    backgroundColor: theme/* default.lightGray */.Z.lightGray
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                mt: "20px",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: external_isomorphic_dompurify_default().sanitize(mockData/* postDetail.content */.Qd.content)
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_PostDetailComponent = (PostDetailComponent);

;// CONCATENATED MODULE: ./src/components/community/post/detail/blocks/CommentComponent.tsx







const CommentComponent = ({ item  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            borderTop: `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
            pt: [
                "8px",
                "20px"
            ],
            pb: "26px",
            position: "relative"
        },
        children: [
            mockData/* isContributorOrCommenter */.BL && /*#__PURE__*/ jsx_runtime_.jsx(blocks_ButtonDropDownComponent, {
                top: [
                    "4px",
                    "10px"
                ],
                right: "0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    pb: "20px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        sx: {
                            mr: [
                                "8px",
                                "24px"
                            ],
                            width: [
                                "32px",
                                "54px"
                            ],
                            height: [
                                "32px",
                                "54px"
                            ]
                        },
                        src: item.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            flexDirection: [
                                "row-reverse",
                                "column"
                            ],
                            alignItems: [
                                "center",
                                "inherit"
                            ]
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    color: theme/* default.gray */.Z.gray,
                                    fontSize: [
                                        10,
                                        14
                                    ]
                                },
                                children: item.last_login
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontSize: [
                                        14,
                                        20
                                    ],
                                    fontWeight: 700,
                                    mr: [
                                        "16px",
                                        0
                                    ]
                                },
                                children: item.name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: external_isomorphic_dompurify_default().sanitize(item.content)
                }
            })
        ]
    })
;
/* harmony default export */ const blocks_CommentComponent = (CommentComponent);

// EXTERNAL MODULE: ./src/components/community/blocks/ChildTabComponent.tsx + 1 modules
var ChildTabComponent = __webpack_require__(5095);
;// CONCATENATED MODULE: ./src/components/community/post/detail/blocks/ListCommentComponent.tsx









const ListCommentComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            border: `2px solid ${theme/* default.whiteGray */.Z.whiteGray}`,
            backgroundColor: "white",
            borderRadius: "12px",
            mt: "8px",
            mb: "20px",
            pt: [
                "20px",
                "40px"
            ],
            px: [
                "15px",
                "40px"
            ]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    mb: "16px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        px: "12px",
                        borderLeft: `1px solid ${theme/* default.lightGray_1 */.Z.lightGray_1}`,
                        borderRight: `1px solid ${theme/* default.lightGray_1 */.Z.lightGray_1}`
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                            variant: "text",
                            sx: {
                                color: theme/* default.blue */.Z.blue,
                                width: "46px",
                                height: "24px",
                                fontSize: 14,
                                textTransform: "capitalize",
                                mr: "4px"
                            },
                            children: t("community:detail.comment.posting-order")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                            variant: "text",
                            sx: {
                                color: "black",
                                width: "46px",
                                height: "24px",
                                fontSize: 14,
                                fontWeight: 400
                            },
                            children: t("community:detail.comment.latest-order")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    mb: "38px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChildTabComponent/* PaginationCustom */.G, {
                    count: 4
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    color: theme/* default.navy */.Z.navy
                },
                children: mockData/* comments.map */.G_.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(blocks_CommentComponent, {
                        item: item
                    }, index.toString())
                )
            })
        ]
    }));
};
/* harmony default export */ const blocks_ListCommentComponent = (ListCommentComponent);

// EXTERNAL MODULE: ./src/components/community/LayoutComponent.tsx
var LayoutComponent = __webpack_require__(4812);
;// CONCATENATED MODULE: ./src/components/community/post/detail/IndexComponent.tsx











const DetailPostComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(LayoutComponent/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                mt: "40px",
                display: "flex",
                flexDirection: [
                    "column-reverse",
                    "row"
                ]
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        width: {
                            md: "20%"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(IntroCommunityComponent/* default */.Z, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        mr: {
                            md: "13px"
                        },
                        ml: {
                            md: "25px"
                        },
                        mb: [
                            "80px",
                            "20px"
                        ],
                        width: {
                            md: "80%"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(blocks_PostDetailComponent, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                mt: "40px"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    component: "span",
                                    sx: {
                                        fontSize: [
                                            14,
                                            20
                                        ],
                                        fontWeight: 700
                                    },
                                    children: [
                                        t("community:comment"),
                                        "（",
                                        mockData/* comments.length */.G_.length,
                                        "）"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(blocks_ListCommentComponent, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    component: "span",
                                    sx: {
                                        fontSize: [
                                            14,
                                            20
                                        ],
                                        fontWeight: 700
                                    },
                                    children: t("community:write-comment")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TextareaAutosize, {
                                    "aria-label": "write-comment",
                                    placeholder: t("community:place-holder"),
                                    style: {
                                        marginTop: "8px",
                                        paddingTop: "8px",
                                        paddingLeft: "8px",
                                        width: "100%",
                                        height: "120px",
                                        resize: "none",
                                        border: `2px solid ${theme/* default.whiteGray */.Z.whiteGray}`,
                                        borderRadius: "12px"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        textAlign: "right"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            square: true,
                                            bgColor: theme/* default.blue */.Z.blue
                                        },
                                        sx: {
                                            mt: "20px",
                                            width: "96px"
                                        },
                                        children: t("community:button.detail.submit-post")
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const IndexComponent = (DetailPostComponent);

;// CONCATENATED MODULE: ./pages/community/post/detail.tsx




const Community = ()=>/*#__PURE__*/ jsx_runtime_.jsx(IndexComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "community"
            ])
        }
    })
;
/* harmony default export */ const detail = (Community);


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

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,460,586,709,95,968,361], () => (__webpack_exec__(6155)));
module.exports = __webpack_exports__;

})();