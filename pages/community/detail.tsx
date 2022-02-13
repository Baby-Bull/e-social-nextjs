import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import DetailPostComponent from "src/components/community/post/detail/IndexComponent";

const Community: NextPage = () => <DetailPostComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community"])),
  },
});

export default Community;
