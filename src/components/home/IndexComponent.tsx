import { Box, Link, Typography } from "@mui/material";
import React from "react";

import ContentComponent from "src/components/layouts/ContentComponent";

const HomeIndexComponents = () => (
  <ContentComponent>
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb:62.3
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        MUI v5 + Next.js with TypeScript example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Box>
  </ContentComponent>
);
export default HomeIndexComponents;
