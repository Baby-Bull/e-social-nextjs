import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";

import { USER_TOKEN } from "src/helpers/storage";

import ProfileComponent from "../../src/components/profile/ProfileComponent";

const sampleUserId = "624cf8551b8a720009e2e1db";

const Profile: NextPage = () => <ProfileComponent />;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const cookies = parseCookies(ctx);
  if (!cookies[USER_TOKEN]) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "profile", "user-search", "home"])),
      paths: [{ params: { userId: sampleUserId } }],
      fallback: true, // 上記以外のパスでアクセスした場合は 404 ページにしない
    },
  };
};

export default Profile;
