import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import EmptyComponent from "src/components/community/setting/blocks/EmptyComponent";
import GridViewComponent from "src/components/community/setting/blocks/GridViewComponent";
import { PaginationCustom } from "src/components/community/blocks/ChildTabComponent";

import { participations } from "../../mockData";

const ParticipationComponent = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mr: [0, "17.32%"],
        backgroundColor: [theme.whiteBlue, "white"],
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          borderBottom: { sm: `1px solid ${theme.lightGray}` },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            py: ["20px", "28px"],
            px: [0, "40px"],
            textAlign: ["center", "left"],
          }}
        >
          {t("community:setting.participation.title")}
        </Typography>
        {participations?.length ? (
          participations?.map((data, index) => (
            <React.Fragment key={index.toString()}>
              <GridViewComponent data={data} />
            </React.Fragment>
          ))
        ) : (
          <Box>
            <EmptyComponent text={t("community:setting.participation.empty")} />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          py: "40px",
          display: participations?.length ? "flex" : "none",
          justifyContent: "center",
        }}
      >
        <PaginationCustom count={4} />
      </Box>
    </Box>
  );
};
export default ParticipationComponent;
