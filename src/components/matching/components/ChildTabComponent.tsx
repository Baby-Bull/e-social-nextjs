import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";

import theme from "src/theme";

import EmptyMatchingComponent from "./EmptyMatchingComponent";
import ThreadComponent from "./ThreadComponent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-children-${index}`}
      aria-labelledby={`simple-tab-children-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            mx: [0, "45px"],
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const ChildTabCustom = styled(Tab)({
  padding: 0,
  color: "black",
  fontWeight: 500,
  "&.Mui-selected": {
    color: theme.blue,
    fontWeight: 700,
  },
  "@media (max-width: 425px)": {
    fontSize: "10px",
  },
  "@media (min-width: 768px)": {
    fontSize: "14px",
  },
  "@media (min-width: 1440px)": {
    marginRight: "12px",
    fontSize: "21px",
    minWidth: "18%",
    maxWidth: "18%",
  },
});

interface TabComponentProps {
  dataId: number;
  dataChild: any;
}

const TabComponent: React.SFC<TabComponentProps> = ({ dataId, dataChild }) => {
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
        TabIndicatorProps={{
          style: {
            backgroundColor: theme.blue,
          },
        }}
        sx={{
          mx: { sm: "42px" },
          mt: { sm: "38px" },
          borderBottom: [`1px solid ${theme.lightGray}`, "none"],
        }}
      >
        {dataChild?.map(
          (tab: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }, index: number) => (
            <ChildTabCustom
              key={index.toString()}
              color="success"
              iconPosition="top"
              label={tab.text}
              {...a11yProps(index)}
            />
          ),
        )}
      </Tabs>

      <TabPanel value={valueChildTab} index={0}>
        {dataChild[0]?.data?.length ? (
          dataChild[0]?.data.map((tab: any, index: any) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
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
          dataChild[1]?.data.map((tab: any, index: any) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
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
          dataChild[2]?.data.map((tab: any, index: any) => (
            <React.Fragment key={index.toString()}>
              <Box
                sx={{
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
export default TabComponent;
