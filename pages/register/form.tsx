import * as React from "react";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";

import { IS_PROFILE_EDITED, USER_TOKEN } from "src/helpers/storage";

const FormComponent = dynamic(() => import("src/components/authen/register/form/FormComponent"), { ssr: false });

const Form: NextPage = () => <FormComponent />;

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const cookies = parseCookies(ctx);
  if (cookies[IS_PROFILE_EDITED] === "true") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

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
      ...(await serverSideTranslations(locale, ["common", "register"])),
    },
  };
};

export default Form;
