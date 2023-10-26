/**
 * import libs
 */
import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useSelector, useDispatch } from "react-redux";

/**
 * import function
 */
import actionTypes from "src/store/actionTypes";
import { getUserStatics } from "src/services/user";
/**
 * import constants
 */
import { REACT_QUERY_KEYS } from "src/constants/constants";
import styles from "src/components/home/home.module.scss";
import { IDataInfoMatching, IStoreState } from "src/constants/interfaces";

const MainInfomationComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [auth, isProfileEdited] = useSelector((state: IStoreState) => [state.user, state.is_profile_edited]);
  const [generalCommunityId, setGeneralCommunityId] = React.useState<string>("");
  useQuery(
    [`${REACT_QUERY_KEYS.HOMEPAGE_GET_USER_STATS}`],
    async () => {
      const stats = await getUserStatics();
      setGeneralCommunityId(stats?.default_community_id);
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: stats,
      });
      dispatch({
        type: actionTypes.UPDATE_UNREAD_LISTROOMS_COUNT,
        payload: { count: stats.chat_room_with_unread_messages },
      });
      dispatch({
        type: actionTypes.UPDATE_NOTIFICATION_UNREAD_COUNT,
        payload: { count: stats.notification_unread_count },
      });
    },
    { refetchOnWindowFocus: false, keepPreviousData: true },
  );

  const hasFinishedMission1 = useMemo(() => isProfileEdited, [isProfileEdited]);
  const hasFinishedMission2 = useMemo(
    () => auth.community_count > 0 && auth.match_request_confirmed_count + auth.match_application_confirmed_count > 0,
    [auth],
  );
  const hasFinishedMission3 = useMemo(() => auth.community_chat_message_count > 0, [auth]);
  const hasFinishedMission4 = useMemo(() => auth.community_post_count > 0, [auth]);

  const dataInfoMatching: IDataInfoMatching[] = [
    {
      title: t("home:matching.community"),
      icon: "/assets/images/home_page/ic_star_circle.svg",
      number: auth?.community_count ?? 0,
      link: "/matching?type=community",
    },
    {
      title: t("home:matching.people"),
      icon: "/assets/images/home_page/ic_heart_blue.svg",
      number: auth?.favorite_count ?? 0,
      link: "/matching?type=favorite",
    },
    {
      title: t("home:matching.request"),
      icon: "/assets/images/home_page/ic_user.svg",
      number: auth?.match_application_pending_count ?? 0,
      link: "/matching?type=received",
    },
    {
      title: t("home:matching.application"),
      icon: "/assets/images/home_page/ic_hand.svg",
      number: auth?.match_request_pending_count ?? 0,
      link: "/matching?type=sent",
    },
  ];
  return (
    <Box className={styles.mainInfomations}>
      <Grid container spacing={3}>
        <Grid className={styles.imgInfomation} item xs={3}>
          <Box className={styles.infoTitle}>{auth.username}</Box>
          <Avatar className={styles["avatar-section"]}>
            <Image
              loader={() => auth?.profile_image}
              src={auth?.profile_image || "/assets/images/avatar_user.png"}
              alt="Image"
              width={106}
              height={106}
              loading="lazy"
              className="rounded-full"
            />
          </Avatar>
          <Box className={styles.contentProfile}>
            <Typography className={styles.titleProfile}>{t("home:main-information.edit-title")}</Typography>
            <Link href="/my-profile">
              <Button className={styles.btnProfile}>{t("home:main-information.edit-button")}</Button>
            </Link>
          </Box>
        </Grid>
        <Grid className={styles.matchingInfomation} item xs={3}>
          <Box className={styles.infoTitle}>{t("home:main-information.info-title")}</Box>
          <Grid container>
            <Grid item xs={9}>
              <ul className={styles.matchingListTitle}>
                {dataInfoMatching?.map((item, index) => (
                  <Link href={item.link} shallow key={index}>
                    <li>
                      <img src={item.icon} alt="icon" />
                      <span>{item.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul className={styles.matchingListNumber}>
                {dataInfoMatching?.map((item, index) => (
                  <li key={index}>{item.number}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={styles.missionInfomation} item xs={6}>
          <Box className={styles.infoTitle}>{t("home:main-information.mission.mission-title")}</Box>
          <ul className={styles.missionList}>
            <Link href="/my-profile/edit" shallow>
              <li>
                <span className={hasFinishedMission1 ? styles.doneMissionText : undefined}>
                  Mission 1 {t("home:main-information.mission.mission1")}
                </span>
                {hasFinishedMission1 && <div className={styles.doneMission}>OK</div>}
              </li>
            </Link>
            <Link href="/search_community" shallow>
              <li>
                <span className={hasFinishedMission2 ? styles.doneMissionText : undefined}>
                  Mission 2 {t("home:main-information.mission.mission2")}
                </span>
                {hasFinishedMission2 && <div className={styles.doneMission}>OK</div>}
              </li>
            </Link>
            <Link href="/matching?type=community" shallow>
              <li>
                <span className={hasFinishedMission3 ? styles.doneMissionText : undefined}>
                  Mission 3 {t("home:main-information.mission.mission3")}
                </span>
                {hasFinishedMission3 && <div className={styles.doneMission}>OK</div>}
              </li>
            </Link>
            <Link href={`/ community / ${generalCommunityId}/post/create`} shallow>
              <li>
                <span className={hasFinishedMission4 ? styles.doneMissionText : undefined}>
                  Mission 4 {t("home:main-information.mission.mission4")}
                </span>
                {hasFinishedMission4 && <div className={styles.doneMission}>OK</div>}
              </li>
            </Link>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainInfomationComponent;
