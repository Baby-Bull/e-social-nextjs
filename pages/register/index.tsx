import * as React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RegisterComponent from 'src/components/authen/register/RegisterComponent';

const Register: NextPage = () => (
  <RegisterComponent />
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'register'])
  }
})

export default Register;
