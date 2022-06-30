import React from "react";
import { Box, Typography, Avatar, Chip, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import { infoCommunitySetting } from "src/components/community/mockData";
import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import DialogConfirmWithAvatarComponent from "src/components/common/dialog/DialogConfirmWithAvatarComponent";
import { joinCommunity, leaveCommunity } from "src/services/community";

import { bgColorByStatus } from "../mockData";

interface ICommunityDataProps {
  data: any;
}

const ListItem = styled("li")({});

const BannerComponent: React.SFC<ICommunityDataProps> = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const PENDING = "pending";
  const ADMIN = "admin";
  const MEMBER = "member";
  const OWNER = "owner";

  const handleLeaveCommunity = async () => {
    const community = router.query;
    const res = await leaveCommunity(community?.id);
    if (res) {
      router.reload();
      setOpen(false);
    }
    return res;
  };

  const handleJoinCommunity = async () => {
    const community = router.query;
    const res = await joinCommunity(community?.id);
    if (res) {
      router.reload();
    }
    return res;
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          mt: "20px",
          borderRadius: "12px",
          border: [`1px solid ${theme.whiteGray}`, "none"],
          height: { xs: "214px", md: "320px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: ["#fff", `url(${data?.profile_image})` || `url("/assets/images/svg/php_bg.svg")`],
            backgroundSize: "cover !important",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            filter: "blur(4px)",
          }}
        />
        <Box
          sx={{
            mt: "20px",
            py: ["18px", "40px"],
            px: ["17px", "40px"],
            display: "flex",
            justifyContent: "space-between",
            zIndex: "1",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar
                sx={{
                  marginBottom: 0,
                  background: "#F4FDFF",
                  width: ["80px", "160px"],
                  height: ["80px", "160px"],

                  ".MuiAvatar-img": {
                    objectFit: data?.profile_image === "/assets/images/logo/logo.png" ? "contain" : "cover",
                  },
                }}
                src={data?.profile_image || infoCommunitySetting.avatar}
              />
            </Box>
            <Box
              sx={{
                ml: [0, "20px"],
                height: ["auto", "160px"],
                color: [theme.navy, "white"],
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-start",
                zIndex: "9999",
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: { xs: "none", md: "inherit" },
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {data?.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    mb: "4px",
                    display: { md: "none" },
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {data?.name}
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    fontSize: [8, 16],
                    fontWeight: [500, 700],
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {t("community:banner.count-member")}：{data?.member_count}
                  <Avatar
                    sx={{
                      width: ["4px", "8px"],
                      height: ["4px", "8px"],
                      marginLeft: ["12px", "50px"],
                      marginRight: ["5px", "17px"],
                    }}
                    src="/assets/images/svg/green_dot.svg"
                  />
                  {t("community:banner.count-online")}：{data?.login_count}
                </Typography>
              </Box>

              <Box
                sx={{
                  height: ["50px", "100%"],
                  overflowY: ["scroll", "visible"],
                  zIndex: "9999",
                }}
              >
                <Paper
                  sx={{
                    m: 0,
                    p: 0,
                    backgroundColor: "transparent",
                    display: "flex",
                    flexWrap: "wrap",
                    listStyle: "none",
                    boxShadow: "none",
                  }}
                  component="ul"
                >
                  {data?.tags?.map((value, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        ml: 0,
                        mr: "4px",
                      }}
                    >
                      <Chip
                        variant="outlined"
                        size="small"
                        label={value}
                        sx={{
                          fontSize: 12,
                          fontWeight: 400,
                          color: theme.navy,
                          backgroundColor: theme.whiteBlue,
                          borderRadius: "4px",
                          borderColor: "transparent",
                        }}
                      />
                    </ListItem>
                  ))}
                </Paper>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "22px" }}>
            {!data?.is_public && (!data?.community_role || data?.community_role === PENDING) ? (
              <Box>
                <ButtonComponent
                  sx={{
                    display: { xs: "inherit", md: "none" },
                    width: "120px",
                    height: "36px",
                  }}
                  props={{
                    bgColor: data?.community_role === PENDING ? theme.gray : theme.orange,
                  }}
                  onClick={data?.community_role !== PENDING ? handleJoinCommunity : null}
                >
                  {data?.community_role === PENDING ? "申請中" : "参加申請する"}
                </ButtonComponent>
              </Box>
            ) : (
              <Box>
                <ButtonComponent
                  sx={{
                    display: {
                      xs: data?.community_role !== ADMIN && data?.community_role !== OWNER ? "inherit" : "none",
                      md: "none",
                    },
                    width: "120px",
                    height: "36px",
                  }}
                  props={{
                    bgColor: data.community_role ? "red" : bgColorByStatus,
                  }}
                  onClick={data.community_role === MEMBER ? handleClickOpen : handleJoinCommunity}
                >
                  {data.community_role === MEMBER ? t("community:banner.withdraw-SP") : t("community:banner.join-SP")}
                </ButtonComponent>

                <ButtonComponent
                  variant="outlined"
                  sx={{
                    display: {
                      xs: data?.community_role === ADMIN || data?.community_role === OWNER ? "inherit" : "none",
                      md: "none",
                    },
                    width: "120px",
                    height: "36px",
                    fontSize: 14,
                    px: 0,
                  }}
                  props={{
                    bgColor: "white",
                    color: theme.blue,
                    borderColor: theme.blue,
                  }}
                  onClick={() => router.push(`/community/setting/${data.id}`)}
                >
                  {t("community:setting.title")}
                </ButtonComponent>
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {!data?.is_public && (!data?.community_role || data?.community_role === PENDING) ? (
            <ButtonComponent
              sx={{
                width: "280px",
                height: "48px",
                display: { xs: "none", md: "inherit" },
              }}
              props={{
                bgColor: data?.community_role === PENDING ? theme.gray : theme.orange,
              }}
              onClick={data?.community_role !== PENDING ? handleJoinCommunity : null}
            >
              {data?.community_role === PENDING ? t("community:banner.applying") : t("community:banner.apply")}
            </ButtonComponent>
          ) : (
            <Box>
              <ButtonComponent
                sx={{
                  display: {
                    xs: "none",
                    md: data?.community_role !== ADMIN && data?.community_role !== OWNER ? "inherit" : "none",
                  },
                }}
                props={{
                  bgColor: data.community_role ? "red" : bgColorByStatus,
                }}
                onClick={data.community_role === MEMBER ? handleClickOpen : handleJoinCommunity}
              >
                {data.community_role === MEMBER ? t("community:banner.withdraw") : t("community:banner.join")}
              </ButtonComponent>

              <ButtonComponent
                variant="outlined"
                sx={{
                  display: {
                    xs: "none",
                    md: data?.community_role === ADMIN || data?.community_role === OWNER ? "inherit" : "none",
                  },
                }}
                props={{
                  bgColor: "white",
                  color: theme.blue,
                  borderColor: theme.blue,
                }}
                onClick={() => router.push(`/community/setting/${data.id}`)}
              >
                {t("community:setting.title")}
              </ButtonComponent>
            </Box>
          )}
        </Box>
      </Box>

      <DialogConfirmWithAvatarComponent
        title={`${data?.name}を本当に退会しますか？`}
        content={t("community:dialog.note")}
        btnLeft={t("community:button.dialog.cancel")}
        btnRight={t("community:button.dialog.withdraw")}
        isShow={open}
        handleClose={handleClose}
        handleCancel={handleClose}
        avatar={data?.profile_image}
        handleOK={handleLeaveCommunity}
      />
    </React.Fragment>
  );
};
export default BannerComponent;
