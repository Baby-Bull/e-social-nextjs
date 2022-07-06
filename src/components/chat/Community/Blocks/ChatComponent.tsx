/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import classNames from "classnames";
import { useQuery } from "react-query";

import styles from "src/components/chat/chat.module.scss";
import useViewport from "src/helpers/useViewport";
import { getListChatRoomsCommunity } from "src/services/chat";
import { REACT_QUERY_KEYS } from "src/constants/constants";
import { sortListRoomChat } from "src/helpers/helper";
import ChatBoxLeftComponent from "src/components/chat/Community/Blocks/ChatBoxLeftComponent";
import websocket from "src/helpers/socket";

import ChatBoxRightComponent from "./ChatBoxRightComponent";
import ChatBoxRightNoDataComponent from "./ChatBoxRightNoDataComponent";

const BlockChatComponent = ({ hasData, isRenderRightSide, setIsRenderRightSide, setHasData }) => {
  const router = useRouter();
  const { room: roomQuery } = router.query;
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;

  const [listRooms, setListRooms] = useState([]);
  const [communityId, setCommunityId] = useState(roomQuery);
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

  const updateLastMessageOfListRooms = async (message: any) => {
    let hasChatRoomExist = false;
    setListRooms(
      sortListRoomChat(
        listRoomRef.current?.map((item) => {
          if (item.id === message.chat_room_id) {
            hasChatRoomExist = true;
            return {
              ...item,
              last_chat_message_at: new Date().toISOString(),
              last_chat_message_received: message.content,
            };
          }
          return item;
        }),
      ),
    );
    if (!hasChatRoomExist && message?.user) {
      setListRooms(
        sortListRoomChat([
          {
            id: message.chat_room_id,
            user: message?.user || {},
            last_chat_message_at: new Date().toISOString(),
            last_chat_message_received: message.content,
          },
          ...listRoomRef.current,
        ]),
      );
    }
  };

  useEffect(() => {
    listRoomRef.current = listRooms;
    if (!hasData && listRooms?.length) {
      setHasData(true);
    }
  }, [listRooms]);

  useEffect(() => {
    chatRoomIdRef.current = roomSelect?.id || null;
  }, [communityId, roomSelect]);

  useEffect(() => {
    if (isMobile) {
      setIsRenderRightSide(true);
    }
    websocket.on("get.community.chatRoom.message", (message) => {
      if (chatRoomIdRef.current === message.chat_room_id) {
        setNewMessageOfRoom(message);
      }

      updateLastMessageOfListRooms(message);
    });
  }, []);

  const { data: listRoomResQuery } = useQuery(
    [REACT_QUERY_KEYS.COMMUNITY_CHAT.LIST_CHAT_ROOMS, searchChatRoom],
    async () => {
      const res = await getListChatRoomsCommunity(searchChatRoom?.search, searchChatRoom?.cursor);
      return res;
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    const listRoomSort = sortListRoomChat(listRoomResQuery?.items || []);
    setListRooms(
      listRoomSort?.map((room) => ({
        ...room,
        community: {
          ...room?.community,
          profile_image: room?.community?.profile_image || "/assets/images/logo/logo.png",
        },
      })),
    );
  }, [listRoomResQuery]);

  useEffect(() => {
    if (!roomSelect?.id) {
      const roomQuerySelect = listRoomResQuery?.items?.find(
        (item: any) => item.id === roomQuery || item?.community?.id === roomQuery,
      );
      if (roomQuerySelect) {
        setRoomSelect(roomQuerySelect);
        setCommunityId(roomQuerySelect?.id);
      } else {
        setRoomSelect(listRoomResQuery?.items?.[0] || {});
        setCommunityId(listRoomResQuery?.items?.[0]?.community?.id ?? roomQuery);
      }
    }
    setHasMoreChatRoom({
      cursor: listRoomResQuery?.cursor,
      hasMore: listRoomResQuery?.hasMore,
    });
  }, [listRoomResQuery, roomSelect?.id]);

  const loadMoreChatRooms = async () => {
    if (hasMoreChatRoom.cursor?.length) {
      const listRoomRes = await getListChatRoomsCommunity(searchChatRoom?.search, hasMoreChatRoom.cursor);
      setListRooms(sortListRoomChat([...listRooms, ...(listRoomRes?.items || [])]));
      setHasMoreChatRoom({
        cursor: listRoomRes?.cursor,
        hasMore: listRoomRes?.hasMore,
      });
    }
  };

  const sendTextMessage = (message: string) => {
    if (message) {
      const payload = {
        chatRoomId: roomSelect?.id,
        content: message,
        content_type: "text",
      };
      websocket.emit("community.chatRoom.message", payload);
      updateLastMessageOfListRooms({
        content: message,
        chat_room_id: roomSelect.id,
      });
    }
  };
  const onSelectRoom = (index: number) => {
    if (isMobile) setIsRenderRightSide(!isRenderRightSide);
    if (listRooms[index]?.community?.id !== communityId) {
      setRoomSelect(listRooms[index]);
      setCommunityId(listRooms[index]?.community?.id);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide) ? (
        <ChatBoxLeftComponent
          listRooms={listRooms}
          communityId={communityId}
          onSelectRoom={onSelectRoom}
          setSearchChatRoom={setSearchChatRoom}
          hasMoreChatRoom={hasMoreChatRoom}
          loadMoreChatRooms={loadMoreChatRooms}
          isMobile={isMobile}
        />
      ) : null}
      {!hasData && <ChatBoxRightNoDataComponent />}
      {hasData && (!isMobile || (isMobile && isRenderRightSide)) ? (
        <ChatBoxRightComponent
          isMobile={isMobile}
          toggleRenderSide={toggleRenderSide}
          communityId={communityId}
          roomSelect={roomSelect}
          sendTextMessage={sendTextMessage}
          newMessageOfRoom={newMessageOfRoom}
        />
      ) : null}
    </Grid>
  );
};

export default BlockChatComponent;
