import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useTranslation } from "next-i18next";
import { Avatar, Box, Select, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import { nameUser } from "src/components/chat/mockData";
import theme from "src/theme";

interface IReportUserProps {
  showPopup: boolean;
  // eslint-disable-next-line no-unused-vars
  setShowPopup: (status: boolean) => void;
}
/* event change select option */
const DialogReport = styled(Dialog)({
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

const SelectCustom = styled(Select)({
  borderRadius: 6,
  marginTop: "8px",
  width: "100%",
  height: "40px",
  "& fieldset": {
    border: "none",
  },
  borderColor: "#fff",
  "&:hover": {
    borderRadius: 12,
    borderColor: theme.whiteBlue,
  },
  "@media (max-width: 1200px)": {
    width: "100%",
  },
  "& .MuiSelect-select": {
    position: "relative",
    backgroundColor: "#fff",
    border: "2px solid #03BCDB",
    fontSize: 16,
    padding: "9px 16px",
    borderRadius: 12,
    fontFamily: "Noto Sans",
    "@media (max-width: 1200px)": {
      fontSize: 14,
    },
  },
});

const FieldTextArea = styled(TextareaAutosize)({
  width: "100%",
  marginTop: "8px",
  border: "2px solid #03BCDB",
  backgroundColor: "#fff",
  fontSize: 16,
  padding: "10px",
  borderRadius: "12px",
  "&::-webkit-input-placeholder": {
    fontSize: 14,
    color: theme.gray,
  },
  "@media (max-width: 1200px)": {
    fontSize: 14,
    width: "100%",
  },
});

const ButtonAction = styled(Button)({
  width: "240px",
  height: "56px",
  fontSize: "18px",
  borderRadius: "28px",
});

const TypoContentReport = styled(Typography)({
  fontSize: "20px",
  lineHeight: "40px",
  fontWeight: 500,
  color: theme.navy,
  "@media (max-width: 1200px)": {
    fontSize: "14px",
    lineHeight: "30px",
  },
});

const options = [
  {
    value: null,
    label: "選択してください",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
];

const popupReportUser: React.SFC<IReportUserProps> = ({ showPopup, setShowPopup }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [option, setOption] = React.useState(options[0].label);
  const [report, setReport] = React.useState(false);

  const handleClose = () => {
    setShowPopup(false);
    setReport(false);
  };

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleChangeReport = () => {
    setReport(true);
  };

  return (
    <Box>
      <DialogReport
        open={showPopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            m: { xs: "10px -10px 0 0", lg: "10px -30px 0 0" },
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <Avatar src="/assets/images/icon/ic_close.png" sx={{ width: "42px", height: "42px" }} />
        </Box>
        <DialogTitle sx={{ p: 0, mb: "32px", display: report ? "none" : "block" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src="/assets/images/avatar_review.png" />
            <Typography
              component="span"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "24px",
                ml: "20px",
              }}
            >
              {nameUser}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0, display: report ? "block" : "none", mt: "-27px", textAlign: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src="/assets/images/report/content_report.png"
              sx={{ width: { xs: "160px", lg: "180px" }, height: { xs: "160px", lg: "180px" } }}
            />
          </Box>
          <Box sx={{ m: "20px 0 34px 0" }}>
            <TypoContentReport>{t("chat:popup.thanks-report1")}</TypoContentReport>
            <TypoContentReport>{t("chat:popup.thanks-report2")}</TypoContentReport>
          </Box>
          <Box sx={{ mb: "36px" }}>
            <ButtonAction
              onClick={() => router.push("/")}
              sx={{
                background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)",
                color: "#fff",
                "&:hover": { background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" },
              }}
            >
              {t("chat:popup.home")}
            </ButtonAction>
          </Box>
        </DialogContent>
        <DialogContent sx={{ p: 0, display: report ? "none" : "block" }}>
          <DialogContentText id="alert-dialog-description">
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography component="span" color={theme.navy}>
                  {t("chat:popup.reason-for-reporting")}
                </Typography>
                <Box
                  sx={{
                    background: theme.orange,
                    borderRadius: "11px",
                    height: "20px",
                    width: "54px",
                    display: "flex",
                    justifyContent: "center",
                    ml: "4px",
                  }}
                >
                  <Typography component="span" fontSize={12} color="#fff">
                    {t("chat:popup.required")}
                  </Typography>
                </Box>
              </Box>
              <SelectCustom value={option} onChange={handleChange}>
                {options.map((optionValue) => (
                  <MenuItem key={optionValue.value} value={optionValue.label}>
                    <Typography
                      component="span"
                      sx={{
                        color: optionValue.value ? theme.navy : theme.gray,
                        fontSize: optionValue.value ? "16px" : "14px",
                      }}
                    >
                      {optionValue.label}
                    </Typography>
                  </MenuItem>
                ))}
              </SelectCustom>
            </Box>
            <Box sx={{ m: "40px 0 46px 0" }}>
              <Typography component="span" color={theme.navy}>
                {t("chat:popup.background-to-the-report")}
              </Typography>
              <FieldTextArea
                style={{
                  height: "195px",
                }}
                placeholder={t("chat:popup.form.placeholder.background-to-the-report")}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography component="span" color={theme.navy} fontSize={14}>
                {t("chat:popup.text-confirm-report")}
              </Typography>
            </Box>
          </DialogContentText>
          <Box
            sx={{
              textAlign: "center",
              display: { xs: "block", lg: "flex" },
              m: "26px 0 56px 0",
              justifyContent: "center",
            }}
          >
            <ButtonAction
              onClick={handleClose}
              sx={{
                background: theme.gray,
                color: "#fff",
                m: { xs: "0 0 40px 0", lg: "0 40px 0 0" },
                "&:hover": { backgroundColor: theme.gray },
              }}
            >
              {t("chat:popup.cancel")}
            </ButtonAction>
            {/* eslint-disable-next-line max-len */}
            <ButtonAction
              onClick={handleChangeReport}
              sx={{ backgroundColor: "#FFDA58", color: "#000000", "&:hover": { backgroundColor: "#FFDA58" } }}
            >
              {t("chat:popup.send-report")}
            </ButtonAction>
          </Box>
        </DialogContent>
      </DialogReport>
    </Box>
  );
};

export default popupReportUser;
