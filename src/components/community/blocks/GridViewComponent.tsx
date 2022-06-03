import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import moment from "moment";

import "moment/locale/ja";
import { JOBS } from "src/components/constants/constants";
import theme from "src/theme";

export interface IData {
  profile_image: string;
  username: string;
  role: string;
  last_login_at: string;
  id: string;
  job: string;
}

interface IGridViewComponentProps {
  title?: string;
  data: IData[];
}

const GridViewComponent: React.SFC<IGridViewComponentProps> = ({ title, data }) => {
  const IS_OWNER = "owner";
  const IS_ADMIN = "admin";
  return (
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
                sx={{
                  width: "149px",
                  height: "149px",
                }}
                src={item.profile_image}
              />

              <Box sx={{ display: "flex", alignItems: "center", pt: "10px" }}>
                {item.role === IS_OWNER || item.role === IS_ADMIN ? (
                  <Box
                    sx={{
                      color: "#fff",
                      backgroundColor: item.role === IS_OWNER ? "#1BD0B0" : theme.blue,
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "16.34px",
                      padding: "2px 9.5px",
                      borderRadius: "11px",
                      mr: "4px",
                    }}
                  >
                    {item.role === IS_OWNER ? "代表者" : "管理者"}
                  </Box>
                ) : null}
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 700,
                    color: theme.navy,
                  }}
                >
                  {item.username}
                </Typography>
              </Box>
              <Typography
                component="span"
                pt="8px"
                sx={{
                  fontSize: 12,
                  color: theme.gray,
                }}
              >
                {JOBS[item.job]?.label}
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
                {moment(item.last_login_at).utc().fromNow()}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </React.Fragment>
  );
};
export default GridViewComponent;
