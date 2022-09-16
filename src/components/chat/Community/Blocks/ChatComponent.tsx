/* eslint-disable no-console */
/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import classNames from "classnames";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import styles from "src/components/chat/chat.module.scss";
import useViewport from "src/helpers/useViewport";
import { getListChatRoomsCommunity } from "src/services/chat";
import { REACT_QUERY_KEYS } from "src/constants/constants";
import { sortListRoomChat } from "src/helpers/helper";
import ChatBoxLeftComponent from "src/components/chat/Community/Blocks/ChatBoxLeftComponent";
import websocket from "src/helpers/socket";
import { IStoreState } from "src/constants/interface";
import actionTypes from "src/store/actionTypes";

import ChatBoxRightComponent from "./ChatBoxRightComponent";
import ChatBoxRightNoDataComponent from "./ChatBoxRightNoDataComponent";
import { readMessageCommunity } from "src/services/user";

const BlockChatComponent = ({ hasData, isRenderRightSide, setIsRenderRightSide, setHasData }) => {
  const router = useRouter();
  const { room: roomQuery } = router.query;
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const dispatch = useDispatch();
  const listRoomsChatTemp = useSelector((state: IStoreState) => state.listrooms);

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
    const listRoomsSorted = sortListRoomChat(
      listRoomRef.current?.map((item) => {
        if (item.id === message.chat_room_id) {
          hasChatRoomExist = true;
          return {
            ...item,
            last_chat_message_at: new Date().toISOString(),
            last_chat_message_received: message.content,
            last_message_content_type: message.content_type,
          };
        }
        return item;
      }),
    );
    setListRooms(listRoomsSorted);
    dispatch({
      type: actionTypes.UPDATE_LIST_ROOMS,
      payload: {
        ...listRoomsChatTemp,
        itemsCommunity: listRoomsSorted,
      },
    });
    if (!hasChatRoomExist && message?.user) {
      const listRoomsSorted2 = sortListRoomChat([
        {
          id: message.chat_room_id,
          user: message?.user || {},
          last_chat_message_at: new Date().toISOString(),
          last_chat_message_received: message.content,
          last_message_content_type: message.content_type,
        },
        ...listRoomRef.current,
      ]);
      setListRooms(listRoomsSorted2);
      dispatch({
        type: actionTypes.UPDATE_LIST_ROOMS,
        payload: {
          ...listRoomsChatTemp,
          itemsCommunity: listRoomsSorted2,
        },
      });
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

    const wsHandler = (message) => {
      if (chatRoomIdRef.current === message.chat_room_id) {
        setNewMessageOfRoom(message);
      }

      updateLastMessageOfListRooms(message);
    };

    websocket.on("get.community.chatRoom.message", wsHandler);

    return () => {
      websocket.off("get.chatRoom.message", wsHandler);
    };
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

  const sendMessage = (message: string, type: string = "text", fileName: string = "", fileSize: any = "") => {
    if (message) {
      const payload = {
        chatRoomId: roomSelect?.id,
        content: message,
        content_type: type,
        meta: {
          filename: fileName,
          size: fileSize,
        },
      };
      websocket.emit("community.chatRoom.message", payload);
      updateLastMessageOfListRooms({
        content: message,
        chat_room_id: roomSelect.id,
        content_type: type,
        meta: {
          filename: fileName,
          size: fileSize,
        },
      });
    }
  };
  const onSelectRoom = async (index: number) => {
    console.log(listRooms[index]);
    if (isMobile) setIsRenderRightSide(!isRenderRightSide);
    (listRooms[index]?.unread_message_count > 0) && await readMessageCommunity(listRooms[index]?.community?.id);
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
          sendMessage={sendMessage}
          newMessageOfRoom={newMessageOfRoom}
        />
      ) : null}
    </Grid>
  );
};

export default BlockChatComponent;
