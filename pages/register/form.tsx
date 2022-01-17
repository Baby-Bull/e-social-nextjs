import * as React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import FormComponent from 'src/components/authen/register/form/FormComponent';

const Form: NextPage = () => (
  <FormComponent />
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'register'])
  }
})

export default Form;
