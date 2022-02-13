import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "src/theme";
import ButtonComponent from "src/components/common/ButtonComponent";

import { countMemberOnVirtualRoom, infoAdmin, status, canCreatePost } from "../mockData";

const IntroCommunityComponent = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Box
        sx={{
          p: "20px 20px 40px 20px",
          minHeight: { sm: "601px" },
          display: "flex",
          flexDirection: "column",
          border: `2px solid ${theme.whiteGray}`,
          borderRadius: "12px",
          color: theme.navy,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.detail")}
        </Typography>
        <Typography component="span">{infoAdmin.description}</Typography>

        <Typography
          component="span"
          sx={{
            mt: "22px",
            pb: "8px",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.administrator")}
        </Typography>

        <Box display="flex">
          <Avatar
            sx={{
              mr: "8px",
              width: "32px",
              height: "32px",
            }}
            src="/assets/images/svg/dog.svg"
          />
          {infoAdmin.name}
        </Box>

        <Typography
          component="span"
          sx={{
            mt: "22px",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.open-date")}
        </Typography>
        <Typography component="span">{infoAdmin.open_date}</Typography>

        <Typography
          component="span"
          sx={{
            mt: "22px",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {t("community:intro.title.role-create-post")}
        </Typography>
        <Typography component="span">{infoAdmin.role}</Typography>

        {status === "withdraw" && (
          <ButtonComponent
            props={{
              square: true,
              bgColor: theme.orange,
            }}
            sx={{
              mt: ["55px", "26px"],
              width: "197px",
              height: "102px",
            }}
          >
            <Box>
              {t("community:button.go-to-virtual-room")}
              <Box
                sx={{
                  pt: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/assets/images/svg/community_message.svg" alt="community_message" />
                <Typography pl="16px" fontWeight={700}>
                  {countMemberOnVirtualRoom}
                </Typography>
              </Box>
            </Box>
          </ButtonComponent>
        )}
      </Box>

      {canCreatePost && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ButtonComponent
            props={{
              square: true,
              mode: "gradient",
              dimension: "medium",
            }}
            sx={{
              mt: ["20px", "40px"],
              height: "54px",
            }}
          >
            {t("community:button.intro.create-post")}
          </ButtonComponent>
        </Box>
      )}
    </React.Fragment>
  );
};
export default IntroCommunityComponent;
