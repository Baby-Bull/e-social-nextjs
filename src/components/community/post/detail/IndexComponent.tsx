import React, { useEffect, useState } from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import IntroCommunityComponent from "src/components/community/blocks/IntroCommunityComponent";
import PostDetailComponent from "src/components/community/post/detail/blocks/PostDetailComponent";
import ListCommentComponent from "src/components/community/post/detail/blocks/ListCommentComponent";
import LayoutComponent from "src/components/community/LayoutComponent";
import {
  getCommunity,
  detailCommunityPost,
  createPostComment,
  getListComment,
  deleteCommunityPostComment,
} from "src/services/community";
import { VALIDATE_FORM_COMMUNITY_POST } from "src/messages/validate";

const BoxTextValidate = styled(Box)({
  color: "#FF9458",
  lineHeight: "20px",
  fontWeight: "400",
  fontSize: "14px",
});

const DetailPostComponent = () => {
  const { t } = useTranslation();
  const LIMIT = 10;
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
  const [communityPostRequest, setCommunityPostRequest] = useState({
    content: "",
  });
  const [errorValidates, setErrorValidates] = useState({
    content: null,
  });

  const errorMessages = {
    content: null,
  };
  const [communityPost, setCommunityPost] = useState({});
  const [comments, setComments] = useState([]);
  const [totalComment, setTotalComment] = useState(0);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(2);
  const [valueCursor, setCursor] = React.useState("");

  const onChangeCommunityPostRequest = (key: string, valueInput: any) => {
    setCommunityPostRequest({
      ...communityPostRequest,
      [key]: typeof valueInput === "string" ? valueInput.trim() : valueInput,
    });
  };

  const handleValidateFormCommunityPost = () => {
    let isValidForm = true;
    if (communityPostRequest?.content?.length > 1000) {
      isValidForm = false;
      errorMessages.content = VALIDATE_FORM_COMMUNITY_POST.content_comment.max_length;
    }
    setErrorValidates(errorMessages);
    return isValidForm;
  };

  const handleSaveForm = async () => {
    if (handleValidateFormCommunityPost()) {
      const communityId = router.query;
      const res = await createPostComment(communityId?.id, communityId?.detailId, communityPostRequest);
      if (res) {
        setCommunityPostRequest({
          content: "",
        });
      }
      return res;
    }
  };

  const fetchComments = async (cursor: string = "") => {
    const community = router.query;
    const data = await getListComment(community?.id, community?.detailId, LIMIT, cursor);
    if (data) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setComments([...comments, ...data?.items]);
      setTotalComment(data?.items_count);
      setCursor(data?.cursor);
    }
    return data;
  };

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

  const handleCallBackPaginationIndex = (pageCallBack, perPageCallBack) => {
    setPage(pageCallBack);
    if (perPage <= pageCallBack) {
      setPerPage(perPageCallBack + 1);
      fetchComments(valueCursor ?? "");
    }
  };
  const handleCallbackRemove = async (indexComment, commentId) => {
    const community = router.query;
    const res = await deleteCommunityPostComment(community?.id, community?.detailId, commentId);
    if (res) {
      setComments(comments.filter((_, index) => index !== indexComment));
    }
    return res;
  };

  useEffect(() => {
    fetchCommunity();
    fetchComments();
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
              {t("community:comment")}（{totalComment ?? 0}）
            </Typography>

            <ListCommentComponent
              comments={comments.slice((page - 1) * LIMIT, page * LIMIT)}
              page={page}
              perPage={perPage}
              handleCallBackPaginationIndex={handleCallBackPaginationIndex}
              handleCallbackRemove={handleCallbackRemove}
              totalComment={totalComment ?? 0}
            />

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
                border: errorValidates?.content ? `2px solid ${theme.orange}` : `2px solid ${theme.whiteGray}`,
                borderRadius: "12px",
              }}
              onChange={(e) => onChangeCommunityPostRequest("content", e.target.value)}
              value={communityPostRequest.content}
            />
            {errorValidates?.content && <BoxTextValidate>{errorValidates?.content}</BoxTextValidate>}
            <Box sx={{ textAlign: "right" }}>
              <ButtonComponent
                disabled={!communityPostRequest?.content?.length}
                props={{
                  square: true,
                  bgColor: theme.blue,
                }}
                sx={{
                  mt: "20px",
                  width: "96px",
                }}
                onClick={handleSaveForm}
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
