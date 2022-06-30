/* eslint-disable jsx-a11y/label-has-associated-control */
import crypto from "crypto";

import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, IconButton, Paper, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "next-i18next";
import InfiniteScroll from "react-infinite-scroller";
import { useQuery } from "react-query";
import Linkify from "react-linkify";
import { useSelector } from "react-redux";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import scrollEl from "src/helpers/scrollEl";
import { getMessages, getMessagesCommunity } from "src/services/chat";
import { formatChatDate, formatListMessages } from "src/helpers/helper";
import { MESSAGE_CONTENT_TYPES, REACT_QUERY_KEYS } from "src/constants/constants";
import { IStoreState } from "src/constants/interface";

interface IBoxChatProps {
  avatar?: string;
  message: string;
  time: string;
  showAvatar: boolean;
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
  message,
  time,
  isStartOfDay = false,
  isErrorMessage = false,
  id,
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
          onClick={() => setShowOptionMessage(!showOptionMessage)}
        >
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

const BoxChatOthers: React.SFC<IBoxChatProps> = ({ avatar, message, time, showAvatar }) => (
  <Box className={styles.itemMsgOther}>
    {showAvatar ? <Avatar className="avatar" alt="Avatar" src={avatar} /> : <div className="avatar" />}
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
  communityId,
  roomSelect,
  sendTextMessage,
  newMessageOfRoom,
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
  const auth = useSelector((state: IStoreState) => state.user);

  useEffect(() => {
    boxMessageRef?.current?.scrollTo(0, boxMessageRef?.current?.scrollHeight);
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
    [REACT_QUERY_KEYS.COMMUNITY_CHAT.LIST_MESSAGES, communityId],
    async () => {
      const res = await getMessagesCommunity(communityId);
      return {
        ...res,
        items: res?.items?.reverse() || [],
      };
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!communityId,
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
      const res = await getMessages(communityId, hasMoreParams?.cursor);
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
          user: {
            id: auth?.id,
          },
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
          user: {
            id: auth?.id,
          },
          isErrorMessage: !navigator.onLine,
        },
      ]);
      inputChatRef.current.value = "";
    }
  };

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
          {isMobile ? (
            <NameOfChatSP name={roomSelect?.community?.name} handleClick={toggleRenderSide} />
          ) : (
            `${roomSelect?.community?.name}(${roomSelect?.community?.member_count})`
          )}
        </Typography>
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
                <Box key={dateText} sx={{ paddingBottom: "60px" }}>
                  <div className={styles.spanStartOfDay}>
                    <span>{dateText}</span>
                  </div>
                  {listMessagesShow[dateText]?.map((message: any, index: number) =>
                    message?.user?.id === auth?.id ? (
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
                        showAvatar={
                          !listMessagesShow[dateText][index + 1] ||
                          listMessagesShow[dateText][index + 1]?.user?.id !== message?.user?.id
                        }
                      />
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
    </Grid>
  );
};

export default ChatBoxRightComponent;
