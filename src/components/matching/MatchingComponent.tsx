import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import ContentComponent from "src/components/layouts/ContentComponent";
import TabComponent from "src/components/matching/TabComponent";
import { getMatchingRequestReceivedPromise, getMatchingRequestSentPromise } from "src/services/matching";
import { getUserFavorite } from "src/services/user";
import { TAB_VALUE_BY_KEY, TYPE } from "src/constants/matching";

const LIMIT = 20;

const MatchingComponent = () => {
  const typeQuery = useRouter()?.query?.type as string;

  const [tabs, setTabs] = useState([
    {
      text: "マッチングリクエスト",
      icon: <img src="/assets/images/svg/person.svg" alt="person" />,
      type: TYPE.RECEIVE,
      tabValue: TAB_VALUE_BY_KEY.unConfirm,
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
      text: "申請中のマッチング",
      icon: <img src="/assets/images/svg/pan_tool.svg" alt="pan_tool" />,
      type: TYPE.SENT,
      tabValue: TAB_VALUE_BY_KEY.confirm,
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
      tabValue: TAB_VALUE_BY_KEY.reject,
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
      tabValue: TAB_VALUE_BY_KEY.other,
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
  ]);
  const [keyRefetchData, setKeyRefetchData] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  React.useEffect(() => {
    if (typeQuery) {
      setTabValue(TAB_VALUE_BY_KEY[typeQuery] || TAB_VALUE_BY_KEY.other);
    } else {
      setTabValue(0);
    }
    return () => {
      setTabValue(0);
    };
  }, [typeQuery]);

  useEffect(() => {
    const refetchData = async () => {
      let dataRefetch;
      switch (tabValue) {
        case TAB_VALUE_BY_KEY.confirm:
          dataRefetch = [
            getMatchingRequestReceivedPromise(LIMIT, "", "pending"),
            getMatchingRequestReceivedPromise(LIMIT, "", "confirmed"),
            getMatchingRequestReceivedPromise(LIMIT, "", "rejected"),
          ];
          break;
        case TAB_VALUE_BY_KEY.unConfirm:
          dataRefetch = [
            getMatchingRequestSentPromise(LIMIT, "", "pending"),
            getMatchingRequestSentPromise(LIMIT, "", "confirmed"),
            getMatchingRequestSentPromise(LIMIT, "", "rejected"),
          ];
          break;
        case TAB_VALUE_BY_KEY.favorite: {
          const res = await getUserFavorite(LIMIT, "");
          const tabTemp = tabs?.find((item) => item?.tabValue === tabValue);
          tabTemp.data = res.items || [];
          setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
          break;
        }
        default:
          break;
      }

      const tabTemp = tabs?.find((item) => item?.tabValue === tabValue);
      if (dataRefetch && dataRefetch.length && (keyRefetchData || !tabTemp?.isFetched)) {
        const result = await Promise.all(dataRefetch);
        tabTemp.children = tabTemp?.children?.map((item: any, index: number) => ({
          ...item,
          data: result[index]?.data?.items?.reverse() || [],
          count: result[index]?.data?.items?.length,
        }));
        tabTemp.isFetched = true;
        setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
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
