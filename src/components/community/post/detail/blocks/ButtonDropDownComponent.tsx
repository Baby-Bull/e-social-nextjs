import React from "react";
import { Avatar, IconButton, Menu, MenuItem, Divider, Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import theme from "src/theme";
import DialogConfirmComponent from "src/components/common/dialog/DialogConfirmComponent";
import { deleteCommunityPost } from "src/services/community";

interface IButtonDropDownComponentProps {
  top?: string[];
  right?: string;
}

const ButtonDropDownComponent: React.SFC<IButtonDropDownComponentProps> = ({ top, right }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectUpdatePost = () => {
    const community = router.query;
    router.push(`/community/${community?.id}/post/update/${community?.detailId}`);
  };

  const [openDialog, setOpen] = React.useState(false);
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => setOpen(false);
  const handleDialogCancel = () => {
    handleCloseDialog();
    setOpen(false);
  };
  const handleDialogOK = () => {
    const community = router.query;
    const res = deleteCommunityPost(community?.id, community?.detailId);
    if (res) {
      handleCloseDialog();
      setOpen(false);
      router.push(`/community/${community?.id}`);
    }
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
        <MenuItem sx={{ py: "0px" }}>
          <Box onClick={redirectUpdatePost}>
            <Typography
              sx={{
                color: theme.gray,
                fontSize: 14,
              }}
            >
              {t("community:button.dropdown.edit")}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ py: "0px" }} onClick={handleOpenDialog}>
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

      <DialogConfirmComponent
        title={t("community:dialog.confirm-delete-title")}
        content={t("community:dialog.note-delete-title")}
        btnLeft={t("community:button.dialog.cancel")}
        btnRight={t("community:button.dialog.withdraw")}
        isShow={openDialog}
        handleClose={handleCloseDialog}
        handleCancel={handleDialogCancel}
        handleOK={handleDialogOK}
      />
    </React.Fragment>
  );
};

export default ButtonDropDownComponent;
