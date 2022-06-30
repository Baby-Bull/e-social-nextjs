import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "nookies";
import dynamic from "next/dynamic";

import { USER_TOKEN } from "src/helpers/storage";

const CommunityChatComponent = dynamic(() => import("src/components/chat/Community/CommunityChatComponent"), {
  ssr: false,
});

const ChatCommunityPage: NextPage = () => <CommunityChatComponent />;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const cookies = parseCookies(ctx);
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
      ...(await serverSideTranslations(locale, ["common", "chat"])),
    },
  };
};

export default ChatCommunityPage;
