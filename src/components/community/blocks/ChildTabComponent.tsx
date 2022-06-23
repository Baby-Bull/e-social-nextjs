import React, { useEffect, useState } from "react";
import { Box, Tabs, Stack, Pagination, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import theme from "src/theme";
import { TabPanel, a11yProps, ChildTabCustom } from "src/components/common/Tab/BlueChildTabComponent";
import ListViewComponent, { IData } from "src/components/common/ListViewComponent";
import ButtonComponent from "src/components/common/ButtonComponent";
import { getListCommunityPost } from "src/services/community";
import PaginationCustomComponent from "src/components/common/PaginationCustomComponent";
import EmptyComponent from "src/components/community/blocks/EmptyComponent";

export const PaginationCustom = styled(Pagination)({
  "& .MuiButtonBase-root": {
    "&.MuiPaginationItem-previousNext.Mui-disabled": {
      display: "none",
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: theme.blue,
      fontWeight: 700,

      "&:hover": {
        backgroundColor: theme.blue,
        opacity: 0.8,
      },
    },
  },

  "& .MuiPaginationItem-root": {
    color: theme.blue,
    fontWeight: 700,
    marginRight: "5px",
    "&:not(.MuiPaginationItem-previousNext)": {},
    "&:hover": {
      opacity: 0.5,
    },
  },
});

const TypographyCustom = styled(Typography)({
  fontSize: 16,
  "@media (max-width: 425px)": {
    fontSize: 14,
  },
});

interface IDataChild {
  text: string;
  data: IData[];
}

interface IChildTabComponentProps {
  dataChild: IDataChild[];
  maxWidth?: string;
  dataCommunityDetail?: any;
}

const ChildTabComponent: React.SFC<IChildTabComponentProps> = ({ dataChild, maxWidth, dataCommunityDetail }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const RoleAdmin = ["admin", "owner"];
  const tabs = [{ text: "新着順" }, { text: "オススメ順" }];
  const checkRoleCreatPost =
    RoleAdmin.includes(dataCommunityDetail?.community_role) ||
    dataCommunityDetail?.post_permission === dataCommunityDetail?.community_role ||
    dataCommunityDetail?.post_permission === "all";
  const LIMIT = 10;
  console.log(checkRoleCreatPost);
  const [valueChildTab, setValueChildTab] = useState(0);
  const [posts, setPost] = useState([]);
  const [totalCommunityPost, setTotalCommunityPost] = useState(0);
  const [pagePost, setPagePost] = useState(1);
  const [perPagePost, setperPagePost] = useState(2);
  const [valueCursorPost, setCursorPost] = useState("");

  const onChangeChildTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueChildTab(newValue);
  };

  const communityPosts = async (cursor: string = "") => {
    const communityId = router.query;
    const res = await getListCommunityPost(communityId?.id, LIMIT, cursor);
    if (!res?.error_code) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setPost([...posts, ...res?.items]);
      setTotalCommunityPost(res?.items_count);
      setCursorPost(res?.cursor);
      return res;
    }
  };

  const handleCallbackChangePagination = (event, value) => {
    setPagePost(value);
    if (perPagePost <= value) {
      setperPagePost(perPagePost + 1);
      communityPosts(valueCursorPost ?? "");
    }
  };

  const redirectToCreatePost = () => {
    const community = router.query;
    router.push(`/community/${community?.id}/post/create`);
  };
  useEffect(() => {
    communityPosts();
  }, []);

  return (
    <Box>
      {posts.length > 0 ? (
        <Box>
          <Box
            sx={{
              border: [`1px solid ${theme.blue}`, `2px solid ${theme.whiteGray}`],
              borderRadius: "0 0 12px 12px",
            }}
          >
            <Box
              sx={{
                my: ["20px", 0],
                display: "flex",
                flexDirection: ["column-reverse", "row"],
                alignItems: "center",
                justifyContent: ["center", "space-between"],
              }}
            >
              <Tabs
                variant="fullWidth"
                value={valueChildTab}
                onChange={onChangeChildTab}
                aria-label="tab children"
                sx={{
                  mx: { sm: "40px" },
                  mt: { sm: "38px" },
                  borderBottom: [`1px solid ${theme.lightGray}`, "none"],
                  ".MuiTabs-indicator": {
                    backgroundColor: [theme.blue, "transparent"],
                  },
                }}
              >
                {tabs?.map((tab, index) => (
                  <ChildTabCustom
                    key={index.toString()}
                    props={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mdWidth: maxWidth,
                    }}
                    iconPosition="top"
                    label={tab.text}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
              {checkRoleCreatPost && (
                <ButtonComponent
                  props={{
                    mode: "gradient",
                    dimension: "tiny",
                  }}
                  sx={{
                    height: "36px",
                    mr: "26px",
                    "@media (max-width: 425px)": {
                      fontSize: "12px",
                    },
                  }}
                  onClick={redirectToCreatePost}
                >
                  {t("community:button.create-post")}
                </ButtonComponent>
              )}
            </Box>

            <TabPanel value={valueChildTab} index={0}>
              <Box
                sx={{
                  borderBottom: `1px solid ${theme.lightGray}`,
                }}
              >
                {posts.length > 0 &&
                  posts.slice((pagePost - 1) * LIMIT, pagePost * LIMIT).map((tab, index) => (
                    <React.Fragment key={index.toString()}>
                      <Box>
                        <ListViewComponent
                          data={tab}
                          props={{
                            pl: ["10px", "42px"],
                            pr: ["10px", "19px"],
                          }}
                        />
                      </Box>
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
                <Stack>
                  {totalCommunityPost > LIMIT && (
                    <PaginationCustomComponent
                      handleCallbackChangePagination={handleCallbackChangePagination}
                      page={pagePost}
                      perPage={perPagePost}
                      totalPage={
                        Math.floor(totalCommunityPost / LIMIT) < totalCommunityPost / LIMIT
                          ? Math.floor(totalCommunityPost / LIMIT) + 1
                          : Math.floor(totalCommunityPost / LIMIT)
                      }
                    />
                  )}
                </Stack>
              </Box>
            </TabPanel>

            <TabPanel value={valueChildTab} index={1}>
              <Box
                sx={{
                  borderBottom: `1px solid ${theme.lightGray}`,
                }}
              >
                {dataChild[1]?.data?.length &&
                  dataChild[1]?.data.map((tab, index) => (
                    <React.Fragment key={index.toString()}>
                      <Box>
                        <ListViewComponent
                          data={tab}
                          props={{
                            pl: ["10px", "42px"],
                            pr: ["10px", "19px"],
                          }}
                        />
                      </Box>
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
                <Stack>
                  <PaginationCustom count={4} />
                </Stack>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      ) : (
        <Box>
          <EmptyComponent textButton={t("community:button.empty.create-post")} handleClick={redirectToCreatePost}>
            <TypographyCustom>{t("community:empty.no-post")}</TypographyCustom>
            <TypographyCustom display={["none", "inherit"]}>
              {t("community:empty.create-post") + t("community:empty.talk-to-members")}
            </TypographyCustom>
          </EmptyComponent>
        </Box>
      )}
    </Box>
  );
};
export default ChildTabComponent;
