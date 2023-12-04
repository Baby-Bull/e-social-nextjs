// eslint-disable-next-line import/prefer-default-export
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
  4: {
    label: "メッセージを開",
    mode: "info",
  },
};

export const typeRoleUser = {
  MEMBER: "member",
  PENDING: "pending",
  OWNER: "owner",
  ADMIN: "admin",
  NULL: null,
};

export const numberOfLogins = [
  {
    label: "ログイン人数",
    value: 0,
  },
  {
    label: "〜5人",
    value: 1,
  },
  {
    label: "〜10人",
    value: 2,
  },
  {
    label: "〜15人",
    value: 3,
  },
  {
    label: "20人以上",
    value: 4,
  },
];

export const numberOfParticipants = [
  {
    label: "参加人数",
    value: 0,
  },
  {
    label: "〜5人",
    value: 1,
  },
  {
    label: "〜10人",
    value: 2,
  },
  {
    label: "〜20人",
    value: 3,
  },
  {
    label: "30人以上",
    value: 4,
  },
];

export const typeCountLogin = {
  no_0: 0,
  less_than_5: 1,
  less_than_10: 2,
  less_than_15: 3,
  more_than_20: 4,
};

export const typeCountMember = {
  no_0: 0,
  less_than_5: 1,
  less_than_10: 2,
  less_than_20: 3,
  more_than_30: 4,
};
