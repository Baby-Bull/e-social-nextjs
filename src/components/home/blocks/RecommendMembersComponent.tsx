import { Box, Grid, Link } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import {
  HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS,
  HOMEPAGE_RECOMMEND_MEMBER_STATUS,
} from "src/components/constants/constants";
import styles from "src/components/home/home.module.scss";
import { replaceLabelByTranslate } from "src/utils/utils";
import { deleteAnUserFavorite, postAnUserFavorite } from "src/services/user";

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
  status: number;
  chatStatus: number;
  is_favorite: boolean;
}

interface IRecommendItemProps {
  data: IRecommendDataItem;
  setOpenMatchingModal: Function;
}

interface IRecommendMembersComponentProps {
  title: string;
  dataRecommends: Array<IRecommendDataItem>;
  setOpenMatchingModal: Function;
}

const handleFavoriteAnUser = (isFavorite: boolean, tempData: string) => {
  if (isFavorite) postAnUserFavorite(tempData);
  else deleteAnUserFavorite(tempData);
};

const RecommendItem: React.SFC<IRecommendItemProps> = ({ data, setOpenMatchingModal }) => {
  const { t } = useTranslation();
  const [liked, setLiked] = useState(data?.is_favorite);

  return (
    <Grid item xs={12} className={classNames(styles.boxRecommend)}>
      <Box className={styles.boxRecommendMember}>
        <div className="status-summary">
          <ButtonComponent
            mode={HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS[data?.chatStatus]?.mode}
            size="small"
            style={{ borderRadius: "4px", width: "130px" }}
          >
            {HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS[data?.chatStatus]?.label}
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
            <p className="name">{data?.username}</p>
            <p className="career">{data?.job_position}</p>
            <p className="review">
              {t("home:box-member-recommend.review")}: {data?.review_count ?? 0}
            </p>
          </div>
        </div>

        <div className="introduce">{data?.self_description}</div>

        <div className="tags">
          <ul>
            {data?.tags?.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <p className="label-description">
          <img alt="" src="/assets/images/home_page/ic_chat.svg" />
          {t("home:box-member-recommend.label-description")}
        </p>

        <p className="description">{data?.discussion_topic}</p>

        <div
          className="div-review"
          onClick={() => {
            handleFavoriteAnUser(data?.is_favorite, data?.id);
            setLiked(!liked);
          }}
        >
          <img
            alt="ic-like"
            src={liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"}
          />
          <span>{t("home:box-member-recommend.like-string")}</span>
        </div>

        <ButtonComponent
          onClick={() => setOpenMatchingModal(true)}
          mode={HOMEPAGE_RECOMMEND_MEMBER_STATUS[data?.status]?.mode}
          fullWidth
          disabled={data?.status === 2}
        >
          {HOMEPAGE_RECOMMEND_MEMBER_STATUS[data?.status]?.label}
        </ButtonComponent>
      </Box>
    </Grid>
  );
};

const RecommendMembersComponent: React.SFC<IRecommendMembersComponentProps> = ({
  title,
  dataRecommends,
  setOpenMatchingModal,
}) => {
  const { t } = useTranslation();
  const [dataElements, setDataElements] = useState([]);

  useEffect(() => {
    setDataElements(
      dataRecommends?.map((item, index) => (
        <RecommendItem data={item} key={index} setOpenMatchingModal={setOpenMatchingModal} />
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
