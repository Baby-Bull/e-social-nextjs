import React, { useEffect, useState } from "react";
import { Box, Tabs, Typography, Avatar, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { TabPanel, a11yProps, TabCustom } from "src/components/common/Tab/BlueTabComponent";
import EmptyMatchingComponent from "src/components/matching/blocks/EmptyMatchingComponent";
import ThreadComponent from "src/components/matching/blocks/ThreadComponent";
// import ChildTabComponent, { IDataChild } from "src/components/matching/blocks/ChildTabComponent";
import ChildTabComponent from "src/components/matching/blocks/ChildTabComponent";
import { getMatchedRequest } from "src/services/matching";
import { TAB_VALUE_BY_KEY } from "src/constants/matching";

// interface IData {
//   avatar: string;
//   name: string;
//   count_member: string;
// }

// interface ITabComponentData {
//   children: IDataChild[];
//   data: IData[];
//   text: string;
//   icon: string;
// }

interface ITabComponentProps {
  // data: ITabComponentData[];
  data: any;
  setKeyRefetchData: Function;
  tabValue: number;
  setTabValue: Function;
}

const LIMIT = 20;
const OPTIONS = [
  { value: "newest", label: "新しい順" },
  { value: "oldest", label: "古い順" },
  { value: "name-asc", label: "名前順" },
];

const TabComponent: React.SFC<ITabComponentProps> = ({ data, setKeyRefetchData, tabValue, setTabValue }) => {
  const { t } = useTranslation();

  const onChangeParentTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const [optionSelected, setOption] = React.useState("oldest");
  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const [matchedUsers, setMatchUsers] = useState([]);
  useEffect(() => {
    if (tabValue === TAB_VALUE_BY_KEY.matched) {
      const fetchMatchedUsers = async () => {
        const res = await getMatchedRequest(LIMIT, "", optionSelected);
        setMatchUsers(res?.items);
      };
      fetchMatchedUsers();
    }
  }, [optionSelected, tabValue]);

  const handleDisplayReddot = (tabType: number, countUnconfirmed: number) =>
    (tabType === 1 || tabType === 2) && countUnconfirmed > 0;

  return (
    <React.Fragment>
      <Tabs
        value={tabValue}
        onChange={onChangeParentTab}
        aria-label="tab children"
        TabIndicatorProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        {data?.map((tab: any, index: number) => (
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
              backgroundColor: "white",
              "&:before": handleDisplayReddot(tab?.type, tab?.children?.[0]?.count) && {
                content: `url("/assets/images/svg/red_dot.svg")`,
                position: "absolute",
                top: "-5px",
                right: "10px",
                "@media (max-width: 768px)": {
                  top: "5px",
                  right: "5px",
                },
              },

              // "&.Mui-selected": {
              //   "&:before": {
              //     content: `url("/assets/images/svg/red_dot.svg")`,
              //     position: "absolute",
              //     top: "-5px",
              //     right: "10px",
              //     "@media (max-width: 768px)": {
              //       top: "5px",
              //       right: "5px",
              //     },
              //   },
              // },
            }}
          />
        ))}
      </Tabs>

      <TabPanel value={tabValue} index={TAB_VALUE_BY_KEY.received}>
        <ChildTabComponent
          dataId={1}
          dataType={data[0]?.type}
          dataChild={data[0]?.children ?? []}
          maxWidth="230px"
          setKeyRefetchData={setKeyRefetchData}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={TAB_VALUE_BY_KEY.sent}>
        <ChildTabComponent
          dataId={2}
          dataType={data[1]?.type}
          dataChild={data[1]?.children ?? []}
          maxWidth="160px"
          setKeyRefetchData={setKeyRefetchData}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={TAB_VALUE_BY_KEY.favorite}>
        <Box
          sx={{
            pb: ["120px", "98px"],
            paddingTop: ["20px", "0"],
            backgroundColor: theme.whiteBlue,
          }}
        >
          {data[2]?.data?.length ? (
            data[2]?.data?.map((tab, tabIndex) => (
              <React.Fragment key={tabIndex.toString()}>
                <Box
                  sx={{
                    px: [0, "40px"],
                    backgroundColor: "white",
                    "&:last-of-type": {
                      borderBottom: { sm: `2px solid ${theme.lightGray}` },
                    },
                  }}
                >
                  <ThreadComponent data={tab} type="favorite" setKeyRefetchData={setKeyRefetchData} />
                </Box>
              </React.Fragment>
            ))
          ) : (
            <EmptyMatchingComponent text={t("matching:text-empty.tab-4")} />
          )}
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={TAB_VALUE_BY_KEY.matched}>
        <Box
          sx={{
            pb: ["120px", "98px"],
            backgroundColor: theme.whiteBlue,
          }}
        >
          {data[3]?.data?.length ? (
            <React.Fragment>
              <Box
                sx={{
                  py: "20px",
                  pl: { sm: "40px" },
                  display: ["flex", "inherit"],
                  justifyContent: "center",
                  backgroundColor: { sm: "white" },
                }}
              >
                <Select
                  value={optionSelected}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: theme.navy,
                    width: ["320px", "240px"],
                    height: "40px",
                    backgroundColor: "white",
                    fieldset: {
                      borderColor: [theme.lightGray, theme.gray],
                    },
                  }}
                >
                  {OPTIONS &&
                    OPTIONS.map((option, index) => (
                      <MenuItem key={index.toString()} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </Select>
              </Box>

              {matchedUsers?.map((tab, tabIndex) => (
                <React.Fragment key={tabIndex.toString()}>
                  <Box
                    sx={{
                      px: [0, "40px"],
                      backgroundColor: "white",
                      "&:last-of-type": {
                        borderBottom: { sm: `2px solid ${theme.lightGray}` },
                      },
                    }}
                  >
                    <ThreadComponent data={tab} type="matched" />
                  </Box>
                </React.Fragment>
              ))}
            </React.Fragment>
          ) : (
            <EmptyMatchingComponent text={t("matching:text-empty.tab-4")} />
          )}
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={TAB_VALUE_BY_KEY.community}>
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
                    src={tab?.profile_image}
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
                    {tab?.name}
                  </Typography>
                  <Typography
                    component="span"
                    pt="8px"
                    sx={{
                      fontSize: [10, 14],
                      color: theme.gray,
                    }}
                  >
                    {t("matching:count-member")} {tab?.member_count}
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
