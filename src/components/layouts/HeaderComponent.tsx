import React, { useState, useContext } from "react";
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
import { Button, Select, Avatar, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import { logout } from "src/services/auth";
import { AuthContext } from "context/AuthContext";
import { menuNotificationsData } from "src/components/home/mockData/mockData";
import styles from "src/components/home/home.module.scss";
import theme from "src/theme";

import "react-toastify/dist/ReactToastify.css";

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

const HeaderComponent: React.SFC<IHeaderComponentProps> = ({ authPage = false }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { auth, dispatch } = useContext(AuthContext);

  const currencies = [
    {
      value: "エンジニア",
      label: "エンジニア",
    },
    {
      value: "コミュニティ一",
      label: "コミュニティ一",
    },
  ];

  const [mess] = useState(9);
  const [notify] = useState("99+");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [notifyAnchorEl, setNotifyAnchorEl] = React.useState(null);
  const [currency, setCurrency] = React.useState(currencies[0].label);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNotifyMenuOpen = Boolean(notifyAnchorEl);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleNotifyMenuClose = () => {
    setNotifyAnchorEl(null);
  };

  const handleRedirectMatching = (type: string) => {
    router.push({
      pathname: "/matching",
      query: { type },
    });
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleOpenMenu = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleNotifyOpenMenu = (event) => {
    setNotifyAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await logout();
    dispatch({ type: "LOGOUT" });
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
            src={auth?.user?.profile?.profile_image}
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
          <Link
            underline="none"
            href="/my-profile"
            sx={{
              color: theme.navy,
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "17.38px",
            }}
          >
            {t("header.profile-editing")}
          </Link>
        </Button>
      </Box>
      <Box sx={{ m: "20px 0 0px 12px" }} onClick={handleMenuClose}>
        <Link href="/chat/personal" underline="none">
          <MenuItemCustom>
            <IconButtonCustom size="large" aria-label="show 4 new mails" color="inherit">
              <img src="/assets/images/ic_nav_profile/ic_mess.svg" alt="ic_mess" />
            </IconButtonCustom>
            <TypoLabel>{t("header.message")}</TypoLabel>
          </MenuItemCustom>
        </Link>
        <MenuItemCustom onClick={() => handleRedirectMatching("unConfirm")}>
          <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
            <img src="/assets/images/ic_nav_profile/ic_user.svg" alt="ic_user" />
          </IconButtonCustom>
          <TypoLabel>{t("header.matching-request")}</TypoLabel>
        </MenuItemCustom>
        <MenuItemCustom onClick={() => handleRedirectMatching("confirm")}>
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
        <MenuItemCustom onClick={() => handleRedirectMatching("reject")}>
          <IconButtonCustom size="large" aria-label="show 17 new notifications" color="inherit">
            <img src="/assets/images/ic_nav_profile/ic_star.svg" alt="ic_star" />
          </IconButtonCustom>
          <TypoLabel>{t("header.participating-community")}</TypoLabel>
        </MenuItemCustom>
        <Link href="/mail-setting" underline="none">
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
    >
      <div className={styles.notificationMenuHeader}>お知らせ</div>
      {menuNotificationsData.map((data) => (
        <MenuItem key={data.id} className={styles.notificationMenuItem}>
          <div className={styles.notificationImage}>
            <img alt="" src={data.image} />
          </div>
          <div className={styles.notficationContents}>
            {data.important ? (
              <div className={styles.notificationContent}>{data.content}</div>
            ) : (
              <div>{data.content}</div>
            )}
            <div className={styles.createdTime}>{data.createdTime}</div>
          </div>
        </MenuItem>
      ))}
    </Menu>
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <Box
                component="img"
                sx={{
                  width: { xs: "70px", lg: "141px" },
                  height: { xs: "20px", lg: "42px" },
                }}
                alt="avatar"
                src="/assets/images/logo/logo.png"
              />
            </Link>
            <Box sx={{ display: { xs: "none", lg: authPage ? "none" : "block" } }}>
              <Link underline="none" href="/search_user">
                <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" />}>
                  {t("header.list-engineers")}
                </StyledButtonList>
              </Link>
              <Link underline="none" href="/search_community">
                <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/users.svg" />}>
                  {t("header.list-community")}
                </StyledButtonList>
              </Link>
            </Box>
            <Search sx={{ display: authPage ? "none" : "inherit" }}>
              <SearchIconWrapper>
                <img src="/assets/images/icon/ic_search_2.png" alt="ic_search" width="18px" height="18px" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="言語、趣味、地域" inputProps={{ "aria-label": "言語、趣味、地域" }} />
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
                <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}>
                  {currencies.map((option) => (
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
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ p: "12px 16px" }}>
                <Badge badgeContent={mess} color="error">
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
                <Badge badgeContent={notify} color="error">
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
                  <img
                    src={auth?.user?.profile?.profile_image || "/assets/images/svg/avatar.svg"}
                    alt="avatar"
                    width="40"
                    height="40"
                    style={{ borderRadius: "50%" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", color: "#080B47" } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ p: "12px 16px" }}>
                <Badge badgeContent={mess} color="error">
                  <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={notify} color="error">
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
                <img
                  src={auth?.user?.profile?.profile_image || "/assets/images/svg/avatar.svg"}
                  alt="avatar"
                  width="28"
                  height="28"
                  style={{ borderRadius: "50%" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
        {!authPage && (
          <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "center" }}>
            <StyledButtonList
              startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" width="16px" height="11.33px" />}
              sx={{ mr: { xs: "40px", md: "0" } }}
            >
              {t("header.list-engineers")}
            </StyledButtonList>

            <StyledButtonList
              startIcon={<img alt="" src="/assets/images/svg/users.svg" width="15.36px" height="10.88px" />}
            >
              {t("header.list-community")}
            </StyledButtonList>
          </Box>
        )}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderNotificationMenu}
    </Box>
  );
};

export default HeaderComponent;
