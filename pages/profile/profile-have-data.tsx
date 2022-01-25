import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProfileHaveDataComponent from "../../src/components/profile/ProfileHaveDataComponent";

const Profile: NextPage = () => <ProfileHaveDataComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "profile"])),
  },
});

export default Profile;
