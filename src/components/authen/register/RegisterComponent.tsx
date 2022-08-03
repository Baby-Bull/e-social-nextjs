/* eslint-disable no-console */
import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LoginSocialGoogle, IResolveParams, TypeCrossFunction } from "reactjs-social-login";
import { useDispatch } from "react-redux";

import theme from "src/theme";
import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";
import { authWithProvider } from "src/services/auth";
import { login } from "src/store/store";
import SplashScreen from "src/components/common/SplashScreen";

import { LoginSocialTwitterV1, LoginSocialGithub } from "../loginSocial";

const RegisterComponents = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const githubRef = useRef<TypeCrossFunction>(null!);
  const googleRef = useRef<TypeCrossFunction>(null!);

  const onLoginStart = () => {
    console.log(isLoading);
  };

  const onLogoutFailure = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    const registerAccount = async (providerAuth: string, accessToken: string) => {
      setIsLoading(true);
      const resAuth = await authWithProvider(providerAuth, accessToken);
      if (resAuth?.data?.access_token) {
        dispatch(login(resAuth?.data?.user));
        if (resAuth?.data?.user?.is_profile_edited) {
          router.push("/");
        } else {
          router.push("/register/form");
        }
      } else {
        setIsLoading(false);
      }
      return resAuth;
    };
    if (profile?.access_token) {
      registerAccount(provider, profile?.access_token);
    }
  }, [profile]);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <ContentComponent authPage>
      <Box sx={{ marginTop: "55px" }}>
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
                <LoginSocialTwitterV1
                  ref={githubRef}
                  redirect_uri={process.env.NEXT_PUBLIC_REDIRECT_URL_REGISTER}
                  onResolve={({ provider: twitterProvider, data }: IResolveParams) => {
                    setProvider(twitterProvider);
                    setProfile(data);
                  }}
                  onLoginStart={onLoginStart}
                  onReject={() => {
                    setIsLoading(false);
                  }}
                >
                  <ButtonComponent props={{ mode: "twitter" }}>{t("register:register-twitter")}</ButtonComponent>
                </LoginSocialTwitterV1>
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
                    setIsLoading(false);
                  }}
                >
                  <ButtonComponent props={{ mode: "google" }}>{t("register:register-google")}</ButtonComponent>
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
                    setIsLoading(false);
                  }}
                >
                  <ButtonComponent props={{ mode: "github" }}>{t("register:register-git")}</ButtonComponent>
                </LoginSocialGithub>
              </Box>

              <Link
                href="/login"
                color="secondary"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    pt: ["48px", "102px"],
                    pb: ["80px", "0px"],
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
