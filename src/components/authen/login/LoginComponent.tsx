/**
 * import libs
 */
import React, { useRef, useState, useEffect } from "react";
import { Box, Grid, Typography, Link, Toolbar, AppBar } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

/**
 * import Components
 */
import ButtonComponent from "src/components/common/ButtonComponent";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";
import SplashScreen from "src/components/common/SplashScreen";
/**
 * import functions
 */
import { authWithProvider } from "src/services/auth";
import { login } from "src/store/store";
/**
 * import constants
 */
import theme from "src/theme";
import actionTypes from "src/store/actionTypes";

import styles from "../authen.module.scss";
import LoginSocialGoogle from "../loginSocial/google/LoginSocialGoogle";
import { IResolveParams, LoginSocialGithub } from "../loginSocial";

const LoginComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const githubRef = useRef(null!);

  const onLoginStart = () => {
    // add login function
  };

  useEffect(() => {
    const registerAccount = async (providerAuth: string, credentials: any) => {
      setIsLoading(true);
      const resAuth = await authWithProvider(providerAuth, credentials);
      if (resAuth?.data?.access_token) {
        dispatch(login(resAuth?.data?.user));
        dispatch({
          type: actionTypes.UPDATE_UNREAD_LISTROOMS_COUNT,
          payload: {
            count: resAuth?.data?.user?.profile?.chat_room_with_unread_messages,
          },
        });
        if (resAuth?.data?.user?.is_profile_edited) {
          router.push(`/${router.query?.oldUrl || ""}`);
          // router.back();
        } else {
          router.push("/register/form");
        }
      } else {
        setIsLoading(false);
      }
      return resAuth;
    };
    if (profile?.credentials) {
      registerAccount(provider, profile);
    }
    return () => {
      setProfile(null);
    };
  }, [profile]);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div className={styles.loginScreen}>
          <Box className={styles.topBar}>
            <AppBar className={styles.appBar}>
              <Toolbar className={styles.toolBar}>
                <Box className={styles.logoSection}>
                  <Link href="/">
                    <a>
                      <Box className={styles.logoImg} component="img" alt="avatar" src="/assets/images/logo/logo.png" />
                    </a>
                  </Link>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>

          <Box className={styles.contentSection}>
            <Grid className={styles.contentContainer} container>
              <GridLeftComponent />
              <Grid className={styles.rightComponent} item xs={12} sm={6}>
                <Box className={styles.rightComponentWrapper}>
                  <Typography className={styles.title} sx={{ color: theme.navy }}>
                    {t("login:right.title")}
                  </Typography>
                  <Box pt="48px">
                    <LoginSocialGoogle
                      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                      redirectUrl={process.env.NEXT_PUBLIC_REDIRECT_URL_REGISTER}
                      onSuccess={({ provider: googleProvider, data }) => {
                        setProvider(googleProvider);
                        setProfile(data);
                      }}
                      onError={() => {}}
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
                  <Box className={styles.buttonSection} sx={{ color: theme.navy }}>
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
        </div>
      )}
    </div>
  );
};
export default LoginComponent;
