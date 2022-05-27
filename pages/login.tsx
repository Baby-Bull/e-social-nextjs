import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";

import { USER_TOKEN } from "src/helpers/storage";

const LoginComponent = dynamic(() => import("src/components/authen/login/LoginComponent"), { ssr: false });

const Login: NextPage = () => <LoginComponent />;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const cookies = parseCookies(ctx);
  if (cookies[USER_TOKEN]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login", "register"])),
    },
  };
};

export default Login;
