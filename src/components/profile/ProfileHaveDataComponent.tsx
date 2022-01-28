import { Box, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import TopProfileComponent from "src/components/profile/TopProfileComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import BoxRecommendMemberComponent from "src/components/profile/BoxRecommendMemberComponent";
import ReviewComponent from "src/components/profile/ReviewComponent";
import ParticipatingCommunityComponent from "src/components/profile/ParticipatingCommunityComponent";

import {
  review,
  cumulativMatching,
  participatingCommunity,
  countParticipatingCommunity,
  lastLogin,
  profileStatus,
  profileOneThing,
  profileSelfIntroduction,
  profileOccupation,
  profilePosition,
  profileEmploymentStatus,
  profileIntroduceYourself,
  profileAddress,
  profileTag,
  recommendMember,
  contentReview,
  participatingCommunityData,
  ProfileSkillLanguage,
  ProfileSkillFramework,
  ProfileSkillInfrastructure,
  ProfileSkillUpstreamProcess,
  ProfileSkillEnglishExperience,
  ProfileSkillLanguageExperience,
} from "./mockData";

const ProfileHaveDataComponent = () => {
  const { t } = useTranslation();
  return (
    <ContentComponent>
      <Box
        sx={{
          p: { xs: "0 20px", lg: "140px 120px 120px 120px" },
        }}
      >
        <TopProfileComponent
          review={review}
          cumulativMatching={cumulativMatching}
          participatingCommunity={participatingCommunity}
          lastLogin={lastLogin}
          myProfile={false}
        />
        <ProfileSkillComponent
          profileStatus={profileStatus}
          profileOneThing={profileOneThing}
          profileSelfIntroduction={profileSelfIntroduction}
          profileOccupation={profileOccupation}
          profilePosition={profilePosition}
          profileEmploymentStatus={profileEmploymentStatus}
          profileIntroduceYourself={profileIntroduceYourself}
          profileAddress={profileAddress}
          profileTag={profileTag}
          ProfileSkillLanguage={ProfileSkillLanguage}
          ProfileSkillFramework={ProfileSkillFramework}
          ProfileSkillInfrastructure={ProfileSkillInfrastructure}
          ProfileSkillUpstreamProcess={ProfileSkillUpstreamProcess}
          ProfileSkillEnglishExperience={ProfileSkillEnglishExperience}
          ProfileSkillLanguageExperience={ProfileSkillLanguageExperience}
        />
        <Box
          sx={{
            mt: "40px",
            mb: 3,
            color: "#1A2944",
            fontSize: { xs: "16px", lg: "24px" },
            fontWeight: 700,
          }}
        >
          {t("profile:title-participating-community")} ({countParticipatingCommunity})
          <ParticipatingCommunityComponent participatingCommunityData={participatingCommunityData} />
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
              status={item.status}
              txtBtn={item.txtBtn}
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
