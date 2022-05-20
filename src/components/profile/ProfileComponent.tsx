import { Backdrop, Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
// import { useRouter } from "next/router";

import ContentComponent from "src/components/layouts/ContentComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import ReviewComponent from "src/components/profile/ReviewComponent";
import ParticipatingCommunityComponent from "src/components/profile/ParticipatingCommunityComponent";
import { getUserCommunites, getOrtherUserProfile, getUserReviews, getUserRecommended } from "src/services/user";
import BoxItemUserComponent from "src/components/profile/BoxItemUserComponent";
import BoxNoDataComponent from "src/components/profile/BoxNoDataComponent";
import TopProfileComponent from "src/components/profile/TopProfileComponent";
import { HOMEPAGE_RECOMMEND_MEMBER_STATUS } from "src/components/constants/constants";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
import SlickSliderRecommendComponent from "src/components/home/blocks/SlickSliderRecommendComponent";

import theme from "../../theme";
import ModalMatchingComponent from "../home/blocks/ModalMatchingComponent";
import { sendMatchingRequest } from "../../services/matching";

const ProfileHaveDataComponent = () => {
  const { t } = useTranslation();
  const LIMIT = 20;
  const [profileSkill, setProfileSkill] = useState<any>([]);
  const [communities, setCommunities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModalMatching, setModalMatching] = React.useState(false);
  const [userId, setUserId] = useState(null);
  // const router = useRouter();
  // const { userId } = router.query;

  const fetchProfileSkill = async (userIdFromUrl: string) => {
    setIsLoading(true);
    const data = await getOrtherUserProfile(userIdFromUrl);
    setProfileSkill(data);
    setIsLoading(false);
    return data;
  };

  const fetchCommunities = async (userIdFromUrl: string) => {
    setIsLoading(true);
    const data = await getUserCommunites(userIdFromUrl);
    setCommunities(data?.items);
    setIsLoading(false);
    return data;
  };

  const fetchUserReviews = async (userIdFromUrl: string) => {
    setIsLoading(true);
    const data = await getUserReviews(userIdFromUrl);
    setReviews(data?.items);
    setIsLoading(false);
    return data;
  };
  const fetchRecommended = async () => {
    setIsLoading(true);
    const data = await getUserRecommended(LIMIT);
    setRecommended(data?.items?.filter((item) => item?.match_status !== "confirmed"));
    setIsLoading(false);
    return data;
  };

  const callbackHandleIsRefresh = (status: any) => {
    setIsRefresh(status);
  };

  const handleSendMatchingRequest = async (profileId, matchingRequest) => {
    const res = await sendMatchingRequest(profileId, matchingRequest);
    setModalMatching(false);
    setIsRefresh(!isRefresh);
    return res;
  };

  const handleMapMatchingStatus = (statusMatchingTemp: string) => {
    switch (statusMatchingTemp) {
      case "pending":
        return 1;
      case "confirmed":
        return 2;
      case "rejected":
        return 3;
      default:
        return 4;
    }
  };

  useEffect(() => {
    const userIdFromUrl = window.location.pathname.split("/")[2];
    setUserId(userIdFromUrl);
    fetchProfileSkill(userIdFromUrl);
    fetchUserReviews(userIdFromUrl);
    fetchCommunities(userIdFromUrl);
    fetchRecommended();
  }, [isRefresh, userId]);

  const [dataElements, setDataElements] = useState(
    recommended?.map((item, index) => <BoxItemUserComponent data={item} key={index} />),
  );
  useEffect(() => {
    setDataElements(
      recommended?.map((item, index) => (
        <BoxItemUserComponent
          data={item}
          key={index}
          isRefresh={isRefresh}
          callbackHandleIsRefresh={callbackHandleIsRefresh}
        />
      )),
    );
  }, [recommended]);

  return (
    <ContentComponent>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box
        sx={{
          mt: "70px",
          p: { xs: "0 20px", lg: "140px 120px 120px 120px" },
        }}
      >
        <TopProfileComponent user={profileSkill} myProfile={false} />
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
          {t("profile:title-participating-community")} ({communities?.length ?? 0})
          {communities?.length > 0 ? (
            <ParticipatingCommunityComponent communities={communities} />
          ) : (
            <BoxNoDataComponent content="まだ参加中のコミュニティがありません" />
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
          {t("profile:title-review")}（{reviews?.length ?? 0}）
          {reviews?.length > 0 ? (
            reviews?.map((item, key) => (
              <ReviewComponent
                user={item?.user}
                rating={item?.rating}
                comment={item?.comment}
                createdAt={item?.created_at}
                key={key}
              />
            ))
          ) : (
            <BoxNoDataComponent content="まだレビューがありません" />
          )}
        </Box>
      </Box>
      <Box sx={{ width: "98%" }}>
        <Box
          sx={{
            color: "#1A2944",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "35px",
            mb: "40px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap-reverse",
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
          <SlickSliderRecommendComponent items={dataElements} />
          {/* {recommended?.slice(0, 4)?.map((item, key) => (
            <Grid item key={key} sx={{ margin: "0 13.5px" }}>
              <BoxItemUserComponent
                data={item}
                isRefresh={isRefresh}
                callbackHandleIsRefresh={callbackHandleIsRefresh}
              />
            </Grid>
          ))} */}
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
        <ButtonComponent
          sx={{
            width: "280px",
            height: "56px",
            fontSize: "16px",
            fontWeight: 700,
            color: "#ffffff",
            alignItems: "center",
            textAlign: "center",
            lineHeight: "24px",
            background: "#1BD0B0",
            borderRadius: "40px",
            display: profileSkill?.match_status === "confirmed" ? "none" : "flex",
          }}
          onClick={() => setModalMatching(true)}
          mode={HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(profileSkill?.match_status)]?.mode}
          disabled={profileSkill?.match_status === "pending"}
        >
          {HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(profileSkill?.match_status)]?.label}
        </ButtonComponent>
      </Box>
      <ModalMatchingComponent
        userRequestMatching={profileSkill}
        open={showModalMatching}
        setOpen={setModalMatching}
        handleSendMatchingRequest={handleSendMatchingRequest}
      />
    </ContentComponent>
  );
};
export default ProfileHaveDataComponent;
