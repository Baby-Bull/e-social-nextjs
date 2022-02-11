import React from "react";
import { Box } from "@mui/material";

import theme from "src/theme";
import CommentComponent from "src/components/community/detail_post/blocks/CommentComponent";
import { PaginationCustom } from "src/components/community/blocks/ChildTabComponent";

import { comments } from "../../mockData";

const ListCommentComponent = () => (
  <Box
    sx={{
      border: `2px solid ${theme.whiteGray}`,
      borderRadius: "12px",
      pt: "40px",
      px: "40px",
      mb: "20px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: "38px",
      }}
    >
      <PaginationCustom count={4} />
    </Box>
    <CommentComponent data={comments} />
  </Box>
);
export default ListCommentComponent;
