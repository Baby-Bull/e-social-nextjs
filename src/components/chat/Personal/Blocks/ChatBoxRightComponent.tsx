/* eslint-disable jsx-a11y/label-has-associated-control */
import crypto from "crypto";

import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, IconButton, Paper, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";
import InfiniteScroll from "react-infinite-scroller";
import { useQuery } from "react-query";
import Linkify from "react-linkify";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
// @ts-ignore
import PopupReportUser from "src/components/chat/Personal/Blocks/PopupReportUser";
import PopupReviewComponent from "src/components/chat/Personal/Blocks/PopupReviewComponent";
import scrollEl from "src/helpers/scrollEl";
import { getMessages } from "src/services/chat";
import { formatChatDate, formatListMessages } from "src/helpers/helper";
import { MESSAGE_CONTENT_TYPES, REACT_QUERY_KEYS } from "src/constants/constants";

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
  id: any;
  resendMessage?: Function;
  deleteErrorMessage?: Function;
}

interface INameOfChatSPProps {
  name: string;
  handleClick: () => void;
}

const BoxMyChat: React.SFC<IBoxMyChatProps> = ({
  message,
  time,
  isStartOfDay = false,
  isErrorMessage = false,
  id,
  resendMessage,
  deleteErrorMessage,
}) => {
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
        <div className={`message-content ${isErrorMessage ? "error-message" : ""}`}>
          <Linkify>{message}</Linkify>
        </div>
      </Box>

      {isErrorMessage ? (
        <div className={styles.errorMessage}>
          <div className="span-error-message">{t("chat:span-error-message")}</div>
          <div className="div-btn-action">
            <a type="button" className="btn-action btn-resend" onClick={() => resendMessage(message, id)}>
              {t("chat:btn-resend")}
            </a>
            <a type="button" className="btn-action btn-delete" onClick={() => deleteErrorMessage(id)}>
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
    <div className="message-content">
      <Linkify>{message}</Linkify>
    </div>
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

const ChatBoxRightComponent = ({
  isMobile,
  toggleRenderSide,
  userId,
  roomSelect,
  sendTextMessage,
  newMessageOfRoom,
  user,
}) => {
  const { t } = useTranslation();
  const inputChatRef = useRef(null);
  const boxMessageRef = useRef(null);
  const isFirstRender = useRef(true);

  const [listMessages, setListMessages] = useState([]);
  const [listMessagesShow, setListMessagesShow] = useState([]);

  const [hasMoreParams, setHasMoreParams] = useState({
    cursor: null,
    hasMore: false,
  });

  const [showPopup, setShowPopup] = useState(false);
  const handleShow = () => setShowPopup(true);

  const [showPopupReview, setShowPopupReview] = useState(false);
  const handleShowReview = () => setShowPopupReview(true);

  useEffect(() => {
    if (
      isFirstRender.current ||
      boxMessageRef.current.offsetHeight + boxMessageRef.current.scrollTop + 100 >= boxMessageRef.current.scrollHeight
    ) {
      scrollEl(boxMessageRef.current);
      if (listMessages?.length) {
        isFirstRender.current = false;
      }
    }
  }, [listMessages]);

  const { data: listMessageResQuery } = useQuery(
    [REACT_QUERY_KEYS.PERSONAL_CHAT.LIST_MESSAGES, userId],
    async () => {
      const res = await getMessages(userId);
      return {
        ...res,
        items: res?.items?.reverse() || [],
      };
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!userId,
    },
  );

  useEffect(() => {
    setListMessages([]);
    setHasMoreParams({
      cursor: null,
      hasMore: false,
    });
    setListMessages(listMessageResQuery?.items || []);
    setHasMoreParams({
      cursor: listMessageResQuery?.cursor,
      hasMore: listMessageResQuery?.hasMore,
    });
    isFirstRender.current = true;
    inputChatRef.current.focus();
  }, [listMessageResQuery]);

  const loadMoreData = async () => {
    if (hasMoreParams?.cursor?.length && listMessages.length) {
      const res = await getMessages(userId, hasMoreParams?.cursor);
      setListMessages([...(res?.items?.reverse() || []), ...listMessages]);
      setHasMoreParams({
        cursor: res?.cursor,
        hasMore: res?.hasMore,
      });
      isFirstRender.current = false;
    }
  };

  useEffect(() => {
    if (newMessageOfRoom && newMessageOfRoom?.chat_room_id === roomSelect.id) {
      setListMessages([...listMessages, newMessageOfRoom]);
    }
  }, [newMessageOfRoom]);

  useEffect(() => {
    const listMessagesFormat = formatListMessages(listMessages);
    setListMessagesShow(listMessagesFormat);
  }, [listMessages]);

  const handleSendTextMessage = () => {
    const message = inputChatRef.current.value.trim();
    if (message) {
      sendTextMessage(message);
      setListMessages([
        ...listMessages,
        {
          id: crypto.randomBytes(16).toString("hex"),
          content: message,
          content_type: MESSAGE_CONTENT_TYPES.TEXT,
          created_at: new Date().toISOString(),
          sender_id: "123",
          isErrorMessage: !navigator.onLine,
        },
      ]);
      inputChatRef.current.value = "";
    }
  };

  const onKeyUpMessageText = (e) => {
    if (!e.shiftKey && e.keyCode === 13 && e.target.value) {
      handleSendTextMessage();
    }
  };

  const deletedMessageError = (id: any) => {
    setListMessages(listMessages.filter((message) => message?.id !== id));
  };

  const resendMessage = (message: string, id: any) => {
    const listMessagesTmp = listMessages.filter((item) => item?.id !== id);
    if (message) {
      sendTextMessage(message);
      setListMessages([
        ...listMessagesTmp,
        {
          id: crypto.randomBytes(16).toString("hex"),
          content: message,
          content_type: MESSAGE_CONTENT_TYPES.TEXT,
          created_at: new Date().toISOString(),
          sender_id: "123",
          isErrorMessage: !navigator.onLine,
        },
      ]);
      inputChatRef.current.value = "";
    }
  };

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
        <Box className={styles.boxData} id="box-message" ref={boxMessageRef}>
          {listMessages?.length ? (
            <InfiniteScroll
              loadMore={loadMoreData}
              hasMore={!!listMessages?.length && hasMoreParams.hasMore && !isFirstRender.current}
              loader="loading..."
              isReverse
              useWindow={false}
            >
              {Object.keys(listMessagesShow)?.map((dateText) => (
                <React.Fragment key={dateText}>
                  <div className={styles.spanStartOfDay}>
                    <span>{dateText}</span>
                  </div>
                  {listMessagesShow[dateText]?.map((message: any, index: number) =>
                    message?.sender_id !== userId ? (
                      <BoxMyChat
                        key={index}
                        message={message?.content}
                        time={formatChatDate(message?.created_at)}
                        isErrorMessage={!!message?.isErrorMessage}
                        resendMessage={resendMessage}
                        deleteErrorMessage={deletedMessageError}
                        id={message?.id}
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
                </React.Fragment>
              ))}
            </InfiniteScroll>
          ) : null}
        </Box>
      </Box>
      <Box className={styles.boxChat}>
        <Paper className="paper-chat" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
          <InputCustom
            multiline
            className="input-chat"
            inputRef={inputChatRef}
            id="input_chat_text"
            sx={{ ml: 1, flex: 1 }}
            placeholder={t("chat:input-chat-placeholder")}
            inputProps={{ "aria-label": t("chat:input-chat-placeholder") }}
            onKeyUp={onKeyUpMessageText}
          />
          <input accept="image/*" hidden id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions" component="span">
              <img alt="search" src="/assets/images/svg/ic_attachment.svg" />
            </IconButton>
          </label>
          <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions" onClick={handleSendTextMessage}>
            <img alt="search" src="/assets/images/svg/ic_send_message.svg" />
          </IconButton>
        </Paper>
      </Box>
      <PopupReportUser showPopup={showPopup} setShowPopup={setShowPopup} user={user} />
      <PopupReviewComponent showPopup={showPopupReview} setShowPopup={setShowPopupReview} user={user} />
    </Grid>
  );
};

export default ChatBoxRightComponent;
