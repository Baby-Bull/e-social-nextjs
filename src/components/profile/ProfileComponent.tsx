import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import BoxRecommendMemberComponent from "src/components/profile/BoxRecommendMemberComponent";
import ReviewComponent from "src/components/profile/ReviewComponent";
import ParticipatingCommunityComponent from "src/components/profile/ParticipatingCommunityComponent";

import { getCommunites, getOrtherUserProfile } from "../../services/user";

import { review, recommendMember, contentReview } from "./mockData";
import BoxNoDataComponent from "./BoxNoDataComponent";

const ProfileHaveDataComponent = ({ userId }) => {
  const { t } = useTranslation();
  // const LIMIT = 20;
  const [profileSkill, setProfileSkill] = useState([]);
  const [communities, setCommunities] = useState([]);
  // const [recommended, setRecommended] = useState({});

  const fetchProfileSkill = async () => {
    const data = await getOrtherUserProfile(userId);
    setProfileSkill(data);
    return data;
  };

  const fetchCommunities = async () => {
    const data = await getCommunites(userId);
    setCommunities(data);
    return data;
  };
  // const fetchRecommended = async () => {
  //   const data = await getRecommended(LIMIT);
  //   setRecommended(data);
  //   return data;
  // };

  useEffect(() => {
    fetchProfileSkill();
    // fetchRecommended();
    fetchCommunities();
  }, []);

  return (
    <ContentComponent>
      <Box
        sx={{
          p: { xs: "0 20px", lg: "140px 120px 120px 120px" },
        }}
      >
        {/* <TopProfileComponent */}
        {/*  review={review} */}
        {/*  cumulativMatching={cumulativMatching} */}
        {/*  participatingCommunity={participatingCommunity} */}
        {/*  lastLogin={lastLogin} */}
        {/*  myProfile={false} */}
        {/* /> */}
        <ProfileSkillComponent data={profileSkill} />
        <Box
          sx={{
            mt: "40px",
            mb: 3,
            color: "#1A2944",
            fontSize: { xs: "16px", lg: "24px" },
            fontWeight: 700,
          }}
        >
          {t("profile:title-participating-community")} ({communities.length ?? 0})
          {communities.length > 0 ? (
            <ParticipatingCommunityComponent communities={communities} />
          ) : (
            <BoxNoDataComponent content="まだレビューがありません" />
          )}
        </Box>
        <Box
          sx={{
            mt: "40px",
            mb: 3,
            color: "#1A2944",
            fontSize: { xs: "16px", lg: "24px" },
            fontWeight: 700,
          }}
        >
          {t("profile:title-review")}（{review}）
          {contentReview?.map((item) => (
            <ReviewComponent
              statusLogin={item.statusLogin}
              statusReview={item.statusReview}
              content={item.content}
              avatar={item.avatar}
              time={item.time}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            color: "#1A2944",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "35px",
            mb: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {t("profile:title-recommen-member")}
        </Box>
        <Box
          sx={{
            display: "flex",
            ml: { xs: "20px", lg: "38px" },
            mr: { xs: "0", lg: "11px" },
            mb: { xs: "120px", lg: "160px" },
            justifyContent: { xs: "unset", lg: "center" },
            overflowX: { xs: "scroll", lg: "unset" },
          }}
        >
          {recommendMember?.map((item) => (
            <BoxRecommendMemberComponent
              img={item.img}
              color={item.color}
              background={item.background}
              backgroundBtn={item.backgroundBtn}
              recommendMemberName={item.recommendMemberName}
              recommendMemberJob={item.recommendMemberJob}
              recommendMemberEvaluate={item.recommendMemberEvaluate}
              recommendMemberYouSpeak={item.recommendMemberYouSpeak}
              recommendMemberTag={item.recommendMemberTag}
              status={t(item.status)}
              txtBtn={t(item.txtBtn)}
              statusLogin={item.statusLogin}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F5F5F5",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "91.5%",
          opacity: 0.8,
          width: "100%",
        }}
      >
        <Button
          sx={{
            width: "280px",
            height: "56px",
            fontSize: "16px",
            fontWeight: 700,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            lineHeight: "24px",
            background: "#1BD0B0",
            borderRadius: "40px",
          }}
        >
          {t("profile:send-request")}
        </Button>
      </Box>
    </ContentComponent>
  );
};
export default ProfileHaveDataComponent;
