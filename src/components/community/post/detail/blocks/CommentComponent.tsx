import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import moment from "moment";

import "moment/locale/ja";
import theme from "src/theme";
import ButtonDropDownComponent from "src/components/community/post/detail/blocks/ButtonDropDownComponent";
import { ShowTextArea } from "src/components/common/ShowTextAreaComponent";

interface ICommentComponentProps {
  item: any;
  handleCallbackRemove?: any;
  index?: string;
  dataCommunityDetail?: any;
}

const CommentComponent: React.SFC<ICommentComponentProps> = ({
  item,
  handleCallbackRemove,
  index,
  dataCommunityDetail,
}) => {
  const listRoleAdmin = ["admin", "owner"];
  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.lightGray}`,
        pt: ["8px", "20px"],
        pb: "26px",
        position: "relative",
      }}
    >
      {(item?.can_delete || item?.can_edit || listRoleAdmin.includes(dataCommunityDetail?.community_role)) && (
        <ButtonDropDownComponent
          top={["4px", "10px"]}
          right="0"
          handleCallbackRemove={handleCallbackRemove}
          index={index}
          comment={item}
        />
      )}
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
          src={item?.user?.profile_image}
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
            {moment(item?.created_at).utc().format("LLL")}
          </Typography>
          <Typography
            sx={{
              fontSize: [14, 20],
              fontWeight: 700,
              mr: ["16px", 0],
            }}
          >
            {item?.user?.username}
          </Typography>
        </Box>
      </Box>
      <ShowTextArea value={item.content} />
    </Box>
  );
};
export default CommentComponent;
