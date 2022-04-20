import React, { useRef, useState, useEffect, useContext } from "react";
import { Box, Grid, Typography, Link, Backdrop, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LoginSocialGoogle, LoginSocialGithub, IResolveParams, TypeCrossFunction } from "reactjs-social-login";

import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import theme from "src/theme";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";
import { authWithProvider, getAccessTokenTwitter } from "src/services/auth";
import { AuthContext } from "context/AuthContext";

const LoginComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const githubRef = useRef<TypeCrossFunction>(null!);
  const googleRef = useRef<TypeCrossFunction>(null!);

  const { dispatch } = useContext(AuthContext);

  const onLoginStart = () => {
    setIsLoading(true);
  };

  const onLogoutFailure = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    const registerWithTwitter = async () => {
      const popupWindowURL = new URL(window.location.href);
      const code = popupWindowURL.searchParams.get("code");
      if (code) {
        const res = await getAccessTokenTwitter(code, process.env.NEXT_PUBLIC_REDIRECT_URL_REGISTER);
        if (res?.access_token) {
          setProvider("twitter");
          setProfile(res);
        }
      }
    };
    registerWithTwitter();
  }, []);

  // eslint-disable-next-line max-len
  const urlRedirectTwitter = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_TWITTER_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL_REGISTER}&scope=tweet.read%20users.read%20follows.read%20follows.write&state=state&code_challenge=challenge&code_challenge_method=plain`;

  useEffect(() => {
    const registerAccount = async (providerAuth: string, accessToken: string) => {
      setIsLoading(true);
      const resAuth = await authWithProvider(providerAuth, accessToken);
      setIsLoading(false);
      if (resAuth?.data?.access_token) {
        dispatch({ type: "LOGIN_SUCCESS", payload: resAuth?.data });
        if (resAuth?.data?.user?.is_profile_edited) {
          router.push("/");
        } else {
          router.push("/register/form");
        }
      }
      return resAuth;
    };
    if (profile?.access_token) {
      registerAccount(provider, profile?.access_token);
    }
  }, [profile]);

  return (
    <ContentComponent authPage>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
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
                <ButtonComponent props={{ mode: "twitter" }} href={urlRedirectTwitter}>
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
                    setIsLoading(false);
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
                    setIsLoading(false);
                  }}
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
                  display: { xs: "block", sm: "flex" },
                }}
              >
                <Box sx={{ display: "flex" }}>
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
  );
};
export default LoginComponent;
