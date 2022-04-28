import { Grid, Box, Link } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState, useContext } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "src/components/home/home.module.scss";
import { AuthContext } from "context/AuthContext";

interface IMatchingItemProps {
  label: string;
  data: number;
  unit: string;
  link: string;
}

interface IMatchingItemMobileProps {
  icon: string;
  data: number;
  label: string;
  link: string;
}

const MatchingItem: React.SFC<IMatchingItemProps> = ({ label, data, unit, link }) => (
  <Link sx={{ color: "black" }} underline="none" href={link}>
    <Box className={styles.boxMatching}>
      <div className="label">
        <span>{label}</span>
      </div>
      <ArrowForwardIosIcon sx={{ fontSize: "10px", fontWeight: "bold", marginLeft: "-3em" }} />
      <div className="div-data">
        <span className="data">{data}</span>
        <span className="unit">{unit}</span>
      </div>
    </Box>
  </Link>
);

const MatchingItemMobile: React.SFC<IMatchingItemMobileProps> = ({ label, data, icon, link }) => (
  <Link sx={{ color: "black" }} underline="none" href={link}>
    <Box className={styles.boxMatchingMobile}>
      <img src={icon} alt="icon" />
      <span className="label-type">{label}</span>
      {data ? <span className="span-has-data" /> : ""}
    </Box>
  </Link>
);

const MatchingComponent = () => {
  const { t } = useTranslation();
  // global auth
  const { auth } = useContext(AuthContext);

  const [dataMatching, setDataMatching] = useState<any>({
    request: {
      label: t("home:matching.request"),
      data: auth?.user?.profile?.match_application_count ?? 0,
      unit: t("home:matching.request-unit"),
      link: "/matching?type=received",
    },
    application: {
      label: t("home:matching.application"),
      data: auth?.user?.profile?.match_request_count ?? 0,
      unit: t("home:matching.application-unit"),
      link: "/matching?type=sent",
    },
    people: {
      label: t("home:matching.people"),
      data: auth?.user?.profile?.favorite_count ?? 0,
      unit: t("home:matching.people-unit"),
      link: "/matching?type=favorite",
    },
    community: {
      label: t("home:matching.community"),
      data: auth?.user?.profile?.community_count ?? 0,
      unit: t("home:matching.community-unit"),
      link: "/matching?type=community",
    },
  });

  const [dataMatchingMobile] = useState<any>({
    request: {
      label: t("home:matching.request"),
      data: auth?.user?.profile?.match_application_count ?? 0,
      icon: "/assets/images/home_page/ic_user.svg",
      link: "/matching?type=received",
    },
    application: {
      label: t("home:matching.application"),
      data: auth?.user?.profile?.match_request_count ?? 0,
      icon: "/assets/images/home_page/ic_hand.svg",
      link: "/matching?type=sent",
    },
    people: {
      label: t("home:matching.people"),
      data: auth?.user?.profile?.favorite_count ?? 0,
      icon: "/assets/images/home_page/ic_heart_blue.svg",
      link: "/matching?type=favorite",
    },
    chat: {
      label: t("home:matching.chat"),
      data: 1,
      icon: "/assets/images/home_page/ic_chat.svg",
      link: "/matching?type=matched",
    },
    community: {
      label: t("home:matching.community"),
      data: auth?.user?.profile?.community_count ?? 0,
      icon: "/assets/images/home_page/ic_star_circle.svg",
      link: "/matching?type=community",
    },
  });

  useEffect(() => {
    const data = Object.keys(dataMatching).reduce(
      (prev, key) => ({
        ...prev,
        [key]: {
          ...dataMatching[key],
        },
      }),
      {},
    );
    setDataMatching(data);
  }, []);

  return (
    <Grid container>
      <Grid container className={classNames(styles.matchingGridContainer, "content-pc")}>
        {Object.keys(dataMatching)?.map((key, index) => (
          <Grid item key={index}>
            <MatchingItem
              label={dataMatching[key]?.label}
              unit={dataMatching[key]?.unit}
              data={dataMatching[key]?.data}
              link={dataMatching[key]?.link}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container className={classNames(styles.matchingGridContainerMobile, "content-mobile")}>
        {Object.keys(dataMatchingMobile)?.map((key, index) => (
          <Grid item key={index} className={styles.matchingGridItem}>
            <MatchingItemMobile
              label={dataMatchingMobile[key]?.label}
              icon={dataMatchingMobile[key]?.icon}
              data={dataMatchingMobile[key]?.data}
              link={dataMatchingMobile[key]?.link}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MatchingComponent;
