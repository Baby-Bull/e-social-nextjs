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
  {
    label: 12,
    value: 12,
  },
];

export const AUTH_PAGE_PATHS = ["/login", "/register", "/register/form", "/_error"];

const JAPAN_PROVINCES = [
  "愛知県",
  "秋田県",
  "青森県",
  "千葉県",
  "愛媛県",
  "福井県",
  "福岡県",
  "福島県",
  "岐阜県",
  "群馬県",
  "広島県",
  "北海道",
  "兵庫県",
  "茨城県",
  "石川県",
  "岩手県",
  "香川県",
  "鹿児島県",
  "神奈川県",
  "高知県",
  "熊本県",
  "京都府",
  "三重県",
  "宮城県",
  "宮崎県",
  "長野県",
  "長崎県",
  "奈良県",
  "新潟県",
  "大分県",
  "岡山県",
  "沖縄県",
  "大阪府",
  "佐賀県",
  "埼玉県",
  "滋賀県",
  "島根県",
  "静岡県",
  "栃木県",
  "徳島県",
  "東京都",
  "鳥取県",
  "富山県",
  "和歌山県",
  "山形県",
  "山口県",
  "山梨県	",
];

export const JAPAN_PROVINCE_OPTIONS = [
  // {
  //   label: "選択してください",
  //   value: "",
  // },
  ...JAPAN_PROVINCES.map((item) => ({
    label: item,
    value: item,
  })),
];

export const MATCHING_PURPOSE_OPTIONS = [
  {
    label: "選択してください",
    value: "",
  },
  {
    label: "カジュアルにお話ししたい",
    value: "talk-casually",
  },
  {
    label: "技術的な相談がしたい",
    value: "technical-consultation",
  },
  {
    label: "一緒に働けるエンジニアを探している",
    value: "work-with",
  },
  {
    label: "その他",
    value: "other",
  },
];

export const USER_REPORT_OPTIONS = [
  {
    label: "選択してください",
    value: "",
  },
  {
    label: "他の利用者のなりすましをしている",
    value: "impersonate",
  },
  {
    label: "暴言、脅迫、差別的な発言を行っている",
    value: "abuse",
  },
  {
    label: "案件の仲介業者である",
    value: "project-broker",
  },
  {
    label: "他の",
    value: "other",
  },
];

export const LIMIT_PER_PAGE = 20;

export const MESSAGE_CONTENT_TYPES = {
  TEXT: "text",
  IMAGE: "image",
};

export const REACT_QUERY_KEYS = {
  HOMEPAGE_GET_USER_PROVINCES: "HOMEPAGE_GET_USER_PROVINCES",
  HOMEPAGE_GET_USER_RECENT_LOGIN: "HOMEPAGE_GET_USER_RECENT_LOGIN",
  HOMEPAGE_GET_USER_NEW_MEMBERS: "HOMEPAGE_GET_USER_NEW_MEMBERS",
  HOMEPAGE_GET_USER_FAVORITE_TAGS: "HOMEPAGE_GET_USER_FAVORITE_TAGS",

  PERSONAL_CHAT: {
    LIST_CHAT_ROOMS_FIRST: "PERSONAL_CHAT_LIST_CHAT_ROOMS_FIRST",
    LIST_CHAT_ROOMS: "PERSONAL_CHAT_LIST_CHAT_ROOMS",
    LIST_MESSAGES: "PERSONAL_CHAT_LIST_MESSAGES",
  },
};
