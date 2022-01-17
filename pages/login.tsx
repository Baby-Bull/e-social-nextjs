import * as React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginComponents from "src/components/auth/Login";

const Login: NextPage = () => (
    <LoginComponents />
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'login']),
    },
})


export default Login;
