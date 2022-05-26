import React from "react";
import { Box, Typography, Avatar, Chip, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";
import DialogConfirmWithAvatarComponent from "src/components/common/dialog/DialogConfirmWithAvatarComponent";

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
  const [roleCommunity] = React.useState(data.community_role);
  const PENDING = "pending";
  const ADMIN = "admin";

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: ["none", `url("/assets/images/svg/php_bg.svg")`],
          backgroundSize: "cover",
          borderRadius: "12px",
          border: [`1px solid ${theme.whiteGray}`, "none"],
          height: { xs: "214px", md: "320px" },
        }}
      >
        <Box
          sx={{
            mt: "20px",
            py: ["18px", "40px"],
            px: ["17px", "40px"],
            display: "flex",
            justifyContent: "space-between",
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
                  mb: 0,
                  width: ["80px", "160px"],
                  height: ["80px", "160px"],
                }}
                src={data?.profile_image || "/assets/images/svg/php.svg"}
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
                      mr: "2px",
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
                  onClick={handleClickOpen}
                >
                  {data?.community_role === PENDING ? "申請中" : "参加申請する"}
                </ButtonComponent>
              </Box>
            ) : (
              <Box>
                <ButtonComponent
                  sx={{
                    display: { xs: roleCommunity === ADMIN && "none", md: "none" },
                    width: "120px",
                    height: "36px",
                  }}
                  props={{
                    bgColor: data.community_role ? "red" : bgColorByStatus,
                  }}
                  onClick={handleClickOpen}
                >
                  {data.community_role ? t("community:banner.join-SP") : t("community:banner.withdraw-SP")}
                </ButtonComponent>

                <ButtonComponent
                  variant="outlined"
                  sx={{
                    display: { xs: roleCommunity !== ADMIN && "none", md: "none" },
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
                  onClick={() => router.push(`/community/setting`)}
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
            >
              {data?.community_role === PENDING ? t("community:banner.applying") : t("community:banner.apply")}
            </ButtonComponent>
          ) : (
            <Box>
              <ButtonComponent
                sx={{
                  display: { xs: "none", md: roleCommunity !== ADMIN && "inherit" },
                }}
                props={{
                  bgColor: data.community_role ? "red" : bgColorByStatus,
                }}
                onClick={handleClickOpen}
              >
                {data.community_role ? t("community:banner.join") : t("community:banner.withdraw")}
              </ButtonComponent>

              <ButtonComponent
                variant="outlined"
                sx={{
                  display: { xs: "none", md: roleCommunity === ADMIN && "inherit" },
                }}
                props={{
                  bgColor: "white",
                  color: theme.blue,
                  borderColor: theme.blue,
                }}
                onClick={() => router.push(`/community/setting`)}
              >
                {t("community:setting.title")}
              </ButtonComponent>
            </Box>
          )}
        </Box>
      </Box>

      <DialogConfirmWithAvatarComponent
        title={t("community:dialog.confirm")}
        content={t("community:dialog.note")}
        btnLeft={t("community:button.dialog.cancel")}
        btnRight={t("community:button.dialog.withdraw")}
        isShow={open}
        handleClose={handleClose}
        handleCancel={handleClose}
        handleOK={handleClose}
      />
    </React.Fragment>
  );
};
export default BannerComponent;
