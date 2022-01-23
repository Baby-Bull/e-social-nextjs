import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import theme from "src/theme";

import GridLeftComponent from "./GridLeftComponent";

const RegisterComponents = () => {
  const { t } = useTranslation();

  return (
    <ContentComponent>
      <Box>
        <Grid container>
          <GridLeftComponent />

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                pt: [5, 9],
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
                {t("register:title")}
              </Typography>

              <Typography
                sx={{
                  pt: "20px",
                  fontWeight: 300,
                  color: theme.navy,
                }}
              >
                {t("register:sub-title")}
              </Typography>
              <Box pt="63px">
                <ButtonComponent mode="twitter">Twitterで登録</ButtonComponent>
              </Box>
              <Box pt="48px">
                <ButtonComponent mode="google">Googleで登録</ButtonComponent>
              </Box>
              <Box pt="48px">
                <ButtonComponent mode="github">Githubで登録</ButtonComponent>
              </Box>

              <Link href="/about" color="secondary">
                <Box
                  sx={{
                    pt: ["48px", "102px"],
                    fontSize: 16,
                    fontWeight: 400,
                    color: theme.navy,
                    display: "flex",
                  }}
                >
                  <Typography>{t("register:login-text-1")}</Typography>
                  <Typography color={theme.blue}>{t("register:login-text-2")}</Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ContentComponent>
  );
};
export default RegisterComponents;
