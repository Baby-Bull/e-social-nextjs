// eslint-disable-next-line import/prefer-default-export
export const LIMIT_ROOMS_PER_PAGE = 15;
export const LIMIT_MESSAGES_PER_PAGE = 20;
export const AUTH_PAGE_PATHS = ["/login", "/register", "/register/form", "/_error"];

export const REGEX_RULES = {
  username_register:
    // eslint-disable-next-line max-len
    /^([\u3000-\u3000]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uFF10-\uFF19]|[\uFF41-\uFF5A]|[\uFF21-\uFF3A]|[a-zA-Z0-9_ ])+$/u,
  only_japanese: /^[一-龯ぁ-んァ-ン]+$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  username_profile: /^[一-龯ぁ-んァ-ンa-zA-Z0-9\w ]+$/,
  text_input: /^[一-龯ぁ-んァ-ンa-zA-Z0-9\w ]+$/,
  url: /^(ftp|http|https):\/\/[^ "]+$/,
};

export const MONTHS = [
  {
    label: 0,
    value: 0,
  },
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
  {
    label: 6,
    value: 6,
  },
  {
    label: 7,
    value: 7,
  },
  {
    label: 8,
    value: 8,
  },
  {
    label: 9,
    value: 9,
  },
  {
    label: 10,
    value: 10,
  },
  {
    label: 11,
    value: 11,
  },
];

const JAPAN_PROVINCES = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

export const JAPAN_PROVINCE_OPTIONS = [
  ...JAPAN_PROVINCES.map((item) => ({
    label: item,
    value: item,
  })),
];

export const PROFILE_JAPAN_PROVINCE_OPTIONS = [
  {
    label: "選択してください",
    value: "",
  },
  ...JAPAN_PROVINCES.map((item) => ({
    label: item,
    value: item,
  })),
];

export const REACT_QUERY_KEYS = {
  HOMEPAGE_GET_USER_PROVINCES: "HOMEPAGE_GET_USER_PROVINCES",
  HOMEPAGE_GET_USER_RECENT_LOGIN: "HOMEPAGE_GET_USER_RECENT_LOGIN",
  HOMEPAGE_GET_USER_NEW_MEMBERS: "HOMEPAGE_GET_USER_NEW_MEMBERS",
  HOMEPAGE_GET_USER_FAVORITE_TAGS: "HOMEPAGE_GET_USER_FAVORITE_TAGS",
  HOMEPAGE_GET_USER_STATS: "HOMEPAGE_GET_USER_STATS",
  LIST_ROOMS: "PERSONAL_AND_COMMUNITY_CHAT_ROOMS",
  LIST_NOTIFICATIONS: "LIST_NOTIFICATIONS",

  HANDLE_SETTING_USER_FAVORITE: "HANDLE_SETTING_USER_FAVORITE",

  PERSONAL_CHAT: {
    LIST_CHAT_ROOMS_FIRST: "PERSONAL_CHAT_LIST_CHAT_ROOMS_FIRST",
    LIST_CHAT_ROOMS: "PERSONAL_CHAT_LIST_CHAT_ROOMS",
    LIST_MESSAGES: "PERSONAL_CHAT_LIST_MESSAGES",
  },
  COMMUNITY_CHAT: {
    LIST_CHAT_ROOMS_FIRST: "COMMUNITY_CHAT_LIST_CHAT_ROOMS_FIRST",
    LIST_CHAT_ROOMS: "COMMUNITY_CHAT_LIST_CHAT_ROOMS",
    LIST_MESSAGES: "COMMUNITY_CHAT_LIST_MESSAGES",
  },
};

export const TYPE_OF_NOTIFICATIONS = [
  "new_matching_request",
  "matching_request_accepted",
  "new_community_join_request",
  "community_join_request_accepted",
  "new_comment_in_post",
  "new_recommend_user",
  "community_join_request_rejected",
  "tagged_in_comment",
];
export const CONTENT_OF_NOTIFICATIONS = {
  new_matching_request: { label: "さんからマッチングリクエストが届きました。", label2: "" },
  matching_request_accepted: { label: "さんとのマッチングが成立しました🎉メッセージを送ってみましょう。", label2: "" },
  new_community_join_request: { label: " さんからコミュニティ参加申請が届きました", label2: "" },
  community_join_request_accepted: { label: "コミュニティ参加申請が承認されました。", label2: "" },
  new_comment_in_post: { label: " さんが", label2: "にコメントしました。" },
  new_recommend_user: { label: "さんがgoodhubに参加しました。コンタクトをとってみましょう！", label2: "" },
  community_join_request_rejected: { label: "コミュニティ加が承認されませんでした。", label2: "" },
  tagged_in_comment: { label: "さんがコメントであなたをメンションしました。", label2: "" },
};

// eslint-disable-next-line no-shadow
export enum SearchFormStatus {
  // eslint-disable-next-line no-unused-vars
  Init = "init",
  // eslint-disable-next-line no-unused-vars
  Cached = "cached",
}
