import React from "react";
import { Box, Stack, Tabs } from "@mui/material";

import theme from "src/theme";
import useViewport from "src/helpers/useViewport";
import GridViewMemberComponent from "src/components/community/setting/blocks/GridViewMemberComponent";
import { PaginationCustom } from "src/components/community/blocks/ChildTabComponent";
import { ChildTabCustom, a11yProps, TabPanel } from "src/components/common/Tab/BlueChildTabComponent";

interface IData {
  avatar: string;
  name: string;
  job: string;
  is_representative?: boolean;
  is_manager?: boolean;
}

interface IDataChild {
  text: string;
  data: IData[];
}

interface IMemberComponentProps {
  dataChild: IDataChild[];
}

const MemberComponent: React.SFC<IMemberComponentProps> = ({ dataChild }) => {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 425;
  const [valueChildTab, setValueChildTab] = React.useState(0);

  const onChangeChildTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueChildTab(newValue);
  };

  return (
    <Box
      sx={{
        mr: [0, "17.32%"],
        backgroundColor: [theme.whiteBlue, "white"],
        borderRadius: "12px",
      }}
    >
      <Tabs
        value={valueChildTab}
        onChange={onChangeChildTab}
        aria-label="tab children"
        TabIndicatorProps={{
          style: {
            backgroundColor: isMobile ? theme.blue : "transparent",
          },
        }}
        sx={{
          pl: { sm: "10px" },
        }}
      >
        {dataChild?.map((tab, index) => (
          <ChildTabCustom
            sx={{
              backgroundColor: "white",
              py: { sm: "30px" },
              ml: { sm: "28px" },
            }}
            props={{
              fontSize: "16px",
              xsWidth: "50%",
              xsFontSize: "10px",
              mdWidth: "152px",
            }}
            key={index.toString()}
            iconPosition="top"
            label={tab.text}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <TabPanel value={valueChildTab} index={0}>
        <Box
          sx={{
            borderBottom: `1px solid ${theme.lightGray}`,
          }}
        >
          {dataChild[0]?.data?.length &&
            dataChild[0]?.data?.map((tab, index) => (
              <React.Fragment key={index.toString()}>
                <Box>
                  <GridViewMemberComponent data={tab} type="participated" />
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
            dataChild[1]?.data?.map((tab, index) => (
              <React.Fragment key={index.toString()}>
                <Box>
                  <GridViewMemberComponent data={tab} type="block" />
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
export default MemberComponent;
