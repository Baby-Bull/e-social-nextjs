/* eslint-disable import/prefer-default-export */

import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

import theme from "src/theme";

export const TabsCustom = styled(Tabs)(() => ({
  padding: 0,
  color: "black",
  fontSize: "20px",
  fontWeight: 500,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  "& .MuiTab-root": {
    fontSize: "20px",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  "& .Mui-selected": {
    color: theme.blue,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.blue,
  },
}));
