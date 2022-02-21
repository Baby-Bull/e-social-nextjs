import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";

import ButtonComponent from "src/components/common/elements/ButtonComponent";
import { HOMEPAGE_RECOMMEND_COMMUNITY_STATUS } from "src/components/constants/constants";
import styles from "src/components/searchCommunity/search_community.module.scss";
import { replaceLabelByTranslate } from "src/utils/utils";

interface IIBoxItemCommunityDataItem {
  image: string;
  numberOfRegister: number;
  name: string;
  numberOfMembers: number;
  tags: Array<string>;
  description: string;
  status: number;
}

interface IBoxItemCommunityComponentProps {
  data: IIBoxItemCommunityDataItem;
}

const BoxItemCommunityComponent: React.SFC<IBoxItemCommunityComponentProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} className={styles.boxCommunity} style={{ padding: "18px 20px" }}>
      <Box className={styles.boxItemCommunity}>
        <Grid container>
          <Grid item xs={9}>
            <div className="label-number-of-register">
              {replaceLabelByTranslate(t("home:box-community-recommend.number-of-register"), data?.numberOfRegister)}
            </div>
          </Grid>
        </Grid>
        <div className="image-community">
          <img className="image" src={data?.image} alt="community" />
        </div>
        <p className="name">{data?.name}</p>
        <Typography className="number-of-participant">
          {replaceLabelByTranslate(t("community-search:box-item.number-of-participant"), data?.numberOfMembers)}
        </Typography>
        <div className="tags">
          <ul>
            {data?.tags?.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <p className="description">{data?.description}</p>

        <div className="button">
          <ButtonComponent mode={HOMEPAGE_RECOMMEND_COMMUNITY_STATUS[data?.status]?.mode} fullWidth>
            {HOMEPAGE_RECOMMEND_COMMUNITY_STATUS[data?.status]?.label}
          </ButtonComponent>
        </div>
      </Box>
    </Grid>
  );
};

export default BoxItemCommunityComponent;
