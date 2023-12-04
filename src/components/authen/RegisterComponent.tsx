// TO-DO : update new format registration screen
/* eslint-disable no-console */
import React, { useState } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import GridLeftComponent from "src/components/authen/blocks/GridLeftComponent";
import SplashScreen from "src/components/common/atom-component/SplashScreen";

import styles from "./authen.module.scss";
import TopbarComponent from "./blocks/TopbarComponent";
import FormRegisterComponents from "./blocks/FormRegisterComponent";

const RegisterComponents = () => {
  const { t } = useTranslation();
  const [isLoading] = useState(false);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <div className={styles.loginScreen}>
      <TopbarComponent />

      <Box className={styles.contentSection}>
        <Grid className={styles.contentContainer} container>
          <GridLeftComponent />

          <Grid className={styles.rightComponent} item xs={12} sm={6}>
            <Box className={styles.rightComponentWrapper}>
              <FormRegisterComponents />
              <Link href="/login" color="secondary" sx={{ textDecoration: "none" }}>
                <Box className={styles["loginRedirect--section"]} sx={{ color: theme.navy }}>
                  <Typography sx={{ marginRight: "5px" }}>{t("register:login-text-1")}</Typography>
                  <Typography color={theme.blue}>{t("register:login-text-2")}</Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default RegisterComponents;
