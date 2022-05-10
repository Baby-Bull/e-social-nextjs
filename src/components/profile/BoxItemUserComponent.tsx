import { Box, Grid } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useContext, useState } from "react";
// eslint-disable-next-line import/order
import moment from "moment";

import "moment/locale/ja";
import { useRouter } from "next/router";

import styles from "src/components/profile/profile.module.scss";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
import { HOMEPAGE_RECOMMEND_MEMBER_STATUS, USER_SEARCH_STATUS, JOBS } from "src/components/constants/constants";
import { replaceLabelByTranslate } from "src/utils/utils";
import ModalMatchingComponent from "src/components/home/blocks/ModalMatchingComponent";
import { sendMatchingRequest } from "src/services/matching";
import { addUserFavorite, deleteUserFavorite } from "src/services/user";

import { AuthContext } from "../../../context/AuthContext";

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
  match_status?: string;
}

interface IBoxUserComponentProps {
  data: IUserItemProps;
  callbackHandleIsRefresh?: any;
  isRefresh?: boolean;
}

const BoxItemUserComponent: React.SFC<IBoxUserComponentProps> = ({ data, callbackHandleIsRefresh, isRefresh }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [showModalMatching, setModalMatching] = React.useState(false);
  const [liked, setLiked] = useState(data?.is_favorite);
  const { auth, dispatch } = useContext(AuthContext);
  const handleShowModalMatching = (matchStatus) => {
    // handleShowModalMatching
    if (!matchStatus) {
      setModalMatching(true);
    } else if (matchStatus === "confirmed") {
      router.push("/chat/personal");
    } else {
      return 1;
    }
  };
  const handleSendMatchingRequest = async (matchingRequest) => {
    const res = await sendMatchingRequest(data?.id, matchingRequest);
    setModalMatching(false);
    callbackHandleIsRefresh(!isRefresh);
    return res;
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

  const handleFavoriteAnUser = (isFavorite: boolean, tempData: string) => {
    if (isFavorite) deleteUserFavorite(tempData);
    else addUserFavorite(tempData);
  };

  const handleClickFavoriteButton = () => {
    handleFavoriteAnUser(liked, data?.id);
    if (liked) dispatch({ type: "REMOVE_FAVORITE", payload: auth });
    else dispatch({ type: "ADD_FAVORITE", payload: auth });
    setLiked(!liked);
  };

  const handleClickToProfile = () => {
    router.push(`/profile/${data.id}`);
    // callbackHandleIsRefresh(!isRefresh);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} className={classNames(styles.boxItemUser)}>
        <Box className={styles.boxItemRecommend}>
          <Box onClick={handleClickToProfile} sx={{ cursor: "pointer" }}>
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
                      moment(data?.last_login_at).utc().fromNow(),
                    )
                  : t("home:box-member-recommend.no-login")}
              </span>
            </div>

            <div className="info-summary">
              <img src={data?.profile_image} alt="img-member" />
              <div className="member-info">
                <p className="name">{data?.username}</p>
                <p className="career">{JOBS[data?.job_position]?.label}</p>
                <p className="review">
                  {t("home:box-member-recommend.review")}: {data?.review_count}
                </p>
              </div>
            </div>

            <div className="introduce">{data?.self_description ? data?.self_description : "情報なし"}</div>

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
          </Box>
          <div className="div-review" onClick={handleClickFavoriteButton}>
            <img
              alt="ic-like"
              src={liked ? "/assets/images/home_page/ic_heart.svg" : "/assets/images/home_page/ic_heart_empty.svg"}
            />
            <span>{t("user-search:btn-add-favorite")}</span>
          </div>

          <ButtonComponent
            fullWidth
            sx={{ width: "278px" }}
            onClick={() => handleShowModalMatching(data?.match_status)}
            mode={HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(data?.match_status)]?.mode}
          >
            {HOMEPAGE_RECOMMEND_MEMBER_STATUS[handleMapMatchingStatus(data?.match_status)]?.label}
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
