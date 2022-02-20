import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SearchUserComponent from "src/components/searchUser/SearchUserComponent";

const SearchUserPage: NextPage = () => <SearchUserComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "user-search", "home"])),
  },
});

export default SearchUserPage;
