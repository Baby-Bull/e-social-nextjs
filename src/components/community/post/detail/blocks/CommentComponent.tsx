import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import "moment/locale/ja";
import theme from "src/theme";
import ButtonDropDownComponent from "src/components/community/post/detail/blocks/ButtonDropDownComponent";
import { ShowTextArea } from "src/components/common/ShowTextAreaComponent";
import { IStoreState } from "src/constants/interface";

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
  // const isOwnerId = dataCommunityDetail?.owner?.id;
  const auth = useSelector((state: IStoreState) => state.user);
  const router = useRouter();
  const redirectProfile = () => {
    if (item?.user?.id === auth?.id) {
      router.push("/my-profile");
    } else {
      router.push(`/profile/${item?.user?.id}`);
    }
  };
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
            cursor: "pointer",
          }}
          onClick={redirectProfile}
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
            {moment(item?.created_at).format("LLL")}
          </Typography>
          <Typography
            sx={{
              fontSize: [14, 20],
              fontWeight: 700,
              mr: ["16px", 0],
              cursor: "pointer",
            }}
            onClick={redirectProfile}
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
