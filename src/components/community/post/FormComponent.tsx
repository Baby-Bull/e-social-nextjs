import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import { Field } from "src/components/community/blocks/Form/InputComponent";
import { TextArea } from "src/components/community/blocks/Form/TextAreaComponent";
import { REGEX_RULES, VALIDATE_FORM_COMMUNITY_POST } from "src/messages/validate";
import { createCommunityPost, detailCommunityPost, updateCommunityPost } from "src/services/community";

const BoxTitle = styled(Box)({
  fontSize: 18,
  "@media (max-width: 425px)": {
    fontSize: 16,
  },
  fontWeight: 700,
});

interface ILayoutComponentProps {
  editable?: boolean;
}

const FormComponent: React.SFC<ILayoutComponentProps> = ({ editable }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [referenceUrl, setReferenceUrl] = useState("");
  const [address, setAddress] = useState("");
  const [communityPostRequest, setCommunityPostRequest] = useState({
    title,
    content,
    reference_url: referenceUrl,
    address,
  });
  const [errorValidates, setErrorValidates] = useState({
    title: null,
    content: null,
    reference_url: null,
    address: null,
  });

  const errorMessages = {
    title: null,
    content: null,
    reference_url: null,
    address: null,
  };

  const onChangeCommunityPostRequest = (key: string, valueInput: any) => {
    if (key === "title") {
      setTitle(valueInput);
    }
    if (key === "content") {
      setContent(valueInput);
    }
    if (key === "reference_url") {
      setReferenceUrl(valueInput);
    }
    if (key === "address") {
      setAddress(valueInput);
    }
    setCommunityPostRequest({
      ...communityPostRequest,
      [key]: typeof valueInput === "string" ? valueInput.trim() : valueInput,
    });
  };

  const handleValidateFormCommunityPost = () => {
    let isValidForm = true;
    if (!communityPostRequest?.title?.length || communityPostRequest?.title?.length > 60) {
      isValidForm = false;
      errorMessages.title = VALIDATE_FORM_COMMUNITY_POST.title.max_length;
    }

    if (!communityPostRequest?.title?.length || communityPostRequest?.title?.length === 0) {
      isValidForm = false;
      errorMessages.title = VALIDATE_FORM_COMMUNITY_POST.title.required;
    }

    if (!communityPostRequest?.content?.length || communityPostRequest?.content?.length > 1000) {
      isValidForm = false;
      errorMessages.content = VALIDATE_FORM_COMMUNITY_POST.content.max_length;
    }

    if (!communityPostRequest?.content?.length || communityPostRequest?.content?.length === 0) {
      isValidForm = false;
      errorMessages.content = VALIDATE_FORM_COMMUNITY_POST.content.required;
    }

    if (communityPostRequest?.reference_url?.length > 0 && !REGEX_RULES.url.test(communityPostRequest?.reference_url)) {
      isValidForm = false;
      errorMessages.reference_url = VALIDATE_FORM_COMMUNITY_POST.reference_url.format;
    }

    if (communityPostRequest?.address?.length > 100) {
      isValidForm = false;
      errorMessages.address = VALIDATE_FORM_COMMUNITY_POST.address.max_length;
    }
    setErrorValidates(errorMessages);
    return isValidForm;
  };

  const handleSaveForm = async () => {
    if (handleValidateFormCommunityPost()) {
      const communityId = router.query;
      if (editable) {
        const res = await updateCommunityPost(communityId?.id, communityId?.updateId, communityPostRequest);
        setTimeout(() => router.push(`/community/${communityId?.id}/post/detail/${res?.slug}`), 1000);
        return res;
      }
      const res = await createCommunityPost(communityId?.id, communityPostRequest);
      if (res) {
        setTimeout(() => router.push(`/community/${communityId?.id}/post/detail/${res?.slug}`), 1000);
        return res;
      }
    }
  };

  const getCommunityPost = async () => {
    if (editable) {
      const community = router.query;
      const res = await detailCommunityPost(community?.id, community?.updateId);
      setTitle(res?.title);
      setAddress(res?.address);
      setContent(res?.content);
      setReferenceUrl(res?.reference_url);
    }
  };

  useEffect(() => {
    getCommunityPost();
  }, []);
  return (
    <React.Fragment>
      <Typography
        sx={{
          fontSize: [18, 20],
          fontWeight: 700,
        }}
      >
        {editable ? t("community:form.edit") : t("community:form.create")}
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "white",
          mt: "8px",
          p: ["23px", "40px"],
          color: theme.navy,
          borderRadius: "12px",
          border: [`1px solid ${theme.lightGray_1}`, "none"],
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BoxTitle>{t("community:form.title")}</BoxTitle>
              <Box
                sx={{
                  background: theme.orange,
                  padding: "0px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "16px",
                  color: "#fff",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "20px",
                  ml: "8px",
                }}
              >
                {t("common:required")}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Field
              id="title"
              placeholder={t("community:form.placeholder.title")}
              onChangeInput={onChangeCommunityPostRequest}
              error={errorValidates.title}
              value={title}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BoxTitle>{t("community:form.detail")}</BoxTitle>
              <Box
                sx={{
                  background: theme.orange,
                  padding: "0px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "16px",
                  color: "#fff",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "20px",
                  ml: "8px",
                }}
              >
                {t("common:required")}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} sx={{ padding: "0" }}>
            <TextArea
              id="content"
              placeholder={t("community:place-holder")}
              error={errorValidates.content}
              onChangeInput={onChangeCommunityPostRequest}
              value={content}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <BoxTitle>{t("community:form.url")}</BoxTitle>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Field
              id="reference_url"
              placeholder={t("community:form.placeholder.url")}
              error={errorValidates.reference_url}
              onChangeInput={onChangeCommunityPostRequest}
              value={referenceUrl}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <BoxTitle>{t("community:form.address")}</BoxTitle>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Field
              id="address"
              placeholder={t("community:form.placeholder.address")}
              error={errorValidates.address}
              onChangeInput={onChangeCommunityPostRequest}
              value={address}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ButtonComponent
            props={{
              dimension: "medium",
              bgColor: theme.blue,
            }}
            onClick={handleSaveForm}
          >
            {editable ? t("community:form.submit-edit") : t("community:form.submit-create")}
          </ButtonComponent>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default FormComponent;
