import * as React from "react";
import Head from "next/head";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { appWithTranslation } from "next-i18next";
import { parseCookies } from "nookies";
import Router from "next/router";

import theme from "src/theme";
import createEmotionCache from "src/createEmotionCache";
import { AUTH_PAGE_PATHS } from "src/constants/constants";
import { USER_TOKEN } from "src/helpers/storage";
import { refreshToken } from "src/services/auth";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "src/styles/index.scss";

import { AuthContextProvider } from "../context/AuthContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pathname: string;
}

// eslint-disable-next-line no-undef
const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, pathname } = props;
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    const cookies = parseCookies();
    if (!AUTH_PAGE_PATHS.includes(pathname) && !cookies[USER_TOKEN]) {
      Router.push("/login");
    }

    if (!AUTH_PAGE_PATHS.includes(pathname) && cookies[USER_TOKEN]) {
      const now = new Date();
      const expiresIn = parseInt(cookies.EXPIRES_IN, 10) || now.getTime();

      const timeOutFreshToken = expiresIn - now.getTime() - 300000;
      setTimeout(() => {
        refreshToken();
        setInterval(() => {
          refreshToken();
        }, 2700000);
      }, timeOutFreshToken);
    }
  }, []);

  return (
    <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </AuthContextProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const { query, pathname, res } = ctx;

  const cookies = parseCookies(ctx);
  if (!AUTH_PAGE_PATHS.includes(pathname)) {
    if (!cookies[USER_TOKEN]) {
      if (res) {
        // ctx.res.writeHead(302, {
        //   Location: "/login",
        // });
        // ctx.res.end();
        // return {};
      } else {
        Router.push("/login");
      }
    }
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {
    pageProps,
    query,
    pathname,
    cookies,
  };
};

export default appWithTranslation(MyApp);
