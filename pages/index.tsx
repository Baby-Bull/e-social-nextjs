import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomeIndexComponents from "src/components/home/IndexComponent";

const Home: NextPage = () => <HomeIndexComponents />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home", "footer"])),
  },
});

export default Home;
