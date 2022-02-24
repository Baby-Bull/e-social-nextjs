import { Box, Grid, Link } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import {
  HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS,
  HOMEPAGE_RECOMMEND_MEMBER_STATUS,
} from "src/components/constants/constants";
import styles from "src/components/home/home.module.scss";
import { replaceLabelByTranslate } from "src/utils/utils";

import SlickSliderRecommendComponent from "./SlickSliderRecommendComponent";

interface IRecommendDataItem {
  image: string;
  lastLogin: string;
  name: string;
  career: string;
  review: number;
  introduce: string;
  tags: Array<string>;
  description: string;
  status: number;
  chatStatus: number;
  isLiked: boolean;
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

const RecommendItem: React.SFC<IRecommendItemProps> = ({ data, setOpenMatchingModal }) => {
  const { t } = useTranslation();

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
            {data?.lastLogin
              ? replaceLabelByTranslate(t("home:box-member-recommend.last-login"), data?.lastLogin)
              : t("home:box-member-recommend.no-login")}
          </span>
        </div>

        <div className="info-summary">
          <img src={data?.image} alt="img-member" />
          <div className="member-info">
            <p className="name">{data?.name}</p>
            <p className="career">{data?.career}</p>
            <p className="review">
              {t("home:box-member-recommend.review")}: {data?.review}
            </p>
          </div>
        </div>

        <div className="introduce">{data?.introduce}</div>

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

        <p className="description">{data?.description}</p>

        <div className="div-review">
          <img
            alt="ic-like"
            src={
              data?.isLiked ? "/assets/images/home_page/ic_heart_empty.svg" : "/assets/images/home_page/ic_heart.svg"
            }
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
