import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CreatePostComponent from "src/components/community/post/CreateComponent";

const Community: NextPage = () => <CreatePostComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community"])),
  },
});

export default Community;
