import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fab,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";

import { bgColorByStatus, infoCommunity, status } from "../mockData";

const ListItem = styled("li")({});

const BannerComponent = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          mt: "20px",
          py: ["18px", "40px"],
          px: ["17px", 0],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundImage: ["none", `url("/assets/images/svg/php_bg.svg")`],
          borderRadius: "12px",
          border: [`1px solid ${theme.whiteGray}`, "none"],
          height: { xs: "214px", md: "320px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
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
              variant="square"
              sx={{
                mb: 0,
                width: ["80px", "160px"],
                height: ["80px", "160px"],
              }}
              src="/assets/images/svg/php.svg"
            />
            <ButtonComponent
              sx={{
                display: { md: "none" },
                width: "120px",
                height: "36px",
              }}
              props={{
                bgColor: bgColorByStatus,
              }}
              onClick={handleClickOpen}
            >
              {status === "join" ? t("community:banner.withdraw-SP") : t("community:banner.join-SP")}
            </ButtonComponent>
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
              {infoCommunity.name}
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
                {infoCommunity.name}
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
                {t("community:banner.count-member")}：{infoCommunity.count_member}
                <Avatar
                  sx={{
                    width: ["4px", "8px"],
                    height: ["4px", "8px"],
                    marginLeft: ["12px", "50px"],
                    marginRight: ["5px", "17px"],
                  }}
                  src="/assets/images/svg/green_dot.svg"
                />
                {t("community:banner.count-online")}：{infoCommunity.count_online}
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
              {infoCommunity?.chipData.map((data) => {
                let icon;

                return (
                  <ListItem
                    key={data.key}
                    sx={{
                      ml: 0,
                      mr: "2px",
                    }}
                  >
                    <Chip
                      variant="outlined"
                      size="small"
                      icon={icon}
                      label={data.label}
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
                );
              })}
            </Paper>
          </Box>
        </Box>

        <ButtonComponent
          sx={{
            display: { xs: "none", md: "inherit" },
          }}
          props={{
            bgColor: bgColorByStatus,
          }}
          onClick={handleClickOpen}
        >
          {status === "join" ? t("community:banner.withdraw") : t("community:banner.join")}
        </ButtonComponent>
      </Box>

      <Dialog
        PaperProps={{
          style: {
            borderRadius: 12,
            maxWidth: "640px",
          },
        }}
        open={open}
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
            onClick={handleClose}
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
              display: "flex",
              pt: ["53px", "37px"],
              pr: { sm: "60px" },
              mb: ["22px", 0],
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: ["40px", "64px"],
                height: "100%",
              }}
              src="/assets/images/svg/account.svg"
            />

            <Box
              sx={{
                ml: ["8px", "16px"],
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: theme.navy,
                  fontSize: [16, 20],
                  fontWeight: 700,
                }}
              >
                {t("community:dialog.confirm")}
              </Typography>

              <Typography
                component="span"
                sx={{
                  mt: ["35px"],
                  display: ["none", "inherit"],
                  color: theme.navy,
                }}
              >
                {t("community:dialog.note")}
              </Typography>
            </Box>
          </Box>

          <Box
            component="span"
            sx={{
              display: { sm: "none" },
              color: theme.navy,
              fontSize: 14,
            }}
          >
            {t("community:dialog.note")}
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
export default BannerComponent;
