import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import DetailIndexComponent from "src/components/community/detail_post/IndexComponent";

const Community: NextPage = () => <DetailIndexComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community"])),
  },
});

export default Community;
