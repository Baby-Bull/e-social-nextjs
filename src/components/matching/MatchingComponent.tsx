import React from "react";
import { Box } from "@mui/material";

import ContentComponent from "src/components/layouts/ContentComponent";
import TabComponent from "src/components/matching/TabComponent";

interface IProps {}

interface IState {
  tabs: any;
}

class MatchingComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      tabs: [
        {
          text: "マッチングリクエスト",
          icon: <img src="/assets/images/svg/person.svg" alt="person" />,
          children: [
            {
              text: "未承認リクエスト",
              data: [
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                },
              ],
              count: 6,
            },
            {
              text: "承認済みリクエスト",
              data: [
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: false,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: false,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: true,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: false,
                },
              ],
            },
            {
              text: "否承認リクエスト",
              data: [
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                },
              ],
            },
          ],
        },
        {
          text: "申請中のマッチング",
          icon: <img src="/assets/images/svg/pan_tool.svg" alt="pan_tool" />,
          children: [
            {
              text: "未承認",
              data: [
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                  is_cancel: true,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                  is_cancel: true,
                },
              ],
              count: 4,
            },
            {
              text: "マッチング済み",
              data: [
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: false,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: false,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: true,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  is_reviewed: false,
                },
              ],
            },
            {
              text: "否承認",
              data: [
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                },
                {
                  avatar: "/assets/images/svg/account.svg",
                  name: "佐藤 太郎",
                  date_request: "2021年8月27日13時48分にリクエスト",
                  job: "フロントエンドエンジニア",
                  last_login: "8分前",
                  purpose: "カジュアルにお会いしたい",
                  date_interview: "10月19日希望",
                  message: `コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されますコメントがここに全文表示されます
                  コメントがここに全文表示されますコメントがここに全文表示されます。`,
                },
              ],
            },
          ],
        },
        {
          text: "話したい人リスト",
          icon: <img src="/assets/images/svg/favorite.svg" alt="favorite" />,
          data: [
            {
              avatar: "/assets/images/svg/account.svg",
              name: "佐藤 太郎",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_applied: false,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "佐藤 太郎",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_applied: false,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "佐藤 太郎",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_applied: true,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "佐藤 太郎",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_applied: false,
            },
          ],
        },
        {
          text: "マッチング済",
          icon: <img src="/assets/images/svg/perm_contact_calendar.svg" alt="perm_contact_calendar" />,
          data: [
            {
              avatar: "/assets/images/svg/account.svg",
              avatar2: "/assets/images/svg/account_2.svg",
              name: "佐藤 太郎",
              date_request: "2021年8月27日13時48分にリクエスト",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_send_message: false,
              is_reviewed: false,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              avatar2: "/assets/images/svg/account_2.svg",
              name: "佐藤 太郎",
              date_request: "2021年8月27日13時48分にリクエスト",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_send_message: false,
              is_reviewed: false,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              avatar2: "/assets/images/svg/account_2.svg",
              name: "佐藤 太郎",
              date_request: "2021年8月27日13時48分にリクエスト",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_send_message: true,
              is_reviewed: true,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              avatar2: "/assets/images/svg/account_2.svg",
              name: "佐藤 太郎",
              date_request: "2021年8月27日13時48分にリクエスト",
              job: "フロントエンドエンジニア",
              last_login: "8分前",
              message: `ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。
              ここには話したいことのテキストが入ります。最大2行の表示です。ここには話した...`,
              is_send_message: true,
              is_reviewed: false,
            },
          ],
        },
        {
          text: "参加中のコミュニティ",
          icon: <img src="/assets/images/svg/stars.svg" alt="stars" />,
          data: [
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
            {
              avatar: "/assets/images/svg/account.svg",
              name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
              count_member: 0,
            },
          ],
        },
      ],
    };
  }

  render() {
    const { tabs } = this.state;

    return (
      <ContentComponent>
        <Box
          sx={{
            mt: ["9px", "84px"],
            px: [0, "8.4%"],
            mb: ["0", "114px"],
          }}
        >
          <TabComponent data={tabs} />
        </Box>
      </ContentComponent>
    );
  }
}
export default MatchingComponent;
