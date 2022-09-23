/* eslint-disable no-unused-vars */
import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";

import { REACT_QUERY_KEYS } from "src/constants/constants";
import ContentComponent from "src/components/layouts/ContentComponent";
import {
  getUserFavoriteTags,
  getUserProvince,
  getUserRecentlyLogin,
  getUserNewMembers,
  addUserFavorite,
} from "src/services/user";
import { acceptMatchingRequestReceived, sendMatchingRequest } from "src/services/matching";
import theme from "src/theme";
import { getListCommunityHome } from "src/services/community";

import BannerComponent from "./blocks/BannerComponent";

const NotificationComponent = dynamic(() => import("./blocks/NotificationsComponent"), {
  ssr: true,
}) as any;

const ModalMatchingComponent = dynamic(() => import("./blocks/ModalMatchingComponent"), {
  ssr: true,
}) as any;

const MatchingComponent = dynamic(() => import("./blocks/MatchingComponent"), {
  ssr: true,
}) as any;

const RecommendCommunityComponent = dynamic(() => import("./blocks/RecommendCommunityComponent"), {
  ssr: true,
}) as any;

const RecommendMembersComponent = dynamic(() => import("./blocks/RecommendMembersComponent"), {
  ssr: true,
}) as any;

const LIMIT = 20;

const HomeIndexComponents = () => {
  const { t } = useTranslation();
  const [recommendCommunity, setRecommendCommunity] = useState([]);
  const [memberRecommends, setMemberRecommends] = useState([
    // Newest
    {
      title: t("home:register-newest"),
      data: [],
    },

    // recent-login-member
    {
      title: t("home:recent-login-member"),
      data: [],
    },

    // member-favorite-area
    {
      title: t("home:member-favorite-area"),
      data: [],
    },

    // member-favorite-tags
    {
      title: t("home:member-favorite-tags"),
      data: [],
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const getCommunity = async (cursor: string = "") => {
    const res = await getListCommunityHome(LIMIT, cursor);
    setRecommendCommunity(res?.items);
    return res;
  };

  const {
    data: userProvinceData,
    refetch: refetchUserProvince,
    isLoading: isLoading1,
  } = useQuery(
    REACT_QUERY_KEYS.HOMEPAGE_GET_USER_PROVINCES,
    async () => {
      setIsLoading(false);
      const res = await getUserProvince(LIMIT);
      return res?.items?.filter((item: any) => item?.match_status !== "confirmed") || [];
    },
    {
      refetchOnWindowFocus: false,
    },
  );
  const {
    data: userRecentlyLoginData,
    refetch: refetchRecentlyLoginData,
    isLoading: isLoading2,
  } = useQuery(
    REACT_QUERY_KEYS.HOMEPAGE_GET_USER_RECENT_LOGIN,
    async () => {
      setIsLoading(false);
      const res = await getUserRecentlyLogin(LIMIT);
      return res?.items?.filter((item: any) => item?.match_status !== "confirmed") || [];
    },
    {
      refetchOnWindowFocus: false,
    },
  );
  const {
    data: userNewMember,
    refetch: refetchNewMember,
    isLoading: isLoading3,
  } = useQuery(
    REACT_QUERY_KEYS.HOMEPAGE_GET_USER_NEW_MEMBERS,
    async () => {
      setIsLoading(false);
      const res = await getUserNewMembers(LIMIT);
      return res?.items?.filter((item: any) => item?.match_status !== "confirmed") || [];
    },
    {
      refetchOnWindowFocus: false,
    },
  );
  const {
    data: userFavoriteTagsData,
    refetch: refetchFavoriteTags,
    isLoading: isLoading4,
  } = useQuery(
    REACT_QUERY_KEYS.HOMEPAGE_GET_USER_FAVORITE_TAGS,
    async () => {
      setIsLoading(false);
      const res = await getUserFavoriteTags(LIMIT);
      return res?.items?.filter((item: any) => item?.match_status !== "confirmed") || [];
    },
    {
      refetchOnWindowFocus: false,
    },
  );
  useEffect(() => {
    getCommunity();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading1, isLoading2, isLoading3, isLoading4]);

  useEffect(() => {
    const memberRecommendsTmp = [...memberRecommends];
    memberRecommendsTmp[0].data = userNewMember || [];
    setMemberRecommends(memberRecommendsTmp);
  }, [userNewMember]);

  useEffect(() => {
    const memberRecommendsTmp = [...memberRecommends];
    memberRecommendsTmp[1].data = userRecentlyLoginData || [];
    setMemberRecommends(memberRecommendsTmp);
  }, [userRecentlyLoginData]);

  useEffect(() => {
    const memberRecommendsTmp = [...memberRecommends];
    memberRecommendsTmp[2].data = userProvinceData || [];
    setMemberRecommends(memberRecommendsTmp);
  }, [userProvinceData]);

  useEffect(() => {
    const memberRecommendsTmp = [...memberRecommends];
    memberRecommendsTmp[3].data = userFavoriteTagsData || [];
    setMemberRecommends(memberRecommendsTmp);
  }, [userFavoriteTagsData]);

  const [openModal, setOpenModal] = useState(false);
  const [userRequestMatching, setUserRequestMatching] = useState(null);
  const indexRefetch = useRef(null);

  const handleRefetchData = () => {
    switch (indexRefetch.current) {
      case 0:
        refetchNewMember();
        break;
      case 1:
        refetchRecentlyLoginData();
        break;
      case 2:
        refetchUserProvince();
        break;
      case 3:
        refetchFavoriteTags();
        break;
      default:
        break;
    }
  };

  const handleSendMatchingRequest = async (matchingRequest: any) => {
    const res = await sendMatchingRequest(userRequestMatching?.id, matchingRequest);
    await addUserFavorite(userRequestMatching?.id);
    setOpenModal(false);
    handleRefetchData();
    return res;
  };

  const handleOpenMatchingModal = (userMatching: any, index: number) => {
    setOpenModal(true);
    setUserRequestMatching(userMatching);
    indexRefetch.current = index;
  };

  const handleAcceptMatchingRequestReceived = async (userSendMatching: any, index: number) => {
    await acceptMatchingRequestReceived(userSendMatching?.match_request?.id);
    indexRefetch.current = index;
    handleRefetchData();
  };

  return (
    <ContentComponent>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "65px",
        }}
      >
        <BannerComponent />
        <Grid
          container
          sx={{
            maxWidth: "1440px",
          }}
        >
          <NotificationComponent />
          <MatchingComponent />

          <RecommendCommunityComponent recommendCommunity={recommendCommunity} />
          {memberRecommends?.map((item, index) => (
            <RecommendMembersComponent
              title={item?.title}
              dataRecommends={item?.data}
              key={index}
              indexFetch={index}
              handleOpenMatchingModal={handleOpenMatchingModal}
              handleAcceptMatchingRequestReceived={handleAcceptMatchingRequestReceived}
            />
          ))}
          {openModal && (
            <ModalMatchingComponent
              userRequestMatching={userRequestMatching}
              open={openModal}
              setOpen={setOpenModal}
              handleSendMatchingRequest={handleSendMatchingRequest}
            />
          )}
        </Grid>
      </Box>
    </ContentComponent>
  );
};
export default HomeIndexComponents;
