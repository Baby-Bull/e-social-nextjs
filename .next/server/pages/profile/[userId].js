(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 998:
/***/ ((module) => {

// Exports
module.exports = {
	"boxItemUser": "profile_boxItemUser__7oV3k",
	"boxItemRecommend": "profile_boxItemRecommend__T5v9A"
};


/***/ }),

/***/ 6798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _userId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/components/constants/constants.ts
var constants = __webpack_require__(1583);
;// CONCATENATED MODULE: ./src/components/profile/ProfileSkillComponent.tsx



// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies


// eslint-disable-next-line import/no-extraneous-dependencies



const BoxContentTab = (0,styles_.styled)(material_.Box)`
  display: flex;
  margin-bottom: 35px;
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
    width: 65.38%;
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
const ImgStar = ({ countStar  })=>{
    const rows = [];
    for(let i = 0; i < countStar; i++){
        rows.push("/assets/images/star.png");
    }
    for(let i1 = 0; i1 < 5 - countStar; i1++){
        rows.push("/assets/images/empty_star.png");
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            display: "flex"
        },
        children: rows?.map((value, key)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: value,
                    alt: "star"
                })
            }, key)
        )
    }));
};
const ProfileSkillComponent = ({ data  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const FRAMEWORK = "framework";
    const INFRASTRUCTURE = "infrastructure";
    const LANGUAGE = "programLanguage";
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                background: {
                    xs: "unset",
                    lg: "#ffffff"
                },
                p: {
                    xs: "0",
                    lg: "20px 80px 78px 80px"
                },
                m: {
                    xs: "40px 0",
                    lg: "0"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
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
                                p: "37px 42px"
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
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    sx: {
                                                        background: constants/* USER_STATUS */.iy[data?.status]?.bg,
                                                        borderRadius: "4px",
                                                        color: constants/* USER_STATUS */.iy[data?.status]?.color,
                                                        fontSize: "10px",
                                                        fontWeight: 700,
                                                        width: "138.13px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    },
                                                    children: constants/* USER_STATUS */.iy[data?.status]?.label
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:one-thing")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.hitokoto
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:self-introduction")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.self_description
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:occupation")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.job
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:position")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.job_position
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:employment-status")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.employment_status
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:introduce-yourself")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.discussion_topic
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:address")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.address
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:tag")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            display: "flex"
                                                        },
                                                        children: data?.tags?.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                sx: {
                                                                    background: "#F4FDFF",
                                                                    fontSize: "12px",
                                                                    mr: 1,
                                                                    px: 1
                                                                },
                                                                children: item
                                                            }, key)
                                                        )
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                    value: 1,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:language")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.skills?.code_skills?.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                display: item.category === LANGUAGE ? "flex" : "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                        countStar: item?.level
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    sx: {
                                                                        mx: 1
                                                                    },
                                                                    children: item?.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                    children: [
                                                                        item.experience_year,
                                                                        " ",
                                                                        t("profile:year")
                                                                    ]
                                                                })
                                                            ]
                                                        }, key)
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:framework")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.skills?.code_skills?.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                display: item.category === FRAMEWORK ? "flex" : "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                        countStar: item?.level
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    sx: {
                                                                        mx: 1
                                                                    },
                                                                    children: item?.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                    children: [
                                                                        item.experience_year,
                                                                        " ",
                                                                        t("profile:year")
                                                                    ]
                                                                })
                                                            ]
                                                        }, key)
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:infrastructure")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.skills?.code_skills?.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                display: item.category === INFRASTRUCTURE ? "flex" : "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImgStar, {
                                                                        countStar: item?.level
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    sx: {
                                                                        mx: 1
                                                                    },
                                                                    children: item?.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                    children: [
                                                                        item.experience_year,
                                                                        " ",
                                                                        t("profile:year")
                                                                    ]
                                                                })
                                                            ]
                                                        }, key)
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:upstream-process")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.skills?.upstream_process
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:english-experience")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.skills?.english_level
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                    children: t("profile:language-experience")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                    children: data?.skills?.other_language_level
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const profile_ProfileSkillComponent = (ProfileSkillComponent);

;// CONCATENATED MODULE: ./src/components/profile/ReviewComponent.tsx




const ReviewComponent = ({ user , rating , comment  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const GOOD = "good";
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                mt: "40px",
                display: {
                    xs: "block",
                    lg: "flex"
                }
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        alignItems: {
                            xs: "center",
                            lg: "top"
                        },
                        display: {
                            xs: "flex",
                            lg: "block"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            component: "img",
                            sx: {
                                width: {
                                    xs: "32px",
                                    lg: "56px"
                                },
                                borderRadius: "50%"
                            },
                            alt: "avatar",
                            src: user.profile_image
                        }),
                        rating ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                color: "#1A2944",
                                fontSize: "16px",
                                lineHeight: "23.17px",
                                fontWeight: 700,
                                display: {
                                    xs: "block",
                                    lg: "none"
                                },
                                ml: {
                                    xs: "7px",
                                    lg: "0"
                                }
                            },
                            children: "おじろ＠フルスタックエンジニア"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                color: "#989EA8",
                                fontSize: "16px",
                                lineHeight: "23.17px",
                                fontWeight: 700,
                                display: {
                                    xs: "block",
                                    lg: "none"
                                },
                                ml: {
                                    xs: "7px",
                                    lg: "0"
                                }
                            },
                            children: t("profile:anonymous")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            p: {
                                xs: "15px 12px 19px 12px",
                                lg: "16px 20px"
                            },
                            border: "1px solid #03BCDB",
                            borderRadius: "12px",
                            background: "#FFFFFF",
                            ml: {
                                xs: "0",
                                lg: "31px"
                            },
                            mt: {
                                xs: "19px",
                                lg: "0"
                            },
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    position: "absolute",
                                    left: "-18px",
                                    top: "10px",
                                    display: {
                                        xs: "none",
                                        lg: "block"
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/images/icon/ic_polygon_left.png",
                                    alt: "ic_polygon_left"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    position: "absolute",
                                    left: "10px",
                                    top: "-17px",
                                    display: {
                                        xs: "block",
                                        lg: "none"
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/images/icon/ic_polygon_top.png",
                                    alt: "ic_polygon_top"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: {
                                        xs: "row-reverse",
                                        lg: "unset"
                                    },
                                    justifyContent: {
                                        xs: "left"
                                    }
                                },
                                children: [
                                    rating ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            color: "#1A2944",
                                            fontSize: "16px",
                                            lineHeight: "23.17px",
                                            fontWeight: 700,
                                            display: {
                                                xs: "none",
                                                lg: "block"
                                            }
                                        },
                                        children: user.username
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            color: "#989EA8",
                                            fontSize: "16px",
                                            lineHeight: "23.17px",
                                            fontWeight: 700,
                                            display: {
                                                xs: "none",
                                                lg: "block"
                                            }
                                        },
                                        children: t("profile:anonymous")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            color: rating === GOOD ? "#FF9458" : "#03BCDB",
                                            fontSize: "16px",
                                            lineHeight: "23px",
                                            fontWeight: 700,
                                            display: "flex",
                                            marginLeft: "20px",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    mr: "5.63px",
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: rating === GOOD ? "/assets/images/icon/ic_very_good.png" : "/assets/images/icon/ic_very_bad.png",
                                                    alt: "ic_rating"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                children: rating === GOOD ? t("profile:it-good") : t("profile:it-bad")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            color: "#989EA8",
                                            fontSize: "14px",
                                            lineHeight: "20.27px",
                                            marginLeft: "20px",
                                            fontWeight: 400
                                        },
                                        children: "2021年8月27日にレビュー"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    LineHeight: "23.17px",
                                    mt: "11px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    children: comment
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const profile_ReviewComponent = (ReviewComponent);

;// CONCATENATED MODULE: ./src/components/profile/ParticipatingCommunityComponent.tsx





const ParticipatingCommunityComponent = ({ communities  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            width: "100%",
            background: "#ffffff",
            p: "20px 20px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            container: true,
            children: communities?.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    lg: 3,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            textAlign: "center",
                            p: "20px 40px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: item.profile_image,
                                alt: "rectangle"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    fontWeight: 700,
                                    lineHeight: "20,27px",
                                    fontSize: "14px",
                                    color: theme/* default.black */.Z.black
                                },
                                children: item.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                sx: {
                                    lineHeight: "14,48px",
                                    fontSize: "10px",
                                    color: theme/* default.blue */.Z.blue
                                },
                                children: [
                                    t("profile:number-participants"),
                                    ":",
                                    item.member_count,
                                    " ",
                                    t("profile:man")
                                ]
                            })
                        ]
                    })
                }, key)
            )
        })
    }));
};
/* harmony default export */ const profile_ParticipatingCommunityComponent = (ParticipatingCommunityComponent);

// EXTERNAL MODULE: ./src/services/user.ts
var services_user = __webpack_require__(1727);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "moment/locale/ja"
var ja_ = __webpack_require__(3122);
// EXTERNAL MODULE: ./src/components/profile/profile.module.scss
var profile_module = __webpack_require__(998);
var profile_module_default = /*#__PURE__*/__webpack_require__.n(profile_module);
// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
// EXTERNAL MODULE: ./src/components/home/blocks/ModalMatchingComponent.tsx + 1 modules
var ModalMatchingComponent = __webpack_require__(8151);
// EXTERNAL MODULE: ./src/services/matching.ts
var matching = __webpack_require__(1144);
// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(699);
;// CONCATENATED MODULE: ./src/components/profile/BoxItemUserComponent.tsx





// eslint-disable-next-line import/order











const BoxItemUserComponent = ({ data , callbackHandleIsRefresh , isRefresh  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const [showModalMatching, setModalMatching] = external_react_default().useState(false);
    const { 0: liked , 1: setLiked  } = (0,external_react_.useState)(data?.is_favorite);
    const { auth , dispatch  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const handleShowModalMatching = (matchStatus)=>{
        // handleShowModalMatching
        if (!matchStatus) {
            setModalMatching(true);
        } else if (matchStatus === "confirmed") {
            router.push("/chat/personal");
        } else {
            return 1;
        }
    };
    const handleSendMatchingRequest = async (matchingRequest)=>{
        const res = await (0,matching/* sendMatchingRequest */.XV)(data?.id, matchingRequest);
        setModalMatching(false);
        callbackHandleIsRefresh(!isRefresh);
        return res;
    };
    const handleMapMatchingStatus = (statusMatchingTemp)=>{
        switch(statusMatchingTemp){
            case "pending":
                return 1;
            case "confirmed":
                return 2;
            case "rejected":
                return 3;
            default:
                return 4;
        }
    };
    const handleFavoriteAnUser = (isFavorite, tempData)=>{
        if (isFavorite) (0,services_user/* deleteUserFavorite */.Sh)(tempData);
        else (0,services_user/* addUserFavorite */.dy)(tempData);
    };
    const handleClickFavoriteButton = ()=>{
        handleFavoriteAnUser(liked, data?.id);
        if (liked) dispatch({
            type: "REMOVE_FAVORITE",
            payload: auth
        });
        else dispatch({
            type: "ADD_FAVORITE",
            payload: auth
        });
        setLiked(!liked);
    };
    const handleClickToProfile = ()=>{
        router.push(`/profile/${data.id}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                item: true,
                xs: 12,
                className: external_classnames_default()((profile_module_default()).boxItemUser),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    className: (profile_module_default()).boxItemRecommend,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            onClick: handleClickToProfile,
                            sx: {
                                cursor: "pointer"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "status-summary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                            mode: constants/* USER_SEARCH_STATUS */.Tj[data?.status]?.mode,
                                            size: "small",
                                            style: {
                                                borderRadius: "4px",
                                                width: "130px"
                                            },
                                            children: constants/* USER_SEARCH_STATUS */.Tj[data?.status]?.label
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "label-login-status",
                                            children: data?.last_login_at ? (0,utils/* replaceLabelByTranslate */.q)(t("home:box-member-recommend.last-login"), external_moment_default()(data?.last_login_at).utc().fromNow()) : t("home:box-member-recommend.no-login")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info-summary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: data?.profile_image,
                                            alt: "img-member"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "member-info",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "name",
                                                    children: data?.username
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "career",
                                                    children: constants/* JOBS */.WN[data?.job_position]?.label
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "review",
                                                    children: [
                                                        t("home:box-member-recommend.review"),
                                                        ": ",
                                                        data?.review_count
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "introduce",
                                    children: data?.self_description ? data?.self_description : "情報なし"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tags",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: data?.tags?.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: tag
                                            }, index)
                                        )
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "label-description",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: "",
                                            src: "/assets/images/home_page/ic_chat.svg"
                                        }),
                                        t("home:box-member-recommend.label-description")
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "description",
                                    children: data?.discussion_topic
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "div-review",
                            onClick: handleClickFavoriteButton,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "ic-like",
                                    src: liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: t("user-search:btn-add-favorite")
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                            fullWidth: true,
                            sx: {
                                width: "278px"
                            },
                            onClick: ()=>handleShowModalMatching(data?.match_status)
                            ,
                            mode: constants/* HOMEPAGE_RECOMMEND_MEMBER_STATUS */.JV[handleMapMatchingStatus(data?.match_status)]?.mode,
                            children: constants/* HOMEPAGE_RECOMMEND_MEMBER_STATUS */.JV[handleMapMatchingStatus(data?.match_status)]?.label
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalMatchingComponent/* default */.Z, {
                userRequestMatching: data,
                open: showModalMatching,
                setOpen: setModalMatching,
                handleSendMatchingRequest: handleSendMatchingRequest
            })
        ]
    }));
};
/* harmony default export */ const profile_BoxItemUserComponent = (BoxItemUserComponent);

;// CONCATENATED MODULE: ./src/components/profile/BoxNoDataComponent.tsx



const BoxNoDataComponent = ({ content  })=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            item: true,
            xs: 12,
            sm: 12,
            lg: 12,
            xl: 12,
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: "100%",
                    height: [
                        "163px",
                        "163px",
                        "163px",
                        "240px"
                    ],
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: [
                        "16px",
                        "16px",
                        "16px",
                        "18px"
                    ],
                    fontWeight: 400
                },
                children: content
            })
        })
    })
;
/* harmony default export */ const profile_BoxNoDataComponent = (BoxNoDataComponent);

;// CONCATENATED MODULE: ./src/components/profile/TopProfileComponent.tsx










const BoxInfoProfile = (0,styles_.styled)(material_.Box)`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 12px;
  width: 240px;
  height: 64px;
  justify-content: space-between;
  padding: 0 12px;
  color: ${theme/* default.navy */.Z.navy};
  font-size: 16px;
  margin-right: 20px;
`;
const TopProfileComponent = ({ user , myProfile  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: liked , 1: setLiked  } = (0,external_react_.useState)(user?.is_favorite);
    const { auth , dispatch  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const handleFavoriteAnUser = (isFavorite, tempData)=>{
        if (isFavorite) (0,services_user/* deleteUserFavorite */.Sh)(tempData);
        else (0,services_user/* addUserFavorite */.dy)(tempData);
    };
    const handleClickFavoriteButton = ()=>{
        handleFavoriteAnUser(liked, user?.id);
        if (liked) dispatch({
            type: "REMOVE_FAVORITE",
            payload: auth
        });
        else dispatch({
            type: "ADD_FAVORITE",
            payload: auth
        });
        setLiked(!liked);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    xs: 12,
                    sm: 12,
                    lg: 12,
                    xl: 12,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                display: myProfile ? {
                                    xs: "block",
                                    lg: "none"
                                } : "none"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                sx: {
                                    background: theme/* default.blue */.Z.blue,
                                    width: "100%",
                                    borderRadius: "12px",
                                    mt: "28px",
                                    color: "#fff",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    lineHeight: "24px"
                                },
                                children: t("profile:profile-editing")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                display: {
                                    xs: "none",
                                    lg: "block"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        textAlign: "right",
                                        mb: 1,
                                        display: myProfile ? "none" : "inherit"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        sx: {
                                            background: "#ffffff",
                                            color: "#989EA8",
                                            boxShadow: "unset",
                                            border: "1px solid #989EA8",
                                            width: "240px",
                                            height: "40px",
                                            fontSize: "14px"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                textAlign: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/images/icon/ic_link.png",
                                                    alt: "",
                                                    width: "20",
                                                    height: "22"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    sx: {
                                                        ml: 2
                                                    },
                                                    children: t("profile:url")
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        mb: "22px",
                                        display: myProfile ? "flex" : "none",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            sx: {
                                                background: "#ffffff",
                                                boxShadow: "unset",
                                                border: "1px solid #55ACEE",
                                                color: "#55ACEE",
                                                width: "240px",
                                                height: "40px",
                                                fontSize: "14px"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    textAlign: "center",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/images/icon/ic_twitter.png",
                                                        alt: "",
                                                        width: "18",
                                                        height: "13.71"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            ml: 1
                                                        },
                                                        children: t("profile:twitter")
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            sx: {
                                                background: "#ffffff",
                                                boxShadow: "unset",
                                                border: "1px solid #395185",
                                                color: "#395185",
                                                width: "240px",
                                                height: "40px",
                                                mx: "40px",
                                                fontSize: "14px"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    textAlign: "center",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/images/icon/ic_facebook.png",
                                                        alt: "",
                                                        width: "16",
                                                        height: "15.74"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            ml: 1
                                                        },
                                                        children: t("profile:facebook")
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            sx: {
                                                background: "#ffffff",
                                                color: "#989EA8",
                                                boxShadow: "unset",
                                                border: "1px solid #989EA8",
                                                width: "240px",
                                                height: "40px"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/images/icon/ic_link.png",
                                                        alt: "",
                                                        width: "20",
                                                        height: "22"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            ml: 1
                                                        },
                                                        children: t("profile:url")
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        background: "#ffffff",
                                        px: "80px",
                                        pt: "45px",
                                        pb: "78px",
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                borderBottom: "2px solid #E6E6E6",
                                                pb: "20px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                    sx: {
                                                        textAlign: "center",
                                                        color: "#D8D8D8",
                                                        fontWeight: 700,
                                                        fontSize: "14px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                            alt: "Remy Sharp",
                                                            src: user?.profile_image,
                                                            sx: {
                                                                width: "160px",
                                                                height: "160px"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                display: myProfile ? "none" : "block"
                                                            },
                                                            children: [
                                                                t("profile:login"),
                                                                "：",
                                                                external_moment_default()(user?.last_login_at).utc().fromNow(),
                                                                " ",
                                                                t("profile:minutes-ago")
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                            sx: {
                                                                display: myProfile ? "block" : "none"
                                                            },
                                                            children: t("profile:login-2")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                    sx: {
                                                        ml: "20px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    sx: {
                                                                        fontSize: "32px",
                                                                        fontWeight: 700,
                                                                        color: "#1A2944"
                                                                    },
                                                                    children: user?.username
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                    sx: {
                                                                        ml: "24px",
                                                                        display: "flex"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/assets/images/icon/ic_twitter.png",
                                                                                alt: "ic_twitter"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            sx: {
                                                                                mx: "20px"
                                                                            },
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/assets/images/icon/ic_facebook.png",
                                                                                alt: "ic_facebook"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/assets/images/icon/ic_github.png",
                                                                                alt: "ic_git"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    sx: {
                                                                        position: "absolute",
                                                                        right: 22,
                                                                        top: 34,
                                                                        display: myProfile ? {
                                                                            xs: "none",
                                                                            lg: "block"
                                                                        } : "none"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                                                        href: "/my-profile/edit",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                                                                            sx: {
                                                                                background: theme/* default.blue */.Z.blue,
                                                                                color: "#fff",
                                                                                fontWeight: 700,
                                                                                lineHeight: "23.17",
                                                                                width: "96px",
                                                                                height: "40px",
                                                                                dispaly: "flex",
                                                                                alignItems: "center",
                                                                                "&:hover": {
                                                                                    background: theme/* default.blue */.Z.blue
                                                                                }
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "/assets/images/icon/ic_edit.png",
                                                                                    alt: "ic_edit"
                                                                                }),
                                                                                t("profile:edit")
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                            sx: {
                                                                mt: "13px",
                                                                display: myProfile ? "flex" : "none",
                                                                position: "relative"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                                                                sx: {
                                                                    boxShadow: "unset",
                                                                    width: "280px",
                                                                    height: "48px",
                                                                    background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                                                    borderRadius: "12px",
                                                                    color: "#ffffff",
                                                                    mr: "9.3px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        children: "佐藤太郎さんのキャラクター"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        sx: {
                                                                            position: "absolute",
                                                                            top: 1,
                                                                            right: 7
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/assets/images/icon/ic_question_2.png",
                                                                            alt: "ic_question_mark"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                display: "flex",
                                                                mt: "30px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxInfoProfile, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: t("profile:review")
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                            sx: {
                                                                                display: "flex",
                                                                                alignItems: "center"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                    sx: {
                                                                                        fontSize: "32px",
                                                                                        fontWeight: 700
                                                                                    },
                                                                                    children: user?.review_count ?? 0
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                    children: "件"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxInfoProfile, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: t("profile:cumulativ-matching")
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                            sx: {
                                                                                display: "flex",
                                                                                alignItems: "center"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                    sx: {
                                                                                        fontSize: "32px",
                                                                                        fontWeight: 700
                                                                                    },
                                                                                    children: user?.match_count ?? 0
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                    children: "人"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxInfoProfile, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                            children: [
                                                                                t("profile:participating-community1"),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                                t("profile:participating-community2")
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                            sx: {
                                                                                display: "flex",
                                                                                alignItems: "center"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                    sx: {
                                                                                        fontSize: "32px",
                                                                                        fontWeight: 700
                                                                                    },
                                                                                    children: user?.community_count ?? 0
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                    children: "つ"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                textAlign: "center",
                                                background: "#F4FDFF",
                                                color: "#03BCDB",
                                                border: "1px solid #03BCDB",
                                                width: "240px",
                                                height: "32px",
                                                borderRadius: "40px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0 auto",
                                                marginTop: "24px",
                                                cursor: "pointer"
                                            },
                                            onClick: handleClickFavoriteButton,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    src: liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg",
                                                    alt: "ic_heart",
                                                    sx: {
                                                        width: "16.67px",
                                                        height: "14.17px",
                                                        marginRight: "5px"
                                                    }
                                                }),
                                                " ",
                                                "話したい人リストに登録"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    sm: 12,
                    lg: 12,
                    xl: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: [
                                "block",
                                "block",
                                "block",
                                "none"
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    background: "#ffffff",
                                    border: "1px solid rgba(196, 196, 196, 0.4)",
                                    boxSizing: "border-box",
                                    borderRadius: "12px",
                                    mt: "68px"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "center",
                                            mt: "-40px",
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                alt: "Remy Sharp",
                                                src: user?.profile_image,
                                                sx: {
                                                    width: "80px",
                                                    height: "80px"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    position: "absolute",
                                                    top: 51,
                                                    right: 10,
                                                    display: myProfile ? "none" : "block"
                                                },
                                                onClick: handleClickFavoriteButton,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg",
                                                    alt: "ic_heart"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            color: "#1A2944",
                                            lineHeight: "23px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            mt: 2
                                        },
                                        children: user?.username
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            color: "#C4C4C4",
                                            lineHeight: "14px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            mt: 1,
                                            mb: 2,
                                            fontSize: "10px"
                                        },
                                        children: [
                                            external_moment_default()(user?.last_login_at).utc().fromNow(),
                                            t("profile:minutes-ago")
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            borderTop: "1px solid rgba(196, 196, 196, 0.4)",
                                            display: "flex",
                                            height: "64px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    width: "33%",
                                                    mt: "12px",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            color: "#1A2944",
                                                            lineheight: "12px",
                                                            fontSize: "8px"
                                                        },
                                                        children: t("profile:review")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            color: "#1A2944",
                                                            lineheight: "29px",
                                                            fontSize: "20px",
                                                            fontWeight: 500
                                                        },
                                                        children: user?.review_count ?? 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    width: "34%",
                                                    borderLeft: "1px solid rgba(196, 196, 196, 0.4)",
                                                    borderRight: "1px solid rgba(196, 196, 196, 0.4)",
                                                    mt: "12px",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            color: "#1A2944",
                                                            lineheight: "12px",
                                                            fontSize: "8px"
                                                        },
                                                        children: t("profile:cumulativ-matching")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            color: "#1A2944",
                                                            lineheight: "29px",
                                                            fontSize: "20px",
                                                            fontWeight: 500
                                                        },
                                                        children: user?.match_count ?? 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    width: "33%",
                                                    mt: "12px",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            color: "#1A2944",
                                                            lineheight: "12px",
                                                            fontSize: "8px"
                                                        },
                                                        children: [
                                                            t("profile:participating-community1"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            t("profile:participating-community2")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        sx: {
                                                            color: "#1A2944",
                                                            lineheight: "29px",
                                                            fontSize: "20px",
                                                            fontWeight: 500
                                                        },
                                                        children: user?.community_count ?? 0
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    background: "#ffffff",
                                    mx: "20px",
                                    border: "1px solid rgba(196, 196, 196, 0.4)",
                                    boxSizing: "border-box",
                                    borderRadius: "12px",
                                    mt: "11px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        display: "flex",
                                        height: "40px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                width: "33%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/icon/ic_twitter.png",
                                                alt: "ic_twitter",
                                                width: "17.5"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                width: "34%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderLeft: "1px solid rgba(196, 196, 196, 0.4)",
                                                borderRight: "1px solid rgba(196, 196, 196, 0.4)"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/icon/ic_facebook.png",
                                                alt: "ic_facebook",
                                                width: "17.5"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                width: "33%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/icon/ic_github.png",
                                                alt: "ic_git",
                                                width: "17.5"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: myProfile ? "none" : "flex",
                                    justifyContent: "center",
                                    mt: "40px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    sx: {
                                        background: "#ffffff",
                                        color: "#989EA8",
                                        boxShadow: "unset",
                                        border: "1px solid #989EA8",
                                        width: "240px",
                                        height: "40px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: "flex",
                                            textAlign: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/icon/ic_link.png",
                                                alt: "",
                                                width: "20",
                                                height: "22"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                sx: {
                                                    ml: 2
                                                },
                                                children: t("profile:url")
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: myProfile ? "flex" : "none",
                                    justifyContent: "center",
                                    mt: "40px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        sx: {
                                            background: "#ffffff",
                                            color: "#55ACEE",
                                            boxShadow: "unset",
                                            border: "1px solid #55ACEE",
                                            width: "28.57%",
                                            height: "40px"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                textAlign: "center",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/images/icon/ic_twitter.png",
                                                    alt: "",
                                                    width: "18",
                                                    height: "13.94"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    sx: {
                                                        ml: 1,
                                                        fontSite: "14px"
                                                    },
                                                    children: t("profile:share")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        sx: {
                                            background: "#ffffff",
                                            color: "#395185",
                                            boxShadow: "unset",
                                            border: "1px solid #395185",
                                            width: "28.57%",
                                            height: "40px",
                                            mx: "24px"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                textAlign: "center",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/images/icon/ic_facebook.png",
                                                    alt: "",
                                                    width: "16",
                                                    height: "16"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    sx: {
                                                        ml: 1,
                                                        fontSize: "14px"
                                                    },
                                                    children: t("profile:share")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        sx: {
                                            background: "#ffffff",
                                            color: "#989EA8",
                                            boxShadow: "unset",
                                            border: "1px solid #989EA8",
                                            width: "28.57%",
                                            height: "40px",
                                            fontSize: "14px"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            sx: {
                                                display: "flex",
                                                textAlign: "center",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/assets/images/icon/ic_link.png",
                                                    alt: "",
                                                    width: "20",
                                                    height: "22"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    sx: {
                                                        ml: 1,
                                                        fontSize: "14px"
                                                    },
                                                    children: t("profile:copy")
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const profile_TopProfileComponent = (TopProfileComponent);

;// CONCATENATED MODULE: ./src/components/profile/ProfileComponent.tsx
















const ProfileHaveDataComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const LIMIT = 20;
    const { 0: profileSkill , 1: setProfileSkill  } = (0,external_react_.useState)([]);
    const { 0: communities , 1: setCommunities  } = (0,external_react_.useState)([]);
    const { 0: reviews , 1: setReviews  } = (0,external_react_.useState)([]);
    const { 0: recommended , 1: setRecommended  } = (0,external_react_.useState)([]);
    const { 0: isRefresh , 1: setIsRefresh  } = (0,external_react_.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const [showModalMatching, setModalMatching] = external_react_default().useState(false);
    const router = (0,router_.useRouter)();
    const { userId  } = router.query;
    const fetchProfileSkill = async ()=>{
        setIsLoading(true);
        const data = await (0,services_user/* getOrtherUserProfile */.zU)(userId);
        setProfileSkill(data);
        setIsLoading(false);
        return data;
    };
    const fetchCommunities = async ()=>{
        setIsLoading(true);
        const data = await (0,services_user/* getUserCommunites */.Kx)(userId);
        setCommunities(data?.items);
        setIsLoading(false);
        return data;
    };
    const fetchUserReviews = async ()=>{
        setIsLoading(true);
        const data = await (0,services_user/* getUserReviews */.Dy)(userId);
        setReviews(data?.items);
        setIsLoading(false);
        return data;
    };
    const fetchRecommended = async ()=>{
        setIsLoading(true);
        const data = await (0,services_user/* getUserRecommended */.uV)(LIMIT);
        setRecommended(data?.items);
        setIsLoading(false);
        return data;
    };
    const callbackHandleIsRefresh = (status)=>{
        setIsRefresh(status);
    };
    const handleSendMatchingRequest = async (matchingRequest)=>{
        const res = await (0,matching/* sendMatchingRequest */.XV)(userId, matchingRequest);
        setModalMatching(false);
        setIsRefresh(!isRefresh);
        return res;
    };
    (0,external_react_.useEffect)(()=>{
        fetchProfileSkill();
        fetchUserReviews();
        fetchCommunities();
        fetchRecommended();
    }, [
        isRefresh
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentComponent/* default */.Z, {
        children: [
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(material_.Backdrop, {
                sx: {
                    color: "#fff",
                    zIndex: ()=>theme/* default.zIndex.drawer */.Z.zIndex.drawer + 1
                },
                open: isLoading,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
                    color: "inherit"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    p: {
                        xs: "0 20px",
                        lg: "140px 120px 120px 120px"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(profile_TopProfileComponent, {
                        user: profileSkill,
                        myProfile: false
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(profile_ProfileSkillComponent, {
                        data: profileSkill
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            mt: "40px",
                            mb: 3,
                            color: "#1A2944",
                            fontSize: {
                                xs: "16px",
                                lg: "24px"
                            },
                            fontWeight: 700
                        },
                        children: [
                            t("profile:title-participating-community"),
                            " (",
                            communities?.length ?? 0,
                            ")",
                            communities?.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(profile_ParticipatingCommunityComponent, {
                                communities: communities
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(profile_BoxNoDataComponent, {
                                content: "まだレビューがありません"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            mt: "40px",
                            mb: 3,
                            color: "#1A2944",
                            fontSize: {
                                xs: "16px",
                                lg: "24px"
                            },
                            fontWeight: 700
                        },
                        children: [
                            t("profile:title-review"),
                            "（",
                            reviews?.length ?? 0,
                            "）",
                            reviews?.length > 0 ? reviews?.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(profile_ReviewComponent, {
                                    user: item.user,
                                    rating: item.rating,
                                    comment: item.comment
                                }, key)
                            ) : /*#__PURE__*/ jsx_runtime_.jsx(profile_BoxNoDataComponent, {
                                content: "まだレビューがありません"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            color: "#1A2944",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "35px",
                            mb: "40px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: t("profile:title-recommen-member")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: "flex",
                            ml: {
                                xs: "20px",
                                lg: "38px"
                            },
                            mr: {
                                xs: "0",
                                lg: "11px"
                            },
                            mb: {
                                xs: "120px",
                                lg: "160px"
                            },
                            justifyContent: {
                                xs: "unset",
                                lg: "center"
                            },
                            overflowX: {
                                xs: "scroll",
                                lg: "unset"
                            }
                        },
                        children: recommended?.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                sx: {
                                    margin: "0 13.5px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(profile_BoxItemUserComponent, {
                                    data: item,
                                    isRefresh: isRefresh,
                                    callbackHandleIsRefresh: callbackHandleIsRefresh
                                })
                            }, key)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    background: "#F5F5F5",
                    display: "flex",
                    justifyContent: "center",
                    position: "fixed",
                    top: "91.5%",
                    opacity: 0.8,
                    width: "100%"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    sx: {
                        width: "280px",
                        height: "56px",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        lineHeight: "24px",
                        background: "#1BD0B0",
                        borderRadius: "40px"
                    },
                    onClick: ()=>setModalMatching(true)
                    ,
                    children: t("profile:send-request")
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalMatchingComponent/* default */.Z, {
                userRequestMatching: profileSkill,
                open: showModalMatching,
                setOpen: setModalMatching,
                handleSendMatchingRequest: handleSendMatchingRequest
            })
        ]
    }));
};
/* harmony default export */ const ProfileComponent = (ProfileHaveDataComponent);

;// CONCATENATED MODULE: ./pages/profile/[userId].tsx




const sampleUserId = "624cf8551b8a720009e2e1db";
const Profile = ()=>/*#__PURE__*/ jsx_runtime_.jsx(ProfileComponent, {})
;
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    userId: sampleUserId
                }
            }
        ],
        fallback: true
    };
}
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "profile",
                "user-search",
                "home"
            ])
        }
    })
;
/* harmony default export */ const _userId_ = (Profile);


/***/ }),

/***/ 5793:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/TabPanelUnstyled");

/***/ }),

/***/ 3478:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/TabUnstyled");

/***/ }),

/***/ 3140:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/TabsListUnstyled");

/***/ }),

/***/ 5742:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/TabsUnstyled");

/***/ }),

/***/ 6715:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/AdapterDateFns");

/***/ }),

/***/ 2089:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/DatePicker");

/***/ }),

/***/ 9904:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/LocalizationProvider");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 5168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8855:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ 8125:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2574:
/***/ ((module) => {

"use strict";
module.exports = require("base-64");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 5564:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 3122:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/ja");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,493,944,893,581,356], () => (__webpack_exec__(6798)));
module.exports = __webpack_exports__;

})();