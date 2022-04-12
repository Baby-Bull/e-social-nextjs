import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import ContentComponent from "src/components/layouts/ContentComponent";
import TabComponent from "src/components/matching/TabComponent";
import { getMatchingRequestSent, getMatchingRequestReceived } from "src/services/matching";
import { getUserFavorite } from "src/services/user";
import { TYPE } from "src/constants/matching";

const LIMIT = 20;
// const STATUS_MATCHING = ["pending", "confirmed", "rejected"];

const MatchingComponent = () => {
  const [tabs, setTabs] = useState([]);
  const [keyRefetchData, setKeyRefetchData] = useState(null);

  useEffect(() => {
    const refetchData = async () => {
      if (keyRefetchData?.type) {
        const type = keyRefetchData?.type;
        let dataRefetch;
        if (type === TYPE.RECEIVE) {
          dataRefetch = [
            getMatchingRequestReceived(LIMIT, "", "pending"),
            getMatchingRequestReceived(LIMIT, "", "confirmed"),
            getMatchingRequestReceived(LIMIT, "", "rejected"),
          ];
        } else {
          dataRefetch = [
            getMatchingRequestSent(LIMIT, "", "pending"),
            getMatchingRequestSent(LIMIT, "", "confirmed"),
            getMatchingRequestSent(LIMIT, "", "rejected"),
          ];
        }

        const result = await Promise.all(dataRefetch);
        const tabTemp = tabs?.find((item) => item?.type === type);
        tabTemp?.children?.map((item: any, index: number) => ({
          ...item,
          data: result[index].items?.reverse() || [],
          count: result[index].items?.length,
        }));
        setTabs(tabs.map((item) => (item?.type === type ? tabTemp : item)));
      }

      if (keyRefetchData?.type === TYPE.FAVORITE) {
        const dataRefetch = await getUserFavorite(LIMIT, "");
        const tabTemp = tabs?.find((item) => item?.type === keyRefetchData?.type);
        tabTemp.data = dataRefetch.items || [];
        setTabs(tabs.map((item) => (item?.type === keyRefetchData?.type ? tabTemp : item)));
      }
    };
    refetchData();
  }, [keyRefetchData]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchDataPromise = [
        getMatchingRequestReceived(LIMIT, "", "pending"),
        getMatchingRequestReceived(LIMIT, "", "confirmed"),
        getMatchingRequestReceived(LIMIT, "", "rejected"),
        getMatchingRequestSent(LIMIT, "", "pending"),
        getMatchingRequestSent(LIMIT, "", "confirmed"),
        getMatchingRequestSent(LIMIT, "", "rejected"),
        getUserFavorite(LIMIT, ""),
      ];
      const res = await Promise.all(fetchDataPromise);
      setTabs([
        {
          text: "マッチングリクエスト",
          icon: <img src="/assets/images/svg/person.svg" alt="person" />,
          type: TYPE.RECEIVE,
          children: [
            {
              text: "未承認リクエスト",
              data: res[0].items?.reverse() || [],
              count: res[0].items?.length,
              key: "pending",
            },
            {
              text: "承認済みリクエスト",
              data: res[1].items?.reverse() || [],
              count: res[1].items?.length,
              key: "confirmed",
            },
            {
              text: "否承認リクエスト",
              data: res[2].items?.reverse() || [],
              count: res[2].items?.length,
              key: "rejected",
            },
          ],
        },
        {
          text: "申請中のマッチング",
          icon: <img src="/assets/images/svg/pan_tool.svg" alt="pan_tool" />,
          type: TYPE.SENT,
          children: [
            {
              text: "未承認",
              data: res[3].items?.reverse() || [],
              count: res[3].items?.length,
              key: "pending",
            },
            {
              text: "マッチング済み",
              data: res[4].items?.reverse() || [],
              count: res[4].items?.length,
              key: "confirmed",
            },
            {
              text: "否承認",
              data: res[5].items?.reverse() || [],
              count: res[5].items?.length,
              key: "rejected",
            },
          ],
        },
        {
          text: "話したい人リスト",
          icon: <img src="/assets/images/svg/favorite.svg" alt="favorite" />,
          data: res[6].items?.reverse() || [],
          type: TYPE.FAVORITE,
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
      ]);
    };
    fetchData();
  }, []);

  return (
    <ContentComponent>
      <Box
        sx={{
          mt: ["9px", "84px"],
          px: [0, "8.4%"],
          mb: ["0", "114px"],
        }}
      >
        <TabComponent data={tabs} setKeyRefetchData={setKeyRefetchData} />
      </Box>
    </ContentComponent>
  );
};

export default MatchingComponent;
