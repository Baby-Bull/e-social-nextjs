import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SearchCommunityComponent from "src/components/searchCommunity/SearchCommunityComponent";

const SearchCommunityPage: NextPage = () => <SearchCommunityComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community-search", "home"])),
  },
});

export default SearchCommunityPage;
