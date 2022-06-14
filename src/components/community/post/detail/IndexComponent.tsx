import React, { useEffect, useState } from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import theme from "src/theme";
import { comments } from "src/components/community/mockData";
import ButtonComponent from "src/components/common/ButtonComponent";
import IntroCommunityComponent from "src/components/community/blocks/IntroCommunityComponent";
import PostDetailComponent from "src/components/community/post/detail/blocks/PostDetailComponent";
import ListCommentComponent from "src/components/community/post/detail/blocks/ListCommentComponent";
import LayoutComponent from "src/components/community/LayoutComponent";
import { getCommunity, detailCommunityPost } from "src/services/community";

const DetailPostComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  // const [checkMember, setCheckMember] = useState(false);
  const [dataCommunityDetail, setDataCommunityDetail] = useState({
    name: null,
    profile_image: null,
    description: null,
    owner: {},
    admins: [],
    is_public: null,
    post_permission: null,
    community_role: null,
    member_count: null,
    login_count: null,
    created_at: null,
  });

  const [communityPost, setCommunityPost] = useState({});

  const fetchCommunity = async () => {
    const communityId = router.query;
    const data = await getCommunity(communityId?.id);
    if (data?.error_code === "401") {
      toast.warning(t("common:not_have_access"));
      setTimeout(() => router.push("/"), 1000);
    } else {
      setDataCommunityDetail(data);
      // setCheckMember(true);
      return data;
    }
  };

  const fetchCommunityPost = async () => {
    const community = router.query;
    const res = await detailCommunityPost(community?.id, community?.detailId);
    setCommunityPost(res);
  };

  useEffect(() => {
    fetchCommunity();
    fetchCommunityPost();
  }, []);
  return (
    <LayoutComponent>
      <Box
        sx={{
          mt: "40px",
          pt: "80px",
          display: "flex",
          flexDirection: ["column-reverse", "row"],
        }}
      >
        <Box
          sx={{
            width: { md: "20%" },
          }}
        >
          <IntroCommunityComponent data={dataCommunityDetail} />
        </Box>

        <Box
          sx={{
            mr: { md: "13px" },
            ml: { md: "25px" },
            mb: ["80px", "20px"],
            width: { md: "80%" },
          }}
        >
          <PostDetailComponent data={communityPost} />

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
