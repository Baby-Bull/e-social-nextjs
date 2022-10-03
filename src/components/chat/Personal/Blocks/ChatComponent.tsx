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
import { getListChatRooms } from "src/services/chat";
import { LIMIT_ROOMS_PER_PAGE } from "src/constants/constants";
import { sortListRoomChat } from "src/helpers/helper";
import ChatBoxLeftComponent from "src/components/chat/Personal/Blocks/ChatBoxLeftComponent";
import websocket from "src/helpers/socket";
import { IStoreState } from "src/constants/interface";
import actionTypes from "src/store/actionTypes";

import ChatBoxRightComponent from "./ChatBoxRightComponent";
import ChatBoxRightNoDataComponent from "./ChatBoxRightNoDataComponent";
import { readMessagePersonal } from "src/services/user";

const BlockChatComponent = ({ hasData, isRenderRightSide, setIsRenderRightSide, setHasData }) => {
  const router = useRouter();
  const { room: roomQuery } = router.query;
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const dispatch = useDispatch();
  const listRoomsChatTemp = useSelector((state: IStoreState) => state.listrooms);

  const [userId, setUserId] = useState(roomQuery);
  const [user, setUser] = useState({});
  const [roomSelect, setRoomSelect] = useState(null);

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
    listRoomRef.current = listRoomsChatTemp?.itemsPersonal;
    if (!hasData && listRoomsChatTemp?.itemsPersonal?.length) {
      setHasData(true);
    }
  }, [listRoomsChatTemp?.itemsPersonal]);

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

  // useEffect(() => {
  //   const listRoomSort = sortListRoomChat(listRoomResQuery?.items || []);
  //   setListRooms(listRoomSort);
  // }, [listRoomResQuery]);

  useEffect(() => {
    // setListRooms(sortListRoomChat(listRoomResQuery?.items || []));
    if (!roomSelect?.id) {
      const roomQuerySelect = listRoomsChatTemp?.itemsPersonal?.find(
        (item: any) => item.id === roomQuery || item?.user?.id === roomQuery,
      );
      if (roomQuerySelect) {
        setRoomSelect(roomQuerySelect);
        setUserId(roomQuerySelect?.user?.id);
        setUser(roomQuerySelect?.user);
      } else {
        setRoomSelect(listRoomsChatTemp?.itemsPersonal?.[0] || {});
        setUserId(listRoomsChatTemp?.itemsPersonal?.[0]?.user?.id);
        setUser(listRoomsChatTemp?.itemsPersonal?.[0]?.user);
      }
    }
  }, [listRoomsChatTemp?.itemsPersonal, roomSelect?.id]);

  const loadMoreMessagePersonal = async () => {
    const res = await getListChatRooms(searchChatRoom?.search, listRoomsChatTemp?.cursorPersonal, LIMIT_ROOMS_PER_PAGE);
    dispatch({
      type: actionTypes.UPDATE_LIST_ROOMS,
      payload: {
        ...listRoomsChatTemp,
        // eslint-disable-next-line no-unsafe-optional-chaining
        itemsPersonal: [...listRoomsChatTemp.itemsPersonal, ...res?.items],
        cursorPersonal: res?.cursor,
        hasMorePersonal: res?.hasMore,
      },
    });
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

  const onSelectRoom = async (index: number) => {
    if (isMobile) setIsRenderRightSide(!isRenderRightSide);
    (listRoomsChatTemp?.itemsPersonal[index]?.unread_message_count > 0) && await readMessagePersonal(listRoomsChatTemp?.itemsPersonal[index]?.user?.id);
    if (listRoomsChatTemp?.itemsPersonal[index]?.user?.id !== userId) {
      setRoomSelect(listRoomsChatTemp?.itemsPersonal[index]);
      setUserId(listRoomsChatTemp?.itemsPersonal[index]?.user?.id);
      setUser(listRoomsChatTemp?.itemsPersonal[index]?.user);
    }
  };

  const transferUserToLeftMobile = (index: number) => {
    if (listRoomsChatTemp?.itemsPersonal[index]?.user?.id !== userId) {
      setUserId(listRoomsChatTemp?.itemsPersonal[index]?.user?.id);
      setUser(listRoomsChatTemp?.itemsPersonal[index]?.user);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide && hasData) ? (
        <ChatBoxLeftComponent
          listRooms={listRoomsChatTemp?.itemsPersonal}
          userId={userId}
          user={user}
          onSelectRoom={onSelectRoom}
          transferUserToLeftMobile={transferUserToLeftMobile}
          setSearchChatRoom={setSearchChatRoom}
          hasMoreChatRoom={listRoomsChatTemp?.hasMorePersonal}
          loadMoreChatRooms={loadMoreMessagePersonal}
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
