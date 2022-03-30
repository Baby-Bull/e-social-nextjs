import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import ContentComponent from "src/components/layouts/ContentComponent";
import { getUserFavoriteTags, getUserProvince, getUserRecentlyLogin, getUserNewMembers } from "src/services/user";

import BannerComponent from "./blocks/BannerComponent";
import MatchingComponent from "./blocks/MatchingComponent";
import ModalMatchingComponent from "./blocks/ModalMatchingComponent";
import NotificationComponent from "./blocks/NotificationsComponent";
import RecommendCommunityComponent from "./blocks/RecommendCommunityComponent";
import RecommendMembersComponent from "./blocks/RecommendMembersComponent";

const HomeIndexComponents = () => {
  const { t } = useTranslation();
  const [memberRecommends, setMemberRecommends] = useState([]);

  // get favorite-tags users
  const [cursorUserFavoriteTags, setCursorUserFavoriteTags] = useState("");
  const limit = 10;
  const [userFavoriteTagsData, setUserFavoriteTagsData] = useState([]);
  useEffect(() => {
    const fetchUserFavoriteTags = async () => {
      const res = await getUserFavoriteTags(limit, cursorUserFavoriteTags);
      if (!userFavoriteTagsData.some((e) => e?.id === res?.items[0]?.id)) {
        setUserFavoriteTagsData(userFavoriteTagsData.concat(res?.items));
      }
      if (res?.hasMore) {
        setCursorUserFavoriteTags(res?.cursor);
      }
    };
    fetchUserFavoriteTags();
  }, [cursorUserFavoriteTags, userFavoriteTagsData]);

  // get users_provinces
  const [cursorUserProvince, setCursorUserProvince] = useState("");
  const [userProvinceData, setUserProvinceData] = useState([]);
  useEffect(() => {
    const fetchUserProvince = async () => {
      const res = await getUserProvince(limit, cursorUserProvince);
      if (!userProvinceData.some((e) => e?.id === res?.items[0]?.id)) {
        setUserProvinceData(userProvinceData.concat(res?.items));
      }
      if (res?.hasMore) {
        setCursorUserProvince(res?.cursor);
      }
    };
    fetchUserProvince();
  }, [cursorUserProvince, userProvinceData]);

  // get users_Recently_login
  const [cursorUserRecentlyLogin, setCursorUserRecentlyLogin] = useState("");
  const [userRecentlyLoginData, setUserRecentlyLoginData] = useState([]);
  useEffect(() => {
    const fetchUserRecentlyLogin = async () => {
      const res = await getUserRecentlyLogin(limit, cursorUserRecentlyLogin);
      if (!userRecentlyLoginData.some((e) => e?.id === res?.items[0]?.id)) {
        setUserRecentlyLoginData(userRecentlyLoginData.concat(res?.items));
      }
      if (res?.hasMore) {
        setCursorUserRecentlyLogin(res?.cursor);
      }
    };
    fetchUserRecentlyLogin();
  }, [cursorUserRecentlyLogin, userRecentlyLoginData]);

  // get users_New_members
  const [cursorUserNewMember, setCursorUserNewMember] = useState("");
  const [userNewMember, setUserNewMember] = useState([]);
  useEffect(() => {
    const fetchUserNewMember = async () => {
      const res = await getUserNewMembers(limit, cursorUserNewMember);
      if (!userNewMember.some((e) => e?.id === res?.items[0]?.id) && res?.items) {
        setUserNewMember(userNewMember.concat(res?.items));
      }
      if (res?.hasMore) {
        setCursorUserNewMember(res?.cursor);
      }
    };
    fetchUserNewMember();
  }, [cursorUserNewMember, userNewMember]);

  useEffect(() => {
    setMemberRecommends([
      // Newest
      {
        title: t("home:register-newest"),
        data: userNewMember,
      },

      // recent-login-member
      {
        title: t("home:recent-login-member"),
        data: userRecentlyLoginData,
      },

      // member-favorite-area
      {
        title: t("home:member-favorite-area"),
        data: userProvinceData,
      },

      // member-favorite-tags
      {
        title: t("home:member-favorite-tags"),
        data: userFavoriteTagsData,
      },
    ]);
  }, [userFavoriteTagsData, userProvinceData, userRecentlyLoginData, userNewMember]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <ContentComponent>
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
            setOpenMatchingModal={setOpenModal}
          />
        ))}

        {openModal && <ModalMatchingComponent open={openModal} setOpen={setOpenModal} />}
      </Box>
    </ContentComponent>
  );
};
export default HomeIndexComponents;
