"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 1583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SB": () => (/* binding */ HOMEPAGE_RECOMMEND_COMMUNITY_STATUS),
/* harmony export */   "so": () => (/* binding */ HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS),
/* harmony export */   "JV": () => (/* binding */ HOMEPAGE_RECOMMEND_MEMBER_STATUS),
/* harmony export */   "Tj": () => (/* binding */ USER_SEARCH_STATUS),
/* harmony export */   "WN": () => (/* binding */ JOBS),
/* harmony export */   "iy": () => (/* binding */ USER_STATUS)
/* harmony export */ });
/* unused harmony export USER_STATUS_OPTIONS */
const HOMEPAGE_RECOMMEND_COMMUNITY_STATUS = {
    1: {
        label: "コミュニティに参加する",
        mode: "green",
        allowJoinCommunity: true
    },
    2: {
        label: "申請中",
        mode: "default"
    },
    3: {
        label: "参加申請を送る",
        mode: "orange"
    }
};
const HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS = {
    1: {
        label: "今すぐ話せます",
        mode: "orange"
    },
    2: {
        label: "友達募集しています",
        mode: "cleam"
    },
    3: {
        label: "相談に乗って欲しいです",
        mode: "info"
    }
};
const HOMEPAGE_RECOMMEND_MEMBER_STATUS = {
    1: {
        label: "リクエスト送信済み",
        mode: "default"
    },
    2: {
        label: "メッセージを開く",
        mode: "info"
    },
    3: {
        label: "レビューをする",
        mode: "orange"
    },
    4: {
        label: "マッチングのリクエストを送る",
        mode: "green"
    }
};
const USER_SEARCH_STATUS = {
    "can-talk": {
        label: "今すぐ話せます",
        mode: "orange"
    },
    "looking-for-friend": {
        label: "友達募集しています",
        mode: "cleam"
    },
    "need-consult": {
        label: "相談に乗って欲しいです",
        mode: "info"
    }
};
const JOBS = {
    frontend: {
        label: "フロントエンドエンジニア"
    },
    backend: {
        label: "データサイエンティスト"
    },
    "data-scientist": {
        label: "データサイエンティスト"
    },
    "project-manager": {
        label: "プロジェクトマネージャー"
    },
    "project-leader": {
        label: "プロジェクトリーダー"
    },
    "test-engineer": {
        label: "テストエンジニア"
    },
    "database-engineer": {
        label: "データベースエンジニア"
    },
    "security-engineer": {
        label: "セキュリティエンジニア"
    },
    "infrastructure-engineer": {
        label: "インフラエンジニア"
    },
    "network-engineer": {
        label: "ネットワークエンジニア"
    },
    "server-engineer": {
        label: "サーバーエンジニア"
    },
    "support-engineer": {
        label: "サポートエンジニア"
    },
    "help-desk": {
        label: "ヘルプデスク"
    },
    "markup-engineer": {
        label: "マークアップエンジニア"
    }
};
const USER_STATUS_OPTIONS = [
    {
        label: "今すぐ話せます",
        value: "can-talk"
    },
    {
        label: "友達募集しています",
        value: "looking-for-friend"
    },
    {
        label: "相談に乗って欲しいです",
        value: "need-consult"
    }, 
];
const USER_STATUS = {
    "can-talk": {
        label: "今すぐ話せます",
        mode: "orange",
        bg: "#FF9458",
        color: "#FFFFFF"
    },
    "looking-for-friend": {
        label: "友達募集しています",
        mode: "cleam",
        bg: "rgb(255, 249, 229)",
        color: "rgb(26, 41, 68)"
    },
    "need-consult": {
        label: "相談に乗って欲しいです",
        mode: "info",
        bg: "rgb(255, 249, 229)",
        color: "rgb(26, 41, 68)"
    }
};


/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ replaceLabelByTranslate),
/* harmony export */   "N": () => (/* binding */ formatChatDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const replaceLabelByTranslate = (message, textReplace)=>message.replace("%s", textReplace.toString())
;
const formatChatDate = (date)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("HH:mm")
;


/***/ })

};
;