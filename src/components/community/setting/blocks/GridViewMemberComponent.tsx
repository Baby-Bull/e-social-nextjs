import React from "react";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import DialogConfirmWithAvatarComponent from "src/components/common/dialog/DialogConfirmWithAvatarComponent";
import { JOBS } from "src/components/constants/constants";
import { MemberBlocked, MemberUnBlock } from "src/services/community";

import DropDownBlockUserComponent from "./DropDownBlockUserComponent";

type Type = "participated" | "block";
interface IGridViewComponentProps {
  data: any;
  type: Type;
  index: any;
  callbackHandleRemoveElmMember: any;
}

const GridViewComponent: React.SFC<IGridViewComponentProps> = ({
  data,
  type,
  index,
  callbackHandleRemoveElmMember,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const IS_OWNER = "owner";
  const IS_MEMBER = "member";

  const MemberBlock = async () => {
    const communityId = router.query;
    const resData = await MemberBlocked(communityId?.indexId, data.id);
    return resData;
  };

  const MemberUnBlocked = async () => {
    const communityId = router.query;
    const resData = await MemberUnBlock(communityId?.indexId, data.id);
    return resData;
  };

  const [openDialogBlock, setOpenDialogBlock] = React.useState(false);
  const handleOpenDialogBlock = () => setOpenDialogBlock(true);
  const handleCloseDialogBlock = () => setOpenDialogBlock(false);

  const handleDialogApproveBlock = () => {
    MemberBlock();
    setOpenDialogBlock(false);
    callbackHandleRemoveElmMember(index);
  };

  const [openDialogUnBlock, setOpenDialogUnBlock] = React.useState(false);
  const handleOpenDialogUnBlock = () => setOpenDialogUnBlock(true);
  const handleCloseDialogUnBlock = () => setOpenDialogUnBlock(false);
  const handleDialogUnBlock = () => {
    MemberUnBlocked();
    setOpenDialogUnBlock(false);
    callbackHandleRemoveElmMember(index);
  };

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
              sx={{
                width: "64px",
                height: "100%",
              }}
              src={data.profile_image}
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
                  {data.username}
                </Typography>

                <Chip
                  label={data.role === IS_OWNER ? "代表者" : "管理者"}
                  sx={{
                    display: data.role !== IS_MEMBER ? "block" : "none",
                    ml: [0, "12px"],
                    mt: ["10px", 0],
                    width: "60px",
                    height: "20px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: data.role === IS_OWNER ? theme.green : theme.blue,
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
                {JOBS[data.job]?.label}
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
                display: ["none", data.role === IS_MEMBER && "flex"],
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
                  display: ["none", data.role !== IS_MEMBER ? "none" : "inherit"],
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
                onClick={handleOpenDialogUnBlock}
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
        handleOK={handleDialogApproveBlock}
        avatar={data.profile_image}
      />

      <DialogConfirmWithAvatarComponent
        title={t("community:setting.member.dialog-unblock.title")}
        content={t("community:setting.member.dialog-unblock.content")}
        btnLeft={t("community:button.dialog.cancel")}
        btnRight={t("community:button.dialog.unblock")}
        isShow={openDialogUnBlock}
        handleClose={handleCloseDialogUnBlock}
        handleCancel={handleCloseDialogUnBlock}
        handleOK={handleDialogUnBlock}
        avatar={data.profile_image}
      />
    </React.Fragment>
  );
};
export default GridViewComponent;
