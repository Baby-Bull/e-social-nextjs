import { Avatar, Box, Grid } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

import styles from "src/components/home/home.module.scss";
import { HOMEPAGE_RECOMMEND_MEMBER_STATUS, JOBS, typeMatchingStatus } from "src/constants";
import { IItemRecommendUserHomepage } from "src/constants/interfaces";
import { addUserFavorite, removeUserFavorite } from "src/services/user";
import actionTypes, { searchUserActions } from "src/store/actionTypes";

import UserTag from "../molecules/UserTag";
import ButtonComponent from "../atom-component/ButtonComponent";

const handleMapMatchingStatus = (statusMatchingTemp: string) => {
  switch (statusMatchingTemp) {
    case typeMatchingStatus.SENT_PENDING:
      return 1;
    case typeMatchingStatus.CONFIRMED:
      return 2;
    // case "rejected":
    //   return 3;
    case typeMatchingStatus.RECEIVED_PENDING:
      return 3;
    default:
      return 4;
  }
};

const UserCardHomeScreen: React.SFC<IItemRecommendUserHomepage> = ({
  data,
  handleOpenMatchingModal,
  handleAcceptMatchingRequestReceived,
  indexKey,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(data.is_favorite);
  const [likeCount, setLikeCount] = useState(data?.favoriteCount ?? 0);
  // const dispatch = useDispatch();
  // const auth = useSelector((state: IStoreState) => state.user);

  useEffect(() => {
    setLiked(data.is_favorite);
  }, [data.is_favorite]);

  useEffect(() => {
    setLikeCount(data.favoriteCount);
  }, [data.favoriteCount]);

  const handleClickButtonModal = (tempValue: string) => {
    if (tempValue === typeMatchingStatus.REJECTED || !tempValue) {
      handleOpenMatchingModal(data, indexKey);
    } else if (tempValue === typeMatchingStatus.RECEIVED_PENDING) {
      handleAcceptMatchingRequestReceived(data, indexKey);
    } else if (tempValue === typeMatchingStatus.CONFIRMED) {
      router.push(`/chat/personal?room=${data.id}`);
    } else if (tempValue === typeMatchingStatus.SENT_PENDING) {
      return null;
    }
  };

  const mutation = useMutation({
    mutationFn: async ({ isFavorite, userId }: any) => {
      if (isFavorite) {
        await removeUserFavorite(userId);
        setLikeCount((value) => value - 1);
        dispatch({ type: actionTypes.REMOVE_FAVORITE });
      } else {
        await addUserFavorite(userId);
        setLikeCount((value) => value + 1);
        dispatch({ type: actionTypes.ADD_FAVORITE });
      }
      setLiked(!isFavorite);
    },
  });

  const onUserTagClicked = (tag: string) => {
    dispatch({ type: searchUserActions.SEARCH_TAG_ONLY, payload: [tag] });
    router.push("/search_user");
  };

  return (
    <Grid item xs={12} className={classNames(styles.boxRecommend)}>
      <Box className={styles.boxRecommendMember}>
        <Box sx={{ cursor: "pointer" }}>
          {/* <div className="status-summary">
              <ButtonComponent
                mode={HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS[handleMapChatStatus(data?.status)]?.mode}
                size="small"
                style={{ borderRadius: "4px", width: "130px" }}
              >
                {HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS[handleMapChatStatus(data?.status)]?.label}
              </ButtonComponent>
              <span className="label-login-status">
                {data?.activity_status !== USER_ONLINE_STATUS
                  ? replaceLabelByTranslate(
                      t("home:box-member-recommend.last-login"),
                      dayjs(data?.last_login_at).fromNow(),
                    )
                  : t("home:box-member-recommend.no-login")}
              </span>
            </div> */}

          <div className="info-summary">
            <Link href={`/profile/${data.id}`}>
              <div style={{ width: "100%" }}>
                <Avatar className={styles["avatarUser-frame"]}>
                  <Image
                    loader={() =>
                      data?.profileImage ??
                      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                    }
                    width={56}
                    height={56}
                    src={
                      data?.profileImage ??
                      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                    }
                    alt={data?.username}
                    objectFit="contain"
                  />
                </Avatar>
                <div className="member-info">
                  <div className="name">{data?.username}</div>
                  <div className="career">
                    {JOBS.find((item) => item?.value === data?.job)?.label ?? t("common:no_info")}
                  </div>
                  <div className="review">
                    {t("home:box-member-recommend.review")}: {data?.review_count ?? 0}
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="favorite-btn"
              onClick={() =>
                mutation.mutate({
                  isFavorite: liked,
                  userId: data.id,
                })
              }
            >
              <img
                className="ic_like"
                alt="ic-like"
                src={
                  liked ? "/assets/images/home_page/ic_heart_blue.svg" : "/assets/images/home_page/ic_heart_empty.svg"
                }
              />
              {likeCount}
            </div>
          </div>
          {/* </div> */}

          {/* <div className="introduce">{data?.hitokoto ?? t("common:no_info")}</div> */}

          <Link href={`/profile/${data.id}`}>
            <div>
              <div className="label-description">
                <img alt="" src="/assets/images/home_page/chatIcon.png" />
                {t("home:box-member-recommend.label-talking")}
              </div>

              <div className="description">
                {data?.discussion_topic ?? t("home:box-member-recommend.content-description")}
              </div>
            </div>
          </Link>
          {data?.tags?.length ? (
            <div className="tags">
              <UserTag tags={data.tags} onClick={onUserTagClicked} />
            </div>
          ) : (
            <Link href={`/profile/${data.id}`}>
              <div className="tags">
                <UserTag tags={data.tags} onClick={onUserTagClicked} />
              </div>
            </Link>
          )}
        </Box>
        {/* <div className="div-review" onClick={handleClickFavoriteButton}>
          <img
            alt="ic-like"
            src={liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"}
          />
          <span>{t("home:box-member-recommend.like-string")}</span>
        </div>  */}

        <ButtonComponent
          className="button-matching"
          onClick={() => handleClickButtonModal(data?.match_status)}
          mode={HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(data?.match_status)]?.mode}
          fullWidth
          disabled={data?.match_status === "pending"}
        >
          {HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(data?.match_status)]?.label}
        </ButtonComponent>
      </Box>
    </Grid>
  );
};

export default UserCardHomeScreen;
