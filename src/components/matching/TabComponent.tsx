import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Tabs, Typography, Avatar, Select, MenuItem, SelectChangeEvent, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { TabPanel, a11yProps, TabCustom } from "src/components/common/Tab/BlueTabComponent";
import EmptyMatchingComponent from "src/components/matching/blocks/EmptyMatchingComponent";
import ThreadComponent from "src/components/matching/blocks/ThreadComponent";
import useViewport from "src/helpers/useViewport";
// import ChildTabComponent, { IDataChild } from "src/components/matching/blocks/ChildTabComponent";
import ChildTabComponent from "src/components/matching/blocks/ChildTabComponent";
import { getMatchedRequest } from "src/services/matching";
import { TAB_VALUE_BY_KEY } from "src/constants/matching";

import PaginationCustomComponent from "../common/PaginationCustomComponent";

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

const OPTIONS = [
  { value: "newest", label: "新しい順" },
  { value: "oldest", label: "古い順" },
  { value: "name-asc", label: "名前順" },
];

const TabComponent: React.SFC<ITabComponentProps> = ({ data, setKeyRefetchData, tabValue, setTabValue }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 992;
  const LIMITAPIMATCHED = 20;
  const LIMITCOUNTPERPAGE = 10;
  const LIMITCOUNTPAGECOMMUNITY = isMobile ? 4 : 8;

  const onChangeParentTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const [optionSelected, setOption] = React.useState("newest");
  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const [matchedUsers, setMatchUsers] = useState([]);
  useEffect(() => {
    if (tabValue === TAB_VALUE_BY_KEY.matched) {
      const fetchMatchedUsers = async () => {
        const res = await getMatchedRequest(LIMITAPIMATCHED, "", optionSelected);
        setMatchUsers(res?.items);
      };
      fetchMatchedUsers();
    }
  }, [optionSelected, tabValue]);

  const handleDisplayReddot = (tabType: number, countUnconfirmed: number) =>
    (tabType === 1 || tabType === 2) && countUnconfirmed > 0;

  const handleRedirectCommunity = (idComm: string) => {
    router.push(`/community/${idComm}`);
  };

  // const [keyForTabTitle, setKeyForTabTitle] = useState();
  const [pagePagination, setPagePagination] = useState({
    pageFavorite: 1,
    perPageFavorite: 10000,
    pageMatched: 1,
    perPageMatched: 10000,
    pageCommunity: 1,
    perPageCommunity: 10000,
  });

  const handleCallbackChangePaginationFavorite = (event, value) => {
    setPagePagination({
      ...pagePagination,
      pageFavorite: value,
    });
    if (pagePagination?.perPageFavorite <= value) {
      setPagePagination({
        ...pagePagination,
        perPageFavorite: pagePagination.perPageFavorite + 1,
      });
    }
  };

  const handleCallbackChangePaginationMatched = (event, value) => {
    setPagePagination({
      ...pagePagination,
      pageMatched: value,
    });
    if (pagePagination?.perPageMatched <= value) {
      setPagePagination({
        ...pagePagination,
        perPageMatched: pagePagination.perPageMatched + 1,
      });
    }
  };

  const handleCallbackChangePaginationCommunity = (event, value) => {
    setPagePagination({
      ...pagePagination,
      pageCommunity: value,
    });
    if (pagePagination?.perPageCommunity <= value) {
      setPagePagination({
        ...pagePagination,
        perPageCommunity: pagePagination.perPageCommunity + 1,
      });
    }
  };

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
            // onClick={() => setKeyForTabTitle(index)}
            iconPosition="top"
            icon={tab.icon}
            label={tab.text}
            {...a11yProps(index)}
            sx={{
              backgroundColor: "white",
              "@media (max-width: 768px)": {
                whiteSpace: "pre-line",
              },
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
            <React.Fragment>
              {data[2]?.data
                ?.slice(
                  (pagePagination.pageFavorite - 1) * LIMITCOUNTPERPAGE,
                  pagePagination.pageFavorite * LIMITCOUNTPERPAGE,
                )
                .map((tab, tabIndex) => (
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
                ))}
              <Box
                sx={{
                  py: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {data[2]?.data?.length > LIMITCOUNTPERPAGE && (
                  <PaginationCustomComponent
                    handleCallbackChangePagination={handleCallbackChangePaginationFavorite}
                    page={pagePagination?.pageFavorite}
                    perPage={pagePagination?.perPageFavorite}
                    totalPage={Math.ceil(data[2]?.data?.length > 0 ? data[2].data.length / LIMITCOUNTPERPAGE : 1)}
                  />
                )}
              </Box>
            </React.Fragment>
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
          {matchedUsers?.length ? (
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

              {matchedUsers
                ?.slice(
                  (pagePagination.pageMatched - 1) * LIMITCOUNTPERPAGE,
                  pagePagination.pageMatched * LIMITCOUNTPERPAGE,
                )
                .map((tab, tabIndex) => (
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
              <Box
                sx={{
                  py: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {matchedUsers?.length > LIMITCOUNTPERPAGE && (
                  <PaginationCustomComponent
                    handleCallbackChangePagination={handleCallbackChangePaginationMatched}
                    page={pagePagination?.pageMatched}
                    perPage={pagePagination?.perPageFavorite}
                    totalPage={Math.ceil(matchedUsers?.length > 0 ? matchedUsers.length / LIMITCOUNTPERPAGE : 1)}
                  />
                )}
              </Box>
            </React.Fragment>
          ) : (
            <EmptyMatchingComponent text={t("matching:text-empty.tab-4")} />
          )}
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={TAB_VALUE_BY_KEY.community}>
        {data[4]?.data?.length ? (
          <Grid
            sx={{
              flexGrow: 1,
              display: "block",
            }}
            container
          >
            <React.Fragment>
              <Box
                sx={{
                  mt: ["30px", 0],
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {data[4]?.data
                  ?.slice(
                    (pagePagination.pageCommunity - 1) * LIMITCOUNTPAGECOMMUNITY,
                    pagePagination.pageCommunity * LIMITCOUNTPAGECOMMUNITY,
                  )
                  .map((tab, tabIndex) => (
                    <React.Fragment key={tabIndex.toString()}>
                      <Grid xs={6} md={3}>
                        <Box
                          onClick={() => handleRedirectCommunity(tab?.id)}
                          sx={{
                            cursor: "pointer",
                            mt: [0, "40px"],
                            mb: ["20px", 0],
                            mx: [0, "20px"],
                            // flex: ["0 0 50%", "0 0 25%"],
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            variant="circular"
                            sx={{
                              width: ["149px", "124px"],
                              height: ["149px", "124px"],
                              img: {
                                objectFit: tab?.profile_image === "/assets/images/logo/logo.png" ? "contain" : "cover",
                                border:
                                  tab?.profile_image === "/assets/images/logo/logo.png" ? "3px #e8ecf1 solid" : "none",
                                borderRadius: "50%",
                              },
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
                              textAlign: "center",
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
                            {t("matching:count-member")} {tab?.member_count} 人
                          </Typography>
                        </Box>
                      </Grid>
                    </React.Fragment>
                  ))}
              </Box>
              <Box
                sx={{
                  py: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {data[4]?.data?.length > 2 && (
                  <PaginationCustomComponent
                    handleCallbackChangePagination={handleCallbackChangePaginationCommunity}
                    page={pagePagination?.pageCommunity}
                    perPage={pagePagination?.perPageCommunity}
                    totalPage={Math.ceil(data[4]?.data?.length > 0 ? data[4].data.length / LIMITCOUNTPAGECOMMUNITY : 1)}
                  />
                )}
              </Box>
            </React.Fragment>
          </Grid>
        ) : (
          <EmptyMatchingComponent text={t("matching:text-empty.tab-5")} mode="community" />
        )}
      </TabPanel>
    </React.Fragment>
  );
};
export default TabComponent;
