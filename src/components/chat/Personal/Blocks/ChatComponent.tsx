/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import classNames from "classnames";
import dayjs from "dayjs";

import styles from "src/components/chat/chat.module.scss";
import ChatBoxLeftComponent from "src/components/chat/Personal/Blocks/ChatBoxLeftComponent";
import useViewport from "src/helpers/useViewport";
import { getListChatRooms } from "src/services/chat";
import { getToken } from "src/helpers/storage";

import ChatBoxRightComponent from "./ChatBoxRightComponent";

const BlockChatComponent = () => {
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const [isRenderRightSide, setIsRenderRightSide] = useState(false);

  const [listRooms, setListRooms] = useState([]);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [roomSelect, setRoomSelect] = useState(null);

  const [hasMoreChatRoom, setHasMoreChatRoom] = useState({
    cursor: null,
    hasMore: false,
  });

  const [newMessageOfRoom, setNewMessageOfRoom] = useState(null);

  // Search chat-room
  const [searchChatRoom, setSearchChatRoom] = useState({
    search: null,
    cursor: null,
  });

  const listRoomRef = useRef([]);
  const chatRoomIdRef = useRef(null);

  const sk = useRef(null);

  const updateLastMessageOfListRooms = async (message: any) => {
    let hasChatRoomExist = false;
    setListRooms(
      listRoomRef.current?.map((item) => {
        if (item.id === message.chat_room_id) {
          hasChatRoomExist = true;
          return {
            ...item,
            last_chat_message_at: dayjs(new Date()).toISOString(),
            last_chat_message_received: message.content,
          };
        }
        return item;
      }),
    );
    if (!hasChatRoomExist && message?.user) {
      setListRooms([
        {
          id: message.chat_room_id,
          user: message?.user || {},
          last_chat_message_at: dayjs(new Date()).toISOString(),
          last_chat_message_received: message.content,
        },
        ...listRoomRef.current,
      ]);
    }
  };

  useEffect(() => {
    listRoomRef.current = listRooms;
  }, [listRooms]);

  useEffect(() => {
    chatRoomIdRef.current = roomSelect?.id || null;
  }, [roomSelect]);

  useEffect(() => {
    if (isMobile) {
      setIsRenderRightSide(true);
    }

    sk.current = new WebSocket(`${process.env.NEXT_PUBLIC_WS}${getToken()}`);

    sk.current.addEventListener("open", () => {
      console.log("WebSocket is connected");
    });

    sk.current.addEventListener("error", (e: any) => {
      console.error("WebSocket is in error", e);
      sk.current = new WebSocket(`${process.env.NEXT_PUBLIC_WS}${getToken()}`);
    });

    sk.current.addEventListener("message", (e: any) => {
      const messageReceived = JSON.parse(e.data);
      console.log("WebSocket received a message", Object.keys(messageReceived));
      console.log(messageReceived);
      if (messageReceived["get.chatRoom.message"]) {
        const message = messageReceived["get.chatRoom.message"];
        if (chatRoomIdRef.current === message.chat_room_id) {
          setNewMessageOfRoom(message);
        }

        updateLastMessageOfListRooms(message);
      }
    });
  }, []);

  useEffect(() => {
    const fetchListRooms = async () => {
      const listRoomRes = await getListChatRooms(searchChatRoom?.search, searchChatRoom?.cursor);
      setListRooms(listRoomRes?.items || []);
      if (!roomSelect) {
        setRoomSelect(listRoomRes?.items[0] || {});
        setUserId(listRoomRes?.items[0]?.user?.id);
        setUser(listRoomRes?.items[0]?.user);
      }
      setHasMoreChatRoom({
        cursor: listRoomRes?.cursor,
        hasMore: listRoomRes?.hasMore,
      });
    };
    fetchListRooms();
  }, [searchChatRoom]);

  const loadMoreChatRooms = async () => {
    if (hasMoreChatRoom.cursor?.length) {
      const listRoomRes = await getListChatRooms(searchChatRoom?.search, hasMoreChatRoom.cursor);
      setListRooms([...listRooms, ...(listRoomRes?.items || [])]);
      setHasMoreChatRoom({
        cursor: listRoomRes?.cursor,
        hasMore: listRoomRes?.hasMore,
      });
    }
  };

  const sendTextMessage = (message: string) => {
    if (message) {
      const payload = {
        event: "chatRoom.message",
        chatRoomId: roomSelect?.id,
        content: message,
        content_type: "text",
      };
      sk.current.send(JSON.stringify(payload));
      updateLastMessageOfListRooms({
        content: message,
        chat_room_id: roomSelect.id,
      });
    }
  };
  const onSelectRoom = (index: number) => {
    setIsRenderRightSide(!isRenderRightSide);
    if (listRooms[index]?.user?.id !== userId) {
      setRoomSelect(listRooms[index]);
      setUserId(listRooms[index]?.user?.id);
      setUser(listRooms[index]?.user);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide) ? (
        <ChatBoxLeftComponent
          listRooms={listRooms}
          userId={userId}
          onSelectRoom={onSelectRoom}
          setSearchChatRoom={setSearchChatRoom}
          hasMoreChatRoom={hasMoreChatRoom}
          loadMoreChatRooms={loadMoreChatRooms}
        />
      ) : null}
      {!isMobile || (isMobile && isRenderRightSide) ? (
        <ChatBoxRightComponent
          isMobile={isMobile}
          toggleRenderSide={toggleRenderSide}
          userId={userId}
          user={user}
          roomSelect={roomSelect}
          sendTextMessage={sendTextMessage}
          newMessageOfRoom={newMessageOfRoom}
        />
      ) : null}
    </Grid>
  );
};

export default BlockChatComponent;
