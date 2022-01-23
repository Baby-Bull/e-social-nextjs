import { Box } from "@mui/material";
import React from "react";

import styles from "src/components/profile/no_data.module.scss";

interface BoxNodataProps {
  content: string;
}

const BoxNoDataComponent: React.SFC<BoxNodataProps> = ({ content }) => (
  <Box>
    <Box
      sx={{
        width: "100%",
        height: "240px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        fontWeight: 400,
      }}
      className={styles.boxNoData}
    >
      {content}
    </Box>
  </Box>
);
export default BoxNoDataComponent;
