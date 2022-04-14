import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";

import ContentComponent from "src/components/layouts/ContentComponent";
import { getUserFavoriteTags, getUserProvince, getUserRecentlyLogin, getUserNewMembers } from "src/services/user";
import { sendMatchingRequest } from "src/services/matching";

// import { REACT_QUERY_KEYS } from "../constants/constants";

import theme from "../../theme";

import BannerComponent from "./blocks/BannerComponent";
import MatchingComponent from "./blocks/MatchingComponent";
import ModalMatchingComponent from "./blocks/ModalMatchingComponent";
import NotificationComponent from "./blocks/NotificationsComponent";
import RecommendCommunityComponent from "./blocks/RecommendCommunityComponent";
import RecommendMembersComponent from "./blocks/RecommendMembersComponent";

const LIMIT = 20;

const HomeIndexComponents = () => {
  const { t } = useTranslation();
  const [memberRecommends, setMemberRecommends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get users_provinces
  // const { data: userProvinceData } = useQuery(REACT_QUERY_KEYS.HOMEPAGE_GET_USER_PROVINCES, async () => {
  //   const res = await getUserProvince(LIMIT);
  //   return res?.items || [];
  // });
  // const { data: userRecentlyLoginData } = useQuery(REACT_QUERY_KEYS.HOMEPAGE_GET_USER_RECENT_LOGIN, async () => {
  //   const res = await getUserRecentlyLogin(LIMIT);
  //   return res?.items || [];
  // });
  // const { data: userNewMember } = useQuery(REACT_QUERY_KEYS.HOMEPAGE_GET_USER_NEW_MEMBERS, async () => {
  //   const res = await getUserNewMembers(LIMIT);
  //   return res?.items || [];
  // });
  // const { data: userFavoriteTagsData } = useQuery(REACT_QUERY_KEYS.HOMEPAGE_GET_USER_FAVORITE_TAGS, async () => {
  //   const res = await getUserFavoriteTags(LIMIT);
  //   return res?.items || [];
  // });

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const fetchDataPromise = [
        getUserProvince(LIMIT),
        getUserRecentlyLogin(LIMIT),
        getUserNewMembers(LIMIT),
        getUserFavoriteTags(LIMIT),
      ];
      const results = await Promise.all(fetchDataPromise);
      setMemberRecommends([
        // Newest
        {
          title: t("home:register-newest"),
          data: results[2]?.items?.reverse() || [],
        },

        // recent-login-member
        {
          title: t("home:recent-login-member"),
          data: results[1]?.items?.reverse() || [],
        },

        // member-favorite-area
        {
          title: t("home:member-favorite-area"),
          data: results[0]?.items || [],
        },

        // member-favorite-tags
        {
          title: t("home:member-favorite-tags"),
          data: results[3]?.items || [],
        },
      ]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [userRequestMatching, setUserRequestMatching] = useState(null);

  const handleSendMatchingRequest = async (matchingRequest) => {
    const res = await sendMatchingRequest(userRequestMatching?.id, matchingRequest);
    setOpenModal(false);
    return res;
  };

  const handleOpenMatchingModal = (userMatching: any) => {
    setOpenModal(true);
    setUserRequestMatching(userMatching);
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
        }}
      >
        <BannerComponent />
        <NotificationComponent />
        <MatchingComponent />

        <RecommendCommunityComponent />
        {memberRecommends?.map((item, index) => (
          <RecommendMembersComponent
            title={item?.title}
            dataRecommends={item?.data}
            key={index}
            handleOpenMatchingModal={handleOpenMatchingModal}
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
      </Box>
    </ContentComponent>
  );
};
export default HomeIndexComponents;
