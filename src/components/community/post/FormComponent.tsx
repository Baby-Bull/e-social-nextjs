import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Grid, InputBase, TextareaAutosize, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import DOMPurify from "isomorphic-dompurify";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";

import { postDetail } from "../mockData";

const BoxTitle = styled(Box)({
  fontSize: 18,
  "@media (max-width: 425px)": {
    fontSize: 16,
  },
  fontWeight: 700,
});

export const InputCustom = styled(InputBase)({
  backgroundColor: theme.whiteBlue,
  borderRadius: "6px",
  width: "100%",
  "&.MuiInputBase-root": {
    marginLeft: "0px",
    "& .MuiInputBase-input": {
      "@media (max-width: 425px)": {
        fontSize: 14,
      },
      "&::-webkit-input-placeholder": {
        color: theme.gray,
        opacity: 1,
      },
      height: 36,
      paddingTop: 0,
      paddingBottom: 0,
      border: `2px solid transparent`,
      paddingLeft: "18px",
      "&:focus": {
        border: `2px solid ${theme.blue}`,
        borderRadius: "6px",
      },
    },
  },
});

export const TextareaAutosizeCustom = styled(TextareaAutosize)({
  backgroundColor: theme.whiteBlue,
  paddingTop: "9px",
  paddingLeft: "18px",
  width: "100%",
  resize: "none",
  minHeight: "80px",
  border: `2px solid transparent`,
  borderRadius: "6px",
  fontFamily: "Noto Sans JP",
  color: theme.navy,
  fontSize: 14,
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
});

interface ILayoutComponentProps {
  editable?: boolean;
}

const FormComponent: React.SFC<ILayoutComponentProps> = ({ editable }) => {
  const { t } = useTranslation();

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
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BoxTitle>{t("community:form.title")}</BoxTitle>
            <Chip
              label="必須"
              sx={{
                ml: 1,
                width: "54px",
                height: "20px",
                fontSize: 12,
                fontWeight: 600,
                color: "white",
                backgroundColor: theme.orange,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <InputCustom
              sx={{ ml: 1, flex: 1 }}
              placeholder={t("community:form.placeholder.title")}
              inputProps={{ "aria-label": t("community:form.placeholder.title") }}
              defaultValue={editable && t("community:form.title-value")}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BoxTitle>{t("community:form.detail")}</BoxTitle>
            <Chip
              label="必須"
              sx={{
                ml: 1,
                width: "54px",
                height: "20px",
                fontSize: 12,
                fontWeight: 600,
                color: "white",
                backgroundColor: theme.orange,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box
              sx={{
                height: "100%",
                borderRadius: "6px",
                "& div": {
                  backgroundColor: theme.whiteBlue,
                  height: "100%",
                  border: "2px solid transparent",
                  outline: "none",
                  borderRadius: "6px",
                  pb: "8px",
                  pr: { sm: "20%" },
                },
                "& div:focus-visible": {
                  border: `2px solid ${theme.blue}`,
                },
              }}
            >
              {editable ? (
                <div
                  contentEditable="true"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postDetail.content) }}
                  style={{
                    paddingLeft: "18px",
                  }}
                />
              ) : (
                <TextareaAutosizeCustom
                  aria-label="write-comment"
                  placeholder={t("community:place-holder")}
                  style={{}}
                />
              )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <BoxTitle>{t("community:form.url")}</BoxTitle>
          </Grid>
          <Grid item xs={12} sm={9}>
            <InputCustom
              sx={{ ml: 1, flex: 1 }}
              placeholder={t("community:form.placeholder.url")}
              inputProps={{ "aria-label": t("community:form.placeholder.url") }}
              defaultValue={editable && postDetail.url}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <BoxTitle>{t("community:form.address")}</BoxTitle>
          </Grid>
          <Grid item xs={12} sm={9}>
            <InputCustom
              sx={{ ml: 1, flex: 1 }}
              placeholder={t("community:form.placeholder.address")}
              inputProps={{ "aria-label": t("community:form.placeholder.address") }}
              defaultValue={editable && postDetail.address}
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
          >
            {editable ? t("community:form.submit-edit") : t("community:form.submit-create")}
          </ButtonComponent>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default FormComponent;
