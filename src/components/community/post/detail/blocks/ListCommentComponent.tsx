import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { comments } from "src/components/community/mockData";
import CommentComponent, { IItem } from "src/components/community/post/detail/blocks/CommentComponent";
import { PaginationCustom } from "src/components/community/blocks/ChildTabComponent";
import ButtonComponent from "src/components/common/ButtonComponent";

const ListCommentComponent = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        border: `2px solid ${theme.whiteGray}`,
        backgroundColor: "white",
        borderRadius: "12px",
        mt: "8px",
        mb: "20px",
        pt: ["20px", "40px"],
        px: ["15px", "40px"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            px: "12px",
            borderLeft: `1px solid ${theme.lightGray_1}`,
            borderRight: `1px solid ${theme.lightGray_1}`,
          }}
        >
          <ButtonComponent
            variant="text"
            sx={{
              color: theme.blue,
              width: "46px",
              height: "24px",
              fontSize: 14,
              textTransform: "capitalize",
              mr: "4px",
            }}
          >
            {t("community:detail.comment.posting-order")}
          </ButtonComponent>

          <ButtonComponent
            variant="text"
            sx={{
              color: "black",
              width: "46px",
              height: "24px",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {t("community:detail.comment.latest-order")}
          </ButtonComponent>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "38px",
        }}
      >
        <PaginationCustom count={4} />
      </Box>
      <Box
        sx={{
          color: theme.navy,
        }}
      >
        {comments?.map((item: IItem, index: number) => (
          <CommentComponent item={item} key={index.toString()} />
        ))}
      </Box>
    </Box>
  );
};
export default ListCommentComponent;
