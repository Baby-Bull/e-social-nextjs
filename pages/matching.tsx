import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";

import MatchingComponent from "src/components/matching/MatchingComponent";
import { USER_TOKEN } from "src/helpers/storage";

const Matching: NextPage = () => <MatchingComponent />;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const cookies = parseCookies(ctx);
  if (!cookies[USER_TOKEN]) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "thread", "register", "matching", "chat", "home"])),
    },
  };
};

export default Matching;
