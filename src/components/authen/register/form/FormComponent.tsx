import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Card,
  CardActions,
  CardContent,
  Button,
  Paper,
  Chip,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import theme from "src/theme";
import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import GridLeftComponent from "src/components/authen/register/GridLeftComponent";
import { updateProfile } from "src/services/auth";

import { Field } from "./Field";

const ListItem = styled("li")({
  marginRight: theme.spacing(0),
});

const FormRegisterComponents = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [isTutorialDone, setStep] = React.useState(false);

  const [userInfo, setUserInfo] = useState({
    username: null,
    birthday: null,
    status: null,
    email: null,
    address: null,
    tags: [],
  });

  const onChangeUserInfo = (key: string, value: any) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const handleClickOpen = () => {
    setStep(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTutorialDone = () => {
    if (isTutorialDone) {
      setOpen(false);
    }
    setStep(true);
  };

  const [listChipData] = React.useState([
    { key: 0, label: "React" },
    { key: 1, label: "PHP勉強中" },
    { key: 2, label: "コードレビュー" },
    { key: 3, label: "駆け出しエンジニアと繋がりたい" },
    { key: 4, label: "要件定義" },
  ]);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const submitUpdateProfile = async () => {
    setIsLoading(true);
    const resUpdate = await updateProfile(useRouter);
    setIsLoading(false);
    if (resUpdate?.data) {
      handleClickOpen();
    }
  };

  return (
    <React.Fragment>
      <ContentComponent authPage>
        {isLoading && (
          <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Box>
          <Grid container>
            <GridLeftComponent smAndUp />

            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  pt: [5, 9],
                  px: ["5%", "10%"],
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    pb: ["20px", "23px"],
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.navy,
                  }}
                >
                  {t("register:form.title")}
                </Typography>

                <form style={{ textAlign: "center", marginBottom: "63px" }}>
                  <Field
                    id="username"
                    required
                    label={t("register:form.label.name")}
                    placeholder={t("register:form.placeholder.name")}
                    editor="textbox"
                    onChangeValue={onChangeUserInfo}
                  />
                  <Field
                    id="birthday"
                    required
                    label={t("register:form.label.birthday")}
                    placeholder={t("register:form.placeholder.birthday")}
                    editor="textbox"
                    onChangeValue={onChangeUserInfo}
                  />
                  <Field
                    id="status"
                    required
                    label={t("register:form.label.status")}
                    placeholder={t("register:form.placeholder.status")}
                    options={["", "今すぐ話せます", "友達募集しています", "相談に乗って欲しいです"]}
                    editor="dropdown"
                    onChangeValue={onChangeUserInfo}
                  />
                  <Field
                    id="email"
                    required
                    label={t("register:form.label.email")}
                    placeholder={t("register:form.placeholder.email")}
                    editor="textbox"
                    onChangeValue={onChangeUserInfo}
                  />
                  <Field
                    id="address"
                    required
                    label={t("register:form.label.place")}
                    placeholder={t("register:form.placeholder.place")}
                    editor="textbox"
                    onChangeValue={onChangeUserInfo}
                  />
                  <Field
                    id="tags"
                    required
                    label={t("register:form.label.tag")}
                    placeholder={t("register:form.placeholder.tag")}
                    editor="multi-selection"
                    value={userInfo?.tags || []}
                    onChangeValue={onChangeUserInfo}
                  />
                  <Field id="checkbox" label={t("register:form.label.checkbox")} editor="checkbox" />

                  <ButtonComponent
                    props={{
                      mode: "gradient",
                      dimension: "x-medium",
                    }}
                    onClick={submitUpdateProfile}
                  >
                    {t("register:form.submit")}
                  </ButtonComponent>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ContentComponent>

      <Dialog
        PaperProps={{
          style: { borderRadius: 12 },
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
            backgroundColor: theme.blue,
            textAlign: "right",
            p: [0, "27px"],
            position: "relative",
          }}
        >
          <Fab
            variant="circular"
            onClick={handleTutorialDone}
            sx={{
              position: "absolute",
              top: ["7px", "20px"],
              right: ["7px", "20px"],
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
                width: ["24px", "56px"],
                height: ["24px", "56px"],
                display: "flex",
                justifyContent: "center",
              }}
              src={
                !isTutorialDone ? "/assets/images/svg/arrow-right-circle.svg" : "/assets/images/svg/delete-circle.svg"
              }
            />
          </Fab>
        </DialogTitle>

        {!isTutorialDone ? (
          <DialogContent
            sx={{
              pb: "46px",
              backgroundColor: theme.blue,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: ["column-reverse", "row"],
                alignItems: "center",
                mt: ["53px", 0],
                position: "relative",
              }}
            >
              <Box sx={{ maxWidth: 320, flex: 2 }}>
                <Card
                  variant="outlined"
                  sx={{
                    display: ["none", "inherit"],
                    px: "8px",
                    pb: "16px",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
                          fontSize: 10,
                          width: 130,
                          height: 20,
                          color: "white",
                          backgroundColor: theme.orange,
                          "&:hover": {
                            opacity: 0.9,
                            backgroundColor: theme.orange,
                          },
                        }}
                      >
                        {t("register:form.tutorial.button-status")}
                      </Button>

                      <Typography
                        sx={{
                          color: "#D8D8D8",
                          fontSize: 10,
                          fontWeight: 700,
                        }}
                      >
                        {t("register:form.tutorial.last-login")}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        pt: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box height={80}>
                        <Avatar
                          sx={{
                            width: ["56px", "56px"],
                            height: ["56px", "56px"],
                            display: "flex",
                            justifyContent: "center",
                          }}
                          src="/assets/images/svg/goodhub.svg"
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            pl: "13px",
                            pb: "5px",
                            color: "#262A30",
                            fontSize: 14,
                            fontWeight: 700,
                          }}
                        >
                          {t("register:form.tutorial.name")}
                        </Typography>

                        <Typography
                          sx={{
                            pl: "13px",
                            pb: "5px",
                            color: theme.blue,
                            fontSize: 12,
                            fontWeight: 400,
                          }}
                        >
                          {t("register:form.tutorial.major")}
                        </Typography>

                        <Typography
                          sx={{
                            pl: "13px",
                            color: "#262A30",
                            fontSize: 10,
                            fontWeight: 400,
                          }}
                        >
                          {t("register:form.tutorial.vote")}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: theme.navy,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {t("register:form.tutorial.intro")}
                    </Typography>

                    <Typography
                      sx={{
                        color: theme.navy,
                        fontSize: 12,
                        fontWeight: 400,
                        textTransform: "",
                      }}
                    >
                      <Paper
                        sx={{
                          pl: 0,
                          mt: 1,
                          mb: 4,
                          maxWidth: "360px",
                          display: "flex",
                          flexWrap: "wrap",
                          listStyle: "none",
                          boxShadow: "none",
                        }}
                        component="ul"
                      >
                        {listChipData.map((data) => {
                          let icon;

                          return (
                            <ListItem key={data.key}>
                              <Chip
                                variant="outlined"
                                size="small"
                                icon={icon}
                                label={data.label}
                                sx={{
                                  fontSize: 12,
                                  fontWeight: 400,
                                  backgroundColor: theme.whiteBlue,
                                  border: "none",
                                  color: theme.navy,
                                  borderRadius: "4px",
                                }}
                              />
                            </ListItem>
                          );
                        })}
                      </Paper>
                    </Typography>

                    <Box
                      sx={{
                        pt: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src="/assets/images/svg/message.svg" alt="message" />

                      <Typography
                        sx={{
                          pl: "13px",
                          color: "#000",
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      >
                        {t("register:form.tutorial.pr")}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        pt: "5px",
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#262A30",
                      }}
                    >
                      {t("register:form.tutorial.text-demo")}
                    </Typography>

                    <Box
                      sx={{
                        pt: "20px",
                        textAlign: "center",
                      }}
                    >
                      <ButtonComponent
                        variant="outlined"
                        props={{
                          dimension: "medium",
                          color: theme.blue,
                          borderColor: theme.blue,
                        }}
                        sx={{
                          height: 32,
                          textAlign: "center",
                        }}
                        startIcon={
                          <Avatar
                            variant="square"
                            sx={{ width: "100%", height: "100%" }}
                            src="/assets/images/svg/heart_outlined.svg"
                          />
                        }
                      >
                        {t("register:form.tutorial.button-add")}
                      </ButtonComponent>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <ButtonComponent
                      props={{
                        bgColor: theme.green,
                      }}
                      sx={{
                        "&:hover": { backgroundColor: theme.green },
                      }}
                    >
                      {t("register:form.tutorial.send-request")}
                    </ButtonComponent>
                  </CardActions>
                </Card>

                <Avatar
                  variant="square"
                  sx={{
                    pt: "17px",
                    width: "100%",
                    height: "100%",
                    display: ["", "none"],
                  }}
                  src="/assets/images/svg/register_tutorial_card.svg"
                />
              </Box>

              <Typography
                component="span"
                sx={{
                  flex: 1,
                  pl: [0, 3],
                  color: "white",
                  fontSize: [16, 20],
                  fontWeight: 700,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    display: ["none", "flex"],
                    flexDirection: "column",
                  }}
                >
                  <Typography component="span" fontWeight={700} fontSize={[16, 20]}>
                    まずは
                  </Typography>
                  <Typography component="span" fontWeight={700} fontSize={[16, 20]}>
                    マッチングリクエスト
                  </Typography>
                  <Typography component="span" fontWeight={700} fontSize={[16, 20]}>
                    を送って気になる人と
                  </Typography>
                  <Typography component="span" fontWeight={700} fontSize={[16, 20]}>
                    マッチしてみよう！
                  </Typography>
                </Typography>
                <Typography component="span" display={["inherit", "none"]}>
                  {t("register:form.tutorial.description")}
                </Typography>
              </Typography>

              <Box
                sx={{
                  display: ["none", "inherit"],
                  position: "absolute",
                  height: "30%",
                  bottom: "8%",
                  right: "28%",
                }}
              >
                <img src="/assets/images/svg/line-white.svg" alt="line-white" />
              </Box>
            </Box>
          </DialogContent>
        ) : (
          <React.Fragment>
            <DialogContent
              sx={{
                backgroundColor: theme.blue,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  pt: ["63px", "85px"],
                  display: "flex",
                  color: "white",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography pb="10px" fontWeight={700} fontSize={[16, 20]}>
                  マッチングが成立したら、メッセージで日程調整をして
                </Typography>
                <Typography fontWeight={700} fontSize={[16, 20]}>
                  ビデオ通話でお話ししてみましょう！
                </Typography>

                <Avatar
                  variant="square"
                  sx={{
                    pt: "35px",
                    width: ["80%", "40%"],
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  src="/assets/images/svg/account_with_phone.svg"
                />
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                backgroundColor: theme.blue,
                display: "flex",
                justifyContent: "center",
                pt: ["39px", "inherit"],
                pb: ["80px", "50px"],
              }}
            >
              <ButtonComponent
                props={{
                  dimension: "medium",
                  color: theme.blue,
                }}
                sx={{
                  height: "56px",
                }}
                onClick={() => router.push("/")}
              >
                {t("register:form.tutorial.button-redirect-home")}
              </ButtonComponent>
            </DialogActions>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
};
export default FormRegisterComponents;
