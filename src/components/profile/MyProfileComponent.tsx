import React, { useEffect, useState } from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import ContentComponent from "src/components/layouts/ContentComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import ReviewComponent from "src/components/profile/ReviewComponent";
import ParticipatingCommunityComponent from "src/components/profile/ParticipatingCommunityComponent";
import { getUserCommunites, getUserReviews, getUserRecommended, getUserProfile } from "src/services/user";
import BoxItemUserComponent from "src/components/profile/BoxItemUserComponent";
import BoxNoDataComponent from "src/components/profile/BoxNoDataComponent";
import TopProfileComponent from "src/components/profile/TopProfileComponent";
import SlickSliderRecommendComponent from "src/components/home/blocks/SlickSliderRecommendComponent";
import theme from "src/theme";
import { IStoreState } from "src/constants/interface";

import ModalMatchingComponent from "../home/blocks/ModalMatchingComponent";
import { sendMatchingRequest } from "../../services/matching";

const PaginationCustom = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: `${theme.blue}`,
    fontFamily: "Noto Sans JP,sans-serif",
    fontSize: "14px",
    fontWeight: "700",
  },
  "& .MuiPagination-ul": {
    width: "fit-content",
    margin: "auto",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  "& .Mui-selected": {
    color: "white",
    backgroundColor: `${theme.blue}!important`,
  },
});

const ProfileHaveDataComponent = () => {
  const { t } = useTranslation();
  const LIMIT = 20;
  const auth = useSelector((state: IStoreState) => state.user);
  const [profileSkill, setProfileSkill] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModalMatching, setModalMatching] = React.useState(false);
  const [userId] = useState(auth?.user?.id);

  const fetchProfileSkill = async () => {
    setIsLoading(true);
    const data = await getUserProfile();
    setProfileSkill(data);
    setIsLoading(false);
    return data;
  };

  const fetchCommunities = async () => {
    setIsLoading(true);
    const data = await getUserCommunites(userId);
    setCommunities(data?.items);
    setIsLoading(false);
    return data;
  };

  const fetchUserReviews = async () => {
    setIsLoading(true);
    const data = await getUserReviews(userId);
    setAllReviews(data?.items);
    setReviews(data?.items?.slice(0, 10));
    setIsLoading(false);
    return data;
  };
  const fetchRecommended = async () => {
    setIsLoading(true);
    const data = await getUserRecommended(LIMIT);
    setRecommended(data?.items?.filter((item) => !item?.match_status));
    setIsLoading(false);
    return data;
  };

  const callbackHandleIsRefresh = (status: any) => {
    setIsRefresh(status);
  };

  const handleSendMatchingRequest = async (matchingRequest) => {
    const res = await sendMatchingRequest(userId, matchingRequest);
    setModalMatching(false);
    setIsRefresh(!isRefresh);
    return res;
  };

  const handlePagination = (e: any) => {
    const tempPage = e.currentTarget.textContent;
    setReviews(allReviews.slice((tempPage - 1) * 10, tempPage * 10));
  };

  useEffect(() => {
    fetchProfileSkill();
    fetchUserReviews();
    fetchCommunities();
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
          p: { xs: "60px 20px 0 20px", lg: "140px 120px 120px 120px" },
        }}
      >
        <TopProfileComponent user={profileSkill} myProfile />
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
          <PaginationCustom
            hideNextButton
            hidePrevButton
            count={allReviews && allReviews?.length > 0 ? Math.floor(allReviews.length / 10) + 1 : 0}
            onChange={handlePagination}
          />
          {reviews?.length > 0 ? (
            reviews?.map((item, key) => (
              <ReviewComponent
                user={item?.user}
                hideReviewer={item?.hide_reviewer}
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
      <Box
        sx={{
          width: "100%",
          paddingRight: "20px",
        }}
      >
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
          <SlickSliderRecommendComponent items={dataElements} />
        </Box>
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
