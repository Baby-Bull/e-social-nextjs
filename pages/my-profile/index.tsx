import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";

import MyProfileComponent from "src/components/profile/MyProfileComponent";
import { IS_PROFILE_EDITED, USER_TOKEN } from "src/helpers/storage";

const MyProfile: NextPage = () => <MyProfileComponent />;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const cookies = parseCookies(ctx);
  if (cookies[IS_PROFILE_EDITED] === "false") {
    return {
      redirect: {
        destination: "/register/form",
        permanent: false,
      },
    };
  }

  if (!cookies[USER_TOKEN]) {
    return {
      redirect: {
        destination: `/login?oldUrl=${ctx.resolvedUrl}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "profile", "user-search", "home"])),
    },
  };
};

export default MyProfile;
