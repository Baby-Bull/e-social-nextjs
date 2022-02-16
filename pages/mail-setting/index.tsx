import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MailSettingComponent from "src/components/mail-setting/MailSettingComponent";

const MailSetting: NextPage = () => <MailSettingComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "mail-setting"])),
  },
});

export default MailSetting;
