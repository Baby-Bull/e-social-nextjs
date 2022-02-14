/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Paper, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import scrollEl from "src/helpers/scrollEl";

import { listMessagesMockData } from "../../mockData";

interface IBoxChatProps {
  avatar?: string;
  message: string;
  time: string;
}
interface IBoxMyChatProps {
  message: string;
  time: string;
  isStartOfDay?: boolean;
  isErrorMessage?: boolean;
}

interface INameOfChatSPProps {
  name: string;
  handleClick: () => void;
}

const BoxMyChat: React.SFC<IBoxMyChatProps> = ({ message, time, isStartOfDay = false, isErrorMessage = false }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {isStartOfDay ? (
        <div className={styles.spanStartOfDay}>
          <span>今日</span>
        </div>
      ) : null}
      <Box className={styles.itemMessageMyChat}>
        <Typography className="time">{time}</Typography>
        <div className={`message-content ${isErrorMessage ? "error-message" : ""}`}>{message}</div>
      </Box>

      {isErrorMessage ? (
        <div className={styles.errorMessage}>
          <div className="span-error-message">{t("chat:span-error-message")}</div>
          <div className="div-btn-action">
            <a type="button" className="btn-action btn-resend">
              {t("chat:btn-resend")}
            </a>
            <a type="button" className="btn-action btn-delete">
              {t("chat:btn-delete")}
            </a>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const BoxChatOthers: React.SFC<IBoxChatProps> = ({ avatar, message, time }) => (
  <Box className={styles.itemMsgOther}>
    <Avatar className="avatar" alt="Avatar" src={avatar} />
    <div className="message-content">{message}</div>
    <Typography className="time">{time}</Typography>
  </Box>
);

const NameOfChatSP: React.SFC<INameOfChatSPProps> = ({ name, handleClick }) => (
  <React.Fragment>
    <IconButton onClick={handleClick} sx={{ paddingLeft: 0, paddingRight: "20px" }}>
      <img alt="back" src="/assets/images/chat/ic_back.svg" width={6} />
    </IconButton>
    {name}
  </React.Fragment>
);

const ChatBoxRightComponent = ({ isMobile, toggleRenderSide }) => {
  const { t } = useTranslation();

  const [listMessages] = useState(listMessagesMockData);

  useEffect(() => {
    scrollEl(document.querySelector("#box-message"));
  }, [listMessagesMockData]);

  return (
    <Grid item className={styles.chatBoxRight}>
      <Box className="box-title">
        <Typography className="username-community">
          {isMobile ? (
            <NameOfChatSP name={listMessages?.nameCommunity} handleClick={toggleRenderSide} />
          ) : (
            listMessages?.nameCommunity
          )}
        </Typography>
        <span>({listMessages?.members})</span>
      </Box>
      <Box className="box-content">
        <Box className={styles.boxData} id="box-message">
          {listMessages?.messages?.map((message, index) =>
            message?.isMe ? (
              <BoxMyChat
                key={index}
                message={message?.message}
                time={message?.time}
                isStartOfDay={!!message?.isStartOfDay}
                isErrorMessage={!!message?.isErrorMessage}
              />
            ) : (
              <BoxChatOthers
                key={index}
                avatar={listMessages?.avatar}
                message={message?.message}
                time={message?.time}
              />
            ),
          )}
        </Box>
      </Box>
      <Box className={styles.boxChat}>
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
          <input accept="image/*" hidden id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions" component="span">
              <img alt="search" src="/assets/images/svg/ic_attachment.svg" />
            </IconButton>
          </label>
          <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
            <img alt="search" src="/assets/images/svg/ic_send_message.svg" />
          </IconButton>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ChatBoxRightComponent;
