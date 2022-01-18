import React from "react";
import {
  Box, Grid, Typography,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Card, CardActions, CardContent, Button,
  Paper, Chip
} from "@mui/material";
import { styled } from '@mui/material/styles'
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import theme from "src/theme";

import GridLeftComponent from "../GridLeftComponent";

import { Field } from "./Field";

const ListItem = styled('li')({
  marginRight: theme.spacing(0),
});

const FormRegisterComponents = () => {
  const { t } = useTranslation();
  
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [isTutorialDone, setStep] = React.useState(false);

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
    { key: 0, label: 'React' },
    { key: 1, label: 'PHP勉強中' },
    { key: 2, label: 'コードレビュー' },
    { key: 3, label: '駆け出しエンジニアと繋がりたい' },
    { key: 4, label: '要件定義' }
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

  return (
    <React.Fragment>
      <ContentComponent>
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
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    pb: ["20px", "23px"],
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.navy
                  }}
                >
                  {t('register:form.title')}
                </Typography>

                <form style={{ textAlign: "center", marginBottom: "63px" }}>
                  <Field
                    id="name"
                    required
                    label={t('register:form.label.name')}
                    placeholder={t('register:form.placeholder.name')}
                    editor="textbox"
                  />
                  <Field
                    id="birthday"
                    required
                    label={t('register:form.label.birthday')}
                    placeholder={t('register:form.placeholder.birthday')}
                    editor="textbox"
                  />
                  <Field
                    id="status"
                    required
                    label={t('register:form.label.status')}
                    placeholder={t('register:form.placeholder.status')}
                    options={["", "Marketing"]}
                    editor="dropdown"
                  />
                  <Field
                    id="email"
                    required
                    label={t('register:form.label.email')}
                    placeholder={t('register:form.placeholder.email')}
                    editor="textbox"
                  />
                  <Field
                    id="place"
                    required
                    label={t('register:form.label.place')}
                    placeholder={t('register:form.placeholder.place')}
                    editor="textbox"
                  />
                  <Field
                    id="tag"
                    required
                    label={t('register:form.label.tag')}
                    placeholder={t('register:form.placeholder.tag')}
                    editor="multi-selection"
                  />
                  <Field
                    id="checkbox"
                    label=
                    {t('register:form.label.checkbox')}
                    editor="checkbox"
                  />

                  <ButtonComponent 
                    onClick={handleClickOpen} 
                    mode="gradient"
                  >
                    {t('register:form.submit')}
                  </ButtonComponent>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ContentComponent>

      <Dialog
        PaperProps={{
          style: { borderRadius: 12 }
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
            p: [0, "16px"]
          }}
        >
          <Fab
            variant="circular"
            onClick={handleTutorialDone}
            sx={{
              width: ["30px", "inherit"],
              height: ["30px", "inherit"],
              backgroundColor: "transparent",
              boxShadow: "unset"
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: ["20px", "50px"],
                height: ["20px", "50px"],
                display: "flex",
                justifyContent: "center"
              }}
              src={!isTutorialDone 
                ? "/assets/images/svg/arrow-right-circle.svg" 
                : "/assets/images/svg/delete-circle.svg"
              }
            />
          </Fab>
        </DialogTitle>

        {!isTutorialDone ? (
          <DialogContent
            sx={{
              pb: "46px",
              backgroundColor: theme.blue
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: ["column-reverse", "row"],
                alignItems: "center"
              }}
            >
              <Box sx={{ maxWidth: 320, flex: 2 }}>
                <Card
                  variant="outlined"
                  sx={{
                    display: ["none", "inherit"],
                    px: "8px",
                    pb: "16px"
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Button
                        sx={{
                          width: 130,
                          height: 30,
                          color: "white",
                          backgroundColor: theme.orange,
                          "&:hover": {
                            opacity: 0.9,
                            backgroundColor: theme.orange
                          }
                        }}
                      >
                        {t('register:form.tutorial.button-status')}
                      </Button>

                      <Typography
                        sx={{
                          color: "#D8D8D8",
                          fontSize: 10,
                          fontWeight: 700
                        }}
                      >
                        {t('register:form.tutorial.last-login')}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        pt: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box height={90}>
                        <Avatar
                          variant="square"
                          sx={{
                            width: ["80%", "60px"],
                            height: "75%",
                            display: "flex",
                            justifyContent: "center"
                          }}
                          src="/assets/images/svg/goodhub.svg"
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column"
                        }}
                      >
                        <Typography
                          sx={{
                            pl: "13px",
                            pb: "5px",
                            color: "#262A30",
                            fontSize: 14,
                            fontWeight: 700
                          }}
                        >
                          {t('register:form.tutorial.name')}
                        </Typography>

                        <Typography
                          sx={{
                            pl: "13px",
                            pb: "5px",
                            color: theme.blue,
                            fontSize: 12,
                            fontWeight: 400
                          }}
                        >
                          {t('register:form.tutorial.major')}
                        </Typography>

                        <Typography
                          sx={{
                            pl: "13px",
                            color: "#262A30",
                            fontSize: 10,
                            fontWeight: 400
                          }}
                        >
                          {t('register:form.tutorial.vote')}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: theme.navy,
                        fontSize: 12,
                        fontWeight: 700
                      }}
                    >
                      {t('register:form.tutorial.intro')}
                    </Typography>

                    <Typography
                      sx={{
                        color: theme.navy,
                        fontSize: 12,
                        fontWeight: 400,
                        textTransform: ""
                      }}
                    >
                      <Paper
                        sx={{
                          pl: 0,
                          mt: 1,
                          mb: 4,
                          maxWidth: "360px",
                          display: 'flex',
                          flexWrap: 'wrap',
                          listStyle: 'none',
                          boxShadow: 'none'
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
                                  borderRadius: "4px"
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
                        alignItems: "center"
                      }}
                    >
                      <img src="/assets/images/svg/message.svg" alt="message"/>

                      <Typography
                        sx={{
                          pl: "13px",
                          color: "#000",
                          fontSize: 14,
                          fontWeight: 700
                        }}
                      >
                        {t('register:form.tutorial.pr')}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        pt: "5px",
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#262A30"
                      }}
                    >
                      {t('register:form.tutorial.text-demo')}
                    </Typography>

                    <Box
                      sx={{
                        pt: "20px",
                        textAlign: "center"
                      }}
                    >
                      <ButtonComponent
                        variant="outlined"
                        sx={{
                          width: 240,
                          height: 32,
                          color: theme.blue,
                          borderColor: theme.blue,
                          textAlign: "center"
                        }}
                      >
                        {t('register:form.tutorial.button-add')}
                      </ButtonComponent>
                    </Box>

                  </CardContent>
                  <CardActions>
                    <ButtonComponent
                      sx={{
                        color: "white",
                        backgroundColor: theme.green,
                        "&:hover": { backgroundColor: theme.green }
                      }}
                    >
                      {t('register:form.tutorial.send-request')}
                    </ButtonComponent>
                  </CardActions>
                </Card>

                <Avatar
                  variant="square"
                  sx={{
                    pt: "17px",
                    width:"100%",
                    height: "100%",
                    display: ["", "none"],
                  }}
                  src="/assets/images/svg/register_tutorial_card.svg"
                />
              </Box>

              <Typography
                sx={{
                  flex: 1,
                  pl: [0, 3],
                  color: "white",
                  fontSize: [16, 20],
                  fontWeight: 700
                }}
              >
                {t('register:form.tutorial.description')}
              </Typography>
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
                  display: "flex",
                  color: "white",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={700} fontSize={[16, 20]}>
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
                    justifyContent: "center"
                  }}
                  src="/assets/images/svg/register_turtorial.svg"
                />
              </Box>
            </DialogContent>

            <DialogActions
              sx={{
                backgroundColor: theme.blue,
                display: "flex",
                justifyContent: "center",
                pt: ["39px", "inherit"],
                pb: ["80px", "50px"]
              }}
            >
              <ButtonComponent
                onClick={handleClose}
                sx={{
                  width: "240px",
                  height: "56px",
                  color: theme.blue,
                  backgroundColor: "white",
                }}
              >
                {t('register:form.submit')}
              </ButtonComponent>

            </DialogActions>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  )
};
export default FormRegisterComponents;
