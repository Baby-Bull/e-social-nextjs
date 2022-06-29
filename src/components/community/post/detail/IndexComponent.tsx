import React, { useEffect, useState } from "react";
import { Box, Typography, TextareaAutosize, Backdrop, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
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

export const TextareaAutosizeCustom = styled(TextareaAutosize)({
  "&::-webkit-input-placeholder": {
    color: theme.gray,
  },
  "@media (min-width: 768px)": {
    fontSize: 16,
  },
  "&:focus-visible": {
    border: `2px solid ${theme.blue}`,
    outline: "none",
  },
  marginTop: "8px",
  paddingTop: "8px",
  paddingLeft: "8px",
  width: "100%",
  minHeight: "120px",
  borderRadius: "12px",
});

const DetailPostComponent = () => {
  const { t } = useTranslation();
  const LIMIT = 10;
  const router = useRouter();
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
  const [content, setContent] = React.useState("");
  const [checkLoading, setCheckLoading] = useState(false);
  const [checkLoadingComment, setCheckLoadingComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeCommunityPostRequest = (key: string, valueInput: any) => {
    setContent(valueInput);
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
    if (handleValidateFormCommunityPost() && communityPostRequest?.content?.length > 0) {
      setIsLoading(true);
      const communityId = router.query;
      const res = await createPostComment(communityId?.id, communityId?.detailId, communityPostRequest);
      if (res) {
        setContent("");
        comments.unshift(res);
        setTotalComment(totalComment + 1);
      }
      setIsLoading(false);
      return res;
    }
  };

  const fetchComments = async (cursor: string = "", statusOrder: string = "oldest") => {
    const community = router.query;
    const data = await getListComment(community?.id, community?.detailId, LIMIT, cursor, statusOrder);
    setCheckLoadingComment(true);
    if (!data?.error_code) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setComments([...comments, ...data?.items]);
      setTotalComment(data?.items_count ?? 0);
      setCursor(data?.cursor);
    }
    return data;
  };

  const fetchCommunity = async () => {
    const communityId = router.query;
    const data = await getCommunity(communityId?.id);
    if (!data?.error_code) {
      setDataCommunityDetail(data);
      return data;
    }
  };

  const fetchCommunityPost = async () => {
    const community = router.query;
    const res = await detailCommunityPost(community?.id, community?.detailId);
    setCheckLoading(true);
    if (!res?.error_code) {
      setCommunityPost(res);
      fetchComments();
    }
  };

  const handleCallBackPaginationIndex = (pageCallBack, perPageCallBack) => {
    setPage(pageCallBack);
    if (perPage <= pageCallBack) {
      setPerPage(perPageCallBack + 1);
      fetchComments(valueCursor ?? "");
    }
  };
  const handleCallbackRemove = async (indexComment, commentId) => {
    setIsLoading(true);
    const community = router.query;
    const res = await deleteCommunityPostComment(community?.id, community?.detailId, commentId);
    if (res) {
      setComments(comments.filter((_, index) => index !== indexComment));
      setTotalComment(totalComment - 1);
    }
    setIsLoading(false);
    return res;
  };

  const handleCallbackChangeStatusOrder = async (status, totalCommentFb, pageFb, perPageFb, cursorFb) => {
    setCheckLoadingComment(false);
    setIsLoading(true);
    setTotalComment(totalCommentFb);
    setPage(pageFb);
    setPerPage(perPageFb);
    setCursor(cursorFb);
    const community = router.query;
    const data = await getListComment(community?.id, community?.detailId, LIMIT, "", status);
    if (!data?.error_code) {
      setComments(data?.items);
      setTotalComment(data?.items_count ?? 0);
      setCursor(data?.cursor);
    }
    setIsLoading(false);
    setCheckLoadingComment(true);
    return data;
  };

  useEffect(() => {
    fetchCommunity();
    fetchCommunityPost();
  }, []);
  return (
    <LayoutComponent>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box>
        {checkLoading && (
          <Box
            sx={{
              mt: "40px",
              pt: ["8px", "80px"],
              display: "flex",
              flexDirection: ["column-reverse", "row"],
            }}
          >
            <Box
              sx={{
                width: { md: "20%" },
              }}
            >
              <IntroCommunityComponent data={dataCommunityDetail} createPost />
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
                  checkLoadingComment={checkLoadingComment}
                  handleCallbackChangeStatusOrder={handleCallbackChangeStatusOrder}
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
                <TextareaAutosizeCustom
                  placeholder={t("community:place-holder")}
                  onChange={(e) => onChangeCommunityPostRequest("content", e.target.value)}
                  value={content}
                  sx={{
                    border: errorValidates?.content ? `2px solid ${theme.orange}` : `2px solid ${theme.whiteGray}`,
                  }}
                  onKeyPress={(e) => {
                    if (e.shiftKey && (e.keyCode || e.which) === 13) {
                      return true;
                    }
                    if ((e.keyCode || e.which) === 13) {
                      e.preventDefault();
                      handleSaveForm();
                      return true;
                    }
                  }}
                />
                {errorValidates?.content && <BoxTextValidate>{errorValidates?.content}</BoxTextValidate>}
                <Box sx={{ textAlign: "right", cursor: "pointer" }}>
                  <ButtonComponent
                    disabled={!content?.length}
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
        )}
      </Box>
    </LayoutComponent>
  );
};
export default DetailPostComponent;
