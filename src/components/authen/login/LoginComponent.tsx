/* eslint-disable react/jsx-no-useless-fragment */
import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LoginSocialGoogle, IResolveParams, TypeCrossFunction } from "reactjs-social-login";
import { useDispatch } from "react-redux";

import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import theme from "src/theme";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";
import SplashScreen from "src/components/common/SplashScreen";
import { authWithProvider } from "src/services/auth";
import { login } from "src/store/store";

import { LoginSocialGithub, LoginSocialTwitterV1 } from "../loginSocial";

const LoginComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const githubRef = useRef<TypeCrossFunction>(null!);
  const googleRef = useRef<TypeCrossFunction>(null!);

  const onLoginStart = () => {};

  const onLogoutFailure = () => {};

  useEffect(() => {
    const registerAccount = async (providerAuth: string, accessToken: string) => {
      setIsLoading(true);
      const resAuth = await authWithProvider(providerAuth, accessToken);
      if (resAuth?.data?.access_token) {
        await dispatch(login(resAuth?.data?.user));
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
    return () => {
      setProfile(null);
    };
  }, [profile]);

  return (
    <React.Fragment>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <ContentComponent authPage>
          <Box sx={{ marginTop: "55px" }}>
            <Grid container sx={{ flexDirection: { xs: "column-reverse", sm: "unset" } }}>
              <GridLeftComponent />
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    pt: ["64px", "110px"],
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
                    <LoginSocialTwitterV1
                      ref={githubRef}
                      redirect_uri={process.env.NEXT_PUBLIC_REDIRECT_URL_REGISTER}
                      onResolve={({ provider: twitterProvider, data }: IResolveParams) => {
                        setProvider(twitterProvider);
                        setProfile(data);
                      }}
                      onLoginStart={onLoginStart}
                      onReject={() => {}}
                    >
                      <ButtonComponent props={{ mode: "twitter" }}>{t("login:right.register-twitter")}</ButtonComponent>
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
                      onReject={() => {}}
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
                      onReject={() => {}}
                    >
                      <ButtonComponent props={{ mode: "github" }}>{t("login:right.register-git")}</ButtonComponent>
                    </LoginSocialGithub>
                  </Box>
                  <Box
                    sx={{
                      pt: "80px",
                      pb: ["116px", "0"],
                      fontSize: 14,
                      fontWeight: 400,
                      color: theme.navy,
                      display: { xs: "block", sm: "block", lg: "-webkit-box" },
                    }}
                  >
                    <Box sx={{ display: "-webkit-box" }}>
                      <Box>{t("login:cannot-login")}</Box>
                      <Link href="/register" color="secondary">
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
      )}
    </React.Fragment>
  );
};
export default LoginComponent;
