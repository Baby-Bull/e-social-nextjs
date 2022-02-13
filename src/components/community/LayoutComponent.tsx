import React from "react";
import { Box } from "@mui/material";

import ContentComponent from "src/components/layouts/ContentComponent";

interface ILayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: React.SFC<ILayoutComponentProps> = ({ children }) => (
  <ContentComponent>
    <Box
      sx={{
        mt: ["20px", "80px"],
        mb: ["80px", "141px"],
        mx: ["20px", "8.4%"],
      }}
    >
      {children}
    </Box>
  </ContentComponent>
);
export default LayoutComponent;
