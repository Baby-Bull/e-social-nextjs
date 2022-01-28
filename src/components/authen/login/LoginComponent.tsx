import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import theme from "src/theme";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";

const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <ContentComponent>
      <Box>
        <Grid container sx={{ flexDirection: { xs: "column-reverse", sm: "unset" } }}>
          <GridLeftComponent />
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                pt: ["64px", 9],
                px: ["8%", "20.7%"],
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: theme.navy,
                }}
              >
                {t("login:right.title")}
              </Typography>
              <Box pt="68px">
                <ButtonComponent props={{ mode: "twitter" }}>Twitterで登録</ButtonComponent>
              </Box>
              <Box pt="48px">
                <ButtonComponent props={{ mode: "google" }}>Googleで登録</ButtonComponent>
              </Box>
              <Box pt="48px">
                <ButtonComponent props={{ mode: "github" }}>Githubで登録</ButtonComponent>
              </Box>
              <Box
                sx={{
                  pt: "80px",
                  pb: ["116px", "0"],
                  fontSize: 14,
                  fontWeight: 400,
                  color: theme.navy,
                  display: { xs: "block", sm: "flex" },
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box>{t("login:cannot-login")}</Box>
                  <Link href="/about" color="secondary">
                    <Box color={theme.blue}>{t("login:register")}</Box>
                  </Link>
                </Box>
                <Box sx={{ textAlign: { xs: "center", sm: "unset" } }}>{t("login:contact-us")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ContentComponent>
  );
};
export default LoginComponent;
