"use strict";
(() => {
var exports = {};
exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 1113:
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
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/components/community/LayoutComponent.tsx
var LayoutComponent = __webpack_require__(4812);
// EXTERNAL MODULE: ./src/components/common/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(8460);
// EXTERNAL MODULE: ./src/components/community/blocks/IntroCommunityComponent.tsx
var IntroCommunityComponent = __webpack_require__(1209);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/common/Tab/BlueTabComponent.tsx
var BlueTabComponent = __webpack_require__(5656);
;// CONCATENATED MODULE: ./src/components/community/blocks/EmptyComponent.tsx





const EmptyComponent = ({ children , textButton , hiddenButton , mtButton , bgButton , absolute , handleClick ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            pt: [
                absolute ? "130px" : "0",
                absolute ? "170px" : "80px"
            ],
            height: [
                absolute ? "466px" : "237px",
                absolute ? "601px" : "545px"
            ],
            display: "flex",
            flexDirection: "column",
            justifyContent: [
                absolute ? "flex-start" : "space-around",
                "unset"
            ],
            alignItems: "center",
            border: [
                !absolute && `1px solid ${theme/* default.blue */.Z.blue}`,
                !absolute && `2px solid ${theme/* default.whiteGray */.Z.whiteGray}`
            ],
            borderRadius: "0 0 12px 12px",
            position: absolute ? "absolute" : "unset",
            left: absolute && "50%",
            top: absolute && "0",
            width: absolute && "101%",
            transform: absolute && "translate(-50%, 0)",
            backdropFilter: absolute && "blur(10px)",
            backgroundColor: absolute && "rgba(255, 255, 255, 0.5)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    color: theme/* default.navy */.Z.navy,
                    fontWeight: 400
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        fontSize: [
                            "14px",
                            "16px"
                        ]
                    },
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                props: {
                    mode: !bgButton && "gradient",
                    bgColor: bgButton
                },
                sx: {
                    display: hiddenButton ? "none" : "inherit",
                    mt: [
                        mtButton?.xs || "0",
                        mtButton?.md || "80px"
                    ]
                },
                onClick: handleClick,
                children: textButton
            })
        ]
    })
;
/* harmony default export */ const blocks_EmptyComponent = (EmptyComponent);

// EXTERNAL MODULE: ./src/components/community/blocks/ChildTabComponent.tsx + 1 modules
var ChildTabComponent = __webpack_require__(5095);
// EXTERNAL MODULE: ./src/components/community/blocks/GridViewComponent.tsx
var GridViewComponent = __webpack_require__(7568);
// EXTERNAL MODULE: ./src/components/community/mockData.ts
var mockData = __webpack_require__(2586);
;// CONCATENATED MODULE: ./src/components/community/blocks/TabComponent.tsx












const TypographyCustom = (0,styles_.styled)(material_.Typography)({
    fontSize: 16,
    "@media (max-width: 425px)": {
        fontSize: 14
    }
});
const TabComponent = ({ data  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const [valueParentTab, setValueParentTab] = external_react_default().useState(0);
    const onChangeParentTab = (event, newValue)=>{
        setValueParentTab(newValue);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
                value: valueParentTab,
                onChange: onChangeParentTab,
                "aria-label": "tab children",
                TabIndicatorProps: {
                    style: {
                        backgroundColor: "transparent"
                    }
                },
                children: data?.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabCustom */.F1, {
                        sx: {
                            backgroundColor: "white",
                            display: [
                                index.toString() === "2" && "none",
                                mockData/* tabsCommunity.0.children */.s9[0].children && index.toString() === "2" && "inherit", 
                            ]
                        },
                        props: {
                            xsColor: theme/* default.blue */.Z.blue,
                            xsFontSize: "16px",
                            xsWidth: "50%",
                            xsHeight: "48px",
                            xsBorderColor: theme/* default.blue */.Z.blue,
                            xsBorderRadius: "12px 12px 0px 0px",
                            mdWidth: "152px",
                            lgWidth: "230px"
                        },
                        iconPosition: "top",
                        label: tab.text,
                        ...(0,BlueTabComponent/* a11yProps */.Pf)(index)
                    }, index.toString())
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: valueParentTab,
                index: 0,
                children: mockData/* status */.i7 === "withdraw" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blocks_EmptyComponent, {
                    textButton: t("community:button.empty.go-to-talk-room"),
                    mtButton: {
                        md: "40px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                            children: t("community:empty.withdraw-1")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                            children: t("community:empty.withdraw-2")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                pt: "25px",
                                fontSize: [
                                    "10px",
                                    "14px"
                                ]
                            },
                            children: t("community:empty.withdraw-3")
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    children: mockData/* status */.i7 === "join" && mockData/* tabsCommunity.0.children */.s9[0].children ? /*#__PURE__*/ jsx_runtime_.jsx(ChildTabComponent/* default */.Z, {
                        dataChild: mockData/* tabsCommunity.0.children */.s9[0].children,
                        maxWidth: "75px"
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blocks_EmptyComponent, {
                        textButton: t("community:button.empty.create-post"),
                        handleClick: ()=>router.push("/community/post/create")
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                                children: t("community:empty.no-post")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                                display: [
                                    "none",
                                    "inherit"
                                ],
                                children: t("community:empty.create-post") + t("community:empty.talk-to-members")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                                display: [
                                    "inherit",
                                    "none"
                                ],
                                children: t("community:empty.create-post")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                                display: [
                                    "inherit",
                                    "none"
                                ],
                                children: t("community:empty.talk-to-members")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: valueParentTab,
                index: 1,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blocks_EmptyComponent, {
                    hiddenButton: mockData/* status */.i7 === "join",
                    textButton: t("community:button.empty.talk-to-community"),
                    mtButton: {
                        md: "40px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            children: t("community:empty.withdraw-1")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            children: t("community:empty.withdraw-2")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                pt: "25px",
                                fontSize: [
                                    "10px",
                                    "14px"
                                ]
                            },
                            children: t("community:empty.withdraw-3")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTabComponent/* TabPanel */.x4, {
                value: valueParentTab,
                index: 2,
                children: mockData/* tabsCommunity.2.data.length */.s9[2].data.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pb: "40px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridViewComponent/* default */.Z, {
                            data: mockData/* tabsCommunity.2.data */.s9[2].data
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ChildTabComponent/* PaginationCustom */.G, {
                            count: 4
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blocks_EmptyComponent, {
                    textButton: t("community:button.empty.create-post"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                            children: t("community:empty.no-post")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                            display: [
                                "none",
                                "inherit"
                            ],
                            children: t("community:empty.create-post") + t("community:empty.talk-to-members")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                            display: [
                                "inherit",
                                "none"
                            ],
                            children: t("community:empty.create-post")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TypographyCustom, {
                            display: [
                                "inherit",
                                "none"
                            ],
                            children: t("community:empty.talk-to-members")
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_TabComponent = (TabComponent);

// EXTERNAL MODULE: ./src/components/common/dialog/DialogConfirmWithAvatarComponent.tsx
var DialogConfirmWithAvatarComponent = __webpack_require__(929);
;// CONCATENATED MODULE: ./src/components/community/blocks/BannerComponent.tsx










const ListItem = (0,styles_.styled)("li")({});
const BannerComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const [open, setOpen] = external_react_default().useState(false);
    const handleClickOpen = ()=>setOpen(true)
    ;
    const handleClose = ()=>setOpen(false)
    ;
    const [roleAdminCommunity, setRoleAdminCommunity] = external_react_default().useState(mockData/* isAdminCommunity */.dn);
    const handleClickRoleAdminCommunity = ()=>setRoleAdminCommunity(!roleAdminCommunity)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    mt: "20px",
                    py: [
                        "18px",
                        "40px"
                    ],
                    px: [
                        "17px",
                        0
                    ],
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundImage: [
                        "none",
                        `url("/assets/images/svg/php_bg.svg")`
                    ],
                    backgroundSize: "cover",
                    borderRadius: "12px",
                    border: [
                        `1px solid ${theme/* default.whiteGray */.Z.whiteGray}`,
                        "none"
                    ],
                    height: {
                        xs: "214px",
                        md: "320px"
                    }
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        variant: "square",
                                        sx: {
                                            mb: 0,
                                            width: [
                                                "80px",
                                                "160px"
                                            ],
                                            height: [
                                                "80px",
                                                "160px"
                                            ]
                                        },
                                        src: "/assets/images/svg/php.svg",
                                        onClick: handleClickRoleAdminCommunity
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        sx: {
                                            display: {
                                                xs: roleAdminCommunity && "none",
                                                md: "none"
                                            },
                                            width: "120px",
                                            height: "36px"
                                        },
                                        props: {
                                            bgColor: mockData/* bgColorByStatus */.lw
                                        },
                                        onClick: handleClickOpen,
                                        children: mockData/* status */.i7 === "join" ? t("community:banner.join-SP") : t("community:banner.withdraw-SP")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                        variant: "outlined",
                                        sx: {
                                            display: {
                                                xs: !roleAdminCommunity && "none",
                                                md: "none"
                                            },
                                            width: "120px",
                                            height: "36px",
                                            fontSize: 14,
                                            px: 0
                                        },
                                        props: {
                                            bgColor: "white",
                                            color: theme/* default.blue */.Z.blue,
                                            borderColor: theme/* default.blue */.Z.blue
                                        },
                                        onClick: ()=>router.push(`/community/setting`)
                                        ,
                                        children: t("community:setting.title")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    ml: [
                                        0,
                                        "20px"
                                    ],
                                    height: [
                                        "auto",
                                        "160px"
                                    ],
                                    color: [
                                        theme/* default.navy */.Z.navy,
                                        "white"
                                    ],
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    alignItems: "flex-start"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "span",
                                        sx: {
                                            display: {
                                                xs: "none",
                                                md: "inherit"
                                            },
                                            fontSize: 24,
                                            fontWeight: 700
                                        },
                                        children: mockData/* infoCommunity.name */.b6.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: "flex",
                                            flexDirection: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                component: "span",
                                                sx: {
                                                    mb: "4px",
                                                    display: {
                                                        md: "none"
                                                    },
                                                    fontSize: 16,
                                                    fontWeight: 700
                                                },
                                                children: mockData/* infoCommunity.name */.b6.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                component: "span",
                                                sx: {
                                                    fontSize: [
                                                        8,
                                                        16
                                                    ],
                                                    fontWeight: [
                                                        500,
                                                        700
                                                    ],
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    t("community:banner.count-member"),
                                                    "：",
                                                    mockData/* infoCommunity.count_member */.b6.count_member,
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                        sx: {
                                                            width: [
                                                                "4px",
                                                                "8px"
                                                            ],
                                                            height: [
                                                                "4px",
                                                                "8px"
                                                            ],
                                                            marginLeft: [
                                                                "12px",
                                                                "50px"
                                                            ],
                                                            marginRight: [
                                                                "5px",
                                                                "17px"
                                                            ]
                                                        },
                                                        src: "/assets/images/svg/green_dot.svg"
                                                    }),
                                                    t("community:banner.count-online"),
                                                    "：",
                                                    mockData/* infoCommunity.count_online */.b6.count_online
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                        sx: {
                                            m: 0,
                                            p: 0,
                                            backgroundColor: "transparent",
                                            display: "flex",
                                            flexWrap: "wrap",
                                            listStyle: "none",
                                            boxShadow: "none"
                                        },
                                        component: "ul",
                                        children: mockData/* infoCommunity.chipData.map */.b6.chipData.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                                                sx: {
                                                    ml: 0,
                                                    mr: "2px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    label: data.label,
                                                    sx: {
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: theme/* default.navy */.Z.navy,
                                                        backgroundColor: theme/* default.whiteBlue */.Z.whiteBlue,
                                                        borderRadius: "4px",
                                                        borderColor: "transparent"
                                                    }
                                                })
                                            }, data.key)
                                        )
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                        sx: {
                            display: {
                                xs: "none",
                                md: !roleAdminCommunity && "inherit"
                            }
                        },
                        props: {
                            bgColor: mockData/* bgColorByStatus */.lw
                        },
                        onClick: handleClickOpen,
                        children: mockData/* status */.i7 === "join" ? t("community:banner.join") : t("community:banner.withdraw")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                        variant: "outlined",
                        sx: {
                            display: {
                                xs: "none",
                                md: roleAdminCommunity && "inherit"
                            }
                        },
                        props: {
                            bgColor: "white",
                            color: theme/* default.blue */.Z.blue,
                            borderColor: theme/* default.blue */.Z.blue
                        },
                        onClick: ()=>router.push(`/community/setting`)
                        ,
                        children: t("community:setting.title")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogConfirmWithAvatarComponent/* default */.Z, {
                title: t("community:dialog.confirm"),
                content: t("community:dialog.note"),
                btnLeft: t("community:button.dialog.cancel"),
                btnRight: t("community:button.dialog.withdraw"),
                isShow: open,
                handleClose: handleClose,
                handleCancel: handleClose,
                handleOK: handleClose
            })
        ]
    }));
};
/* harmony default export */ const blocks_BannerComponent = (BannerComponent);

;// CONCATENATED MODULE: ./src/components/community/IndexComponent.tsx












const IndexComponent_TypographyCustom = (0,material_.styled)(material_.Typography)({
    fontSize: 20,
    fontWeight: 700,
    "@media (max-width: 425px)": {
        fontSize: 14,
        marginBottom: "15px"
    }
});
const CommunityComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutComponent/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                textAlign: [
                    "center",
                    "right"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                    variant: "outlined",
                    props: {
                        square: true,
                        color: theme/* default.gray */.Z.gray,
                        height: "40px",
                        borderColor: theme/* default.gray */.Z.gray,
                        dimension: "medium"
                    },
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        variant: "square",
                        sx: {
                            width: "100%",
                            height: "100%"
                        },
                        src: "/assets/images/svg/link_media.svg"
                    }),
                    children: t("community:button.copy-url")
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_BannerComponent, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
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
                            display: {
                                sm: "none"
                            },
                            mb: "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: 16,
                                            fontWeight: 700
                                        },
                                        children: t("community:matching-members")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                        href: "/community/member",
                                        color: "secondary",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                mr: "10px",
                                                color: theme/* default.blue */.Z.blue,
                                                fontSize: 10,
                                                fontWeight: 700
                                            },
                                            children: t("community:button.load-more")
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    pt: "22px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap"
                                },
                                children: mockData/* members.map */.Tq.map((member, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                flex: "0 0 24%"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    variant: "square",
                                                    sx: {
                                                        width: "72px",
                                                        height: "72px"
                                                    },
                                                    src: member.avatar
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    sx: {
                                                        fontSize: "10px",
                                                        fontWeight: 500
                                                    },
                                                    children: member.name
                                                })
                                            ]
                                        })
                                    }, index.toString())
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            position: "relative",
                            mr: {
                                md: "13px"
                            },
                            ml: {
                                md: "25px"
                            },
                            mb: [
                                "40px",
                                0
                            ],
                            width: {
                                md: "80%"
                            },
                            borderRadius: "12px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(blocks_TabComponent, {
                                data: mockData/* tabsCommunity */.s9
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                display: mockData/* status */.i7 === "apply" || mockData/* status */.i7 === "applying" ? "inherit" : "none",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blocks_EmptyComponent, {
                                    hiddenButton: mockData/* status */.i7 === "join",
                                    textButton: t("community:button.empty.apply"),
                                    mtButton: {
                                        xs: "25px",
                                        md: "35px"
                                    },
                                    bgButton: mockData/* bgColorByStatus */.lw,
                                    absolute: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(IndexComponent_TypographyCustom, {
                                            children: t("community:community-is-approved")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(IndexComponent_TypographyCustom, {
                                            display: [
                                                "none",
                                                "inherit"
                                            ],
                                            children: t("community:after-join") + t("community:can-approve")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(IndexComponent_TypographyCustom, {
                                            display: [
                                                "inherit",
                                                "none"
                                            ],
                                            children: t("community:after-join")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(IndexComponent_TypographyCustom, {
                                            display: [
                                                "inherit",
                                                "none"
                                            ],
                                            children: t("community:can-approve")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const IndexComponent = (CommunityComponent);

;// CONCATENATED MODULE: ./pages/community/index.tsx




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
/* harmony default export */ const community = (Community);


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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,460,586,709,95,929,361,568,656], () => (__webpack_exec__(1113)));
module.exports = __webpack_exports__;

})();