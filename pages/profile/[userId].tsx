import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProfileComponent from "../../src/components/profile/ProfileComponent";
// import ProfileComponent from "../../src/components/profile/ProfileComponent";

const sampleUserId = "624cf8551b8a720009e2e1db";

const Profile: NextPage = () => <ProfileComponent userId={sampleUserId} />;

export async function getStaticPaths() {
  return {
    paths: [{ params: { userId: sampleUserId } }],
    fallback: true, // 上記以外のパスでアクセスした場合は 404 ページにしない
  };
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "profile"])),
  },
});

export default Profile;
