import React, { useState } from "react";
import { Box, Typography, Avatar, Chip, Backdrop, CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { IStoreState } from "src/constants/interface";
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
  isAdmin: boolean;
  callbackHandleRemoveElmMember: any;
}

const GridViewComponent: React.SFC<IGridViewComponentProps> = ({
  data,
  type,
  index,
  callbackHandleRemoveElmMember,
  isAdmin,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const auth = useSelector((state: IStoreState) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const IS_OWNER = "owner";
  const IS_MEMBER = "member";

  const MemberBlock = async () => {
    setIsLoading(true);
    const communityId = router.query;
    const resData = await MemberBlocked(communityId?.indexId, data.id);
    setIsLoading(false);
    return resData;
  };

  const MemberUnBlocked = async () => {
    setIsLoading(true);
    const communityId = router.query;
    const resData = await MemberUnBlock(communityId?.indexId, data.id);
    setIsLoading(false);
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

  const redirectProfile = (userId) => {
    if (auth?.id === userId) {
      router.push(`/my-profile`);
    } else {
      router.push(`/profile/${userId}`);
    }
  };

  return (
    <React.Fragment>
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
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
        <Box
          display={
            ((data.role !== IS_OWNER && !isAdmin) || data.role === IS_MEMBER) && type !== "block" ? "block" : "none"
          }
        >
          <DropDownBlockUserComponent
            handleOK={handleDialogApproveBlock}
            title={`${data?.username}${t("community:setting.member.dialog-block.title")}`}
            avatar={data.profile_image}
          />
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
                cursor: "pointer",
              }}
              onClick={() => redirectProfile(data?.id)}
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
                    cursor: "pointer",
                  }}
                  onClick={() => redirectProfile(data?.user?.id)}
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
                display: ["none", ((data.role !== IS_OWNER && !isAdmin) || data.role === IS_MEMBER) && "flex"],
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
                  display: ["none", ((data.role !== IS_OWNER && !isAdmin) || data.role === IS_MEMBER) && "inherit"],
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
        title={`${data?.username}${t("community:setting.member.dialog-block.title")}`}
        content1={t("community:setting.member.dialog-block.content1")}
        content2={t("community:setting.member.dialog-block.content2")}
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
        title={`${data?.username}${t("community:setting.member.dialog-unblock.title")}`}
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
