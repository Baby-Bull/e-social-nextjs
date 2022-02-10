import React, { useState } from "react";
import { Box, Grid, IconButton, Paper, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import ButtonComponent from "src/components/common/elements/ButtonComponent";

import { listMessagesMockData } from "../mockData";

interface IBoxChatProps {
  avatar?: string;
  message: string;
  time: string;
}
interface IBoxMyChatProps {
  message: string;
  time: string;
}

const BoxMyChat: React.SFC<IBoxMyChatProps> = ({ message, time }) => (
  <Box className={styles.itemMessageMyChat}>
    <Typography className="time">{time}</Typography>
    <div className="message-content">{message}</div>
  </Box>
);

const BoxChatOthers: React.SFC<IBoxChatProps> = ({ avatar, message, time }) => (
  <Box className={styles.itemMsgOther}>
    <Avatar className="avatar" alt="Avatar" src={avatar} />
    <div className="message-content">{message}</div>
    <Typography className="time">{time}</Typography>
  </Box>
);

const ChatBoxRightComponent = ({ isMobile }) => {
  const { t } = useTranslation();

  const [listMessages] = useState(listMessagesMockData);

  return (
    <Grid item className={styles.chatBoxRight}>
      <Box className="box-title">
        <Typography className="username">{isMobile ? "福くん株式会社" : listMessages?.name}</Typography>
        <ButtonComponent mode="info" size="medium" className="btn-chat">
          {t("chat:btn-report")}
        </ButtonComponent>

        <div className="btn-review">
          <ButtonComponent mode="orange" size="medium" className="btn-chat">
            {isMobile ? t("chat:btn-review-sp") : t("chat:btn-review")}
          </ButtonComponent>
        </div>
      </Box>
      <Box className="box-content">
        <Box className={styles.boxData}>
          {listMessages?.messages?.map((message) =>
            message?.isMe ? (
              <BoxMyChat message={message?.message} time={message?.time} />
            ) : (
              <BoxChatOthers avatar={listMessages?.avatar} message={message?.message} time={message?.time} />
            ),
          )}
        </Box>
        <Box className="box-chat">
          <Paper
            component="form"
            className="paper-chat"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}
          >
            <InputCustom
              className="input-chat"
              sx={{ ml: 1, flex: 1 }}
              placeholder={t("chat:input-chat-placeholder")}
              inputProps={{ "aria-label": t("chat:input-chat-placeholder") }}
            />
            <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
              <img alt="search" src="/assets/images/svg/ic_attachment.svg" />
            </IconButton>

            <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
              <img alt="search" src="/assets/images/svg/ic_send_message.svg" />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </Grid>
  );
};

export default ChatBoxRightComponent;
