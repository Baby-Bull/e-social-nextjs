(() => {
var exports = {};
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 2422:
/***/ ((module) => {

// Exports
module.exports = {
	"modalWrapper": "character_modalWrapper__sUWXx",
	"titleContent": "character_titleContent__olpCe",
	"modalContent": "character_modalContent__uS4wE",
	"modalContentSmall": "character_modalContentSmall__O5dsn",
	"modalBox": "character_modalBox__ga4_8",
	"modalBoxQuestion": "character_modalBoxQuestion__cbAbc",
	"square": "character_square__DnvhA",
	"button": "character_button___7lBx",
	"question_number": "character_question_number__nGUGo",
	"question_number_text": "character_question_number_text__YSV2r",
	"answerButton": "character_answerButton__bhMgB",
	"selected": "character_selected__l2Peu",
	"hint": "character_hint__DrY1E",
	"hintTitle": "character_hintTitle__NA9bu",
	"question": "character_question__wnn1k"
};


/***/ }),

/***/ 1596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ character),
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: ./src/components/character/character.module.scss
var character_module = __webpack_require__(2422);
var character_module_default = /*#__PURE__*/__webpack_require__.n(character_module);
;// CONCATENATED MODULE: external "@mui/styles"
const external_mui_styles_namespaceObject = require("@mui/styles");
;// CONCATENATED MODULE: ./src/components/character/LinerProgressBar.tsx




const CustomProgressBar = (0,external_mui_styles_namespaceObject.withStyles)(()=>(0,external_mui_styles_namespaceObject.createStyles)({
        root: {
            height: 16,
            borderRadius: 11,
            border: "2px solid #03bcdb80"
        },
        colorPrimary: {
            backgroundColor: "#F1F9FA"
        },
        bar: {
            borderRadius: 11,
            backgroundColor: "#03BCDB;",
            padding: 0
        }
    })
)(material_.LinearProgress);
const LinearProgressBar = ({ value , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative",
            margin: "8px",
            width: "100%",
            marginTop: 24
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CustomProgressBar, {
                variant: "determinate",
                value: value,
                ...rest
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                style: {
                    position: "absolute",
                    width: 48,
                    fontSize: 14,
                    textAlign: "center",
                    color: "black",
                    top: -24,
                    left: `calc(${value}% - 24px)`,
                    transition: "all 0.4s linear 0s"
                },
                children: [
                    value,
                    "%"
                ]
            })
        ]
    })
;
/* harmony default export */ const LinerProgressBar = (LinearProgressBar);

;// CONCATENATED MODULE: ./src/components/character/CharacterComponent.tsx








const CharacterComponent = ()=>{
    const [modalNo, setModalNo] = external_react_default().useState(1);
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const BtnSave = (0,styles_.styled)(material_.Button)({
        width: "240px",
        height: "56px",
        marginTop: "80px",
        borderRadius: "28px",
        "@media (max-width: 1200px)": {
            marginBottom: "31px",
            marginTop: "66px"
        }
    });
    const handleSave = ()=>{
        setModalNo(modalNo + 1);
    };
    const handleBack = ()=>{
        setModalNo(modalNo - 1);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentComponent/* default */.Z, {
        children: [
            modalNo === 1 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                open: true,
                closeAfterTransition: true,
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        outline: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Fade, {
                        in: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (character_module_default()).modalWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (character_module_default()).titleContent,
                                    children: t("character:character-diagnosis")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    className: (character_module_default()).modalBox,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).modalContent,
                                            children: t("character:character-description")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).modalContentSmall,
                                            children: t("character:character-description-small")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                    container: true,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            className: (character_module_default()).square,
                                            children: t("character:start1")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            className: (character_module_default()).square,
                                            children: t("character:start2")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            className: (character_module_default()).square,
                                            children: t("character:start3")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            className: (character_module_default()).square,
                                            children: t("character:start4")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            className: (character_module_default()).square,
                                            children: t("character:start5")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            className: (character_module_default()).square,
                                            children: t("character:start6")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BtnSave, {
                                    className: (character_module_default()).button,
                                    sx: {
                                        background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                        fontSize: 16,
                                        color: "#fff",
                                        "&:hover": {
                                            background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)"
                                        }
                                    },
                                    onClick: handleSave,
                                    children: t("character:start-diagnosis")
                                })
                            ]
                        })
                    })
                })
            }),
            modalNo === 2 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                open: true,
                closeAfterTransition: true,
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        outline: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Fade, {
                        in: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (character_module_default()).modalWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (character_module_default()).titleContent,
                                    children: t("character:character-diagnosis")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    className: (character_module_default()).modalBoxQuestion,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).modalContent,
                                            children: t("character:please-select-the-one-that-applies-to-you-from-the-questions")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(LinerProgressBar, {
                                            value: 0
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (character_module_default()).question,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).question_number,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (character_module_default()).question_number_text,
                                                children: "1"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                fontSize: 18
                                            },
                                            children: t("character:question1")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                marginTop: 40,
                                                marginBottom: 49
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    className: (character_module_default()).answerButton,
                                                    onClick: handleSave,
                                                    children: t("character:1-yes")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    className: (character_module_default()).answerButton,
                                                    onClick: handleSave,
                                                    children: t("character:2-no")
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (character_module_default()).hint,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).hintTitle,
                                            children: t("character:hint")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: t("character:hint-content")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: t("character:hint-answer")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            modalNo === 3 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                open: true,
                closeAfterTransition: true,
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        outline: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Fade, {
                        in: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (character_module_default()).modalWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (character_module_default()).titleContent,
                                    children: t("character:character-diagnosis")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    className: (character_module_default()).modalBoxQuestion,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).modalContent,
                                            children: t("character:please-select-the-one-that-applies-to-you-from-the-questions")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(LinerProgressBar, {
                                            value: 48
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (character_module_default()).question,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).question_number,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (character_module_default()).question_number_text,
                                                children: "1"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                fontSize: 18
                                            },
                                            children: t("character:question1")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                marginTop: 40
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    className: (character_module_default()).answerButton,
                                                    onClick: handleSave,
                                                    children: t("character:1-yes")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    className: (character_module_default()).answerButton,
                                                    onClick: handleSave,
                                                    children: t("character:2-no")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(BtnSave, {
                                            sx: {
                                                background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                                fontSize: 16,
                                                color: "#fff",
                                                "&:hover": {
                                                    background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)"
                                                }
                                            },
                                            onClick: handleBack,
                                            children: t("character:to-the-previous-answer")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            modalNo === 4 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                open: true,
                closeAfterTransition: true,
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        outline: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Fade, {
                        in: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (character_module_default()).modalWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (character_module_default()).titleContent,
                                    children: t("character:character-diagnosis")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    className: (character_module_default()).modalBoxQuestion,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (character_module_default()).modalContent,
                                            children: t("character:question-complete")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(LinerProgressBar, {
                                            value: 100
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (character_module_default()).question,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(BtnSave, {
                                        sx: {
                                            background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                                            fontSize: 16,
                                            color: "#fff",
                                            "&:hover": {
                                                background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)"
                                            }
                                        },
                                        children: t("character:view-diagnostic-results")
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const character_CharacterComponent = (CharacterComponent);

;// CONCATENATED MODULE: ./pages/character/index.tsx




const Character = ()=>/*#__PURE__*/ jsx_runtime_.jsx(character_CharacterComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "character"
            ])
        }
    })
;
/* harmony default export */ const character = (Character);


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

/***/ 4802:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633], () => (__webpack_exec__(1596)));
module.exports = __webpack_exports__;

})();