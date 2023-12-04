import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import theme from "src/theme";
import { IStoreState } from "src/constants/interfaces";
import actionTypes from "src/store/actionTypes";
import styles from "src/components/layouts/layout.module.scss";
import { logoutWithNestServer } from "src/services/auth";

const MenuItemCustom = styled(MenuItem)({
  padding: "8px 0",
  width: "160px",
});

const TypoLabel = styled(Typography)({
  fontSize: "12px",
  lineHeight: "17.38px",
  color: theme.navy,
  marginLeft: "4px",
});

const HeaderRegisterPageComponent: React.FC = () => {
  const auth = useSelector((state: IStoreState) => state.user);
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logoutWithNestServer().catch(() => null);
    dispatch({ type: actionTypes.LOGOUT });
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
      sx={{
        zIndex: 10001,
        top: "40px",
        "& .MuiMenu-paper": {
          width: "120px",
          borderRadius: "12px",
        },
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ p: "2px 0 2px 10px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuItemCustom onClick={handleLogout}>
            <TypoLabel>{t("header.logout")}</TypoLabel>
          </MenuItemCustom>
        </Box>
      </Box>
    </Menu>
  );

  return (
    <Box className={styles["headerRegister-container"]} sx={{ flexGrow: 1 }}>
      <AppBar className={styles["headerRegister-wrapper"]}>
        <Toolbar className={styles["headerRegister-wrapper--toolbar"]}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <a>
                <Box
                  className={styles["headerRegister--toolbar--img"]}
                  component="img"
                  alt="avatar"
                  src="/assets/images/logo/logo2.png"
                />
              </a>
            </Link>
          </Box>
          <Box className={styles["headerRegister--toolbar--section2"]}>
            <IconButton className={styles["headerRegister--section2--button"]} onClick={handleOpenMenu}>
              <Avatar
                className={styles["headerRegister--section2--img"]}
                src={auth?.profile_image || "/assets/images/svg/avatar.svg"}
                alt={auth?.username}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default HeaderRegisterPageComponent;
