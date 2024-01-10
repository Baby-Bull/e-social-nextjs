// eslint-disable-next-line import/prefer-default-export
// TO-DO: Remove duplicate value
export const USER_STATUS = {
  online: "online",
  offline: "offline",
};

export const SORT_ORDER_SEARCH = {
  FAVORITE_COUNT: "favorite_count",
  NEWEST: "newest",
};

export const typeMatchingStatus = {
  REJECTED: "rejected",
  SENT_PENDING: "sent_pending",
  RECEIVED_PENDING: "received_pending",
  CONFIRMED: "confirmed",
  NULL: null,
};

export const TYPE = {
  RECEIVED: 1,
  SENT: 2,
  FAVORITE: 3,
  MATCHED: 4,
  COMMUNITY: 5,
};
export const TAB_VALUE_BY_KEY = {
  received: 0,
  sent: 1,
  favorite: 2,
  matched: 3,
  community: 4,
};

export const MATCHING_PURPOSE_OPTIONS = [
  {
    // label: "選択してください",
    label: "Please select",
    value: "",
  },
  {
    // label: "カジュアルにお話ししたい",
    label: "Want to talk casually",
    value: "talk-casually",
  },
  {
    // label: "技術的な相談がしたい",
    label: "Want to be technical consulted",
    value: "technical-consultation",
  },
  {
    label: "Want to find team member",
    // label: "一緒に働けるエンジニアを探している",
    value: "work-with",
  },
  {
    // label: "その他",
    label: "Other",
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
    label: "その他　",
    value: "other",
  },
];

export const STATUS_OPTIONS = [
  {
    label: "選択してください",
    value: "",
  },
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

export const USER_STATUS_OPTIONS = [
  {
    // label: i18n.t("register:status-option.can-talk"),
    label: "Can talk",
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
    // label: "リクエスト送信済み",
    label: "Waiting for reply",
    mode: "default",
  },
  2: {
    // label: "メッセージを開く",
    label: "Open conversation",
    mode: "info",
  },
  3: {
    // label: "承認する",
    label: "Approve",
    mode: "orange",
  },
  4: {
    // label: "マッチングのリクエストを送る",
    label: "Send matching request",
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

// export const JOBS = {
//   frontend: { label: "フロントエンドエンジニア" },
//   backend: { label: "バックエンドエンジニア" },
//   "data-scientist": { label: "データサイエンティスト" },
//   "project-manager": { label: "プロジェクトマネージャー" },
//   "project-leader": { label: "プロジェクトリーダー" },
//   "test-engineer": { label: "テストエンジニア" },
//   "database-engineer": { label: "データベースエンジニア" },
//   "security-engineer": { label: "セキュリティエンジニア" },
//   "infrastructure-engineer": { label: "インフラエンジニア" },
//   "network-engineer": { label: "ネットワークエンジニア" },
//   "server-engineer": { label: "サーバーエンジニア" },
//   "support-engineer": { label: "サポートエンジニア" },
//   "help-desk": { label: "ヘルプデスク" },
//   "markup-engineer": { label: "マークアップエンジニア" },
//   "mobile-engineer": { label: "モバイルアプリエンジニア " },
// };

export const EMPLOYEES = {
  fulltime: { label: "正社員" },
  contract: { label: "契約社員" },
  temporary: { label: "派遣社員" },
  freelance: { label: "フリーランス" },
  president: { label: "社長" },
  officer: { label: "役員" },
  "part-time": { label: "転職活動中" },
  intern: { label: "アルバイト" },
  "during-job-change": { label: "インターン" },
};

export const USER_STATUS_MATCHING = {
  "can-talk": {
    label: "今すぐ話せます",
    mode: "orange",
    bg: "#FF9458",
    color: "#FFFFFF",
  },
  "looking-for-friend": {
    label: "友達募集しています",
    mode: "cleam",
    bg: "rgb(255, 249, 229)",
    color: "rgb(26, 41, 68)",
  },
  "need-consult": {
    label: "相談に乗って欲しいです",
    mode: "info",
    bg: "#03BCDB",
    color: "#FFFFFF",
  },
};

export const JOBS = [
  {
    label: "職種",
    value: "",
  },
  {
    label: "フロントエンドエンジニア",
    value: "frontend",
  },
  {
    label: "バックエンドエンジニア",
    value: "backend",
  },
  {
    label: "データサイエンティスト",
    value: "data-scientist",
  },
  {
    label: "プロジェクトマネージャー",
    value: "project-manager",
  },
  {
    label: " プロジェクトリーダー",
    value: "project-leader",
  },
  {
    label: "テストエンジニア",
    value: "test-engineer",
  },
  {
    label: "データベースエンジニア",
    value: "database-engineer",
  },
  {
    label: "セキュリティエンジニア",
    value: "security-engineer",
  },
  {
    label: "インフラエンジニア",
    value: "infrastructure-engineer",
  },
  {
    label: "ネットワークエンジニア",
    value: "network-engineer",
  },
  {
    label: "サーバーエンジニア",
    value: "server-engineer",
  },
  {
    label: "サポートエンジニア",
    value: "support-engineer",
  },
  {
    label: "ヘルプデスク",
    value: "help-desk",
  },
  {
    label: "マークアップエンジニア",
    value: "markup-engineer",
  },
  {
    label: "モバイルアプリエンジニア ",
    value: "mobile-engineer",
  },
];

export const EMPLOYEE_STATUS = [
  {
    label: "雇用状態",
    value: "",
  },
  {
    label: "正社員",
    value: "fulltime",
  },
  {
    label: "契約社員",
    value: "contract",
  },
  {
    label: "派遣社員",
    value: "temporary",
  },
  {
    label: "フリーランス",
    value: "freelance",
  },
  {
    label: "社長",
    value: "president",
  },
  {
    label: "役員",
    value: "officer",
  },
  {
    label: " 転職活動中",
    value: "part-time",
  },
  {
    label: "アルバイト",
    value: "intern",
  },
  {
    label: "インターン",
    value: "during-job-change",
  },
];

export const LEVELS = [
  {
    label: "触れた程度",
    value: 1,
  },
  {
    label: "独学で経験あり",
    value: 2,
  },
  {
    label: "他者に補助を受けながらコーディングが可能",
    value: 3,
  },
  {
    label: "独力でコーディング可能",
    value: 4,
  },
  {
    label: "他者のコードをレビュー可能",
    value: 5,
  },
];

export const ENGLISH_LEVEL_OPTIONS = [
  {
    label: "選択してください",
    value: "",
  },
  {
    label: "ネイティブ ",
    value: "native_speaker",
  },
  {
    label: "ビジネス会話レベル",
    value: "communicate_at_work",
  },
  {
    label: "日常会話レベル",
    value: "day_communication",
  },
  {
    label: "話せない",
    value: "can_not_use",
  },
];

export const TEXT_ENGLISH_LEVEL_OPTIONS = {
  native_speaker: { label: "ネイティブ" },
  communicate_at_work: { label: "ビジネス会話レベル" },
  day_communication: { label: "日常会話レベル" },
  can_not_use: { label: "話せない" },
};

export const jobs = [
  {
    label: "職種",
    value: 0,
  },
  {
    label: "フロントエンドエンジニア",
    value: "frontend",
  },
  {
    label: "バックエンドエンジニア",
    value: "backend",
  },
  {
    label: "データサイエンティスト",
    value: "data-scientist",
  },
  {
    label: "プロジェクトマネージャー",
    value: "project-manager",
  },
  {
    label: " プロジェクトリーダー",
    value: "project-leader",
  },
  {
    label: "テストエンジニア",
    value: "test-engineer",
  },
  {
    label: "データベースエンジニア",
    value: "database-engineer",
  },
  {
    label: "セキュリティエンジニア",
    value: "security-engineer",
  },
  {
    label: "インフラエンジニア",
    value: "infrastructure-engineer",
  },
  {
    label: "ネットワークエンジニア",
    value: "network-engineer",
  },
  {
    label: "サーバーエンジニア",
    value: "server-engineer",
  },
  {
    label: "サポートエンジニア",
    value: "support-engineer",
  },
  {
    label: "ヘルプデスク",
    value: "help-desk",
  },
  {
    label: "マークアップエンジニア",
    value: "markup-engineer",
  },
];

export const employeeStatus = [
  {
    label: "雇用状態",
    value: 0,
  },
  {
    label: "正社員",
    value: "fulltime",
  },
  {
    label: "契約社員",
    value: "contract",
  },
  {
    label: "派遣社員",
    value: "temporary",
  },
  {
    label: "フリーランス",
    value: "freelance",
  },
  {
    label: "社長",
    value: "president",
  },
  {
    label: "役員",
    value: "officer",
  },
  {
    label: " 転職活動中",
    value: "part-time",
  },
  {
    label: "アルバイト",
    value: "intern",
  },
  {
    label: "インターン",
    value: "during-job-change",
  },
];

export const typeTimeLogin = {
  login: 1,
  one_hour: 2,
  one_day: 3,
  on_day_to_week: 4,
  week_to_two_week: 5,
  two_week_to_month: 6,
  month_or_than: 7,
};

export const lastLogins = [
  {
    label: "最終ログイン",
    value: 0,
  },
  {
    label: "ログイン中",
    value: 1,
  },
  {
    label: "1時間以内",
    value: 2,
  },
  {
    label: "24時間以内",
    value: 3,
  },
  {
    label: "1日〜1週間",
    value: 4,
  },
  {
    label: "週間〜2週間",
    value: 5,
  },
  {
    label: "2週間〜1ヶ月",
    value: 6,
  },
  {
    label: " 1ヶ月以上",
    value: 7,
  },
];

export const reviews = [
  {
    label: "レビュー",
    value: 0,
  },
  {
    label: "レビュー0件を除く",
    value: 1,
  },
  {
    label: "10件未満",
    value: 2,
  },
  {
    label: "11〜50件",
    value: 3,
  },
  {
    label: "51〜100件",
    value: 4,
  },
  {
    label: " 100件以上",
    value: 5,
  },
];

export const typeReview = {
  no_0: 1,
  less_than_10: 2,
  from_11_to_50: 3,
  from_51_to_100: 4,
  more_than_100: 5,
};
