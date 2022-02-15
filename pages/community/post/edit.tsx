import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import EditPostComponent from "src/components/community/post/EditComponent";

const Community: NextPage = () => <EditPostComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community"])),
  },
});

export default Community;
