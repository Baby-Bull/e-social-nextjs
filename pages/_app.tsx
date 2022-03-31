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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  }, []);

  return (
    <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
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

MyApp.getStaticProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const { query, pathname, res } = ctx;

  const cookies = parseCookies(ctx);
  if (!AUTH_PAGE_PATHS.includes(pathname)) {
    if (!cookies[USER_TOKEN]) {
      if (res) {
        res.writeHead(302, {
          Location: "/login",
        });
        res.end();
      } else {
        Router.push("/login");
      }
    }
  }
  if (Component.getStaticProps) {
    pageProps = await Component.getStaticProps(ctx);
  }
  return {
    pageProps,
    query,
    pathname,
    cookies,
  };
};

export default appWithTranslation(MyApp);
