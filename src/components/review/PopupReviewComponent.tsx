import { Avatar, Box, Button, Checkbox, Typography } from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Radio from "@mui/material/Radio";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useTranslation } from "next-i18next";

import theme from "src/theme";

/* event change select option */
const DialogReview = styled(Dialog)({
  "& .MuiPaper-root": {
    maxWidth: "100%",
  },
  "& .MuiDialog-paper": {
    backgroundColor: `${theme.whiteBlue}`,
    borderRadius: "12px",
    width: "44.44%",
    margin: 0,
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  "@media (max-width: 1200px)": {
    "& .MuiDialog-paper": {
      width: "93%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
});

const TypoTitleReview = styled(Typography)({
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "24px",
  color: theme.navy,
  width: "120px",
  display: "flex",
  alignItems: "center",
  "@media (max-width: 1200px)": {
    fontSize: "16px",
    marginBottom: "14px",
  },
});

const TypoContentReview = styled(Typography)({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  color: theme.black,
  display: "flex",
  alignItems: "center",
  "@media (max-width: 1200px)": {
    alignItems: "unset",
  },
});

const FieldTextAreaReview = styled(TextareaAutosize)({
  width: "440px",
  border: "1px solid #03BCDB",
  backgroundColor: "#fff",
  fontSize: 16,
  padding: "9px 16px",
  borderRadius: "12px",
  "&:placeholder": { color: theme.gray },
  "@media (max-width: 1200px)": {
    fontSize: 14,
    width: "293px",
  },
});

const FieldTextAreaCheck = styled(TextareaAutosize)({
  width: "440px",
  fontSize: 16,
  background: theme.whiteBlue,
  border: "none",
  "@media (max-width: 1200px)": {
    width: "293px",
  },
});

const BoxContentReview = styled(Box)({
  display: "flex",
  marginBottom: "25px",
  "@media (max-width: 1200px)": {
    display: "block",
    marginBottom: "40px",
  },
});

const BoxContentReviewIsCheck = styled(Box)({
  display: "flex",
  marginBottom: "25px",
  "@media (max-width: 1200px)": {
    display: "flex",
    marginBottom: "40px",
  },
});

const PopupReviewComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);
  const [isPost, setIsPost] = React.useState(false);

  const handleIsCheck = () => {
    setIsCheck(true);
  };

  const handleIsPost = () => {
    setIsPost(true);
  };

  const handleUnCheck = () => {
    setIsCheck(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsPost(false);
    setIsCheck(false);
  };

  const [selectedValueEvaluation, setSelectedValueEvaluation] = React.useState("良かった");
  const [selectedValueReport, setSelectedValueReport] = React.useState("");
  const [selectedValueAnonymous, setSelectedValueAnonymous] = React.useState("");
  const [valueComment, setValueComment] = React.useState("");

  const handleChangeEvaluation = (event) => {
    setSelectedValueEvaluation(event.target.value);
  };

  const handleChangeReport = (event) => {
    setSelectedValueReport(event.target.value);
  };

  const handleChangeAnonymous = (event) => {
    setSelectedValueAnonymous(event.target.value);
  };

  const handleChangeComment = (event) => {
    setValueComment(event.target.value);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <DialogReview
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ display: isPost ? "block" : "none" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            m: { xs: "8px -14px 0 0", lg: "24px -8px 0 0" },
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <Avatar src="/assets/images/icon/ic_close.png" />
        </Box>
        <DialogContent>
          <Box sx={{ textAlign: { xs: "left", lg: "center" }, m: "30px 0 96px 0" }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "700", lineHeight: "40px", color: theme.navy }}>
              {t("review:popup.text-thanks-review")}
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "700", lineHeight: "40px", color: theme.navy }}>
              {t("review:popup.text-share-review")}
            </Typography>
            <Button
              sx={{
                background: "#55ACEE",
                color: "#fff",
                width: "280px",
                height: "48px",
                mt: "37px",
                borderRadius: "40px",
              }}
            >
              <Avatar src="/assets/images/logo/logo_twitter.png" sx={{ width: "27px", height: "21.9px", mr: "13px" }} />
              {t("review:popup.twitter")}
            </Button>
          </Box>
        </DialogContent>
      </DialogReview>
      <DialogReview
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ display: isPost ? "none" : "block" }}
      >
        <Box
          sx={{
            display: isCheck ? "none" : "flex",
            justifyContent: "end",
            m: { xs: "8px -14px 0 0", lg: "8px -32px 0 0" },
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <Avatar src="/assets/images/icon/ic_close.png" />
        </Box>
        <DialogTitle sx={{ p: isCheck ? "40px 0 40px 0" : "0 0 40px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src="/assets/images/avatar_review.png" />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "24px",
                ml: "20px",
              }}
            >
              佐藤太郎さんへのレビュー
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: "0", display: isCheck ? "none" : "block" }}>
          <DialogContentText id="alert-dialog-description">
            <BoxContentReview>
              <TypoTitleReview>{t("review:popup.evaluation")}</TypoTitleReview>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Radio
                    checked={selectedValueEvaluation === "良かった"}
                    onChange={handleChangeEvaluation}
                    value="良かった"
                    name="radio-buttons"
                    sx={{
                      color: theme.blue,
                      mr: "15px",
                      p: 0,
                      "&.Mui-checked": {
                        color: theme.blue,
                      },
                    }}
                  />
                  <Typography fontWeight={500} color={theme.navy}>
                    {t("review:form.it-was-good")}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", ml: "29px" }}>
                  <Radio
                    checked={selectedValueEvaluation === "悪かった"}
                    onChange={handleChangeEvaluation}
                    value="悪かった"
                    name="radio-buttons"
                    sx={{
                      color: theme.blue,
                      mr: "15px",
                      p: 0,
                      "&.Mui-checked": {
                        color: theme.blue,
                      },
                    }}
                  />
                  <Typography fontWeight={500} color={theme.navy}>
                    {t("review:form.it-was-bad")}
                  </Typography>
                </Box>
              </Box>
            </BoxContentReview>
            <BoxContentReview>
              <TypoTitleReview>{t("review:popup.report")}</TypoTitleReview>
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  onChange={handleChangeReport}
                  value="運営に通報する"
                  sx={{
                    p: 0,
                    mr: "15px",
                    color: theme.blue,
                    "&.Mui-checked": {
                      color: theme.blue,
                    },
                  }}
                />
                <Typography fontWeight={500} color={theme.navy}>
                  {t("review:form.report-management")}
                </Typography>
              </Box>
            </BoxContentReview>
            <BoxContentReview>
              <TypoTitleReview>{t("review:popup.anonymous")}</TypoTitleReview>
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  onChange={handleChangeAnonymous}
                  value="匿名で投稿"
                  sx={{
                    p: 0,
                    mr: "15px",
                    color: theme.blue,
                    "&.Mui-checked": {
                      color: theme.blue,
                    },
                  }}
                />
                <Typography fontWeight={500} color={theme.navy}>
                  {t("review:form.post-anonymously")}
                </Typography>
              </Box>
            </BoxContentReview>
            <BoxContentReview>
              <TypoTitleReview sx={{ alignItems: "unset" }}>{t("review:popup.comment")}</TypoTitleReview>
              <FieldTextAreaReview
                minRows={12}
                required
                placeholder={t("review:form.placeholder.comment")}
                value={valueComment}
                onChange={handleChangeComment}
              />
            </BoxContentReview>
          </DialogContentText>
        </DialogContent>
        <DialogContent sx={{ p: "0", display: isCheck ? "block" : "none" }}>
          <DialogContentText id="alert-dialog-description">
            <BoxContentReviewIsCheck>
              <TypoTitleReview>{t("review:popup.evaluation")}</TypoTitleReview>
              <TypoContentReview>{selectedValueEvaluation}</TypoContentReview>
            </BoxContentReviewIsCheck>
            <BoxContentReviewIsCheck>
              <TypoTitleReview>{t("review:popup.report")}</TypoTitleReview>
              <TypoContentReview>{selectedValueReport}</TypoContentReview>
            </BoxContentReviewIsCheck>
            <BoxContentReviewIsCheck>
              <TypoTitleReview>{t("review:popup.anonymous")}</TypoTitleReview>
              <TypoContentReview>{selectedValueAnonymous}</TypoContentReview>
            </BoxContentReviewIsCheck>
            <BoxContentReviewIsCheck sx={{ display: "block !important" }}>
              <TypoTitleReview sx={{ alignItems: "unset" }}>{t("review:popup.comment")}</TypoTitleReview>
              <Box>
                <FieldTextAreaCheck>{valueComment}</FieldTextAreaCheck>
              </Box>
            </BoxContentReviewIsCheck>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ dislay: "flex", justifyContent: "center", ml: { xs: "0", lg: "120px" }, pb: "31px" }}>
          <Box sx={{ display: isCheck ? "none" : "block" }}>
            <Button
              sx={{
                background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                color: "#fff",
                borderRadius: { xs: "28px", lg: "40px" },
                width: { xs: "240px", lg: "280px" },
                height: { xs: "56px", lg: "48px" },
              }}
              onClick={handleIsCheck}
            >
              {t("review:popup.check-review")}
            </Button>
          </Box>
          <Box sx={{ display: isCheck ? "block" : "none", textAlign: "center" }}>
            <Box>
              <Button
                sx={{
                  background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                  color: "#fff",
                  borderRadius: { xs: "28px", lg: "40px" },
                  width: { xs: "240px", lg: "280px" },
                  height: { xs: "56px", lg: "48px" },
                  mb: "20px",
                }}
                onClick={handleIsPost}
              >
                {t("review:popup.post-review")}
              </Button>
            </Box>
            <Button
              sx={{
                background: theme.gray,
                color: "#fff",
                borderRadius: "40px",
                width: "200px",
                height: "40px",
              }}
              onClick={handleUnCheck}
            >
              {t("review:popup.to-fix")}
            </Button>
          </Box>
        </DialogActions>
      </DialogReview>
    </Box>
  );
};
export default PopupReviewComponent;
