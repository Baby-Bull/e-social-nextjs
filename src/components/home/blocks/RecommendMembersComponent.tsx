import { Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { memo, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import styles from "src/components/home/home.module.scss";
import { ISlideRecommendUsersHomepage } from "src/constants/interfaces";
import UserCardHomeScreen from "src/components/common/organisms/UserCardHomeScreen";

import SlickSliderRecommendComponent from "./SlickSliderRecommendComponent";

dayjs.extend(relativeTime);
dayjs.locale("ja");

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

const RecommendMembersComponent: React.SFC<ISlideRecommendUsersHomepage> = memo(
  ({ title, dataRecommends, indexFetch, handleOpenMatchingModal, handleAcceptMatchingRequestReceived, queryUrl }) => {
    const { t } = useTranslation();
    const [dataElements, setDataElements] = useState([]);

    useEffect(() => {
      setDataElements(
        dataRecommends?.map((item, index) => (
          <UserCardHomeScreen
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
          <Link href={`/search_user?sortType=${queryUrl}`}>
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
