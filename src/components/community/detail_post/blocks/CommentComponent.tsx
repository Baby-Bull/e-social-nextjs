import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

import theme from "src/theme";

interface ICommentComponentProps {
  data: any;
}

const CommentComponent: React.SFC<ICommentComponentProps> = ({ data }) => (
  <Box
    sx={{
      color: theme.navy,
    }}
  >
    {data?.map((item: any, index: number) => (
      <Box
        key={index.toString()}
        sx={{
          borderBottom: `1px solid ${theme.lightGray}`,
          pt: "20px",
          pb: "26px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            pb: "20px",
          }}
        >
          <Avatar
            sx={{
              mr: "24px",
              width: "54px",
              height: "54px",
            }}
            src={item.avatar}
          />

          <Box>
            <Typography
              sx={{
                color: theme.gray,
                fontSize: 14,
              }}
            >
              {item.last_login}
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Box>

        {/* {<div dangerouslySetInnerHTML={{ __html: item.content }} />} */}
        {item.content}
      </Box>
    ))}
  </Box>
);
export default CommentComponent;
