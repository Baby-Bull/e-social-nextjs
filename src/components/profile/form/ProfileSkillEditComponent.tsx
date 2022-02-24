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
import { MONTHS } from "src/constants/constants";

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
  "&:placeholder": {
    color: "red",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "#F4FDFF",
    fontSize: 16,
    padding: "9px 16px",
    borderRadius: "6px",
    fontFamily: "Noto Sans JP",
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

const ImgStar = styled(Avatar)({
  width: "13px",
  height: "15px",
});

const BoxEstimatedStar = styled(Box)({
  display: "flex",
  alignItems: "center",
  "@media (max-width: 1200px)": {
    display: "none",
  },
});

const TypoxEstimatedStar = styled(Typography)({
  fontSize: "14px",
  textDecorationLine: "underline",
  marginLeft: "10px",
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

  const levels = [
    {
      label: "触れた程度",
      value: "触れた程度",
      stars: ["/assets/images/star.png"],
    },
    {
      label: "独学で経験あり",
      value: "独学で経験あり",
      stars: ["/assets/images/star.png", "/assets/images/star.png"],
    },
    {
      label: "他者に補助を受けながらコーディングが可能",
      value: "他者に補助を受けながらコーディングが可能",
      stars: ["/assets/images/star.png", "/assets/images/star.png", "/assets/images/star.png"],
    },
    {
      label: "独力でコーディング可能",
      value: "独力でコーディング可能",
      stars: [
        "/assets/images/star.png",
        "/assets/images/star.png",
        "/assets/images/star.png",
        "/assets/images/star.png",
      ],
    },
    {
      label: "他者のコードをレビュー可能",
      value: "他者のコードをレビュー可能",
      stars: [
        "/assets/images/star.png",
        "/assets/images/star.png",
        "/assets/images/star.png",
        "/assets/images/star.png",
        "/assets/images/star.png",
      ],
    },
  ];
  const [currency, setCurrency] = React.useState(currencies[0].label);
  const [monthLanguage, setMonthLanguage] = React.useState(MONTHS[3].value);
  const [levelLanguage, setLevelLanguage] = React.useState(levels[4].value);
  const [monthFramework, setMonthFramework] = React.useState(MONTHS[3].value);
  const [levelFramework, setLevelFramework] = React.useState(levels[4].value);
  const [monthInfrastructure, setMonthInfrastructure] = React.useState(MONTHS[3].value);
  const [levelInfrastructure, setLevelInfrastructure] = React.useState(levels[4].value);

  /* event change select option */
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeMonthLanguage = (event) => {
    setMonthLanguage(event.target.value);
  };

  const handleChangeLevelLanguage = (event) => {
    setLevelLanguage(event.target.value);
  };

  const handleChangeMonthFramework = (event) => {
    setMonthFramework(event.target.value);
  };

  const handleChangeLevelFramework = (event) => {
    setLevelFramework(event.target.value);
  };

  const handleChangeMonthInfrastructure = (event) => {
    setMonthInfrastructure(event.target.value);
  };

  const handleChangeLevelInfrastructure = (event) => {
    setLevelInfrastructure(event.target.value);
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "デザイナー" },
    { key: 1, label: "エンジニア" },
    { key: 2, label: "デザイナー" },
    { key: 3, label: "エンジニア" },
  ]);

  const [skillLanguageData, setSkillLanguage] = React.useState([{ key: 0, language: "Java", year: 12, month: 3 }]);
  const [skillFrameworkData, setSkillFramework] = React.useState([{ key: 0, language: "Java", year: 12, month: 3 }]);
  const [skillInfrastructureData, setSkillInfrastructure] = React.useState([
    { key: 0, language: "Java", year: 12, month: 3 },
  ]);

  /* Delete item */
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleDeleteSkillLanguage = (SkillLanguageToDelete) => () => {
    setSkillLanguage((languages) => languages.filter((language) => language.key !== SkillLanguageToDelete.key));
  };

  const handleDeleteSkillFramework = (SkillFrameworkToDelete) => () => {
    setSkillFramework((frameworks) => frameworks.filter((framework) => framework.key !== SkillFrameworkToDelete.key));
  };

  const handleDeleteSkillInfrastructure = (SkillInfrastructureToDelete) => () => {
    setSkillInfrastructure((infrastructures) =>
      infrastructures.filter((infrastructure) => infrastructure.key !== SkillInfrastructureToDelete.key),
    );
  };

  /* Click add item item */
  const addSkillLanguageClick = (key) => () => {
    // @ts-ignore
    setSkillLanguage([...skillLanguageData, { key: key + 1, language: "", year: "", month: "" }]);
  };

  const addSkillFrameworkClick = (key) => () => {
    // @ts-ignore
    setSkillFramework([...skillFrameworkData, { key: key + 1, language: "", year: "", month: "" }]);
  };

  const addSkillInfrastructureClick = (key) => () => {
    // @ts-ignore
    setSkillInfrastructure([...skillInfrastructureData, { key: key + 1, language: "", year: "", month: "" }]);
  };

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
              <Box
                sx={{
                  position: "relative",
                  display: { xs: "flex", lg: "block" },
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/profile/avatar_2.png"
                  sx={{
                    width: { xs: "80px", lg: "160px" },
                    height: { xs: "80px", lg: "160px" },
                    mt: { xs: "-40px", lg: "0" },
                    position: { xs: "relative", lg: "unset" },
                  }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/icon/ic_camera.png"
                  sx={{
                    width: "23.33px",
                    height: "21px",
                    opacity: 0.6,
                    position: "absolute",
                    display: { xs: "block", lg: "none" },
                    mt: "10px",
                  }}
                />
                <Avatar
                  sx={{
                    bgcolor: { xs: "transparent", lg: theme.navy },
                    position: "absolute",
                    bottom: 50,
                    right: 10,
                    display: { xs: "none", lg: "flex" },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/icon/ic_camera.png"
                    sx={{
                      width: "20px",
                      height: "18px",
                      m: "0 auto",
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
                  top: { xs: "-120px", lg: "20px" },
                  width: { xs: "100%", lg: "96px" },
                }}
              >
                <Link href="/my-profile/edit" sx={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      background: theme.blue,
                      color: "#fff",
                      fontWeight: 700,
                      lineHeight: "23.17",
                      width: { xs: "100%", lg: "96px" },
                      height: { xs: "48px", lg: "40px" },
                      dispaly: "flex",
                      alignItems: "center",
                      borderRadius: { xs: "12px", lg: "4px" },
                      "&:hover": {
                        background: theme.blue,
                      },
                    }}
                  >
                    {t("profile:form.save")}
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
                    p: { xs: "40px 12px", lg: "40px 28px" },
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
                            <MenuItem key={option.value} value={option.label}>
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
                            <MenuItem key={option.value} value={option.label}>
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
                            <MenuItem key={option.value} value={option.label}>
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
                            <MenuItem key={option.value} value={option.label}>
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
                    <Box
                      sx={{
                        display: { xs: "flex", lg: "none" },
                        justifyContent: "end",
                        alignItems: "center",
                        mb: "30px",
                      }}
                    >
                      <ImgStar src="/assets/images/star.png" />
                      <Typography sx={{ ml: "10px" }}>{t("profile:form.estimated-star")}</Typography>
                    </Box>
                    <BoxContentTab>
                      <TitleContentTab>
                        {t("profile:language")}
                        <BoxEstimatedStar>
                          <ImgStar src="/assets/images/star.png" />
                          <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar>
                        </BoxEstimatedStar>
                      </TitleContentTab>
                      <ContentTab>
                        {skillLanguageData.map((option) => (
                          <Box key={option.key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <Field
                                  placeholder={t("profile:form.placeholder.language")}
                                  value={option.language}
                                  sx={{ width: { xs: "100%", lg: "160px" } }}
                                />
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                              >
                                <Field
                                  placeholder={t("profile:form.placeholder.years-of-experience")}
                                  value={option.year}
                                  sx={{ width: "80px" }}
                                />
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:year")}
                                </Typography>
                                <SelectCustom
                                  id="outlined-select-month"
                                  value={monthLanguage}
                                  onChange={handleChangeMonthLanguage}
                                  sx={{ width: { xs: "80px", lg: "80px" } }}
                                >
                                  {MONTHS.map((monthOption) => (
                                    <MenuItem key={monthOption.value} value={monthOption.value}>
                                      {monthOption.label}
                                    </MenuItem>
                                  ))}
                                </SelectCustom>
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:month")}
                                </Typography>
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ width: { xs: "78%", lg: "241px" } }}>
                                  <SelectCustom
                                    id="outlined-select-level"
                                    value={levelLanguage}
                                    onChange={handleChangeLevelLanguage}
                                    sx={{ width: "100%" }}
                                  >
                                    {levels.map((levelOption) => (
                                      <MenuItem key={levelOption.value} value={levelOption.value}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                          {levelOption.stars.map((star) => (
                                            <Box>
                                              <ImgStar src={star} />
                                            </Box>
                                          ))}
                                          <Box sx={{ ml: "7px" }}>{levelOption.label}</Box>
                                        </Box>
                                      </MenuItem>
                                    ))}
                                  </SelectCustom>
                                </Box>
                                <Box>
                                  <Button
                                    sx={{
                                      color: theme.gray,
                                      fontSize: "14px",
                                      fontWeight: 700,
                                      lineHeight: "20.27px",
                                      display: skillLanguageData.length > 1 ? "block" : "none",
                                      height: "32px",
                                      p: 0,
                                    }}
                                    onClick={handleDeleteSkillLanguage(option)}
                                  >
                                    <Box
                                      sx={{
                                        height: "32px",
                                        width: "54px",
                                        borderRadius: "8px",
                                        background: { xs: "#E4E6EB", lg: "unset" },
                                        display: "flex",
                                        alignItems: "center",
                                        ml: "20px",
                                        p: "6px",
                                      }}
                                    >
                                      {t("profile:form.delete")}
                                    </Box>
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                        <Box>
                          <Button
                            sx={{
                              color: theme.blue,
                              fontSize: "14px",
                              fontWeight: 700,
                              lineHeight: "20.27px",
                            }}
                            onClick={addSkillLanguageClick(skillLanguageData[skillLanguageData.length - 1].key)}
                          >
                            {t("profile:form.to-add")}
                          </Button>
                        </Box>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>
                        {t("profile:framework")}
                        <BoxEstimatedStar>
                          <ImgStar src="/assets/images/star.png" />
                          <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar>
                        </BoxEstimatedStar>
                      </TitleContentTab>
                      <ContentTab>
                        {skillFrameworkData.map((option) => (
                          <Box key={option.key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <Field
                                  placeholder={t("profile:form.placeholder.language")}
                                  value={option.language}
                                  sx={{ width: { xs: "100%", lg: "160px" } }}
                                />
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                              >
                                <Field
                                  placeholder={t("profile:form.placeholder.years-of-experience")}
                                  value={option.year}
                                  sx={{ width: "80px" }}
                                />
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:year")}
                                </Typography>
                                <SelectCustom
                                  id="outlined-select-month"
                                  value={monthFramework}
                                  onChange={handleChangeMonthFramework}
                                  sx={{ width: { xs: "80px", lg: "80px" } }}
                                >
                                  {MONTHS.map((monthOption) => (
                                    <MenuItem key={monthOption.value} value={monthOption.value}>
                                      {monthOption.label}
                                    </MenuItem>
                                  ))}
                                </SelectCustom>
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:month")}
                                </Typography>
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ width: { xs: "78%", lg: "241px" } }}>
                                  <SelectCustom
                                    id="outlined-select-level"
                                    value={levelFramework}
                                    onChange={handleChangeLevelFramework}
                                    sx={{ width: "100%" }}
                                  >
                                    {levels.map((levelOption) => (
                                      <MenuItem key={levelOption.value} value={levelOption.value}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                          {levelOption.stars.map((star) => (
                                            <Box>
                                              <ImgStar src={star} />
                                            </Box>
                                          ))}
                                          <Box sx={{ ml: "7px" }}>{levelOption.label}</Box>
                                        </Box>
                                      </MenuItem>
                                    ))}
                                  </SelectCustom>
                                </Box>
                                <Box>
                                  <Button
                                    sx={{
                                      color: theme.gray,
                                      fontSize: "14px",
                                      fontWeight: 700,
                                      lineHeight: "20.27px",
                                      display: skillFrameworkData.length > 1 ? "block" : "none",
                                      height: "32px",
                                      p: 0,
                                    }}
                                    onClick={handleDeleteSkillFramework(option)}
                                  >
                                    <Box
                                      sx={{
                                        height: "32px",
                                        width: "54px",
                                        borderRadius: "8px",
                                        background: { xs: "#E4E6EB", lg: "unset" },
                                        display: "flex",
                                        alignItems: "center",
                                        ml: "20px",
                                        p: "6px",
                                      }}
                                    >
                                      {t("profile:form.delete")}
                                    </Box>
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                        <Box>
                          <Button
                            sx={{
                              color: theme.blue,
                              fontSize: "14px",
                              fontWeight: 700,
                              lineHeight: "20.27px",
                            }}
                            onClick={addSkillFrameworkClick(skillFrameworkData[skillFrameworkData.length - 1].key)}
                          >
                            {t("profile:form.to-add")}
                          </Button>
                        </Box>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>
                        {t("profile:infrastructure")}
                        <BoxEstimatedStar>
                          <ImgStar src="/assets/images/star.png" />
                          <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar>
                        </BoxEstimatedStar>
                      </TitleContentTab>
                      <ContentTab>
                        {skillInfrastructureData.map((option) => (
                          <Box key={option.key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <Field
                                  placeholder={t("profile:form.placeholder.language")}
                                  value={option.language}
                                  sx={{ width: { xs: "100%", lg: "160px" } }}
                                />
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                              >
                                <Field
                                  placeholder={t("profile:form.placeholder.years-of-experience")}
                                  value={option.year}
                                  sx={{ width: "80px" }}
                                />
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:year")}
                                </Typography>
                                <SelectCustom
                                  id="outlined-select-month"
                                  value={monthInfrastructure}
                                  onChange={handleChangeMonthInfrastructure}
                                  sx={{ width: { xs: "80px", lg: "80px" } }}
                                >
                                  {MONTHS.map((monthOption) => (
                                    <MenuItem key={monthOption.value} value={monthOption.value}>
                                      {monthOption.label}
                                    </MenuItem>
                                  ))}
                                </SelectCustom>
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:month")}
                                </Typography>
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ width: { xs: "78%", lg: "241px" } }}>
                                  <SelectCustom
                                    id="outlined-select-level"
                                    value={levelInfrastructure}
                                    onChange={handleChangeLevelInfrastructure}
                                    sx={{ width: "100%" }}
                                  >
                                    {levels.map((levelOption) => (
                                      <MenuItem key={levelOption.value} value={levelOption.value}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                          {levelOption.stars.map((star) => (
                                            <Box>
                                              <ImgStar src={star} />
                                            </Box>
                                          ))}
                                          <Box sx={{ ml: "7px" }}>{levelOption.label}</Box>
                                        </Box>
                                      </MenuItem>
                                    ))}
                                  </SelectCustom>
                                </Box>
                                <Box>
                                  <Button
                                    sx={{
                                      color: theme.gray,
                                      fontSize: "14px",
                                      fontWeight: 700,
                                      lineHeight: "20.27px",
                                      display: skillInfrastructureData.length > 1 ? "block" : "none",
                                      height: "32px",
                                      p: 0,
                                    }}
                                    onClick={handleDeleteSkillInfrastructure(option)}
                                  >
                                    <Box
                                      sx={{
                                        height: "32px",
                                        width: "54px",
                                        borderRadius: "8px",
                                        background: { xs: "#E4E6EB", lg: "unset" },
                                        display: "flex",
                                        alignItems: "center",
                                        ml: "20px",
                                        p: "6px",
                                      }}
                                    >
                                      {t("profile:form.delete")}
                                    </Box>
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                        <Box>
                          <Button
                            sx={{
                              color: theme.blue,
                              fontSize: "14px",
                              fontWeight: 700,
                              lineHeight: "20.27px",
                            }}
                            onClick={addSkillInfrastructureClick(
                              skillInfrastructureData[skillInfrastructureData.length - 1].key,
                            )}
                          >
                            {t("profile:form.to-add")}
                          </Button>
                        </Box>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:upstream-process")}</TitleContentTab>
                      <ContentTab>
                        <Field placeholder={t("profile:form.placeholder.upstream-process")} />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:english-experience")}</TitleContentTab>
                      <ContentTab>
                        <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}>
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.label}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </SelectCustom>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:language-experience")}</TitleContentTab>
                      <ContentTab>
                        <FieldTextArea placeholder={t("profile:form.placeholder.language-experience")} minRows={5} />
                      </ContentTab>
                    </BoxContentTab>
                  </TabPanel>
                </Box>
              </TabsUnstyled>
            </Box>
            <Box sx={{ mt: "53px", textAlign: "center" }}>
              <Link href="/my-profile/edit" underline="none">
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
                    {t("profile:form.save")}
                  </Typography>
                </Button>
              </Link>
              <Box sx={{ mt: "40px" }}>
                <Link href="/my-profile" sx={{ color: theme.blue, textDecoration: "none" }}>
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
