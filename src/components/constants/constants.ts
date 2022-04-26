export const HOMEPAGE_RECOMMEND_COMMUNITY_STATUS = {
  1: {
    label: "コミュニティに参加する",
    mode: "green",
    allowJoinCommunity: true,
  },
  2: {
    label: "申請中",
    mode: "default",
  },
  3: {
    label: "参加申請を送る",
    mode: "orange",
  },
};

export const HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS = {
  1: {
    label: "今すぐ話せます",
    mode: "orange",
  },
  2: {
    label: "友達募集しています",
    mode: "cleam",
  },
  3: {
    label: "相談に乗って欲しいです",
    mode: "info",
  },
};

export const HOMEPAGE_RECOMMEND_MEMBER_STATUS = {
  1: {
    label: "リクエスト送信済み",
    mode: "default",
  },
  2: {
    label: "メッセージを開く",
    mode: "info",
  },
  3: {
    label: "レビューをする",
    mode: "orange",
  },
  4: {
    label: "マッチングのリクエストを送る",
    mode: "green",
  },
};

export const USER_SEARCH_STATUS = {
  "can-talk": {
    label: "今すぐ話せます",
    mode: "orange",
  },
  "looking-for-friend": {
    label: "友達募集しています",
    mode: "cleam",
  },
  "need-consult": {
    label: "相談に乗って欲しいです",
    mode: "info",
  },
};

export const USER_STATUS_OPTIONS = [
  {
    label: "今すぐ話せます",
    value: "can-talk",
  },
  {
    label: "友達募集しています",
    value: "looking-for-friend",
  },
  {
    label: "相談に乗って欲しいです",
    value: "need-consult",
  },
];

export const REACT_QUERY_KEYS = {
  HOMEPAGE_GET_USER_PROVINCES: "HOMEPAGE_GET_USER_PROVINCES",
  HOMEPAGE_GET_USER_RECENT_LOGIN: "HOMEPAGE_GET_USER_RECENT_LOGIN",
  HOMEPAGE_GET_USER_NEW_MEMBERS: "HOMEPAGE_GET_USER_NEW_MEMBERS",
  HOMEPAGE_GET_USER_FAVORITE_TAGS: "HOMEPAGE_GET_USER_FAVORITE_TAGS",
};
