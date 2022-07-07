/* eslint-disable jsx-a11y/label-has-associated-control */
import crypto from "crypto";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Box, Grid, IconButton, Paper, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "next-i18next";
import "moment/locale/ja";
import { useQuery } from "react-query";
// import InfiniteScroll from "react-infinite-scroll-component";
import Linkify from "react-linkify";
import InfiniteScroll from "react-infinite-scroller";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import ButtonComponent from "src/components/common/elements/ButtonComponent";
// @ts-ignore
import PopupReportUser from "src/components/chat/Personal/Blocks/PopupReportUser";
import PopupReviewComponent from "src/components/chat/Personal/Blocks/PopupReviewComponent";
import scrollEl from "src/helpers/scrollEl";
import { getMessages } from "src/services/chat";
import { formatChatDate, formatListMessages } from "src/helpers/helper";
import { MESSAGE_CONTENT_TYPES, MATCHING_PURPOSE_OPTIONS, REACT_QUERY_KEYS } from "src/constants/constants";

interface IBoxChatProps {
  allInfoMessage: any;
  time: string;
}
interface IBoxMyChatProps {
  allInfoMessage: any;
  time: string;
  isStartOfDay?: boolean;
  isErrorMessage?: boolean;
  resendMessage?: Function;
  deleteErrorMessage?: Function;
}

interface INameOfChatSPProps {
  name: string;
  handleClick: () => void;
}

interface IThreadDropDownProps {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
}

const ThreadDropdown: React.SFC<IThreadDropDownProps> = ({ open, handleClose, anchorEl }) => (
  <Menu
    open={open}
    className="dropdown-option-thread"
    anchorEl={anchorEl}
    onClose={handleClose}
    keepMounted
    disablePortal
    sx={{
      top: "9px",
      left: "-7em",
      "& .MuiMenu-paper": {
        borderRadius: "12px",
      },
      ".MuiMenuItem-root": {
        fontSize: "10px",
      },
    }}
  >
    <MenuItem onClick={handleClose}>メッセージの編集</MenuItem>
    <MenuItem onClick={handleClose}>メッセージを削除する</MenuItem>
  </Menu>
);

const BoxMyChat: React.SFC<IBoxMyChatProps> = ({
  allInfoMessage,
  time,
  isStartOfDay = false,
  isErrorMessage = false,
  resendMessage,
  deleteErrorMessage,
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showOptionMessage, setShowOptionMessage] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setShowOptionMessage(false);
  };
  return (
    <React.Fragment>
      {isStartOfDay ? (
        <div className={styles.spanStartOfDay}>
          <span>今日</span>
        </div>
      ) : null}
      <Box className={styles.itemMessageMyChat}>
        <IconButton
          sx={{
            display: showOptionMessage ? "block" : "none",
          }}
          onClick={handleClick}
          aria-label="more"
          aria-haspopup="true"
        >
          <img alt="more-options" src="/assets/images/chat/more_options.svg" />
        </IconButton>
        <ThreadDropdown open={open} anchorEl={anchorEl} handleClose={handleClose} />
        <Typography className="time">{time}</Typography>
        <div
          className={`message-content ${isErrorMessage ? "error-message" : ""}`}
          // onClick={() => setShowOptionMessage(!showOptionMessage)}
        >
          {allInfoMessage.content_type === "first-message" ? (
            <Box className="theFirstMessage">
              <Box>
                <span>{t("chat:purpose-firstMessage")}</span>
                <p>{MATCHING_PURPOSE_OPTIONS.find((item) => item?.value === allInfoMessage?.purpose)?.label ?? ""}</p>
              </Box>
              <Box>
                <span>{t("chat:date-firstMessage")}</span>
                <p>{allInfoMessage?.meeting_link?.length > 0 ? allInfoMessage?.meeting_link : t("no_info")}</p>
              </Box>
              <Box>
                <span>{t("chat:content-firstMessage")}</span>
                <p>
                  <Linkify>{allInfoMessage?.content?.length > 0 ? allInfoMessage?.content : t("no_info")}</Linkify>
                </p>
              </Box>
            </Box>
          ) : (
            <Linkify>{allInfoMessage?.content}</Linkify>
          )}
        </div>
      </Box>

      {isErrorMessage ? (
        <div className={styles.errorMessage}>
          <div className="span-error-message">{t("chat:span-error-message")}</div>
          <div className="div-btn-action">
            <a
              type="button"
              className="btn-action btn-resend"
              onClick={() => resendMessage(allInfoMessage?.content, allInfoMessage?.id)}
            >
              {t("chat:btn-resend")}
            </a>
            <a type="button" className="btn-action btn-delete" onClick={() => deleteErrorMessage(allInfoMessage?.id)}>
              {t("chat:btn-delete")}
            </a>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const BoxChatOthers: React.SFC<IBoxChatProps> = ({ time, allInfoMessage }) => {
  const { t } = useTranslation();
  return (
    <Box className={styles.itemMsgOther}>
      <Avatar
        className="avatar"
        alt="Avatar"
        src={allInfoMessage?.user?.profile_image || "/assets/images/svg/avatar.svg"}
      />
      <div className="message-content">
        {allInfoMessage.content_type === "first-message" ? (
          <Box className="theFirstMessage">
            <Box>
              <span>{t("chat:purpose-firstMessage")}</span>
              <p>{MATCHING_PURPOSE_OPTIONS.find((item) => item?.value === allInfoMessage?.purpose)?.label ?? ""}</p>
            </Box>
            <Box>
              <span>{t("chat:date-firstMessage")}</span>
              <p>{allInfoMessage?.meeting_link?.length > 0 ? allInfoMessage?.meeting_link : t("no_info")}</p>
            </Box>
            <Box>
              <span>{t("chat:content-firstMessage")}</span>
              <p>
                <Linkify>{allInfoMessage?.content?.length > 0 ? allInfoMessage?.content : t("no_info")}</Linkify>
              </p>
            </Box>
          </Box>
        ) : (
          <Linkify>{allInfoMessage?.content}</Linkify>
        )}
      </div>
      <Typography className="time">{time}</Typography>
    </Box>
  );
};

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
  // const isFirstRender = useRef(true);
  const [showPopup, setShowPopup] = useState(false);
  const handleShow = () => setShowPopup(true);
  const [showPopupReview, setShowPopupReview] = useState(false);
  const handleShowReview = () => setShowPopupReview(true);

  const [listMessages, setListMessages] = useState([]);
  const [listMessagesShow, setListMessagesShow] = useState([]);

  const [hasMoreParams, setHasMoreParams] = useState({
    cursor: null,
    hasMore: false,
  });

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
    inputChatRef.current.focus();
    setTimeout(() => {
      scrollEl(boxMessageRef.current);
    }, 0);
  }, [listMessageResQuery]);

  const fetchData = async () => {
    if (hasMoreParams?.cursor?.length && listMessages.length) {
      const messageData = await getMessages(userId, hasMoreParams?.cursor);
      setListMessages([...(messageData?.items?.reverse() || []), ...listMessages]);
      setHasMoreParams({
        cursor: messageData?.cursor,
        hasMore: messageData?.hasMore,
      });
    }
  };

  useEffect(() => {
    if (newMessageOfRoom && newMessageOfRoom?.chat_room_id === roomSelect.id) {
      setListMessages([...listMessages, newMessageOfRoom]);
      setTimeout(() => {
        scrollEl(boxMessageRef.current);
      }, 300);
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
      setTimeout(() => {
        scrollEl(boxMessageRef.current);
      }, 300);
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

  const scrollUp = useCallback(
    async (e) => {
      const heightScroll = boxMessageRef?.current?.scrollHeight;
      if (e.target.scrollTop === 0 && hasMoreParams?.cursor?.length && listMessages.length) {
        const res = await getMessages(userId, hasMoreParams?.cursor);
        setListMessages([...(res?.items?.reverse() || []), ...listMessages]);
        setHasMoreParams({
          cursor: res?.cursor,
          hasMore: res?.hasMore,
        });
        const currentHeight = boxMessageRef?.current?.scrollHeight;
        boxMessageRef?.current?.scroll({ top: currentHeight - heightScroll, left: 0 });
      }
    },
    [listMessages, hasMoreParams],
  );

  useEffect(() => {
    boxMessageRef?.current?.addEventListener("scroll", scrollUp);
    return () => {
      boxMessageRef?.current?.removeEventListener("scroll", scrollUp);
    };
  }, [listMessages, hasMoreParams]);

  return (
    <Grid
      item
      className={styles.chatBoxRight}
      sx={{
        marginTop: isMobile ? "-80px" : "0",
      }}
    >
      <Box className="box-title">
        <Typography className="username">
          {isMobile ? <NameOfChatSP name={user?.username} handleClick={toggleRenderSide} /> : user?.username}
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
        <Box
          id="box-message"
          className={styles.boxData}
          ref={boxMessageRef}
          style={{
            display: listMessages?.length === 0 ? "flex" : "block",
            justifyContent: listMessages?.length === 0 ? "center" : "initial",
            alignItems: listMessages?.length === 0 ? "center" : "initial",
          }}
        >
          {listMessages?.length ? (
            <InfiniteScroll loadMore={fetchData} hasMore={false} loader="読み込み中..." isReverse useWindow={false}>
              {Object.keys(listMessagesShow)?.map((dateText) => (
                <Box key={dateText} sx={{ paddingBottom: "60px" }}>
                  <div className={styles.spanStartOfDay}>
                    <span>{dateText}</span>
                  </div>
                  {listMessagesShow[dateText].map((message: any, index: number) =>
                    message?.sender_id !== userId ? (
                      <BoxMyChat
                        key={index}
                        allInfoMessage={message}
                        time={formatChatDate(message?.created_at)}
                        isErrorMessage={!!message?.isErrorMessage}
                        resendMessage={resendMessage}
                        deleteErrorMessage={deletedMessageError}
                      />
                    ) : (
                      <BoxChatOthers key={index} allInfoMessage={message} time={formatChatDate(message?.created_at)} />
                    ),
                  )}
                </Box>
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
