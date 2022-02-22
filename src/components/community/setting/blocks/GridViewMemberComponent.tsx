import React from "react";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import DialogConfirmWithAvatarComponent from "src/components/common/dialog/DialogConfirmWithAvatarComponent";

import DropDownBlockUserComponent from "./DropDownBlockUserComponent";

type Type = "participated" | "block";
interface IGridViewComponentProps {
  data: any;
  type: Type;
}

const GridViewComponent: React.SFC<IGridViewComponentProps> = ({ data, type }) => {
  const { t } = useTranslation();

  const [openDialogBlock, setOpenDialogBlock] = React.useState(false);
  const handleOpenDialogBlock = () => setOpenDialogBlock(true);
  const handleCloseDialogBlock = () => setOpenDialogBlock(false);

  const [openDialogUnBlock, setOpenDialogUnBlock] = React.useState(false);
  const handleOpenDialogUnBlock = () => setOpenDialogUnBlock(true);
  const handleCloseDialogUnBlock = () => setOpenDialogUnBlock(false);

  return (
    <React.Fragment>
      <Box
        sx={{
          py: ["15px", "22px"],
          px: ["20px", "40px"],
          borderTop: [`1px solid ${theme.lightGray}`, `1px solid ${theme.lightGray}`],
          color: theme.navy,
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Box display={type === "block" && "none"}>
          <DropDownBlockUserComponent />
        </Box>

        {/* Info user (avatar, ...) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: [type === "block" ? "center" : "flex-start", "center"],
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: "64px",
                height: "100%",
              }}
              src={data.avatar}
            />

            {/* Grid right Info */}
            <Box
              sx={{
                pl: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: ["column", "row"],
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {data.name}
                </Typography>

                <Chip
                  label={data.is_representative ? "代表者" : "管理者"}
                  sx={{
                    display: !data.is_representative && !data.is_manager && "none",
                    ml: [0, "12px"],
                    mt: ["10px", 0],
                    width: "60px",
                    height: "20px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: data.is_representative ? theme.green : theme.blue,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  display: ["none", "inherit"],
                  color: theme.blue,
                  fontSize: 14,
                }}
              >
                {data.job}
              </Typography>
            </Box>
            {/* End Grid right Info */}
          </Box>

          {/* Button PC */}
          {type === "participated" ? (
            <ButtonComponent
              props={{
                bgColor: theme.gray,
                dimension: "x-small",
              }}
              sx={{
                display: ["none", !data.is_manager && "flex"],
                height: "36px",
              }}
              onClick={handleOpenDialogBlock}
            >
              {t("community:button.setting.member.block")}
            </ButtonComponent>
          ) : (
            <React.Fragment>
              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                  dimension: "x-small",
                }}
                sx={{
                  display: ["none", data.is_representative ? "none" : "inherit"],
                  height: "36px",
                }}
                onClick={handleOpenDialogUnBlock}
              >
                {t("community:button.setting.member.unblock")}
              </ButtonComponent>

              <ButtonComponent
                props={{
                  bgColor: theme.blue,
                  dimension: "x-small",
                }}
                sx={{
                  display: [data.is_representative && "none", "none"],
                  width: "54px",
                  borderRadius: "8px",
                  height: "32px",
                }}
              >
                {t("community:button.setting.member.unblock-SP")}
              </ButtonComponent>
            </React.Fragment>
          )}

          {/* End Button PC */}
        </Box>
        {/* End Info user (avatar, ...) */}
      </Box>

      <DialogConfirmWithAvatarComponent
        title={t("community:setting.member.dialog-block.title")}
        content={t("community:setting.member.dialog-block.content")}
        btnLeft={t("community:button.dialog.cancel")}
        btnRight={t("community:button.dialog.block")}
        bgColorBtnRight={theme.red}
        isShow={openDialogBlock}
        handleClose={handleCloseDialogBlock}
        handleCancel={handleCloseDialogBlock}
        handleOK={handleCloseDialogBlock}
      />

      <DialogConfirmWithAvatarComponent
        title={t("community:setting.member.dialog-unblock.title")}
        content={t("community:setting.member.dialog-unblock.content")}
        btnLeft={t("community:button.dialog.cancel")}
        btnRight={t("community:button.dialog.unblock")}
        isShow={openDialogUnBlock}
        handleClose={handleCloseDialogUnBlock}
        handleCancel={handleCloseDialogUnBlock}
        handleOK={handleCloseDialogUnBlock}
      />
    </React.Fragment>
  );
};
export default GridViewComponent;
