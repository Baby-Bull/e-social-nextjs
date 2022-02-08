import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProfileSkillEditComponent from "src/components/profile/form/ProfileSkillEditComponent";

const Form: NextPage = () => <ProfileSkillEditComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "profile"])),
  },
});

export default Form;
