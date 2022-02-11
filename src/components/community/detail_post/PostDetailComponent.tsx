import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

import theme from "src/theme";

import { postDetail } from "../mockData";

const PostDetailComponent = () => (
  <Box
    sx={{
      p: "40px",
      border: `2px solid ${theme.whiteGray}`,
      borderRadius: "12px",
      color: theme.navy,
    }}
  >
    <Typography
      component="span"
      sx={{
        fontSize: 32,
        fontWeight: 700,
      }}
    >
      {postDetail.title}
    </Typography>

    <Box
      sx={{
        my: "20px",
        display: "flex",
      }}
    >
      <Avatar
        sx={{
          mr: "24px",
          width: "54px",
          height: "54px",
        }}
        src={postDetail.avatar}
      />

      <Box>
        <Typography
          component="span"
          sx={{
            color: theme.gray,
            fontSize: 14,
          }}
        >
          {postDetail.last_login}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {postDetail.name}
        </Typography>
      </Box>
    </Box>

    <Typography component="span">{postDetail.content}</Typography>
  </Box>
);
export default PostDetailComponent;
