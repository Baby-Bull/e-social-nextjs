import React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CharacterComponent from "src/components/character/CharacterComponent";

const Character: NextPage = () => <CharacterComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "character"])),
  },
});

export default Character;
