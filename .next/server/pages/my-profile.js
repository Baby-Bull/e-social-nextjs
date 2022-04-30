"use strict";
(() => {
var exports = {};
exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ my_profile),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
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
;// CONCATENATED MODULE: external "chart.js"
const external_chart_js_namespaceObject = require("chart.js");
;// CONCATENATED MODULE: external "react-chartjs-2"
const external_react_chartjs_2_namespaceObject = require("react-chartjs-2");
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/mockDataChartProfile.ts

const labels = [
    "経験年数",
    "適応力",
    "人柄",
    "発信力",
    "年齢",
    "コミュ力",
    "技術力",
    "正確性"
];
const dataChart = [
    1.67,
    5,
    3.35,
    1.67,
    3.35,
    5,
    3.35,
    4
];
const config = {
    plugins: {
        legend: {
            display: false
        }
    },
    elements: {
        point: {
            pointStyle: "dash"
        }
    },
    scales: {
        r: {
            max: 5,
            min: 0,
            ticks: {
                stepSize: 1.67,
                reverse: true,
                backgroundColor: "#fff",
                display: false
            },
            grid: {
                color: theme/* default.blue */.Z.blue,
                lineWidth: [
                    1,
                    1,
                    2
                ]
            },
            pointLabels: {
                color: "#1A2944",
                font: {
                    size: 10
                },
                padding: 20
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/components/profile/my-profile/PopupChartProfileComponent.tsx













external_chart_js_namespaceObject.Chart.register(external_chart_js_namespaceObject.RadialLinearScale, external_chart_js_namespaceObject.PointElement, external_chart_js_namespaceObject.LineElement, external_chart_js_namespaceObject.Filler, external_chart_js_namespaceObject.Tooltip, external_chart_js_namespaceObject.Legend);
/* event change select option */ const DialogChartProfile = (0,styles_.styled)((Dialog_default()))({
    "& .MuiPaper-root": {
        maxWidth: "100%"
    },
    "& .MuiDialog-paper": {
        backgroundColor: `${theme/* default.blue */.Z.blue}`,
        borderRadius: "12px",
        width: "640px",
        margin: 0
    },
    "@media (max-width: 1200px)": {
        "& .MuiDialog-paper": {
            width: "93%"
        }
    }
});
const PopupChartProfileComponent = ({ showPopup , setShowPopup  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const handleClose = ()=>{
        setShowPopup(false);
    };
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataChart,
                backgroundColor: "rgba(3,188,219, 0.3)",
                borderColor: "rgba(3,188,219,0.3)",
                borderWidth: 0
            }, 
        ]
    };
    const options = config;
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            background: "red"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogChartProfile, {
            open: showPopup,
            onClose: handleClose,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "end",
                        m: "10px 10px 0 0",
                        cursor: "pointer"
                    },
                    onClick: handleClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        src: "/assets/images/icon/ic_close_white.png",
                        sx: {
                            width: {
                                xs: "24px",
                                lg: "42px"
                            },
                            height: {
                                xs: "24px",
                                lg: "42px"
                            }
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    id: "alert-dialog-title",
                    sx: {
                        mb: {
                            xs: "33px",
                            lg: "18px"
                        },
                        p: 0
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                fontWeight: 700,
                                fontSize: 20,
                                color: "#fff",
                                sx: {
                                    lineHeight: {
                                        xs: "32px",
                                        lg: "24px"
                                    },
                                    textAlign: "center",
                                    display: {
                                        xs: "none",
                                        lg: "block"
                                    }
                                },
                                children: t("profile:popup.chart.title")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                fontWeight: 700,
                                fontSize: 20,
                                color: "#fff",
                                sx: {
                                    lineHeight: {
                                        xs: "32px",
                                        lg: "24px"
                                    },
                                    textAlign: "center",
                                    display: {
                                        xs: "block",
                                        lg: "none"
                                    }
                                },
                                children: [
                                    t("profile:popup.chart.title-mb1"),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    t("profile:popup.chart.title-mb2")
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                    sx: {
                        p: {
                            xs: "0 27px 40px 27px",
                            lg: "0 80px 40px 80px"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                        id: "alert-dialog-description",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#fff",
                                p: "20px 20px 20px 10px",
                                borderRadius: "50%",
                                boxShadow: "0px 4px 16px rgba(32, 54, 120, 0.14)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        width: "100%",
                                        height: "100%",
                                        position: "relative"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Radar, {
                                        data: data,
                                        options: options
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        position: "absolute",
                                        left: "50%",
                                        transform: "translate(-50%, 0)"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        src: "/assets/images/icon/ic_user_chart.png",
                                        sx: {
                                            width: {
                                                xs: "31px",
                                                lg: "53px"
                                            },
                                            height: {
                                                xs: "31px",
                                                lg: "53px"
                                            }
                                        }
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const my_profile_PopupChartProfileComponent = (PopupChartProfileComponent);

;// CONCATENATED MODULE: ./src/components/profile/my-profile/TopProfileComponent.tsx







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
const TopProfileComponent = ({ review , cumulativMatching , participatingCommunity , lastLogin , myProfile ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: showPopup , 1: setShowPopup  } = (0,external_react_.useState)(false);
    const handleShowPopup = ()=>{
        setShowPopup(true);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            background: "#ffffff",
                                            px: "80px",
                                            pt: "45px",
                                            pb: "78px",
                                            position: "relative"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
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
                                                            src: "/assets/images/profile/avatar.png",
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
                                                                lastLogin,
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
                                                                    children: "佐藤 太郎"
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
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                            sx: {
                                                                mt: "13px",
                                                                display: myProfile ? "none" : "flex"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                                                                    sx: {
                                                                        boxShadow: "unset",
                                                                        width: "280px",
                                                                        height: "48px",
                                                                        background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                                                        borderRadius: "12px",
                                                                        color: "#ffffff",
                                                                        mr: "9.3px"
                                                                    },
                                                                    onClick: handleShowPopup,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: t("profile:character-analysis")
                                                                        }),
                                                                        "111"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/assets/images/icon/ic_question_mark.png",
                                                                        alt: "ic_question_mark"
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
                                                                                    children: review
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
                                                                                    children: cumulativMatching
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
                                                                                    children: participatingCommunity
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
                                        })
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
                                                    src: "/assets/images/profile/avatar.png",
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
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/images/icon/ic_heart.png",
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
                                            children: "佐藤 太郎"
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
                                                lastLogin,
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
                                                            children: review
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
                                                            children: cumulativMatching
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
                                                            children: participatingCommunity
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        mt: "20px",
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            sx: {
                                                boxShadow: "unset",
                                                width: "252px",
                                                height: "36px",
                                                background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                                borderRadius: "12px",
                                                color: "#ffffff",
                                                mr: "7.67px",
                                                fontWeight: 700,
                                                fontSize: "14px"
                                            },
                                            onClick: handleShowPopup,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                children: t("profile:character-analysis")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/icon/ic_question_mark.png",
                                                alt: "ic_question_mark",
                                                width: "16.7"
                                            })
                                        })
                                    ]
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(my_profile_PopupChartProfileComponent, {
                showPopup: showPopup,
                setShowPopup: setShowPopup
            })
        ]
    }));
};
/* harmony default export */ const my_profile_TopProfileComponent = (TopProfileComponent);

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
;// CONCATENATED MODULE: ./src/components/profile/my-profile/ProfileSkillComponent.tsx



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
const ProfileSkillComponent = ({ profileStatus , profileOneThing , profileSelfIntroduction , profileOccupation , profilePosition , profileEmploymentStatus , profileIntroduceYourself , profileAddress , profileTag , ProfileSkillLanguage , ProfileSkillFramework , ProfileSkillInfrastructure , ProfileSkillUpstreamProcess , ProfileSkillEnglishExperience , ProfileSkillLanguageExperience , myProfile ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
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
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        background: "#ffffff",
                        border: "1px solid #03BCDB",
                        borderRadius: "40px",
                        width: "240px",
                        height: "32px",
                        margin: "0 auto",
                        mb: "63px",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#03BCDB",
                        display: myProfile ? "none" : {
                            xs: "none",
                            lg: "flex"
                        },
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/images/icon/ic_heart.png",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                ml: 1
                            },
                            children: t("profile:add-friend")
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
                                                            background: "#FF9458",
                                                            borderRadius: "4px",
                                                            color: "#ffffff",
                                                            fontSize: "10px",
                                                            fontWeight: 700,
                                                            width: "138.13px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        },
                                                        children: profileStatus
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:one-thing")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profileOneThing
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:self-introduction")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profileSelfIntroduction
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:occupation")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profileOccupation
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:position")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profilePosition
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:employment-status")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profileEmploymentStatus
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:introduce-yourself")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profileIntroduceYourself
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:address")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: profileAddress
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
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                sx: {
                                                                    display: "flex"
                                                                },
                                                                children: profileTag?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        sx: {
                                                                            background: "#F4FDFF",
                                                                            fontSize: "12px",
                                                                            mr: 1,
                                                                            px: 1
                                                                        },
                                                                        children: item
                                                                    })
                                                                )
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    mt: 1
                                                                },
                                                                children: profileTag?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                        sx: {
                                                                            background: "#F4FDFF",
                                                                            fontSize: "12px",
                                                                            mr: 1,
                                                                            px: 1
                                                                        },
                                                                        children: item
                                                                    })
                                                                )
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
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:language")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: ProfileSkillLanguage?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                    sx: {
                                                                        display: "flex"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: item.star?.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: star,
                                                                                    alt: "star"
                                                                                })
                                                                            )
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            sx: {
                                                                                mx: 1
                                                                            },
                                                                            children: item.language
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                            children: [
                                                                                item.languageExperience,
                                                                                " ",
                                                                                t("profile:year")
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
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
                                                        children: ProfileSkillFramework?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                    sx: {
                                                                        display: "flex"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            children: item.star?.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: star,
                                                                                    alt: "star"
                                                                                })
                                                                            )
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                            sx: {
                                                                                mx: 1
                                                                            },
                                                                            children: item.language
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                            children: [
                                                                                item.languageExperience,
                                                                                " ",
                                                                                t("profile:year")
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
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
                                                        children: ProfileSkillInfrastructure
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:upstream-process")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: ProfileSkillUpstreamProcess
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:english-experience")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: ProfileSkillEnglishExperience
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContentTab, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContentTab, {
                                                        children: t("profile:language-experience")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTab, {
                                                        children: ProfileSkillLanguageExperience
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
            ]
        })
    }));
};
/* harmony default export */ const my_profile_ProfileSkillComponent = (ProfileSkillComponent);

;// CONCATENATED MODULE: ./src/components/profile/my-profile/BoxNoDataComponent.tsx



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
/* harmony default export */ const my_profile_BoxNoDataComponent = (BoxNoDataComponent);

;// CONCATENATED MODULE: ./src/components/profile/my-profile/BoxRecommendMemberComponent.tsx




const BoxRecommendMemberComponent = ({ recommendMemberName , recommendMemberJob , recommendMemberEvaluate , recommendMemberYouSpeak , recommendMemberTag , img , color , status , background , backgroundBtn , txtBtn , statusLogin ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                mr: "27px"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    width: "320px",
                    background: "#ffffff"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            pt: "20px",
                            px: "20px",
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    background,
                                    borderRadius: "4px",
                                    width: "130px",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    color,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: status
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    color: "#D8D8D8",
                                    textAlign: "right"
                                },
                                children: statusLogin
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            px: "20px",
                            mt: "20px",
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/images/logo/logo_lacoste.png",
                                    alt: "logo_lacoste"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    ml: "13px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            fontSize: "14px",
                                            color: "#262A30",
                                            fontWeight: 700,
                                            mb: "6px"
                                        },
                                        children: recommendMemberName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            fontSize: "12px",
                                            color: "#03BCDB",
                                            mb: "6px"
                                        },
                                        children: recommendMemberJob
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            fontSize: "10px",
                                            color: "#262A30",
                                            mb: "11px"
                                        },
                                        children: [
                                            t("profile:review"),
                                            "：",
                                            recommendMemberEvaluate
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            ml: "40px",
                            mb: "-8px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/images/icon/ic_polygon.png",
                            alt: "ic_polygon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            color: "#1A2944",
                            fontSize: "12px",
                            fontWeight: 700,
                            width: "280px",
                            height: "40px",
                            background: "#F5F5F5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ml: "26px",
                            borderRadius: "12px",
                            lineHeight: "17px"
                        },
                        children: t("profile:title-connect")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            ml: "20px",
                            my: "20px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: "flex",
                                    mb: 1
                                },
                                children: recommendMemberTag?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            background: "#F4FDFF",
                                            fontSize: "12px",
                                            mr: 1,
                                            px: 1
                                        },
                                        children: item
                                    })
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    display: "flex"
                                },
                                children: recommendMemberTag?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            background: "#F4FDFF",
                                            fontSize: "12px",
                                            mr: 1,
                                            px: 1
                                        },
                                        children: item
                                    })
                                )
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
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/images/icon/ic_mess.png",
                                            alt: "ic_mess"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            ml: "7px",
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            lineHeight: "24px"
                                        },
                                        children: t("profile:you-speak")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    mt: "6px",
                                    fontSize: "12px",
                                    lineHeight: "24px"
                                },
                                children: recommendMemberYouSpeak
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            mt: "20px",
                            pb: "24px",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                                sx: {
                                    background: "#F4FDFF",
                                    border: "1px solid #03BCDB",
                                    borderRadius: "40px",
                                    color: "#03BCDB",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    width: "240px",
                                    height: "32px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: img,
                                        alt: "img"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            ml: 1
                                        },
                                        children: t("profile:title-profile")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                sx: {
                                    mt: "24px",
                                    background: backgroundBtn,
                                    borderRadius: "40px",
                                    color: "#FFFFFF",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    width: "280px",
                                    height: "48px"
                                },
                                children: t(txtBtn)
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const my_profile_BoxRecommendMemberComponent = (BoxRecommendMemberComponent);

;// CONCATENATED MODULE: ./src/components/profile/my-profile/mockData.ts
const review = 3;
const cumulativMatching = 123;
const participatingCommunity = 1;
const countParticipatingCommunity = 0;
const countReview = 0;
const lastLogin = 8;
const profileStatus = "今すぐ話せます";
const profileOneThing = "フロントエント、バックグラウンド幅広く経験したいと思います。";
const profileSelfIntroduction = "入社したらフロントエント、バックグラウンド幅広く経験したいと思います。文字数が多い場合は改行をし、その分テキストを表示するエリアを拡大する。";
const profileOccupation = "フロントエンドエンジニア";
const profilePosition = "チームリーダー";
const profileEmploymentStatus = "正社員";
const profileIntroduceYourself = "入社したらフロントエント、バックグラウンド幅広く経験したいと思います。文字数が多い場合は改行をし、その分テキストを表示するエリアを拡大する。";
const profileAddress = "チームリーダー";
const profileTag = [
    "React",
    "PHP勉強中",
    "コードレビュー",
    "駆け出しエンジニアと繋がりたい",
    "要件定義",
    "コードレビュー", 
];
const recommendMember = [
    {
        recommendMemberName: "名前がここに入ります。名前が...",
        recommendMemberJob: "フロントエンドエンジニア",
        recommendMemberEvaluate: 1364,
        recommendMemberYouSpeak: "PHPの技術についてお話しできます。技術交換ができたら嬉しいです。また、新しい技術を習得したいと考えているので、他言語のエンジニアの方とお話しができたらと思っています。！",
        recommendMemberTag: [
            "#タグ",
            "#タグ",
            "#タグタグ",
            "#タグタグ"
        ],
        img: "/assets/images/icon/ic_heart_blue.png",
        color: "#ffffff",
        background: "#FF9458",
        backgroundBtn: "#1BD0B0",
        status: "profile:talk-now",
        txtBtn: "profile:send-request",
        statusLogin: "ログイン中"
    },
    {
        recommendMemberName: "名前がここに入ります。名前が...",
        recommendMemberJob: "フロントエンドエンジニア",
        recommendMemberEvaluate: 1364,
        recommendMemberYouSpeak: "PHPの技術についてお話しできます。技術交換ができたら嬉しいです。また、新しい技術を習得したいと考えているので、他言語のエンジニアの方とお話しができたらと思っています。！",
        recommendMemberTag: [
            "#タグ",
            "#タグ",
            "#タグタグ",
            "#タグタグ"
        ],
        img: "/assets/images/icon/ic_heart.png",
        color: "#1A2944",
        background: "#FFF9E5",
        backgroundBtn: "#1BD0B0",
        status: "profile:find-friend",
        txtBtn: "profile:send-request",
        statusLogin: "ログイン：6分前"
    },
    {
        recommendMemberName: "名前がここに入ります。名前が...",
        recommendMemberJob: "フロントエンドエンジニア",
        recommendMemberEvaluate: 1364,
        recommendMemberYouSpeak: "PHPの技術についてお話しできます。技術交換ができたら嬉しいです。また、新しい技術を習得したいと考えているので、他言語のエンジニアの方とお話しができたらと思っています。！",
        recommendMemberTag: [
            "#タグ",
            "#タグ",
            "#タグタグ",
            "#タグタグ"
        ],
        img: "/assets/images/icon/ic_heart.png",
        color: "#ffffff",
        background: "#03BCDB",
        backgroundBtn: "#989EA8",
        status: "profile:consult-me",
        txtBtn: "profile:send-complete",
        statusLogin: "ログイン：6分前"
    },
    {
        recommendMemberName: "名前がここに入ります。名前が...",
        recommendMemberJob: "フロントエンドエンジニア",
        recommendMemberEvaluate: 1364,
        recommendMemberYouSpeak: "PHPの技術についてお話しできます。技術交換ができたら嬉しいです。また、新しい技術を習得したいと考えているので、他言語のエンジニアの方とお話しができたらと思っています。！",
        recommendMemberTag: [
            "#タグ",
            "#タグ",
            "#タグタグ",
            "#タグタグ"
        ],
        img: "/assets/images/icon/ic_heart_blue.png",
        color: "#ffffff",
        background: "#FF9458",
        backgroundBtn: "#1BD0B0",
        status: "profile:talk-now",
        txtBtn: "profile:send-request",
        statusLogin: "ログイン中"
    }, 
];
const contentReview = [
    {
        statusLogin: false,
        statusReview: true,
        content: [
            "この度はありがとうございました！自分の中にある、考えなどを改めて言語化した上で相談させて頂きトライすること、ストーリーを話せることがとても大事なんだなと思いました。",
            "いろいろご指導いただき、未経験で無事転職する事が出来ました。", 
        ],
        avatar: "/assets/images/rectangle.png",
        time: "2021年8月27日にレビュー"
    },
    {
        statusLogin: true,
        statusReview: false,
        content: [],
        avatar: "/assets/images/avatar_user.png",
        time: "2021年8月27日にレビュー"
    },
    {
        statusLogin: false,
        statusReview: true,
        content: [
            "一言で表現すると、これまで受けてきたWeb制作スクールとは全く異なるものでした。",
            "具体的には、初回カウンセリングで、どの程度のスキルなのか、今後のゴール設定をすり合わせていただき十分に理解をしてもらえました。",
            "カリキュラム主導ではなく、メンタリングとある通り、その人の方向性をすり合わせてもらえるイメージです。",
            "課題についても、その人のスキルに合わせて「ひょっとして出来るかも」というギリギリ手の届く範囲で出題してもらえるため、挫折せず学習にのめり込むことができます。",
            "どうしてもわからない箇所がある場合には、チャットで質問すると「お忙しい方なのになぜ？」と感じるほど、遅くても翌日には返信があり、アドバイスをしてもらえました。",
            "アドバイスも悩みに的確で、、",
            "遅くても翌日には返信があり、アドバイスをしてもらえました。アドバイスも悩みに的確で、、遅くても翌日には返信があり、アドバイスをしてもらえました。アドバイスも悩みに的確で、、", 
        ],
        avatar: "/assets/images/rectangle.png",
        time: "2021年8月27日にレビュー"
    }, 
];
const participatingCommunityData = [
    {
        img: "/assets/images/participating_community/rectangle1.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_0wIHsm2_1fc.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_1LLh8k2_YFk.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_BVi74hFpZfc.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_eCktzGjC-iU.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_FdyzI_X38Yw.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_v8XaVfyo41Q.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    },
    {
        img: "/assets/images/participating_community/unsplash_Z9EndocqZGE.png",
        communityName: "コミュニティの名前がここに入ります。最大文字数40文字です。コミ...",
        numberParticipants: 0
    }, 
];
const ProfileSkillLanguage = [
    {
        language: "Java",
        languageExperience: 10,
        star: [
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/star.png", 
        ]
    },
    {
        language: "React",
        languageExperience: 10,
        star: [
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/empty_star.png",
            "/assets/images/empty_star.png", 
        ]
    },
    {
        language: "Java",
        languageExperience: 10,
        star: [
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/empty_star.png",
            "/assets/images/empty_star.png", 
        ]
    }, 
];
const ProfileSkillFramework = [
    {
        language: "HTML/CSS",
        languageExperience: 10,
        star: [
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/star.png",
            "/assets/images/empty_star.png",
            "/assets/images/empty_star.png", 
        ]
    }, 
];
const ProfileSkillInfrastructure = "";
const ProfileSkillUpstreamProcess = "前職では5人規模のプロジェクトマネジメントを行なっていました。";
const ProfileSkillEnglishExperience = "ネイティブ";
const ProfileSkillLanguageExperience = "";

;// CONCATENATED MODULE: ./src/components/profile/my-profile/MyProfileComponent.tsx










const MyProfileComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentComponent/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    p: {
                        xs: "0 20px",
                        lg: "70px 120px 120px 120px"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(my_profile_TopProfileComponent, {
                        review: review,
                        cumulativMatching: cumulativMatching,
                        participatingCommunity: participatingCommunity,
                        lastLogin: lastLogin,
                        myProfile: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(my_profile_ProfileSkillComponent, {
                        profileStatus: profileStatus,
                        profileOneThing: profileOneThing,
                        profileSelfIntroduction: profileSelfIntroduction,
                        profileOccupation: profileOccupation,
                        profilePosition: profilePosition,
                        profileEmploymentStatus: profileEmploymentStatus,
                        profileIntroduceYourself: profileIntroduceYourself,
                        profileAddress: profileAddress,
                        profileTag: profileTag,
                        ProfileSkillLanguage: ProfileSkillLanguage,
                        ProfileSkillFramework: ProfileSkillFramework,
                        ProfileSkillInfrastructure: ProfileSkillInfrastructure,
                        ProfileSkillUpstreamProcess: ProfileSkillUpstreamProcess,
                        ProfileSkillEnglishExperience: ProfileSkillEnglishExperience,
                        ProfileSkillLanguageExperience: ProfileSkillLanguageExperience,
                        myProfile: true
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                children: [
                                    t("profile:title-participating-community"),
                                    " (",
                                    countParticipatingCommunity,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(my_profile_BoxNoDataComponent, {
                                content: t("profile:participating-community-no-data")
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
                            countReview,
                            "）",
                            /*#__PURE__*/ jsx_runtime_.jsx(my_profile_BoxNoDataComponent, {
                                content: t("profile:review-no-data")
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
                        children: recommendMember.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(my_profile_BoxRecommendMemberComponent, {
                                img: item.img,
                                color: item.color,
                                background: item.background,
                                backgroundBtn: item.backgroundBtn,
                                recommendMemberName: item.recommendMemberName,
                                recommendMemberJob: item.recommendMemberJob,
                                recommendMemberEvaluate: item.recommendMemberEvaluate,
                                recommendMemberYouSpeak: item.recommendMemberYouSpeak,
                                recommendMemberTag: item.recommendMemberTag,
                                status: item.status,
                                txtBtn: item.txtBtn,
                                statusLogin: item.statusLogin
                            })
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const my_profile_MyProfileComponent = (MyProfileComponent);

;// CONCATENATED MODULE: ./pages/my-profile/index.tsx




const MyProfile = ()=>/*#__PURE__*/ jsx_runtime_.jsx(my_profile_MyProfileComponent, {})
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
/* harmony default export */ const my_profile = (MyProfile);


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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633], () => (__webpack_exec__(100)));
module.exports = __webpack_exports__;

})();