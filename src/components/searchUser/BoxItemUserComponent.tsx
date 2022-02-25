import { Box, Grid } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React from "react";

import styles from "src/components/searchUser/search_user.module.scss";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
import { HOMEPAGE_MEMBER_RECOMMEND_CHAT_STATUS } from "src/components/constants/constants";
import { replaceLabelByTranslate } from "src/utils/utils";
import ModalMatchingComponent from "src/components/home/blocks/ModalMatchingComponent";

interface IUserItemProps {
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

interface IBoxUserComponentProps {
  data: IUserItemProps;
}

const BoxItemUserComponent: React.SFC<IBoxUserComponentProps> = ({ data }) => {
  const { t } = useTranslation();
  const [showModalMatching, setModalMatching] = React.useState(false);
  const handleShowModalMatching = () => setModalMatching(true);

  return (
    <React.Fragment>
      <Grid item xs={12} className={classNames(styles.boxItemUser)}>
        <Box className={styles.boxItemSearchUser}>
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
                data?.isLiked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"
              }
            />
            <span>{t("user-search:btn-add-favorite")}</span>
          </div>

          <ButtonComponent mode="green" fullWidth onClick={handleShowModalMatching}>
            {t("user-search:btn-send-matching-request")}
          </ButtonComponent>
        </Box>
      </Grid>

      <ModalMatchingComponent open={showModalMatching} setOpen={setModalMatching} />
    </React.Fragment>
  );
};

export default BoxItemUserComponent;
