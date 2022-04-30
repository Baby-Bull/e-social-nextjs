"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
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
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(1493);
// EXTERNAL MODULE: ./src/components/layouts/ContentComponent.tsx + 2 modules
var ContentComponent = __webpack_require__(2633);
// EXTERNAL MODULE: ./src/services/user.ts
var user = __webpack_require__(1727);
// EXTERNAL MODULE: ./src/services/matching.ts
var matching = __webpack_require__(1144);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/home/home.module.scss
var home_module = __webpack_require__(7151);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./src/components/home/mockData/mockData.ts
var mockData = __webpack_require__(2866);
;// CONCATENATED MODULE: ./src/components/home/blocks/BannerComponent.tsx






const NextArrow = (props)=>{
    const { className , style , onClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (home_module_default()).slickArrow,
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/home_page/right_triangle.svg",
                alt: "next"
            })
        })
    }));
};
const PrevArrow = (props)=>{
    const { className , style , onClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/assets/images/home_page/left_triangle.svg",
            alt: "prev"
        })
    }));
};
const BannerComponent = ()=>{
    const { 0: banners  } = (0,external_react_.useState)(mockData/* bannersMockData */.Mm);
    const { 0: notification  } = (0,external_react_.useState)(mockData/* notificationMockData */.oO);
    const settingsSlick = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        centerMode: true,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(NextArrow, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(PrevArrow, {}),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }, 
        ]
    };
    const settingNotificationSlick = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    variableWidth: true,
                    speed: 6000,
                    autoplaySpeed: 6000
                }
            }, 
        ]
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((home_module_default()).sliderContainer, "homepage-banner"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settingsSlick,
                children: banners.map((banner, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (home_module_default()).sliderItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "pointer banner-item",
                            alt: banner.src,
                            src: banner.src
                        })
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (home_module_default()).notificationBanner,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/images/home_page/ic_spiker_mute.svg",
                        alt: "spiker-mute"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "title",
                        children: notification?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        className: (home_module_default()).notificationSlick,
                        ...settingNotificationSlick,
                        children: notification?.data?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "content",
                                children: item?.content
                            }, index)
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const blocks_BannerComponent = (BannerComponent);

;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForwardIos"
const ArrowForwardIos_namespaceObject = require("@mui/icons-material/ArrowForwardIos");
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_namespaceObject);
// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__(699);
;// CONCATENATED MODULE: ./src/components/home/blocks/MatchingComponent.tsx








const MatchingItem = ({ label , data , unit , link  })=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
        sx: {
            color: "black"
        },
        underline: "none",
        href: link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            className: (home_module_default()).boxMatching,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "label",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: label
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIos_default()), {
                    sx: {
                        fontSize: "10px",
                        fontWeight: "bold",
                        marginLeft: "-3em"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "div-data",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "data",
                            children: data
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "unit",
                            children: unit
                        })
                    ]
                })
            ]
        })
    })
;
const MatchingItemMobile = ({ label , data , icon , link  })=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
        sx: {
            color: "black"
        },
        underline: "none",
        href: link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            className: (home_module_default()).boxMatchingMobile,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: icon,
                    alt: "icon"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "label-type",
                    children: label
                }),
                data ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "span-has-data"
                }) : ""
            ]
        })
    })
;
const MatchingComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    // global auth
    const { auth  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const { 0: dataMatching , 1: setDataMatching  } = (0,external_react_.useState)({
        request: {
            label: t("home:matching.request"),
            data: auth?.user?.profile?.match_application_count ?? 0,
            unit: t("home:matching.request-unit"),
            link: "/matching?type=received"
        },
        application: {
            label: t("home:matching.application"),
            data: auth?.user?.profile?.match_request_count ?? 0,
            unit: t("home:matching.application-unit"),
            link: "/matching?type=sent"
        },
        people: {
            label: t("home:matching.people"),
            data: auth?.user?.profile?.favorite_count ?? 0,
            unit: t("home:matching.people-unit"),
            link: "/matching?type=favorite"
        },
        community: {
            label: t("home:matching.community"),
            data: auth?.user?.profile?.community_count ?? 0,
            unit: t("home:matching.community-unit"),
            link: "/matching?type=community"
        }
    });
    const { 0: dataMatchingMobile  } = (0,external_react_.useState)({
        request: {
            label: t("home:matching.request"),
            data: auth?.user?.profile?.match_application_count ?? 0,
            icon: "/assets/images/home_page/ic_user.svg",
            link: "/matching?type=received"
        },
        application: {
            label: t("home:matching.application"),
            data: auth?.user?.profile?.match_request_count ?? 0,
            icon: "/assets/images/home_page/ic_hand.svg",
            link: "/matching?type=sent"
        },
        people: {
            label: t("home:matching.people"),
            data: auth?.user?.profile?.favorite_count ?? 0,
            icon: "/assets/images/home_page/ic_heart_blue.svg",
            link: "/matching?type=favorite"
        },
        chat: {
            label: t("home:matching.chat"),
            data: 1,
            icon: "/assets/images/home_page/ic_chat.svg",
            link: "/matching?type=matched"
        },
        community: {
            label: t("home:matching.community"),
            data: auth?.user?.profile?.community_count ?? 0,
            icon: "/assets/images/home_page/ic_star_circle.svg",
            link: "/matching?type=community"
        }
    });
    (0,external_react_.useEffect)(()=>{
        const data = Object.keys(dataMatching).reduce((prev, key)=>({
                ...prev,
                [key]: {
                    ...dataMatching[key]
                }
            })
        , {});
        setDataMatching(data);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                className: external_classnames_default()((home_module_default()).matchingGridContainer, "content-pc"),
                children: Object.keys(dataMatching)?.map((key, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MatchingItem, {
                            label: dataMatching[key]?.label,
                            unit: dataMatching[key]?.unit,
                            data: dataMatching[key]?.data,
                            link: dataMatching[key]?.link
                        })
                    }, index)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                className: external_classnames_default()((home_module_default()).matchingGridContainerMobile, "content-mobile"),
                children: Object.keys(dataMatchingMobile)?.map((key, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        className: (home_module_default()).matchingGridItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MatchingItemMobile, {
                            label: dataMatchingMobile[key]?.label,
                            icon: dataMatchingMobile[key]?.icon,
                            data: dataMatchingMobile[key]?.data,
                            link: dataMatchingMobile[key]?.link
                        })
                    }, index)
                )
            })
        ]
    }));
};
/* harmony default export */ const blocks_MatchingComponent = (MatchingComponent);

// EXTERNAL MODULE: ./src/components/home/blocks/ModalMatchingComponent.tsx + 1 modules
var ModalMatchingComponent = __webpack_require__(8151);
;// CONCATENATED MODULE: ./src/components/home/blocks/NotificationsComponent.tsx






const NotificationsComponent_NextArrow = (props)=>{
    const { className , style , onClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (home_module_default()).slickArrow,
            children: !className?.includes("slick-disabled") && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/home_page/ic_arrow_small.svg",
                alt: "next"
            })
        })
    }));
};
const NotificationsComponent_PrevArrow = (props)=>{
    const { className , style , onClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (home_module_default()).slickArrow,
            children: !className?.includes("slick-disabled") && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/home_page/ic_arrow_small.svg",
                alt: "prev",
                className: "rotate-180"
            })
        })
    }));
};
const NotificationComponent = ()=>{
    const { 0: notifications  } = (0,external_react_.useState)([
        ...mockData/* notificationsMockData */.dG
    ]);
    const settingsSlickOfNotification = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: false,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(NotificationsComponent_NextArrow, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(NotificationsComponent_PrevArrow, {})
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((home_module_default()).notificationsBlock, "homepage-notification-slick", "slick-custom"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "box-content",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settingsSlickOfNotification,
                children: notifications?.map((notification, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "slider-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/images/home_page/ic_warning.svg",
                                alt: "warning",
                                className: "icon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "title",
                                children: notification?.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "content",
                                children: notification?.content
                            })
                        ]
                    }, index)
                )
            })
        })
    }));
};
/* harmony default export */ const NotificationsComponent = (NotificationComponent);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/common/elements/ButtonComponent.tsx
var ButtonComponent = __webpack_require__(2944);
// EXTERNAL MODULE: ./src/components/constants/constants.ts
var constants_constants = __webpack_require__(1583);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
;// CONCATENATED MODULE: ./src/components/home/blocks/SlickSliderRecommendComponent.tsx





const SlickSliderRecommendComponent_NextArrow = (props)=>{
    const { className , style , onClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (home_module_default()).slickArrow,
            children: !className?.includes("slick-disabled") && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/home_page/ic_arrow_medium.svg",
                alt: "next"
            })
        })
    }));
};
const SlickSliderRecommendComponent_PrevArrow = (props)=>{
    const { className , style , onClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: style,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (home_module_default()).slickArrow,
            children: !className?.includes("slick-disabled") && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/images/home_page/ic_arrow_medium.svg",
                alt: "prev",
                className: "rotate-180"
            })
        })
    }));
};
const setInfiniteSlick = (temp)=>temp > 4
;
const SlickSliderRecommendComponent = ({ items  })=>{
    const settingsSlickOfNotification = {
        dots: 4,
        infinite: setInfiniteSlick(items?.length),
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SlickSliderRecommendComponent_NextArrow, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SlickSliderRecommendComponent_PrevArrow, {}),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("slick-custom-recommend"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "box-content",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settingsSlickOfNotification,
                children: items
            })
        })
    }));
};
/* harmony default export */ const blocks_SlickSliderRecommendComponent = (SlickSliderRecommendComponent);

;// CONCATENATED MODULE: ./src/components/home/blocks/RecommendCommunityComponent.tsx












const RecommendCommunityItem = ({ data  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 12,
        className: external_classnames_default()((home_module_default()).boxRecommend, "box-recommend-community"),
        style: {
            padding: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            className: (home_module_default()).boxRecommendCommunity,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    style: {
                        padding: 10
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "label-number-of-register",
                                children: (0,utils/* replaceLabelByTranslate */.q)(t("home:box-community-recommend.number-of-register"), data?.numberOfRegister)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "label-number-of-members",
                                children: (0,utils/* replaceLabelByTranslate */.q)(t("home:box-community-recommend.number-of-members"), data?.numberOfMembers)
                            })
                        })
                    ]
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
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "description",
                    children: data?.description
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
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "button",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                        mode: constants_constants/* HOMEPAGE_RECOMMEND_COMMUNITY_STATUS */.SB[data?.status]?.mode,
                        fullWidth: true,
                        onClick: ()=>constants_constants/* HOMEPAGE_RECOMMEND_COMMUNITY_STATUS */.SB[data?.status]?.allowJoinCommunity ? router.push("/community") : ""
                        ,
                        children: constants_constants/* HOMEPAGE_RECOMMEND_COMMUNITY_STATUS */.SB[data?.status]?.label
                    })
                })
            ]
        })
    }));
};
const RecommendCommunityComponent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: recommendCommunities  } = (0,external_react_.useState)(mockData/* recommendCommunityMockData */.MF);
    const { 0: recommendCommunityItems , 1: setRecommendCommunityItems  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setRecommendCommunityItems(recommendCommunities.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(RecommendCommunityItem, {
                data: item
            }, index)
        ));
    }, [
        recommendCommunities
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        className: (home_module_default()).recommendList,
        sx: {
            display: recommendCommunityItems.length > 0 ? "block" : "none"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "div-title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "title",
                        children: t("home:recommend-community")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        className: "link-see-more content-pc",
                        href: "/search_community",
                        underline: "none",
                        children: t("home:see-more")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_SlickSliderRecommendComponent, {
                    items: recommendCommunityItems
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    className: "link-see-more content-mobile",
                    href: "/search_community",
                    underline: "none",
                    children: t("home:see-more")
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_RecommendCommunityComponent = (RecommendCommunityComponent);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "moment/locale/ja"
var ja_ = __webpack_require__(3122);
;// CONCATENATED MODULE: ./src/components/home/blocks/RecommendMembersComponent.tsx















const handleFavoriteAnUser = (isFavorite, tempData)=>{
    if (isFavorite) (0,user/* deleteUserFavorite */.Sh)(tempData);
    else (0,user/* addUserFavorite */.dy)(tempData);
};
const handleMapChatStatus = (statusChatTemp)=>{
    switch(statusChatTemp){
        case "looking-for-friend":
            return 1;
        case "can-talk":
            return 2;
        case "need-consult":
            return 3;
        default:
            return 2;
    }
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
const RecommendItem = ({ data , handleOpenMatchingModal , indexKey  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const { 0: liked , 1: setLiked  } = (0,external_react_.useState)(data?.is_favorite);
    const { auth , dispatch  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const isOnline = "online";
    const handleClickButtonModal = (tempValue)=>{
        if (tempValue === "rejected" || !tempValue) {
            handleOpenMatchingModal(data, indexKey);
        } else router.push("/chat/personal");
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
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 12,
        className: external_classnames_default()((home_module_default()).boxRecommend),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            className: (home_module_default()).boxRecommendMember,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        cursor: "pointer"
                    },
                    onClick: handleClickToProfile,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "status-summary",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                                    mode: constants_constants/* HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS */.so[handleMapChatStatus(data?.status)]?.mode,
                                    size: "small",
                                    style: {
                                        borderRadius: "4px",
                                        width: "130px"
                                    },
                                    children: constants_constants/* HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS */.so[handleMapChatStatus(data?.status)]?.label
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "label-login-status",
                                    children: data?.activity_status !== isOnline ? (0,utils/* replaceLabelByTranslate */.q)(t("home:box-member-recommend.last-login"), external_moment_default()(data?.last_login_at).utc().fromNow()) : t("home:box-member-recommend.no-login")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "info-summary",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: data?.profile_image ?? "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
                                    alt: "img-member"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "member-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "name",
                                            children: data?.username
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "career",
                                            children: data?.job_position ?? "情報なし"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "review",
                                            children: [
                                                t("home:box-member-recommend.review"),
                                                ": ",
                                                data?.review_count ?? 0
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "introduce",
                            children: data?.self_description ?? "情報なし"
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "label-description",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    src: "/assets/images/home_page/ic_chat.svg"
                                }),
                                t("home:box-member-recommend.label-description")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "description",
                            children: data?.discussion_topic ?? "情報なし"
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
                            children: t("home:box-member-recommend.like-string")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonComponent/* default */.Z, {
                    className: "button-matching",
                    onClick: ()=>handleClickButtonModal(data?.match_status)
                    ,
                    mode: constants_constants/* HOMEPAGE_RECOMMEND_MEMBER_STATUS */.JV[handleMapMatchingStatus(data?.match_status)]?.mode,
                    fullWidth: true,
                    disabled: data?.match_status === "pending",
                    children: constants_constants/* HOMEPAGE_RECOMMEND_MEMBER_STATUS */.JV[handleMapMatchingStatus(data?.match_status)]?.label
                })
            ]
        })
    }));
};
const RecommendMembersComponent = ({ title , dataRecommends , indexFetch , handleOpenMatchingModal ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: dataElements , 1: setDataElements  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setDataElements(dataRecommends?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(RecommendItem, {
                data: item,
                handleOpenMatchingModal: handleOpenMatchingModal,
                indexKey: indexFetch
            }, index)
        ));
    }, [
        dataRecommends
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        className: (home_module_default()).recommendList,
        sx: {
            display: dataRecommends.length > 0 ? "block" : "none"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "div-title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        className: "link-see-more content-pc",
                        href: "/search_user",
                        underline: "none",
                        children: t("home:see-more")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ jsx_runtime_.jsx(blocks_SlickSliderRecommendComponent, {
                    items: dataElements
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    className: "link-see-more content-mobile",
                    href: "/search_user",
                    underline: "none",
                    children: t("home:see-more")
                })
            })
        ]
    }));
};
/* harmony default export */ const blocks_RecommendMembersComponent = (RecommendMembersComponent);

;// CONCATENATED MODULE: ./src/components/home/IndexComponent.tsx
















const LIMIT = 20;
const HomeIndexComponents = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: memberRecommends , 1: setMemberRecommends  } = (0,external_react_.useState)([
        // Newest
        {
            title: t("home:register-newest"),
            data: []
        },
        // recent-login-member
        {
            title: t("home:recent-login-member"),
            data: []
        },
        // member-favorite-area
        {
            title: t("home:member-favorite-area"),
            data: []
        },
        // member-favorite-tags
        {
            title: t("home:member-favorite-tags"),
            data: []
        }, 
    ]);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { data: userProvinceData , refetch: refetchUserProvince , isLoading: isLoading1 ,  } = (0,external_react_query_.useQuery)(constants/* REACT_QUERY_KEYS.HOMEPAGE_GET_USER_PROVINCES */.pn.HOMEPAGE_GET_USER_PROVINCES, async ()=>{
        setIsLoading(false);
        const res = await (0,user/* getUserProvince */.XS)(LIMIT);
        return res?.items || [];
    }, {
        refetchOnWindowFocus: false
    });
    const { data: userRecentlyLoginData , refetch: refetchRecentlyLoginData , isLoading: isLoading2 ,  } = (0,external_react_query_.useQuery)(constants/* REACT_QUERY_KEYS.HOMEPAGE_GET_USER_RECENT_LOGIN */.pn.HOMEPAGE_GET_USER_RECENT_LOGIN, async ()=>{
        setIsLoading(false);
        const res = await (0,user/* getUserRecentlyLogin */.dW)(LIMIT);
        return res?.items || [];
    }, {
        refetchOnWindowFocus: false
    });
    const { data: userNewMember , refetch: refetchNewMember , isLoading: isLoading3 ,  } = (0,external_react_query_.useQuery)(constants/* REACT_QUERY_KEYS.HOMEPAGE_GET_USER_NEW_MEMBERS */.pn.HOMEPAGE_GET_USER_NEW_MEMBERS, async ()=>{
        setIsLoading(false);
        const res = await (0,user/* getUserNewMembers */.JQ)(LIMIT);
        return res?.items || [];
    }, {
        refetchOnWindowFocus: false
    });
    const { data: userFavoriteTagsData , refetch: refetchFavoriteTags , isLoading: isLoading4 ,  } = (0,external_react_query_.useQuery)(constants/* REACT_QUERY_KEYS.HOMEPAGE_GET_USER_FAVORITE_TAGS */.pn.HOMEPAGE_GET_USER_FAVORITE_TAGS, async ()=>{
        setIsLoading(false);
        const res = await (0,user/* getUserFavoriteTags */.XE)(LIMIT);
        return res?.items || [];
    }, {
        refetchOnWindowFocus: false
    });
    (0,external_react_.useEffect)(()=>{
        setIsLoading(isLoading1 || isLoading2 || isLoading3 || isLoading4);
    }, [
        isLoading1,
        isLoading2,
        isLoading3,
        isLoading4
    ]);
    (0,external_react_.useEffect)(()=>{
        const memberRecommendsTmp = [
            ...memberRecommends
        ];
        memberRecommendsTmp[0].data = userProvinceData || [];
        setMemberRecommends(memberRecommendsTmp);
    }, [
        userProvinceData
    ]);
    (0,external_react_.useEffect)(()=>{
        const memberRecommendsTmp = [
            ...memberRecommends
        ];
        memberRecommendsTmp[1].data = userRecentlyLoginData || [];
        setMemberRecommends(memberRecommendsTmp);
    }, [
        userRecentlyLoginData
    ]);
    (0,external_react_.useEffect)(()=>{
        const memberRecommendsTmp = [
            ...memberRecommends
        ];
        memberRecommendsTmp[2].data = userNewMember || [];
        setMemberRecommends(memberRecommendsTmp);
    }, [
        userNewMember
    ]);
    (0,external_react_.useEffect)(()=>{
        const memberRecommendsTmp = [
            ...memberRecommends
        ];
        memberRecommendsTmp[3].data = userFavoriteTagsData || [];
        setMemberRecommends(memberRecommendsTmp);
    }, [
        userFavoriteTagsData
    ]);
    const { 0: openModal , 1: setOpenModal  } = (0,external_react_.useState)(false);
    const { 0: userRequestMatching , 1: setUserRequestMatching  } = (0,external_react_.useState)(null);
    const indexRefetch = (0,external_react_.useRef)(null);
    const handleRefetchData = ()=>{
        switch(indexRefetch.current){
            case 0:
                refetchUserProvince();
                break;
            case 1:
                refetchRecentlyLoginData();
                break;
            case 2:
                refetchNewMember();
                break;
            case 3:
                refetchFavoriteTags();
                break;
            default:
                break;
        }
    };
    const handleSendMatchingRequest = async (matchingRequest)=>{
        const res = await (0,matching/* sendMatchingRequest */.XV)(userRequestMatching?.id, matchingRequest);
        setOpenModal(false);
        handleRefetchData();
        return res;
    };
    const handleOpenMatchingModal = (userMatching, index)=>{
        setOpenModal(true);
        setUserRequestMatching(userMatching);
        indexRefetch.current = index;
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "80px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(blocks_BannerComponent, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NotificationsComponent, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(blocks_MatchingComponent, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(blocks_RecommendCommunityComponent, {}),
                    memberRecommends?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(blocks_RecommendMembersComponent, {
                            title: item?.title,
                            dataRecommends: item?.data,
                            indexFetch: index,
                            handleOpenMatchingModal: handleOpenMatchingModal
                        }, index)
                    ),
                    openModal && /*#__PURE__*/ jsx_runtime_.jsx(ModalMatchingComponent/* default */.Z, {
                        userRequestMatching: userRequestMatching,
                        open: openModal,
                        setOpen: setOpenModal,
                        handleSendMatchingRequest: handleSendMatchingRequest
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const IndexComponent = (HomeIndexComponents);

;// CONCATENATED MODULE: ./pages/index.tsx




const Home = ()=>/*#__PURE__*/ jsx_runtime_.jsx(IndexComponent, {})
;
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common",
                "home",
                "footer"
            ])
        }
    })
;
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 6715:
/***/ ((module) => {

module.exports = require("@mui/lab/AdapterDateFns");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("@mui/lab/DatePicker");

/***/ }),

/***/ 9904:
/***/ ((module) => {

module.exports = require("@mui/lab/LocalizationProvider");

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

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 5564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3122:
/***/ ((module) => {

module.exports = require("moment/locale/ja");

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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

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
var __webpack_exports__ = __webpack_require__.X(0, [668,695,633,493,944,893,581,356], () => (__webpack_exec__(6749)));
module.exports = __webpack_exports__;

})();