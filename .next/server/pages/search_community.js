(() => {
var exports = {};
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 5074:
/***/ ((module) => {

// Exports
module.exports = {
	"boxContainer": "search_community_boxContainer__gRXZq",
	"boxSearchLeft": "search_community_boxSearchLeft__Cd9qn",
	"blockInputTag": "search_community_blockInputTag__LWLEL",
	"boxResultSearch": "search_community_boxResultSearch__0NNhF",
	"titleResultSearch": "search_community_titleResultSearch__1dQHr",
	"boxCommunity": "search_community_boxCommunity__wNIaW",
	"boxItemCommunity": "search_community_boxItemCommunity__opKoH"
};


/***/ }),

/***/ 8537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search_community),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/components/searchCommunity/search_community.module.scss
var search_community_module = __webpack_require__(5074);
var search_community_module_default = /*#__PURE__*/__webpack_require__.n(search_community_module);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/helpers/useViewport.tsx
var useViewport = __webpack_require__(3597);
;// CONCATENATED MODULE: ./src/constants/searchCommunityConstants.ts
const numberOfLogins = [
    {
        label: "ログイン人数",
        value: 0
    },
    {
        label: "〜5人",
        value: 1
    },
    {
        label: "〜10人",
        value: 2
    },
    {
        label: "〜15人",
        value: 3
    },
    {
        label: "20人以上",
        value: 4
    }, 
];
const numberOfParticipants = [
    {
        label: "参加人数",
        value: 0
    },
    {
        label: "〜5人",
        value: 1
    },
    {
        label: "〜10人",
        value: 2
    },
    {
        label: "〜20人",
        value: 3
    },
    {
        label: "30人以上",
        value: 4
    }, 
];

;// CONCATENATED MODULE: ./src/components/searchCommunity/mockData.ts
/* eslint-disable import/prefer-default-export */ const itemCommunityMockData = {
    image: "/assets/images/participating_community/community_sample.png",
    numberOfRegister: 6,
    name: "コミュニティの名前がここに入ります。最大文字数40文字です。コミュニティの名前が",
    numberOfMembers: 0,
    tags: [
        "#タグ",
        "#タグ",
        "#タグタグ",
        "#タグタグ",
        "#タグ",
        "#タグ",
        "#タグタグ",
        "#タグタグ"
    ],
    description: "概要が数行表示されます。概要が数行表示されます。概要が数行表示されます。概要が数行表示されます。概要が数行表示されます。概要が数行表示概要が数行表示概要が数行表示"
};
const resultSearchMockData = ()=>{
    const dataReturn = [];
    for(let i = 0; i < 15; i++){
        dataReturn.push({
            ...itemCommunityMockData,
            // eslint-disable-next-line no-nested-ternary
            status: i === 1 || i === 4 ? 3 : i === 8 ? 2 : 1
        });
    }
    return dataReturn;
};

// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: ./src/components/constants/constants.ts
var constants = __webpack_require__(1583);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
;// CONCATENATED MODULE: ./src/components/searchCommunity/BoxItemCommunityComponent.tsx








const BoxItemCommunityComponent = ({ data  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 12,
        className: (search_community_module_default()).boxCommunity,
        style: {
            padding: "18px 20px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            className: (search_community_module_default()).boxItemCommunity,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    container: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 9,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "label-number-of-register",
                            children: (0,utils/* replaceLabelByTranslate */.q)(t("home:box-community-recommend.number-of-register"), data?.numberOfRegister)
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image-community",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "image",
                        src: data?.image,
                        alt: "community"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "name",
                    children: data?.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    className: "number-of-participant",
                    children: (0,utils/* replaceLabelByTranslate */.q)(t("community-search:box-item.number-of-participant"), data?.numberOfMembers)
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
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "description",
                    children: data?.description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "button",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                        mode: constants/* HOMEPAGE_RECOMMEND_COMMUNITY_STATUS */.SB[data?.status]?.mode,
                        fullWidth: true,
                        children: constants/* HOMEPAGE_RECOMMEND_COMMUNITY_STATUS */.SB[data?.status]?.label
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const searchCommunity_BoxItemCommunityComponent = (BoxItemCommunityComponent);

;// CONCATENATED MODULE: ./src/components/searchCommunity/SearchCommunityComponent.tsx













const SelectCustom = (0,styles_.styled)(material_.Select)({
    borderRadius: 6,
    width: "100%",
    height: "40px",
    color: theme/* default.gray */.Z.gray,
    marginBottom: "20px",
    "&:hover": {
        borderRadius: 6
    },
    "& .MuiSelect-select": {
        position: "relative",
        fontSize: 14,
        padding: "10px 11px",
        borderRadius: "12px",
        fontFamily: "Noto Sans",
        background: "white"
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #989EA8"
    }
});
const FormControlLabelCustom = (0,styles_.styled)(material_.FormControlLabel)({
    "& .MuiCheckbox-root": {
        padding: "0 8px 0 9px",
        color: "#989EA8"
    },
    "& .MuiButtonBase-root-MuiCheckbox-root": {
        color: theme/* default.gray */.Z.gray
    },
    "& .Mui-checked": {
        color: "#03BCDB !important"
    },
    "& .MuiTypography-root": {
        fontSize: "14px"
    }
});
const SearchCommunityComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    // Responsive
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 992;
    const { 0: inputTags , 1: setInputTags  } = (0,external_react_.useState)([
        "デザイナー",
        "エンジニア"
    ]);
    const { 0: formSearch , 1: setFormSearch  } = (0,external_react_.useState)({
        numberOfLogin: numberOfLogins[0].value,
        numberOfParticipant: numberOfParticipants[0].value,
        checkBox1: true
    });
    const { 0: resultSearch  } = (0,external_react_.useState)(resultSearchMockData);
    const removeSearchTag = (indexRemove)=>{
        setInputTags(inputTags.filter((_, index)=>index !== indexRemove
        ));
    };
    const onKeyPress = (e)=>{
        if (e.key === "Enter" && e.target.value) {
            setInputTags([
                ...inputTags,
                e.target.value
            ]);
            document.getElementById("input_search_tag").value = "";
        }
    };
    const handleChangeInputSearch = (e, key)=>{
        setFormSearch({
            ...formSearch,
            [key]: e.target.value
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(ContentComponent/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            className: (search_community_module_default()).boxContainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    className: (search_community_module_default()).boxSearchLeft,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (search_community_module_default()).blockInputTag,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                    className: "paper-search-tag",
                                    sx: {
                                        p: "2px 4px",
                                        display: "flex",
                                        alignItems: "center",
                                        width: {
                                            sm: "100%",
                                            md: 240
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            sx: {
                                                p: "10px"
                                            },
                                            "aria-label": "menu",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/svg/ic_search_blue.svg",
                                                alt: "ic_search",
                                                width: "18px",
                                                height: "22px"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.InputBase, {
                                            className: "input-search-tag",
                                            id: "input_search_tag",
                                            onKeyPress: onKeyPress,
                                            sx: {
                                                flex: 1
                                            },
                                            placeholder: t("community-search:input-tag-placeholder")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tags",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: inputTags?.map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    tag,
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                                        className: "button-remove-icon",
                                                        onClick: ()=>removeSearchTag(index)
                                                        ,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/images/svg/delete-x-white.svg",
                                                            alt: "ic_delete",
                                                            width: "8px",
                                                            height: "8px"
                                                        })
                                                    })
                                                ]
                                            }, index)
                                        )
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                            value: formSearch?.numberOfLogin,
                            onChange: (e)=>handleChangeInputSearch(e, "numberOfLogin")
                            ,
                            children: numberOfLogins.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                    value: option.value,
                                    children: option.label
                                }, option.value)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                            value: formSearch?.numberOfParticipant,
                            onChange: (e)=>handleChangeInputSearch(e, "numberOfParticipant")
                            ,
                            children: numberOfParticipants.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                    value: option.value,
                                    children: option.label
                                }, option.value)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FormControlLabelCustom, {
                            control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Checkbox, {
                                checked: formSearch?.checkBox1,
                                onChange: ()=>setFormSearch({
                                        ...formSearch,
                                        checkBox1: !formSearch?.checkBox1
                                    })
                            }),
                            label: t("community-search:label-checkbox-1").toString()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            className: "btn-user-search btn-search",
                            fullWidth: true,
                            children: t("community-search:btn-search")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            className: "btn-user-search btn-clear",
                            fullWidth: true,
                            children: t("community-search:btn-clear-condition")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "box-btn-create-community",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    className: "span-direction",
                                    children: t("community-search:span-create-community-direction")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    className: "btn-user-search btn-create-community",
                                    fullWidth: true,
                                    onClick: ()=>router.push("/community/setting")
                                    ,
                                    children: t("community-search:btn-create-community")
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    className: (search_community_module_default()).boxResultSearch,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            className: (search_community_module_default()).titleResultSearch,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        className: "title-search",
                                        children: [
                                            t("community-search:title"),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "item-total-result",
                                                children: [
                                                    isMobile && /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " 全200件"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                !isMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                    item: true,
                                    xs: 6,
                                    className: "sort-by-block",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            className: "sort-by-label",
                                            children: t("community-search:sort-by")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                            orientation: "vertical",
                                            flexItem: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                            className: "sort-link",
                                            children: t("community-search:recommend-order")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                            className: "sort-link active",
                                            children: t("community-search:latest-order")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                            orientation: "vertical",
                                            flexItem: true
                                        })
                                    ]
                                }),
                                isMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                    item: true,
                                    xs: 12,
                                    className: "sort-by-block-sp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                            className: "sort-link",
                                            children: t("community-search:recommend-order")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                            className: "sort-link active",
                                            children: t("community-search:latest-order")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            className: (search_community_module_default()).resultSearch,
                            spacing: {
                                md: "27px",
                                xs: "20px"
                            },
                            children: resultSearch?.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    md: 4,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(searchCommunity_BoxItemCommunityComponent, {
                                        data: item
                                    })
                                }, key)
                            )
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const searchCommunity_SearchCommunityComponent = (SearchCommunityComponent);

;// CONCATENATED MODULE: ./pages/search_community/index.tsx




const SearchCommunityPage = ()=>/*#__PURE__*/ jsx_runtime_.jsx(searchCommunity_SearchCommunityComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "community-search",
                "home"
            ])
        }
    })
;
/* harmony default export */ const search_community = (SearchCommunityPage);


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

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,944,597,356], () => (__webpack_exec__(8537)));
module.exports = __webpack_exports__;

})();