import React from "react";
import { Box, Tabs, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { TabPanel, a11yProps, TabCustom } from "src/components/common/Tab/BlueTabComponent";
import EmptyMatchingComponent from "src/components/matching/blocks/EmptyMatchingComponent";
import ThreadComponent from "src/components/matching/blocks/ThreadComponent";
import ChildTabComponent, { IDataChild } from "src/components/matching/blocks/ChildTabComponent";

interface IData {
  avatar: string;
  name: string;
  count_member: string;
}

interface ITabComponentData {
  children: IDataChild[];
  data: IData[];
  text: string;
  icon: string;
}

interface ITabComponentProps {
  data: ITabComponentData[];
}

const TabComponent: React.SFC<ITabComponentProps> = ({ data }) => {
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
      >
        {data?.map((tab, index) => (
          <TabCustom
            key={index.toString()}
            props={{
              xsBorderColor: theme.lightGray,
            }}
            iconPosition="top"
            icon={tab.icon}
            label={tab.text}
            {...a11yProps(index)}
            sx={{
              "&.Mui-selected": {
                "&:before": {
                  content: `url("/assets/images/svg/red_dot.svg")`,
                  position: "absolute",
                  top: "-5px",
                  right: "10px",
                  "@media (max-width: 768px)": {
                    top: "5px",
                    right: "5px",
                  },
                },
              },
            }}
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
          data[2]?.data?.map((tab, tabIndex) => (
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
          data[3]?.data?.map((tab, tabIndex) => (
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
              mt: ["40px", 0],
              mx: ["20px", "40px"],
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {data[4]?.data?.map((tab, tabIndex) => (
              <React.Fragment key={tabIndex.toString()}>
                <Box
                  sx={{
                    mt: [0, "40px"],
                    mb: ["20px", 0],
                    mx: [0, "20px"],
                    flex: ["0 0 50%", "0 0 18%"],
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