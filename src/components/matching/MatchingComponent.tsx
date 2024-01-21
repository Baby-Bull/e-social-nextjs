import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

import useViewport from "src/helpers/useViewport";
import TabComponent from "src/components/matching/TabComponent";
import { getMatchingRequestReceived, getMatchingRequestSent } from "src/services/matching";
import { getListUserFavorite } from "src/services/user";
import { getAllCommunitiesByUser } from "src/services/community";
import { TAB_VALUE_BY_KEY, TYPE } from "src/constants";
import { IStoreState } from "src/constants/interfaces";

const MatchingComponent = () => {
  const typeQuery = (useRouter()?.query?.type as string) || "received";
  const { t } = useTranslation();
  const viewPort = useViewport();
  const auth = useSelector((state: IStoreState) => state.user);
  const isMobile = viewPort.width <= 992;
  const LIMITCOUNTPERPAGE = 10;
  const LIMITCOUNTPAGECOMMUNITY = isMobile ? 4 : 8;

  const [tabs, setTabs] = useState([
    {
      text: isMobile ? t("home:matching.request-m") : t("home:matching.request"),
      icon: <img src="/assets/images/svg/person.svg" alt="person" />,
      type: TYPE.RECEIVED,
      tabValue: TAB_VALUE_BY_KEY.received,
      isFetched: false,
      children: [
        {
          text: "Pending",
          data: [],
          page: 1,
          hasNextpage: false,
          count: 0,
          key: "pending",
        },
        {
          text: "Rejected",
          data: [],
          page: 1,
          hasNextpage: false,
          count: 0,
          key: "rejected",
        },
      ],
    },
    {
      text: isMobile ? t("home:matching.application-m") : t("home:matching.application"),
      icon: <img src="/assets/images/svg/pan_tool.svg" alt="pan_tool" />,
      type: TYPE.SENT,
      tabValue: TAB_VALUE_BY_KEY.sent,
      isFetched: false,
      children: [
        {
          text: "Pending",
          data: [],
          page: 1,
          hasNextpage: false,
          count: 0,
          key: "pending",
        },
        {
          text: "Rejected",
          data: [],
          page: 1,
          hasNextpage: false,
          count: 0,
          key: "rejected",
        },
      ],
    },
    {
      text: isMobile ? t("home:matching.people-m") : t("home:matching.people"),
      icon: <img src="/assets/images/svg/favorite.svg" alt="favorite" />,
      data: [],
      page: 1,
      hasNextpage: false,
      type: TYPE.FAVORITE,
      tabValue: TAB_VALUE_BY_KEY.favorite,
      isFetched: false,
    },
    {
      text: isMobile ? t("home:matching.matched-m") : t("home:matching.matched"),
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
      cursor: "",
      hasMore: false,
    },
    {
      text: isMobile ? t("home:matching.community-m") : t("home:matching.community"),
      icon: <img src="/assets/images/svg/stars.svg" alt="stars" />,
      type: TYPE.COMMUNITY,
      tabValue: TAB_VALUE_BY_KEY.community,
      data: [],
      page: 1,
      hasNextpage: false,
    },
  ]);
  const [keyRefetchData, setKeyRefetchData] = useState(null);
  const [tabValue, setTabValue] = useState(TAB_VALUE_BY_KEY[typeQuery]);
  const [checkLoadingReceived, setCheckLoadingReceived] = useState(false);
  const [checkLoadingSend, setCheckLoadingSend] = useState(false);
  const [checkLoadingFavorite, setCheckLoadingFavorite] = useState(false);
  const [checkLoadingCommunity, setCheckLoadingCommunity] = useState(false);

  useEffect(() => {
    setTabValue(TAB_VALUE_BY_KEY[typeQuery]);
  }, [typeQuery]);

  useEffect(() => {
    const refetchData = async () => {
      let dataRefetch;
      const tabTemp = tabs?.find((item) => item?.tabValue === tabValue);
      if (tabTemp && (keyRefetchData || !tabTemp?.isFetched)) {
        switch (tabValue) {
          case TAB_VALUE_BY_KEY.received:
            dataRefetch = [
              getMatchingRequestReceived("sent_pending", LIMITCOUNTPERPAGE, 1),
              // getMatchingRequestReceived(LIMIT, "", "confirmed"),
              getMatchingRequestReceived("rejected", LIMITCOUNTPERPAGE, 1),
            ];
            break;
          case TAB_VALUE_BY_KEY.sent:
            dataRefetch = [
              getMatchingRequestSent("sent_pending", LIMITCOUNTPERPAGE, 1),
              // getMatchingRequestSent(LIMIT, "", "confirmed"),
              getMatchingRequestSent("rejected", LIMITCOUNTPERPAGE, 1),
            ];
            break;
          case TAB_VALUE_BY_KEY.favorite: {
            const res = await getListUserFavorite(LIMITCOUNTPERPAGE, 1);
            tabTemp.data = res.data || [];
            tabTemp.page = res.meta?.page || 1;
            tabTemp.hasNextpage = res.meta?.hasNextpage || false;
            tabTemp.isFetched = true;
            setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
            setCheckLoadingFavorite(true);
            break;
          }
          case TAB_VALUE_BY_KEY.community: {
            const res = await getAllCommunitiesByUser(auth?.id, LIMITCOUNTPAGECOMMUNITY, 1);
            tabTemp.data = res.data || [];
            tabTemp.page = res.meta?.page || 1;
            tabTemp.hasNextpage = res.meta?.hasNextpage || false;
            tabTemp.isFetched = true;
            setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
            setCheckLoadingCommunity(true);
            break;
          }
          default:
            break;
        }
        if (dataRefetch && dataRefetch.length) {
          const result = await Promise.all(dataRefetch);
          tabTemp.children = tabTemp?.children?.map((item: any, index: number) => ({
            ...item,
            data: result[index]?.data?.reverse() || [],
            page: result[index]?.meta?.page || 1,
            hasNextpage: result[index]?.meta?.hasNextpage || false,
            count: result[index]?.meta?.itemCount,
          }));
          tabTemp.isFetched = true;
          switch (tabValue) {
            case TAB_VALUE_BY_KEY.received:
              setCheckLoadingReceived(true);
              break;
            case TAB_VALUE_BY_KEY.sent:
              setCheckLoadingSend(true);
              break;
            default:
              break;
          }
          setTabs(tabs.map((item) => (item?.tabValue === tabValue ? tabTemp : item)));
        }
      }
    };
    refetchData();
  }, [keyRefetchData, tabValue]);

  return (
    <Box
      sx={{
        minHeight: `calc(100vh - 19.7em)`,
        mt: ["88px", "0px"],
        px: [0, "8.4%"],
        pt: [0, "148px"],
        mb: ["0", "114px"],
      }}
    >
      <TabComponent
        tabValue={tabValue}
        setTabValue={setTabValue}
        data={tabs}
        setKeyRefetchData={setKeyRefetchData}
        checkLoadingFavorite={checkLoadingFavorite}
        checkLoadingCommunity={checkLoadingCommunity}
        checkLoadingReceived={checkLoadingReceived}
        checkLoadingSend={checkLoadingSend}
      />
    </Box>
  );
};

export default MatchingComponent;
