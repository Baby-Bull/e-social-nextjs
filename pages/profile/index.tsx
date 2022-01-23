import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProfileComponent from "../../src/components/profile/ProfileComponent";

const Profile: NextPage = () => <ProfileComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "profile"])),
  },
});

export default Profile;
