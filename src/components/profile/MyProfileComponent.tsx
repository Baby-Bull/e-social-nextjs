import React, { useEffect, useState } from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import useViewport from "src/helpers/useViewport";
import ContentComponent from "src/components/layouts/ContentComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import ReviewComponent from "src/components/profile/ReviewComponent";
import ParticipatingCommunityComponent from "src/components/profile/ParticipatingCommunityComponent";
import {
  getUserCommunites,
  getUserReviews,
  getUserRecommended,
  getUserProfile,
  addUserFavorite,
} from "src/services/user";
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

function usePagination(data: any, itemsPerPage: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = data && data?.length > 0 ? Math.ceil(data.length / itemsPerPage) : 0;

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data?.slice(begin, end);
  }

  function next() {
    setCurrentPage(() => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(() => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

const ProfileHaveDataComponent = () => {
  const { t } = useTranslation();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const LIMIT = 20;
  const NumberOfReviewsPerPage = isMobile ? 5 : 10;
  const NumberOfCommunitiesPerPage = isMobile ? 2 : 8;

  const auth = useSelector((state: IStoreState) => state.user);
  const [profileSkill, setProfileSkill] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [countReviews, setCountReviews] = useState(0);
  const [recommended, setRecommended] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModalMatching, setModalMatching] = React.useState(false);
  const [userId] = useState(auth?.id);

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
    const data = await getUserReviews(userId, 40, "");
    setAllReviews(data?.items);
    setCountReviews(data?.items_count ?? 0);
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
    await addUserFavorite(userId);
    setModalMatching(false);
    setIsRefresh(!isRefresh);
    return res;
  };

  const [page, setPage] = useState(1);
  const reviews = usePagination(allReviews, NumberOfReviewsPerPage);
  const handleChange = (e, p) => {
    setPage(p);
    reviews.jump(p);
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
            <ParticipatingCommunityComponent
              communities={communities}
              usePagination={usePagination}
              NumberOfCommunitiesPerPage={NumberOfCommunitiesPerPage}
            />
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
          {t("profile:title-review")}（{countReviews}）
          <PaginationCustom
            hideNextButton={page === Math.ceil(countReviews / 10) || countReviews < 10}
            hidePrevButton={page === 1 || countReviews < 10}
            count={Math.ceil(countReviews / 10)}
            onChange={handleChange}
          />
          {reviews.currentData()?.length > 0 ? (
            reviews
              .currentData()
              ?.map((item, key) => (
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
