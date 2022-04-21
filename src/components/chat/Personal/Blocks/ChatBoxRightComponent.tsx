/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Paper, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
// @ts-ignore
import PopupReportUser from "src/components/chat/Personal/Blocks/PopupReportUser";
import PopupReviewComponent from "src/components/chat/Personal/Blocks/PopupReviewComponent";
import scrollEl from "src/helpers/scrollEl";
import { getMessages } from "src/services/chat";
import { formatChatDate } from "src/utils/utils";

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

const ChatBoxRightComponent = ({ isMobile, toggleRenderSide, userId, roomSelect }) => {
  const { t } = useTranslation();

  const [listMessages, setListMessages] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  const handleShow = () => {
    setShowPopup(true);
  };

  const [showPopupReview, setShowPopupReview] = useState(false);
  const handleShowReview = () => setShowPopupReview(true);

  useEffect(() => {
    scrollEl(document.querySelector("#box-message"));
  }, [listMessages]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await getMessages(userId);
      setListMessages(res?.items || []);
    };

    fetchMessages();
  }, [userId]);

  return (
    <Grid item className={styles.chatBoxRight}>
      <Box className="box-title">
        <Typography className="username">
          {isMobile ? (
            <NameOfChatSP name="福くん株式会社" handleClick={toggleRenderSide} />
          ) : (
            roomSelect?.user?.username
          )}
        </Typography>
        <ButtonComponent mode="info" size="medium" className="btn-chat" onClick={handleShow}>
          {t("chat:btn-report")}
        </ButtonComponent>
        <div className="btn-review">
          <ButtonComponent mode="orange" size="medium" className="btn-chat" onClick={handleShowReview}>
            {isMobile ? t("chat:btn-review-sp") : t("chat:btn-review")}
          </ButtonComponent>
        </div>
      </Box>
      <Box className="box-content">
        <Box className={styles.boxData} id="box-message">
          {listMessages?.map((message, index) =>
            message?.sender_id !== userId ? (
              <BoxMyChat
                key={index}
                message={message?.content}
                time={formatChatDate(message?.created_at)}
                // isStartOfDay={!!message?.isStartOfDay}
                // isErrorMessage={!!message?.isErrorMessage}
              />
            ) : (
              <BoxChatOthers
                key={index}
                avatar={message?.user?.profile_image || "/assets/images/svg/avatar.svg"}
                message={message?.content}
                time={formatChatDate(message?.created_at)}
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
      <PopupReportUser showPopup={showPopup} setShowPopup={setShowPopup} />
      <PopupReviewComponent showPopup={showPopupReview} setShowPopup={setShowPopupReview} />
    </Grid>
  );
};

export default ChatBoxRightComponent;
