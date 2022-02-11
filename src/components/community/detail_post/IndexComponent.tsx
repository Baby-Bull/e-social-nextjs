import React from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import IntroCommunityComponent from "src/components/community/blocks/IntroCommunityComponent";
import PostDetailComponent from "src/components/community/detail_post/PostDetailComponent";
import ListCommentComponent from "src/components/community/detail_post/blocks/ListCommentComponent";

import { comments } from "../mockData";

const DetailIndexComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentComponent>
      <Box
        sx={{
          mt: ["20px", "80px"],
          mb: ["80px", "141px"],
          mx: ["20px", "8.4%"],
        }}
      >
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
              mb: ["40px", 0],
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
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {t("community:comment")}（{comments.length}）
              </Typography>

              <ListCommentComponent />

              <Typography
                component="span"
                sx={{
                  mb: "10px",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {t("community:write-comment")}
              </Typography>

              <TextareaAutosize
                maxRows={10}
                minRows={6}
                aria-label="maximum height"
                placeholder={t("community:place-holder")}
                style={{ width: "98.9%" }}
              />

              <Box sx={{ textAlign: "right" }}>
                <ButtonComponent
                  props={{
                    square: true,
                    bgColor: theme.blue,
                  }}
                  sx={{
                    mt: "20px",
                    mr: "10px",
                    width: "96px",
                  }}
                >
                  {t("community:button.detail.submit-post")}
                </ButtonComponent>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ContentComponent>
  );
};
export default DetailIndexComponent;
