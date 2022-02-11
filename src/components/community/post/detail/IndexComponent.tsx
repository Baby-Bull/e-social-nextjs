import React from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { comments } from "src/components/community/mockData";
import ButtonComponent from "src/components/common/ButtonComponent";
import IntroCommunityComponent from "src/components/community/blocks/IntroCommunityComponent";
import PostDetailComponent from "src/components/community/post/detail/blocks/PostDetailComponent";
import ListCommentComponent from "src/components/community/post/detail/blocks/ListCommentComponent";
import LayoutComponent from "src/components/community/LayoutComponent";

const DetailPostComponent = () => {
  const { t } = useTranslation();

  return (
    <LayoutComponent>
      <Box
        sx={{
          mt: "40px",
          display: "flex",
          flexDirection: ["column-reverse", "row"],
        }}
      >
        <Box
          sx={{
            width: { md: "20%" },
          }}
        >
          <IntroCommunityComponent />
        </Box>

        <Box
          sx={{
            mr: { md: "13px" },
            ml: { md: "25px" },
            mb: ["80px", "20px"],
            width: { md: "80%" },
          }}
        >
          <PostDetailComponent />

          <Box
            sx={{
              mt: "40px",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: [14, 20],
                fontWeight: 700,
              }}
            >
              {t("community:comment")}（{comments.length}）
            </Typography>

            <ListCommentComponent />

            <Typography
              component="span"
              sx={{
                fontSize: [14, 20],
                fontWeight: 700,
              }}
            >
              {t("community:write-comment")}
            </Typography>

            <TextareaAutosize
              aria-label="write-comment"
              placeholder={t("community:place-holder")}
              style={{
                marginTop: "8px",
                paddingTop: "8px",
                paddingLeft: "8px",
                width: "100%",
                height: "120px",
                resize: "none",
                border: `2px solid ${theme.whiteGray}`,
                borderRadius: "12px",
              }}
            />

            <Box sx={{ textAlign: "right" }}>
              <ButtonComponent
                props={{
                  square: true,
                  bgColor: theme.blue,
                }}
                sx={{
                  mt: "20px",
                  width: "96px",
                }}
              >
                {t("community:button.detail.submit-post")}
              </ButtonComponent>
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutComponent>
  );
};
export default DetailPostComponent;
