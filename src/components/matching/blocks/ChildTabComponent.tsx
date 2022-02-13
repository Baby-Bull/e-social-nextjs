import React from "react";
import { Box, Tabs } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { TabPanel, a11yProps, ChildTabCustom } from "src/components/common/Tab/BlueChildTabComponent";
import EmptyMatchingComponent from "src/components/matching/blocks/EmptyMatchingComponent";
import ThreadComponent from "src/components/matching/blocks/ThreadComponent";

export interface IDataChild {
  data: string[];
  text: string;
  count: string;
}

interface IChildTabComponentProps {
  dataId: number;
  dataChild: IDataChild[];
  maxWidth?: string;
}

const ChildTabComponent: React.SFC<IChildTabComponentProps> = ({ dataId, dataChild, maxWidth }) => {
  const { t } = useTranslation();

  const [valueChildTab, setValueChildTab] = React.useState(0);

  const onChangeChildTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueChildTab(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        variant="fullWidth"
        value={valueChildTab}
        onChange={onChangeChildTab}
        aria-label="tab children"
        sx={{
          mx: { sm: "42px" },
          mt: { sm: "38px" },
          borderBottom: [`1px solid ${theme.lightGray}`, "none"],
          ".MuiTabs-indicator": {
            backgroundColor: [theme.blue, "transparent"],
          },
        }}
      >
        {dataChild?.map((tab, index) => (
          <ChildTabCustom
            key={index.toString()}
            props={{
              fontSize: "10px",
              mdWidth: maxWidth,
              smFontSize: "14px",
              mdFontSize: "21px",
            }}
            iconPosition="top"
            label={tab.text + (tab?.count ? `（${tab?.count}）` : "")}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={valueChildTab} index={0}>
        {dataChild[0]?.data?.length ? (
          dataChild[0]?.data.map((tab, index) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
                  mx: [0, "45px"],
                  "&:first-of-type": {
                    marginTop: ["20px", "36px"],
                  },
                  "&:last-of-type": {
                    borderBottom: { sm: `2px solid ${theme.lightGray}` },
                  },
                }}
              >
                <ThreadComponent data={tab} type="unconfirm" />
              </Box>
            </React.Fragment>
          ))
        ) : (
          <EmptyMatchingComponent
            text={dataId === 1 ? t("matching:text-empty.tab-1.1") : t("matching:text-empty.tab-2.1")}
          />
        )}
      </TabPanel>
      <TabPanel value={valueChildTab} index={1}>
        {dataChild[1].data?.length ? (
          dataChild[1]?.data.map((tab, index) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
                  mx: [0, "45px"],
                  "&:first-of-type": {
                    marginTop: ["20px", "36px"],
                  },
                }}
              >
                <ThreadComponent data={tab} type="confirm" />
              </Box>
            </React.Fragment>
          ))
        ) : (
          <EmptyMatchingComponent
            text={dataId === 1 ? t("matching:text-empty.tab-1.2") : t("matching:text-empty.tab-2.2")}
          />
        )}
      </TabPanel>
      <TabPanel value={valueChildTab} index={2}>
        {dataChild[2].data?.length ? (
          dataChild[2]?.data.map((tab, index) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
                  mx: [0, "45px"],
                  "&:first-of-type": {
                    marginTop: ["20px", "36px"],
                  },
                }}
              >
                <ThreadComponent data={tab} type="reject" />
              </Box>
            </React.Fragment>
          ))
        ) : (
          <EmptyMatchingComponent
            text={dataId === 1 ? t("matching:text-empty.tab-1.3") : t("matching:text-empty.tab-2.3")}
          />
        )}
      </TabPanel>
    </React.Fragment>
  );
};
export default ChildTabComponent;