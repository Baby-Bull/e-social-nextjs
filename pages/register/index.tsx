import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const RegisterComponent = dynamic(() => import("src/components/authen/register/RegisterComponent"), { ssr: false });

const Register: NextPage = () => <RegisterComponent />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "register", "login"])),
  },
});

export default Register;
