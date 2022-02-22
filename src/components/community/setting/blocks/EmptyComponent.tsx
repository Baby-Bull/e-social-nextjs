import React from "react";
import { Box, Typography } from "@mui/material";

import theme from "src/theme";

interface IEmptyComponentProps {
  text: string;
}

const EmptyComponent: React.SFC<IEmptyComponentProps> = ({ text }) => (
  <Box
    sx={{
      mx: ["20px", 0],
      borderTop: { sm: `2px solid ${theme.lightGray}` },
      height: { sm: "490px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: ["12px", "0px 0px 12px 12px"],
    }}
  >
    <Typography
      sx={{
        my: "40px",
        fontSize: [14, 16],
        fontWeight: 400,
      }}
    >
      {text}
    </Typography>
  </Box>
);
export default EmptyComponent;
