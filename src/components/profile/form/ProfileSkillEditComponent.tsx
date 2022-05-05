import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  InputBase,
  Link,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  ENGLISH_LEVEL_OPTIONS,
} from "src/constants/constants";
import { getUserProfile } from "src/services/user";

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

const BoxTextValidate = styled(Box)({
  color: "#FF9458",
  lineHeight: "20px",
  fontWeight: "400",
  fontSize: "14px",
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

  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [hitokoto, setHitokoto] = useState(null);
  const [selfDescription, setSelfDescription] = useState(null);
  const fetchProfileSkill = async () => {
    setIsLoading(true);
    const data = await getUserProfile();
    setUsername(data.username);
    setHitokoto(data.hitokoto);
    setSelfDescription(data.self_description);
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    fetchProfileSkill();
  }, []);

  const [status, setStatus] = useState(STATUS_OPTIONS[0].value);
  const [englishLevel, setEnglishLevel] = useState(ENGLISH_LEVEL_OPTIONS[0].value);
  const [job, setJob] = useState(JOBS[0].value);
  const [employee, setEmployee] = useState(EMPLOYEE_STATUS[0].value);
  const [address, setAddress] = useState(PROFILE_JAPAN_PROVINCE_OPTIONS[0].value);
  const [inputTags, setInputTags] = useState([]);
  const [isSkillProfile, setIsSkillProfile] = useState(false);
  const [skillLanguageData, setSkillLanguage] = useState([
    { key: 0, name: "Java", experience_year: 12, experience_month: 3, level: 1, category: "programLanguage" },
  ]);
  const [skillFrameworkData, setSkillFramework] = useState([
    { key: 0, name: "Java", experience_year: 12, experience_month: 3, level: 1, category: "framework" },
  ]);
  const [skillInfrastructureData, setSkillInfrastructure] = useState([
    { key: 0, name: "Java", experience_year: 12, experience_month: 3, level: 1, category: "infrastructure" },
  ]);
  const [monthLanguage] = useState(MONTHS[0].value);
  const [levelLanguage] = useState(LEVELS[0].value);
  // const [monthFramework, setMonthFramework] = useState(MONTHS[0].value);
  // const [levelFramework, setLevelFramework] = useState(LEVELS[0].value);
  // const [monthInfrastructure, setMonthInfrastructure] = React.useState(MONTHS[3].value);
  // const [levelInfrastructure, setLevelInfrastructure] = React.useState(LEVELS[4].value);
  const [statusErrNameLaguage, setStatusErrNameLaguage] = useState(false);
  const [statusErrYearLaguage, setStatusErrYearLaguage] = useState(false);
  const [statusErrNameFramrwork, setStatusErrNameFramrwork] = useState(false);
  const [statusErrYearFramrwork, setStatusErrYearFramrwork] = useState(false);
  const [statusErrNameInfrastructure, setStatusErrNameInfrastructure] = useState(false);
  const [statusErrYearInfrastructure, setStatusErrYearInfrastructure] = useState(false);
  const [profileRequest, setProfileRequest] = useState({
    username,
    twitter_url: null,
    facebook_url: null,
    github_url: null,
    hitokoto,
    self_description: selfDescription,
    status: null,
    job: null,
    job_position: null,
    employee: null,
    discussion_topic: null,
    address: null,
    tags: [],
  });

  const [skillRequest, setSkillRequest] = useState({
    upstream_process: null,
    english_level: null,
    other_language_level: null,
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
    upstream_process: null,
    english_level: null,
    other_language_level: null,
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
    upstream_process: null,
    english_level: null,
    other_language_level: null,
  });

  const [messSkillLanguageErr, setMessSkillLanguageErr] = useState([{ key: null, mess: null, type: null }]);
  const [messSkillFrameworkErr, setMessSkillFrameworkErr] = useState([{ key: null, mess: null, type: null }]);
  const [messSkillInfrastructureErr, setMessSkillInfrastructureErr] = useState([{ key: null, mess: null, type: null }]);

  // /* Delete item */
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

  const arrMessLanguageErrors = [];
  const arrMessFrameworkErrors = [];
  const arrMessInfrastructureErrors = [];

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

  const addSkillFrameworkClick = (key) => () => {
    // @ts-ignore
    setSkillFramework([
      ...skillFrameworkData,
      { key: key + 1, name: "", experience_year: 1, experience_month: 1, level: 1, category: "framework" },
    ]);
  };
  //
  const addSkillInfrastructureClick = (key) => () => {
    // @ts-ignore
    setSkillInfrastructure([
      ...skillInfrastructureData,
      { key: key + 1, name: "", experience_year: 1, experience_month: 1, level: 1, category: "infrastructure" },
    ]);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setInputTags([...inputTags, e.target.value]);
      (document.getElementById("input_search_tag") as HTMLInputElement).value = "";
    }
  };

  const onChangeSkillLanguage = (key: number, e: any) => {
    const { name, value } = e.target;
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

  const onChangeSkillFramework = (key: number, e: any) => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-shadow
    setSkillFramework((skillFrameworkData) =>
      skillFrameworkData.map((el) =>
        Number(el.key) === Number(key)
          ? {
              ...el,
              [name]: value,
            }
          : el,
      ),
    );
  };

  const onChangeSkillInfrastructure = (key: number, e: any) => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-shadow
    setSkillInfrastructure((skillInfrastructureData) =>
      skillInfrastructureData.map((el) =>
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
    if (key === "username") {
      setUsername(value);
    }
    if (key === "hitokoto") {
      setHitokoto(value);
    }
    if (key === "self_description") {
      setSelfDescription(value);
    }
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

  const onChangeProfileSkillRequest = (key: string, value: any) => {
    if (key === "english_level") {
      setEnglishLevel(value);
    }
    setSkillRequest({
      ...skillRequest,
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
      setStatusErrNameLaguage(false);
      setStatusErrYearLaguage(false);
      setStatusErrNameFramrwork(false);
      setStatusErrYearFramrwork(false);
      setStatusErrNameInfrastructure(false);
      setStatusErrYearInfrastructure(false);
      for (let i = 0; i < skillLanguageData.length; i++) {
        if (skillLanguageData[i]?.name.length > 40) {
          arrMessLanguageErrors.push({
            key: `name_${skillLanguageData[i]?.key}`,
            mess: "dai hơn 40",
            type: "max_length",
          });
          setStatusErrNameLaguage(true);
        }

        if (!REGEX_RULES.text_input.test(skillLanguageData[i]?.name)) {
          arrMessLanguageErrors.push({
            key: `name_${skillLanguageData[i]?.key}`,
            mess: "sai format",
            type: "wrong_format",
          });
          setStatusErrNameLaguage(true);
        }

        // @ts-ignore
        if (skillLanguageData[i]?.experience_year.length > 2) {
          arrMessLanguageErrors.push({
            key: `experience_year_${skillLanguageData[i]?.key}`,
            mess: "dai hơn 2",
            type: "max_length",
          });
          setStatusErrYearLaguage(true);
        }

        if (skillLanguageData[i]?.experience_year < 0) {
          arrMessLanguageErrors.push({
            key: `experience_year_${skillLanguageData[i]?.key}`,
            mess: "k đc nhỏ hơn 0",
            type: "min",
          });
          setStatusErrYearLaguage(true);
        }
      }

      for (let i = 0; i < skillFrameworkData.length; i++) {
        if (skillFrameworkData[i]?.name.length > 40) {
          arrMessFrameworkErrors.push({
            key: `name_${skillFrameworkData[i]?.key}`,
            mess: "dai hơn 40",
            type: "max_length",
          });
          setStatusErrNameFramrwork(true);
        }

        if (!REGEX_RULES.text_input.test(skillFrameworkData[i]?.name)) {
          arrMessFrameworkErrors.push({
            key: `name_${skillFrameworkData[i]?.key}`,
            mess: "sai format",
            type: "wrong_format",
          });
          setStatusErrNameFramrwork(true);
        }

        // @ts-ignore
        if (skillFrameworkData[i]?.experience_year.length > 2) {
          arrMessFrameworkErrors.push({
            key: `experience_year_${skillFrameworkData[i]?.key}`,
            mess: "dai hơn 2",
            type: "max_length",
          });
          setStatusErrYearFramrwork(true);
        }

        if (skillFrameworkData[i]?.experience_year < 0) {
          arrMessFrameworkErrors.push({
            key: `experience_year_${skillFrameworkData[i]?.key}`,
            mess: "k đc nhỏ hơn 0",
            type: "min",
          });
          setStatusErrYearFramrwork(true);
        }
      }

      for (let i = 0; i < skillInfrastructureData.length; i++) {
        if (skillInfrastructureData[i]?.name?.length > 40) {
          arrMessInfrastructureErrors.push({
            key: `name_${skillInfrastructureData[i]?.key}`,
            mess: "dai hơn 40",
            type: "max_length",
          });
          setStatusErrNameInfrastructure(true);
        }

        if (!REGEX_RULES.text_input.test(skillInfrastructureData[i]?.name)) {
          arrMessInfrastructureErrors.push({
            key: `name_${skillInfrastructureData[i]?.key}`,
            mess: "sai format",
            type: "wrong_format",
          });
          setStatusErrNameInfrastructure(true);
        }

        // @ts-ignore
        if (skillInfrastructureData[i]?.experience_year?.length > 2) {
          arrMessInfrastructureErrors.push({
            key: `experience_year_${skillInfrastructureData[i]?.key}`,
            mess: "dai hơn 2",
            type: "max_length",
          });
          setStatusErrYearInfrastructure(true);
        }

        if (skillInfrastructureData[i]?.experience_year < 0) {
          arrMessInfrastructureErrors.push({
            key: `experience_year_${skillInfrastructureData[i]?.key}`,
            mess: "k đc nhỏ hơn 0",
            type: "min",
          });
          setStatusErrYearInfrastructure(true);
        }
      }

      if (skillRequest?.upstream_process?.length > 1) {
        errorMessages.upstream_process = "Dài quá 200";
      }

      if (!REGEX_RULES.text_input.test(skillRequest?.upstream_process)) {
        errorMessages.upstream_process = "Sai định dạng";
      }

      // validate status
      if (!skillRequest?.english_level) {
        errorMessages.english_level = "Chọn english level";
      }

      if (skillRequest?.other_language_level?.length > 1) {
        errorMessages.upstream_process = "Dài quá 200";
      }

      if (!REGEX_RULES.text_input.test(skillRequest?.other_language_level)) {
        errorMessages.other_language_level = "Sai định dạng";
      }
    }
    setMessSkillLanguageErr(arrMessLanguageErrors);
    setMessSkillFrameworkErr(arrMessFrameworkErrors);
    setMessSkillInfrastructureErr(arrMessInfrastructureErrors);
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
      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: () => theme.zIndex.drawer + 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
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
                    value={username}
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
                          value={hitokoto}
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
                          value={selfDescription}
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
                      {/* Languge */}
                      <ContentTab>
                        {skillLanguageData.map((option, key) => (
                          <Box key={key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <InputCustom
                                  onChange={(e) => onChangeSkillLanguage(option.key, e)}
                                  name="name"
                                  placeholder={t("profile:form.placeholder.language")}
                                  sx={{ border: statusErrNameLaguage ? "solid 1px #FF9458" : "none" }}
                                />
                                {messSkillLanguageErr?.map((item, keyItem) =>
                                  item.key === `name_${option.key}` ? (
                                    <BoxTextValidate key={keyItem}>{item.mess}</BoxTextValidate>
                                  ) : null,
                                )}
                              </Box>
                              <Box>
                                <Box
                                  sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                                >
                                  <Box sx={{ width: "80px" }}>
                                    <InputCustom
                                      onChange={(e) => onChangeSkillLanguage(option.key, e)}
                                      name="experience_year"
                                      placeholder={t("profile:form.placeholder.years-of-experience")}
                                      type="number"
                                      sx={{ border: statusErrYearLaguage ? "solid 1px #FF9458" : "none" }}
                                    />
                                  </Box>
                                  <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                    {t("profile:year")}
                                  </Typography>
                                  <SelectCustom
                                    id="outlined-select-month"
                                    value={monthLanguage}
                                    onChange={(e) => onChangeSkillLanguage(option.key, e)}
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
                                {messSkillLanguageErr?.map((item, keyItem) =>
                                  item.key === `experience_year_${option.key}` ? (
                                    <BoxTextValidate key={keyItem}>{item.mess}</BoxTextValidate>
                                  ) : null,
                                )}
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ width: { xs: "78%", lg: "241px" } }}>
                                  <SelectCustom
                                    id="outlined-select-level"
                                    value={levelLanguage}
                                    onChange={(e) => onChangeSkillLanguage(option.key, e)}
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
                    {/* end language */}

                    {/* framwork */}
                    <BoxContentTab>
                      <TitleContentTab>
                        {t("profile:framework")}
                        <BoxEstimatedStar>
                          <ImgStar src="/assets/images/star.png" />
                          <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar>
                        </BoxEstimatedStar>
                      </TitleContentTab>
                      <ContentTab>
                        {skillFrameworkData.map((option, key) => (
                          <Box key={key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <InputCustom
                                  onChange={(e) => onChangeSkillFramework(option.key, e)}
                                  name="name"
                                  placeholder={t("profile:form.placeholder.language")}
                                  sx={{ border: statusErrNameFramrwork ? "solid 1px #FF9458" : "none" }}
                                />
                                {messSkillFrameworkErr?.map((item, keyItem) =>
                                  item.key === `name_${option.key}` ? (
                                    <BoxTextValidate key={keyItem}>{item.mess}</BoxTextValidate>
                                  ) : null,
                                )}
                              </Box>
                              <Box>
                                <Box
                                  sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                                >
                                  <Box sx={{ width: "80px" }}>
                                    <InputCustom
                                      onChange={(e) => onChangeSkillFramework(option.key, e)}
                                      name="experience_year"
                                      placeholder={t("profile:form.placeholder.years-of-experience")}
                                      type="number"
                                      sx={{ border: statusErrYearFramrwork ? "solid 1px #FF9458" : "none" }}
                                    />
                                  </Box>
                                  <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                    {t("profile:year")}
                                  </Typography>
                                  <SelectCustom
                                    id="outlined-select-month"
                                    value={monthLanguage}
                                    onChange={(e) => onChangeSkillFramework(option.key, e)}
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
                                {messSkillFrameworkErr?.map((item, keyItem) =>
                                  item.key === `experience_year_${option.key}` ? (
                                    <BoxTextValidate key={keyItem}>{item.mess}</BoxTextValidate>
                                  ) : null,
                                )}
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ width: { xs: "78%", lg: "241px" } }}>
                                  <SelectCustom
                                    id="outlined-select-level"
                                    value={levelLanguage}
                                    onChange={(e) => onChangeSkillFramework(option.key, e)}
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

                    {/* end framwork */}
                    <BoxContentTab>
                      <TitleContentTab>
                        {t("profile:infrastructure")}
                        <BoxEstimatedStar>
                          <ImgStar src="/assets/images/star.png" />
                          <TypoxEstimatedStar>{t("profile:form.estimated-star")}</TypoxEstimatedStar>
                        </BoxEstimatedStar>
                      </TitleContentTab>
                      <ContentTab>
                        {skillInfrastructureData.map((option, key) => (
                          <Box key={key} sx={{ mb: "15px" }}>
                            <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                              <Box>
                                <InputCustom
                                  onChange={(e) => onChangeSkillInfrastructure(option.key, e)}
                                  name="name"
                                  placeholder={t("profile:form.placeholder.language")}
                                  sx={{ border: statusErrNameInfrastructure ? "solid 1px #FF9458" : "none" }}
                                />
                                {messSkillInfrastructureErr?.map((item, keyItem) =>
                                  item.key === `name_${option.key}` ? (
                                    <BoxTextValidate key={keyItem}>{item.mess}</BoxTextValidate>
                                  ) : null,
                                )}
                              </Box>
                              <Box>
                                <Box
                                  sx={{ display: "flex", alignItems: "center", m: { xs: "18px 0", lg: "0 0 0 15px" } }}
                                >
                                  <Box sx={{ width: "80px" }}>
                                    <InputCustom
                                      onChange={(e) => onChangeSkillInfrastructure(option.key, e)}
                                      name="experience_year"
                                      placeholder={t("profile:form.placeholder.years-of-experience")}
                                      type="number"
                                      sx={{ border: statusErrYearInfrastructure ? "solid 1px #FF9458" : "none" }}
                                    />
                                  </Box>
                                  <Typography fontSize={14} sx={{ m: "0 8px" }}>
                                    {t("profile:year")}
                                  </Typography>
                                  <SelectCustom
                                    id="outlined-select-month"
                                    value={monthLanguage}
                                    onChange={(e) => onChangeSkillInfrastructure(option.key, e)}
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
                                {messSkillInfrastructureErr?.map((item, keyItem) =>
                                  item.key === `experience_year_${option.key}` ? (
                                    <BoxTextValidate key={keyItem}>{item.mess}</BoxTextValidate>
                                  ) : null,
                                )}
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ width: { xs: "78%", lg: "241px" } }}>
                                  <SelectCustom
                                    id="outlined-select-level"
                                    value={levelLanguage}
                                    onChange={(e) => onChangeSkillInfrastructure(option.key, e)}
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
                            onClick={addSkillInfrastructureClick(skillInfrastructureData[0].key)}
                          >
                            {t("profile:form.to-add")} - {skillInfrastructureData.length}
                          </Button>
                        </Box>
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:upstream-process")}</TitleContentTab>
                      <ContentTab>
                        <Field
                          id="upstream_process"
                          placeholder={t("profile:form.placeholder.upstream-process")}
                          onChangeValue={onChangeProfileSkillRequest}
                          error={errorValidates.upstream_process}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:english-experience")}</TitleContentTab>
                      <ContentTab>
                        <FieldSelect
                          id="english_level"
                          options={ENGLISH_LEVEL_OPTIONS}
                          onChangeValue={onChangeProfileSkillRequest}
                          error={errorValidates.english_level}
                          value={englishLevel}
                        />
                      </ContentTab>
                    </BoxContentTab>
                    <BoxContentTab>
                      <TitleContentTab>{t("profile:language-experience")}</TitleContentTab>
                      <ContentTab>
                        <FieldArea
                          id="other_language_level"
                          placeholder={t("profile:form.placeholder.language-experience")}
                          onChangeValue={onChangeProfileSkillRequest}
                          error={errorValidates.other_language_level}
                          minRows={5}
                        />
                      </ContentTab>
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
