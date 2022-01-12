import React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";

import styles from 'src/components/layouts/layout.module.scss';
import HeaderComponent from "src/components/layouts/HeaderComponent";

interface ContentComponentProps {
  children: any;
}
const ContentComponent: React.SFC<ContentComponentProps> = ({ children }) => (
  <Container maxWidth="lg" className={styles.containerContent}>
    <Head>
      <title>Good Tech Hub</title>
    </Head>
    <HeaderComponent />
    {children}
  </Container>
);
export default ContentComponent;
