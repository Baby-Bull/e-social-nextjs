import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const LoginComponent = dynamic(() => import("src/components/authen/login/LoginComponent"), { ssr: false });

const Login: NextPage = () => <LoginComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "login", "register"])),
  },
});

export default Login;
