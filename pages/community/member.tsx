import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunityMemberComponent from "src/components/community/MemberComponent";

const CommunityMember: NextPage = () => <CommunityMemberComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "community"])),
  },
});

export default CommunityMember;
