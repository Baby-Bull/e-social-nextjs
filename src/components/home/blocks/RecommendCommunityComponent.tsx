import { Box, Grid, Link } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import { HOMEPAGE_RECOMMEND_COMMUNITY_STATUS } from "src/components/constants/constants";
import styles from "src/components/home/home.module.scss";
import { replaceLabelByTranslate } from "src/utils/utils";

import { recommendCommunityMockData } from "../mockData/mockData";

import SlickSliderRecommendComponent from "./SlickSliderRecommendComponent";

interface IRecommendCommunityDataItem {
  image: string;
  numberOfRegister: number;
  name: string;
  numberOfMembers: number;
  tags: Array<string>;
  description: string;
  status: number;
}

interface IRecommendCommunityItemProps {
  data: IRecommendCommunityDataItem;
}

const RecommendCommunityItem: React.SFC<IRecommendCommunityItemProps> = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Grid item xs={12} className={classNames(styles.boxRecommend, "box-recommend-community")} style={{ padding: 0 }}>
      <Box className={styles.boxRecommendCommunity}>
        <Grid container style={{ padding: 10 }}>
          <Grid item xs={9}>
            <div className="label-number-of-register">
              {replaceLabelByTranslate(t("home:box-community-recommend.number-of-register"), data?.numberOfRegister)}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label-number-of-members">
              {replaceLabelByTranslate(t("home:box-community-recommend.number-of-members"), data?.numberOfMembers)}
            </div>
          </Grid>
        </Grid>
        <div className="image-community">
          <img className="image" src={data?.image} alt="community" />
        </div>
        <p className="name">{data?.name}</p>
        <p className="description">{data?.description}</p>

        <div className="tags">
          <ul>
            {data?.tags?.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="button">
          <ButtonComponent
            mode={HOMEPAGE_RECOMMEND_COMMUNITY_STATUS[data?.status]?.mode}
            fullWidth
            onClick={() =>
              HOMEPAGE_RECOMMEND_COMMUNITY_STATUS[data?.status]?.allowJoinCommunity ? router.push("/community") : ""
            }
          >
            {HOMEPAGE_RECOMMEND_COMMUNITY_STATUS[data?.status]?.label}
          </ButtonComponent>
        </div>
      </Box>
    </Grid>
  );
};

const RecommendCommunityComponent = () => {
  const { t } = useTranslation();
  const [recommendCommunities] = useState(recommendCommunityMockData);

  const [recommendCommunityItems, setRecommendCommunityItems] = useState([]);

  useEffect(() => {
    setRecommendCommunityItems(
      recommendCommunities.map((item, index) => <RecommendCommunityItem data={item} key={index} />),
    );
  }, [recommendCommunities]);

  return (
    <Grid container className={styles.recommendList}>
      <div className="div-title">
        <span className="title">{t("home:recommend-community")}</span>
        <Link className="link-see-more content-pc" href="/search_community" underline="none">
          {t("home:see-more")}
        </Link>
      </div>

      <div className="content">
        <SlickSliderRecommendComponent items={recommendCommunityItems} />
      </div>

      <Link className="link-see-more content-mobile" href="/search_community" underline="none">
        {t("home:see-more")}
      </Link>
    </Grid>
  );
};

export default RecommendCommunityComponent;
