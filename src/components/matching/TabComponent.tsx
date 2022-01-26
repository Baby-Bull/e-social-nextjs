import * as React from "react";
import { Box, Tabs, Tab, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";

import theme from "src/theme";

import EmptyMatchingComponent from "./components/EmptyMatchingComponent";
import ThreadComponent from "./components/ThreadComponent";
import ChildTabComponent from "./components/ChildTabComponent";

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ mb: ["80px", "212px"] }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const TabCustom = styled(Tab)({
  minWidth: "20%",
  maxWidth: "20%",
  paddingLeft: "7px",
  paddingRight: "7px",
  "& img": {
    width: "26px",
    filter: theme.filter.blue,
  },
  "&.Mui-selected": {
    "&": {
      backgroundColor: theme.blue,
    },
    "& img": {
      filter: theme.filter.white,
    },
    color: "white",
  },
  "@media (max-width: 425px)": {
    display: "flex",
    color: "black",
    fontSize: "8px",
    fontWeight: 500,
  },
  "@media (min-width: 768px)": {
    color: theme.blue,
    fontSize: "14px",
    fontWeight: 700,
    minHeight: "50px",
    border: `1px solid ${theme.blue}`,
    borderLeft: "none",
    borderRadius: "12px 12px 0px 0px;",
    "&:first-of-type": {
      borderLeft: `1px solid ${theme.blue}`,
    },
    "& img": {
      display: "none",
    },
  },
  "@media (min-width: 1440px)": {
    fontSize: "20px",
  },
});

interface TabComponentProps {
  data: any;
}

const TabComponent: React.SFC<TabComponentProps> = ({ data }) => {
  const { t } = useTranslation();

  const [valueParentTab, setValueParentTab] = React.useState(0);

  const onChangeParentTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueParentTab(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        value={valueParentTab}
        onChange={onChangeParentTab}
        aria-label="tab children"
        TabIndicatorProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
        sx={{}}
      >
        {data?.map((tab, index) => (
          <TabCustom
            key={index.toString()}
            color="success"
            iconPosition="top"
            icon={tab.icon}
            label={tab.text}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={valueParentTab} index={0}>
        <ChildTabComponent dataId={1} dataChild={data[0]?.children} maxWidth="230px" />
      </TabPanel>

      <TabPanel value={valueParentTab} index={1}>
        <ChildTabComponent dataId={2} dataChild={data[1]?.children} maxWidth="160px" />
      </TabPanel>

      <TabPanel value={valueParentTab} index={2}>
        {data[2]?.data?.length ? (
          data[2]?.data?.map((tab: any, tabIndex: any) => (
            <React.Fragment key={tabIndex.toString()}>
              <Box
                sx={{
                  mx: [0, "40px"],
                  "&:last-of-type": {
                    borderBottom: { sm: `2px solid ${theme.lightGray}` },
                  },
                }}
              >
                <ThreadComponent data={tab} type="favourite" />
              </Box>
            </React.Fragment>
          ))
        ) : (
          <EmptyMatchingComponent text={t("matching:text-empty.tab-4")} />
        )}
      </TabPanel>

      <TabPanel value={valueParentTab} index={3}>
        {data[3]?.data?.length ? (
          data[3]?.data?.map((tab: any, tabIndex: any) => (
            <React.Fragment key={tabIndex.toString()}>
              <Box
                sx={{
                  mx: [0, "40px"],
                  "&:last-of-type": {
                    borderBottom: { sm: `2px solid ${theme.lightGray}` },
                  },
                }}
              >
                <ThreadComponent data={tab} type="matched" />
              </Box>
            </React.Fragment>
          ))
        ) : (
          <EmptyMatchingComponent text={t("matching:text-empty.tab-4")} />
        )}
      </TabPanel>
      <TabPanel value={valueParentTab} index={4}>
        {data[4]?.data?.length ? (
          <Box
            sx={{
              mt: "0px",
              mx: ["20px", "40px"],
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {data[4]?.data?.map((tab: any, tabIndex: any) => (
              <React.Fragment key={tabIndex.toString()}>
                <Box
                  sx={{
                    mt: [0, "40px"],
                    mb: ["20px", 0],
                    mx: [0, "20px"],
                    flex: ["1 0 50%", "1 0 18%"],
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="square"
                    sx={{
                      width: ["149px", "124px"],
                      height: ["149px", "124px"],
                    }}
                    src={tab.avatar}
                  />

                  <Typography
                    component="span"
                    pt="10px"
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    {tab.name}
                  </Typography>
                  <Typography
                    component="span"
                    pt="8px"
                    sx={{
                      fontSize: 10,
                      color: theme.blue,
                    }}
                  >
                    {t("matching:count-member")} {tab.count_member}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
          </Box>
        ) : (
          <EmptyMatchingComponent text={t("matching:text-empty.tab-5")} mode="community" />
        )}
      </TabPanel>
    </React.Fragment>
  );
};
export default TabComponent;
