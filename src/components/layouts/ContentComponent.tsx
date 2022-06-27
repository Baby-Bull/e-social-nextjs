import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";

import FooterComponent from "src/components/layouts/FooterComponent";
import HeaderComponent from "src/components/layouts/HeaderComponent";
import theme from "src/theme";

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
      <title>Good Tech Hub</title>
    </Head>
    {showHeader && <HeaderComponent authPage={authPage} />}
    {children}
    {showFooter && <FooterComponent authPage={authPage} />}
  </Box>
);
export default ContentComponent;
