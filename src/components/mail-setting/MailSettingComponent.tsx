import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "next-i18next";

import ContentComponent from "src/components/layouts/ContentComponent";
import PopupOptionRecommendComponent from "src/components/mail-setting/PopupOptionRecommendComponent";
import theme from "src/theme";

import { notifyMess, notifyRecommend } from "./mockData";

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TitleTab = styled(Tab)({
  fontWeight: 500,
  color: theme.navy,
  lineHeight: "23.17px",
  fontSize: "16px",
  marginTop: "30px",
  "&.Mui-selected": {
    background: theme.blue,
    color: "#fff",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
    fontWeight: 700,
  },
  "@media (max-width: 1200px)": {
    height: "78px",
    background: "#fff",
    width: "50%",
    border: "1px solid rgba(196, 196, 196, 0.4)",
    "&.Mui-selected": {
      borderRadius: "0",
    },
  },
});

const IcQuestion = styled(Avatar)({
  width: "18px",
  height: "22px",
  marginLeft: "8px",
  cursor: "pointer",
});

const BtnSave = styled(Button)({
  width: "200px",
  height: "48px",
  marginTop: "80px",
  borderRadius: "24px",
  "@media (max-width: 1200px)": {
    marginBottom: "31px",
    marginTop: "66px",
  },
});

const MailSettingComponent = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const [isNotifyMess, setIsNotifyMess] = React.useState(true);
  const [valueOnchange, setValueOnchange] = React.useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopupNotifyMess = () => {
    setShowPopup(true);
    setIsNotifyMess(true);
  };

  const handleShowPopupNotifyRecommend = () => {
    setShowPopup(true);
    setIsNotifyMess(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOnChange = () => {
    setValueOnchange(true);
  };

  const handleSave = () => {
    setValueOnchange(false);
  };

  // @ts-ignore
  return (
    <ContentComponent>
      <Box sx={{ background: theme.whiteBlue, p: { xs: "0 0 0 0", lg: "40px 200px 129px 40px" } }}>
        <Box sx={{ mb: "200px" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", lg: "start" } }}>
            <Avatar src="/assets/images/icon/ic_setting_black.png" sx={{ width: "18px", height: "22px", mr: "8px" }} />
            <Typography fontWeight={700} fontSize={20} lineHeight="28.96px" color={theme.navy}>
              {t("mail-setting:configuration")}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "block", lg: "flex" }, height: { xs: "375px", lg: "475px" } }}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              sx={{
                width: { xs: "100%", lg: "20%" },
                background: theme.whiteBlue,
                border: "none",
                "& .MuiTabs-flexContainer": {
                  flexDirection: { xs: "row", lg: "column" },
                },
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                },
              }}
            >
              <TitleTab
                label={
                  <Typography component="span" sx={{ width: "100%", textAlign: { xs: "center", lg: "left" } }}>
                    {t("mail-setting:email-address-setting")}
                  </Typography>
                }
                {...a11yProps(0)}
              />
              <TitleTab
                label={
                  <Typography component="span" sx={{ width: "100%", textAlign: { xs: "center", lg: "left" } }}>
                    {t("mail-setting:notification-settings")}
                  </Typography>
                }
                {...a11yProps(1)}
              />
            </Tabs>
            <Box
              sx={{
                background: "#fff",
                borderRadius: { xs: "12px", lg: "0" },
                m: { xs: "24px 20px 0px 20px", lg: "0" },
                width: { xs: "unset", lg: "80%" },
              }}
            >
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box sx={{ p: { xs: "0", lg: "30px 0 0 59px" } }}>
                  <Box sx={{ mb: "40px", display: { xs: "none", lg: "block" } }}>
                    <Typography component="span" fontSize={20} fontWeight={700} lineHeight="28.96px" color={theme.navy}>
                      {t("mail-setting:notification-settings")}
                    </Typography>
                  </Box>
                  <Typography
                    component="span"
                    fontWeight={700}
                    color={theme.gray}
                    sx={{ fontSize: { xs: "20px", lg: "24px" }, lineHeight: { xs: "23.44px", lg: "28.13px" } }}
                  >
                    {t("mail-setting:email-reception-settings")}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: "23px" }}>
                    <Typography component="span" fontSize={16} fontWeight={300} lineHeight="18.75px" color={theme.navy}>
                      {t("mail-setting:message-notification")}
                    </Typography>
                    <IcQuestion src="/assets/images/icon/ic_question_blue.png" onClick={handleShowPopupNotifyMess} />
                    <Checkbox
                      defaultChecked
                      sx={{
                        ml: "65px",
                        color: theme.blue,
                        "&.Mui-checked": {
                          color: theme.blue,
                        },
                      }}
                      onChange={handleOnChange}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: { xs: "40px", lg: "0" } }}>
                    <Typography component="span" fontSize={16} fontWeight={300} lineHeight="18.75px" color={theme.navy}>
                      {t("mail-setting:recommendation-notification")}
                    </Typography>
                    <IcQuestion
                      src="/assets/images/icon/ic_question_blue.png"
                      onClick={handleShowPopupNotifyRecommend}
                    />
                    <Checkbox
                      sx={{
                        ml: "65px",
                        color: theme.blue,
                        "&.Mui-checked": {
                          color: theme.blue,
                        },
                      }}
                      onChange={handleOnChange}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                    />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "start" } }}>
                    <BtnSave
                      sx={{
                        background: valueOnchange ? "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" : theme.gray,
                        color: "#fff",
                        "&:hover": {
                          background: valueOnchange ? "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)" : theme.gray,
                        },
                      }}
                      onClick={handleSave}
                    >
                      {t("mail-setting:save-changes")}
                    </BtnSave>
                  </Box>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Box>
        <PopupOptionRecommendComponent
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          contentPopup={isNotifyMess ? notifyMess : notifyRecommend}
        />
      </Box>
    </ContentComponent>
  );
};
export default MailSettingComponent;
