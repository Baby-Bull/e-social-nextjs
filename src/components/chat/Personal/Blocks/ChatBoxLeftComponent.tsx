/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState } from "react";
import { Box, Grid, Paper, Typography, IconButton, Menu, MenuItem, Tab, Avatar, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

import PopupReportUser from "src/components/common/organisms/PopupReportUser";
import InputCustom from "src/components/common/atom-component/InputCustom";
import styles from "src/components/chat/chat.module.scss";
import { formatChatDateRoom } from "src/helpers/helper";
import theme from "src/theme";
import useDebounce from "src/customHooks/UseDebounce";
import useWindowSize from "src/customHooks/UseWindowSize";
import { IChatBoxLeftProps, IThreadDropDownProps } from "src/constants/interfaces";
import { TabsCustom } from "src/styles/customComponent";

import PopupReviewComponent from "../../../common/organisms/PopupReviewComponent";

import BlockNoDataComponent from "./NoDataComponent";

const ThreadDropdown: React.SFC<IThreadDropDownProps> = ({
  t,
  open,
  handleClose,
  anchorEl,
  redirectToProfile,
  setShowPopupReport,
  setShowPopupReview,
}) => (
  <Menu
    open={open}
    className="dropdown-option-thread"
    anchorEl={anchorEl}
    onClose={handleClose}
    keepMounted
    disablePortal
    sx={{
      top: { xs: "0", lg: "9px" },
      left: { xs: "0em", lg: "-7em" },
      "& .MuiMenu-paper": {
        borderRadius: "12px",
      },
      ".MuiMenuItem-root": {
        fontSize: "12px",
      },
      img: {
        height: "16px",
        width: "16px",
        marginRight: "7px",
        filter: `invert(67%) sepia(61%) saturate(5498%) hue-rotate(152deg) brightness(103%) contrast(98%)`,
      },
    }}
  >
    <MenuItem onClick={redirectToProfile}>
      <img src="/assets/images/svg/user_chat.svg" alt="image_to_profile" />
      {t("chat:box-left.user-profile")}
    </MenuItem>
    <MenuItem
      onClick={() => {
        setShowPopupReview(true);
        handleClose();
      }}
    >
      <img src="/assets/images/svg/review_chat.svg" alt="image_review" />
      {t("chat:box-left.write-review")}
    </MenuItem>
    <MenuItem disabled onClick={handleClose}>
      <img src="/assets/images/svg/block_chat.svg" alt="image_block" />
      {t("chat:box-left.block")}
    </MenuItem>
    <MenuItem
      onClick={() => {
        setShowPopupReport(true);
        handleClose();
      }}
    >
      <img src="/assets/images/svg/report_chat.svg" alt="image_report" />
      {t("chat:box-left.report")}
    </MenuItem>
  </Menu>
);

const ChatBoxLeftComponent: React.FC<IChatBoxLeftProps> = ({
  listRooms,
  user,
  onSelectRoom,
  transferUserToLeftMobile,
  setSearchChatRoom,
  hasMoreChatRoom,
  loadMoreChatRooms,
  isMobile,
  roomId,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const inputSearchRef = useRef(null);

  const debounce = useDebounce((value) => {
    setSearchChatRoom({
      search: value,
      cursor: null,
    });
  }, 500);

  const handleOnKeyUpInputSearchRef = () => {
    debounce(inputSearchRef.current.value);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectToProfile = () => {
    router.push(`/profile/${roomId}`, undefined, { shallow: true });
    handleClose();
  };
  const [showPopupReport, setShowPopupReport] = useState(false);
  const [showPopupReview, setShowPopupReview] = useState(false);
  const [, windowHeight] = useWindowSize();

  return (
    <Grid item className={styles.chatBoxLeft}>
      <Box className="box-title">
        <TabsCustom value={1} aria-label="chat-tab" variant="fullWidth" sx={{ border: "1px solid #e4e6eb" }}>
          <Tab label={t("chat:box-left-title")} value={1} />
          <Tab label={t("chat:community-box-left-title")} value={2} onClick={() => router.push("/chat/community")} />
        </TabsCustom>
      </Box>
      <Box className="box-search">
        <Paper className="input-search" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
          <img alt="search" src="/assets/images/svg/ic_search.svg" />
          <InputCustom
            inputRef={inputSearchRef}
            sx={{ ml: 1, flex: 1 }}
            placeholder={t("chat:box-left-input-search-placeholder")}
            inputProps={{ "aria-label": t("chat:box-left-input-search-placeholder") }}
            onChange={handleOnKeyUpInputSearchRef}
          />
        </Paper>
      </Box>
      {isMobile && listRooms?.length === 0 ? (
        <BlockNoDataComponent />
      ) : (
        <Box className="box-content">
          <ul className={styles.boxThreads}>
            <InfiniteScroll
              className={styles.listRoomsChatLeftSide}
              style={{
                height: isMobile ? `${windowHeight - 210}px` : `${windowHeight - 93.75 - 54 - 60}px`,
              }}
              dataLength={listRooms?.length || 0}
              next={loadMoreChatRooms}
              hasMore={hasMoreChatRoom}
              height={730}
              loader={
                <Box sx={{ display: "flex", py: "15px", justifyContent: "center" }}>
                  <CircularProgress sx={{ color: theme.blue }} size={30} />
                </Box>
              }
            >
              {listRooms?.map((thread, index: number) => (
                <React.Fragment key={index}>
                  <li
                    onClick={() => {
                      const newUrl = `/chat/personal?room=${thread?.id}`;
                      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, "", newUrl);
                      onSelectRoom(index);
                    }}
                  >
                    <div className={`thread-item ${thread?.id === roomId ? "active" : ""}`}>
                      <div className="avatar">
                        <Avatar
                          alt={thread?.title}
                          src={thread?.user_infos?.[0]?.profile_image || "/assets/images/svg/avatar.svg"}
                          sx={{ width: "56px", height: "56px", mr: "13px" }}
                        />
                      </div>
                      <div className="thread-content">
                        <Typography className="name">{thread?.title}</Typography>
                        <Typography
                          className="message-hide"
                          sx={{
                            color: thread?.unread_message_count > 0 ? "black!important" : "#989ea8",
                            fontWeight: thread?.unread_message_count > 0 ? "700!important" : "400",
                          }}
                        >
                          {thread?.lastestMessageType === "text" ? thread?.lastestMessage : "添付ファイル"}
                        </Typography>
                      </div>
                      <div className="thread-last-time">{formatChatDateRoom(thread?.lastestMessageAt)}</div>
                      {!isMobile && (
                        <div className="more-options">
                          <IconButton onClick={handleClick} aria-label="more" aria-haspopup="true">
                            <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                          </IconButton>
                          <ThreadDropdown
                            t={t}
                            open={open}
                            handleClose={handleClose}
                            setShowPopupReport={setShowPopupReport}
                            setShowPopupReview={setShowPopupReview}
                            anchorEl={anchorEl}
                            redirectToProfile={redirectToProfile}
                          />
                        </div>
                      )}
                    </div>
                  </li>
                  {isMobile && (
                    <div className="more-options-SP">
                      <IconButton
                        className="more-option-item"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                          handleClick(event);
                          transferUserToLeftMobile(index);
                        }}
                        aria-label="more"
                        aria-haspopup="true"
                      >
                        <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                      </IconButton>
                      <ThreadDropdown
                        t={t}
                        open={open}
                        handleClose={handleClose}
                        setShowPopupReport={setShowPopupReport}
                        setShowPopupReview={setShowPopupReview}
                        anchorEl={anchorEl}
                        redirectToProfile={redirectToProfile}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </InfiniteScroll>
          </ul>
        </Box>
      )}
      <PopupReportUser showPopup={showPopupReport} setShowPopup={setShowPopupReport} user={user} />
      <PopupReviewComponent showPopup={showPopupReview} setShowPopup={setShowPopupReview} user={user} />
    </Grid>
  );
};

export default ChatBoxLeftComponent;
