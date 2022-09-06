/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import classNames from "classnames";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import styles from "src/components/chat/chat.module.scss";
import useViewport from "src/helpers/useViewport";
import { getListChatRooms } from "src/services/chat";
import { REACT_QUERY_KEYS } from "src/constants/constants";
import { sortListRoomChat } from "src/helpers/helper";
import ChatBoxLeftComponent from "src/components/chat/Personal/Blocks/ChatBoxLeftComponent";
import websocket from "src/helpers/socket";
import { IStoreState } from "src/constants/interface";
import actionTypes from "src/store/actionTypes";

import ChatBoxRightComponent from "./ChatBoxRightComponent";
import ChatBoxRightNoDataComponent from "./ChatBoxRightNoDataComponent";

const BlockChatComponent = ({ hasData, isRenderRightSide, setIsRenderRightSide, setHasData }) => {
  const router = useRouter();
  const { room: roomQuery } = router.query;
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const dispatch = useDispatch();
  const listRoomsChatTemp = useSelector((state: IStoreState) => state.listrooms);

  const [listRooms, setListRooms] = useState([]);
  const [userId, setUserId] = useState(roomQuery);
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

  const { data: listRoomResQuery } = useQuery(
    [REACT_QUERY_KEYS.PERSONAL_CHAT.LIST_CHAT_ROOMS, searchChatRoom],
    async () => {
      const res = await getListChatRooms(searchChatRoom?.search, searchChatRoom?.cursor);
      return res;
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const updateLastMessageOfListRooms = async (message: any) => {
    console.log(message);
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
        itemsPersonal: listRoomsSorted,
      },
    });
    if (!hasChatRoomExist && message?.user) {
      const listRoomsSorted2 = sortListRoomChat([
        {
          id: message.chat_room_id,
          user: message?.user || {},
          last_chat_message_at: new Date().toISOString(),
          last_chat_message_received: message.content,
        },
        ...listRoomRef.current,
      ]);
      setListRooms(listRoomsSorted2);
      dispatch({
        type: actionTypes.UPDATE_LIST_ROOMS,
        payload: {
          ...listRoomsChatTemp,
          itemsPersonal: listRoomsSorted2,
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
  }, [userId, roomSelect]);

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
    websocket.on("get.chatRoom.message", wsHandler);
    return () => {
      websocket.off("get.chatRoom.message", wsHandler);
    };
  }, []);

  useEffect(() => {
    const listRoomSort = sortListRoomChat(listRoomResQuery?.items || []);
    setListRooms(listRoomSort);
  }, [listRoomResQuery]);

  useEffect(() => {
    // setListRooms(sortListRoomChat(listRoomResQuery?.items || []));
    if (!roomSelect?.id) {
      const roomQuerySelect = listRoomResQuery?.items?.find(
        (item: any) => item.id === roomQuery || item?.user?.id === roomQuery,
      );
      if (roomQuerySelect) {
        setRoomSelect(roomQuerySelect);
        setUserId(roomQuerySelect?.user?.id);
        setUser(roomQuerySelect?.user);
      } else {
        setRoomSelect(listRoomResQuery?.items?.[0] || {});
        setUserId(listRoomResQuery?.items?.[0]?.user?.id);
        setUser(listRoomResQuery?.items?.[0]?.user);
      }
    }
    setHasMoreChatRoom({
      cursor: listRoomResQuery?.cursor,
      hasMore: listRoomResQuery?.hasMore,
    });
  }, [listRoomResQuery, roomSelect?.id]);

  const loadMoreChatRooms = async () => {
    if (hasMoreChatRoom.cursor?.length) {
      const listRoomRes = await getListChatRooms(searchChatRoom?.search, hasMoreChatRoom.cursor);
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
      websocket.emit("chatRoom.message", payload);
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

  const onSelectRoom = (index: number) => {
    if (isMobile) setIsRenderRightSide(!isRenderRightSide);
    if (listRooms[index]?.user?.id !== userId) {
      setRoomSelect(listRooms[index]);
      setUserId(listRooms[index]?.user?.id);
      setUser(listRooms[index]?.user);
    }
  };

  const transferUserToLeftMobile = (index: number) => {
    if (listRooms[index]?.user?.id !== userId) {
      setUserId(listRooms[index]?.user?.id);
      setUser(listRooms[index]?.user);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide && hasData) ? (
        <ChatBoxLeftComponent
          listRooms={listRooms}
          userId={userId}
          user={user}
          onSelectRoom={onSelectRoom}
          transferUserToLeftMobile={transferUserToLeftMobile}
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
          userId={userId}
          user={user}
          roomSelect={roomSelect}
          sendMessage={sendMessage}
          newMessageOfRoom={newMessageOfRoom}
        />
      ) : null}
    </Grid>
  );
};

export default BlockChatComponent;
