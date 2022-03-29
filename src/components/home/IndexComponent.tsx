import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import ContentComponent from "src/components/layouts/ContentComponent";
import { getUserFavoriteTags } from "src/services/user";

import BannerComponent from "./blocks/BannerComponent";
import MatchingComponent from "./blocks/MatchingComponent";
import ModalMatchingComponent from "./blocks/ModalMatchingComponent";
import NotificationComponent from "./blocks/NotificationsComponent";
import RecommendCommunityComponent from "./blocks/RecommendCommunityComponent";
import RecommendMembersComponent from "./blocks/RecommendMembersComponent";
import { recommendMembers } from "./mockData/mockData";

const HomeIndexComponents = () => {
  const { t } = useTranslation();
  const [memberRecommends, setMemberRecommends] = useState([]);

  // get favorite-tags users
  const [cursorUserFavoriteTags, setCursorUserFavoriteTags] = useState("");
  const [userFavoriteTagsData, setUserFavoriteTagsData] = useState([]);
  const limit = 10;
  useEffect(() => {
    const fetchUserFavoriteTags = async () => {
      const res = await getUserFavoriteTags(limit, cursorUserFavoriteTags);
      setUserFavoriteTagsData([...userFavoriteTagsData, res?.items]);
      if (res?.hasMore) {
        setCursorUserFavoriteTags(res?.cursor);
      }
    };
    fetchUserFavoriteTags();
  }, [cursorUserFavoriteTags]);

  useEffect(() => {
    setMemberRecommends([
      // Newest
      {
        title: t("home:register-newest"),
        data: recommendMembers(),
      },

      // recent-login-member
      {
        title: t("home:recent-login-member"),
        data: recommendMembers(),
      },

      // member-favorite-area
      {
        title: t("home:member-favorite-area"),
        data: recommendMembers(),
      },

      // member-favorite-tags
      {
        title: t("home:member-favorite-tags"),
        data: userFavoriteTagsData,
      },
    ]);
  }, []);

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
