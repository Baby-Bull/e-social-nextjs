import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const PersonalChatComponent = dynamic(() => import("src/components/chat/Personal/PersonalChatComponent"), {
  ssr: false,
});

const ChatPersonalPage: NextPage = () => <PersonalChatComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "chat"])),
  },
});

export default ChatPersonalPage;
