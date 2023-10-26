// eslint-disable-next-line import/prefer-default-export
export const USER_STATUS = {
  online: "online",
  offline: "offline",
};

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

export const MY_PROFILE_STATUS_OPTIONS = [
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
