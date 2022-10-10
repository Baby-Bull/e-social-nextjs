import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

import theme from "src/theme";

const HeaderComponent = dynamic(() => import("src/components/layouts/HeaderComponent"), {
  ssr: true,
}) as any;

const FooterComponent = dynamic(() => import("src/components/layouts/FooterComponent"), {
  ssr: true,
}) as any;

interface IContentComponentProps {
  children: any;
  showFooter?: boolean;
  showHeader?: boolean;
  authPage?: boolean;
}
const ContentComponent: React.SFC<IContentComponentProps> = ({
  children,
  showFooter = true,
  showHeader = true,
  authPage = false,
}) => (
  <Box
    sx={{
      backgroundColor: "#F4FDFF",
      color: theme.navy,
    }}
  >
    <Head>
      <title>goodhub</title>
    </Head>
    {showHeader && <HeaderComponent authPage={authPage} />}
    {children}
    {showFooter && <FooterComponent authPage={authPage} />}
  </Box>
);
export default ContentComponent;
