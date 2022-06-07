import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

import theme from "src/theme";

interface BoxNodataProps {
  communities: any;
}

const ParticipatingCommunityComponent: React.SFC<BoxNodataProps> = ({ communities }) => {
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
        {communities?.map((item, key) => (
          <Grid item xs={12} lg={3} key={key}>
            <Box
              sx={{
                textAlign: "center",
                p: "20px 40px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: "124px", height: "124px" }} src={item.profile_image} alt="rectangle" />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  lineHeight: "20,27px",
                  fontSize: "14px",
                  color: theme.black,
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  lineHeight: "14,48px",
                  fontSize: "10px",
                  color: theme.blue,
                }}
              >
                {t("profile:number-participants")}:{item.member_count} {t("profile:man")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ParticipatingCommunityComponent;
