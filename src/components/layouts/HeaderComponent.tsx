import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  backgroundColor: "#F4FDFF",
  border: "1px solid #03BCDB",
  borderRadius: "40px",
  [theme.breakpoints.up("xs")]: {
    width: "88px",
    marginLeft: "19px",
    height: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "240px",
    marginLeft: "37px",
    height: "40px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#03BCDB",
  zIndex: "99999",
  [theme.breakpoints.up("xs")]: {
    left: 4,
  },
  [theme.breakpoints.up("lg")]: {
    right: 8,
    left: "unset",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing("2.5px", "0", "2.5px", "0"),
      width: "50px",
      marginLeft: "30px",
      right: 0,
      fontSize: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(1, 0, "6px", 0),
      width: "180px",
      marginLeft: "20px",
    },
  },
}));

const StyledButtonList = styled(Button)(({ theme }) => ({
  color: theme.navy,
  fontSize: "16px",
  lineHeight: "13.17px",
  fontWeight: 500,
  marginLeft: "40px",
}));

// eslint-disable-next-line react/function-component-definition
export default function PrimarySearchAppBar() {
  const { t } = useTranslation();

  const [mess] = useState(9);
  const [notify] = useState("99+");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const pathLogin = "/login";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenMenu = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={mess} color="error">
            <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit" sx={{ p: "12px 16px" }}>
          <img src="/assets/images/icon/ic_setting.png" alt="ic_setting" />
        </IconButton>
        <p>Setting</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle sx={{ fill: "#03BCDB" }} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#fff", p: { xs: 0, lg: "0 16px" } }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              sx={{
                width: { xs: "70px", lg: "141px" },
                height: { xs: "20px", lg: "42px" },
              }}
              alt="avatar"
              src="/assets/images/logo/logo.png"
            />
            <div className="content-pc">
              <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" />}>
                {t("header.list-engineers")}
              </StyledButtonList>

              <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/users.svg" />}>
                {t("header.list-community")}
              </StyledButtonList>
            </div>
            <Search sx={{ display: useRouter().pathname === pathLogin ? "none" : "inherit" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="検索" inputProps={{ "aria-label": "検索" }} />
            </Search>
          </Box>
          <Box sx={{ display: useRouter().pathname === pathLogin ? "none" : "inherit" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ p: "12px 16px" }}>
                <Badge badgeContent={mess} color="error">
                  <img src="/assets/images/icon/ic_mess.png" alt="ic_mess" />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit" sx={{ p: "12px 16px" }}>
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
                  <img src="/assets/images/svg/avatar.svg" alt="avatar" width="40" height="40" />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", color: "#080B47" } }}>
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
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
