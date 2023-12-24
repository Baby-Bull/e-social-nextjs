/* eslint-disable no-console */
/* eslint-disable */
import React, { useEffect, useState, useCallback, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import classNames from "classnames";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import unionBy from "lodash/unionBy";

import styles from "src/components/chat/chat.module.scss";
import useViewport from "src/helpers/useViewport";
import { getListChatRooms, getListPrivateChatRooms, getMessages } from "src/services/chat";
import { sortListRoomChat } from "src/helpers/helper";
import ChatBoxLeftComponent from "src/components/chat/Personal/Blocks/ChatBoxLeftComponent";
import websocket from "src/helpers/socket";
import actionTypes from "src/store/actionTypes";

import ChatBoxRightComponent from "./ChatBoxRightComponent";
import ChatBoxRightNoDataComponent from "./ChatBoxRightNoDataComponent";
import { getOrtherUserProfile, readMessagePersonal } from "src/services/user";
import { IChatroom, IStoreState } from "src/constants/interfaces";
import { REACT_QUERY_KEYS } from "src/constants";
import socketIO from "src/helpers/socketIO";

const BlockChatComponent = ({ isRenderRightSide, setIsRenderRightSide }) => {
  const router = useRouter();
  const { room: roomQuery, user_id } = router.query;
  // Responsive
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const dispatch = useDispatch();
  const listRoomsChatTemp = useSelector((state: IStoreState) => state.listrooms.itemsPersonal);
  const listRoomsChatCursor = useSelector((state: IStoreState) => state.listrooms.cursorPersonal);
  const hasMoreChatRooms = useSelector((state: IStoreState) => state.listrooms.hasMorePersonal);
  const ListRoomsStatic = useSelector((state: IStoreState) => state.listrooms);

  const [userId, setUserId] = useState<string | number>(user_id || listRoomsChatTemp?.[0]?.user_infos?.[0].id);
  const [roomId, setRoomId] = useState<string>(Array.isArray(roomQuery) ? roomQuery[0] : roomQuery);
  const [user, setUser] = useState({});
  const [roomSelect, setRoomSelect] = useState<IChatroom>(null);
  const auth = useSelector((state: IStoreState) => state.user);

  const [newMessageOfRoom, setNewMessageOfRoom] = useState(null);

  // Search chat-room
  const [searchChatRoom, setSearchChatRoom] = useState({
    search: null,
    cursor: null,
  });

  const { refetch: fetchChatrooms } = useQuery(
    [`${REACT_QUERY_KEYS.LIST_ROOMS}/personal`, searchChatRoom.search, searchChatRoom.cursor],
    async () => {
      // const personalChatRoomTemp = await getListChatRooms(searchChatRoom?.search, searchChatRoom?.cursor, 10);
      const personalChatRoomTemp = await getListPrivateChatRooms(searchChatRoom?.search, searchChatRoom?.cursor, 10);
      const updatedList = searchChatRoom?.cursor
        ? sortListRoomChat(unionBy(personalChatRoomTemp, listRoomsChatTemp, "id"))
        : personalChatRoomTemp;
      dispatch({
        type: actionTypes.UPDATE_LIST_PERSONAL_CHAT_ROOMS,
        payload: {
          items: updatedList,
          hasMore: personalChatRoomTemp.hasMore,
          cursor: personalChatRoomTemp.cursor,
        },
      });
      return true;
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  const updateLastMessageOfListRooms = useCallback(
    async (message: any) => {
      let tempList = [...listRoomsChatTemp];
      const chatroomIndex = tempList.findIndex((room) => room.id === message.chat_room_id);
      if (chatroomIndex > -1) {
        // chatroom exists
        tempList[chatroomIndex] = {
          ...tempList[chatroomIndex],
          lastestMessageAt: message.created_at,
          lastestMessage: message.content,
          lastestMessageType: message.content_type,
        };
      } else {
        tempList = [
          {
            id: message.chat_room_id,
            user_infos: message?.user || {},
            // community: message?.community || {},
            lastestMessageAt: message.created_at,
            lastestMessage: message.content,
          },
          ...tempList,
        ];
      }
      const listRoomTemp = sortListRoomChat(tempList);
      dispatch({
        type: actionTypes.UPDATE_LIST_PERSONAL_CHAT_ROOMS,
        payload: {
          items: listRoomTemp,
        },
      });
      if (roomSelect?.id === message.chat_room_id) {
        await readMessagePersonal(roomSelect.user_infos[0].id);
        dispatch({
          type: actionTypes.UPDATE_PERSONAL_CHATROOM_UNREAD_COUNT,
          payload: { chatRoomId: message.chat_room_id, count: 0 },
        });
      }
    },
    [listRoomsChatTemp, roomSelect?.id],
  );

  useEffect(() => {
    const wsHandler = (message: any) => {
      if (roomSelect?.id === message.chat_room_id) {
        setNewMessageOfRoom(message);
      }
      updateLastMessageOfListRooms(message);
    };
    const handleUpdatePersonalChatroomUnreadMessages = ({
      chat_room_id: chatRoomId,
      chat_message_unread_count: count,
    }) => {
      if (roomSelect?.id !== chatRoomId) {
        dispatch({
          type: actionTypes.UPDATE_PERSONAL_CHATROOM_UNREAD_COUNT,
          payload: { chatRoomId, count },
        });
      }
    };
    socketIO.on('newMessage', () => { wsHandler })
    // websocket.on("get.chatRoom.message", wsHandler);
    // websocket.on(`chatRoom.personal.new_unread`, handleUpdatePersonalChatroomUnreadMessages);
    return () => {
      socketIO.off('newMessage', () => { wsHandler })
      // websocket.off("get.chatRoom.message", wsHandler);
      // websocket.off(`chatRoom.personal.new_unread`, handleUpdatePersonalChatroomUnreadMessages);
    };
  }, [roomSelect?.id, updateLastMessageOfListRooms]);

  useLayoutEffect(() => {
    const selectedRoom = listRoomsChatTemp?.find((item: IChatroom) => item?.id === roomQuery);
    setUserId(selectedRoom?.user_infos?.[0]?.id);
    setRoomSelect(selectedRoom);
    setUser(selectedRoom?.user_infos?.[0]);

    // const checkChatroomExistFn = async () => {
    //   if (viewPort.width) {
    //     let selectedRoom = roomSelect;
    //     console.log(selectedRoom);

    //     let tempUserResult: any, tempChatroomId: any;
    //     const checkInListChatroom = listRoomsChatTemp?.findIndex((item: IChatroom) => item?.user?.id === userId);
    //     console.log(checkInListChatroom);

    //     if (checkInListChatroom > -1) {
    //       selectedRoom = listRoomsChatTemp?.find((item: IChatroom) => item?.user_infos?.[0]?.id === userId);
    //     } else {
    //       if (userId) {
    //         tempUserResult = await getOrtherUserProfile(userId);
    //         tempChatroomId = await getMessages(userId, "", 1)

    //         if (tempUserResult) {
    //           selectedRoom = {
    //             user: {
    //               id: tempUserResult?.id,
    //               username: tempUserResult?.username,
    //               profile_image: tempUserResult?.profile_image,
    //             },
    //             id: tempChatroomId?.chat_room_id
    //           }
    //         }
    //       }
    //     }

    //     if (selectedRoom) {
    //       //if (isMobile) setIsRenderRightSide(true);
    //       setRoomSelect(selectedRoom);
    //       // setUserId(selectedRoom?.user_infos?.[0]?.id);
    //       // setUser(selectedRoom?.user_infos?.[0]);
    //     }
    //     //else if (!isMobile) {
    //     else {
    //       setRoomSelect(listRoomsChatTemp?.[0] || {});
    //       // setUserId(listRoomsChatTemp?.[0]?.user_infos[0]?.id);
    //       // setUser(listRoomsChatTemp?.[0]?.user_infos?.[0]);
    //     }
    //   }
    // }
    // checkChatroomExistFn();
  }, [listRoomsChatTemp, viewPort, roomQuery]);

  useEffect(() => {
    fetchChatrooms();
  }, [searchChatRoom]);

  const loadMoreMessagePersonal = () => {
    setSearchChatRoom((currentState) => ({
      ...currentState,
      cursor: listRoomsChatCursor,
    }));
  };

  const sendMessage = async (message: string, type: string = "text", fileName: string = "", fileSize: any = "") => {
    if (message) {
      const payload = {
        chatroomId: roomSelect?.id || 1, //TO-DO: update roomId
        content: message,
        authUserId: auth.id,
        contentType: type,
        meta: {
          filename: fileName,
          size: fileSize,
        },
      };
      await socketIO.emit('sendMessageFromClient', payload)
      // websocket.emit("chatRoom.message", payload);
      updateLastMessageOfListRooms({
        user: roomSelect?.user_infos,
        content: message,
        chat_room_id: roomSelect?.id,
        content_type: type,
        created_at: new Date().toISOString(),
        meta: {
          filename: fileName,
          size: fileSize,
        },
      });
    }
  };


  useEffect(() => {
    console.log(roomId);
  }, [roomId])


  const onSelectRoom = async (index: number) => {
    if (isMobile) setIsRenderRightSide(!isRenderRightSide);
    if (listRoomsChatTemp?.[index]?.id !== roomId) {
      setRoomId(listRoomsChatTemp?.[index]?.id)
      setRoomSelect(listRoomsChatTemp[index]);
      // setUserId(listRoomsChatTemp[index]?.user?.id);
      // setUser(listRoomsChatTemp[index]?.user);
    }
    // if (listRoomsChatTemp[index]?.unread_message_count > 0) {
    //   await readMessagePersonal(listRoomsChatTemp[index].user_infos[0].id);
    //   dispatch({
    //     type: actionTypes.UPDATE_PERSONAL_CHATROOM_UNREAD_COUNT,
    //     payload: { chatRoomId: listRoomsChatTemp[index].id, count: 0 },
    //   });
    //   // dispatch({
    //   //   type: actionTypes.UPDATE_UNREAD_LISTROOMS_COUNT,
    //   //   payload: { count: ListRoomsStatic?.unread_count - 1 },
    //   // });
    // }
  };

  const transferUserToLeftMobile = (index: number) => {
    if (listRoomsChatTemp[index]?.user?.id !== userId) {
      // setUserId(listRoomsChatTemp[index]?.user?.id);
      setUser(listRoomsChatTemp[index]?.user);
    }
  };

  const toggleRenderSide = () => setIsRenderRightSide(!isRenderRightSide);

  return (
    <Grid container className={classNames(styles.chatContainerPC)}>
      {!isMobile || (isMobile && !isRenderRightSide) ? (
        <ChatBoxLeftComponent
          listRooms={listRoomsChatTemp}
          user={user}
          onSelectRoom={onSelectRoom}
          transferUserToLeftMobile={transferUserToLeftMobile}
          setSearchChatRoom={setSearchChatRoom}
          hasMoreChatRoom={hasMoreChatRooms}
          loadMoreChatRooms={loadMoreMessagePersonal}
          isMobile={isMobile}
          roomId={roomId}
        />
      ) : null}
      {(!listRoomsChatTemp?.length && !isMobile) && <ChatBoxRightNoDataComponent />}
      {/* {(!listRoomsChatTemp.length && isMobile) && <BlockNoDataComponent />} */}
      {listRoomsChatTemp?.length && (!isMobile || (isMobile && isRenderRightSide)) ? (
        <ChatBoxRightComponent
          isMobile={isMobile}
          toggleRenderSide={toggleRenderSide}
          roomId={roomId}
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
