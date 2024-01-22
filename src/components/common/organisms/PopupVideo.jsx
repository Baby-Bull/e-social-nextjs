import React, { useRef, useEffect, useState } from "react";
import { Avatar, Box, Select, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import SimplePeer from "simple-peer";
import { styled } from "@mui/styles";

import socketIO from "src/helpers/socketIO";
import theme from "src/theme";

import ButtonComponent from "../atom-component/ButtonComponent";

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
const PopupVideo = (showPopup, setShowPopup) => {
  const myVideoRef = useRef();
  const peerVideoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        myVideoRef.current.srcObject = stream;

        const peer = new SimplePeer({ initiator: true, stream });

        peer.on("signal", (data) => {
          // Send the offer signal to the server
          socketIO.emit("offer", JSON.stringify(data));
        });

        peer.on("stream", (remoteStream) => {
          // Display the remote stream
          peerVideoRef.current.srcObject = remoteStream;
        });

        socketIO.on("answer", (data) => {
          // Receive the answer signal and set it on the peer
          peer.signal(JSON.parse(data));
        });
      })
      .catch((error) => console.error("Error accessing media devices:", error));

    return () => {
      // navigator.mediaDevices.getUserMedia({ video: true, audio: true }).stop();
    };
  }, []);

  const [openVideoCall, setOpenVideoCall] = useState(showPopup);
  const handleClose = () => {
    navigator.mediaDevices.getUserMedia({ video: false, audio: false });
    setShowPopup(false);
  };

  return (
    <Box>
      <DialogReport
        open={openVideoCall}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div>
          <video ref={myVideoRef} autoPlay muted>
            <track kind="captions" />
          </video>
          <video ref={peerVideoRef} autoPlay>
            <track kind="captions" />
          </video>
        </div>
        <ButtonComponent
          mode="green"
          sx={{ marginTop: "8px", width: "200px" }}
          onClick={() => {
            setOpenVideoCall(false);
          }}
        >
          Off
        </ButtonComponent>
      </DialogReport>
    </Box>
  );
};

export default PopupVideo;
