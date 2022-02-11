import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

import theme from "src/theme";

export interface IData {
  avatar: string;
  name: string;
  job: string;
  last_login: string;
}

interface IGridViewComponentProps {
  title?: string;
  data: IData[];
}

const GridViewComponent: React.SFC<IGridViewComponentProps> = ({ title, data }) => (
  <React.Fragment>
    <Typography
      sx={{
        display: !title && "none",
        mt: "10px",
        color: theme.navy,
        fontWeight: 700,
        textAlign: "center",
      }}
    >
      {title}
    </Typography>

    <Box
      sx={{
        mt: ["21px", "10px"],
        mx: ["24px"],
        mb: "40px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {data?.map((item, index) => (
        <React.Fragment key={index.toString()}>
          <Box
            sx={{
              mt: [0, "30px"],
              mb: ["20px", 0],
              flex: ["0 0 30%", "0 0 18%"],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: "149px",
                height: "149px",
              }}
              src={item.avatar}
            />

            <Typography
              component="span"
              pt="10px"
              sx={{
                fontWeight: 700,
                color: theme.navy,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              component="span"
              pt="8px"
              sx={{
                fontSize: 12,
                color: theme.gray,
              }}
            >
              {item.job}
            </Typography>
            <Typography
              component="span"
              pt="8px"
              sx={{
                fontSize: 10,
                fontWeight: 500,
                color: theme.gray,
              }}
            >
              {item.last_login}
            </Typography>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  </React.Fragment>
);
export default GridViewComponent;
