import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MyProfileComponent from "src/components/profile/MyProfileComponent";

const MyProfile: NextPage = () => <MyProfileComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "profile"])),
  },
});

export default MyProfile;
