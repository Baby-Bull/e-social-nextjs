import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";

import SearchUserComponent from "src/components/searchUser/SearchUserComponent";
import { IS_PROFILE_EDITED, USER_TOKEN } from "src/helpers/storage";

const SearchUserPage: NextPage = () => <SearchUserComponent />;

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
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "user-search", "home"])),
    },
  };
};

export default SearchUserPage;
