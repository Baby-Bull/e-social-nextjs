import React, { useState } from "react";
import {
  Box,
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
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import theme from "src/theme";
import { AREA_LIST, REGEX_RULES, USER_STATUS_OPTIONS, listChipsData } from "src/constants";
import ButtonComponent from "src/components/common/atom-component/ButtonComponent";
import Field from "src/components/common/molecules/Field";
import { IUserCreate } from "src/constants/interfaces";
import { signupWithNestServer } from "src/services/auth";
import { login } from "src/store/store";

import styles from "../authen.module.scss";

const ListItem = styled("li")({
  marginRight: theme.spacing(0),
});

const FormRegisterComponents = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const descriptionElementRef = React.useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [isTutorialDone, setStep] = React.useState(false);
  const [hasAgree, setHasAgree] = useState(false);
  const [listChipData] = React.useState(listChipsData);

  const [userInfo, setUserInfo] = useState<IUserCreate>({
    username: null,
    password: null,
    birthday: null,
    status: null,
    email: null,
    address: null,
    tags: [],
  });

  const [errorValidate, setErrorValidates] = useState<IUserCreate & { checkbox: string }>({
    username: null,
    birthday: null,
    status: null,
    email: null,
    address: null,
    tags: null,
    checkbox: null,
    password: null,
  });

  const onChangeUserInfo = (key: string, value: any) => {
    setUserInfo({
      ...userInfo,
      [key]: typeof value === "string" ? value.trim() : value,
    });
  };

  // const handleClickOpen = () => {
  //   setStep(false);
  //   setOpen(true);
  // };

  const handleTutorialDone = () => {
    if (isTutorialDone) {
      setOpen(false);
    }
    setStep(true);
  };

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleValidateForm = () => {
    let isValidForm = true;
    const errorMessages = {
      username: null,
      birthday: null,
      status: null,
      email: null,
      address: null,
      tags: null,
      checkbox: null,
      password: null,
    };
    // validate username;
    if (!userInfo?.username || userInfo?.username?.length === 0) {
      isValidForm = false;
      errorMessages.username = t("validate:message_form_register.username.required");
    } else if (userInfo?.username?.length === 50) {
      isValidForm = false;
      errorMessages.username = t("validate:message_form_register.username.max_length");
    } else if (!REGEX_RULES.username_register.test(userInfo?.username)) {
      isValidForm = false;
      errorMessages.username = t("validate:message_form_register.username.invalid");
    }

    // validate birthday
    if (!userInfo?.birthday || userInfo?.birthday?.length === 0) {
      isValidForm = false;
      errorMessages.birthday = t("validate:message_form_register.birthday.required");
    } else if (userInfo?.birthday?.length !== 0 && userInfo?.birthday?.error_invalid) {
      isValidForm = false;
      errorMessages.birthday = t("validate:message_form_register.birthday.invalid_date");
    } else if (
      userInfo?.birthday?.length !== 0 &&
      dayjs(userInfo?.birthday?.dob_value).isAfter(dayjs().subtract(1, "day"))
    ) {
      isValidForm = false;
      errorMessages.birthday = t("validate:message_form_register.birthday.future_input");
    }

    // validate email
    if (!userInfo?.email || userInfo?.email?.length === 0) {
      isValidForm = false;
      errorMessages.email = t("validate:message_form_register.email.required");
    } else if (!REGEX_RULES.email.test(userInfo?.email)) {
      isValidForm = false;
      errorMessages.email = t("validate:message_form_register.email.invalid");
    }

    // validate address
    if (!userInfo?.address || userInfo?.address?.length === 0) {
      isValidForm = false;
      errorMessages.address = t("validate:message_form_register.address.required");
    }

    // validate status
    if (!userInfo?.status || userInfo?.status?.length === 0) {
      isValidForm = false;
      errorMessages.status = t("validate:message_form_register.status.required");
    }

    // validate tags
    if (!userInfo?.tags || userInfo?.tags?.length === 0) {
      isValidForm = false;
      errorMessages.tags = t("validate:message_form_register.tags.required");
    } else if (userInfo?.tags?.length < 2) {
      isValidForm = false;
      errorMessages.tags = t("validate:message_form_register.tags.min_count");
    }

    // validate checkbox
    if (!hasAgree) {
      isValidForm = false;
      errorMessages.checkbox = t("validate:message_form_register.checkbox");
    }

    setErrorValidates(errorMessages);
    return isValidForm;
  };

  const submitSignUpProfile = async () => {
    if (handleValidateForm()) {
      userInfo.birthday = userInfo?.birthday?.dob_value || userInfo.birthday;
      userInfo.profileImage = "https://picsum.photos/200/300?random=3";
      // setIsLoading(true);
      const resUpdate = await signupWithNestServer(userInfo);
      if (resUpdate?.tokens?.accessToken) {
        dispatch(login(resUpdate?.user));
        router.push(`/${router.query?.oldUrl || ""}`);
        setIsLoading(false);
      }
      return resUpdate;
      // if (resUpdate && !resUpdate?.error_code) {
      //   handleClickOpen();
      // }
    }
  };

  return (
    <React.Fragment>
      <React.Fragment>
        {isLoading && (
          <Backdrop sx={{ color: "white", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Box className={styles["registerForm-wrapper"]}>
          <Typography className={styles["registerForm-title"]} sx={{ color: theme.navy }}>
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
              error={errorValidate.username}
            />

            <Field
              id="password"
              required
              label={t("register:form.label.password")}
              editor="password"
              onChangeValue={onChangeUserInfo}
              error={errorValidate.password}
            />

            <Field
              id="password-confirm"
              required
              label={t("register:form.label.password")}
              editor="password"
              onChangeValue={onChangeUserInfo}
              error={errorValidate.password}
            />

            <Field
              id="email"
              required
              label={t("register:form.label.email")}
              placeholder={t("register:form.placeholder.email")}
              editor="textbox"
              onChangeValue={onChangeUserInfo}
              error={errorValidate.email}
            />

            <Field
              id="birthday"
              required
              label={t("register:form.label.birthday")}
              placeholder={t("register:form.placeholder.birthday")}
              onChangeValue={onChangeUserInfo}
              editor="date-picker"
              error={errorValidate.birthday}
            />

            <Field
              id="status"
              required
              label={t("register:form.label.status")}
              placeholder={t("register:form.placeholder.status")}
              options={USER_STATUS_OPTIONS}
              editor="dropdown"
              onChangeValue={onChangeUserInfo}
              error={errorValidate.status}
            />

            <Field
              id="address"
              required
              label={t("register:form.label.place")}
              placeholder={t("register:form.placeholder.place")}
              editor="dropdown"
              options={AREA_LIST}
              onChangeValue={onChangeUserInfo}
              error={errorValidate.address}
            />

            <Field
              id="tags"
              required
              label={t("register:form.label.tag")}
              placeholder={t("register:form.placeholder.tag")}
              editor="multi-selection"
              value={userInfo?.tags || []}
              onChangeValue={onChangeUserInfo}
              error={errorValidate.tags}
            />

            <Field
              id="checkbox"
              label={t("register:form.label.checkbox")}
              editor="checkbox"
              value={hasAgree}
              onChangeCheckbox={() => setHasAgree(!hasAgree)}
              error={errorValidate.checkbox}
            />

            <ButtonComponent mode="orange" sx={{ marginTop: "8px" }} onClick={submitSignUpProfile}>
              {t("register:form.submit")}
            </ButtonComponent>
          </form>
        </Box>
      </React.Fragment>

      <Dialog
        PaperProps={{ style: { borderRadius: 12 } }}
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        fullWidth={fullWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className={styles["dialog-tutorial--container"]}
      >
        <DialogTitle
          className={styles["dialog-tutorial--title"]}
          id="scroll-dialog-title"
          sx={{ backgroundColor: theme.whiteBlue }}
        >
          <Fab
            className={styles["dialog-tutorial--title--item"]}
            variant="circular"
            // onClick={handleTutorialDone}
            onClick={() => setOpen(false)}
          >
            <Avatar
              className={styles["dialog-tutorial--title--item--img"]}
              variant="square"
              src="/assets/images/svg/delete-circle.svg"
            />
          </Fab>
        </DialogTitle>

        {!isTutorialDone ? (
          <DialogContent className={styles["dialog-tutorial--content"]} sx={{ backgroundColor: theme.whiteBlue }}>
            <Box className={styles["dialog-tutorial--content--container"]}>
              <Box className={styles["dialog-tutorial--content--demo"]}>
                <Card className={styles["dialog-tutorial--content--card"]} variant="outlined">
                  <CardContent>
                    <Box className={styles["dialog-tutorial--card--head"]}>
                      <Button className={styles["dialog-tutorial--content--status"]}>
                        {t("register:form.tutorial.button-status")}
                      </Button>

                      <Typography className={styles["dialog-tutorial--content--time"]}>
                        {t("register:form.tutorial.last-login")}
                      </Typography>
                    </Box>
                    <Box className={styles["dialog-tutorial--content--body1"]}>
                      <Box height={80}>
                        <Avatar
                          className={styles["dialog-tutorial--body1--avatar"]}
                          src="/assets/images/svg/goodhub.svg"
                        />
                      </Box>
                      <Box className={styles["dialog-tutorial--body1--name--section"]}>
                        <Typography className={styles["dialog-tutorial--body1--name"]}>
                          {t("register:form.tutorial.name")}
                        </Typography>
                        <Typography className={styles["dialog-tutorial--body1--name"]}>
                          {t("register:form.tutorial.major")}
                        </Typography>
                        <Typography className={styles["dialog-tutorial--body1--name"]}>
                          {t("register:form.tutorial.vote")}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography className={styles["dialog-tutorial--content--intro"]} sx={{ color: theme.navy }}>
                      {t("register:form.tutorial.intro")}
                    </Typography>

                    <Typography className={styles["dialog-tutorial--content--list"]} sx={{ color: theme.navy }}>
                      <Paper className={styles["dialog-tutorial--content--paper"]} component="ul">
                        {listChipData.map((data) => {
                          let icon;
                          return (
                            <ListItem key={data.key}>
                              <Chip
                                className={styles["dialog-tutorial--content--chip"]}
                                variant="outlined"
                                size="small"
                                icon={icon}
                                label={data.label}
                                sx={{ backgroundColor: theme.whiteBlue, color: theme.navy }}
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
                        mode="blue"
                        variant="outlined"
                        sx={{
                          width: 200,
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
                    <ButtonComponent mode="green" sx={{ "&:hover": { backgroundColor: theme.green } }}>
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
                  color: "black",
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
            <div
              style={{
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              <ButtonComponent
                onClick={handleTutorialDone}
                mode="blue"
                sx={{
                  width: 200,
                  height: "56px",
                  "&:hover": { backgroundColor: theme.lightBlue },
                }}
              >
                {t("register:form.tutorial.next-tutorial")}
              </ButtonComponent>
            </div>
          </DialogContent>
        ) : (
          <React.Fragment>
            <DialogContent
              sx={{
                backgroundColor: theme.whiteBlue,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  pt: ["63px", "85px"],
                  display: "flex",
                  color: "black",
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
                backgroundColor: theme.whiteBlue,
                display: "flex",
                justifyContent: "center",
                pt: ["39px", "inherit"],
                pb: ["80px", "50px"],
              }}
            >
              <ButtonComponent
                mode="blue"
                sx={{
                  width: 200,
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
