"use strict";
exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 6320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w6": () => (/* binding */ jobs),
/* harmony export */   "oI": () => (/* binding */ employeeStatus),
/* harmony export */   "El": () => (/* binding */ typeTimeLogin),
/* harmony export */   "og": () => (/* binding */ lastLogins),
/* harmony export */   "A9": () => (/* binding */ reviews),
/* harmony export */   "PR": () => (/* binding */ typeReview)
/* harmony export */ });
const jobs = [
    {
        label: "職種",
        value: 0
    },
    {
        label: "フロントエンドエンジニア",
        value: "frontend"
    },
    {
        label: "バックエンドエンジニア",
        value: "backend"
    },
    {
        label: "データサイエンティスト",
        value: "data-scientist"
    },
    {
        label: "プロジェクトマネージャー",
        value: "project-manager"
    },
    {
        label: " プロジェクトリーダー",
        value: "project-leader"
    },
    {
        label: "テストエンジニア",
        value: "test-engineer"
    },
    {
        label: "データベースエンジニア",
        value: "database-engineer"
    },
    {
        label: "セキュリティエンジニア",
        value: "security-engineer"
    },
    {
        label: "インフラエンジニア",
        value: "infrastructure-engineer"
    },
    {
        label: "ネットワークエンジニア",
        value: "network-engineer"
    },
    {
        label: "サーバーエンジニア",
        value: "server-engineer"
    },
    {
        label: "サポートエンジニア",
        value: "support-engineer"
    },
    {
        label: "ヘルプデスク",
        value: "help-desk"
    },
    {
        label: "マークアップエンジニア",
        value: "markup-engineer"
    }, 
];
const employeeStatus = [
    {
        label: "雇用状態",
        value: 0
    },
    {
        label: "正社員",
        value: "fulltime"
    },
    {
        label: "契約社員",
        value: "contract"
    },
    {
        label: "派遣社員",
        value: "temporary"
    },
    {
        label: "フリーランス",
        value: "freelance"
    },
    {
        label: "社長",
        value: "president"
    },
    {
        label: "役員",
        value: "officer"
    },
    {
        label: " 転職活動中",
        value: "part-time"
    },
    {
        label: "アルバイト",
        value: "intern"
    },
    {
        label: "インターン",
        value: "during-job-change"
    }, 
];
const typeTimeLogin = {
    login: 1,
    one_hour: 2,
    one_day: 3,
    on_day_to_week: 4,
    week_to_two_week: 5,
    two_week_to_month: 6,
    month_or_than: 7
};
const lastLogins = [
    {
        label: "最終ログイン",
        value: 0
    },
    {
        label: "ログイン中",
        value: 1
    },
    {
        label: "1時間以内",
        value: 2
    },
    {
        label: "24時間以内",
        value: 3
    },
    {
        label: "1日〜1週間",
        value: 4
    },
    {
        label: "週間〜2週間",
        value: 5
    },
    {
        label: "2週間〜1ヶ月",
        value: 6
    },
    {
        label: " 1ヶ月以上",
        value: 7
    }, 
];
const reviews = [
    {
        label: "レビュー",
        value: 0
    },
    {
        label: "レビュー0件を除く",
        value: 1
    },
    {
        label: "10件未満",
        value: 2
    },
    {
        label: "11〜50件",
        value: 3
    },
    {
        label: "51〜100件",
        value: 4
    },
    {
        label: " 100件以上",
        value: 5
    }, 
];
const typeReview = {
    no_0: 1,
    less_than_10: 2,
    from_11_to_50: 3,
    from_51_to_100: 4,
    more_than_100: 5
};


/***/ }),

/***/ 4247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hj": () => (/* binding */ USER_REPORT),
/* harmony export */   "pU": () => (/* binding */ USER_REVIEW),
/* harmony export */   "El": () => (/* binding */ SETTING_EMAIL),
/* harmony export */   "Y4": () => (/* binding */ SETTING_NOTIFICATION),
/* harmony export */   "_6": () => (/* binding */ ACCEPT_MATCHING),
/* harmony export */   "W3": () => (/* binding */ REJECT_MATCHING),
/* harmony export */   "aU": () => (/* binding */ CANCEL_MATCHING),
/* harmony export */   "CA": () => (/* binding */ SERVER_ERROR)
/* harmony export */ });
const USER_REPORT = "運営に通報が送信されました。";
const USER_REVIEW = "リビューを投稿しました。";
const SETTING_EMAIL = "メールアドレスを変更しました。";
const SETTING_NOTIFICATION = "通知を変更しました。";
const ACCEPT_MATCHING = "マッチングリクエストを承認しました。";
const REJECT_MATCHING = "マッチングリクエストを拒否しました。";
const CANCEL_MATCHING = "マッチングリクエストをキャンセルしました。";
const SERVER_ERROR = "server error";


/***/ }),

/***/ 3249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aB": () => (/* binding */ REGEX_RULES),
/* harmony export */   "G8": () => (/* binding */ VALIDATE_MESSAGE_FORM_REGISTER),
/* harmony export */   "$j": () => (/* binding */ VALIDATE_FORM_MATCHING_REQUEST),
/* harmony export */   "Yh": () => (/* binding */ VALIDATE_FORM_USER_PORT),
/* harmony export */   "Gf": () => (/* binding */ VALIDATE_FORM_USER_REVIEW)
/* harmony export */ });
const REGEX_RULES = {
    username_register: /^[一-龯ぁ-んァ-ンa-zA-Z0-9\w]+$/,
    only_japanese: /^[一-龯ぁ-んァ-ン]+$/,
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
};
const VALIDATE_MESSAGE_FORM_REGISTER = {
    username: {
        required: "ユーザー名を入力してください",
        invalid: "ひらがな、カタカナ、漢字、a〜zの文字、0〜9の数字を含むユーザー名を入力してください。",
        max_length: "文字数オーバーです。50文字以内で入力してください。"
    },
    birthday: {
        required: "生年月日を入力してください",
        future_input: "今日より前の日付を入力してください（今日選択可能）",
        invalid_date: "無効な日付 (dd/MM/yyyy)"
    },
    status: {
        required: "ステータスを選択してください"
    },
    email: {
        required: "「tanakataro@rebase.co.jp」の形式でメールアドレスを入力してください",
        invalid: "メールアドレスの形式は正しくありません。「tanakataro@rebase.co.jp」の形式でメールアドレスを入力してください"
    },
    address: {
        required: "お住まいの地域を選択してください"
    },
    tags: {
        required: "タグを入力してください",
        max_length: "1タグにつき20文字以内で入力してください",
        min_count: "タグの数は2以上である必要があります"
    },
    checkbox: "利用規約に同意してください"
};
const VALIDATE_FORM_MATCHING_REQUEST = {
    purpose: {
        required: "選択してください"
    },
    message: {
        max_length: "文字数の制限を超えています。1000文字以内で入力してください"
    },
    desired_match_date: {
        invalid_date: "日付値が無効です",
        required_date: "時間の入力が必要です"
    }
};
const VALIDATE_FORM_USER_PORT = {
    reason: {
        required: "通報理由を選択してください。"
    },
    detail: {
        max_length: "1タグにつき1000文字以内で入力してください"
    }
};
const VALIDATE_FORM_USER_REVIEW = {
    comment: {
        max_length: "1タグにつき1000文字以内で入力してください"
    }
};


/***/ }),

/***/ 1727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zV": () => (/* binding */ getUserFavorite),
/* harmony export */   "XE": () => (/* binding */ getUserFavoriteTags),
/* harmony export */   "XS": () => (/* binding */ getUserProvince),
/* harmony export */   "JQ": () => (/* binding */ getUserNewMembers),
/* harmony export */   "dW": () => (/* binding */ getUserRecentlyLogin),
/* harmony export */   "dy": () => (/* binding */ addUserFavorite),
/* harmony export */   "Sh": () => (/* binding */ deleteUserFavorite),
/* harmony export */   "Mx": () => (/* binding */ userReport),
/* harmony export */   "DL": () => (/* binding */ userReview),
/* harmony export */   "Xm": () => (/* binding */ userSettingEmail),
/* harmony export */   "cU": () => (/* binding */ userSettingNotification),
/* harmony export */   "PS": () => (/* binding */ UserSearch),
/* harmony export */   "zU": () => (/* binding */ getOrtherUserProfile),
/* harmony export */   "Kx": () => (/* binding */ getUserCommunites),
/* harmony export */   "uV": () => (/* binding */ getUserRecommended),
/* harmony export */   "Dy": () => (/* binding */ getUserReviews)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3612);
/* harmony import */ var src_messages_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4247);
/* harmony import */ var src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6320);





const getUserFavorite = async (limit, cursor)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/favorite?limit=${limit}&cursor=${cursor}`);
        return res.data;
    } catch (error) {
        return error;
    }
};
const getUserFavoriteTags = async (limit, cursor = "")=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/favorite/tag-users?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const getUserProvince = async (limit, cursor = "")=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/province-users?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const getUserNewMembers = async (limit, cursor = "")=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/members-new?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const getUserRecentlyLogin = async (limit, cursor = "")=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/logged-in?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const addUserFavorite = async (userId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.post */ .h.post(`/user/favorite/${userId}`);
        return res.data;
    } catch (error) {
        return error;
    }
};
const deleteUserFavorite = async (userId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api["delete"] */ .h["delete"](`/user/favorite/${userId}`);
        return res.data;
    } catch (error) {
        return error;
    }
};
const userReport = async (userId, body)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.post */ .h.post(`/user/${userId}/report`, body);
        if (res.data.error_code) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(res.data.message);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .USER_REPORT */ .hj);
        }
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const userReview = async (userId, body)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.post */ .h.post(`/user/${userId}/review`, body);
        if (res.data.error_code) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(res.data.message);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .USER_REVIEW */ .pU);
        }
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const userSettingEmail = async (body)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.patch */ .h.patch("/user/email", body);
        if (!res.data) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SETTING_EMAIL */ .El);
        }
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const userSettingNotification = async (body)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.patch */ .h.patch("/user/setting", body);
        if (!res.data) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SETTING_NOTIFICATION */ .Y4);
        }
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
// @ts-ignore
const UserSearch = async (params, inputTags, fullText, isSort, limit, cursor = "")=>{
    let query = `/user/search?limit=${limit}&cursor=${cursor}`;
    // Query full text
    query += fullText ? `&fulltext=${fullText}` : "";
    // Query job
    query += params?.job ? `&job=${params?.job}` : "";
    // Query employment status
    query += params?.employeeStatus ? `&employment_status=${params?.employeeStatus}` : "";
    // Query status
    query += params?.statusCanTalk ? `&status[]=can-talk` : "";
    query += params?.statusLookingForFriend ? `&status[]=looking-for-friend` : "";
    query += params?.statusNeedConsult ? `&status[]=need-consult` : "";
    // Query last login
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.login */ .El.login ? `&is_online=true` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.one_hour */ .El.one_hour ? `&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "hours").toISOString()}&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().toISOString()}` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.one_day */ .El.one_day ? `&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "days").toISOString()}&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().toISOString()}` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.on_day_to_week */ .El.on_day_to_week ? `&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "weeks").toISOString()}&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "days").toISOString()}` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.week_to_two_week */ .El.week_to_two_week ? `&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, "weeks").toISOString()}&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "weeks").toISOString()}` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.two_week_to_month */ .El.two_week_to_month ? `&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "months").toISOString()}&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "weeks").toISOString()}` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.two_week_to_month */ .El.two_week_to_month ? `&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "months").toISOString()}&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, "weeks").toISOString()}` : "";
    query += params?.lastLogin === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeTimeLogin.month_or_than */ .El.month_or_than ? `&last_login[]=&last_login[]=${moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, "months").toISOString()}` : "";
    // Query count review
    query += params?.review === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeReview.no_0 */ .PR.no_0 ? `&review_count[]=1&review_count[]=` : "";
    query += params?.review === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeReview.less_than_10 */ .PR.less_than_10 ? `&review_count[]=0&review_count[]=10` : "";
    query += params?.review === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeReview.from_11_to_50 */ .PR.from_11_to_50 ? `&review_count[]=11&review_count[]=50` : "";
    query += params?.review === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeReview.from_51_to_100 */ .PR.from_51_to_100 ? `&review_count[]=51&review_count[]=100` : "";
    query += params?.review === src_constants_searchUserConstants__WEBPACK_IMPORTED_MODULE_3__/* .typeReview.more_than_100 */ .PR.more_than_100 ? `&review_count[]=101&review_count[]=` : "";
    // Sort
    query += isSort ? `&sort_order=${isSort}` : "";
    // query input tag
    for(let i = 0; i < inputTags.length; i++){
        query += `&tags[]=${inputTags[i]}`;
    }
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(query);
        if (!res.data) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        }
        return res.data;
    } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(src_messages_notification__WEBPACK_IMPORTED_MODULE_4__/* .SERVER_ERROR */ .CA);
        return error;
    }
};
const getOrtherUserProfile = async (userId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/${userId}/profile`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const getUserCommunites = async (userId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/${userId}/communities`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const getUserRecommended = async (limit, cursor = "")=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/recommended-users/?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
};
const getUserReviews = async (userId)=>{
    try {
        const res = await src_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .api.get */ .h.get(`/user/${userId}/reviews`);
        return res?.data;
    } catch (error) {
        return error;
    }
};


/***/ })

};
;