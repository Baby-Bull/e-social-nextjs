"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 2586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i7": () => (/* binding */ status),
/* harmony export */   "lw": () => (/* binding */ bgColorByStatus),
/* harmony export */   "dn": () => (/* binding */ isAdminCommunity),
/* harmony export */   "s9": () => (/* binding */ tabsCommunity),
/* harmony export */   "r8": () => (/* binding */ tabsCommunitySetting),
/* harmony export */   "Tq": () => (/* binding */ members),
/* harmony export */   "x9": () => (/* binding */ infoAdmin),
/* harmony export */   "sm": () => (/* binding */ canCreatePost),
/* harmony export */   "Uz": () => (/* binding */ isContributor),
/* harmony export */   "BL": () => (/* binding */ isContributorOrCommenter),
/* harmony export */   "Hn": () => (/* binding */ countMemberOnVirtualRoom),
/* harmony export */   "b6": () => (/* binding */ infoCommunity),
/* harmony export */   "Qd": () => (/* binding */ postDetail),
/* harmony export */   "G_": () => (/* binding */ comments),
/* harmony export */   "tm": () => (/* binding */ admins),
/* harmony export */   "hE": () => (/* binding */ infoCommunitySetting),
/* harmony export */   "BI": () => (/* binding */ participations)
/* harmony export */ });
/* unused harmony exports communityMembers, participatingMembers, communityBlockMembers */
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);

const STATUSES = [
    {
        value: "join",
        bgColor: src_theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].green */ .Z.green
    },
    {
        value: "withdraw",
        bgColor: src_theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].red */ .Z.red
    },
    {
        value: "apply",
        bgColor: src_theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].orange */ .Z.orange
    },
    {
        value: "applying",
        bgColor: src_theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gray */ .Z.gray
    }, 
];
const index = 0;
const status = STATUSES[index].value;
const bgColorByStatus = STATUSES[index].bgColor;
const isAdminCommunity = false;
const communityMembers = [
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: true
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: true,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: true,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    }, 
];
const participatingMembers = [
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: true
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: true,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: true,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        last_login: "ログイン：8分前",
        is_representative: false,
        is_manager: false
    }, 
];
const communityBlockMembers = [
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア",
        is_representative: true
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        job: "フロントエンドエンジニア"
    }, 
];
const tabsCommunity = [
    {
        text: "投稿",
        children: [
            {
                text: "新着順",
                data: [
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    }, 
                ]
            },
            {
                text: "オススメ順",
                data: [
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    },
                    {
                        avatar: "/assets/images/svg/account.svg",
                        name: "佐藤太郎",
                        last_login: "30分前",
                        title: `この文章はダミーです。文字の大きさ、量、字間、
            行間等を確認するために入れています。タイトルの最大文字数は、60文字です。`,
                        count_message: "0件"
                    }, 
                ]
            }, 
        ]
    },
    {
        text: "チャット"
    },
    {
        text: "参加メンバー",
        data: communityMembers
    },
    {
        text: "管理者メニュー"
    }, 
];
const tabsCommunitySetting = [
    {
        text: "基本設定"
    },
    {
        text: "メンバー管理",
        children: [
            {
                text: "参加メンバー 100人",
                data: participatingMembers
            },
            {
                text: "ブロックリスト3人",
                data: communityBlockMembers
            }, 
        ]
    },
    {
        text: "参加申請"
    }, 
];
const members = [
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎"
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎"
    }, 
];
const text1 = "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。";
const text2 = "文字の大きさ、量、字間、行間等を確認するために入れています。";
const infoAdmin = {
    description: `${text1}${text1}${text1}`,
    avatar: "/assets/images/svg/account.svg",
    name: "佐藤 太郎",
    open_date: "2021年3月14日",
    role: "コミュニティ内の人が投稿可能"
};
const canCreatePost = true;
const isContributor = true;
const isContributorOrCommenter = true;
const countMemberOnVirtualRoom = "0 人";
const infoCommunity = {
    name: "コミュニティの名前がここに入ります。最大文字数40文字です。コミュニティの名前が",
    count_member: "0人",
    count_online: "0人",
    chipData: [
        {
            key: 0,
            label: "#タグ"
        },
        {
            key: 1,
            label: "#タグ"
        },
        {
            key: 2,
            label: "#タグタグ"
        },
        {
            key: 3,
            label: "#タグタグ"
        },
        {
            key: 4,
            label: "#タグ"
        },
        {
            key: 5,
            label: "#タグ"
        },
        {
            key: 6,
            label: "#タグタグ"
        },
        {
            key: 7,
            label: "#タグタグ"
        }, 
    ]
};
const postDetail = {
    avatar: "/assets/images/svg/account.svg",
    name: "佐藤 太郎",
    title: `${text1}タイトルの最大文字数は、60文字です。`,
    last_login: "2021年8月27日13:48",
    content: `
    <p>${text1} </p>
    <p>${text1}${text1}${text1}</p>
    <br />
    <p>${text2}${text2}${text2}${text2}${text2}${text2}
      <br />
      ${text1}${text1}${text1}
    </p>
    <br />
    <p>${text2}${text2}${text2}${text2}${text2}</p>
    <br />
    <span>${text1}${text2}</span>
  `,
    url: "https://connpass.com/",
    address: "〒160-8484 東京都新宿区歌舞伎町１丁目４−１"
};
const comments = [
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        last_login: "2021年8月27日13:48",
        content: `${text1}<br /><br />${text1}${text1}${text1}`
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        last_login: "2021年8月27日13:48",
        content: text1
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        last_login: "2021年8月27日13:48",
        content: postDetail.content
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "佐藤 太郎",
        last_login: "2021年8月27日13:48",
        content: `
    <span style="color: ${src_theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].blue */ .Z.blue}; padding-right: 15px;">
      @さすらいのエンジニア 
    </span>
    ${text1}`
    }, 
];
const admins = [
    {
        label: "佐藤太郎",
        avatar: "/assets/images/svg/account.svg",
        value: 0
    },
    {
        label: "エンジニア花子",
        avatar: "/assets/images/svg/account.svg",
        value: 1
    },
    {
        label: "プロダクトリーダーしてます鈴木",
        avatar: "/assets/images/svg/account.svg",
        value: 2
    },
    {
        label: "おじろ＠Java ",
        avatar: "/assets/images/svg/account.svg",
        value: 3
    }, 
];
const infoCommunitySetting = {
    avatar: "/assets/images/svg/php.svg",
    admin: infoAdmin,
    rolesCreatePost: [
        {
            value: 0,
            label: "する"
        },
        {
            value: 1,
            label: "古い順"
        },
        {
            value: 2,
            label: "名前順"
        }, 
    ],
    rolesJoin: [
        {
            value: "0",
            label: "誰でも参加可能"
        },
        {
            value: "1",
            label: "管理人の承認が必要"
        }, 
    ],
    tags: [
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
    ]
};
const participations = [
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        date_request: "2021年8月27日13時48分にリクエスト",
        job: "フロントエンドエンジニア",
        last_login: "8分前",
        is_reviewed: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        date_request: "2021年8月27日13時48分にリクエスト",
        job: "フロントエンドエンジニア",
        last_login: "8分前",
        is_reviewed: false
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        date_request: "2021年8月27日13時48分にリクエスト",
        job: "フロントエンドエンジニア",
        last_login: "8分前",
        is_reviewed: true
    },
    {
        avatar: "/assets/images/svg/account.svg",
        name: "エンジニア社長＠プロダクト開発",
        date_request: "2021年8月27日13時48分にリクエスト",
        job: "フロントエンドエンジニア",
        last_login: "8分前",
        is_reviewed: false
    }, 
];


/***/ })

};
;