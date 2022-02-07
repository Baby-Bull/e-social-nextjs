import React, { useState } from "react";
import { Box, Grid, IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

import styles from "src/components/chat/chat.module.scss";
import InputCustom from "src/components/chat/ElementCustom/InputCustom";

import { listThreadsMockData } from "../mockData";

interface IThreadDropDownProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: any;
}

const ThreadDropdown: React.SFC<IThreadDropDownProps> = ({ open, handleClose, anchorEl }) => (
  <Menu open={open} className="dropdown-option-thread" anchorEl={anchorEl} onClose={handleClose}>
    <MenuItem onClick={handleClose}>Menu 1</MenuItem>
    <MenuItem onClick={handleClose}>Menu 2</MenuItem>
    <MenuItem onClick={handleClose}>Menu 3</MenuItem>
  </Menu>
);

const ChatBoxLeftComponent = () => {
  const { t } = useTranslation();
  const [listThreads] = useState(listThreadsMockData);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            sx={{ ml: 1, flex: 1 }}
            placeholder={t("chat:box-left-input-search-placeholder")}
            inputProps={{ "aria-label": t("chat:box-left-input-search-placeholder") }}
          />
        </Paper>
      </Box>
      <Box className="box-content">
        <ul className={styles.boxThreads}>
          {listThreads?.map((thread, index) => (
            <li key={index}>
              <div className={`thread-item ${thread.status === 2 ? "active" : ""}`}>
                <div className="avatar">
                  <img alt="avatar" src={thread?.avatar} />
                </div>
                <div className="thread-content">
                  <Typography className="name">{thread?.name}</Typography>
                  <Typography className="message-hide">{thread?.messageHide}</Typography>
                </div>
                <div className="more-options">
                  <IconButton onClick={handleClick} aria-label="more" aria-haspopup="true">
                    <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                  </IconButton>
                  <ThreadDropdown open={open} handleClose={handleClose} anchorEl={anchorEl} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </Grid>
  );
};

export default ChatBoxLeftComponent;
