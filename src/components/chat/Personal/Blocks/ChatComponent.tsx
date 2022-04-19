import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import classNames from "classnames";

import styles from "src/components/chat/chat.module.scss";
import ChatBoxLeftComponent from "src/components/chat/Personal/Blocks/ChatBoxLeftComponent";
import useViewport from "src/helpers/useViewport";
import { getListChatRooms } from "src/services/chat";

import ChatBoxRightComponent from "./ChatBoxRightComponent";

const BlockChatComponent = () => {
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const [isRenderRightSide, setIsRenderRightSide] = useState(false);

  const [listRooms, setListRooms] = useState([]);
  const [userId, setUserId] = useState(null);
  const [roomSelect, setRoomSelect] = useState({});

  useEffect(() => {
    if (isMobile) {
      setIsRenderRightSide(true);
    }
    const fetchListRooms = async () => {
      const listRoomRes = await getListChatRooms();
      if (listRoomRes?.items?.length) {
        setListRooms(listRoomRes?.items);
        setRoomSelect(listRoomRes?.items[0] || {});
        setUserId(listRoomRes?.items[0]?.user?.id);
      }
    };
    fetchListRooms();
  }, []);

  const onSelectRoom = (index: number) => {
    setIsRenderRightSide(!isRenderRightSide);

    if (listRooms[index]?.user?.id !== userId) {
      setRoomSelect(listRooms[index]);
      setUserId(listRooms[index]?.user?.id);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide) ? (
        <ChatBoxLeftComponent listRooms={listRooms} userId={userId} onSelectRoom={onSelectRoom} />
      ) : null}
      {!isMobile || (isMobile && isRenderRightSide) ? (
        <ChatBoxRightComponent
          isMobile={isMobile}
          toggleRenderSide={toggleRenderSide}
          userId={userId}
          roomSelect={roomSelect}
        />
      ) : null}
    </Grid>
  );
};

export default BlockChatComponent;
