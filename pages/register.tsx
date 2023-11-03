import * as React from "react";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { USER_TOKEN } from "src/constants";
import ContentComponent from "src/components/layouts/ContentComponent";

import { NextPageWithLayout } from "./_app";

const RegisterComponent = dynamic(() => import("src/components/authen/RegisterComponent"), { ssr: false });

const Register: NextPageWithLayout = () => <RegisterComponent />;

Register.getLayout = ({ children }) => (
  <ContentComponent authPage showHeader={false}>
    {children}
  </ContentComponent>
);

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
      ...(await serverSideTranslations(locale, ["common", "register"])),
    },
  };
};

export default Register;
