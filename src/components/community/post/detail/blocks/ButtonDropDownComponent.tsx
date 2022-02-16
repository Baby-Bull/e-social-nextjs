import React from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Box,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Dialog,
  Link,
} from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";

interface IButtonDropDownComponentProps {
  top?: string[];
  right?: string;
}

const ButtonDropDownComponent: React.SFC<IButtonDropDownComponentProps> = ({ top, right }) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          position: "absolute",
          top: top || 13,
          right: right || 30,
        }}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
          }}
          src="/assets/images/svg/three_dot.svg"
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            border: `1px solid ${theme.blue}`,
            borderRadius: "16px",
            width: "106px",
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ fontSize: 14, py: "0px" }}>
          <Link href="/community/post/edit">
            <Typography
              sx={{
                color: theme.gray,
                fontSize: 14,
              }}
            >
              {t("community:button.dropdown.edit")}
            </Typography>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: 14, py: "0px" }} onClick={handleClickOpenDialog}>
          <Typography
            sx={{
              color: theme.gray,
              fontSize: 14,
            }}
          >
            {t("community:button.dropdown.delete")}
          </Typography>
        </MenuItem>
      </Menu>

      <Dialog
        PaperProps={{
          style: {
            borderRadius: 12,
            maxWidth: "640px",
          },
        }}
        open={openDialog}
        onClose={handleClose}
        scroll="paper"
        fullWidth={fullWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            backgroundColor: theme.whiteBlue,
            textAlign: "right",
            position: "relative",
          }}
        >
          <Fab
            variant="circular"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              top: ["7px", "10px"],
              right: ["7px", "15px"],
              width: ["30px", "inherit"],
              height: ["30px", "inherit"],
              backgroundColor: "transparent",
              boxShadow: "unset",
              "&:hover": {
                backgroundColor: "transparent",
                opacity: 0.8,
              },
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: ["24px", "22px"],
                height: ["24px", "22px"],
                display: "flex",
                justifyContent: "center",
              }}
              src="/assets/images/svg/delete-x.svg"
            />
          </Fab>
        </DialogTitle>

        <DialogContent
          sx={{
            backgroundColor: theme.whiteBlue,
            px: ["14px", "40px"],
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              pt: ["35px", "37px"],
              px: [0, "50px"],
              mb: ["22px", 0],
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                component="span"
                sx={{
                  px: ["15px", "10px"],
                  color: theme.navy,
                  fontSize: [16, 20],
                  fontWeight: 700,
                }}
              >
                {t("community:dialog.confirm-delete-title")}
              </Typography>

              <Typography
                component="span"
                sx={{
                  mt: ["35px"],
                  px: [0, "50px"],
                  fontSize: [14, 16],
                  color: theme.navy,
                }}
              >
                {t("community:dialog.note-delete-title")}
              </Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            backgroundColor: theme.whiteBlue,
            display: "flex",
            flexDirection: ["column", "row"],
            alignItems: "center",
            justifyContent: ["center", "space-around"],
            p: ["30px 45px 60px 45px", "30px 45px 55px 45px"],
            "&.MuiDialogActions-root": {
              "& > :not(:first-of-type)": {
                marginLeft: 0,
              },
            },
          }}
        >
          <ButtonComponent
            props={{
              dimension: "medium",
              bgColor: theme.gray,
            }}
            sx={{
              height: "56px",
            }}
          >
            {t("community:button.dialog.cancel")}
          </ButtonComponent>

          <ButtonComponent
            props={{
              dimension: "medium",
              bgColor: theme.blue,
            }}
            sx={{
              height: "56px",
              mt: ["40px", 0],
            }}
          >
            {t("community:button.dialog.withdraw")}
          </ButtonComponent>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ButtonDropDownComponent;
