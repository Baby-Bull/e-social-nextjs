"use strict";
exports.id = 95;
exports.ids = [95];
exports.modules = {

/***/ 5095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ PaginationCustom),
  "Z": () => (/* binding */ blocks_ChildTabComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/components/common/Tab/BlueChildTabComponent.tsx
var BlueChildTabComponent = __webpack_require__(3709);
;// CONCATENATED MODULE: ./src/components/common/ListViewComponent.tsx





const ListViewComponent = ({ data , props  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            py: [
                "10px",
                "20px"
            ],
            pl: props?.pl,
            pr: props?.pr,
            borderTop: `1px solid ${theme/* default.lightGray */.Z.lightGray}`
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                component: "span",
                sx: {
                    display: {
                        sm: "none"
                    },
                    fontSize: [
                        12,
                        16
                    ],
                    fontWeight: 700
                },
                children: data.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    mt: [
                        "5px",
                        "0"
                    ]
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        variant: "square",
                        sx: {
                            width: [
                                "24px",
                                "64px"
                            ],
                            height: "100%"
                        },
                        src: data.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ml: [
                                "8px",
                                "18px"
                            ],
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
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
                                        16
                                    ],
                                    fontWeight: 700,
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: theme/* default.blue */.Z.blue,
                                        textDecoration: "underline"
                                    }
                                },
                                onClick: ()=>router.push(`/community/post/detail`)
                                ,
                                children: data.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "span",
                                        fontSize: 12,
                                        children: data.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "span",
                                        sx: {
                                            mx: [
                                                "12px",
                                                "30px"
                                            ],
                                            fontSize: 12,
                                            color: theme/* default.gray */.Z.gray
                                        },
                                        children: data.last_login
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/images/svg/message.svg",
                                        alt: "message"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "span",
                                        sx: {
                                            ml: "4px",
                                            fontSize: 12,
                                            color: theme/* default.gray */.Z.gray
                                        },
                                        children: data.count_message
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
/* harmony default export */ const common_ListViewComponent = (ListViewComponent);

// EXTERNAL MODULE: ./src/components/common/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(8460);
;// CONCATENATED MODULE: ./src/components/community/blocks/ChildTabComponent.tsx










const PaginationCustom = (0,styles_.styled)(material_.Pagination)({
    "& .MuiButtonBase-root": {
        "&.MuiPaginationItem-previousNext.Mui-disabled": {
            display: "none"
        },
        "&.Mui-selected": {
            color: "white",
            backgroundColor: theme/* default.blue */.Z.blue,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: theme/* default.blue */.Z.blue,
                opacity: 0.8
            }
        }
    },
    "& .MuiPaginationItem-root": {
        color: theme/* default.blue */.Z.blue,
        fontWeight: 700,
        marginRight: "5px",
        "&:not(.MuiPaginationItem-previousNext)": {},
        "&:hover": {
            opacity: 0.5
        }
    }
});
const ChildTabComponent = ({ dataChild , maxWidth  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const [valueChildTab, setValueChildTab] = external_react_default().useState(0);
    const onChangeChildTab = (event, newValue)=>{
        setValueChildTab(newValue);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            border: [
                `1px solid ${theme/* default.blue */.Z.blue}`,
                `2px solid ${theme/* default.whiteGray */.Z.whiteGray}`
            ],
            borderRadius: "0 0 12px 12px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    my: [
                        "20px",
                        0
                    ],
                    display: "flex",
                    flexDirection: [
                        "column-reverse",
                        "row"
                    ],
                    alignItems: "center",
                    justifyContent: [
                        "center",
                        "space-between"
                    ]
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
                        variant: "fullWidth",
                        value: valueChildTab,
                        onChange: onChangeChildTab,
                        "aria-label": "tab children",
                        sx: {
                            mx: {
                                sm: "40px"
                            },
                            mt: {
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
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    mdWidth: maxWidth
                                },
                                iconPosition: "top",
                                label: tab.text,
                                ...(0,BlueChildTabComponent/* a11yProps */.Pf)(index)
                            }, index.toString())
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                        props: {
                            mode: "gradient",
                            dimension: "tiny"
                        },
                        sx: {
                            height: "36px",
                            mr: "26px",
                            "@media (max-width: 425px)": {
                                fontSize: "12px"
                            }
                        },
                        onClick: ()=>router.push("/community/post/create")
                        ,
                        children: t("community:button.create-post")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BlueChildTabComponent/* TabPanel */.x4, {
                value: valueChildTab,
                index: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            borderBottom: `1px solid ${theme/* default.lightGray */.Z.lightGray}`
                        },
                        children: dataChild[0]?.data?.length && dataChild[0]?.data.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(common_ListViewComponent, {
                                        data: tab,
                                        props: {
                                            pl: [
                                                "10px",
                                                "42px"
                                            ],
                                            pr: [
                                                "10px",
                                                "19px"
                                            ]
                                        }
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
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationCustom, {
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
                        children: dataChild[1]?.data?.length && dataChild[1]?.data.map((tab, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(common_ListViewComponent, {
                                        data: tab,
                                        props: {
                                            pl: [
                                                "10px",
                                                "42px"
                                            ],
                                            pr: [
                                                "10px",
                                                "19px"
                                            ]
                                        }
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
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationCustom, {
                                count: 4
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const blocks_ChildTabComponent = (ChildTabComponent);


/***/ })

};
;