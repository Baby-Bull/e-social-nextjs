import React, { useState } from "react";
import { Box, Tabs } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import { TabPanel, a11yProps, ChildTabCustom } from "src/components/common/Tab/BlueChildTabComponent";
import EmptyMatchingComponent from "src/components/matching/blocks/EmptyMatchingComponent";
import ThreadComponent from "src/components/matching/blocks/ThreadComponent";
import PaginationCustomComponent from "src/components/common/PaginationCustomComponent";

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

const ChildTabComponent: React.SFC<IChildTabComponentProps> = ({
  dataId,
  dataChild,
  dataType,
  maxWidth,
  setKeyRefetchData,
}) => {
  const LIMIT = 10;
  const { t } = useTranslation();
  const [valueChildTab, setValueChildTab] = React.useState(0);

  const onChangeChildTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueChildTab(newValue);
  };

  const [pagePagination, setPagePagination] = useState({
    pagePending: 1,
    perPagePending: 10000,
    pageConfirmed: 1,
    perPageConfirmed: 10000,
    pageRejected: 1,
    perPageRejected: 10000,
  });
  const handleCallbackChangePaginationPending = (event, value) => {
    setPagePagination({
      ...pagePagination,
      pagePending: value,
    });
    if (pagePagination.perPagePending <= value) {
      setPagePagination({
        ...pagePagination,
        perPagePending: pagePagination.perPagePending + 1,
      });
    }
  };
  const handleCallbackChangePaginationConfirmed = (event, value) => {
    setPagePagination({
      ...pagePagination,
      pageConfirmed: value,
    });
    if (pagePagination.perPageConfirmed <= value) {
      setPagePagination({
        ...pagePagination,
        perPageConfirmed: pagePagination.perPageConfirmed + 1,
      });
    }
  };
  const handleCallbackChangePaginationRejected = (event, value) => {
    setPagePagination({
      ...pagePagination,
      pageRejected: value,
    });
    if (pagePagination.perPageRejected <= value) {
      setPagePagination({
        ...pagePagination,
        perPageRejected: pagePagination.perPageRejected + 1,
      });
    }
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
            label={tab.text + (tab?.count ? `（${tab?.count}）` : "")}
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
            <React.Fragment>
              {dataChild[1]?.data
                ?.slice((pagePagination.pagePending - 1) * LIMIT, pagePagination.pagePending * LIMIT)
                .map((tab, index) => (
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
                      <ThreadComponent
                        data={tab}
                        type="unConfirm"
                        dataType={dataType}
                        setKeyRefetchData={setKeyRefetchData}
                      />
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
                {dataChild[2]?.data?.length > LIMIT && (
                  <PaginationCustomComponent
                    handleCallbackChangePagination={handleCallbackChangePaginationPending}
                    page={pagePagination?.pagePending}
                    perPage={pagePagination?.perPagePending}
                    totalPage={Math.ceil(dataChild[1]?.data?.length > 0 ? dataChild[1].data.length / LIMIT : 1)}
                  />
                )}
              </Box>
            </React.Fragment>
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
            <React.Fragment>
              {dataChild[1]?.data
                ?.slice((pagePagination.pageConfirmed - 1) * LIMIT, pagePagination.pageConfirmed * LIMIT)
                .map((tab, index) => (
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
                      <ThreadComponent
                        data={tab}
                        type="confirm"
                        dataType={dataType}
                        setKeyRefetchData={setKeyRefetchData}
                      />
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
                {dataChild[2]?.data?.length > LIMIT && (
                  <PaginationCustomComponent
                    handleCallbackChangePagination={handleCallbackChangePaginationConfirmed}
                    page={pagePagination?.pageConfirmed}
                    perPage={pagePagination?.perPageConfirmed}
                    totalPage={Math.ceil(dataChild[1]?.data?.length > 0 ? dataChild[1].data.length / LIMIT : 1)}
                  />
                )}
              </Box>
            </React.Fragment>
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
            <React.Fragment>
              {dataChild[2]?.data
                ?.slice((pagePagination.pageRejected - 1) * LIMIT, pagePagination.pageRejected * LIMIT)
                .map((tab, index) => (
                  <React.Fragment key={index.toString()}>
                    <Box
                      sx={{
                        mx: [0, "45px"],
                        "&:first-of-type": {
                          paddingTop: ["20px", "27px"],
                        },
                      }}
                    >
                      <ThreadComponent
                        data={tab}
                        type="reject"
                        dataType={dataType}
                        setKeyRefetchData={setKeyRefetchData}
                      />
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
                {dataChild[2]?.data?.length > LIMIT && (
                  <PaginationCustomComponent
                    handleCallbackChangePagination={handleCallbackChangePaginationRejected}
                    page={pagePagination?.pageRejected}
                    perPage={pagePagination?.perPageRejected}
                    totalPage={Math.ceil(dataChild[2]?.data?.length > 0 ? dataChild[2].data.length / LIMIT : 1)}
                  />
                )}
              </Box>
            </React.Fragment>
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
