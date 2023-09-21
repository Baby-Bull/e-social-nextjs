import * as React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
// import { parseCookies } from "nookies";

// import { USER_TOKEN } from "src/helpers/storage";
import ContentComponent from "src/components/layouts/ContentComponent";

import { NextPageWithLayout } from "./_app";

const WaitingRenewalComponent = dynamic(() => import("src/components/WaitingRenewalComponent"), { ssr: false });

const WaitingRenewal: NextPageWithLayout = () => <WaitingRenewalComponent />;

WaitingRenewal.getLayout = ({ children }) => (
  <ContentComponent authPage showHeader={false} showFooter={false}>
    {children}
  </ContentComponent>
);

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  // const cookies = parseCookies(ctx);
  // if (cookies[USER_TOKEN]) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login", "register"])),
    },
  };
};

export default WaitingRenewal;
