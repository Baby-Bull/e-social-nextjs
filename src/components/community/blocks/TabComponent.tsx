import React, { useState } from "react";
import { Box, Tabs, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import theme from "src/theme";
import { TabPanel, a11yProps, TabCustom } from "src/components/common/Tab/BlueTabComponent";
import EmptyComponent from "src/components/community/blocks/EmptyComponent";
import ChildTabComponent from "src/components/community/blocks/ChildTabComponent";
import GridViewComponent from "src/components/community/blocks/GridViewComponent";
import { CommunityMembers } from "src/services/community";
import PaginationCustomComponent from "src/components/common/PaginationCustomComponent";

import { status, tabsCommunity } from "../mockData";

const TypographyCustom = styled(Typography)({
  fontSize: 16,
  "@media (max-width: 425px)": {
    fontSize: 14,
  },
});

interface IData {
  text: string;
}

interface ITabComponentProps {
  data: IData[];
}

const TabComponent: React.SFC<ITabComponentProps> = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const valueTabMenbers = 2;
  const LIMIT = 20;

  const [valueParentTab, setValueParentTab] = React.useState(0);
  const [communityMembers] = useState([]);
  const [totalCommunityMembers, setTotalCommunityMembers] = useState(0);
  const [page, setPage] = React.useState(1);
  const [perPage, setperPage] = React.useState(2);
  const [isCallApi, setIsCallApi] = React.useState(false);
  const [valueCursor, setCursor] = React.useState("");

  const fetchDataUsers = async (cursor: string = "") => {
    const communityId = router.query;
    const resData = await CommunityMembers(communityId?.indexId, LIMIT, cursor);
    communityMembers.push(resData);
    setTotalCommunityMembers(resData?.items_count);
    setCursor(resData?.cursor);
    setIsCallApi(true);
    return resData;
  };

  const onChangeParentTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueParentTab(newValue);
    if (valueTabMenbers === newValue && !isCallApi) {
      fetchDataUsers();
    }
  };

  const handleCallbackChangePagination = (event, value) => {
    setPage(value);
    if (perPage <= value) {
      setperPage(perPage + 1);
      fetchDataUsers(valueCursor ?? "");
    }
  };

  // @ts-ignore
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
            sx={{
              backgroundColor: "white",
              display: [
                index.toString() === "2" && "none",
                tabsCommunity[0]?.children && index.toString() === "2" && "inherit",
              ],
            }}
            props={{
              xsColor: theme.blue,
              xsFontSize: "16px",
              xsWidth: "50%",
              xsHeight: "48px",
              xsBorderColor: theme.blue,
              xsBorderRadius: "12px 12px 0px 0px",
              mdWidth: "152px",
              lgWidth: "33.33333%",
            }}
            key={index.toString()}
            iconPosition="top"
            label={tab.text}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={valueParentTab} index={0}>
        {status === "withdraw" ? (
          <EmptyComponent
            textButton={t("community:button.empty.go-to-talk-room")}
            mtButton={{
              md: "40px",
            }}
          >
            <TypographyCustom>{t("community:empty.withdraw-1")}</TypographyCustom>
            <TypographyCustom>{t("community:empty.withdraw-2")}</TypographyCustom>
            <Typography
              sx={{
                pt: "25px",
                fontSize: ["10px", "14px"],
              }}
            >
              {t("community:empty.withdraw-3")}
            </Typography>
          </EmptyComponent>
        ) : (
          <Box>
            {status === "join" && tabsCommunity[0]?.children ? (
              <ChildTabComponent dataChild={tabsCommunity[0]?.children} maxWidth="75px" />
            ) : (
              <EmptyComponent
                textButton={t("community:button.empty.create-post")}
                handleClick={() => router.push("/community/post/create")}
              >
                <TypographyCustom>{t("community:empty.no-post")}</TypographyCustom>
                <TypographyCustom display={["none", "inherit"]}>
                  {t("community:empty.create-post") + t("community:empty.talk-to-members")}
                </TypographyCustom>
                <TypographyCustom display={["inherit", "none"]}>{t("community:empty.create-post")}</TypographyCustom>
                <TypographyCustom display={["inherit", "none"]}>
                  {t("community:empty.talk-to-members")}
                </TypographyCustom>
              </EmptyComponent>
            )}
          </Box>
        )}
      </TabPanel>

      <TabPanel value={valueParentTab} index={1}>
        <EmptyComponent
          hiddenButton={status === "join"}
          textButton={t("community:button.empty.talk-to-community")}
          mtButton={{
            md: "40px",
          }}
        >
          <Typography>{t("community:empty.withdraw-1")}</Typography>
          <Typography>{t("community:empty.withdraw-2")}</Typography>
          <Typography
            sx={{
              pt: "25px",
              fontSize: ["10px", "14px"],
            }}
          >
            {t("community:empty.withdraw-3")}
          </Typography>
        </EmptyComponent>
      </TabPanel>

      <TabPanel value={valueParentTab} index={2}>
        {communityMembers.length ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pb: "40px",
            }}
          >
            <GridViewComponent data={communityMembers[page - 1]?.items} />
            {totalCommunityMembers > LIMIT && (
              <PaginationCustomComponent
                handleCallbackChangePagination={handleCallbackChangePagination}
                page={page}
                perPage={perPage}
                totalPage={
                  Math.floor(totalCommunityMembers / LIMIT) <= totalCommunityMembers / LIMIT
                    ? Math.floor(totalCommunityMembers / LIMIT)
                    : Math.floor(totalCommunityMembers / LIMIT) + 1
                }
              />
            )}
          </Box>
        ) : (
          <EmptyComponent textButton={t("community:button.empty.create-post")}>
            <TypographyCustom>{t("community:empty.no-post")}</TypographyCustom>
            <TypographyCustom display={["none", "inherit"]}>
              {t("community:empty.create-post") + t("community:empty.talk-to-members")}
            </TypographyCustom>
            <TypographyCustom display={["inherit", "none"]}>{t("community:empty.create-post")}</TypographyCustom>
            <TypographyCustom display={["inherit", "none"]}>{t("community:empty.talk-to-members")}</TypographyCustom>
          </EmptyComponent>
        )}
      </TabPanel>
    </React.Fragment>
  );
};
export default TabComponent;
