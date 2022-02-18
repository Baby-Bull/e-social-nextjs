import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";

import FooterComponent from "src/components/layouts/FooterComponent";
import HeaderComponent from "src/components/layouts/HeaderComponent";
import theme from "src/theme";

interface IContentComponentProps {
  children: any;
  showFooter?: boolean;
}
const ContentComponent: React.SFC<IContentComponentProps> = ({ children, showFooter = true }) => (
  <Box
    sx={{
      backgroundColor: "#F4FDFF",
      color: theme.navy,
    }}
  >
    <Head>
      <title>Good Tech Hub</title>
    </Head>
    <HeaderComponent />
    {children}
    {showFooter && <FooterComponent />}
  </Box>
);
export default ContentComponent;
