/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
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
import { getListChatRooms } from "src/services/chat";
import { formatChatDateRoom, sortListRoomChat } from "src/helpers/helper";
import { CONTENT_OF_NOTIFICATIONS, TYPE_OF_NOTIFICATIONS } from "src/constants/constants";
// eslint-disable-next-line import/order
import dayjs from "dayjs";
import { getListnotifications } from "src/services/user";
import actionTypes from "src/store/actionTypes";
import { logout } from "src/services/auth";

interface IHeaderComponentProps {
  authPage?: boolean;
}

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

const HeaderComponent: React.SFC<IHeaderComponentProps> = ({ authPage = false }) => {
  useEffect(() => {
    function notify(title, body) {
      // eslint-disable-next-line no-new
      new Notification(title, {
        body,
        icon: "/assets/images/logo/logo_footer.png",
      });
    }

    if (Notification.permission === "granted") {
      const wsHandler = (message) => {
        notify("Goodhub Notification", `${message.content}`);
        // call dispatch function here to update list noti_s in the store redux
      };
      websocket.on("get.chatRoom.message", wsHandler);
      return () => {
        websocket.off("get.chatRoom.message", wsHandler);
      };
    }
    if (Notification.permission === "denied") {
      window.alert("You denied permission. Please change your browser settings for this page to view notifications");
    } else {
      Notification.requestPermission((status) => {
        if (status === "granted") notify("Goodhub Notification", "Thank you for granting permission");
      });
    }
  }, []);

  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const fullText = router.query?.fulltext;
  const auth = useSelector((state: IStoreState) => state.user);
  const notifications = useSelector((state: IStoreState) => state.notifications);

  //block function Messages
  //const [countUnreadMessage, setCountUnreadMessage] = useState(0)
  const [listRooms, setListRooms] = useState([]);
  const listRoomRef = useRef([]);
  const [menuChatAnchorEl, setMenuChatAnchorEl] = React.useState(null);
  const [statusChatMenu, setStatusChatMenu] = useState(false);
  const isMenuChatOpen = Boolean(menuChatAnchorEl);
  // const [searchChatRoom, setSearchChatRoom] = useState({
  //   search: null,
  //   cursor: null,
  // });
  useEffect(() => {
    listRoomRef.current = listRooms;
  }, [listRooms]);
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
              last_message_content_type: message.last_message_content_type,
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
  const handleMenuChatClose = () => {
    setMenuChatAnchorEl(null);
    setStatusChatMenu(false);
  };
  const getListMessagesMenuChat = async () => {
    //const res = await getListChatRooms(searchChatRoom?.search, searchChatRoom?.cursor);
    const res = await getListChatRooms(null, "");
    setStatusChatMenu(true);
    setListRooms(res?.items);
    //setHasMoreScrollMenuChat(res?.hasMore);
  };
  const handleOpenMenuChat = (event) => {
    setMenuChatAnchorEl(event.currentTarget);
    getListMessagesMenuChat();
  };
  //end block function Messages




  //block function Notifications
  const [notifyAnchorEl, setNotifyAnchorEl] = React.useState(null);
  const [statusNotify, setStatusNotify] = useState(false);
  const isNotifyMenuOpen = Boolean(notifyAnchorEl);
  useEffect(() => {
    const getNotis = async () => {
      const res = await getListnotifications(10, "");
      dispatch({ type: actionTypes.UPDATE_NOTIFICATIONS, payload: res });
    }
    !notifications?.items_count && getNotis();
  }, [])
  const handleNotifyMenuClose = () => {
    setNotifyAnchorEl(null);
    setStatusNotify(false);
  };
  const handleNotifyOpenMenu = (event) => {
    setNotifyAnchorEl(event.currentTarget);
    setStatusNotify(true);
    dispatch({
      type: actionTypes.UPDATE_NOTIFICATIONS, payload: {
        ...notifications,
        unread_count: 0,
      }
    })
  };
  const loadMoreNotifications = async () => {
    const res = await getListnotifications(10, notifications?.cursor);
    dispatch({
      type: actionTypes.UPDATE_NOTIFICATIONS, payload: {
        ...notifications,
        // eslint-disable-next-line no-unsafe-optional-chaining
        items: [...notifications.items, ...res?.items],
        cursor: res?.cursor,
        hasMore: res?.hasMore,
      }
    })
  };
  //end block function Notifications


  // notification system
  useEffect(() => {
    function notify(title: string, body: any, image: any) {
      // eslint-disable-next-line no-new
      new Notification(title, {
        body,
        icon: image
      });
    }
    if (Notification.permission === "granted") {
      const wsHandler = (message: any) => {
        if (!message?.metadata) {
          notify(`${message?.user?.username}`, `${message.content}`, `${message?.user?.profile_image}`);
          updateLastMessageOfListRooms(message)
        }
        else {
          notify(`${message?.metadata?.user?.username}`, CONTENT_OF_NOTIFICATIONS[message?.notification_type]?.label, `${message?.metadata?.user?.profile_image || message?.metadata?.community?.profile_image}`);
          dispatch({
            type: actionTypes.UPDATE_NOTIFICATIONS, payload: {
              ...notifications,
              // eslint-disable-next-line no-unsafe-optional-chaining
              items: [...message, ...notifications?.items],
              // eslint-disable-next-line no-unsafe-optional-chaining
              unread_count: notifications?.unread_count + 1,
            }
          })
        }
      };
      websocket.on(`get.chatRoom.message`, wsHandler);
      // eslint-disable-next-line array-callback-return
      TYPE_OF_NOTIFICATIONS.map((notificationType) => {
        websocket.on(`get.notification.${notificationType}`, wsHandler);
      })
      return () => {
        websocket.off("get.chatRoom.message", wsHandler);
        // eslint-disable-next-line array-callback-return
        TYPE_OF_NOTIFICATIONS.map((notificationType) => {
          websocket.off(`get.notification.${notificationType}`, wsHandler);
        })
      };
    }
    if (Notification.permission === "denied") {
      window.alert("You denied permission. Please change your browser settings for this page to view notifications");
    }
    // else {
    //   Notification.requestPermission((status) => {
    //     if (status === "granted") notify("Goodhub Notification", "Thank you for granting permission", "");
    //   });
    // }
  }, []);

  //block function Menu
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
  // end block function Menu

  // block search 
  const [typeSearch, setTypeSearch] = React.useState(typeSearchs[0].label);
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
  };
  const handleLogout = async () => {
    await logout();
    dispatch({ type: actionTypes.LOGOUT })
    window.location.href = "/login";
    // router.push("/login");
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
          <Link href="/my-profile">
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
        <Link href="/chat/personal">
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
        <Link href="/mail-setting">
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
            ".MuiPaper-root": {
              borderRadius: "12px !important",
            },
          }}
        >
          <InfiniteScroll
            dataLength={notifications?.items?.length}
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
              {
                notifications?.items?.length ?
                  notifications?.items?.map((dataMap: any) => (
                    <MenuItem key={dataMap.id} className={styles.notificationMenuItem}>
                      <div className={styles.notificationImage}>
                        <img alt="" src={dataMap?.metadata?.user?.profile_image || dataMap?.metadata?.community?.profile_image} />
                      </div>
                      <div className={styles.notificationContents}>
                        {!dataMap.is_read ? (
                          <div className={styles.notificationContent}>{
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            dataMap?.metadata?.user?.username +
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            CONTENT_OF_NOTIFICATIONS[dataMap?.notification_type]?.label
                          }</div>
                        ) : (
                          <div>{
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            dataMap?.metadata?.user?.username +
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            CONTENT_OF_NOTIFICATIONS[dataMap?.notification_type]?.label
                          }</div>
                        )}
                        <div className={styles.createdTime}>{dayjs(dataMap.created_at).format("H:s")}</div>
                      </div>
                    </MenuItem>
                  ))
                  :
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

              }

            </Box>
          </InfiniteScroll>
        </Menu>
      )}
    </Box>
  );

  const menuChatId = "primary-search-account-menu-chat";
  const renderChatMenu = (
    <Box>
      {(statusChatMenu &&
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
            "& .MuiMenu-paper": {
              borderRadius: "12px",
              height: "40em",
              overflowY: "scroll",
            }
          }}
        >
          <Box className={styles.boxSearch}>
            <Paper className={styles.inputSearch} sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
              <img alt="search" src="/assets/images/svg/ic_search.svg" />
              <InputCustom
                //inputRef={inputSearchRef}
                sx={{ ml: 1, flex: 1 }}
                placeholder={t("chat:box-left-input-search-placeholder")}
                inputProps={{ "aria-label": t("chat:box-left-input-search-placeholder") }}
              // onKeyUp={handleOnKeyUpInputSearchRef}
              />
            </Paper>
          </Box>
          <Box className="box-content">
            <ul className={styles.boxThreads}>
              <InfiniteScroll
                dataLength={100}
                next={null}
                hasMore={false}
                loader=""
              >
                {listRooms?.map((thread, index: number) => (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => {
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
                          <img alt="avatar" src={thread?.user?.profile_image || "/assets/images/svg/avatar.svg"} />
                        </div>
                        <div className="thread-content">
                          <Typography className="name">{thread?.user?.username}</Typography>
                          {thread?.last_message_content_type === "text" ? (
                            <Typography className="message-hide">{thread?.last_chat_message_received}</Typography>
                          ) : (
                            <Typography className="message-hide">添付ファイル</Typography>
                          )}
                        </div>
                        <div className="thread-last-time">{formatChatDateRoom(thread?.last_chat_message_at)}</div>
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
                ))}
              </InfiniteScroll>
            </ul>
          </Box>
        </Menu>
      )
      }
    </Box >
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
            <Box sx={{ display: { xs: "none", lg: authPage ? "none" : "block" } }}>
              <Link href="/search_user">
                <a style={{ textDecoration: "none" }}>
                  <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" />}>
                    {t("header.list-engineers")}
                  </StyledButtonList>
                </a>
              </Link>
              <Link href="/search_community">
                <a style={{ textDecoration: "none" }}>
                  <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/users.svg" />}>
                    {t("header.list-community")}
                  </StyledButtonList>
                </a>
              </Link>
            </Box>
            <Search sx={{ display: authPage ? "none" : "inherit" }}>
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
          <Box sx={{ display: authPage ? "none" : "inherit" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ p: "12px 16px" }}
                onClick={handleOpenMenuChat}
              >
                <Badge badgeContent={0} color="error">
                  <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
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
                  <img src="/assets/images/icon/ic_bell.png" alt="ic_bell" />
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
                <Badge badgeContent={0} color="error">
                  <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleNotifyOpenMenu}
              >
                <Badge badgeContent={notifications?.unread_count} color="error">
                  <img src="/assets/images/icon/ic_bell.png" alt="ic_bell" />
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
        </Toolbar >
        {!authPage && (
          <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "center" }}>
            <Link href="/search_user">
              <a style={{ textDecoration: "none" }}>
                <StyledButtonList
                  startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" width="16px" height="11.33px" />}
                  sx={{ mr: { xs: "40px", md: "0" } }}
                >
                  {t("header.list-engineers")}
                </StyledButtonList>
              </a>
            </Link>
            <Link href="/search_community">
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
      </AppBar >
      {renderMobileMenu}
      {renderMenu}
      {renderChatMenu}
      {renderNotificationMenu}
    </Box >
  );
};

export default HeaderComponent;
