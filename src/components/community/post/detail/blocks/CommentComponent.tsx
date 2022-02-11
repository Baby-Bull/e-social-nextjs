import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import DOMPurify from "isomorphic-dompurify";

import theme from "src/theme";
import ButtonDropDownComponent from "src/components/community/post/detail/blocks/ButtonDropDownComponent";
import { isContributorOrCommenter } from "src/components/community/mockData";

export interface IItem {
  avatar: string;
  name: string;
  content: string;
  last_login: string;
}
interface ICommentComponentProps {
  item: IItem;
}

const CommentComponent: React.SFC<ICommentComponentProps> = ({ item }) => (
  <Box
    sx={{
      borderTop: `1px solid ${theme.lightGray}`,
      pt: ["8px", "20px"],
      pb: "26px",
      position: "relative",
    }}
  >
    {isContributorOrCommenter && <ButtonDropDownComponent top={["4px", "10px"]} right="0" />}
    <Box
      sx={{
        display: "flex",
        pb: "20px",
      }}
    >
      <Avatar
        sx={{
          mr: ["8px", "24px"],
          width: ["32px", "54px"],
          height: ["32px", "54px"],
        }}
        src={item.avatar}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: ["row-reverse", "column"],
          alignItems: ["center", "inherit"],
        }}
      >
        <Typography
          sx={{
            color: theme.gray,
            fontSize: [10, 14],
          }}
        >
          {item.last_login}
        </Typography>
        <Typography
          sx={{
            fontSize: [14, 20],
            fontWeight: 700,
            mr: ["16px", 0],
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Box>

    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }} />
  </Box>
);
export default CommentComponent;
