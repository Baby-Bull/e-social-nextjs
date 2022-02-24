import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MatchingComponent from "src/components/matching/MatchingComponent";

const Matching: NextPage = () => <MatchingComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "thread", "register", "matching", "chat", "home"])),
  },
});

export default Matching;
