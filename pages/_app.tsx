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
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import createEmotionCache from "src/createEmotionCache";
import { AUTH_PAGE_PATHS } from "src/constants/constants";
import { USER_TOKEN } from "src/helpers/storage";
import { refreshToken } from "src/services/auth";
// eslint-disable-next-line import/order
import theme from "src/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "src/styles/index.scss";

import { useStore } from "src/store/store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pathname: string;
}

const SplashScreen = () => (
  <img
    alt="splash"
    src="/assets/images/bg_loading.gif"
    style={{ top: "40vh", bottom: 0, right: 0, left: "40%", width: "20%", position: "fixed" }}
  />
);

// eslint-disable-next-line no-undef
const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, pathname } = props;
  const [queryClient] = React.useState(() => new QueryClient());
  React.useEffect(() => {
    const cookies = parseCookies();
    if (!AUTH_PAGE_PATHS.includes(pathname) && !cookies[USER_TOKEN]) {
      // Router.push("/login");
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

  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1" />
              <meta name="theme-color" content={theme.palette.primary.main} />
              <meta name="title" content="GOODHUB" />
              <meta
                name="description"
                content="goodhubは業界初、新しい形のITエンジニアの憩いの場を提供するサービスです。
コミュニティで新しい繋がりや仲間づくり、キャリアの相談など無料で全て使えます。"
              />
              <meta name="keywords" content="キーワード, goodhub" />
              <meta property="og:type" content="website" key="og-type" />
              <meta property="og:title" content='ITエンジニアのための溜まり場 - "goodhub"' key="og-title" />
              <meta
                property="og:description"
                content="goodhubは業界初、新しい形のITエンジニアの憩いの場を提供するサービスです。
コミュニティで新しい繋がりや仲間づくり、キャリアの相談など無料で全て使えます。"
                key="og-description"
              />
              <meta property="og:url" content={process.env.NEXT_PUBLIC_URL_PROFILE} key="og-url" />
              <meta
                property="og:image"
                content={`${process.env.NEXT_PUBLIC_URL_PROFILE}/assets/images/home_page/ogp_home.png`}
                key="og-img"
              />
              <meta property="og:site_name" content="GOODHUB" key="og-type" />
              <meta property="og:image:width" content="600" />
              <meta property="og:image:height" content="315" />
              <meta name="twitter:card" content='ITエンジニアのための溜まり場 - "goodhub"' key="twitter-card" />
              <meta name="twitter:url" content={process.env.NEXT_PUBLIC_URL_PROFILE} key="twitter-url" />
              <meta
                name="twitter:image"
                content={`${process.env.NEXT_PUBLIC_URL_PROFILE}/assets/images/home_page/ogp_home.png`}
                key="twitter-image"
              />
              <meta name="twitter:title" content='ITエンジニアのための溜まり場 - "goodhub"' key="twitter-title" />
              <meta
                name="twitter:description"
                content="goodhubは業界初、新しい形のITエンジニアの憩いの場を提供するサービスです。
コミュニティで新しい繋がりや仲間づくり、キャリアの相談など無料で全て使えます。"
                key="twitter-description"
              />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />

              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const { query, pathname, res } = ctx;

  const cookies = parseCookies(ctx);
  if (!AUTH_PAGE_PATHS.includes(pathname)) {
    if (!cookies[USER_TOKEN]) {
      if (!res) {
        Router.push("/login");
      }
      return {};
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
