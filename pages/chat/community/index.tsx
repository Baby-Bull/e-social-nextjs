import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunityChatComponent from "src/components/chat/Community/CommunityChatComponent";

const ChatCommunityPage: NextPage = () => <CommunityChatComponent hasData />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "chat"])),
  },
});

export default ChatCommunityPage;
