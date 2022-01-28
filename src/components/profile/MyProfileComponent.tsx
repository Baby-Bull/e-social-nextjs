import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import TopProfileComponent from "src/components/profile/TopProfileComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import BoxNoDataComponent from "src/components/profile/BoxNoDataComponent";
import BoxRecommendMemberComponent from "src/components/profile/BoxRecommendMemberComponent";

import {
  review,
  cumulativMatching,
  participatingCommunity,
  countParticipatingCommunity,
  countReview,
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
  ProfileSkillLanguage,
  ProfileSkillFramework,
  ProfileSkillInfrastructure,
  ProfileSkillUpstreamProcess,
  ProfileSkillEnglishExperience,
  ProfileSkillLanguageExperience,
} from "./mockData";

const MyProfileComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentComponent>
      <Box
        sx={{
          p: { xs: "0 20px", lg: "70px 120px 120px 120px" },
        }}
      >
        <TopProfileComponent
          review={review}
          cumulativMatching={cumulativMatching}
          participatingCommunity={participatingCommunity}
          lastLogin={lastLogin}
          myProfile
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
          <BoxNoDataComponent content={t("profile:participating-community-no-data")} />
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
          {t("profile:title-review")}（{countReview}）
          <BoxNoDataComponent content={t("profile:review-no-data")} />
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
    </ContentComponent>
  );
};
export default MyProfileComponent;
