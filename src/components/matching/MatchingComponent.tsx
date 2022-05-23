import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import ContentComponent from "src/components/layouts/ContentComponent";
import TabComponent from "src/components/matching/TabComponent";
import { getMatchingRequestReceived, getMatchingRequestSent } from "src/services/matching";
import { getUserFavorite } from "src/services/user";
import { getListCommunities } from "src/services/community";
import { TAB_VALUE_BY_KEY, TYPE } from "src/constants/matching";

const LIMIT = 20;

const MatchingComponent = () => {
  const typeQuery = useRouter()?.query?.type as string;

  const [tabs, setTabs] = useState([
    {
      text: "マッチング\nリクエスト",
      icon: <img src="/assets/images/svg/person.svg" alt="person" />,
      type: TYPE.RECEIVED,
      tabValue: TAB_VALUE_BY_KEY.received,
      isFetched: false,
      children: [
        {
          text: "未承認リクエスト",
          data: [],
          count: 0,
          key: "pending",
        },
        {
          text: "承認済みリクエスト",
          data: [],
          count: 0,
          key: "confirmed",
        },
        {
          text: "否承認リクエスト",
          data: [],
          count: 0,
          key: "rejected",
        },
      ],
    },
    {
      text: "申請中の\nマッチング",
      icon: <img src="/assets/images/svg/pan_tool.svg" alt="pan_tool" />,
      type: TYPE.SENT,
      tabValue: TAB_VALUE_BY_KEY.sent,
      isFetched: false,
      children: [
        {
          text: "未承認",
          data: [],
          count: 0,
          key: "pending",
        },
        {
          text: "マッチング済み",
          data: [],
          count: 0,
          key: "confirmed",
        },
        {
          text: "否承認",
          data: [],
          count: 0,
          key: "rejected",
        },
      ],
    },
    {
      text: "話したい人リスト",
      icon: <img src="/assets/images/svg/favorite.svg" alt="favorite" />,
      data: [],
      type: TYPE.FAVORITE,
      tabValue: TAB_VALUE_BY_KEY.favorite,
      isFetched: false,
    },
    {
      text: "マッチング済",
      icon: <img src="/assets/images/svg/perm_contact_calendar.svg" alt="perm_contact_calendar" />,
      type: TYPE.MATCHED,
      tabValue: TAB_VALUE_BY_KEY.matched,
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
      text: "参加中の\nコミュニティ",
      icon: <img src="/assets/images/svg/stars.svg" alt="stars" />,
      type: TYPE.COMMUNITY,
      tabValue: TAB_VALUE_BY_KEY.community,
      data: [
        // {
        //   avatar: "/assets/images/svg/account.svg",
        //   name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
        //   count_member: 0,
        // },
        // {
        //   avatar: "/assets/images/svg/account.svg",
        //   name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
        //   count_member: 0,
        // },
        // {
        //   avatar: "/assets/images/svg/account.svg",
        //   name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
        //   count_member: 0,
        // },
        // {
        //   avatar: "/assets/images/svg/account.svg",
        //   name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
        //   count_member: 0,
        // },
        // {
        //   avatar: "/assets/images/svg/account.svg",
        //   name: "コミュニティの名前がここに入ります。最大文字数40文字で...",
        //   count_member: 0,
        // }
      ],
    },
  ]);
  const [keyRefetchData, setKeyRefetchData] = useState(null);
  const [tabValue, setTabValue] = useState(TAB_VALUE_BY_KEY[typeQuery] || TAB_VALUE_BY_KEY.received);

  useEffect(() => {
    const refetchData = async () => {
      let dataRefetch;
      const tabTemp = tabs?.find((item) => item?.tabValue === tabValue);
      if (tabTemp && (keyRefetchData || !tabTemp?.isFetched)) {
        switch (tabValue) {
          case TAB_VALUE_BY_KEY.received:
            dataRefetch = [
              getMatchingRequestReceived(LIMIT, "", "pending"),
              getMatchingRequestReceived(LIMIT, "", "confirmed"),
              getMatchingRequestReceived(LIMIT, "", "rejected"),
            ];

            break;
          case TAB_VALUE_BY_KEY.sent:
            dataRefetch = [
              getMatchingRequestSent(LIMIT, "", "pending"),
              getMatchingRequestSent(LIMIT, "", "confirmed"),
              getMatchingRequestSent(LIMIT, "", "rejected"),
            ];
            break;
          case TAB_VALUE_BY_KEY.favorite: {
            const res = await getUserFavorite(LIMIT, "");
            tabTemp.data = res.items || [];
            tabTemp.isFetched = true;
            setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
            break;
          }
          case TAB_VALUE_BY_KEY.community: {
            const res = await getListCommunities(LIMIT, "");
            tabTemp.data = res.items || [];
            tabTemp.isFetched = true;
            setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
            break;
          }
          default:
            break;
        }
        if (dataRefetch && dataRefetch.length) {
          const result = await Promise.all(dataRefetch);
          tabTemp.children = tabTemp?.children?.map((item: any, index: number) => ({
            ...item,
            data: result[index]?.items?.reverse() || [],
            count: result[index]?.items?.length,
          }));
          tabTemp.isFetched = true;
          setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
        }
      }
    };
    refetchData();
  }, [keyRefetchData, tabValue]);

  return (
    <ContentComponent>
      <Box
        sx={{
          minHeight: "60vh",
          mt: ["88px"],
          px: [0, "8.4%"],
          mb: ["0", "114px"],
        }}
      >
        <TabComponent tabValue={tabValue} setTabValue={setTabValue} data={tabs} setKeyRefetchData={setKeyRefetchData} />
      </Box>
    </ContentComponent>
  );
};

export default MatchingComponent;
