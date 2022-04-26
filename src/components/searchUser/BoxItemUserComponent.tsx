import { Box, Grid } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React from "react";
import moment from "moment";

import "moment/locale/ja";
import styles from "src/components/searchUser/search_user.module.scss";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
import { USER_SEARCH_STATUS } from "src/components/constants/constants";
import { replaceLabelByTranslate } from "src/utils/utils";
import ModalMatchingComponent from "src/components/home/blocks/ModalMatchingComponent";
import { sendMatchingRequest } from "src/services/matching";

interface IUserItemProps {
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

interface IBoxUserComponentProps {
  data: IUserItemProps;
  callbackHandleIsRefresh: any;
  isRefresh: boolean;
}

const BoxItemUserComponent: React.SFC<IBoxUserComponentProps> = ({ data, callbackHandleIsRefresh, isRefresh }) => {
  const { t } = useTranslation();
  const [showModalMatching, setModalMatching] = React.useState(false);
  const handleShowModalMatching = () => setModalMatching(true);
  const handleSendMatchingRequest = async (matchingRequest) => {
    const res = await sendMatchingRequest(data?.id, matchingRequest);
    setModalMatching(false);
    callbackHandleIsRefresh(!isRefresh);
    return res;
  };

  return (
    <React.Fragment>
      <Grid item xs={12} className={classNames(styles.boxItemUser)}>
        <Box className={styles.boxItemSearchUser}>
          <div className="status-summary">
            <ButtonComponent
              mode={USER_SEARCH_STATUS[data?.status]?.mode}
              size="small"
              style={{ borderRadius: "4px", width: "130px" }}
            >
              {USER_SEARCH_STATUS[data?.status]?.label}
            </ButtonComponent>
            <span className="label-login-status">
              {data?.last_login_at
                ? replaceLabelByTranslate(
                    t("home:box-member-recommend.last-login"),
                    moment(data?.last_login_at).fromNow(),
                  )
                : t("home:box-member-recommend.no-login")}
            </span>
          </div>

          <div className="info-summary">
            <img src={data?.profile_image} alt="img-member" />
            <div className="member-info">
              <p className="name">{data?.username}</p>
              <p className="career">{data?.job_position}</p>
              <p className="review">
                {t("home:box-member-recommend.review")}: {data?.review_count}
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

          <div className="div-review">
            <img
              alt="ic-like"
              src={
                data?.is_favorite
                  ? "/assets/images/home_page/ic_heart.svg"
                  : "/assets/images/home_page/ic_heart_empty.svg"
              }
            />
            <span>{t("user-search:btn-add-favorite")}</span>
          </div>

          <ButtonComponent mode="green" fullWidth onClick={handleShowModalMatching}>
            {t("user-search:btn-send-matching-request")}
          </ButtonComponent>
        </Box>
      </Grid>

      <ModalMatchingComponent
        userRequestMatching={data}
        open={showModalMatching}
        setOpen={setModalMatching}
        handleSendMatchingRequest={handleSendMatchingRequest}
      />
    </React.Fragment>
  );
};

export default BoxItemUserComponent;
