/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useRef } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroller";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";
import { formatChatDateRoom } from "src/helpers/helper";

// interface IThreadDropDownProps {
//   open: boolean;
//   handleClose: () => void;
//   anchorEl: any;
// }

// const ThreadDropdown: React.SFC<IThreadDropDownProps> = ({ open, handleClose, anchorEl }) => (
//   <Menu open={open} className="dropdown-option-thread" anchorEl={anchorEl} onClose={handleClose}>
//     <MenuItem onClick={handleClose}>Menu 1</MenuItem>
//     <MenuItem onClick={handleClose}>Menu 2</MenuItem>
//     <MenuItem onClick={handleClose}>Menu 3</MenuItem>
//   </Menu>
// );

const ChatBoxLeftComponent = ({
  listRooms,
  userId,
  onSelectRoom,
  setSearchChatRoom,
  hasMoreChatRoom,
  loadMoreChatRooms,
}) => {
  const { t } = useTranslation();

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

  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Grid item className={styles.chatBoxLeft}>
      <Box className="box-title">
        <Typography className="title">{t("chat:box-left-title")}</Typography>
      </Box>
      <Box className="box-search">
        <Paper
          component="form"
          className="input-search"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}
        >
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
              <li key={index} onClick={() => onSelectRoom(index)}>
                <div className={`thread-item ${thread?.user?.id === userId ? "active" : ""}`}>
                  <div className="avatar">
                    <img alt="avatar" src={thread?.user?.profile_image || "/assets/images/svg/avatar.svg"} />
                  </div>
                  <div className="thread-content">
                    <Typography className="name">{thread?.user?.username}</Typography>
                    <Typography className="message-hide">{thread?.last_chat_message_received}</Typography>
                  </div>
                  <div className="thread-last-time">{formatChatDateRoom(thread?.last_chat_message_at)}</div>
                  {/* <div className="more-options">
                  <IconButton onClick={handleClick} aria-label="more" aria-haspopup="true">
                    <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                  </IconButton>
                  <ThreadDropdown open={open} handleClose={handleClose} anchorEl={anchorEl} />
                </div> */}
                </div>
              </li>
            ))}
          </InfiniteScroll>
        </ul>
      </Box>
    </Grid>
  );
};

export default ChatBoxLeftComponent;
