import { Grid, Box } from "@mui/material";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import styles from "src/components/home/home.module.scss";

import { dataMatchingMockData } from "../mockData/mockData";

interface IMatchingItemProps {
  label: string;
  data: number;
  unit: string;
}

interface IMatchingItemMobileProps {
  icon: string;
  data: number;
  label: string;
}

const MatchingItem: React.SFC<IMatchingItemProps> = ({ label, data, unit }) => (
  <Box className={styles.boxMatching}>
    <div className="label">
      <span>{label}</span>
    </div>
    <div className="div-data">
      <span className="data">{data}</span> <span className="unit">{unit}</span>
    </div>
  </Box>
);

const MatchingItemMobile: React.SFC<IMatchingItemMobileProps> = ({ label, data, icon }) => (
  <Box className={styles.boxMatchingMobile}>
    <img src={icon} alt="icon" />

    <span className="label-type">{label}</span>
    {data ? <span className="span-has-data" /> : ""}
  </Box>
);

const MatchingComponent = () => {
  const { t } = useTranslation();

  const [dataMatching, setDataMatching] = useState<any>({
    request: {
      label: t("home:matching.request"),
      data: 0,
      unit: t("home:matching.request-unit"),
    },
    application: {
      label: t("home:matching.application"),
      data: 0,
      unit: t("home:matching.application-unit"),
    },
    people: {
      label: t("home:matching.people"),
      data: 0,
      unit: t("home:matching.people-unit"),
    },
    community: {
      label: t("home:matching.community"),
      data: 0,
      unit: t("home:matching.community-unit"),
    },
  });

  const [dataMatchingMobile] = useState<any>({
    request: {
      label: t("home:matching.request"),
      data: 1,
      icon: "/assets/images/home_page/ic_user.svg",
    },
    application: {
      label: t("home:matching.application"),
      data: 0,
      icon: "/assets/images/home_page/ic_hand.svg",
    },
    people: {
      label: t("home:matching.people"),
      data: 0,
      icon: "/assets/images/home_page/ic_heart_blue.svg",
    },
    chat: {
      label: t("home:matching.chat"),
      data: 1,
      icon: "/assets/images/home_page/ic_chat.svg",
    },
    community: {
      label: t("home:matching.community"),
      data: 0,
      icon: "/assets/images/home_page/ic_star_circle.svg",
    },
  });

  useEffect(() => {
    const data = Object.keys(dataMatching).reduce(
      (prev, key) => ({
        ...prev,
        [key]: {
          ...dataMatching[key],
          data: dataMatchingMockData[key] || 0,
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
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MatchingComponent;