(() => {
var exports = {};
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 3893:
/***/ ((module) => {

// Exports
module.exports = {
	"boxContainer": "search_user_boxContainer__6SsM1",
	"boxSearchLeft": "search_user_boxSearchLeft__vY3em",
	"blockInputTag": "search_user_blockInputTag__VA_YH",
	"boxResultSearch": "search_user_boxResultSearch__CMKjj",
	"titleResultSearch": "search_user_titleResultSearch__3uFbw",
	"boxItemUser": "search_user_boxItemUser___B3jS",
	"boxItemSearchUser": "search_user_boxItemSearchUser__lu0X_"
};


/***/ }),

/***/ 8441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search_user),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/searchUser/search_user.module.scss
var search_user_module = __webpack_require__(3893);
var search_user_module_default = /*#__PURE__*/__webpack_require__.n(search_user_module);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/constants/searchUserConstants.ts
var searchUserConstants = __webpack_require__(6320);
// EXTERNAL MODULE: ./src/helpers/useViewport.tsx
var useViewport = __webpack_require__(3597);
// EXTERNAL MODULE: ./src/services/user.ts
var user = __webpack_require__(1727);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "moment/locale/ja"
var ja_ = __webpack_require__(3122);
// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: ./src/components/constants/constants.ts
var constants = __webpack_require__(1583);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
// EXTERNAL MODULE: ./src/components/home/blocks/ModalMatchingComponent.tsx + 1 modules
var ModalMatchingComponent = __webpack_require__(8151);
// EXTERNAL MODULE: ./src/services/matching.ts
var matching = __webpack_require__(1144);
// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(699);
;// CONCATENATED MODULE: ./src/components/searchUser/BoxItemUserComponent.tsx





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
        if (isFavorite) (0,user/* deleteUserFavorite */.Sh)(tempData);
        else (0,user/* addUserFavorite */.dy)(tempData);
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
                className: external_classnames_default()((search_user_module_default()).boxItemUser),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    className: (search_user_module_default()).boxItemSearchUser,
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
/* harmony default export */ const searchUser_BoxItemUserComponent = (BoxItemUserComponent);

;// CONCATENATED MODULE: ./src/components/searchUser/SearchUserComponent.tsx













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
    }
});
const SearchUserComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    // Responsive
    const viewPort = (0,useViewport/* default */.Z)();
    const isMobile = viewPort.width <= 992;
    const router = (0,router_.useRouter)();
    // const query = useQuery();
    const LIMIT = 15;
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: inputTags , 1: setInputTags  } = (0,external_react_.useState)([]);
    const { 0: resultSearch , 1: setResultSearch  } = (0,external_react_.useState)([]);
    const { 0: isRefresh , 1: setIsRefresh  } = (0,external_react_.useState)(false);
    const { 0: isSort , 1: setIsSort  } = (0,external_react_.useState)("");
    const { 0: formSearch , 1: setFormSearch  } = (0,external_react_.useState)({
        job: searchUserConstants/* jobs.0.value */.w6[0].value,
        employeeStatus: searchUserConstants/* employeeStatus.0.value */.oI[0].value,
        lastLogin: searchUserConstants/* lastLogins.0.value */.og[0].value,
        review: searchUserConstants/* reviews.0.value */.A9[0].value,
        statusCanTalk: false,
        statusLookingForFriend: false,
        statusNeedConsult: false
    });
    const fullText = router.query?.fulltext;
    const fetchData = async (typeSort = "")=>{
        setIsLoading(true);
        const res = await (0,user/* UserSearch */.PS)(formSearch, inputTags, fullText, typeSort, LIMIT);
        setResultSearch(res?.items);
        setIsLoading(false);
    };
    const handleSort = (typeSort)=>{
        fetchData(typeSort);
        setIsSort(typeSort);
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, [
        isRefresh,
        fullText
    ]);
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
    const clearFormSearch = ()=>{
        setFormSearch({
            job: searchUserConstants/* jobs.0.value */.w6[0].value,
            employeeStatus: searchUserConstants/* employeeStatus.0.value */.oI[0].value,
            lastLogin: searchUserConstants/* lastLogins.0.value */.og[0].value,
            review: searchUserConstants/* reviews.0.value */.A9[0].value,
            statusCanTalk: false,
            statusLookingForFriend: false,
            statusNeedConsult: false
        });
        setInputTags([]);
    };
    const submitSearch = async ()=>{
        fetchData();
    };
    const callbackHandleIsRefresh = (status)=>{
        setIsRefresh(status);
    };
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                className: (search_user_module_default()).boxContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        className: (search_user_module_default()).boxSearchLeft,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (search_user_module_default()).blockInputTag,
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
                                                    src: "/assets/images/svg/ic_user_search.svg",
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
                                                placeholder: t("user-search:input-tag-placeholder")
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
                                value: formSearch?.job,
                                onChange: (e)=>handleChangeInputSearch(e, "job")
                                ,
                                children: searchUserConstants/* jobs.map */.w6.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: option.value,
                                        children: option.label
                                    }, option.value)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                value: formSearch?.employeeStatus,
                                onChange: (e)=>handleChangeInputSearch(e, "employeeStatus")
                                ,
                                children: searchUserConstants/* employeeStatus.map */.oI.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: option.value,
                                        children: option.label
                                    }, option.value)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                value: formSearch?.lastLogin,
                                onChange: (e)=>handleChangeInputSearch(e, "lastLogin")
                                ,
                                children: searchUserConstants/* lastLogins.map */.og.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: option.value,
                                        children: option.label
                                    }, option.value)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCustom, {
                                value: formSearch?.review,
                                onChange: (e)=>handleChangeInputSearch(e, "review")
                                ,
                                children: searchUserConstants/* reviews.map */.A9.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        value: option.value,
                                        children: option.label
                                    }, option.value)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FormControlLabelCustom, {
                                control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Checkbox, {
                                    value: "can-talk",
                                    checked: formSearch?.statusCanTalk,
                                    onChange: ()=>setFormSearch({
                                            ...formSearch,
                                            statusCanTalk: !formSearch?.statusCanTalk
                                        })
                                }),
                                label: t("user-search:label-checkbox-1").toString()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FormControlLabelCustom, {
                                control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Checkbox, {
                                    checked: formSearch?.statusLookingForFriend,
                                    value: "looking-for-friend",
                                    onChange: ()=>setFormSearch({
                                            ...formSearch,
                                            statusLookingForFriend: !formSearch?.statusLookingForFriend
                                        })
                                }),
                                label: t("user-search:label-checkbox-2").toString()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FormControlLabelCustom, {
                                control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Checkbox, {
                                    checked: formSearch?.statusNeedConsult,
                                    value: "needConsult",
                                    onChange: ()=>setFormSearch({
                                            ...formSearch,
                                            statusNeedConsult: !formSearch?.statusNeedConsult
                                        })
                                }),
                                label: t("user-search:label-checkbox-3").toString()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                className: "btn-user-search btn-search",
                                fullWidth: true,
                                onClick: submitSearch,
                                children: t("user-search:btn-search")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                className: "btn-user-search btn-clear",
                                fullWidth: true,
                                onClick: clearFormSearch,
                                children: t("user-search:btn-clear-condition")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        className: (search_user_module_default()).boxResultSearch,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                container: true,
                                className: (search_user_module_default()).titleResultSearch,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        item: true,
                                        md: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                            className: "title-search",
                                            children: [
                                                t("user-search:title"),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "item-total-result",
                                                    children: [
                                                        isMobile && /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " 全",
                                                        resultSearch?.length ?? 0,
                                                        "件"
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
                                                children: t("user-search:sort-by")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                                orientation: "vertical",
                                                flexItem: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                onClick: ()=>handleSort("recommended")
                                                ,
                                                className: isSort === "recommended" ? "sort-link active" : "sort-link",
                                                children: t("user-search:recommend-order")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                onClick: ()=>handleSort("login_at")
                                                ,
                                                className: isSort === "login_at" ? "sort-link active" : "sort-link",
                                                children: t("user-search:last-login-order")
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
                                                children: t("user-search:recommend-order")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                                className: "sort-link active",
                                                children: t("user-search:last-login-order")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                container: true,
                                className: (search_user_module_default()).resultSearch,
                                spacing: {
                                    md: "27px",
                                    xs: "20px"
                                },
                                children: resultSearch?.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        item: true,
                                        md: 4,
                                        xs: 12,
                                        sm: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(searchUser_BoxItemUserComponent, {
                                            data: item,
                                            isRefresh: isRefresh,
                                            callbackHandleIsRefresh: callbackHandleIsRefresh
                                        })
                                    }, key)
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const searchUser_SearchUserComponent = (SearchUserComponent);

;// CONCATENATED MODULE: ./pages/search_user/index.tsx




const SearchUserPage = ()=>/*#__PURE__*/ jsx_runtime_.jsx(searchUser_SearchUserComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "user-search",
                "home"
            ])
        }
    })
;
/* harmony default export */ const search_user = (SearchUserPage);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,493,944,893,597,581,356], () => (__webpack_exec__(8441)));
module.exports = __webpack_exports__;

})();