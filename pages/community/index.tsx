import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunityComponent from "src/components/community/IndexComponent";

const Community: NextPage = () => <CommunityComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community"])),
  },
});

export default Community;
