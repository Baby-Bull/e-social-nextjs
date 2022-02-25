import React from "react";
import { Box, Tabs, Stack, Pagination } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

import theme from "src/theme";
import { TabPanel, a11yProps, ChildTabCustom } from "src/components/common/Tab/BlueChildTabComponent";
import ListViewComponent, { IData } from "src/components/common/ListViewComponent";
import ButtonComponent from "src/components/common/ButtonComponent";

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

interface IDataChild {
  text: string;
  data: IData[];
}

interface IChildTabComponentProps {
  dataChild: IDataChild[];
  maxWidth?: string;
}

const ChildTabComponent: React.SFC<IChildTabComponentProps> = ({ dataChild, maxWidth }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [valueChildTab, setValueChildTab] = React.useState(0);

  const onChangeChildTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueChildTab(newValue);
  };

  return (
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
          {dataChild?.map((tab, index) => (
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
          onClick={() => router.push("/community/post/create")}
        >
          {t("community:button.create-post")}
        </ButtonComponent>
      </Box>

      <TabPanel value={valueChildTab} index={0}>
        <Box
          sx={{
            borderBottom: `1px solid ${theme.lightGray}`,
          }}
        >
          {dataChild[0]?.data?.length &&
            dataChild[0]?.data.map((tab, index) => (
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
  );
};
export default ChildTabComponent;
