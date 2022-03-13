/* eslint-disable no-console */
import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, Typography, Link, CircularProgress, Backdrop } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LoginSocialGoogle, LoginSocialGithub, IResolveParams, TypeCrossFunction } from "reactjs-social-login";

import theme from "src/theme";
import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";

const RegisterComponents = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirectForm = () => router.push("/register/form");
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const githubRef = useRef<TypeCrossFunction>(null!);
  const googleRef = useRef<TypeCrossFunction>(null!);

  const onLoginStart = () => {
    setIsLoading(true);
  };

  const onLogoutFailure = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    const registerAccount = async (accessToken: string) => {
      let urlAuth = `${process.env.NEXT_PUBLIC_API}/auth`;
      switch (provider) {
        case "github":
          urlAuth += "/github";
          break;
        case "google":
          urlAuth += "/google";
          break;
        default:
          setIsLoading(false);
          // eslint-disable-next-line no-alert
          alert("Provider not support");
          return;
      }
      setIsLoading(true);
      const rawResponse = await fetch(urlAuth, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: accessToken }),
      });
      const content = await rawResponse.json();
      setIsLoading(false);
      if (content?.data?.access_token) {
        router.push("/register/form");
      }
      return content;
    };
    if (profile?.access_token) {
      registerAccount(profile.access_token);
    }
  }, [profile]);

  return (
    <ContentComponent authPage>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
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
                  textAlign: "center",
                }}
              >
                {t("register:sub-title")}
              </Typography>

              <Box pt="63px">
                <ButtonComponent props={{ mode: "twitter" }} onClick={() => handleRedirectForm()}>
                  {t("login:right.register-twitter")}
                </ButtonComponent>
              </Box>
              <Box pt="48px">
                <LoginSocialGoogle
                  ref={googleRef}
                  client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
                  onLogoutFailure={onLogoutFailure}
                  onLoginStart={onLoginStart}
                  onResolve={({ provider: googleProvider, data }: IResolveParams) => {
                    setProvider(googleProvider);
                    setProfile(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <ButtonComponent props={{ mode: "google" }}>{t("login:right.register-google")}</ButtonComponent>
                </LoginSocialGoogle>
              </Box>

              <Box pt="48px">
                <LoginSocialGithub
                  ref={githubRef}
                  client_id={process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || ""}
                  client_secret={process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || ""}
                  redirect_uri={process.env.NEXT_PUBLIC_REDIRECT_URL_REGISTER}
                  onResolve={({ provider: githubProvider, data }: IResolveParams) => {
                    setProvider(githubProvider);
                    setProfile(data);
                  }}
                  onLoginStart={onLoginStart}
                  onReject={(err: any) => {
                    console.log(err);
                  }}
                >
                  <ButtonComponent props={{ mode: "github" }}>{t("login:right.register-git")}</ButtonComponent>
                </LoginSocialGithub>
              </Box>

              <Link
                href="/about"
                color="secondary"
                sx={{
                  textDecoration: "none",
                }}
              >
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
