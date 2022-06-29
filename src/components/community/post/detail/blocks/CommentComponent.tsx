import React, { useState } from "react";
import { Avatar, Backdrop, Box, CircularProgress, TextareaAutosize, Typography } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";

import "moment/locale/ja";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import ButtonDropDownComponent from "src/components/community/post/detail/blocks/ButtonDropDownComponent";
import { ShowTextArea } from "src/components/common/ShowTextAreaComponent";
import { IStoreState } from "src/constants/interface";
import ButtonComponent from "src/components/common/ButtonComponent";
import { VALIDATE_FORM_COMMUNITY_POST } from "src/messages/validate";
import { updatePostComment } from "src/services/community";

interface ICommentComponentProps {
  item: any;
  handleCallbackRemove?: any;
  index?: string;
}

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
  border: "2px solid #F5F5F5",
});

const BoxTextValidate = styled(Box)({
  color: "#FF9458",
  lineHeight: "20px",
  fontWeight: "400",
  fontSize: "14px",
});

const CommentComponent: React.SFC<ICommentComponentProps> = ({ item, handleCallbackRemove, index }) => {
  const { t } = useTranslation();
  const auth = useSelector((state: IStoreState) => state.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [isUpdateComment, setIsUpdateComment] = useState(false);
  const [content, setContent] = useState("");
  const [contentUpdateId, setContentUpdateId] = useState("");
  const [communityPostUpdateRequest, setCommunityPostUpdateRequest] = useState({
    content: "",
  });
  const [errorValidates, setErrorValidates] = useState({
    content: null,
  });

  const errorMessages = {
    content: null,
  };

  const onChangeCommunityPostRequest = (key: string, valueInput: any) => {
    setContent(valueInput);
    setIsDisableBtn(false);
    setCommunityPostUpdateRequest({
      ...communityPostUpdateRequest,
      [key]: typeof valueInput === "string" ? valueInput.trim() : valueInput,
    });
  };

  const handleValidateFormCommunityPost = () => {
    let isValidForm = true;
    if (communityPostUpdateRequest?.content?.length > 1000) {
      isValidForm = false;
      errorMessages.content = VALIDATE_FORM_COMMUNITY_POST.content_comment.max_length;
    }
    setErrorValidates(errorMessages);
    return isValidForm;
  };
  const handleSaveFormUpdate = async () => {
    if (handleValidateFormCommunityPost() && communityPostUpdateRequest?.content?.length > 0) {
      setIsLoading(true);
      const communityId = router.query;
      const response = await updatePostComment(
        communityId?.id,
        communityId?.detailId,
        item?.id,
        communityPostUpdateRequest,
      );
      setIsLoading(false);
      setIsUpdateComment(false);
      setContentUpdateId(item?.id);
      return response;
    }
  };

  const redirectProfile = () => {
    if (item?.user?.id === auth?.id) {
      router.push("/my-profile");
    } else {
      router.push(`/profile/${item?.user?.id}`);
    }
  };

  const handleCallbackUpdateComment = (status) => {
    setContent(item?.content);
    setIsUpdateComment(status);
  };
  return (
    <Box>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box
        sx={{
          borderTop: `1px solid ${theme.lightGray}`,
          pt: ["8px", "20px"],
          pb: "26px",
          position: "relative",
        }}
      >
        {(item?.can_delete || item?.can_edit) && (
          <ButtonDropDownComponent
            top={["4px", "10px"]}
            right="0"
            handleCallbackRemove={handleCallbackRemove}
            handleCallbackUpdateComment={handleCallbackUpdateComment}
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
        {isUpdateComment ? (
          <Box>
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
                  handleSaveFormUpdate();
                  return true;
                }
              }}
            />
            {errorValidates?.content && <BoxTextValidate>{errorValidates?.content}</BoxTextValidate>}
            <Box sx={{ textAlign: "right", cursor: "pointer" }}>
              <ButtonComponent
                disabled={isDisableBtn || content.length < 1}
                props={{
                  square: true,
                  bgColor: theme.blue,
                }}
                sx={{
                  mt: "20px",
                  width: "96px",
                }}
                onClick={handleSaveFormUpdate}
              >
                {t("community:button.detail.submit-post")}
              </ButtonComponent>
            </Box>
          </Box>
        ) : (
          <ShowTextArea value={contentUpdateId === item?.id ? content : item?.content} />
        )}
      </Box>
    </Box>
  );
};
export default CommentComponent;
