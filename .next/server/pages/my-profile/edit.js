"use strict";
(() => {
var exports = {};
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 9760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit),
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
// EXTERNAL MODULE: external "@mui/base/TabsUnstyled"
var TabsUnstyled_ = __webpack_require__(5742);
var TabsUnstyled_default = /*#__PURE__*/__webpack_require__.n(TabsUnstyled_);
// EXTERNAL MODULE: external "@mui/base/TabsListUnstyled"
var TabsListUnstyled_ = __webpack_require__(3140);
var TabsListUnstyled_default = /*#__PURE__*/__webpack_require__.n(TabsListUnstyled_);
// EXTERNAL MODULE: external "@mui/base/TabPanelUnstyled"
var TabPanelUnstyled_ = __webpack_require__(5793);
var TabPanelUnstyled_default = /*#__PURE__*/__webpack_require__.n(TabPanelUnstyled_);
// EXTERNAL MODULE: external "@mui/base/TabUnstyled"
var TabUnstyled_ = __webpack_require__(3478);
var TabUnstyled_default = /*#__PURE__*/__webpack_require__.n(TabUnstyled_);
;// CONCATENATED MODULE: external "@mui/material/TextField"
const TextField_namespaceObject = require("@mui/material/TextField");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/TextareaAutosize"
var TextareaAutosize_ = __webpack_require__(8383);
var TextareaAutosize_default = /*#__PURE__*/__webpack_require__.n(TextareaAutosize_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(1493);
;// CONCATENATED MODULE: ./src/components/profile/form/ProfileSkillEditComponent.tsx



/* eslint-disable */ 



/* eslint-enable */ 







const BoxContentTab = (0,styles_.styled)(material_.Box)`
  display: flex;
  margin-bottom: 43px;
  color: ${theme/* default.navy */.Z.navy};
  ${(props)=>props.theme.breakpoints.up("xs")
} {
    display: block;
  }

  ${(props)=>props.theme.breakpoints.up("lg")
} {
    display: flex;
  }
`;
const TitleContentTab = (0,styles_.styled)(material_.Box)`
  width: 238px;
  font-size: 18px;
  font-weight: 700;
  ${(props)=>props.theme.breakpoints.up("xs")
} {
    font-size: 16px;
  }

  ${(props)=>props.theme.breakpoints.up("lg")
} {
    font-size: 18px;
  }
`;
const ContentTab = (0,styles_.styled)(material_.Box)`
  width: 680px;
  ${(props)=>props.theme.breakpoints.up("xs")
} {
    font-size: 14px;
    width: 100%;
  }

  ${(props)=>props.theme.breakpoints.up("lg")
} {
    font-size: 16px;
    width: 73%;
  }
`;
const Tab = (0,styles_.styled)((TabUnstyled_default()))`
  color: ${theme/* default.blue */.Z.blue};
  cursor: pointer;
  font-size: 20px;
  line-height: 29px;
  font-weight: bold;
  background-color: #fff;
  width: 240px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  border: 1px solid #03bcdb;
  border-radius: 12px 12px 0 0;
  border-bottom: none !important;
  height: 56px;

  &.${TabUnstyled_.tabUnstyledClasses.selected} {
    background-color: ${theme/* default.blue */.Z.blue};
    color: #fff;
  }
`;
const TabPanel = (0,styles_.styled)((TabPanelUnstyled_default()))`
  width: 100%;
`;
const TabsList = (0,styles_.styled)((TabsListUnstyled_default()))`
  min-width: 320px;
  display: flex;
  align-items: center;
`;
const TypoProfile = (0,styles_.styled)(material_.Typography)`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  margin-bottom: 26px;
`;
const TypoProfileMobile = (0,styles_.styled)(material_.Typography)({
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "20.27px",
    "@media (min-width: 1200px)": {
        display: "none"
    }
});
const Field = (0,styles_.styled)((TextField_default()))({
    width: "100%",
    "& fieldset": {
        border: "none"
    },
    "&:placeholder": {
        color: "red"
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "#F4FDFF",
        fontSize: 16,
        padding: "9px 16px",
        borderRadius: "6px",
        fontFamily: "Noto Sans JP",
        "@media (max-width: 1200px)": {
            fontSize: 14
        },
        "&:focus": {
            boxShadow: `${theme/* default.blue */.Z.blue} 0 0 0 0.1rem`,
            borderColor: theme/* default.blue */.Z.blue
        }
    }
});
const FieldTextArea = (0,styles_.styled)((TextareaAutosize_default()))({
    width: "100%",
    border: "none",
    backgroundColor: "#F4FDFF",
    fontSize: 16,
    padding: "9px 16px",
    borderRadius: "6px",
    "&:placeholder": {
        color: theme/* default.gray */.Z.gray
    },
    "@media (max-width: 1200px)": {
        fontSize: 14
    }
});
const SelectCustom = (0,styles_.styled)(material_.Select)({
    borderRadius: 6,
    width: "46%",
    height: "40px",
    color: theme/* default.gray */.Z.gray,
    "& fieldset": {
        border: "none"
    },
    borderColor: theme/* default.whiteBlue */.Z.whiteBlue,
    "&:hover": {
        borderRadius: 6,
        borderColor: theme/* default.whiteBlue */.Z.whiteBlue
    },
    "@media (max-width: 1200px)": {
        width: "100%"
    },
    "& .MuiSelect-select": {
        position: "relative",
        backgroundColor: `${theme/* default.whiteBlue */.Z.whiteBlue}`,
        border: `1px solid ${theme/* default.whiteBlue */.Z.whiteBlue}`,
        fontSize: 16,
        padding: "9px 16px",
        borderRadius: 6,
        fontFamily: "Noto Sans",
        "@media (max-width: 1200px)": {
            fontSize: 14
        },
        "&:focus": {
            boxShadow: `${theme/* default.blue */.Z.blue} 0 0 0 0.1rem`,
            borderColor: theme/* default.blue */.Z.blue
        }
    }
});
const ImgStar = (0,styles_.styled)(material_.Avatar)({
    width: "13px",
    height: "15px"
});
const BoxEstimatedStar = (0,styles_.styled)(material_.Box)({
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1200px)": {
        display: "none"
    }
});
const TypoxEstimatedStar = (0,styles_.styled)(material_.Typography)({
    fontSize: "14px",
    textDecorationLine: "underline",
    marginLeft: "10px"
});
const ListItem = (0,styles_.styled)("li")({
    marginRight: "6px"
});
const ProfileSkillComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const currencies = [
        {
            value: "",
            label: t("profile:form.placeholder.please-select")
        },
        {
            value: "EUR",
            label: "€"
        },
        {
            value: "BTC",
            label: "฿"
        },
        {
            value: "JPY",
            label: "\xa5"
        }, 
    ];
    const levels = [
        {
            label: "触れた程度",
            value: "触れた程度",
            stars: [
                "/assets/images/star.png"
            ]
        },
        {
            label: "独学で経験あり",
            value: "独学で経験あり",
            stars: [
                "/assets/images/star.png",
                "/assets/images/star.png"
            ]
        },
        {
            label: "他者に補助を受けながらコーディングが可能",
            value: "他者に補助を受けながらコーディングが可能",
            stars: [
                "/assets/images/star.png",
                "/assets/images/star.png",
                "/assets/images/star.png"
            ]
        },
        {
            label: "独力でコーディング可能",
            value: "独力でコーディング可能",
            stars: [
                "/assets/images/star.png",
                "/assets/images/star.png",
                "/assets/images/star.png",
                "/assets/images/star.png", 
            ]
        },
        {
            label: "他者のコードをレビュー可能",
            value: "他者のコードをレビュー可能",
            stars: [
                "/assets/images/star.png",
                "/assets/images/star.png",
                "/assets/images/star.png",
                "/assets/images/star.png",
                "/assets/images/star.png", 
            ]
        }, 
    ];
    const [currency, setCurrency] = external_react_default().useState(currencies[0].label);
    const [monthLanguage, setMonthLanguage] = external_react_default().useState(constants/* MONTHS.3.value */.gg[3].value);
    const [levelLanguage, setLevelLanguage] = external_react_default().useState(levels[4].value);
    const [monthFramework, setMonthFramework] = external_react_default().useState(constants/* MONTHS.3.value */.gg[3].value);
    const [levelFramework, setLevelFramework] = external_react_default().useState(levels[4].value);
    const [monthInfrastructure, setMonthInfrastructure] = external_react_default().useState(constants/* MONTHS.3.value */.gg[3].value);
    const [levelInfrastructure, setLevelInfrastructure] = external_react_default().useState(levels[4].value);
    /* event change select option */ const handleChange = (event)=>{
        setCurrency(event.target.value);
    };
    const handleChangeMonthLanguage = (event)=>{
        setMonthLanguage(event.target.value);
    };
    const handleChangeLevelLanguage = (event)=>{
        setLevelLanguage(event.target.value);
    };
    const handleChangeMonthFramework = (event)=>{
        setMonthFramework(event.target.value);
    };
    const handleChangeLevelFramework = (event)=>{
        setLevelFramework(event.target.value);
    };
    const handleChangeMonthInfrastructure = (event)=>{
        setMonthInfrastructure(event.target.value);
    };
    const handleChangeLevelInfrastructure = (event)=>{
        setLevelInfrastructure(event.target.value);
    };
    const [chipData, setChipData] = external_react_default().useState([
        {
            key: 0,
            label: "デザイナー"
        },
        {
            key: 1,
            label: "エンジニア"
        },
        {
            key: 2,
            label: "デザイナー"
        },
        {
            key: 3,
            label: "エンジニア"
        }, 
    ]);
    const [skillLanguageData, setSkillLanguage] = external_react_default().useState([
        {
            key: 0,
            language: "Java",
            year: 12,
            month: 3
        }
    ]);
    const [skillFrameworkData, setSkillFramework] = external_react_default().useState([
        {
            key: 0,
            language: "Java",
            year: 12,
            month: 3
        }
    ]);
    const [skillInfrastructureData, setSkillInfrastructure] = external_react_default().useState([
        {
            key: 0,
            language: "Java",
            year: 12,
            month: 3
        }, 
    ]);
    /* Delete item */ const handleDelete = (chipToDelete)=>()=>{
            setChipData((chips)=>chips.filter((chip)=>chip.key !== chipToDelete.key
                )
            );
        }
    ;
    const handleDeleteSkillLanguage = (SkillLanguageToDelete)=>()=>{
            setSkillLanguage((languages)=>languages.filter((language)=>language.key !== SkillLanguageToDelete.key
                )
            );
        }
    ;
    const handleDeleteSkillFramework = (SkillFrameworkToDelete)=>()=>{
            setSkillFramework((frameworks)=>frameworks.filter((framework)=>framework.key !== SkillFrameworkToDelete.key
                )
            );
        }
    ;
    const handleDeleteSkillInfrastructure = (SkillInfrastructureToDelete)=>()=>{
            setSkillInfrastructure((infrastructures)=>infrastructures.filter((infrastructure)=>infrastructure.key !== SkillInfrastructureToDelete.key
                )
            );
        }
    ;
    /* Click add item item */ const addSkillLanguageClick = (key)=>()=>{
            // @ts-ignore
            setSkillLanguage([
                ...skillLanguageData,
                {
                    key: key + 1,
                    language: "",
                    year: "",
                    month: ""
                }
            ]);
        }
    ;
    const addSkillFrameworkClick = (key)=>()=>{
            // @ts-ignore
            setSkillFramework([
                ...skillFrameworkData,
                {
                    key: key + 1,
                    language: "",
                    year: "",
                    month: ""
                }
            ]);
        }
    ;
    const addSkillInfrastructureClick = (key)=>()=>{
            // @ts-ignore
            setSkillInfrastructure([
                ...skillInfrastructureData,
                {
                    key: key + 1,
                    language: "",
                    year: "",
                    month: ""
                }
            ]);
        }
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(ContentComponent/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                p: {
                    xs: "80px 20px",
                    lg: "80px 120px"
                },
                background: "#F4FDFF"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                item: true,
                xs: 12,
                sm: 12,
                lg: 12,
                xl: 12,
                sx: {
                    position: {
                        xs: "relative",
                        lg: "unset"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        background: {
                            xs: "unset",
                            lg: "#ffffff"
                        },
                        p: {
                            xs: "0",
                            lg: "40px 80px 78px 80px"
                        },
                        m: {
                            xs: "40px 0",
                            lg: "0"
                        },
                        position: {
                            xs: "unset",
                            lg: "relative"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                borderBottom: "2px solid #E6E6E6",
                                mb: "63px",
                                display: {
                                    xs: "block",
                                    lg: "flex"
                                },
                                background: {
                                    xs: "#fff",
                                    lg: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        position: "relative",
                                        display: {
                                            xs: "flex",
                                            lg: "block"
                                        },
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                            alt: "Remy Sharp",
                                            src: "/assets/images/profile/avatar_2.png",
                                            sx: {
                                                width: {
                                                    xs: "80px",
                                                    lg: "160px"
                                                },
                                                height: {
                                                    xs: "80px",
                                                    lg: "160px"
                                                },
                                                mt: {
                                                    xs: "-40px",
                                                    lg: "0"
                                                },
                                                position: {
                                                    xs: "relative",
                                                    lg: "unset"
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                            alt: "Remy Sharp",
                                            src: "/assets/images/icon/ic_camera.png",
                                            sx: {
                                                width: "23.33px",
                                                height: "21px",
                                                opacity: 0.6,
                                                position: "absolute",
                                                display: {
                                                    xs: "block",
                                                    lg: "none"
                                                },
                                                mt: "10px"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                            sx: {
                                                bgcolor: {
                                                    xs: "transparent",
                                                    lg: theme/* default.navy */.Z.navy
                                                },
                                                position: "absolute",
                                                bottom: 50,
                                                right: 10,
                                                display: {
                                                    xs: "none",
                                                    lg: "flex"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                alt: "Remy Sharp",
                                                src: "/assets/images/icon/ic_camera.png",
                                                sx: {
                                                    width: "20px",
                                                    height: "18px",
                                                    m: "0 auto"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        ml: "27px",
                                        mb: "9px",
                                        display: {
                                            xs: "none",
                                            lg: "block"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfile, {
                                            children: t("profile:name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfile, {
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfile, {
                                            children: "Facebook"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfile, {
                                            children: "GitHub"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        width: {
                                            xs: "100%",
                                            lg: "560px"
                                        },
                                        p: {
                                            xs: "48px 12px 30px 12px",
                                            lg: "0 0 9px 27px"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfileMobile, {
                                            children: t("profile:name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                mb: "12px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                value: "佐藤 太郎"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfileMobile, {
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                mb: "12px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                placeholder: t("profile:form.placeholder.twitter")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfileMobile, {
                                            children: "Facebook"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                mb: "12px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                placeholder: t("profile:form.placeholder.facebook")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TypoProfileMobile, {
                                            children: "GitHub"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                placeholder: t("profile:form.placeholder.github")
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        position: "absolute",
                                        right: {
                                            xs: 0,
                                            lg: 22
                                        },
                                        top: {
                                            xs: "-120px",
                                            lg: "20px"
                                        },
                                        width: {
                                            xs: "100%",
                                            lg: "96px"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                        href: "/my-profile/edit",
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            sx: {
                                                background: theme/* default.blue */.Z.blue,
                                                color: "#fff",
                                                fontWeight: 700,
                                                lineHeight: "23.17",
                                                width: {
                                                    xs: "100%",
                                                    lg: "96px"
                                                },
                                                height: {
                                                    xs: "48px",
                                                    lg: "40px"
                                                },
                                                dispaly: "flex",
                                                alignItems: "center",
                                                borderRadius: {
                                                    xs: "12px",
                                                    lg: "4px"
                                                },
                                                "&:hover": {
                                                    background: theme/* default.blue */.Z.blue
                                                }
                                            },
                                            children: t("profile:form.save")
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                width: "100%"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabsUnstyled_default()), {
                                defaultValue: 0,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabsList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                                                sx: {
                                                    width: {
                                                        xs: "169px",
                                                        lg: "240px"
                                                    },
                                                    height: {
                                                        xs: "45.46px",
                                                        lg: "56px"
                                                    }
                                                },
                                                children: t("profile:profile")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                                                sx: {
                                                    width: {
                                                        xs: "169px",
                                                        lg: "240px"
                                                    },
                                                    height: {
                                                        xs: "45.46px",
                                                        lg: "56px"
                                                    }
                                                },
                                                children: t("profile:skill")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            border: "2px solid #03BCDB",
                                            background: "#fff",
                                            p: {
                                                xs: "40px 12px",
                                                lg: "40px 28px"
                                            },
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                                value: 0,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            display: {
                                                                xs: "block",
                                                                lg: "flex"
                                                            },
                                                            marginBottom: "35px",
                                                            color: "#1A2944"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:status")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                    id: "outlined-select-currency",
                                                                    value: currency,
                                                                    onChange: handleChange,
                                                                    children: currencies.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: option.label,
                                                                            children: option.label
                                                                        }, option.value)
                                                                    )
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:one-thing")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                    placeholder: t("profile:form.placeholder.one-thing")
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:self-introduction")
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTab, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(FieldTextArea, {
                                                                        placeholder: t("profile:form.placeholder.self-introduction"),
                                                                        minRows: 8,
                                                                        sx: {
                                                                            display: {
                                                                                xs: "block",
                                                                                lg: "none"
                                                                            }
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(FieldTextArea, {
                                                                        placeholder: t("profile:form.placeholder.self-introduction"),
                                                                        minRows: 5,
                                                                        sx: {
                                                                            display: {
                                                                                xs: "none",
                                                                                lg: "block"
                                                                            }
                                                                        }
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:occupation")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                    id: "outlined-select-currency",
                                                                    value: currency,
                                                                    onChange: handleChange,
                                                                    children: currencies.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: option.label,
                                                                            children: option.label
                                                                        }, option.value)
                                                                    )
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:position")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                    placeholder: t("profile:form.placeholder.position")
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:employment-status")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                    id: "outlined-select-currency",
                                                                    value: currency,
                                                                    onChange: handleChange,
                                                                    children: currencies.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: option.label,
                                                                            children: option.label
                                                                        }, option.value)
                                                                    )
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:introduce-yourself")
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTab, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(FieldTextArea, {
                                                                        placeholder: t("profile:form.placeholder.self-introduction"),
                                                                        minRows: 8,
                                                                        sx: {
                                                                            display: {
                                                                                xs: "block",
                                                                                lg: "none"
                                                                            }
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(FieldTextArea, {
                                                                        placeholder: t("profile:form.placeholder.self-introduction"),
                                                                        minRows: 5,
                                                                        sx: {
                                                                            display: {
                                                                                xs: "none",
                                                                                lg: "block"
                                                                            }
                                                                        }
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:address")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                    id: "outlined-select-currency",
                                                                    value: currency,
                                                                    onChange: handleChange,
                                                                    children: currencies.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: option.label,
                                                                            children: option.label
                                                                        }, option.value)
                                                                    )
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:tag")
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTab, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                        placeholder: t("profile:form.placeholder.tag")
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                                                        sx: {
                                                                            pl: 0,
                                                                            mt: 1,
                                                                            mb: 5,
                                                                            display: "flex",
                                                                            flexWrap: "wrap",
                                                                            listStyle: "none",
                                                                            boxShadow: "none"
                                                                        },
                                                                        component: "ul",
                                                                        children: chipData.map((data)=>{
                                                                            let icon;
                                                                            return(/*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                                                    icon: icon,
                                                                                    label: data.label,
                                                                                    onDelete: handleDelete(data),
                                                                                    deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                                        sx: {
                                                                                            width: "16px",
                                                                                            height: "16px"
                                                                                        },
                                                                                        src: "/assets/images/svg/delete.svg"
                                                                                    }),
                                                                                    sx: {
                                                                                        pr: 1,
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
                                                                            }, data.key));
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                                value: 1,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            display: {
                                                                xs: "flex",
                                                                lg: "none"
                                                            },
                                                            justifyContent: "end",
                                                            alignItems: "center",
                                                            mb: "30px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                src: "/assets/images/star.png"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                sx: {
                                                                    ml: "10px"
                                                                },
                                                                children: t("profile:form.estimated-star")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleContentTab, {
                                                                children: [
                                                                    t("profile:language"),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxEstimatedStar, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                                src: "/assets/images/star.png"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(TypoxEstimatedStar, {
                                                                                children: t("profile:form.estimated-star")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTab, {
                                                                children: [
                                                                    skillLanguageData.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            sx: {
                                                                                mb: "15px"
                                                                            },
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                sx: {
                                                                                    display: {
                                                                                        xs: "block",
                                                                                        lg: "flex"
                                                                                    }
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                                            placeholder: t("profile:form.placeholder.language"),
                                                                                            value: option.language,
                                                                                            sx: {
                                                                                                width: {
                                                                                                    xs: "100%",
                                                                                                    lg: "160px"
                                                                                                }
                                                                                            }
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                        sx: {
                                                                                            display: "flex",
                                                                                            alignItems: "center",
                                                                                            m: {
                                                                                                xs: "18px 0",
                                                                                                lg: "0 0 0 15px"
                                                                                            }
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                                                placeholder: t("profile:form.placeholder.years-of-experience"),
                                                                                                value: option.year,
                                                                                                sx: {
                                                                                                    width: "80px"
                                                                                                }
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                fontSize: 14,
                                                                                                sx: {
                                                                                                    m: "0 8px"
                                                                                                },
                                                                                                children: t("profile:year")
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                                                id: "outlined-select-month",
                                                                                                value: monthLanguage,
                                                                                                onChange: handleChangeMonthLanguage,
                                                                                                sx: {
                                                                                                    width: {
                                                                                                        xs: "80px",
                                                                                                        lg: "80px"
                                                                                                    }
                                                                                                },
                                                                                                children: constants/* MONTHS.map */.gg.map((monthOption)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                                        value: monthOption.value,
                                                                                                        children: monthOption.label
                                                                                                    }, monthOption.value)
                                                                                                )
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                fontSize: 14,
                                                                                                sx: {
                                                                                                    m: "0 8px"
                                                                                                },
                                                                                                children: t("profile:month")
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                        sx: {
                                                                                            display: "flex"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                sx: {
                                                                                                    width: {
                                                                                                        xs: "78%",
                                                                                                        lg: "241px"
                                                                                                    }
                                                                                                },
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                                                    id: "outlined-select-level",
                                                                                                    value: levelLanguage,
                                                                                                    onChange: handleChangeLevelLanguage,
                                                                                                    sx: {
                                                                                                        width: "100%"
                                                                                                    },
                                                                                                    children: levels.map((levelOption)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                                            value: levelOption.value,
                                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                                                sx: {
                                                                                                                    display: "flex",
                                                                                                                    alignItems: "center"
                                                                                                                },
                                                                                                                children: [
                                                                                                                    levelOption.stars.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                                                                                src: star
                                                                                                                            })
                                                                                                                        })
                                                                                                                    ),
                                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                                        sx: {
                                                                                                                            ml: "7px"
                                                                                                                        },
                                                                                                                        children: levelOption.label
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        }, levelOption.value)
                                                                                                    )
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                                                    sx: {
                                                                                                        color: theme/* default.gray */.Z.gray,
                                                                                                        fontSize: "14px",
                                                                                                        fontWeight: 700,
                                                                                                        lineHeight: "20.27px",
                                                                                                        display: skillLanguageData.length > 1 ? "block" : "none",
                                                                                                        height: "32px",
                                                                                                        p: 0
                                                                                                    },
                                                                                                    onClick: handleDeleteSkillLanguage(option),
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                        sx: {
                                                                                                            height: "32px",
                                                                                                            width: "54px",
                                                                                                            borderRadius: "8px",
                                                                                                            background: {
                                                                                                                xs: "#E4E6EB",
                                                                                                                lg: "unset"
                                                                                                            },
                                                                                                            display: "flex",
                                                                                                            alignItems: "center",
                                                                                                            ml: "20px",
                                                                                                            p: "6px"
                                                                                                        },
                                                                                                        children: t("profile:form.delete")
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, option.key)
                                                                    ),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                            sx: {
                                                                                color: theme/* default.blue */.Z.blue,
                                                                                fontSize: "14px",
                                                                                fontWeight: 700,
                                                                                lineHeight: "20.27px"
                                                                            },
                                                                            onClick: addSkillLanguageClick(skillLanguageData[skillLanguageData.length - 1].key),
                                                                            children: t("profile:form.to-add")
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleContentTab, {
                                                                children: [
                                                                    t("profile:framework"),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxEstimatedStar, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                                src: "/assets/images/star.png"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(TypoxEstimatedStar, {
                                                                                children: t("profile:form.estimated-star")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTab, {
                                                                children: [
                                                                    skillFrameworkData.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            sx: {
                                                                                mb: "15px"
                                                                            },
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                sx: {
                                                                                    display: {
                                                                                        xs: "block",
                                                                                        lg: "flex"
                                                                                    }
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                                            placeholder: t("profile:form.placeholder.language"),
                                                                                            value: option.language,
                                                                                            sx: {
                                                                                                width: {
                                                                                                    xs: "100%",
                                                                                                    lg: "160px"
                                                                                                }
                                                                                            }
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                        sx: {
                                                                                            display: "flex",
                                                                                            alignItems: "center",
                                                                                            m: {
                                                                                                xs: "18px 0",
                                                                                                lg: "0 0 0 15px"
                                                                                            }
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                                                placeholder: t("profile:form.placeholder.years-of-experience"),
                                                                                                value: option.year,
                                                                                                sx: {
                                                                                                    width: "80px"
                                                                                                }
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                fontSize: 14,
                                                                                                sx: {
                                                                                                    m: "0 8px"
                                                                                                },
                                                                                                children: t("profile:year")
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                                                id: "outlined-select-month",
                                                                                                value: monthFramework,
                                                                                                onChange: handleChangeMonthFramework,
                                                                                                sx: {
                                                                                                    width: {
                                                                                                        xs: "80px",
                                                                                                        lg: "80px"
                                                                                                    }
                                                                                                },
                                                                                                children: constants/* MONTHS.map */.gg.map((monthOption)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                                        value: monthOption.value,
                                                                                                        children: monthOption.label
                                                                                                    }, monthOption.value)
                                                                                                )
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                fontSize: 14,
                                                                                                sx: {
                                                                                                    m: "0 8px"
                                                                                                },
                                                                                                children: t("profile:month")
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                        sx: {
                                                                                            display: "flex"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                sx: {
                                                                                                    width: {
                                                                                                        xs: "78%",
                                                                                                        lg: "241px"
                                                                                                    }
                                                                                                },
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                                                    id: "outlined-select-level",
                                                                                                    value: levelFramework,
                                                                                                    onChange: handleChangeLevelFramework,
                                                                                                    sx: {
                                                                                                        width: "100%"
                                                                                                    },
                                                                                                    children: levels.map((levelOption)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                                            value: levelOption.value,
                                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                                                sx: {
                                                                                                                    display: "flex",
                                                                                                                    alignItems: "center"
                                                                                                                },
                                                                                                                children: [
                                                                                                                    levelOption.stars.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                                                                                src: star
                                                                                                                            })
                                                                                                                        })
                                                                                                                    ),
                                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                                        sx: {
                                                                                                                            ml: "7px"
                                                                                                                        },
                                                                                                                        children: levelOption.label
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        }, levelOption.value)
                                                                                                    )
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                                                    sx: {
                                                                                                        color: theme/* default.gray */.Z.gray,
                                                                                                        fontSize: "14px",
                                                                                                        fontWeight: 700,
                                                                                                        lineHeight: "20.27px",
                                                                                                        display: skillFrameworkData.length > 1 ? "block" : "none",
                                                                                                        height: "32px",
                                                                                                        p: 0
                                                                                                    },
                                                                                                    onClick: handleDeleteSkillFramework(option),
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                        sx: {
                                                                                                            height: "32px",
                                                                                                            width: "54px",
                                                                                                            borderRadius: "8px",
                                                                                                            background: {
                                                                                                                xs: "#E4E6EB",
                                                                                                                lg: "unset"
                                                                                                            },
                                                                                                            display: "flex",
                                                                                                            alignItems: "center",
                                                                                                            ml: "20px",
                                                                                                            p: "6px"
                                                                                                        },
                                                                                                        children: t("profile:form.delete")
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, option.key)
                                                                    ),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                            sx: {
                                                                                color: theme/* default.blue */.Z.blue,
                                                                                fontSize: "14px",
                                                                                fontWeight: 700,
                                                                                lineHeight: "20.27px"
                                                                            },
                                                                            onClick: addSkillFrameworkClick(skillFrameworkData[skillFrameworkData.length - 1].key),
                                                                            children: t("profile:form.to-add")
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleContentTab, {
                                                                children: [
                                                                    t("profile:infrastructure"),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxEstimatedStar, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                                src: "/assets/images/star.png"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(TypoxEstimatedStar, {
                                                                                children: t("profile:form.estimated-star")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentTab, {
                                                                children: [
                                                                    skillInfrastructureData.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            sx: {
                                                                                mb: "15px"
                                                                            },
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                sx: {
                                                                                    display: {
                                                                                        xs: "block",
                                                                                        lg: "flex"
                                                                                    }
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                                            placeholder: t("profile:form.placeholder.language"),
                                                                                            value: option.language,
                                                                                            sx: {
                                                                                                width: {
                                                                                                    xs: "100%",
                                                                                                    lg: "160px"
                                                                                                }
                                                                                            }
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                        sx: {
                                                                                            display: "flex",
                                                                                            alignItems: "center",
                                                                                            m: {
                                                                                                xs: "18px 0",
                                                                                                lg: "0 0 0 15px"
                                                                                            }
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                                                placeholder: t("profile:form.placeholder.years-of-experience"),
                                                                                                value: option.year,
                                                                                                sx: {
                                                                                                    width: "80px"
                                                                                                }
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                fontSize: 14,
                                                                                                sx: {
                                                                                                    m: "0 8px"
                                                                                                },
                                                                                                children: t("profile:year")
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                                                id: "outlined-select-month",
                                                                                                value: monthInfrastructure,
                                                                                                onChange: handleChangeMonthInfrastructure,
                                                                                                sx: {
                                                                                                    width: {
                                                                                                        xs: "80px",
                                                                                                        lg: "80px"
                                                                                                    }
                                                                                                },
                                                                                                children: constants/* MONTHS.map */.gg.map((monthOption)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                                        value: monthOption.value,
                                                                                                        children: monthOption.label
                                                                                                    }, monthOption.value)
                                                                                                )
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                fontSize: 14,
                                                                                                sx: {
                                                                                                    m: "0 8px"
                                                                                                },
                                                                                                children: t("profile:month")
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                        sx: {
                                                                                            display: "flex"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                sx: {
                                                                                                    width: {
                                                                                                        xs: "78%",
                                                                                                        lg: "241px"
                                                                                                    }
                                                                                                },
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                                                    id: "outlined-select-level",
                                                                                                    value: levelInfrastructure,
                                                                                                    onChange: handleChangeLevelInfrastructure,
                                                                                                    sx: {
                                                                                                        width: "100%"
                                                                                                    },
                                                                                                    children: levels.map((levelOption)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                                            value: levelOption.value,
                                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                                                sx: {
                                                                                                                    display: "flex",
                                                                                                                    alignItems: "center"
                                                                                                                },
                                                                                                                children: [
                                                                                                                    levelOption.stars.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                                                                                src: star
                                                                                                                            })
                                                                                                                        })
                                                                                                                    ),
                                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                                        sx: {
                                                                                                                            ml: "7px"
                                                                                                                        },
                                                                                                                        children: levelOption.label
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        }, levelOption.value)
                                                                                                    )
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                                                    sx: {
                                                                                                        color: theme/* default.gray */.Z.gray,
                                                                                                        fontSize: "14px",
                                                                                                        fontWeight: 700,
                                                                                                        lineHeight: "20.27px",
                                                                                                        display: skillInfrastructureData.length > 1 ? "block" : "none",
                                                                                                        height: "32px",
                                                                                                        p: 0
                                                                                                    },
                                                                                                    onClick: handleDeleteSkillInfrastructure(option),
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                                        sx: {
                                                                                                            height: "32px",
                                                                                                            width: "54px",
                                                                                                            borderRadius: "8px",
                                                                                                            background: {
                                                                                                                xs: "#E4E6EB",
                                                                                                                lg: "unset"
                                                                                                            },
                                                                                                            display: "flex",
                                                                                                            alignItems: "center",
                                                                                                            ml: "20px",
                                                                                                            p: "6px"
                                                                                                        },
                                                                                                        children: t("profile:form.delete")
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, option.key)
                                                                    ),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                            sx: {
                                                                                color: theme/* default.blue */.Z.blue,
                                                                                fontSize: "14px",
                                                                                fontWeight: 700,
                                                                                lineHeight: "20.27px"
                                                                            },
                                                                            onClick: addSkillInfrastructureClick(skillInfrastructureData[skillInfrastructureData.length - 1].key),
                                                                            children: t("profile:form.to-add")
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:upstream-process")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Field, {
                                                                    placeholder: t("profile:form.placeholder.upstream-process")
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:english-experience")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                                                    id: "outlined-select-currency",
                                                                    value: currency,
                                                                    onChange: handleChange,
                                                                    children: currencies.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: option.label,
                                                                            children: option.label
                                                                        }, option.value)
                                                                    )
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                                children: t("profile:language-experience")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(FieldTextArea, {
                                                                    placeholder: t("profile:form.placeholder.language-experience"),
                                                                    minRows: 5
                                                                })
                                                            })
                                                        ]
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
                                mt: "53px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                    href: "/my-profile",
                                    underline: "none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        sx: {
                                            background: theme/* default.blue */.Z.blue,
                                            borderRadius: "28px",
                                            width: "240px",
                                            "&:hover": {
                                                background: theme/* default.blue */.Z.blue
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            sx: {
                                                color: "#fff",
                                                fontWeight: 700,
                                                fontSize: 20
                                            },
                                            children: t("profile:form.save")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        mt: "40px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                        href: "/my-profile",
                                        sx: {
                                            color: theme/* default.blue */.Z.blue,
                                            textDecoration: "none"
                                        },
                                        children: "編集をやめる"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const ProfileSkillEditComponent = (ProfileSkillComponent);

;// CONCATENATED MODULE: ./pages/my-profile/edit.tsx




const Form = ()=>/*#__PURE__*/ jsx_runtime_.jsx(ProfileSkillEditComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "profile"
            ])
        }
    })
;
/* harmony default export */ const edit = (Form);


/***/ }),

/***/ 5793:
/***/ ((module) => {

module.exports = require("@mui/base/TabPanelUnstyled");

/***/ }),

/***/ 3478:
/***/ ((module) => {

module.exports = require("@mui/base/TabUnstyled");

/***/ }),

/***/ 3140:
/***/ ((module) => {

module.exports = require("@mui/base/TabsListUnstyled");

/***/ }),

/***/ 5742:
/***/ ((module) => {

module.exports = require("@mui/base/TabsUnstyled");

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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,493], () => (__webpack_exec__(9760)));
module.exports = __webpack_exports__;

})();