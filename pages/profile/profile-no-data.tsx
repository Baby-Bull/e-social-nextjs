import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProfileNoDataComponent from "../../src/components/profile/ProfileNoDataComponent";

const Profile: NextPage = () => <ProfileNoDataComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "profile"])),
  },
});

export default Profile;
