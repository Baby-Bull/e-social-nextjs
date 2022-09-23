/* eslint-disable */
import { Backdrop, Box, CircularProgress } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { IStoreState } from "src/constants/interface";
import useViewport from "src/helpers/useViewport";
import ContentComponent from "src/components/layouts/ContentComponent";
import ProfileSkillComponent from "src/components/profile/ProfileSkillComponent";
import ReviewComponent from "src/components/profile/ReviewComponent";
import ParticipatingCommunityComponent from "src/components/profile/ParticipatingCommunityComponent";
import { addUserFavorite, getUserReviews } from "src/services/user";
import BoxItemUserComponent from "src/components/profile/BoxItemUserComponent";
import BoxNoDataComponent from "src/components/profile/BoxNoDataComponent";
import TopProfileComponent from "src/components/profile/TopProfileComponent";
import { HOMEPAGE_RECOMMEND_MEMBER_STATUS } from "src/components/constants/constants";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
import SlickSliderRecommendComponent from "src/components/home/blocks/SlickSliderRecommendComponent";

import theme from "../../theme";
import ModalMatchingComponent from "../home/blocks/ModalMatchingComponent";
import { acceptMatchingRequestReceived, sendMatchingRequest } from "../../services/matching";
import PaginationCustomComponent from "../common/PaginationCustomComponent";
interface Props {
  // isAuth: boolean;
  userId: string;
  profileSkill: any;

  countAllCommunities: number;

  initialReviews: any[];
  initialCursorReview: string;
  countAllReviews: number;

  recommended?: any[];
}

const ProfileHaveDataComponent: FC<Props> = ({
  // isAuth,
  userId,
  profileSkill,

  countAllCommunities,

  initialReviews,
  initialCursorReview,
  countAllReviews,

  recommended,
}) => {
  const { t } = useTranslation();
  const viewPort = useViewport();
  const router = useRouter();
  const auth = useSelector((state: IStoreState) => state.user);
  const isMobile = viewPort.width <= 992;
  const NumberOfReviewsPerPage = isMobile ? 5 : 10;
  const NumberOfCommunitiesPerPage = isMobile ? 2 : 8;

  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading] = useState(false);
  const [showModalMatching, setModalMatching] = React.useState(false);

  const callbackHandleIsRefresh = (status: any) => {
    setIsRefresh(status);
  };

  const handleSendMatchingRequest = async (matchingRequest) => {
    const res = await sendMatchingRequest(userId, matchingRequest);
    await addUserFavorite(userId);
    setModalMatching(false);
    // setIsRefresh(!isRefresh);
    setIsDisableBtn(true);
    return res;
  };

  const handleClickMatchingButton = async (statusValue: string) => {
    if (statusValue === "received_pending") {
      await acceptMatchingRequestReceived(profileSkill?.match_request?.id);
      // setIsRefresh(!isRefresh);
    } else {
      setModalMatching(true);
    }
  };

  const handleMapMatchingStatus = (statusMatchingTemp: string) => {
    switch (statusMatchingTemp) {
      case "sent_pending":
        return 1;
      case "confirmed":
        return 2;
      case "received_pending":
        return 3;
      default:
        return 4;
    }
  };

  useEffect(() => {
    if (router.query?.userId === auth?.id) {
      router.push("/my-profile");
    }
  }, []);

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

  // Block render user-reviews ***** paginated
  const [allReviewsRef, setAllReviewsRef] = useState(initialReviews);
  const [cursorReviews, setCursorReviews] = useState(initialCursorReview);
  const [page, setPage] = useState(1);
  const [countCurrentPages, setCountCurrentPages] = useState(2);
  const fetchUserReviews = async () => {
    const data = await getUserReviews(userId, NumberOfReviewsPerPage, cursorReviews);
    setCursorReviews(data?.cursor)
    setAllReviewsRef([...allReviewsRef, ...data?.items])
    return data;
  };
  const handleCallbackChangePaginationReviews = (event, value) => {
    setPage(value);
    if (countCurrentPages <= value && countAllReviews > allReviewsRef?.length) {
      setCountCurrentPages(countCurrentPages + 1);
      fetchUserReviews();
    }
  }; // end block paginate for user reviews

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
          {t("profile:title-participating-community")} ({countAllCommunities ?? 0})
          {countAllCommunities > 0 ? (
            <ParticipatingCommunityComponent
              userId={userId}
              countAllCommunities={countAllCommunities}
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
          {t("profile:title-review")}（{countAllReviews}）
          {(countAllReviews > NumberOfReviewsPerPage) &&
            <PaginationCustomComponent
              handleCallbackChangePagination={handleCallbackChangePaginationReviews}
              page={page}
              perPage={countCurrentPages}
              totalPage={Math.ceil(countAllReviews / NumberOfReviewsPerPage)}
            />
          }
          {countAllReviews > 0 ? (
            allReviewsRef.slice((page - 1) * NumberOfReviewsPerPage, page * NumberOfReviewsPerPage)?.map((item, key) => (
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
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F5F5F5",
          justifyContent: "center",
          position: "fixed",
          top: "88%",
          opacity: 0.8,
          width: "100%",
          paddingY: "20px",
          display: profileSkill?.match_status === "confirmed" ? "none" : "flex",
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
            borderRadius: "40px",
            display: profileSkill?.match_status === "confirmed" ? "none" : "flex",
            "&.Mui-disabled": {
              background: "#989EA8 !important",
              color: "#fff",
            },
          }}
          onClick={() => handleClickMatchingButton(profileSkill?.match_status)}
          mode={HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(profileSkill?.match_status)]?.mode}
          disabled={profileSkill?.match_status === "pending" || isDisableBtn}
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
