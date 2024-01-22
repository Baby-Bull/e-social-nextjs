import React, { useState } from "react";
import { useRouter } from "next/router";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { Avatar, Box, Select, Typography } from "@mui/material";

import theme from "src/theme";
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

const PopupCallReceive: React.SFC<IReportUserProps> = ({ showPopup, setShowPopup, user }) => {
  const [report, setReport] = React.useState(false);

  const handleClose = () => {
    setShowPopup(false);
    setReport(false);
  };

  const emitReceiveCalling = (isReceiveCalling: boolean) => {
    socketIO.emit("receiveCalling", { isReceiveCalling });
    if (!isReceiveCalling) socketIO.emit("sendCalling", { isSendCalling: false });
    // setTimeout(() => {
    //   socketIO.emit("sendCalling", { isSendCalling: false });
    // }, 3000);
  };
  const [openVideoCall, setOpenVideoCall] = useState(false);
  // socketIO.on("receiveCalling", ({ isReceiveCalling }) => {
  //   // eslint-disable-next-line no-unused-expressions
  //   isReceiveCalling ? setOpenVideoCall(true) : setOpenVideoCall(false);
  // });

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
              {user?.username} is calling You
            </Typography>
          </Box>
        </DialogTitle>
        <ButtonComponent
          mode="green"
          sx={{ marginTop: "8px", width: "200px" }}
          onClick={() => {
            emitReceiveCalling(true);
            setOpenVideoCall(true);
          }}
        >
          Receive
        </ButtonComponent>
        <ButtonComponent
          mode="orange"
          sx={{ marginTop: "8px", width: "200px", marginBottom: "2em" }}
          onClick={() => {
            emitReceiveCalling(false);
            setOpenVideoCall(false);
            handleClose();
          }}
        >
          Reject
        </ButtonComponent>
        {openVideoCall && <PopupVideo showPopup={openVideoCall} setShowPopup={setOpenVideoCall} />}
      </DialogReport>
    </Box>
  );
};

export default PopupCallReceive;
