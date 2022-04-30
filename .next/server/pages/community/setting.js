"use strict";
(() => {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 1107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ setting),
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/helpers/useViewport.tsx
var useViewport = __webpack_require__(3597);
;// CONCATENATED MODULE: ./src/components/common/Tab/BlueTabVerticalComponent.tsx






const TabPanel = (props)=>{
    const { children , value , index  } = props;
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 425;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `vertical-tabpanel-${index}`,
        "aria-labelledby": `vertical-tab-${index}`,
        style: {
            backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue,
            width: "100%",
            paddingBottom: isMobile ? "80px" : "170px"
        },
        children: value === index && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            children: [
                " ",
                children
            ]
        })
    }));
};
const a11yProps = (index)=>({
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    })
;
const TabCustom = (0,styles_.styled)(material_.Tab)(({ props  })=>({
        height: "48px",
        color: theme/* default.navy */.Z.navy,
        fontWeight: 500,
        minWidth: props?.smWidth || "20%",
        maxWidth: props?.smWidth || "20%",
        "&.Mui-selected": {
            "&": {
                backgroundColor: theme/* default.blue */.Z.blue,
                fontWeight: 700
            },
            color: "white"
        },
        "@media (max-width: 425px)": {
            "&:first-of-type": {
                borderLeft: `1px solid ${theme/* default.lightGray */.Z.lightGray}`
            },
            height: "78px",
            backgroundColor: "white",
            borderTop: `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
            borderBottom: `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
            borderRight: `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
            minWidth: props?.xsWidth,
            maxWidth: props?.xsWidth
        },
        "@media (min-width: 768px)": {
            marginBottom: "20px",
            borderRadius: "12px 0 0 12px",
            paddingLeft: "26px",
            alignItems: "flex-start"
        }
    })
);

// EXTERNAL MODULE: ./src/components/community/post/FormComponent.tsx
var FormComponent = __webpack_require__(3378);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: ./src/components/common/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(8460);
// EXTERNAL MODULE: ./src/components/common/dialog/DialogConfirmComponent.tsx
var DialogConfirmComponent = __webpack_require__(3968);
;// CONCATENATED MODULE: ./src/components/community/setting/blocks/ButtonExplainComponent.tsx






const ButtonExplainComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 425;
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
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
                    p: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    sx: {
                        width: 24,
                        height: 24
                    },
                    src: "/assets/images/svg/help.svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Menu, {
                anchorEl: anchorEl,
                id: "explain-admin-menu",
                open: open,
                onClose: handleClose,
                onClick: handleClose,
                transformOrigin: {
                    horizontal: "left",
                    vertical: "top"
                },
                anchorOrigin: {
                    horizontal: "left",
                    vertical: "top"
                },
                PaperProps: {
                    elevation: 0,
                    style: {
                        width: isMobile ? 190 : 320,
                        height: isMobile ? 48 : 64,
                        overflow: "visible",
                        border: `1px solid ${theme/* default.blue */.Z.blue}`,
                        borderRadius: "16px",
                        marginLeft: "30px"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        pl: "13px",
                        pr: "20px",
                        color: theme/* default.gray */.Z.gray,
                        fontSize: [
                            10,
                            16
                        ]
                    },
                    children: t("community:setting.form.explain")
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_ButtonExplainComponent = (ButtonExplainComponent);

;// CONCATENATED MODULE: ./src/components/community/setting/blocks/EmptyComponent.tsx




const EmptyComponent = ({ text  })=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            mx: [
                "20px",
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
            backgroundColor: "white",
            borderRadius: [
                "12px",
                "0px 0px 12px 12px"
            ]
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
            sx: {
                my: "40px",
                fontSize: [
                    14,
                    16
                ],
                fontWeight: 400
            },
            children: text
        })
    })
;
/* harmony default export */ const blocks_EmptyComponent = (EmptyComponent);

;// CONCATENATED MODULE: ./src/components/community/setting/blocks/GridViewComponent.tsx






const GridViewComponent = ({ data  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            py: [
                "20px",
                "22px"
            ],
            px: [
                "20px",
                "40px"
            ],
            mb: [
                "20px",
                0
            ],
            borderTop: `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
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
                        sm: "none"
                    },
                    fontSize: [
                        12,
                        14
                    ],
                    fontWeight: 400,
                    color: theme/* default.gray */.Z.gray,
                    mb: "5px"
                },
                children: data.date_request
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                variant: "square",
                                sx: {
                                    width: [
                                        "32px",
                                        "64px"
                                    ],
                                    height: "100%"
                                },
                                src: data.avatar
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    pl: "20px",
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
                                            fontWeight: 400,
                                            color: theme/* default.gray */.Z.gray
                                        },
                                        children: data.date_request
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontWeight: 700
                                        },
                                        children: data.name
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: [
                                "none",
                                "flex"
                            ]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                    props: {
                                        bgColor: theme/* default.orange */.Z.orange,
                                        dimension: "x-small"
                                    },
                                    sx: {
                                        mr: "20px",
                                        height: "36px"
                                    },
                                    children: t("community:button.setting.participation.approve")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                    props: {
                                        bgColor: theme/* default.gray */.Z.gray,
                                        dimension: "x-small"
                                    },
                                    sx: {
                                        height: "36px"
                                    },
                                    children: t("community:button.setting.participation.reject")
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: [
                        "flex",
                        "none"
                    ],
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                            props: {
                                bgColor: theme/* default.orange */.Z.orange,
                                dimension: "x-small"
                            },
                            sx: {
                                mt: "27px",
                                fontSize: 14,
                                height: "40px"
                            },
                            children: t("community:button.setting.participation.approve")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                            props: {
                                bgColor: theme/* default.blue */.Z.blue,
                                dimension: "x-small"
                            },
                            sx: {
                                mt: "27px",
                                fontSize: 14,
                                height: "40px"
                            },
                            children: t("community:button.setting.participation.reject")
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_GridViewComponent = (GridViewComponent);

// EXTERNAL MODULE: ./src/components/community/blocks/ChildTabComponent.tsx + 1 modules
var ChildTabComponent = __webpack_require__(5095);
// EXTERNAL MODULE: ./src/components/community/mockData.ts
var mockData = __webpack_require__(2586);
;// CONCATENATED MODULE: ./src/components/community/setting/blocks/ParticipatedMemberComponent.tsx









const ParticipationComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            mr: [
                0,
                "17.32%"
            ],
            backgroundColor: [
                theme/* default.whiteBlue */.Z.whiteBlue,
                "white"
            ],
            borderRadius: "12px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    borderBottom: {
                        sm: `1px solid ${theme/* default.lightGray */.Z.lightGray}`
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontWeight: 500,
                            py: [
                                "20px",
                                "28px"
                            ],
                            px: [
                                0,
                                "40px"
                            ],
                            textAlign: [
                                "center",
                                "left"
                            ]
                        },
                        children: t("community:setting.participation.title")
                    }),
                    mockData/* participations.length */.BI.length ? mockData/* participations.map */.BI.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_GridViewComponent, {
                                data: data
                            })
                        }, index.toString())
                    ) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_EmptyComponent, {
                            text: t("community:setting.participation.empty")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    py: "40px",
                    display: mockData/* participations.length */.BI.length ? "flex" : "none",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChildTabComponent/* PaginationCustom */.G, {
                    count: 4
                })
            })
        ]
    }));
};
/* harmony default export */ const ParticipatedMemberComponent = (ParticipationComponent);

// EXTERNAL MODULE: ./src/components/common/dialog/DialogConfirmWithAvatarComponent.tsx
var DialogConfirmWithAvatarComponent = __webpack_require__(929);
;// CONCATENATED MODULE: ./src/components/community/setting/blocks/DropDownBlockUserComponent.tsx






const DropDownBlockUserComponent = ()=>{
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
    const handleOpenDialog = ()=>setOpen(true)
    ;
    const handleCloseDialog = ()=>setOpen(false)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                onClick: handleClick,
                size: "small",
                "aria-controls": open ? "account-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": open ? "true" : undefined,
                sx: {
                    display: {
                        sm: "none"
                    },
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    sx: {
                        width: 24,
                        height: 24
                    },
                    src: "/assets/images/svg/three_dot.svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Menu, {
                anchorEl: anchorEl,
                id: "account-menu",
                open: open,
                onClose: handleClose,
                onClick: handleClose,
                PaperProps: {
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        border: `1px solid ${theme/* default.gray */.Z.gray}`,
                        borderRadius: "16px",
                        width: "190px",
                        mt: 0.5
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
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    sx: {
                        color: theme/* default.gray */.Z.gray,
                        fontSize: [
                            12,
                            14
                        ],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    },
                    onClick: handleOpenDialog,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                paddingRight: "5px"
                            },
                            src: "/assets/images/svg/none.svg",
                            alt: ""
                        }),
                        t("community:button.setting.member.block-SP")
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogConfirmComponent/* default */.Z, {
                title: t("community:dialog.confirm-delete-title"),
                content: t("community:dialog.note-delete-title"),
                btnLeft: t("community:button.dialog.cancel"),
                btnRight: t("community:button.dialog.withdraw"),
                isShow: openDialog,
                handleClose: handleCloseDialog,
                handleCancel: handleCloseDialog,
                handleOK: handleCloseDialog
            })
        ]
    }));
};
/* harmony default export */ const blocks_DropDownBlockUserComponent = (DropDownBlockUserComponent);

;// CONCATENATED MODULE: ./src/components/community/setting/blocks/GridViewMemberComponent.tsx








const GridViewMemberComponent_GridViewComponent = ({ data , type  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const [openDialogBlock, setOpenDialogBlock] = external_react_default().useState(false);
    const handleOpenDialogBlock = ()=>setOpenDialogBlock(true)
    ;
    const handleCloseDialogBlock = ()=>setOpenDialogBlock(false)
    ;
    const [openDialogUnBlock, setOpenDialogUnBlock] = external_react_default().useState(false);
    const handleOpenDialogUnBlock = ()=>setOpenDialogUnBlock(true)
    ;
    const handleCloseDialogUnBlock = ()=>setOpenDialogUnBlock(false)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    py: [
                        "15px",
                        "22px"
                    ],
                    px: [
                        "20px",
                        "40px"
                    ],
                    borderTop: [
                        `1px solid ${theme/* default.lightGray */.Z.lightGray}`,
                        `1px solid ${theme/* default.lightGray */.Z.lightGray}`
                    ],
                    color: theme/* default.navy */.Z.navy,
                    backgroundColor: "white",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        display: type === "block" && "none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_DropDownBlockUserComponent, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItems: [
                                        type === "block" ? "center" : "flex-start",
                                        "center"
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        variant: "square",
                                        sx: {
                                            width: "64px",
                                            height: "100%"
                                        },
                                        src: data.avatar
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            pl: "20px",
                                            display: "flex",
                                            flexDirection: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: [
                                                        "column",
                                                        "row"
                                                    ]
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        component: "span",
                                                        sx: {
                                                            fontSize: 16,
                                                            fontWeight: 700
                                                        },
                                                        children: data.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                        label: data.is_representative ? "代表者" : "管理者",
                                                        sx: {
                                                            display: !data.is_representative && !data.is_manager && "none",
                                                            ml: [
                                                                0,
                                                                "12px"
                                                            ],
                                                            mt: [
                                                                "10px",
                                                                0
                                                            ],
                                                            width: "60px",
                                                            height: "20px",
                                                            fontSize: 12,
                                                            fontWeight: 600,
                                                            color: "white",
                                                            backgroundColor: data.is_representative ? theme/* default.green */.Z.green : theme/* default.blue */.Z.blue
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    display: [
                                                        "none",
                                                        "inherit"
                                                    ],
                                                    color: theme/* default.blue */.Z.blue,
                                                    fontSize: 14
                                                },
                                                children: data.job
                                            })
                                        ]
                                    })
                                ]
                            }),
                            type === "participated" ? /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                props: {
                                    bgColor: theme/* default.gray */.Z.gray,
                                    dimension: "x-small"
                                },
                                sx: {
                                    display: [
                                        "none",
                                        !data.is_representative && "flex"
                                    ],
                                    height: "36px"
                                },
                                onClick: handleOpenDialogBlock,
                                children: t("community:button.setting.member.block")
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.blue */.Z.blue,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            display: [
                                                "none",
                                                data.is_representative ? "none" : "inherit"
                                            ],
                                            height: "36px"
                                        },
                                        onClick: handleOpenDialogUnBlock,
                                        children: t("community:button.setting.member.unblock")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        props: {
                                            bgColor: theme/* default.blue */.Z.blue,
                                            dimension: "x-small"
                                        },
                                        sx: {
                                            display: [
                                                data.is_representative && "none",
                                                "none"
                                            ],
                                            width: "54px",
                                            borderRadius: "8px",
                                            height: "32px"
                                        },
                                        onClick: handleOpenDialogUnBlock,
                                        children: t("community:button.setting.member.unblock-SP")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogConfirmWithAvatarComponent/* default */.Z, {
                title: t("community:setting.member.dialog-block.title"),
                content: t("community:setting.member.dialog-block.content"),
                btnLeft: t("community:button.dialog.cancel"),
                btnRight: t("community:button.dialog.block"),
                bgColorBtnRight: theme/* default.red */.Z.red,
                isShow: openDialogBlock,
                handleClose: handleCloseDialogBlock,
                handleCancel: handleCloseDialogBlock,
                handleOK: handleCloseDialogBlock
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogConfirmWithAvatarComponent/* default */.Z, {
                title: t("community:setting.member.dialog-unblock.title"),
                content: t("community:setting.member.dialog-unblock.content"),
                btnLeft: t("community:button.dialog.cancel"),
                btnRight: t("community:button.dialog.unblock"),
                isShow: openDialogUnBlock,
                handleClose: handleCloseDialogUnBlock,
                handleCancel: handleCloseDialogUnBlock,
                handleOK: handleCloseDialogUnBlock
            })
        ]
    }));
};
/* harmony default export */ const GridViewMemberComponent = (GridViewMemberComponent_GridViewComponent);

// EXTERNAL MODULE: ./src/components/common/Tab/BlueChildTabComponent.tsx
var BlueChildTabComponent = __webpack_require__(3709);
;// CONCATENATED MODULE: ./src/components/community/setting/blocks/MemberComponent.tsx








const MemberComponent = ({ dataChild  })=>{
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 425;
    const [valueChildTab, setValueChildTab] = external_react_default().useState(0);
    const onChangeChildTab = (event, newValue)=>{
        setValueChildTab(newValue);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            mr: [
                0,
                "17.32%"
            ],
            backgroundColor: [
                theme/* default.whiteBlue */.Z.whiteBlue,
                "white"
            ],
            borderRadius: "12px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
                value: valueChildTab,
                onChange: onChangeChildTab,
                "aria-label": "tab children",
                TabIndicatorProps: {
                    style: {
                        backgroundColor: isMobile ? theme/* default.blue */.Z.blue : "transparent"
                    }
                },
                sx: {
                    pl: {
                        sm: "10px"
                    }
                },
                children: dataChild?.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BlueChildTabComponent/* ChildTabCustom */.u7, {
                        sx: {
                            backgroundColor: "white",
                            py: {
                                sm: "30px"
                            },
                            ml: {
                                sm: "28px"
                            }
                        },
                        props: {
                            fontSize: "16px",
                            xsWidth: "50%",
                            xsFontSize: "10px",
                            mdWidth: "152px"
                        },
                        iconPosition: "top",
                        label: tab.text,
                        ...(0,BlueChildTabComponent/* a11yProps */.Pf)(index)
                    }, index.toString())
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BlueChildTabComponent/* TabPanel */.x4, {
                value: valueChildTab,
                index: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            borderBottom: `1px solid ${theme/* default.lightGray */.Z.lightGray}`
                        },
                        children: dataChild[0]?.data?.length && dataChild[0]?.data?.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridViewMemberComponent, {
                                        data: tab,
                                        type: "participated"
                                    })
                                })
                            }, index.toString())
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            py: "40px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ChildTabComponent/* PaginationCustom */.G, {
                                count: 4
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BlueChildTabComponent/* TabPanel */.x4, {
                value: valueChildTab,
                index: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            borderBottom: `1px solid ${theme/* default.lightGray */.Z.lightGray}`
                        },
                        children: dataChild[1]?.data?.length && dataChild[1]?.data?.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridViewMemberComponent, {
                                        data: tab,
                                        type: "block"
                                    })
                                })
                            }, index.toString())
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            py: "40px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ChildTabComponent/* PaginationCustom */.G, {
                                count: 4
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const blocks_MemberComponent = (MemberComponent);

;// CONCATENATED MODULE: ./src/components/community/setting/IndexComponent.tsx















const BoxTitle = (0,styles_.styled)(material_.Box)({
    fontSize: 18,
    "@media (max-width: 425px)": {
        fontSize: 16
    },
    fontWeight: 700
});
const TypographyButton = (0,styles_.styled)(material_.Typography)({
    color: theme/* default.blue */.Z.blue,
    "&:hover": {
        cursor: "pointer"
    }
});
const GridContent = (0,styles_.styled)(material_.Grid)({
    marginBottom: "40px",
    "@media (max-width: 425px)": {
        marginBottom: "40px"
    }
});
const GridTitle = (0,styles_.styled)(material_.Grid)({
    "@media (max-width: 425px)": {
        marginBottom: "4px"
    }
});
const SelectCustom = (0,styles_.styled)(material_.Select)({
    color: theme/* default.navy */.Z.navy,
    fontWeight: 500,
    width: [
        "242px",
        "302px"
    ],
    height: " 40px",
    backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue,
    fieldset: {
        border: "none"
    },
    "& span": {
        color: theme/* default.gray */.Z.gray
    }
});
const CommunitySettingComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const [saveSuccess, setSaveSuccess] = external_react_default().useState(false);
    const handleSaveSuccess = ()=>setSaveSuccess(true)
    ;
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, newValue)=>{
        setSaveSuccess(false);
        setValue(newValue);
    };
    const [disableBtnSubmit, setDisableBtnSubmit] = external_react_default().useState(true);
    const [showBtnRemoveAdmin, setBtnRemoveAdmin] = external_react_default().useState(false);
    const [adminSelected, setAdmin] = external_react_default().useState("");
    const handleChangeAdmin = (event)=>{
        setAdmin(event.target.value);
        setBtnRemoveAdmin(true);
        setDisableBtnSubmit(false);
    };
    const handleRemoveAdmin = ()=>{
        setAdmin("");
        setBtnRemoveAdmin(false);
        setDisableBtnSubmit(true);
    };
    const [roleCreatePostSelected, setRoleCreatePost] = external_react_default().useState("");
    const handleChangeRoleCreatePost = (event)=>{
        setRoleCreatePost(event.target.value);
    };
    const [roleJoinSelected, setRoleJoin] = external_react_default().useState(mockData/* infoCommunitySetting.rolesJoin.0.value */.hE.rolesJoin[0].value);
    const handleChangeRoleJoin = (event)=>{
        setRoleJoin(event.target.value);
    };
    const [tagData, setTagData] = external_react_default().useState(mockData/* infoCommunitySetting.tags */.hE.tags);
    const handleDeleteTag = (chipToDelete)=>()=>{
            setTagData((chips)=>chips.filter((chip)=>chip.key !== chipToDelete.key
                )
            );
        }
    ;
    const [openDialog, setOpen] = external_react_default().useState(false);
    const handleOpenDialog = ()=>setOpen(true)
    ;
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentComponent/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: saveSuccess ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: [
                        "40px",
                        "80px"
                    ],
                    backgroundColor: theme/* default.blue */.Z.blue,
                    opacity: 0.8,
                    fontSize: [
                        16,
                        20
                    ],
                    fontWeight: 700,
                    color: "white",
                    zIndex: 99999
                },
                children: t("community:setting.form.save-success")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    mt: [
                        "20px",
                        "38px"
                    ],
                    ml: [
                        0,
                        "40px"
                    ],
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: [
                        "column",
                        "row"
                    ],
                    backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    pl: "26px",
                                    mb: [
                                        "20px",
                                        "23px"
                                    ],
                                    display: [
                                        "flex",
                                        "inherit"
                                    ],
                                    justifyContent: "center",
                                    fontSize: 20,
                                    fontWeight: 700
                                },
                                children: t("community:setting.title")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
                                value: value,
                                onChange: handleChange,
                                "aria-label": "Vertical tabs example",
                                TabIndicatorProps: {
                                    style: {
                                        backgroundColor: "transparent"
                                    }
                                },
                                sx: {
                                    "& .MuiTabs-flexContainer": {
                                        flexDirection: [
                                            "row",
                                            "column"
                                        ]
                                    }
                                },
                                children: mockData/* tabsCommunitySetting.map */.r8.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TabCustom, {
                                        props: {
                                            xsWidth: "33.33%",
                                            smWidth: "239px"
                                        },
                                        iconPosition: "top",
                                        label: tab.text,
                                        ...a11yProps(index)
                                    }, index.toString())
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                        value: value,
                        index: 0,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                mt: "20px",
                                mr: [
                                    "20px",
                                    "17.32%"
                                ],
                                ml: [
                                    "20px",
                                    "0"
                                ],
                                pt: [
                                    "20px ",
                                    "40px"
                                ],
                                px: [
                                    "10px",
                                    "40px"
                                ],
                                pb: "64px",
                                backgroundColor: "white"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                    container: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            sx: {
                                                display: "flex",
                                                justifyContent: [
                                                    "center",
                                                    "flex-start"
                                                ]
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                variant: "square",
                                                sx: {
                                                    mb: 0,
                                                    width: "160px",
                                                    height: "160px"
                                                },
                                                src: mockData/* infoCommunitySetting.avatar */.hE.avatar
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            sx: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: [
                                                    "center",
                                                    "flex-start"
                                                ],
                                                justifyContent: [
                                                    "center",
                                                    "flex-start"
                                                ]
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    children: t("community:setting.form.text-upload")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    children: t("community:setting.form.max-upload")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                    props: {
                                                        square: true,
                                                        dimension: "medium",
                                                        bgColor: theme/* default.gray */.Z.gray
                                                    },
                                                    sx: {
                                                        mt: "12px",
                                                        mb: "20px",
                                                        height: "56px"
                                                    },
                                                    children: t("community:button.setting.upload")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(TypographyButton, {
                                                    mb: [
                                                        "28px",
                                                        "33px"
                                                    ],
                                                    children: t("community:setting.form.delete-img")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxTitle, {
                                                children: t("community:setting.form.name")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            sx: {
                                                mb: [
                                                    "36px",
                                                    "30px"
                                                ]
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FormComponent/* InputCustom */.BB, {
                                                sx: {
                                                    ml: 1,
                                                    flex: 1
                                                },
                                                placeholder: t("community:setting.form.placeholder.name"),
                                                inputProps: {
                                                    "aria-label": t("community:setting.form.placeholder.name")
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxTitle, {
                                                children: t("community:setting.form.detail")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridContent, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    height: "100%",
                                                    borderRadius: "6px",
                                                    marginBottom: "4px",
                                                    "& div": {
                                                        backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue,
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
                                                        border: `2px solid ${theme/* default.blue */.Z.blue}`
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(FormComponent/* TextareaAutosizeCustom */.xD, {
                                                    "aria-label": "write-comment",
                                                    placeholder: t("community:place-holder"),
                                                    sx: {
                                                        minHeight: [
                                                            "240px",
                                                            "80px"
                                                        ]
                                                    }
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxTitle, {
                                                children: t("community:setting.form.representative")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridContent, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                        variant: "square",
                                                        sx: {
                                                            mb: 0,
                                                            width: "32px",
                                                            height: "32px"
                                                        },
                                                        src: mockData/* infoCommunitySetting.admin.avatar */.hE.admin.avatar
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            fontWeight: 500,
                                                            ml: "8px"
                                                        },
                                                        children: mockData/* infoCommunitySetting.admin.name */.hE.admin.name
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxTitle, {
                                                sx: {
                                                    display: "flex"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        mr: "6px",
                                                        children: t("community:setting.form.administrator")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(blocks_ButtonExplainComponent, {})
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContent, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
                                                    theme: theme/* themeSelect */.n,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectCustom, {
                                                                value: adminSelected,
                                                                onChange: handleChangeAdmin,
                                                                displayEmpty: true,
                                                                inputProps: {
                                                                    "aria-label": "Role create post"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                                        disabled: true,
                                                                        value: "",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: t("community:setting.form.placeholder.administrator")
                                                                        })
                                                                    }),
                                                                    mockData/* admins */.tm && mockData/* admins.map */.tm.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                                            value: option.value,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                sx: {
                                                                                    display: "flex",
                                                                                    alignItems: "center"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                                        variant: "square",
                                                                                        sx: {
                                                                                            mb: 0,
                                                                                            width: "32px",
                                                                                            height: "32px"
                                                                                        },
                                                                                        src: option.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                        sx: {
                                                                                            ml: "8px",
                                                                                            color: theme/* default.navy */.Z.navy,
                                                                                            fontSize: 14
                                                                                        },
                                                                                        children: option.label
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, index.toString())
                                                                    )
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                                                props: {
                                                                    bgColor: theme/* default.lightGray */.Z.lightGray,
                                                                    color: theme/* default.navy */.Z.navy,
                                                                    square: true
                                                                },
                                                                sx: {
                                                                    display: !showBtnRemoveAdmin && "none",
                                                                    ml: "20px",
                                                                    width: "54px",
                                                                    height: "32px",
                                                                    fontWeight: 400,
                                                                    fontSize: 14
                                                                },
                                                                onClick: handleRemoveAdmin,
                                                                children: t("community:setting.form.remove")
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(TypographyButton, {
                                                    sx: {
                                                        mt: "20px",
                                                        fontSize: 14
                                                    },
                                                    children: t("community:setting.form.add")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxTitle, {
                                                children: t("community:setting.form.role-create-post")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridContent, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
                                                theme: theme/* themeSelect */.n,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectCustom, {
                                                    value: roleCreatePostSelected,
                                                    onChange: handleChangeRoleCreatePost,
                                                    displayEmpty: true,
                                                    inputProps: {
                                                        "aria-label": "Role join"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                            disabled: true,
                                                            value: "",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: t("community:setting.form.placeholder.role-create-post")
                                                            })
                                                        }),
                                                        mockData/* infoCommunitySetting.rolesCreatePost */.hE.rolesCreatePost && mockData/* infoCommunitySetting.rolesCreatePost.map */.hE.rolesCreatePost.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                                value: option.value,
                                                                children: option.label
                                                            }, index.toString())
                                                        )
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxTitle, {
                                                children: t("community:setting.form.role-join")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridContent, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.RadioGroup, {
                                                "aria-label": "gender",
                                                name: "controlled-radio-buttons-group",
                                                value: roleJoinSelected,
                                                onChange: handleChangeRoleJoin,
                                                sx: {
                                                    flexDirection: "row",
                                                    justifyContent: [
                                                        "space-between",
                                                        "inherit"
                                                    ]
                                                },
                                                children: mockData/* infoCommunitySetting.rolesJoin */.hE.rolesJoin && mockData/* infoCommunitySetting.rolesJoin.map */.hE.rolesJoin.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                                                        value: item.value,
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Radio, {
                                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                sx: {
                                                                    mb: 0,
                                                                    width: "16px",
                                                                    height: "16px"
                                                                },
                                                                src: "/assets/images/svg/radio_off.svg"
                                                            }),
                                                            checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                sx: {
                                                                    mb: 0,
                                                                    width: "16px",
                                                                    height: "16px"
                                                                },
                                                                src: "/assets/images/svg/radio_on.svg"
                                                            })
                                                        }),
                                                        label: item.label,
                                                        sx: {
                                                            mr: [
                                                                0,
                                                                "40px"
                                                            ],
                                                            "& .MuiTypography-root": {
                                                                fontSize: 14,
                                                                fontWeight: 500
                                                            }
                                                        }
                                                    }, index.toString())
                                                )
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridTitle, {
                                            item: true,
                                            xs: 12,
                                            sm: 3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxTitle, {
                                                children: t("community:setting.form.tag")
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            item: true,
                                            xs: 12,
                                            sm: 9,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(FormComponent/* InputCustom */.BB, {
                                                    sx: {
                                                        display: [
                                                            "none",
                                                            "inherit"
                                                        ],
                                                        ml: 1,
                                                        flex: 1
                                                    },
                                                    placeholder: t("community:setting.form.placeholder.tag"),
                                                    inputProps: {
                                                        "aria-label": t("community:setting.form.placeholder.tag")
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(FormComponent/* InputCustom */.BB, {
                                                    sx: {
                                                        display: {
                                                            sm: "none"
                                                        },
                                                        ml: 1,
                                                        flex: 1
                                                    },
                                                    placeholder: t("community:setting.form.placeholder.tag-SP"),
                                                    inputProps: {
                                                        "aria-label": t("community:setting.form.placeholder.tag-SP")
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                                        sx: {
                                                            mt: "12px",
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            listStyle: "none",
                                                            boxShadow: "none"
                                                        },
                                                        children: tagData?.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                                                sx: {
                                                                    px: "3px",
                                                                    width: "auto"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                                    label: data.label,
                                                                    onDelete: handleDeleteTag(data),
                                                                    deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                        src: "/assets/images/svg/delete.svg",
                                                                        sx: {
                                                                            width: "16px",
                                                                            height: "16px",
                                                                            backgroundColor: "white",
                                                                            "& img": {
                                                                                p: "4px"
                                                                            }
                                                                        }
                                                                    }),
                                                                    sx: {
                                                                        fontSize: 12,
                                                                        fontWeight: 500,
                                                                        color: "white",
                                                                        height: "22px",
                                                                        backgroundColor: theme/* default.blue */.Z.blue,
                                                                        borderRadius: "4px",
                                                                        display: "flex",
                                                                        alignItems: "center"
                                                                    }
                                                                })
                                                            }, data.key)
                                                        )
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        mt: [
                                            "40px",
                                            "69px"
                                        ],
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                            props: {
                                                dimension: "medium",
                                                bgColor: disableBtnSubmit ? theme/* default.gray */.Z.gray : theme/* default.blue */.Z.blue
                                            },
                                            sx: {
                                                fontSize: {
                                                    sm: 20
                                                },
                                                height: [
                                                    "48px",
                                                    "56px"
                                                ],
                                                "@media (max-width: 425px)": {
                                                    width: "200px"
                                                },
                                                "&:hover": {
                                                    cursor: disableBtnSubmit && "not-allowed"
                                                }
                                            },
                                            onClick: !disableBtnSubmit ? handleSaveSuccess : null,
                                            children: t("community:button.setting.save")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyButton, {
                                            sx: {
                                                mt: "40px"
                                            },
                                            onClick: handleOpenDialog,
                                            children: t("community:setting.form.delete-community")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                        value: value,
                        index: 1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_MemberComponent, {
                            dataChild: mockData/* tabsCommunitySetting.1.children */.r8[1].children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                        value: value,
                        index: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ParticipatedMemberComponent, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogConfirmComponent/* default */.Z, {
                title: t("community:setting.form.dialog.title"),
                content: t("community:setting.form.dialog.content"),
                btnLeft: t("community:button.dialog.cancel-2"),
                btnRight: t("community:button.dialog.delete-community"),
                isShow: openDialog,
                handleClose: handleCloseDialog,
                handleCancel: handleDialogCancel,
                handleOK: handleDialogOK
            })
        ]
    }));
};
/* harmony default export */ const IndexComponent = (CommunitySettingComponent);

;// CONCATENATED MODULE: ./pages/community/setting.tsx




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
/* harmony default export */ const setting = (Community);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,460,586,597,709,95,378,929,968], () => (__webpack_exec__(1107)));
module.exports = __webpack_exports__;

})();