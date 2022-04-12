import React, { useEffect, useState } from "react";
import { Box, Tabs, Typography, Avatar, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import theme from "src/theme";
import { TabPanel, a11yProps, TabCustom } from "src/components/common/Tab/BlueTabComponent";
import EmptyMatchingComponent from "src/components/matching/blocks/EmptyMatchingComponent";
import ThreadComponent from "src/components/matching/blocks/ThreadComponent";
// import ChildTabComponent, { IDataChild } from "src/components/matching/blocks/ChildTabComponent";
import ChildTabComponent from "src/components/matching/blocks/ChildTabComponent";
import { getMatchedRequest } from "src/services/matching";

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
}

const LIMIT = 20;
const OPTIONS = [
  { value: "newest", label: "新しい順" },
  { value: "oldest", label: "古い順" },
  { value: "name-asc", label: "名前順" },
];

const TabComponent: React.SFC<ITabComponentProps> = ({ data, setKeyRefetchData }) => {
  const { t } = useTranslation();
  const typeQuery = useRouter()?.query?.type;

  const nestedCondition = (condition: any, then: any, otherwise: any) => (condition ? then : otherwise);
  const type = nestedCondition(
    typeQuery === "unconfirm",
    0,
    nestedCondition(
      typeQuery === "confirm",
      1,
      nestedCondition(typeQuery === "favourite", 2, nestedCondition(typeQuery === "reject", 4, 3)),
    ),
  );

  const [valueParentTab, setValueParentTab] = React.useState(0);
  const onChangeParentTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueParentTab(newValue);
  };

  React.useEffect(() => {
    if (typeQuery) {
      setValueParentTab(type);
    }
  }, [typeQuery]);

  const [optionSelected, setOption] = React.useState("newest");
  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const [matchedUsers, setMatchUsers] = useState([]);
  useEffect(() => {
    const fetchMatchedUsers = async () => {
      const res = await getMatchedRequest(LIMIT, "", optionSelected);
      setMatchUsers(res?.items);
    };
    fetchMatchedUsers();
  }, [optionSelected]);

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
              backgroundColor: "white",
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
        <ChildTabComponent
          dataId={1}
          dataType={data[0]?.type}
          dataChild={data[0]?.children ?? []}
          maxWidth="230px"
          setKeyRefetchData={setKeyRefetchData}
        />
      </TabPanel>

      <TabPanel value={valueParentTab} index={1}>
        <ChildTabComponent
          dataId={2}
          dataType={data[0]?.type}
          dataChild={data[1]?.children ?? []}
          maxWidth="160px"
          setKeyRefetchData={setKeyRefetchData}
        />
      </TabPanel>

      <TabPanel value={valueParentTab} index={2}>
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
                  <ThreadComponent data={tab} type="favourite" setKeyRefetchData={setKeyRefetchData} />
                </Box>
              </React.Fragment>
            ))
          ) : (
            <EmptyMatchingComponent text={t("matching:text-empty.tab-4")} />
          )}
        </Box>
      </TabPanel>

      <TabPanel value={valueParentTab} index={3}>
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
                      fontSize: [10, 14],
                      color: theme.gray,
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
