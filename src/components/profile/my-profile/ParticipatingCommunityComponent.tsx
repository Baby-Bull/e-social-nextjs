import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

import theme from "src/theme";

interface BoxNodataProps {
  participatingCommunityData: Array<any>;
}

const ParticipatingCommunityComponent: React.SFC<BoxNodataProps> = ({ participatingCommunityData }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        background: "#ffffff",
        p: "20px 20px",
      }}
    >
      <Grid container>
        {participatingCommunityData?.map((item) => (
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                textAlign: "center",
                p: "20px 40px",
              }}
            >
              <img src={item.img} alt="rectangle" />
              <Typography
                sx={{
                  fontWeight: 700,
                  lineHeight: "20,27px",
                  fontSize: "14px",
                  color: theme.black,
                }}
              >
                {item.communityName}
              </Typography>
              <Typography
                sx={{
                  lineHeight: "14,48px",
                  fontSize: "10px",
                  color: theme.blue,
                }}
              >
                {t("profile:number-participants")}:{item.numberParticipants} {t("profile:man")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ParticipatingCommunityComponent;
