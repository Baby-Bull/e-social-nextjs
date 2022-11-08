import { Avatar, Box, Grid } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import {
  // HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS,
  HOMEPAGE_RECOMMEND_MEMBER_STATUS,
} from "src/components/constants/constants";
import { JOBS } from "src/constants/constants";
import styles from "src/components/home/home.module.scss";
// import { replaceLabelByTranslate } from "src/utils/utils";
// import { addUserFavorite, deleteUserFavorite } from "src/services/user";
// import { IStoreState } from "src/constants/interface";
// import actionTypes from "src/store/actionTypes";

import SlickSliderRecommendComponent from "./SlickSliderRecommendComponent";

dayjs.extend(relativeTime);
dayjs.locale("ja");

interface IRecommendDataItem {
  id: string;
  profile_image: string;
  last_login_at: string;
  username: string;
  job: string;
  review_count: number;
  hitokoto: string;
  tags: Array<string>;
  discussion_topic: string;
  status: string;
  chatStatus: number;
  is_favorite: boolean;
  match_status: string;
  activity_status?: string;
}

interface IRecommendItemProps {
  data: IRecommendDataItem;
  indexKey?: number;
  handleOpenMatchingModal: Function;
  handleAcceptMatchingRequestReceived: Function;
}

interface IRecommendMembersComponentProps {
  indexFetch?: number;
  title: string;
  dataRecommends: Array<IRecommendDataItem>;
  handleOpenMatchingModal: Function;
  handleAcceptMatchingRequestReceived: Function;
}

// const handleFavoriteAnUser = (isFavorite: boolean, tempData: string) => {
//   if (isFavorite) deleteUserFavorite(tempData);
//   else addUserFavorite(tempData);
// };

// const handleMapChatStatus = (statusChatTemp: string) => {
//   switch (statusChatTemp) {
//     case "looking-for-friend":
//       return 1;
//     case "can-talk":
//       return 2;
//     case "need-consult":
//       return 3;
//     default:
//       return 2;
//   }
// };
const handleMapMatchingStatus = (statusMatchingTemp: string) => {
  switch (statusMatchingTemp) {
    case "sent_pending":
      return 1;
    case "confirmed":
      return 2;
    // case "rejected":
    //   return 3;
    case "received_pending":
      return 3;
    default:
      return 4;
  }
};

const RecommendItem: React.SFC<IRecommendItemProps> = ({
  data,
  handleOpenMatchingModal,
  handleAcceptMatchingRequestReceived,
  indexKey,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [liked, setLiked] = useState(data?.is_favorite);
  // const dispatch = useDispatch();
  // const auth = useSelector((state: IStoreState) => state.user);

  useEffect(() => {
    setLiked(data?.is_favorite);
  }, [data?.is_favorite]);

  const handleClickButtonModal = (tempValue: any) => {
    if (tempValue === "rejected" || !tempValue) {
      handleOpenMatchingModal(data, indexKey);
    } else if (tempValue === "received_pending") {
      handleAcceptMatchingRequestReceived(data, indexKey);
    } else if (tempValue === "confirmed") {
      router.push(`/chat/personal?room=${data.id}`);
    } else if (tempValue === "sent_pending") {
      return null;
    }
  };

  // const handleClickFavoriteButton = () => {
  //   handleFavoriteAnUser(liked, data?.id);
  //   if (liked) dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: auth });
  //   else dispatch({ type: actionTypes.ADD_FAVORITE, payload: auth });
  //   setLiked(!liked);
  // };

  // const handleClickToProfile = () => {
  //   router.push(`/profile/${data.id}`, undefined, { shallow: true });
  // };

  // const onUserTagClicked = (tag: string) => {
  //   dispatch({ type: searchUserActions.SEARCH_TAG_ONLY, payload: [tag] });
  //   router.push("/search_user");
  // };

  return (
    <Grid item xs={12} className={classNames(styles.boxRecommend)}>
      <Box className={styles.boxRecommendMember}>
        <Link href={`/profile/${data.id}`}>
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
              <Avatar
                sx={{
                  width: "56px",
                  height: "56px",
                  mr: "13px",
                  borderRadius: "74px",
                  objectFit: "cover",
                  border: " 1px solid rgba(156, 172, 194, 0.3)",
                }}
              >
                <Image
                  loader={() =>
                    data?.profile_image ??
                    "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                  }
                  width={56}
                  height={56}
                  src={
                    data?.profile_image ??
                    "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                  }
                  alt={data?.username}
                  objectFit="contain"
                />
              </Avatar>
              <div className="member-info">
                <div className="name">{data?.username}</div>
                <div className="career">{JOBS.find((item) => item?.value === data?.job)?.label ?? "情報なし"}</div>
                <div className="review">
                  {t("home:box-member-recommend.review")}: {data?.review_count ?? 0}
                </div>
              </div>
              <div className="favorite-btn">
                <img
                  className="ic_like"
                  alt="ic-like"
                  src={
                    liked ? "/assets/images/home_page/ic_heart_blue.svg" : "/assets/images/home_page/ic_heart_empty.svg"
                  }
                />
                {12}
              </div>
            </div>
            {/* </div> */}

            {/* <div className="introduce">{data?.hitokoto ?? "情報なし"}</div> */}

            <div className="label-description">
              <img alt="" src="/assets/images/home_page/chatIcon.png" />
              {t("home:box-member-recommend.label-talking")}
            </div>

            <div className="description">
              {data?.discussion_topic ?? "はじめまして。色々な方とお話をしたいと考えています！よろしくお願いします。"}
            </div>

            <div className="tags">
              <ul>
                {data?.tags?.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </Box>
        </Link>
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

const RecommendMembersComponent: React.SFC<IRecommendMembersComponentProps> = memo(
  ({ title, dataRecommends, indexFetch, handleOpenMatchingModal, handleAcceptMatchingRequestReceived }) => {
    const { t } = useTranslation();
    const [dataElements, setDataElements] = useState([]);

    useEffect(() => {
      setDataElements(
        dataRecommends?.map((item, index) => (
          <RecommendItem
            data={item}
            key={index}
            handleOpenMatchingModal={handleOpenMatchingModal}
            handleAcceptMatchingRequestReceived={handleAcceptMatchingRequestReceived}
            indexKey={indexFetch}
          />
        )),
      );
    }, [dataRecommends]);
    return (
      <Grid container className={styles.recommendList} sx={{ display: dataRecommends.length > 0 ? "block" : "none" }}>
        <div className="div-title">
          <span className="title">{title}</span>
          <Link href="/search_user">
            <a className="link-see-more content-pc">
              {t("home:see-more")} <img src="/assets/images/icon/icon_seemore.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="content">
          <SlickSliderRecommendComponent items={dataElements} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/search_user">
            <a className="link-see-more content-mobile">
              {t("home:see-more")} <img src="/assets/images/icon/icon_seemore.png" alt="" />
            </a>
          </Link>
        </div>
      </Grid>
    );
  },
);

export default RecommendMembersComponent;
