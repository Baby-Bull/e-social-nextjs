/* eslint-disable */
import React, { useEffect, useRef, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useRouter } from "next/router";
import { Button, Select, Avatar, Typography, Paper, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "src/components/layouts/layout.module.scss";
// eslint-disable-next-line import/order
import theme from "src/theme";
import websocket from "src/helpers/socket";
import "react-toastify/dist/ReactToastify.css";
import { IStoreState } from "src/constants/interface";
// eslint-disable-next-line import/order
import InfiniteScroll from "react-infinite-scroll-component";
import InputCustom from "../chat/ElementCustom/InputCustom";
import { getListChatRooms, getListChatRoomsCommunity } from "src/services/chat";
import { formatChatDateRoom, sortListRoomChat } from "src/helpers/helper";
import {
  CONTENT_OF_NOTIFICATIONS,
  MODE_ROOM_CHAT,
  REACT_QUERY_KEYS,
  TYPE_OF_NOTIFICATIONS,
} from "src/constants/constants";
// eslint-disable-next-line import/order
import dayjs from "dayjs";
import {
  getListnotifications,
  readAllNotifications,
  readMessageCommunity,
  readMessagePersonal,
  readNotification,
} from "src/services/user";
import actionTypes from "src/store/actionTypes";
import { logout } from "src/services/auth";
import { useQuery } from "react-query";
import { isMobile } from "react-device-detect";
import lodashDebounce from "lodash/debounce";

interface IHeaderComponentProps {
  authPage?: boolean;
}
type UserDataInNotification = {
  id: string;
  username: string;
  profile_image: string;
};
type CommunityDataInNotification = {
  id: string;
  name: string;
  profile_image: string;
};
type DataRedirectNotification = {
  match_request_id?: string;
  user?: UserDataInNotification;
  community_join_request_id?: string;
  community_id?: string;
  community?: CommunityDataInNotification;
  comment_id?: string;
  post_id?: string;
};

const Search = styled("div")({
  marginRight: theme.spacing(2),
  backgroundColor: "#FFFFFF",
  border: "1px solid #D8D8D8",
  borderRadius: "12px",
  width: "320px",
  marginLeft: "37px",
  height: "40px",
  display: "flex",
  "@media (max-width: 1200px)": {
    display: "none",
  },
});

const SearchIconWrapper = styled("div")({
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#03BCDB",
  zIndex: "99999",
  padding: "11px 8px 7px 17px",
});

const StyledInputBase = styled(InputBase)({
  "& .MuiInputBase-input": {
    width: "150px",
    marginRight: "8px",
    height: "100%",
  },
});

const StyledButtonList = styled(Button)({
  color: theme.navy,
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "13.17px",
  height: "48px",
  marginLeft: "40px",
  "@media (max-width: 1200px)": {
    marginLeft: "10px",
    fontSize: "12px",
    lineHeight: "17.38px",
    height: "30px",
  },
});

const SelectCustom = styled(Select)({
  borderRadius: 6,
  width: "100%",
  height: "40px",
  color: theme.navy,
  "& fieldset": {
    border: "none",
  },
  "&:hover": {
    borderRadius: 6,
  },
  "@media (max-width: 1200px)": {
    width: "100%",
  },
  "& .MuiSelect-select": {
    position: "relative",
    fontSize: 14,
    padding: "10px 11px",
    borderRadius: "12px",
    fontFamily: "Noto Sans",
  },
});

const MenuItemCustom = styled(MenuItem)({
  padding: "8px 0",
  width: "160px",
});

const IconButtonCustom = styled(IconButton)({
  padding: 0,
});

const TypoLabel = styled(Typography)({
  fontSize: "12px",
  lineHeight: "17.38px",
  color: theme.navy,
  marginLeft: "4px",
});

const TabsCustom = styled(TabList)(() => ({
  padding: 0,
  color: "black",
  fontSize: "20px",
  fontWeight: 500,

  "& .MuiTab-root": {
    fontSize: "20px",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  "& .Mui-selected": {
    color: theme.blue,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.blue,
  },
}));

const typeSearchs = [
  {
    value: "エンジニア",
    label: "エンジニア",
  },
  {
    value: "コミュニティ",
    label: "コミュニティ",
  },
];

const HeaderComponent: React.FC<IHeaderComponentProps> = ({ authPage }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const fullText = router.query?.fulltext;
  const auth = useSelector((state: IStoreState) => state.user);
  const notifications = useSelector((state: IStoreState) => state.notifications);
  const listRoomsChatTemp = useSelector((state: IStoreState) => state.listrooms);

  //block function Messages ***********************************************************
  const listRoomsPersonalRef = useRef([]);
  const listRoomsCommunityRef = useRef([]);
  const [menuChatAnchorEl, setMenuChatAnchorEl] = React.useState(null);
  const [statusChatMenu, setStatusChatMenu] = useState(false);
  const isMenuChatOpen = Boolean(menuChatAnchorEl);
  const [valueTabChatMessage, setValueTabChatMessage] = React.useState("1");
  const [statusAuthPage, setStatusAuthPage] = React.useState(false);
  const inputSearchMenuChatPersonal = useRef(null);
  const inputSearchMenuChatCommunity = useRef(null);

  const [searchChatRoomPersonal, setSearchChatRoomPersonal] = useState({
    search: null,
    cursor: null,
  });
  const [searchChatRoomCommunity, setSearchChatRoomCommunity] = useState({
    search: null,
    cursor: null,
  });
  const debounceSearchRooms = useCallback(
    lodashDebounce((searchValue: string, mode: string) => {
      mode === MODE_ROOM_CHAT.community
        ? setSearchChatRoomCommunity({
          search: searchValue,
          cursor: null,
        })
        : setSearchChatRoomPersonal({
          search: searchValue,
          cursor: null,
        });
    }, 700),
    [],
  );
  const handleTypingForInputSearch = (valueInputSearchTemp: any, mode: string) => {
    debounceSearchRooms(valueInputSearchTemp, mode);
  };

  const { data: listRoomsChatResQuery } = useQuery(
    [REACT_QUERY_KEYS.LIST_ROOMS, searchChatRoomCommunity, searchChatRoomPersonal],
    async () => {
      let draftList1,
        draftList2 = (draftList1 = {
          items: [],
          hasMore: false,
          cursor: "",
        });
      if (auth?.community_count !== undefined) {
        draftList1 = await getListChatRooms(searchChatRoomPersonal?.search, searchChatRoomPersonal?.cursor);
        draftList2 = await getListChatRoomsCommunity(searchChatRoomCommunity?.search, searchChatRoomCommunity?.cursor);
      }
      return {
        roomsPersonal: draftList1,
        roomsCommunity: draftList2,
      };
    },
    { refetchOnWindowFocus: false },
  );
  useEffect(() => {
    const user = auth?.username;
    if (user === undefined || authPage === true) {
      setStatusAuthPage(true);
    }
    const listRoomsPersonalSorted = sortListRoomChat(listRoomsChatResQuery?.roomsPersonal?.items || []);
    const listRoomsCommunitySorted = sortListRoomChat(listRoomsChatResQuery?.roomsCommunity?.items || []);
    dispatch({
      type: actionTypes.UPDATE_LIST_ROOMS,
      payload: {
        ...listRoomsChatTemp,
        itemsPersonal: listRoomsPersonalSorted,
        itemsCommunity: listRoomsCommunitySorted,
        hasMorePersonal: listRoomsChatResQuery?.roomsPersonal?.hasMore,
        hasMoreCommunity: listRoomsChatResQuery?.roomsCommunity?.hasMore,
        cursorPersonal: listRoomsChatResQuery?.roomsPersonal?.cursor,
        cursorCommunity: listRoomsChatResQuery?.roomsCommunity?.cursor,
      },
    });
  }, [listRoomsChatResQuery, auth]);

  useEffect(() => {
    listRoomsPersonalRef.current = listRoomsChatTemp?.itemsPersonal;
    listRoomsCommunityRef.current = listRoomsChatTemp?.itemsCommunity;
  }, [listRoomsChatTemp?.itemsPersonal, listRoomsChatTemp?.itemsCommunity]);

  const updateLastMessageOfListRooms = async (message: any) => {
    let hasChatRoomExist = false;
    const sourceRoomsTemp = message?.community ? listRoomsCommunityRef : listRoomsPersonalRef;
    const listRoomTemp = sortListRoomChat(
      sourceRoomsTemp.current?.map((item) => {
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
    if (message?.community) {
      dispatch({
        type: actionTypes.UPDATE_LIST_ROOMS,
        payload: {
          ...listRoomsChatTemp,
          itemsCommunity: listRoomTemp,
          //unread_count: listRoomsChatTemp?.unread_count + 1,
        },
      });
    } else {
      dispatch({
        type: actionTypes.UPDATE_LIST_ROOMS,
        payload: {
          ...listRoomsChatTemp,
          itemsPersonal: listRoomTemp,
          //unread_count: listRoomsChatTemp?.unread_count + 1,
        },
      });
    }
    if (!hasChatRoomExist) {
      if (message?.community) {
        const listRoomTemp = sortListRoomChat([
          {
            id: message.chat_room_id,
            user: message?.user || {},
            community: message?.community || {},
            last_chat_message_at: new Date().toISOString(),
            last_chat_message_received: message.content,
          },
          ...listRoomsCommunityRef.current,
        ]);
        dispatch({
          type: actionTypes.UPDATE_LIST_ROOMS,
          payload: {
            ...listRoomsChatTemp,
            itemsCommunity: listRoomTemp,
            //unread_count: listRoomsChatTemp?.unread_count + 1,
          },
        });
      } else {
        const listRoomTemp = sortListRoomChat([
          {
            id: message.chat_room_id,
            user: message?.user || {},
            last_chat_message_at: new Date().toISOString(),
            last_chat_message_received: message.content,
          },
          ...listRoomsPersonalRef.current,
        ]);
        dispatch({
          type: actionTypes.UPDATE_LIST_ROOMS,
          payload: {
            ...listRoomsChatTemp,
            itemsPersonal: listRoomTemp,
            //unread_count: listRoomsChatTemp?.unread_count + 1,
          },
        });
      }
    }
  };
  const loadMoreMessagePersonal = async () => {
    const res = await getListChatRooms(searchChatRoomPersonal?.search, listRoomsChatTemp?.cursorPersonal, 10);
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
  const loadMoreMessageCommunity = async () => {
    const res = await getListChatRoomsCommunity(
      searchChatRoomCommunity?.search,
      listRoomsChatTemp?.cursorCommunity,
      10,
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
  const handleMenuChatClose = () => {
    setMenuChatAnchorEl(null);
    setStatusChatMenu(false);
  };
  const handleOpenMenuChat = (event: any) => {
    if (isMobile) {
      router.push("/chat/personal");
    } else {
      setMenuChatAnchorEl(event.currentTarget);
      setStatusChatMenu(true);
    }
    //dispatch({ type: actionTypes.REMOVE_UNREAD_LISTROOMS_COUNT });
  };
  const handleChangeTabMessage = (event, newValue) => {
    setValueTabChatMessage(newValue);
  };
  //end block function Messages *************************************************

  //block function Notifications ********************************************
  const [notifyAnchorEl, setNotifyAnchorEl] = React.useState(null);
  const [statusNotify, setStatusNotify] = useState(false);
  const isNotifyMenuOpen = Boolean(notifyAnchorEl);
  useEffect(() => {
    if (auth?.community_count !== undefined) {
      const getNotis = async () => {
        const res = await getListnotifications(10, "");
        dispatch({ type: actionTypes.UPDATE_NOTIFICATIONS, payload: res });
      };
      !notifications?.items_count && getNotis();
    }
  }, [auth]);
  const handleNotifyMenuClose = () => {
    setNotifyAnchorEl(null);
    setStatusNotify(false);
  };
  const handleNotifyOpenMenu = async (event: any) => {
    setNotifyAnchorEl(event.currentTarget);
    setStatusNotify(true);
    notifications?.unread_count > 0 && (await readAllNotifications());
    dispatch({
      type: actionTypes.UPDATE_NOTIFICATIONS,
      payload: {
        ...notifications,
        unread_count: 0,
      },
    });
  };
  const loadMoreNotifications = async () => {
    const res = await getListnotifications(10, notifications?.cursor);
    dispatch({
      type: actionTypes.UPDATE_NOTIFICATIONS,
      payload: {
        ...notifications,
        // eslint-disable-next-line no-unsafe-optional-chaining
        items: [...notifications.items, ...res?.items],
        cursor: res?.cursor,
        hasMore: res?.hasMore,
      },
    });
  };
  const handleReadNotification = async (idNoti: string, index: number) => {
    await readNotification(idNoti);
    let tempArray = notifications?.items;
    tempArray[index] = {
      ...tempArray[index],
      is_read: true,
    };
    dispatch({
      type: actionTypes.UPDATE_NOTIFICATIONS,
      payload: {
        ...notifications,
        items: tempArray,
      },
    });
  };
  const handleRedirectNotification = (typeOfMessage: string, dataOfMessage: DataRedirectNotification) => {
    switch (typeOfMessage) {
      case "new_matching_request":
        router.push("/matching?type=received");
        break;
      case "matching_request_accepted":
        router.push("/matching?type=matched");
        break;
      case "new_community_join_request":
        router.push(`/community/setting/${dataOfMessage?.community_id}`);
        break;
      case "community_join_request_accepted":
        router.push(`/community/${dataOfMessage?.community?.id}`);
        break;
      case "new_comment_in_post":
        router.push(`/community/${dataOfMessage?.community_id}/post/detail/${dataOfMessage?.post_id}`);
        break;
      case "new_recommend_user":
        router.push(`/profile/${dataOfMessage?.user?.id}`);
        break;
      case "tagged_in_comment":
        router.push(`/community/${dataOfMessage?.community_id}/post/detail/${dataOfMessage?.post_id}`);
        break;
      default:
        break;
    }
  };
  //end block function Notifications ***************************************

  // notification browser ******************************************
  function notify(title: string, body: any, image: any) {
    new Notification(title, {
      body,
      icon: image,
    });
  }
  const customizeContentNotificationBrowser = (
    typeOfNotification: string,
    userName: string,
    postName: string,
    label1: string,
    label2: string,
  ) => {
    // add labels or other arguments for this function if have more than 2 labels to create string content
    // add other cases to modify notifications's content
    switch (typeOfNotification) {
      case TYPE_OF_NOTIFICATIONS[4]:
        return userName + label1 + postName + label2;
      default:
        return label1;
    }
  };
  useEffect(() => {
    const wsHandler = (message: any) => {
      if (!message?.metadata) {
        updateLastMessageOfListRooms(message);
        if (!isMobile) {
          if (Notification.permission === "granted") {
            notify(
              `${message?.user?.username}`,
              message?.content_type === "text" ? `${message.content}` : "添付ファイル",
              `${message?.user?.profile_image}`,
            );
          }
        }
      } else {
        dispatch({
          type: actionTypes.UPDATE_NOTIFICATIONS,
          payload: {
            ...notifications,
            items: [message, ...notifications?.items],
            //unread_count: notifications?.unread_count + 1,
          },
        });
        if (!isMobile) {
          if (Notification.permission === "granted") {
            notify(
              `${message?.metadata?.user?.username || message?.metadata?.community?.name}`,
              customizeContentNotificationBrowser(
                message?.notification_type,
                message?.metadata?.user?.username || message?.metadata?.community?.name,
                message?.metadata?.post_id,
                CONTENT_OF_NOTIFICATIONS[message?.notification_type]?.label,
                CONTENT_OF_NOTIFICATIONS[message?.notification_type]?.label2,
              ),
              `${message?.metadata?.user?.profile_image || message?.metadata?.community?.profile_image}`,
            );
          }
        }
      }
    };
    const handleUpdateUnreadMessages = (newMessage: any) => {
      dispatch({
        type: actionTypes.UPDATE_LIST_ROOMS,
        payload: {
          ...listRoomsChatTemp,
          unread_count: newMessage.chat_room_with_unread_messages,
        },
      });
    };
    websocket.on(`get.chatRoom.message`, wsHandler);
    websocket.on(`chatRoom.new_unread`, handleUpdateUnreadMessages);
    websocket.on(`user.chat_room_with_unread_messages`, handleUpdateUnreadMessages);
    websocket.on(`get.community.chatRoom.message`, wsHandler);
    // eslint-disable-next-line array-callback-return
    TYPE_OF_NOTIFICATIONS.map((notificationType) => {
      websocket.on(`get.notification.${notificationType}`, wsHandler);
    });
    if (!isMobile) {
      if (Notification.permission === "denied" && notifications?.askPermissionNotification) {
        window.alert("You denied permission. Please change your browser settings for this page to view notifications");
        dispatch({ type: actionTypes.UPDATE_PERMISSION_NOTIFICATION });
      } else if (Notification.permission === "default" && notifications?.askPermissionNotification) {
        Notification.requestPermission();
        dispatch({ type: actionTypes.UPDATE_PERMISSION_NOTIFICATION });
      }
    }
    return () => {
      websocket.off("get.chatRoom.message", wsHandler);
      websocket.off(`get.chatRoom.new_unread`, handleUpdateUnreadMessages);
      websocket.off(`get.user.chat_room_with_unread_messages`, handleUpdateUnreadMessages);
      websocket.off("get.community.chatRoom.message", wsHandler);
      // eslint-disable-next-line array-callback-return
      TYPE_OF_NOTIFICATIONS.map((notificationType) => {
        websocket.off(`get.notification.${notificationType}`, wsHandler);
      });
    };
  }, []);

  //block function Menu ****************************************
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleOpenMenu = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  // end block function Menu ***********************************

  // block search **************************************************
  const [typeSearch, setTypeSearch] = React.useState(typeSearchs[1].label);
  const [valueSearch, setValueSearch] = useState(fullText);
  const handleChange = (event: any) => {
    setTypeSearch(event.target.value);
  };
  const handleRedirectMatching = (type: string) => {
    router.push({
      pathname: "/matching",
      query: { type },
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setValueSearch(e.target.value);
      if (typeSearch === typeSearchs[0].value) {
        router.push({
          pathname: "/search_user",
          query: { fulltext: e.target.value },
        });
      }
      if (typeSearch === typeSearchs[1].value) {
        router.push({
          pathname: "/search_community",
          query: { fulltext: e.target.value },
        });
      }
    }
  }; // end block search ***********************************

  const handleLogout = async () => {
    await logout();
    dispatch({ type: actionTypes.LOGOUT });
    window.location.href = "/login";
    router.push("/login");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ zIndex: 10001 }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        zIndex: 10001,
        top: "9px",
        "& .MuiMenu-paper": {
          width: "160px",
          borderRadius: "12px",
        },
      }}
    >
      <Box sx={{ p: "22px 0 22px 12px", borderBottom: "1px solid #D8D8D8" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={auth?.profile_image}
            alt={auth?.username}
            sx={{ width: "20px", height: "20px", mr: "4px", borderRadius: "50%" }}
          />
          <Typography fontWeight={500} fontSize={12} lineHeight="17.38px">
            マイプロフィール
          </Typography>
        </Box>
        <Button
          sx={{
            width: "124px",
            height: "32px",
            borderRadius: "4px",
            border: "0.5px solid #989EA8",
            mt: "27px",
            padding: "6px 13px",
          }}
        >
          <Link href="/my-profile" prefetch={false}>
            <a
              style={{
                color: theme.navy,
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "17.38px",
                textDecoration: "none",
              }}
            >
              {t("header.profile-editing")}
            </a>
          </Link>
        </Button>
      </Box>
      <Box sx={{ m: "20px 0 0px 12px" }} onClick={handleMenuClose}>
        <Link href="/chat/personal" prefetch={false}>
          <MenuItemCustom>
            <IconButtonCustom size="large" aria-label="show 4 new mails" color="inherit">
              <img src="/assets/images/ic_nav_profile/ic_mess.svg" alt="ic_mess" />
            </IconButtonCustom>
            <TypoLabel>{t("header.message")}</TypoLabel>
          </MenuItemCustom>
        </Link>
        <MenuItemCustom onClick={() => handleRedirectMatching("received")}>
          <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
            <img src="/assets/images/ic_nav_profile/ic_user.svg" alt="ic_user" />
          </IconButtonCustom>
          <TypoLabel>{t("header.matching-request")}</TypoLabel>
        </MenuItemCustom>
        <MenuItemCustom onClick={() => handleRedirectMatching("sent")}>
          <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
            <img src="/assets/images/ic_nav_profile/ic_hand.svg" alt="ic_hand" />
          </IconButtonCustom>
          <TypoLabel>{t("header.matching-you-applied-for")}</TypoLabel>
        </MenuItemCustom>
        <MenuItemCustom onClick={() => handleRedirectMatching("favorite")}>
          <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
            <img src="/assets/images/ic_nav_profile/ic_heart.svg" alt="ic_heart" />
          </IconButtonCustom>
          <TypoLabel>{t("header.list-people-you-want-to-talk")}</TypoLabel>
        </MenuItemCustom>
        <MenuItemCustom onClick={() => handleRedirectMatching("community")}>
          <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
            <img src="/assets/images/ic_nav_profile/ic_star.svg" alt="ic_star" />
          </IconButtonCustom>
          <TypoLabel>{t("header.participating-community")}</TypoLabel>
        </MenuItemCustom>
        <Link href="/mail-setting" prefetch={false}>
          <MenuItemCustom>
            <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
              <img src="/assets/images/ic_nav_profile/ic_setting.svg" alt="ic_setting" />
            </IconButtonCustom>
            <TypoLabel>{t("header.setting")}</TypoLabel>
          </MenuItemCustom>
        </Link>
        <MenuItemCustom onClick={handleLogout}>
          <TypoLabel>{t("header.logout")}</TypoLabel>
        </MenuItemCustom>
      </Box>
    </Menu>
  );
  const notifyMenuId = "primary-search-account-menu-notification";
  const renderNotificationMenu = (
    <Box>
      {statusNotify && (
        <Menu
          className={styles.notificationMenu}
          anchorEl={notifyAnchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          id={notifyMenuId}
          keepMounted
          open={isNotifyMenuOpen}
          onClose={handleNotifyMenuClose}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            zIndex: 10001,
            ".MuiPaper-root": {
              borderRadius: "12px !important",
            },
          }}
        >
          <InfiniteScroll
            dataLength={notifications?.items?.length || 0}
            next={loadMoreNotifications}
            hasMore={notifications?.hasMore}
            height={650}
            loader={
              <Box sx={{ display: "flex", py: "15px", justifyContent: "center" }}>
                <CircularProgress sx={{ color: theme.blue }} size={30} />
              </Box>
            }
          >
            <div className={styles.notificationMenuHeader}>お知らせ</div>
            <Box sx={{ paddingTop: "50px" }}>
              {notifications?.items?.length ? (
                notifications?.items?.map((dataMap: any, index: number) => (
                  <MenuItem
                    key={dataMap.id}
                    className={styles.notificationMenuItem}
                    onClick={async () => {
                      handleReadNotification(dataMap?.id, index);
                      handleRedirectNotification(dataMap?.notification_type, dataMap?.metadata);
                    }}
                  >
                    <div className={styles.notificationImage}>
                      <Avatar
                        alt={dataMap?.metadata?.user?.username || dataMap?.metadata?.community?.name}
                        src={dataMap?.metadata?.user?.profile_image || dataMap?.metadata?.community?.profile_image}
                        sx={{
                          width: "50px",
                          height: "50px",
                          ".MuiAvatar-img": {
                            objectFit:
                              dataMap?.metadata?.community?.profile_image == "/assets/images/logo/logo.png"
                                ? "contain!important"
                                : "cover",
                          },
                        }}
                      />
                    </div>
                    <div className={styles.notificationContents}>
                      {!dataMap.is_read ? (
                        <div className={styles.notificationContent}>
                          {
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            (dataMap?.metadata?.user?.username || dataMap?.metadata?.community?.name) +
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            CONTENT_OF_NOTIFICATIONS[dataMap?.notification_type]?.label +
                            " " +
                            (dataMap?.metadata?.post_id ? dataMap?.metadata?.post_id : "") +
                            " " +
                            CONTENT_OF_NOTIFICATIONS[dataMap?.notification_type]?.label2
                          }
                        </div>
                      ) : (
                        <div>
                          {
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            (dataMap?.metadata?.user?.username || dataMap?.metadata?.community?.name) +
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            CONTENT_OF_NOTIFICATIONS[dataMap?.notification_type]?.label +
                            " " +
                            (dataMap?.metadata?.post_id ? dataMap?.metadata?.post_id : "") +
                            " " +
                            CONTENT_OF_NOTIFICATIONS[dataMap?.notification_type]?.label2
                          }
                        </div>
                      )}
                      <div className={styles.createdTime}>
                        {new Date(dataMap?.created_at).getDate() === new Date().getDate()
                          ? dayjs(dataMap?.created_at).format("HH:mm")
                          : dayjs(dataMap?.created_at).format("YYYY/MM/DD")}
                      </div>
                    </div>
                  </MenuItem>
                ))
              ) : (
                <Box
                  sx={{
                    width: "328px",
                    display: "flex",
                    height: "550px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <b>通知はありません。</b>
                </Box>
              )}
            </Box>
          </InfiniteScroll>
        </Menu>
      )}
    </Box>
  );

  const menuChatId = "primary-search-account-menu-chat";
  const renderChatMenu = (
    <Box>
      {statusChatMenu && (
        <Menu
          anchorEl={menuChatAnchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          id={menuChatId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isMenuChatOpen}
          onClose={handleMenuChatClose}
          className={styles.menuChatDropDown}
          sx={{
            zIndex: 10001,
            "& .MuiMenu-paper": {
              borderRadius: "12px",
              height: "40em",
              overflowY: "hidden",
            },
          }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={valueTabChatMessage}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  position: "sticky",
                  top: "0",
                  background: "white",
                  zIndex: "1",
                }}
              >
                <TabsCustom variant="fullWidth" onChange={handleChangeTabMessage}>
                  <Tab label={"メッセージ"} value="1" />
                  <Tab label={"グループチャット"} value="2" />
                </TabsCustom>
              </Box>
              <TabPanel sx={{ padding: "0", width: "365px" }} value="1">
                <Box className={styles.boxSearch}>
                  <Paper
                    className={styles.inputSearch}
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}
                  >
                    <img alt="search" src="/assets/images/svg/ic_search.svg" />
                    <InputCustom
                      inputRef={inputSearchMenuChatPersonal}
                      sx={{ ml: 1, flex: 1 }}
                      // placeholder={t("chat:box-left-input-search-placeholder")}
                      // inputProps={{ "aria-label": t("chat:box-left-input-search-placeholder") }}
                      placeholder={"アカウントを検索"}
                      inputProps={{ "aria-label": "アカウントを検索" }}
                      onKeyUp={() =>
                        handleTypingForInputSearch(inputSearchMenuChatPersonal.current.value, MODE_ROOM_CHAT.personal)
                      }
                    />
                  </Paper>
                </Box>
                <Box className="box-content">
                  <ul className={styles.boxThreads}>
                    <InfiniteScroll
                      dataLength={listRoomsChatTemp?.itemsPersonal?.length || 0}
                      next={loadMoreMessagePersonal}
                      hasMore={listRoomsChatTemp?.hasMorePersonal}
                      height={495}
                      loader={
                        <Box sx={{ display: "flex", py: "15px", justifyContent: "center" }}>
                          <CircularProgress sx={{ color: theme.blue }} size={30} />
                        </Box>
                      }
                    >
                      {listRoomsChatTemp?.itemsPersonal?.length ? (
                        listRoomsChatTemp?.itemsPersonal?.map((thread, index: number) => (
                          <React.Fragment key={index}>
                            <li
                              onClick={async () => {
                                await readMessagePersonal(thread?.user?.id);
                                router.push(
                                  {
                                    pathname: "/chat/personal",
                                    query: { room: thread?.user?.id },
                                  },
                                  undefined,
                                  { shallow: false },
                                );
                                //onSelectRoom(index);
                              }}
                            >
                              <div className={`thread-item ${thread?.user?.id === "userId" ? "active" : ""}`}>
                                <div className="avatar">
                                  <Avatar
                                    alt={thread?.user?.username}
                                    src={thread?.user?.profile_image || "/assets/images/svg/avatar.svg"}
                                    sx={{ width: "50px", height: "50px", mr: "13px" }}
                                  />
                                </div>
                                <div className="thread-content">
                                  <Typography className="name">{thread?.user?.username}</Typography>
                                  <Typography
                                    className="message-hide"
                                    sx={{
                                      color: thread?.unread_message_count > 0 ? "black!important" : "#989ea8",
                                      fontWeight: thread?.unread_message_count > 0 ? "700!important" : "400",
                                    }}
                                  >
                                    {thread?.last_message_content_type === "text"
                                      ? thread?.last_chat_message_received
                                      : "添付ファイル"}
                                  </Typography>
                                </div>
                                <div className="thread-last-time">
                                  {formatChatDateRoom(thread?.last_chat_message_at)}
                                </div>
                                {/* {!isMobile && (
                                <div className="more-options">
                                  <IconButton onClick={handleClick} aria-label="more" aria-haspopup="true">
                                    <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                                  </IconButton>
                                  <ThreadDropdown
                                    open={open}
                                    handleClose={handleClose}
                                    setShowPopupReport={setShowPopupReport}
                                    setShowPopupReview={setShowPopupReview}
                                    anchorEl={anchorEl}
                                    redirectToProfile={redirectToProfile}
                                  />
                                </div>
                              )} */}
                              </div>
                            </li>
                            {/* {isMobile && (
                            <div className="more-options-SP">
                              <IconButton
                                onClick={(event: React.MouseEvent<HTMLElement>) => {
                                  handleClick(event);
                                  transferUserToLeftMobile(index);
                                }}
                                aria-label="more"
                                aria-haspopup="true"
                                sx={{
                                  position: "absolute",
                                  right: "2em",
                                  marginTop: "-2.4em",
                                  height: "40px",
                                  width: "40px",
                                  background: "white",
                                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                                }}
                              >
                                <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                              </IconButton>
                              <ThreadDropdown
                                open={open}
                                handleClose={handleClose}
                                setShowPopupReport={setShowPopupReport}
                                setShowPopupReview={setShowPopupReview}
                                anchorEl={anchorEl}
                                redirectToProfile={redirectToProfile}
                              />
                            </div>
                          )} */}
                          </React.Fragment>
                        ))
                      ) : (
                        <Box
                          sx={{
                            width: "365px",
                            display: "flex",
                            height: "550px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <b>会話なし</b>
                        </Box>
                      )}
                    </InfiniteScroll>
                  </ul>
                </Box>
              </TabPanel>
              <TabPanel sx={{ padding: "0", width: "365px" }} value="2">
                <Box className={styles.boxSearch}>
                  <Paper
                    className={styles.inputSearch}
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}
                  >
                    <img alt="search" src="/assets/images/svg/ic_search.svg" />
                    <InputCustom
                      inputRef={inputSearchMenuChatCommunity}
                      sx={{ ml: 1, flex: 1 }}
                      placeholder={"アカウントを検索"}
                      inputProps={{ "aria-label": "アカウントを検索" }}
                      onKeyUp={() =>
                        handleTypingForInputSearch(inputSearchMenuChatCommunity.current.value, MODE_ROOM_CHAT.community)
                      }
                    />
                  </Paper>
                </Box>
                <Box className="box-content">
                  <ul className={styles.boxThreads}>
                    <InfiniteScroll
                      dataLength={listRoomsChatTemp?.itemsCommunity?.length || 0}
                      next={loadMoreMessageCommunity}
                      hasMore={listRoomsChatTemp?.hasMoreCommunity}
                      height={495}
                      loader={
                        <Box sx={{ display: "flex", py: "15px", justifyContent: "center" }}>
                          <CircularProgress sx={{ color: theme.blue }} size={30} />
                        </Box>
                      }
                    >
                      {listRoomsChatTemp?.itemsCommunity?.length ? (
                        listRoomsChatTemp?.itemsCommunity?.map((thread, index: number) => (
                          <React.Fragment key={index}>
                            <li
                              onClick={async () => {
                                await readMessageCommunity(thread?.community?.id);
                                router.push(
                                  {
                                    pathname: "/chat/community",
                                    query: { room: thread?.community?.id },
                                  },
                                  undefined,
                                  { shallow: false },
                                );
                              }}
                            >
                              <div className={`thread-item ${thread?.community?.id === "communityId" ? "active" : ""}`}>
                                <div
                                  className="avatar background"
                                  style={{
                                    backgroundImage: `url(${thread?.community?.profile_image})`,
                                  }}
                                />
                                <div className="thread-content" style={{ maxWidth: "70%" }}>
                                  <Typography className="name">
                                    {thread?.community?.name}({thread?.community?.member_count})
                                  </Typography>
                                  <Typography
                                    className="message-hide"
                                    sx={{
                                      color: thread?.unread_message_count > 0 ? "black!important" : "#989ea8",
                                      fontWeight: thread?.unread_message_count > 0 ? "700!important" : "400",
                                    }}
                                  >
                                    {thread?.last_message_content_type === "text"
                                      ? thread?.last_chat_message_received
                                      : "添付ファイル"}
                                  </Typography>
                                </div>
                                <div className="thread-last-time">
                                  {thread?.last_chat_message_at ? formatChatDateRoom(thread?.last_chat_message_at) : ""}
                                </div>
                                {/* {!isMobile && (
                                <div className="more-options">
                                  <IconButton onClick={handleClick} aria-label="more" aria-haspopup="true">
                                    <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                                  </IconButton>
                                  <ThreadDropdown
                                    open={open}
                                    handleClose={handleClose}
                                    anchorEl={anchorEl}
                                    redirectToCommunity={() => redirectToCommunity(thread?.id)}
                                  />
                                </div>
                              )} */}
                              </div>
                            </li>
                            {/* {isMobile && (
                            <div className="more-options-SP">
                              <IconButton
                                aria-label="more"
                                aria-haspopup="true"
                                sx={{
                                  position: "absolute",
                                  right: "2em",
                                  marginTop: "-2.4em",
                                  height: "40px",
                                  width: "40px",
                                  background: "white",
                                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                                }}
                              >
                                <img alt="more-options" src="/assets/images/chat/more_options.svg" />
                              </IconButton>
                            </div>
                          )} */}
                          </React.Fragment>
                        ))
                      ) : (
                        <Box
                          sx={{
                            width: "365px",
                            display: "flex",
                            height: "550px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <b>会話なし</b>
                        </Box>
                      )}
                    </InfiniteScroll>
                  </ul>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Menu>
      )}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <AppBar
        position="fixed"
        sx={{
          background: "#fff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          p: { xs: 0, lg: "0 16px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { xs: "100%", xl: "1440px" },
            margin: "auto",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <a>
                <Box
                  component="img"
                  sx={{
                    width: { xs: "70px", lg: "141px" },
                    height: { xs: "20px", lg: "42px" },
                  }}
                  alt="avatar"
                  src="/assets/images/logo/logo2.png"
                />
              </a>
            </Link>
            <Box sx={{ display: { xs: "none", lg: statusAuthPage ? "none" : "block" } }}>
              <Link href="/search_user" prefetch={false}>
                <a style={{ textDecoration: "none" }}>
                  <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" />}>
                    {t("header.list-engineers")}
                  </StyledButtonList>
                </a>
              </Link>
              <Link href="/search_community" prefetch={false}>
                <a style={{ textDecoration: "none" }}>
                  <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/users.svg" />}>
                    {t("header.list-community")}
                  </StyledButtonList>
                </a>
              </Link>
            </Box>
            <Search sx={{ display: statusAuthPage ? "none" : "inherit" }}>
              <SearchIconWrapper>
                <img src="/assets/images/icon/ic_search_2.png" alt="ic_search" width="18px" height="18px" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="言語、趣味、地域"
                inputProps={{ "aria-label": "言語、趣味、地域" }}
                onKeyPress={onKeyPress}
                defaultValue={valueSearch}
              />
              <Box
                sx={{
                  width: "120px",
                  background: "#F5F5F5",
                  color: "#1A2944",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderLeft: "1px solid #D8D8D8",
                }}
              >
                <SelectCustom id="outlined-select-typeSearch" value={typeSearch} onChange={handleChange}>
                  {typeSearchs.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </SelectCustom>
              </Box>
            </Search>
          </Box>
          <Box sx={{ display: statusAuthPage ? "none" : "inherit" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ p: "12px 16px" }}
                onClick={handleOpenMenuChat}
              >
                <Badge badgeContent={listRoomsChatTemp?.unread_count} color="error">
                  <img style={{ width: "24px", height: "20px" }} src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{ p: "12px 16px" }}
                onClick={handleNotifyOpenMenu}
              >
                <Badge badgeContent={notifications?.unread_count} color="error">
                  <img style={{ width: "24px", height: "24px" }} src="/assets/images/icon/ic_bell.png" alt="ic_bell" />
                </Badge>
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconButton
                  onClick={handleOpenMenu}
                  sx={{
                    borderRadius: "50%",
                    p: "0",
                    ml: "20px",
                    height: "100%",
                  }}
                >
                  <Avatar
                    src={auth?.profile_image || "/assets/images/svg/avatar.svg"}
                    alt={auth?.username}
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", color: "#080B47" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ p: "12px 16px" }}
                onClick={handleOpenMenuChat}
              >
                <Badge badgeContent={listRoomsChatTemp?.unread_count} color="error">
                  <img style={{ width: "24px", height: "20px" }} src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleNotifyOpenMenu}
              >
                <Badge badgeContent={notifications?.unread_count} color="error">
                  <img style={{ width: "24px", height: "24px" }} src="/assets/images/icon/ic_bell.png" alt="ic_bell" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                sx={{ p: 0, ml: "33px" }}
              >
                <Avatar
                  src={auth?.profile_image || "/assets/images/svg/avatar.svg"}
                  alt={auth?.username}
                  sx={{
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
        {!statusAuthPage && (
          <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "center" }}>
            <Link href="/search_user" prefetch={false}>
              <a style={{ textDecoration: "none" }}>
                <StyledButtonList
                  startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" width="16px" height="11.33px" />}
                  sx={{ mr: { xs: "40px", md: "0" } }}
                >
                  {t("header.list-engineers")}
                </StyledButtonList>
              </a>
            </Link>
            <Link href="/search_community" prefetch={false}>
              <a style={{ textDecoration: "none" }}>
                <StyledButtonList
                  startIcon={<img alt="" src="/assets/images/svg/users.svg" width="15.36px" height="10.88px" />}
                >
                  {t("header.list-community")}
                </StyledButtonList>
              </a>
            </Link>
          </Box>
        )}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderChatMenu}
      {renderNotificationMenu}
    </Box>
  );
};

export default HeaderComponent;