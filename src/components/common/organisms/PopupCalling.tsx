import React, { useState } from "react";
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

import theme from "src/theme";
import { userReport } from "src/services/user";
import { USER_REPORT_OPTIONS } from "src/constants";
import socketIO from "src/helpers/socketIO";

import ButtonComponent from "../atom-component/ButtonComponent";

import PopupVideo from "./PopupVideo";

interface IReportUserProps {
  showPopup: boolean;
  user?: any;
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

const PopupCalling: React.SFC<any> = ({ showPopup, setShowPopup, user, emitSendCalling }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [report, setReport] = React.useState(false);

  const handleClose = () => {
    setShowPopup(false);
    setReport(false);
    emitSendCalling(false);
  };
  const [openVideoCall, setOpenVideoCall] = useState(false);
  socketIO.on("receiveCalling", ({ isReceiveCalling }) => {
    // eslint-disable-next-line no-unused-expressions
    isReceiveCalling ? setOpenVideoCall(true) : setOpenVideoCall(false);
  });

  console.log(user);

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
          <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Avatar sx={{ height: "8em", width: "8em" }} src={user?.profileImage} alt={user?.username} />
            <Typography
              component="span"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "24px",
                ml: "20px",
              }}
            >
              You are calling to {user?.username}
            </Typography>
          </Box>
        </DialogTitle>
        {openVideoCall && <PopupVideo showPopup={openVideoCall} setShowPopup={setOpenVideoCall} />}
      </DialogReport>
    </Box>
  );
};

export default PopupCalling;
