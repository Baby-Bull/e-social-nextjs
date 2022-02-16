import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

import theme from "src/theme";

export interface IData {
  title: string;
  name: string;
  avatar: string;
  last_login: string;
  count_message: string;
}
interface IListViewComponentProps {
  data: IData;
  props?: {
    pl?: string[];
    pr?: string[];
  };
}

const ListViewComponent: React.SFC<IListViewComponentProps> = ({ data, props }) => (
  <Box
    sx={{
      py: ["10px", "20px"],
      pl: props?.pl,
      pr: props?.pr,
      borderTop: `1px solid ${theme.lightGray}`,
    }}
  >
    <Typography
      component="span"
      sx={{
        display: { sm: "none" },
        color: theme.navy,
        fontSize: [12, 16],
        fontWeight: 700,
        "&:hover": {
          cursor: "pointer",
          color: theme.blue,
        },
      }}
    >
      {data.title}
    </Typography>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: ["5px", "0"],
      }}
    >
      <Avatar
        variant="square"
        sx={{
          width: ["24px", "64px"],
          height: "100%",
        }}
        src={data.avatar}
      />

      {/* Grid right Info */}
      <Box
        sx={{
          ml: ["8px", "18px"],
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          component="span"
          sx={{
            display: ["none", "inherit"],
            color: theme.navy,
            fontSize: [12, 16],
            fontWeight: 700,
            "&:hover": {
              cursor: "pointer",
              color: theme.blue,
              textDecoration: "underline",
            },
          }}
        >
          {data.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography component="span" fontSize={12}>
            {data.name}
          </Typography>
          <Typography
            component="span"
            sx={{
              mx: ["12px", "30px"],
              fontSize: 12,
              color: theme.gray,
            }}
          >
            {data.last_login}
          </Typography>

          <img src="/assets/images/svg/message.svg" alt="message" />

          <Typography
            component="span"
            sx={{
              ml: "4px",
              fontSize: 12,
              color: theme.gray,
            }}
          >
            {data.count_message}
          </Typography>
        </Box>
      </Box>
      {/* End Grid right Info */}
    </Box>
  </Box>
);
export default ListViewComponent;
