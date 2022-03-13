import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const FormComponent = dynamic(() => import("src/components/authen/register/form/FormComponent"), { ssr: false });

const Form: NextPage = () => <FormComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "register"])),
  },
});

export default Form;
