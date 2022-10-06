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
import { LIMIT_ROOMS_PER_PAGE, REACT_QUERY_KEYS } from "src/constants/constants";
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

  const [communityId, setCommunityId] = useState(roomQuery);
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
    listRoomRef.current = listRoomsChatTemp?.itemsCommunity;
    if (!hasData && listRoomsChatTemp?.itemsCommunity?.length) {
      setHasData(true);
    }
  }, [listRoomsChatTemp?.itemsCommunity]);

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

  // useEffect(() => {
  //   const listRoomSort = sortListRoomChat(listRoomResQuery?.items || []);
  //   setListRooms(
  //     listRoomSort?.map((room) => ({
  //       ...room,
  //       community: {
  //         ...room?.community,
  //         profile_image: room?.community?.profile_image || "/assets/images/logo/logo.png",
  //       },
  //     })),
  //   );
  // }, [listRoomResQuery]);

  useEffect(() => {
    if (!roomSelect?.id) {
      const roomQuerySelect = listRoomsChatTemp?.itemsCommunity?.find(
        (item: any) => item.id === roomQuery || item?.community?.id === roomQuery,
      );
      if (roomQuerySelect) {
        setRoomSelect(roomQuerySelect);
        setCommunityId(roomQuerySelect?.id);
      } else {
        setRoomSelect(listRoomsChatTemp?.itemsCommunity?.[0] || {});
        setCommunityId(listRoomsChatTemp?.itemsCommunity?.[0]?.community?.id ?? roomQuery);
      }
    }
  }, [listRoomsChatTemp?.itemsCommunity, roomSelect?.id]);

  const loadMoreMessageCommunity = async () => {
    const res = await getListChatRoomsCommunity(
      searchChatRoom?.search,
      listRoomsChatTemp?.cursorCommunity,
      LIMIT_ROOMS_PER_PAGE,
    );
    dispatch({
      type: actionTypes.UPDATE_LIST_ROOMS,
      payload: {
        ...listRoomsChatTemp,
        // eslint-disable-next-line no-unsafe-optional-chaining
        itemsCommunity: [...listRoomsChatTemp.itemsCommunity, ...res?.items],
        cursorCommunity: res?.cursor,
        hasMoreCommunity: res?.hasMore,
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
    if (isMobile) setIsRenderRightSide(!isRenderRightSide);
    (listRoomsChatTemp?.itemsCommunity[index]?.unread_message_count > 0) && await readMessageCommunity(listRoomsChatTemp?.itemsCommunity[index]?.community?.id);
    if (listRoomsChatTemp?.itemsCommunity[index]?.community?.id !== communityId) {
      setRoomSelect(listRoomsChatTemp?.itemsCommunity[index]);
      setCommunityId(listRoomsChatTemp?.itemsCommunity[index]?.community?.id);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide) ? (
        <ChatBoxLeftComponent
          listRooms={listRoomsChatTemp?.itemsCommunity}
          communityId={communityId}
          onSelectRoom={onSelectRoom}
          setSearchChatRoom={setSearchChatRoom}
          hasMoreChatRoom={listRoomsChatTemp?.hasMoreCommunity}
          loadMoreChatRooms={loadMoreMessageCommunity}
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
