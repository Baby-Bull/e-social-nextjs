import { Avatar, Box, Button, Chip, Grid, Link, Paper, Select, Typography } from "@mui/material";
import React from "react";
/* eslint-disable */
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
/* eslint-enable */
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";

import ContentComponent from "src/components/layouts/ContentComponent";
import theme from "src/theme";

const BoxContentTab = styled(Box)`
  display: flex;
  margin-bottom: 43px;
  color: ${theme.navy};
  ${(props) => props.theme.breakpoints.up("xs")} {
    display: block;
  }

  ${(props) => props.theme.breakpoints.up("lg")} {
    display: flex;
  }
`;

const TitleContentTab = styled(Box)`
  width: 238px;
  font-size: 18px;
  font-weight: 700;
  ${(props) => props.theme.breakpoints.up("xs")} {
    font-size: 16px;
  }

  ${(props) => props.theme.breakpoints.up("lg")} {
    font-size: 18px;
  }
`;

const ContentTab = styled(Box)`
  width: 680px;
  ${(props) => props.theme.breakpoints.up("xs")} {
    font-size: 14px;
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.up("lg")} {
    font-size: 16px;
    width: 73%;
  }
`;

const Tab = styled(TabUnstyled)`
  color: ${theme.blue};
  cursor: pointer;
  font-size: 20px;
  line-height: 29px;
  font-weight: bold;
  background-color: #fff;
  width: 240px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  border: 1px solid #03bcdb;
  border-radius: 12px 12px 0 0;
  border-bottom: none !important;
  height: 56px;

  &.${tabUnstyledClasses.selected} {
    background-color: ${theme.blue};
    color: #fff;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  display: flex;
  align-items: center;
`;

const TypoProfile = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  margin-bottom: 26px;
`;

const TypoProfileMobile = styled(Typography)({
  fontSize: 14,
  fontWeight: 700,
  lineHeight: "20.27px",
  "@media (min-width: 1200px)": {
    display: "none",
  },
});

const Field = styled(TextField)({
  width: "100%",
  "& fieldset": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "#F4FDFF",
    fontSize: 16,
    padding: "9px 16px",
    borderRadius: "6px",
    fontFamily: "Noto Sans",
    "@media (max-width: 1200px)": {
      fontSize: 14,
    },
    "&:focus": {
      boxShadow: `${theme.blue} 0 0 0 0.1rem`,
      borderColor: theme.blue,
    },
  },
});

const FieldTextArea = styled(TextareaAutosize)({
  width: "100%",
  border: "none",
  backgroundColor: "#F4FDFF",
  fontSize: 16,
  padding: "9px 16px",
  borderRadius: "6px",
  "&:placeholder": { color: theme.gray },
  "@media (max-width: 1200px)": {
    fontSize: 14,
  },
});

const SelectCustom = styled(Select)({
  borderRadius: 6,
  width: "46%",
  height: "40px",
  color: theme.gray,
  "& fieldset": {
    border: "none",
  },
  borderColor: theme.whiteBlue,
  "&:hover": {
    borderRadius: 6,
    borderColor: theme.whiteBlue,
  },
  "@media (max-width: 1200px)": {
    width: "100%",
  },
  "& .MuiSelect-select": {
    position: "relative",
    backgroundColor: `${theme.whiteBlue}`,
    border: `1px solid ${theme.whiteBlue}`,
    fontSize: 16,
    padding: "9px 16px",
    borderRadius: 6,
    fontFamily: "Noto Sans",
    "@media (max-width: 1200px)": {
      fontSize: 14,
    },
    "&:focus": {
      boxShadow: `${theme.blue} 0 0 0 0.1rem`,
      borderColor: theme.blue,
    },
  },
});

const ListItem = styled("li")({
  margin: theme.spacing(0.5),
});

const ProfileSkillComponent = () => {
  const { t } = useTranslation();

  const currencies = [
    {
      value: "",
      label: t("profile:form.placeholder.please-select"),
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  const [currency, setCurrency] = React.useState(currencies[0].value);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "デザイナー" },
    { key: 1, label: "エンジニア" },
    { key: 2, label: "デザイナー" },
    { key: 3, label: "エンジニア" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  // @ts-ignore
  return (
    <ContentComponent>
      <Box
        sx={{
          p: { xs: "80px 20px", lg: "80px 120px" },
          background: "#F4FDFF",
        }}
      >
        <Grid item xs={12} sm={12} lg={12} xl={12} sx={{ position: { xs: "relative", lg: "unset" } }}>
          <Box
            sx={{
              background: { xs: "unset", lg: "#ffffff" },
              p: { xs: "0", lg: "40px 80px 78px 80px" },
              m: { xs: "40px 0", lg: "0" },
              position: { xs: "unset", lg: "relative" },
            }}
          >
            <Box
              sx={{
                borderBottom: "2px solid #E6E6E6",
                mb: "63px",
                display: { xs: "block", lg: "flex" },
                background: { xs: "#fff", lg: "none" },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/profile/avatar_2.png"
                  sx={{
                    width: { xs: "80px", lg: "160px" },
                    height: { xs: "80px", lg: "160px" },
                    position: { xs: "absolute", lg: "unset" },
                    top: "-45px",
                    right: "40%",
                  }}
                />
                <Avatar
                  sx={{
                    bgcolor: { xs: "transparent", lg: theme.navy },
                    position: "absolute",
                    bottom: { xs: "unset", lg: 50 },
                    right: { xs: "46%", lg: 10 },
                    top: { xs: "-26px", lg: "unset" },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/icon/ic_camera.png"
                    sx={{
                      width: { xs: "23.33px", lg: "20px" },
                      height: { xs: "21px", lg: "18px" },
                      opacity: { xs: 0.6, lg: 1 },
                    }}
                  />
                </Avatar>
              </Box>
              <Box sx={{ ml: "27px", mb: "9px", display: { xs: "none", lg: "block" } }}>
                <TypoProfile>{t("profile:name")}</TypoProfile>
                <TypoProfile>Twitter</TypoProfile>
                <TypoProfile>Facebook</TypoProfile>
                <TypoProfile>GitHub</TypoProfile>
              </Box>
              <Box sx={{ width: { xs: "100%", lg: "560px" }, p: { xs: "48px 12px 30px 12px", lg: "0 0 9px 27px" } }}>
                <TypoProfileMobile>{t("profile:name")}</TypoProfileMobile>
                <Box sx={{ mb: "12px" }}>
                  <Field value="佐藤 太郎" />
                </Box>
                <TypoProfileMobile>Twitter</TypoProfileMobile>
                <Box sx={{ mb: "12px" }}>
                  <Field placeholder={t("profile:form.placeholder.twitter")} />
                </Box>
                <TypoProfileMobile>Facebook</TypoProfileMobile>
                <Box sx={{ mb: "12px" }}>
                  <Field placeholder={t("profile:form.placeholder.facebook")} />
                </Box>
                <TypoProfileMobile>GitHub</TypoProfileMobile>
                <Box>
                  <Field placeholder={t("profile:form.placeholder.github")} />
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 0, lg: 22 },
                  top: { xs: "-120px", lg: 0 },
                }}
              >
                <Link href="/my-profile/edit" sx={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      background: theme.blue,
                      color: "#fff",
                      fontWeight: 700,
                      lineHeight: "23.17",
                      width: { xs: "335px", lg: "96px" },
                      height: { xs: "48px", lg: "40px" },
                      dispaly: "flex",
                      alignItems: "center",
                      borderRadius: { xs: "12px", lg: "4px" },
                      "&:hover": {
                        background: theme.blue,
                      },
                    }}
                  >
                    <Box>{t("profile:form.save")}</Box>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <TabsUnstyled defaultValue={0}>
                <TabsList>
                  <Tab sx={{ width: { xs: "169px", lg: "240px" }, height: { xs: "45.46px", lg: "56px" } }}>
                    {t("profile:profile")}
                  </Tab>
                  <Tab sx={{ width: { xs: "169px", lg: "240px" }, height: { xs: "45.46px", lg: "56px" } }}>
                    {t("profile:skill")}
                  </Tab>
                </TabsList>
                <Box
                  sx={{
                    border: "2px solid #03BCDB",
                    background: "#fff",
                    p: { xs: "40px 12px", lg: "37px 40px" },
                    width: "100%",
                  }}
                >
                  <TabPanel value={0}>
                    <Box
                      sx={{
                        display: { xs: "block", lg: "flex" },
                        marginBottom: "35px",
                        color: "#1A2944",
                      }}
                    >
                      <TitleContentTab>{t("profile:status")}</TitleContentTab>
                      <ContentTab>
                        <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}>
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </SelectCustom>
                      </ContentTab>
                    </Box>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:one-thing")}</TitleContentTab>
                      <ContentTab>
                        <Field placeholder={t("profile:form.placeholder.one-thing")} />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:self-introduction")}</TitleContentTab>
                      <ContentTab>
                        <FieldTextArea
                          placeholder={t("profile:form.placeholder.self-introduction")}
                          minRows={8}
                          sx={{
                            display: { xs: "block", lg: "none" },
                          }}
                        />
                        <FieldTextArea
                          placeholder={t("profile:form.placeholder.self-introduction")}
                          minRows={5}
                          sx={{
                            display: { xs: "none", lg: "block" },
                          }}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:occupation")}</TitleContentTab>
                      <ContentTab>
                        <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}>
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </SelectCustom>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:position")}</TitleContentTab>
                      <ContentTab>
                        <Field placeholder={t("profile:form.placeholder.position")} />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:employment-status")}</TitleContentTab>
                      <ContentTab>
                        <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}>
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </SelectCustom>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:introduce-yourself")}</TitleContentTab>
                      <ContentTab>
                        <FieldTextArea
                          placeholder={t("profile:form.placeholder.self-introduction")}
                          minRows={8}
                          sx={{
                            display: { xs: "block", lg: "none" },
                          }}
                        />
                        <FieldTextArea
                          placeholder={t("profile:form.placeholder.self-introduction")}
                          minRows={5}
                          sx={{
                            display: { xs: "none", lg: "block" },
                          }}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:address")}</TitleContentTab>
                      <ContentTab>
                        <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}>
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </SelectCustom>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:tag")}</TitleContentTab>
                      <ContentTab>
                        <Field placeholder={t("profile:form.placeholder.tag")} />
                        <Paper
                          sx={{
                            pl: 0,
                            mt: 1,
                            mb: 5,
                            display: "flex",
                            flexWrap: "wrap",
                            listStyle: "none",
                            boxShadow: "none",
                          }}
                          component="ul"
                        >
                          {chipData.map((data) => {
                            let icon;

                            return (
                              <ListItem key={data.key}>
                                <Chip
                                  icon={icon}
                                  label={data.label}
                                  onDelete={handleDelete(data)}
                                  deleteIcon={
                                    <Avatar
                                      sx={{ width: "16px", height: "16px" }}
                                      src="/assets/images/svg/delete.svg"
                                    />
                                  }
                                  sx={{
                                    pr: 1,
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "white",
                                    height: "22px",
                                    backgroundColor: theme.blue,
                                    borderRadius: "4px",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                />
                              </ListItem>
                            );
                          })}
                        </Paper>
                      </ContentTab>
                    </BoxContentTab>
                  </TabPanel>
                  <TabPanel value={1}>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:language")}</TitleContentTab>
                      <ContentTab>1</ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:framework")}</TitleContentTab>
                      <ContentTab>1</ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:infrastructure")}</TitleContentTab>
                      <ContentTab>1</ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:upstream-process")}</TitleContentTab>
                      <ContentTab>1</ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:english-experience")}</TitleContentTab>
                      <ContentTab>1</ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:language-experience")}</TitleContentTab>
                      <ContentTab>1</ContentTab>
                    </BoxContentTab>
                  </TabPanel>
                </Box>
              </TabsUnstyled>
            </Box>
            <Box sx={{ mt: "53px", textAlign: "center" }}>
              <Button
                sx={{
                  background: theme.blue,
                  borderRadius: "28px",
                  width: "240px",
                  "&:hover": {
                    background: theme.blue,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  保存する
                </Typography>
              </Button>
              <Box sx={{ mt: "40px" }}>
                <Link href="/#" sx={{ color: theme.blue, textDecoration: "none" }}>
                  編集をやめる
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </ContentComponent>
  );
};
export default ProfileSkillComponent;
