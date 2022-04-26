export const REGEX_RULES = {
  username_register: /^[一-龯ぁ-んァ-ンa-zA-Z0-9\w]+$/,
  only_japanese: /^[一-龯ぁ-んァ-ン]+$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const VALIDATE_MESSAGE_FORM_REGISTER = {
  username: {
    required: "ユーザー名を入力してください",
    invalid: "ひらがな、カタカナ、漢字、a〜zの文字、0〜9の数字を含むユーザー名を入力してください。",
    max_length: "文字数オーバーです。50文字以内で入力してください。",
  },
  birthday: {
    required: "生年月日を入力してください",
    future_input: "今日より前の日付を入力してください（今日選択可能）",
    invalid_date: "無効な日付 (dd/MM/yyyy)",
  },
  status: {
    required: "ステータスを選択してください",
  },
  email: {
    required: "「tanakataro@rebase.co.jp」の形式でメールアドレスを入力してください",
    invalid:
      "メールアドレスの形式は正しくありません。「tanakataro@rebase.co.jp」の形式でメールアドレスを入力してください",
  },
  address: {
    required: "お住まいの地域を選択してください",
  },
  tags: {
    required: "タグを入力してください",
    max_length: "1タグにつき20文字以内で入力してください",
    min_count: "タグの数は2以上である必要があります",
  },
  checkbox: "利用規約に同意してください",
};

export const VALIDATE_FORM_MATCHING_REQUEST = {
  purpose: {
    required: "選択してください",
  },
  message: {
    max_length: "文字数の制限を超えています。1000文字以内で入力してください",
  },
  desired_match_date: {
    invalid_date: "日付値が無効です",
  },
};

export const VALIDATE_FORM_USER_PORT = {
  reason: {
    required: "通報理由を選択してください。",
  },
};
