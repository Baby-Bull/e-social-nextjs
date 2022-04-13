import { Box, Grid, Link } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import { format } from "timeago.js";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import {
  HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS,
  HOMEPAGE_RECOMMEND_MEMBER_STATUS,
} from "src/components/constants/constants";
import styles from "src/components/home/home.module.scss";
import { replaceLabelByTranslate } from "src/utils/utils";
import { addUserFavorite, deleteUserFavorite } from "src/services/user";
import { AuthContext } from "context/AuthContext";

import SlickSliderRecommendComponent from "./SlickSliderRecommendComponent";

interface IRecommendDataItem {
  id: string;
  profile_image: string;
  last_login_at: string;
  username: string;
  job_position: string;
  review_count: number;
  self_description: string;
  tags: Array<string>;
  discussion_topic: string;
  status: string;
  chatStatus: number;
  is_favorite: boolean;
  match_status: string;
}

interface IRecommendItemProps {
  data: IRecommendDataItem;
  handleOpenMatchingModal: Function;
}

interface IRecommendMembersComponentProps {
  title: string;
  dataRecommends: Array<IRecommendDataItem>;
  handleOpenMatchingModal: Function;
}

const handleFavoriteAnUser = (isFavorite: boolean, tempData: string) => {
  if (isFavorite) deleteUserFavorite(tempData);
  else addUserFavorite(tempData);
};

const handleMapChatStatus = (statusChatTemp: string) => {
  switch (statusChatTemp) {
    case "looking-for-friend":
      return 1;
    case "can-talk":
      return 2;
    case "need-consult":
      return 3;
    default:
      return 2;
  }
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

const RecommendItem: React.SFC<IRecommendItemProps> = ({ data, handleOpenMatchingModal }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [liked, setLiked] = useState(data?.is_favorite);
  const { auth, dispatch } = useContext(AuthContext);

  const handleClickButtonModal = (tempValue: any) => {
    if (tempValue === "rejected" || !tempValue) {
      handleOpenMatchingModal(data);
    } else router.push("/chat/personal");
  };

  const handleClickFavoriteButton = () => {
    handleFavoriteAnUser(liked, data?.id);
    if (liked) dispatch({ type: "REMOVE_FAVORITE", payload: auth });
    else dispatch({ type: "ADD_FAVORITE", payload: auth });
    setLiked(!liked);
  };

  return (
    <Grid item xs={12} className={classNames(styles.boxRecommend)}>
      <Box className={styles.boxRecommendMember}>
        <div className="status-summary">
          <ButtonComponent
            mode={HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS[handleMapChatStatus(data?.status)]?.mode}
            size="small"
            style={{ borderRadius: "4px", width: "130px" }}
          >
            {HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS[handleMapChatStatus(data?.status)]?.label}
          </ButtonComponent>
          <span className="label-login-status">
            {format(data?.last_login_at)
              ? replaceLabelByTranslate(t("home:box-member-recommend.last-login"), format(data?.last_login_at))
              : t("home:box-member-recommend.no-login")}
          </span>
        </div>

        <div className="info-summary">
          <img
            src={
              data?.profile_image ?? "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            }
            alt="img-member"
          />
          <div className="member-info">
            <div className="name">{data?.username}</div>
            <div className="career">{data?.job_position ?? "情報なし"}</div>
            <div className="review">
              {t("home:box-member-recommend.review")}: {data?.review_count ?? 0}
            </div>
          </div>
        </div>

        <div className="introduce">{data?.self_description ?? "情報なし"}</div>

        <div className="tags">
          <ul>
            {data?.tags?.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="label-description">
          <img alt="" src="/assets/images/home_page/ic_chat.svg" />
          {t("home:box-member-recommend.label-description")}
        </div>

        <div className="description">{data?.discussion_topic ?? "情報なし"}</div>

        <div className="div-review" onClick={handleClickFavoriteButton}>
          <img
            alt="ic-like"
            src={liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"}
          />
          <span>{t("home:box-member-recommend.like-string")}</span>
        </div>

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

const RecommendMembersComponent: React.SFC<IRecommendMembersComponentProps> = ({
  title,
  dataRecommends,
  handleOpenMatchingModal,
}) => {
  const { t } = useTranslation();
  const [dataElements, setDataElements] = useState([]);

  useEffect(() => {
    setDataElements(
      dataRecommends?.map((item, index) => (
        <RecommendItem data={item} key={index} handleOpenMatchingModal={handleOpenMatchingModal} />
      )),
    );
  }, [dataRecommends]);

  return (
    <Grid container className={styles.recommendList}>
      <div className="div-title">
        <span className="title">{title}</span>
        <Link className="link-see-more content-pc" href="/search_user" underline="none">
          {t("home:see-more")}
        </Link>
      </div>
      <div className="content">
        <SlickSliderRecommendComponent items={dataElements} />
      </div>

      <Link className="link-see-more content-mobile" href="/search_user" underline="none">
        {t("home:see-more")}
      </Link>
    </Grid>
  );
};

export default RecommendMembersComponent;
