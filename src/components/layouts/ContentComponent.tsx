import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";

import FooterComponent from "src/components/layouts/FooterComponent";
import HeaderComponent from "src/components/layouts/HeaderComponent";

interface IContentComponentProps {
  children: any;
}
const ContentComponent: React.SFC<IContentComponentProps> = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "#F4FDFF",
    }}
  >
    <Head>
      <title>Good Tech Hub</title>
    </Head>
    <HeaderComponent />
    {children}
    <FooterComponent />
  </Box>
);
export default ContentComponent;
