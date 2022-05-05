import { Avatar, Box, Button, Grid, InputBase, Link, Paper, Select, Typography } from "@mui/material";
import React, { useState } from "react";
/* eslint-disable */
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
/* eslint-enable */
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import ContentComponent from "src/components/layouts/ContentComponent";
import theme from "src/theme";
import { REGEX_RULES } from "src/messages/validate";
import { Field } from "src/components/profile/form/InputProfileComponent";
import { FieldArea } from "src/components/profile/form/TextAreaComponent";
import { FieldSelect } from "src/components/profile/form/SelectComponent";
import {
  STATUS_OPTIONS,
  JOBS,
  EMPLOYEE_STATUS,
  PROFILE_JAPAN_PROVINCE_OPTIONS,
  MONTHS,
  LEVELS,
} from "src/constants/constants";

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
  marginRight: "6px",
});

const InputCustom = styled(TextField)({
  width: "100%",
  borderRadius: "6px",
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
const SelectCustom = styled(Select)({
  borderRadius: 6,
  width: "46%",
  height: "40px",
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

const ImgStarLevel = ({ countStar }) => {
  const rows = [];
  for (let i = 0; i < countStar; i++) {
    rows.push("/assets/images/star.png");
  }
  return (
    <Box sx={{ display: "flex" }}>
      {rows?.map((value, key) => (
        <Box key={key}>
          <img src={value} alt="star" />
        </Box>
      ))}
    </Box>
  );
};

const ProfileSkillComponent = () => {
  const { t } = useTranslation();

  const [status, setStatus] = React.useState(STATUS_OPTIONS[0].value);
  const [job, setJob] = React.useState(JOBS[0].value);
  const [employee, setEmployee] = React.useState(EMPLOYEE_STATUS[0].value);
  const [address, setAddress] = React.useState(PROFILE_JAPAN_PROVINCE_OPTIONS[0].value);
  const [inputTags, setInputTags] = useState([]);
  const [isSkillProfile, setIsSkillProfile] = useState(false);
  const [skillLanguageData, setSkillLanguage] = React.useState([
    { key: 0, name: "Java", experience_year: 12, experience_month: 3, level: 1, category: "programLanguage" },
  ]);
  // const [skillFrameworkData, setSkillFramework] = React.useState([{ key: 0, language: "Java", year: 12, month: 3 }]);
  // const [skillInfrastructureData, setSkillInfrastructure] = React.useState([
  //   { key: 0, language: "Java", year: 12, month: 3 },
  // ]);
  const [monthLanguage] = React.useState(MONTHS[3].value);
  const [levelLanguage] = React.useState(LEVELS[4].value);
  // const [monthFramework, setMonthFramework] = React.useState(MONTHS[3].value);
  // const [levelFramework, setLevelFramework] = React.useState(LEVELS[4].value);
  // const [monthInfrastructure, setMonthInfrastructure] = React.useState(MONTHS[3].value);
  // const [levelInfrastructure, setLevelInfrastructure] = React.useState(LEVELS[4].value);
  const [profileRequest, setProfileRequest] = React.useState({
    username: null,
    twitter_url: null,
    facebook_url: null,
    github_url: null,
    hitokoto: null,
    self_description: null,
    status: null,
    job: null,
    job_position: null,
    employee: null,
    discussion_topic: null,
    address: null,
    tags: [],
  });

  const errorMessages = {
    username: null,
    twitter_url: null,
    facebook_url: null,
    github_url: null,
    hitokoto: null,
    self_description: null,
    status: null,
    job: null,
    job_position: null,
    employee: null,
    discussion_topic: null,
    address: null,
    tags: null,
    skillLanguage: [],
  };

  const [errorValidates, setErrorValidates] = useState({
    username: null,
    twitter_url: null,
    facebook_url: null,
    github_url: null,
    hitokoto: null,
    self_description: null,
    status: null,
    job: null,
    job_position: null,
    employee: null,
    discussion_topic: null,
    address: null,
    tags: null,
    skillLanguage: [],
  });

  const [messSkillLanguageErr, setMessSkillLanguageErr] = useState([{ key: null, mess: null, type: null }]);

  /* event change select option */

  // const handleChangeMonthLanguage = (event) => {
  //   setMonthLanguage(event.target.value);
  // };
  //
  // const handleChangeLevelLanguage = (event) => {
  //   setLevelLanguage(event.target.value);
  // };
  //
  // const handleChangeMonthFramework = (event) => {
  //   setMonthFramework(event.target.value);
  // };
  //
  // const handleChangeLevelFramework = (event) => {
  //   setLevelFramework(event.target.value);
  // };
  //
  // const handleChangeMonthInfrastructure = (event) => {
  //   setMonthInfrastructure(event.target.value);
  // };
  //
  // const handleChangeLevelInfrastructure = (event) => {
  //   setLevelInfrastructure(event.target.value);
  // };
  //
  // /* Delete item */
  const handleDeleteSkillLanguage = (SkillLanguageToDelete) => () => {
    setSkillLanguage((languages) => languages.filter((language) => language.key !== SkillLanguageToDelete.key));
  };
  //
  // const handleDeleteSkillFramework = (SkillFrameworkToDelete) => () => {
  //   setSkillFramework((frameworks) => frameworks.filter((framework) => framework.key !== SkillFrameworkToDelete.key));
  // };
  //
  // const handleDeleteSkillInfrastructure = (SkillInfrastructureToDelete) => () => {
  //   setSkillInfrastructure((infrastructures) =>
  //     infrastructures.filter((infrastructure) => infrastructure.key !== SkillInfrastructureToDelete.key),
  //   );
  // };

  const arrMessErrors = [];

  const removeSearchTag = (indexRemove) => {
    setInputTags(inputTags.filter((_, index) => index !== indexRemove));
  };

  /* Click add item item */
  const addSkillLanguageClick = (key) => () => {
    // @ts-ignore
    // @ts-ignore
    setSkillLanguage([
      ...skillLanguageData,
      { key: key + 1, name: "", experience_year: 1, experience_month: 1, level: 1, category: "programLanguage" },
    ]);
  };

  // const addSkillFrameworkClick = (key) => () => {
  //   // @ts-ignore
  //   setSkillFramework([...skillFrameworkData, { key: key + 1, language: "", year: "", month: "" }]);
  // };
  //
  // const addSkillInfrastructureClick = (key) => () => {
  //   // @ts-ignore
  //   setSkillInfrastructure([...skillInfrastructureData, { key: key + 1, language: "", year: "", month: "" }]);
  // };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setInputTags([...inputTags, e.target.value]);
      (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
    }
  };

  const onChangeProfileSkillRequest = (key: number, e: any) => {
    const { name, value } = e.target;
    // console.log(name)
    // eslint-disable-next-line no-shadow
    setSkillLanguage((skillLanguageData) =>
      skillLanguageData.map((el) =>
        Number(el.key) === Number(key)
          ? {
              ...el,
              [name]: value,
            }
          : el,
      ),
    );
  };
  const onChangeProfileRequest = (key: string, value: any) => {
    if (key === "status") {
      setStatus(value);
    }

    if (key === "job") {
      setJob(value);
    }

    if (key === "employee") {
      setEmployee(value);
    }

    if (key === "address") {
      setAddress(value);
    }

    setProfileRequest({
      ...profileRequest,
      [key]: typeof value === "string" ? value.trim() : value,
    });
  };

  const handleValidateForm = () => {
    const isValidForm = true;
    // validate user name
    if (profileRequest?.username?.length > 50) {
      errorMessages.username = "tên dài quá";
    }

    if (!REGEX_RULES.username_profile.test(profileRequest?.username)) {
      errorMessages.username = "Sai định dạng";
    }

    if (!profileRequest?.username?.length) {
      errorMessages.username = "Nhập tên";
    }

    // validate hitokoto
    if (profileRequest?.hitokoto?.length > 40) {
      errorMessages.hitokoto = "dài quá 40";
    }

    if (!REGEX_RULES.text_input.test(profileRequest?.hitokoto)) {
      errorMessages.hitokoto = "Sai định dạng";
    }

    // validate self_description
    if (profileRequest?.self_description?.length > 1000) {
      errorMessages.self_description = "dài quá 1000";
    }

    if (!REGEX_RULES.text_input.test(profileRequest?.self_description)) {
      errorMessages.self_description = "Sai định dạng";
    }

    // validate status
    if (!profileRequest?.status) {
      errorMessages.status = "Chọn status";
    }

    // validate job
    if (!profileRequest?.job) {
      errorMessages.job = "Chọn job";
    }

    // validate job_position
    if (profileRequest?.job_position?.length > 1000) {
      errorMessages.job_position = "dài quá 1000";
    }

    if (!REGEX_RULES.text_input.test(profileRequest?.job_position)) {
      errorMessages.job_position = "Sai định dạng";
    }

    // validate employee
    if (!profileRequest?.employee) {
      errorMessages.employee = "Chọn employee";
    }

    // validate discussion_topic
    if (profileRequest?.discussion_topic?.length > 100) {
      errorMessages.discussion_topic = "dài quá 100";
    }

    if (!REGEX_RULES.text_input.test(profileRequest?.discussion_topic)) {
      errorMessages.discussion_topic = "Sai định dạng";
    }

    // validate address
    if (!profileRequest?.address) {
      errorMessages.address = "Chọn address";
    }

    if (inputTags?.length < 2) {
      errorMessages.tags = "Chọn thẻ taggg";
    }

    if (isSkillProfile) {
      for (let i = 0; i < skillLanguageData.length; i++) {
        if (skillLanguageData[i]?.name.length > 1) {
          arrMessErrors.push({ key: `name_${skillLanguageData[i]?.key}`, mess: "dai hơn 40", type: "max_length" });
        }

        if (!REGEX_RULES.text_input.test(skillLanguageData[i]?.name)) {
          arrMessErrors.push({ key: `name_${skillLanguageData[i]?.key}`, mess: "sai format", type: "wrong_format" });
        }

        // eslint-disable-next-line no-loop-func,no-shadow
        // setMessSkillLanguageErr((messSkillLanguageErr) =>
        //   messSkillLanguageErr.map((el) =>
        //     skillLanguageData[i]?.name.length > 1
        //       ? {
        //           ...el,
        //           key: `name_${skillLanguageData[i]?.key}`,
        //           mess: "dai hơn 40",
        //           type: "max_length",
        //         }
        //       : el,
        //   ),
        // );
      }
    }
    setMessSkillLanguageErr(arrMessErrors);
    setErrorValidates(errorMessages);
    return isValidForm;
  };

  const submitUserReportRequest = async () => {
    if (handleValidateForm()) {
      setProfileRequest({
        ...profileRequest,
        tags: inputTags,
      });
      // console.log(skillLanguageData);
      // console.log(profileRequest);
    }
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
                  <Field
                    id="username"
                    placeholder="田中太郎"
                    onChangeValue={onChangeProfileRequest}
                    error={errorValidates.username}
                  />
                </Box>
                <TypoProfileMobile>Twitter</TypoProfileMobile>
                <Box sx={{ mb: "12px" }}>
                  <Field
                    id="twitter_url"
                    placeholder={t("profile:form.placeholder.twitter")}
                    onChangeValue={onChangeProfileRequest}
                  />
                </Box>
                <TypoProfileMobile>Facebook</TypoProfileMobile>
                <Box sx={{ mb: "12px" }}>
                  <Field
                    id="facebook_url"
                    placeholder={t("profile:form.placeholder.facebook")}
                    onChangeValue={onChangeProfileRequest}
                  />
                </Box>
                <TypoProfileMobile>GitHub</TypoProfileMobile>
                <Box>
                  <Field
                    id="github_url"
                    placeholder={t("profile:form.placeholder.github")}
                    onChangeValue={onChangeProfileRequest}
                  />
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
                  <Tab
                    sx={{ width: { xs: "169px", lg: "240px" }, height: { xs: "45.46px", lg: "56px" } }}
                    onClick={() => setIsSkillProfile(false)}
                  >
                    {t("profile:profile")}
                  </Tab>
                  <Tab
                    sx={{ width: { xs: "169px", lg: "240px" }, height: { xs: "45.46px", lg: "56px" } }}
                    onClick={() => setIsSkillProfile(true)}
                  >
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
                        <FieldSelect
                          id="status"
                          options={STATUS_OPTIONS}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.status}
                          value={status}
                        />
                      </ContentTab>
                    </Box>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:one-thing")}</TitleContentTab>
                      <ContentTab>
                        <Field
                          id="hitokoto"
                          placeholder={t("profile:form.placeholder.one-thing")}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.hitokoto}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:self-introduction")}</TitleContentTab>
                      <ContentTab>
                        <FieldArea
                          id="self_description"
                          placeholder={t("profile:form.placeholder.self-introduction")}
                          minRows={5}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.self_description}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:occupation")}</TitleContentTab>
                      <ContentTab>
                        <FieldSelect
                          id="job"
                          options={JOBS}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.job}
                          value={job}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:position")}</TitleContentTab>
                      <ContentTab>
                        <Field
                          id="job_position"
                          placeholder={t("profile:form.placeholder.position")}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.job_position}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:employment-status")}</TitleContentTab>
                      <ContentTab>
                        <FieldSelect
                          id="employee"
                          options={EMPLOYEE_STATUS}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.employee}
                          value={employee}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:discussion-topic")}</TitleContentTab>
                      <ContentTab>
                        <FieldArea
                          id="discussion_topic"
                          placeholder={t("profile:form.placeholder.discussion-topic")}
                          minRows={5}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.self_description}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:address")}</TitleContentTab>
                      <ContentTab>
                        <FieldSelect
                          id="address"
                          options={PROFILE_JAPAN_PROVINCE_OPTIONS}
                          onChangeValue={onChangeProfileRequest}
                          error={errorValidates.address}
                          value={address}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:tag")}</TitleContentTab>
                      <ContentTab>
                        <InputBase
                          className="input-search-tag"
                          id="input_search_tag"
                          onKeyPress={onKeyPress}
                          placeholder={t("profile:form.placeholder.tag")}
                          sx={{
                            flex: 1,
                            width: "100%",
                            borderRadius: "6px",
                            border: errorValidates.tags ? "solid 1px #FF9458" : "none",
                            "& fieldset": {
                              border: "none",
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
                          }}
                        />
                        <Paper
                          sx={{
                            pl: 0,
                            mt: 1,
                            mb: 1,
                            display: inputTags.length ? "flex" : "none",
                            flexWrap: "wrap",
                            listStyle: "none",
                            boxShadow: "none",
                          }}
                          component="ul"
                        >
                          {inputTags.map((tag, index) => (
                            <ListItem key={index}>
                              <Box
                                sx={{
                                  padding: "8px",
                                  fontSize: 12,
                                  fontWeight: 500,
                                  color: "white",
                                  height: "22px",
                                  backgroundColor: theme.blue,
                                  borderRadius: "4px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                onClick={() => removeSearchTag(index)}
                              >
                                {tag}
                                <Box
                                  sx={{
                                    background: "#fff",
                                    marginLeft: "4px",
                                    borderRadius: "50%",
                                    padding: "2px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <Avatar
                                    sx={{ width: "10px", height: "10px" }}
                                    src="/assets/images/svg/delete-x-white.svg"
                                  />
                                </Box>
                              </Box>
                            </ListItem>
                          ))}
                        </Paper>
                        <Box sx={{ color: "#FF9458", lineHeight: "20px", fontWeight: "400", fontSize: "14px" }}>
                          {errorValidates.tags}
                        </Box>
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
                        {skillLanguageData.map((option, key) => (
                          <Box key={key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <InputCustom
                                  onChange={(e) => onChangeProfileSkillRequest(option.key, e)}
                                  name="name"
                                  placeholder={t("profile:form.placeholder.language")}
                                />
                                {messSkillLanguageErr?.map((item, keyItem) =>
                                  item.key === `name_${option.key}` ? <Box key={keyItem}>{item.mess}</Box> : null,
                                )}
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                              >
                                <Box sx={{ width: "80px" }}>
                                  <InputCustom
                                    onChange={(e) => onChangeProfileSkillRequest(option.key, e)}
                                    name="experience_year"
                                    placeholder={t("profile:form.placeholder.years-of-experience")}
                                    type="number"
                                  />
                                </Box>
                                <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                  {t("profile:year")}
                                </Typography>
                                <SelectCustom
                                  id="outlined-select-month"
                                  value={monthLanguage}
                                  onChange={(e) => onChangeProfileSkillRequest(option.key, e)}
                                  sx={{ width: { xs: "80px", lg: "80px" } }}
                                  name="month"
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
                                    onChange={(e) => onChangeProfileSkillRequest(option.key, e)}
                                    sx={{ width: "100%" }}
                                    name="level"
                                  >
                                    {LEVELS.map((levelOption) => (
                                      <MenuItem key={levelOption.value} value={levelOption.value}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                          <ImgStarLevel countStar={levelOption.value} />
                                          <Box sx={{ ml: "7px" }}>{levelOption.label}</Box>
                                        </Box>
                                      </MenuItem>
                                    ))}
                                  </SelectCustom>
                                </Box>
                              </Box>
                              <Box>
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
                    {/* <BoxContentTab> */}
                    {/*  <TitleContentTab> */}
                    {/*    {t("profile:framework")} */}
                    {/*    <BoxEstimatedStar> */}
                    {/*      <ImgStar src="/assets/images/star.png" /> */}
                    {/*      <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar> */}
                    {/*    </BoxEstimatedStar> */}
                    {/*  </TitleContentTab> */}
                    {/*  <ContentTab> */}
                    {/*    {skillFrameworkData.map((option) => ( */}
                    {/*      <Box key={option.key} sx={{ mb: "15px" }}> */}
                    {/*        <Box sx={{ display: { xs: "block", lg: "flex" } }}> */}
                    {/*          <Box> */}
                    {/*            /!* <Field *!/ */}
                    {/*            /!*  placeholder={t("profile:form.placeholder.language")} *!/ */}
                    {/*            /!*  value={option.language} *!/ */}
                    {/*            /!*  sx={{ width: { xs: "100%", lg: "160px" } }} *!/ */}
                    {/*            /!* /> *!/ */}
                    {/*          </Box> */}
                    {/*          <Box */}
                    {/*            sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }} */}
                    {/*          > */}
                    {/*            /!* <Field *!/ */}
                    {/*            /!*  placeholder={t("profile:form.placeholder.years-of-experience")} *!/ */}
                    {/*            /!*  value={option.year} *!/ */}
                    {/*            /!*  sx={{ width: "80px" }} *!/ */}
                    {/*            /!* /> *!/ */}
                    {/*            <Typography fontSize={14} sx={{ m: "0 8px" }}> */}
                    {/*              {t("profile:year")} */}
                    {/*            </Typography> */}
                    {/*            <SelectCustom */}
                    {/*              id="outlined-select-month" */}
                    {/*              value={monthFramework} */}
                    {/*              onChange={handleChangeMonthFramework} */}
                    {/*              sx={{ width: { xs: "80px", lg: "80px" } }} */}
                    {/*            > */}
                    {/*              {MONTHS.map((monthOption) => ( */}
                    {/*                <MenuItem key={monthOption.value} value={monthOption.value}> */}
                    {/*                  {monthOption.label} */}
                    {/*                </MenuItem> */}
                    {/*              ))} */}
                    {/*            </SelectCustom> */}
                    {/*            <Typography fontSize={14} sx={{ m: "0 8px" }}> */}
                    {/*              {t("profile:month")} */}
                    {/*            </Typography> */}
                    {/*          </Box> */}
                    {/*          <Box sx={{ display: "flex" }}> */}
                    {/*            <Box sx={{ width: { xs: "78%", lg: "241px" } }}> */}
                    {/*              <SelectCustom */}
                    {/*                id="outlined-select-level" */}
                    {/*                value={levelFramework} */}
                    {/*                onChange={handleChangeLevelFramework} */}
                    {/*                sx={{ width: "100%" }} */}
                    {/*              > */}
                    {/*                {LEVELS.map((levelOption) => ( */}
                    {/*                  <MenuItem key={levelOption.value} value={levelOption.value}> */}
                    {/*                    <Box sx={{ display: "flex", alignItems: "center" }}> */}
                    {/*                      {levelOption.stars.map((star) => ( */}
                    {/*                        <Box> */}
                    {/*                          <ImgStar src={star} /> */}
                    {/*                        </Box> */}
                    {/*                      ))} */}
                    {/*                      <Box sx={{ ml: "7px" }}>{levelOption.label}</Box> */}
                    {/*                    </Box> */}
                    {/*                  </MenuItem> */}
                    {/*                ))} */}
                    {/*              </SelectCustom> */}
                    {/*            </Box> */}
                    {/*            <Box> */}
                    {/*              <Button */}
                    {/*                sx={{ */}
                    {/*                  color: theme.gray, */}
                    {/*                  fontSize: "14px", */}
                    {/*                  fontWeight: 700, */}
                    {/*                  lineHeight: "20.27px", */}
                    {/*                  display: skillFrameworkData.length > 1 ? "block" : "none", */}
                    {/*                  height: "32px", */}
                    {/*                  p: 0, */}
                    {/*                }} */}
                    {/*                onClick={handleDeleteSkillFramework(option)} */}
                    {/*              > */}
                    {/*                <Box */}
                    {/*                  sx={{ */}
                    {/*                    height: "32px", */}
                    {/*                    width: "54px", */}
                    {/*                    borderRadius: "8px", */}
                    {/*                    background: { xs: "#E4E6EB", lg: "unset" }, */}
                    {/*                    display: "flex", */}
                    {/*                    alignItems: "center", */}
                    {/*                    ml: "20px", */}
                    {/*                    p: "6px", */}
                    {/*                  }} */}
                    {/*                > */}
                    {/*                  {t("profile:form.delete")} */}
                    {/*                </Box> */}
                    {/*              </Button> */}
                    {/*            </Box> */}
                    {/*          </Box> */}
                    {/*        </Box> */}
                    {/*      </Box> */}
                    {/*    ))} */}
                    {/*    <Box> */}
                    {/*      <Button */}
                    {/*        sx={{ */}
                    {/*          color: theme.blue, */}
                    {/*          fontSize: "14px", */}
                    {/*          fontWeight: 700, */}
                    {/*          lineHeight: "20.27px", */}
                    {/*        }} */}
                    {/*        onClick={addSkillFrameworkClick(skillFrameworkData[skillFrameworkData.length - 1].key)} */}
                    {/*      > */}
                    {/*        {t("profile:form.to-add")} */}
                    {/*      </Button> */}
                    {/*    </Box> */}
                    {/*  </ContentTab> */}
                    {/* </BoxContentTab> */}
                    {/* <BoxContentTab> */}
                    {/*  <TitleContentTab> */}
                    {/*    {t("profile:infrastructure")} */}
                    {/*    <BoxEstimatedStar> */}
                    {/*      <ImgStar src="/assets/images/star.png" /> */}
                    {/*      <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar> */}
                    {/*    </BoxEstimatedStar> */}
                    {/*  </TitleContentTab> */}
                    {/*  <ContentTab> */}
                    {/*    {skillInfrastructureData.map((option) => ( */}
                    {/*      <Box key={option.key} sx={{ mb: "15px" }}> */}
                    {/*        <Box sx={{ display: { xs: "block", lg: "flex" } }}> */}
                    {/*          <Box> */}
                    {/*            <Field */}
                    {/*              placeholder={t("profile:form.placeholder.language")} */}
                    {/*              value={option.language} */}
                    {/*              sx={{ width: { xs: "100%", lg: "160px" } }} */}
                    {/*            /> */}
                    {/*          </Box> */}
                    {/*          <Box */}
                    {/*            sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }} */}
                    {/*          > */}
                    {/*            /!* <Field *!/ */}
                    {/*            /!*  placeholder={t("profile:form.placeholder.years-of-experience")} *!/ */}
                    {/*            /!*  value={option.year} *!/ */}
                    {/*            /!*  sx={{ width: "80px" }} *!/ */}
                    {/*            /!* /> *!/ */}
                    {/*            <Typography fontSize={14} sx={{ m: "0 8px" }}> */}
                    {/*              {t("profile:year")} */}
                    {/*            </Typography> */}
                    {/*            <SelectCustom */}
                    {/*              id="outlined-select-month" */}
                    {/*              value={monthInfrastructure} */}
                    {/*              onChange={handleChangeMonthInfrastructure} */}
                    {/*              sx={{ width: { xs: "80px", lg: "80px" } }} */}
                    {/*            > */}
                    {/*              {MONTHS.map((monthOption) => ( */}
                    {/*                <MenuItem key={monthOption.value} value={monthOption.value}> */}
                    {/*                  {monthOption.label} */}
                    {/*                </MenuItem> */}
                    {/*              ))} */}
                    {/*            </SelectCustom> */}
                    {/*            <Typography fontSize={14} sx={{ m: "0 8px" }}> */}
                    {/*              {t("profile:month")} */}
                    {/*            </Typography> */}
                    {/*          </Box> */}
                    {/*          <Box sx={{ display: "flex" }}> */}
                    {/*            <Box sx={{ width: { xs: "78%", lg: "241px" } }}> */}
                    {/*              <SelectCustom */}
                    {/*                id="outlined-select-level" */}
                    {/*                value={levelInfrastructure} */}
                    {/*                onChange={handleChangeLevelInfrastructure} */}
                    {/*                sx={{ width: "100%" }} */}
                    {/*              > */}
                    {/*                {LEVELS.map((levelOption) => ( */}
                    {/*                  <MenuItem key={levelOption.value} value={levelOption.value}> */}
                    {/*                    <Box sx={{ display: "flex", alignItems: "center" }}> */}
                    {/*                      {levelOption.stars.map((star) => ( */}
                    {/*                        <Box> */}
                    {/*                          <ImgStar src={star} /> */}
                    {/*                        </Box> */}
                    {/*                      ))} */}
                    {/*                      <Box sx={{ ml: "7px" }}>{levelOption.label}</Box> */}
                    {/*                    </Box> */}
                    {/*                  </MenuItem> */}
                    {/*                ))} */}
                    {/*              </SelectCustom> */}
                    {/*            </Box> */}
                    {/*            <Box> */}
                    {/*              <Button */}
                    {/*                sx={{ */}
                    {/*                  color: theme.gray, */}
                    {/*                  fontSize: "14px", */}
                    {/*                  fontWeight: 700, */}
                    {/*                  lineHeight: "20.27px", */}
                    {/*                  display: skillInfrastructureData.length > 1 ? "block" : "none", */}
                    {/*                  height: "32px", */}
                    {/*                  p: 0, */}
                    {/*                }} */}
                    {/*                onClick={handleDeleteSkillInfrastructure(option)} */}
                    {/*              > */}
                    {/*                <Box */}
                    {/*                  sx={{ */}
                    {/*                    height: "32px", */}
                    {/*                    width: "54px", */}
                    {/*                    borderRadius: "8px", */}
                    {/*                    background: { xs: "#E4E6EB", lg: "unset" }, */}
                    {/*                    display: "flex", */}
                    {/*                    alignItems: "center", */}
                    {/*                    ml: "20px", */}
                    {/*                    p: "6px", */}
                    {/*                  }} */}
                    {/*                > */}
                    {/*                  {t("profile:form.delete")} */}
                    {/*                </Box> */}
                    {/*              </Button> */}
                    {/*            </Box> */}
                    {/*          </Box> */}
                    {/*        </Box> */}
                    {/*      </Box> */}
                    {/*    ))} */}
                    {/*    <Box> */}
                    {/*      <Button */}
                    {/*        sx={{ */}
                    {/*          color: theme.blue, */}
                    {/*          fontSize: "14px", */}
                    {/*          fontWeight: 700, */}
                    {/*          lineHeight: "20.27px", */}
                    {/*        }} */}
                    {/*        onClick={addSkillInfrastructureClick( */}
                    {/*          skillInfrastructureData[skillInfrastructureData.length - 1].key, */}
                    {/*        )} */}
                    {/*      > */}
                    {/*        {t("profile:form.to-add")} */}
                    {/*      </Button> */}
                    {/*    </Box> */}
                    {/*  </ContentTab> */}
                    {/* </BoxContentTab> */}
                    {/* <BoxContentTab> */}
                    {/*  <TitleContentTab>{t("profile:upstream-process")}</TitleContentTab> */}
                    {/*  <ContentTab> */}
                    {/*    /!* <Field placeholder={t("profile:form.placeholder.upstream-process")} /> *!/ */}
                    {/*  </ContentTab> */}
                    {/* </BoxContentTab> */}
                    {/* <BoxContentTab> */}
                    {/*  <TitleContentTab>{t("profile:english-experience")}</TitleContentTab> */}
                    {/*  <ContentTab> */}
                    {/*    <SelectCustom id="outlined-select-currency" value={currency} onChange={handleChange}> */}
                    {/*      {currencies.map((option) => ( */}
                    {/*        <MenuItem key={option.value} value={option.label}> */}
                    {/*          {option.label} */}
                    {/*        </MenuItem> */}
                    {/*      ))} */}
                    {/*    </SelectCustom> */}
                    {/*  </ContentTab> */}
                    {/* </BoxContentTab> */}
                    {/* <BoxContentTab> */}
                    {/*  <TitleContentTab>{t("profile:language-experience")}</TitleContentTab> */}
                    {/*  <ContentTab> */}
                    {/*    <FieldTextArea placeholder={t("profile:form.placeholder.language-experience")} minRows={5} /> */}
                    {/*  </ContentTab> */}
                    {/* </BoxContentTab> */}
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
                onClick={() => submitUserReportRequest()}
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
