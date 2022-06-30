/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useRef } from "react";
import { Box, Grid, Paper, Typography, IconButton, Tabs, Tab } from "@mui/material";
import { useTranslation } from "next-i18next";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";

import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import styles from "src/components/chat/chat.module.scss";
import { formatChatDateRoom } from "src/helpers/helper";
import theme from "src/theme";

export const TabsCustom = styled(Tabs)(() => ({
  padding: 0,
  color: "black",
  fontSize: "20px",
  fontWeight: 500,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  "& .MuiTab-root": {
    fontSize: "20px",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  "& .Mui-selected": {
    color: theme.blue,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.blue,
  },
}));

const ChatBoxLeftComponent = ({
  listRooms,
  communityId,
  onSelectRoom,
  setSearchChatRoom,
  hasMoreChatRoom,
  loadMoreChatRooms,
  isMobile,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const inputSearchRef = useRef(null);

  const debounce = useCallback(
    _.debounce((_searchVal: string) => {
      setSearchChatRoom({
        search: _searchVal,
        cursor: null,
      });
      // send the server request here
    }, 1000),
    [],
  );

  const handleOnKeyUpInputSearchRef = () => {
    debounce(inputSearchRef.current.value);
  };

  return (
    <Grid item className={styles.chatBoxLeft}>
      <Box className="box-title">
        <TabsCustom value={2} aria-label="chat-tab" variant="fullWidth">
          <Tab label={t("chat:box-left-title")} value={1} />
          <Tab label={t("chat:community-box-left-title")} value={2} />
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
            onKeyUp={handleOnKeyUpInputSearchRef}
          />
        </Paper>
      </Box>
      <Box className="box-content">
        <ul className={styles.boxThreads}>
          <InfiniteScroll loadMore={loadMoreChatRooms} hasMore={hasMoreChatRoom.hasMore} loader="" useWindow={false}>
            {listRooms?.map((thread, index: number) => (
              <React.Fragment key={index}>
                <li
                  onClick={() => {
                    router.push(
                      {
                        pathname: "/chat/community",
                        query: { room: thread?.community?.id },
                      },
                      undefined,
                      { shallow: false },
                    );
                    onSelectRoom(index);
                  }}
                >
                  <div className={`thread-item ${thread?.community?.id === communityId ? "active" : ""}`}>
                    <div className="avatar">
                      <img alt="avatar" src={thread?.community?.profile_image || "/assets/images/svg/avatar.svg"} />
                    </div>
                    <div className="thread-content">
                      <Typography className="name">
                        {thread?.community?.name}({thread?.community?.member_count})
                      </Typography>
                      <Typography className="message-hide">{thread?.last_chat_message_received}</Typography>
                    </div>
                    <div className="thread-last-time">
                      {thread?.last_chat_message_at ? formatChatDateRoom(thread?.last_chat_message_at) : ""}
                    </div>
                    {!isMobile && (
                      <div className="more-options">
                        <IconButton aria-label="more" aria-haspopup="true">
                          <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                        </IconButton>
                      </div>
                    )}
                  </div>
                </li>
                {isMobile && (
                  <div className="more-options-SP">
                    <IconButton
                      aria-label="more"
                      aria-haspopup="true"
                      sx={{
                        position: "absolute",
                        right: "2em",
                        marginTop: "-2.4em",
                        height: "40px",
                        width: "40px",
                        background: "white",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                    </IconButton>
                  </div>
                )}
              </React.Fragment>
            ))}
          </InfiniteScroll>
        </ul>
      </Box>
    </Grid>
  );
};

export default ChatBoxLeftComponent;
