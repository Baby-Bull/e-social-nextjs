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
  dataType?: string;
  dataChild: IDataChild[];
  maxWidth?: string;
  setKeyRefetchData?: Function;
}

const ChildTabComponent: React.SFC<IChildTabComponentProps> = ({ dataId, dataChild, dataType, maxWidth }) => {
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
          pt: { sm: "38px" },
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
            label={tab.text + (tab?.count && index === 0 ? `（${tab?.count}）` : "")}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={valueChildTab} index={0}>
        <Box
          sx={{
            pb: ["120px", "98px"],
            backgroundColor: [theme.whiteBlue, "white"],
          }}
        >
          {dataChild[0]?.data?.length ? (
            dataChild[0]?.data.map((tab, index) => (
              <React.Fragment key={index.toString()}>
                <Box
                  sx={{
                    mx: [0, "45px"],
                    "&:first-of-type": {
                      paddingTop: ["20px", "27px"],
                    },
                    "&:last-of-type": {
                      borderBottom: { sm: `2px solid ${theme.lightGray}` },
                    },
                  }}
                >
                  <ThreadComponent data={tab} type="unConfirm" dataType={dataType} />
                </Box>
              </React.Fragment>
            ))
          ) : (
            <Box
              sx={{
                mx: [0, "45px"],
                paddingTop: ["20px", "27px"],
              }}
            >
              <EmptyMatchingComponent
                text={dataId === 1 ? t("matching:text-empty.tab-1.1") : t("matching:text-empty.tab-2.1")}
              />
            </Box>
          )}
        </Box>
      </TabPanel>
      <TabPanel value={valueChildTab} index={1}>
        <Box
          sx={{
            pb: ["120px", "98px"],
            backgroundColor: [theme.whiteBlue, "white"],
          }}
        >
          {dataChild[1]?.data?.length ? (
            dataChild[1]?.data.map((tab, index) => (
              <React.Fragment key={index.toString()}>
                <Box
                  sx={{
                    mx: [0, "45px"],
                    "&:first-of-type": {
                      paddingTop: ["20px", "27px"],
                    },
                    "&:last-of-type": {
                      borderBottom: { sm: `2px solid ${theme.lightGray}` },
                    },
                  }}
                >
                  <ThreadComponent data={tab} type="confirm" dataType={dataType} />
                </Box>
              </React.Fragment>
            ))
          ) : (
            <Box
              sx={{
                mx: [0, "45px"],
                paddingTop: ["20px", "27px"],
              }}
            >
              <EmptyMatchingComponent
                text={dataId === 1 ? t("matching:text-empty.tab-1.2") : t("matching:text-empty.tab-2.2")}
              />
            </Box>
          )}
        </Box>
      </TabPanel>
      <TabPanel value={valueChildTab} index={2}>
        <Box
          sx={{
            pb: ["120px", "98px"],
            backgroundColor: [theme.whiteBlue, "white"],
          }}
        >
          {dataChild[2]?.data?.length ? (
            dataChild[2]?.data.map((tab, index) => (
              <React.Fragment key={index.toString()}>
                <Box
                  sx={{
                    mx: [0, "45px"],
                    "&:first-of-type": {
                      paddingTop: ["20px", "27px"],
                    },
                  }}
                >
                  <ThreadComponent data={tab} type="reject" dataType={dataType} />
                </Box>
              </React.Fragment>
            ))
          ) : (
            <Box
              sx={{
                mx: [0, "45px"],
                paddingTop: ["20px", "27px"],
              }}
            >
              <EmptyMatchingComponent
                text={dataId === 1 ? t("matching:text-empty.tab-1.3") : t("matching:text-empty.tab-2.3")}
              />
            </Box>
          )}
        </Box>
      </TabPanel>
    </React.Fragment>
  );
};
export default ChildTabComponent;
