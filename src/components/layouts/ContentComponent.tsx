import React from "react"
import {Box} from "@mui/material";
import Head from "next/head"

import FooterComponent from "src/components/layouts/FooterComponent"
import HeaderComponent from "src/components/layouts/HeaderComponent"

interface ContentComponentProps {
    children: any;
}
const ContentComponent: React.SFC<ContentComponentProps> = ({ children }) => (
  <Box sx={{
    backgroundColor: "#F4FDFF"
  }}>
        <Head>
            <title>Good Tech Hub 2222</title>
        </Head>
        <HeaderComponent />
        {children}
        <FooterComponent />
  </Box>
);
export default ContentComponent;
