import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PersonalChatComponent from "src/components/chat/PersonalChatComponent";

const ChatPersonalPage: NextPage = () => <PersonalChatComponent hasData />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "chat"])),
  },
});

export default ChatPersonalPage;
