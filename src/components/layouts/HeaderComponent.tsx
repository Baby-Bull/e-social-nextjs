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
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";
import { Button, Select } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "../../theme";

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

// eslint-disable-next-line react/function-component-definition
export default function PrimarySearchAppBar() {
  const { t } = useTranslation();
  const currencies = [
    {
      value: "",
      label: "エンジニア",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [mess] = useState(9);
  const [notify] = useState("99+");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [currency, setCurrency] = React.useState(currencies[0].label);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const pathLogin = "/login";

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/ic_computer.svg" />}>
                {t("header.list-engineers")}
              </StyledButtonList>

              <StyledButtonList startIcon={<img alt="" src="/assets/images/svg/users.svg" />}>
                {t("header.list-community")}
              </StyledButtonList>
            </Box>
            <Search sx={{ display: useRouter().pathname === pathLogin ? "none" : "inherit" }}>
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
                <img src="/assets/images/svg/avatar.svg" alt="avatar" width="28" height="28" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
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
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
