export const REGEX_RULES = {
  only_japanese: /^[一-龯ぁ-んァ-ン]+$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const VALIDATE_MESSAGE_FORM_REGISTER = {
  username: {
    required: "ユーザー名を入力してください",
    invalid: "ユーザー名は不正な値です。平仮名、カタカナ、漢字以外は認められません。",
    max_length: "文字数オーバーです。50文字以内で入力してください。",
  },
  birthday: {
    required: "生年月日を入力してください",
    future_input: "今日より前の日付を入力してください（今日選択可能）",
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
    max_length: "1タグにつき10文字以内で入力してください",
  },
  checkbox: "利用規約に同意してください",
};
