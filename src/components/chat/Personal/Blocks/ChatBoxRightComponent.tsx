/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  CircularProgress,
  Dialog,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useQuery } from "react-query";
import Linkify from "react-linkify";
import InfiniteScroll from "react-infinite-scroller";
import Lightbox from "react-image-lightbox";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/common/atom-component/InputCustom";
// @ts-ignore
import PopupReportUser from "src/components/common/organisms/PopupReportUser";
import PopupReviewComponent from "src/components/common/organisms/PopupReviewComponent";
import scrollEl from "src/helpers/scrollEl";
import { getMessages, getPrivateMessages, uploadFile } from "src/services/chat";
import { formatChatDate, formatListMessages } from "src/helpers/helper";
import "react-image-lightbox/style.css";
import useWindowSize from "src/customHooks/UseWindowSize";
import { MATCHING_PURPOSE_OPTIONS, MESSAGE_CONTENT_TYPES, REACT_QUERY_KEYS } from "src/constants";
import ButtonComponent from "src/components/common/atom-component/ButtonComponent";
import socketIO from "src/helpers/socketIO";
import {
  IBoxChatProps,
  IBoxMyChatProps,
  INameOfChatSPProps,
  IThreadDropDownProps,
  IThreadShowMessErrProps,
} from "src/constants/interfaces";

const ThreadDropdown: React.SFC<IThreadDropDownProps> = ({ open, handleClose, anchorEl, t }) => (
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
    <MenuItem onClick={handleClose}>{t("chat:message-popup.edit-message")}</MenuItem>
    <MenuItem onClick={handleClose}>{t("chat:message-popup.delete-message")}</MenuItem>
  </Menu>
);

const PopupShowMassageErr: React.SFC<IThreadShowMessErrProps> = ({ open, handleClose, textMessageErr }) => (
  <Dialog onClose={handleClose} open={open}>
    <Box sx={{ p: 5 }}>{textMessageErr}</Box>
  </Dialog>
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
  const [openPopupImage, setOpenPopupImage] = useState(false);
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
          <span>{t("chat:today")}</span>
        </div>
      ) : null}
      <Box className={styles.itemMessageMyChat}>
        <IconButton
          sx={{ display: showOptionMessage ? "block" : "none" }}
          onClick={handleClick}
          aria-label="more"
          aria-haspopup="true"
        >
          <img alt="more-options" src="/assets/images/chat/more_options.svg" />
        </IconButton>
        <ThreadDropdown open={open} anchorEl={anchorEl} handleClose={handleClose} t={t} />
        <Typography className="time">{time}</Typography>
        {allInfoMessage?.content_type !== "image" && allInfoMessage?.content_type !== "file" && (
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
                {/* <Box>
                  <span>{t("chat:date-firstMessage")}</span>
                  <p>{allInfoMessage?.meeting_link?.length > 0 ? allInfoMessage?.meeting_link : t("no_info")}</p>
                </Box> */}
                <Box>
                  <span>{t("chat:content-firstMessage")}</span>
                  <p>
                    <Linkify>{allInfoMessage?.content?.length > 0 ? allInfoMessage?.content : t("no_info")}</Linkify>
                  </p>
                </Box>
              </Box>
            ) : (
              allInfoMessage?.content_type !== "image" &&
              allInfoMessage?.content_type !== "file" && <Linkify>{allInfoMessage?.content}</Linkify>
            )}
          </div>
        )}
        {allInfoMessage.content_type !== "first-message" && allInfoMessage?.content_type === "image" && (
          <Box>
            <Avatar
              src={allInfoMessage?.content}
              variant="square"
              sx={{ width: "200px", height: "200px", cursor: "pointer" }}
              onClick={() => setOpenPopupImage(true)}
            />
          </Box>
        )}
        {openPopupImage && (
          <Lightbox mainSrc={allInfoMessage?.content} onCloseRequest={() => setOpenPopupImage(false)} />
        )}
        {allInfoMessage.content_type !== "first-message" && allInfoMessage?.content_type === "file" && (
          <Box className={styles["avatar-message--wrapper"]}>
            <Avatar
              className={styles["avatar-message--item"]}
              src="/assets/images/icon/icon_file.jpg"
              variant="square"
            />
            <Box>
              <a href={allInfoMessage?.content} download className={styles.tagDownload}>
                <Box className={styles.boxChatFile}>
                  <Box>{allInfoMessage?.meta?.filename}</Box>
                </Box>
                <Box>{((allInfoMessage?.meta?.size ?? 0) / 1024).toFixed(2)} kb</Box>
              </a>
            </Box>
          </Box>
        )}
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

const BoxChatOthers: React.SFC<IBoxChatProps> = ({ time, allInfoMessage, showAvatar }) => {
  const { t } = useTranslation();
  const [openPopupImage, setOpenPopupImage] = useState(false);
  const router = useRouter();
  const redirectProfile = () => {
    router.push(`${process.env.NEXT_PUBLIC_URL_PROFILE}/profile/${allInfoMessage?.user?.id}`);
  };
  return (
    <Box className={styles.itemMsgOther}>
      {showAvatar ? (
        <Avatar
          className="avatar"
          alt={allInfoMessage?.user?.username}
          src={allInfoMessage?.user?.profile_image || "/assets/images/svg/avatar.svg"}
          onClick={redirectProfile}
          sx={{ cursor: "pointer" }}
        />
      ) : (
        <div className="avatar" />
      )}
      {allInfoMessage?.content_type !== "image" && allInfoMessage?.content_type !== "file" && (
        <div className="message-content">
          {allInfoMessage.content_type === "first-message" ? (
            <Box className="theFirstMessage">
              <Box>
                <span>{t("chat:purpose-firstMessage")}</span>
                <p>{MATCHING_PURPOSE_OPTIONS.find((item) => item?.value === allInfoMessage?.purpose)?.label ?? ""}</p>
              </Box>
              {/* <Box>
                <span>{t("chat:date-firstMessage")}</span>
                <p>{allInfoMessage?.meeting_link?.length > 0 ? allInfoMessage?.meeting_link : t("no_info")}</p>
              </Box> */}
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
      )}
      {allInfoMessage.content_type !== "first-message" && allInfoMessage?.content_type === "image" && (
        <Avatar
          src={allInfoMessage?.content}
          variant="square"
          sx={{ width: "200px", height: "200px", cursor: "pointer" }}
          onClick={() => setOpenPopupImage(true)}
        />
      )}
      {openPopupImage && <Lightbox mainSrc={allInfoMessage?.content} onCloseRequest={() => setOpenPopupImage(false)} />}
      {allInfoMessage.content_type !== "first-message" && allInfoMessage?.content_type === "file" && (
        <Box className={styles["avatar-message--wrapper"]}>
          <Avatar className={styles["avatar-message--item"]} src="/assets/images/icon/icon_file.jpg" variant="square" />
          <Box>
            <a href={allInfoMessage?.content} download className={styles.tagDownload}>
              <Box className={styles.boxChatFile}>
                <Box>{allInfoMessage?.meta?.filename}</Box>
              </Box>
              <Box>{((allInfoMessage?.meta?.size ?? 0) / 1024).toFixed(2)} kb</Box>
            </a>
          </Box>
        </Box>
      )}
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
  roomId,
  userId,
  roomSelect,
  sendMessage,
  newMessageOfRoom,
  user,
}) => {
  const { t } = useTranslation();
  const inputChatRef = useRef(null);
  const boxMessageRef = useRef(null);
  // const isFirstRender = useRef(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupErr, setShowPopupErr] = useState(false);
  const [textMessageErr, setTextMessageErr] = useState("");
  const handleShow = () => setShowPopup(true);
  const [showPopupReview, setShowPopupReview] = useState(false);
  const handleShowReview = () => setShowPopupReview(true);

  const [listMessages, setListMessages] = useState([]);
  const [sendFile, setSendFile] = useState(false);
  const [listMessagesShow, setListMessagesShow] = useState([]);

  const [hasMoreParams, setHasMoreParams] = useState({
    cursor: null,
    hasMore: false,
  });

  const [, windowHeight] = useWindowSize();

  const { data: listMessageResQuery } = useQuery(
    [REACT_QUERY_KEYS.PERSONAL_CHAT.LIST_MESSAGES, userId],
    async () => {
      const res = await getPrivateMessages(roomId || 1);
      console.log(res);
      // return {
      //   ...res,
      //   items: res?.reverse() || [],
      // };
      return res ?? res;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!userId,
      keepPreviousData: true,
    },
  );

  console.log(listMessageResQuery);
  console.log(listMessages);

  useEffect(() => {
    setListMessages([]);
    setHasMoreParams({
      cursor: null,
      hasMore: false,
    });
    setListMessages(listMessageResQuery || []);
    setHasMoreParams({
      cursor: listMessageResQuery?.cursor,
      hasMore: listMessageResQuery?.hasMore,
    });
    // inputChatRef.current.focus();
    const timeoutRef = setTimeout(() => {
      scrollEl(boxMessageRef.current);
    }, 300);
    return () => clearTimeout(timeoutRef);
  }, [listMessageResQuery]);

  const fetchData = async () => {
    if (hasMoreParams?.cursor?.length && listMessages.length) {
      // const messageData = await getMessages(userId, hasMoreParams?.cursor);
      const messageData = await getPrivateMessages(roomId);
      setListMessages([...(messageData?.reverse() || []), ...listMessages]);
      setHasMoreParams({
        cursor: messageData?.cursor,
        hasMore: messageData?.hasMore,
      });
    }
  };

  useEffect(() => {
    if (newMessageOfRoom && newMessageOfRoom?.chat_room_id === roomSelect.id) {
      setListMessages([...listMessages, newMessageOfRoom]);
      const timeoutRef = setTimeout(() => {
        scrollEl(boxMessageRef.current);
      }, 300);
      return () => clearTimeout(timeoutRef);
    }
  }, [newMessageOfRoom]);

  useEffect(() => {
    const listMessagesFormat = formatListMessages(listMessages);
    setListMessagesShow(listMessagesFormat);
  }, [listMessages]);

  const handleSendTextMessage = () => {
    const message = inputChatRef.current.value.trim();
    console.log(message);

    if (message) {
      sendMessage(message);
      setListMessages([
        ...listMessages,
        {
          id: uuidv4(),
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
    // composition of IME. fix bug on safari for japanese IME
    if (e.isComposing || e.keyCode === 229) {
      return;
    }
    if (!isMobile && !e.shiftKey && e.keyCode === 13 && e.target.value) {
      e.preventDefault();
      handleSendTextMessage();
    }
  };

  const deletedMessageError = (id: any) => {
    setListMessages(listMessages.filter((message) => message?.id !== id));
  };

  const resendMessage = (message: string, id: any) => {
    const listMessagesTmp = listMessages.filter((item) => item?.id !== id);
    if (message) {
      sendMessage(message);
      setListMessages([
        ...listMessagesTmp,
        {
          id: uuidv4(),
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
        const res = await getPrivateMessages(roomId);
        setListMessages([...(res?.reverse() || []), ...listMessages]);
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

  const sendFileOnMess = async (e) => {
    setSendFile(true);
    const file = e.currentTarget.files[0];
    if (file.size > 2097152) {
      setShowPopupErr(true);
      setTextMessageErr("2MB以下のファイルを選択してください。");
      setSendFile(false);
      return false;
    }
    const formData = new FormData();
    formData.append("file", file);
    const res = await uploadFile(formData)
      .then((data) => {
        let contentFile = {};
        let type = MESSAGE_CONTENT_TYPES.IMAGE;
        if (data?.mimetype === "image/jpg" || data?.mimetype === "image/png" || data?.mimetype === "image/jpeg") {
          contentFile = {
            content: data?.url,
            content_type: MESSAGE_CONTENT_TYPES.IMAGE,
            created_at: new Date().toISOString(),
            id: uuidv4(),
            sender_id: "123",
            isErrorMessage: !navigator.onLine,
          };
          type = MESSAGE_CONTENT_TYPES.IMAGE;
        } else {
          contentFile = {
            content: data?.url,
            content_type: MESSAGE_CONTENT_TYPES.FILE,
            created_at: new Date().toISOString(),
            id: uuidv4(),
            sender_id: "123",
            isErrorMessage: !navigator.onLine,
            meta: {
              filename: file.name,
              size: file.size,
            },
          };
          type = MESSAGE_CONTENT_TYPES.FILE;
        }
        setListMessages([...listMessages, contentFile]);
        sendMessage(data?.url, type, file.name, file.size);
        setSendFile(false);
        setTimeout(() => {
          scrollEl(boxMessageRef.current);
        }, 200);
        return data;
      })
      .catch((err) => {
        setTimeout(() => {
          setSendFile(false);
          setShowPopupErr(true);
          setTextMessageErr("エラーが発生しました。");
        }, 2000);
        return err;
      });
    return res;
  };

  const emitTyping = () => {
    socketIO.emit("typing", { isTyping: true });
    setTimeout(() => {
      socketIO.emit("typing", { isTyping: false });
    }, 3000);
  };

  const [TypingText, setTypingText] = useState("");
  socketIO.on("typing", ({ name, isTyping }) => {
    // eslint-disable-next-line no-unused-expressions
    isTyping ? setTypingText(`${name} is typing ...`) : setTypingText("");
  });

  return (
    <Grid item className={styles.chatBoxRight} sx={{ marginTop: isMobile ? "-80px" : "0" }}>
      <Box className="box-title">
        <Typography className="username">
          {isMobile ? (
            <NameOfChatSP name={user?.username ?? ""} handleClick={toggleRenderSide} />
          ) : (
            user?.username ?? ""
          )}
        </Typography>
        {/* <div className="btn-report-review">
          <ButtonComponent
            mode="info"
            size="medium"
            className="btn-chat"
            sx={{ marginRight: "1em" }}
            onClick={handleShow}
          >
            {t("chat:btn-report")}
          </ButtonComponent>
          <ButtonComponent mode="orange" size="medium" className="btn-chat" onClick={handleShowReview}>
            {isMobile ? t("chat:btn-review-sp") : t("chat:btn-review")}
          </ButtonComponent>
        </div> */}
      </Box>
      <Box className="box-content">
        <Box
          id="box-message"
          className={styles.boxData}
          ref={boxMessageRef}
          style={{
            height: isMobile ? `${windowHeight - 54 - 61}px` : `${windowHeight - 54 - 61 - 60}px`,
            display: listMessages?.length === 0 ? "flex" : "block",
            justifyContent: listMessages?.length === 0 ? "center" : "initial",
            alignItems: listMessages?.length === 0 ? "center" : "initial",
          }}
        >
          {listMessages?.length ? (
            <InfiniteScroll loadMore={fetchData} hasMore={false} loader="読み込み中..." isReverse useWindow={false}>
              {Object.keys(listMessagesShow)?.map((dateText) => (
                <Box key={dateText}>
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
                      <BoxChatOthers
                        key={index}
                        allInfoMessage={message}
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
          <Box sx={{ display: sendFile ? "flex" : "none", justifyContent: "end" }}>
            <Box className={styles["loading-circle-item"]}>
              <CircularProgress sx={{ color: "#03BCDB" }} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            marginTop: "-1.5em",
            marginLeft: "5em",
            fontSize: "10px",
          }}
        >
          {TypingText !== "" && TypingText}
        </Box>
      </Box>
      <Box className={styles.boxChat}>
        <Paper className="paper-chat">
          <InputCustom
            multiline
            className="input-chat"
            inputRef={inputChatRef}
            id="input_chat_text"
            sx={{ ml: 1, flex: 1 }}
            placeholder={t("chat:input-chat-placeholder")}
            inputProps={{ "aria-label": t("chat:input-chat-placeholder") }}
            onKeyDown={onKeyUpMessageText}
            onChange={emitTyping}
          />
          <input hidden id="icon-button-file" type="file" onChange={sendFileOnMess} />
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
      <PopupShowMassageErr
        open={showPopupErr}
        handleClose={() => setShowPopupErr(!showPopupErr)}
        textMessageErr={textMessageErr}
      />
    </Grid>
  );
};

export default ChatBoxRightComponent;
