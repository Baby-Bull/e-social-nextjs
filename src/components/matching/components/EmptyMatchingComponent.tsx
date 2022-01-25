import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

import ButtonComponent from "src/components/common/ButtonComponent";
import theme from "src/theme";

interface EmptyMatchingComponentProps {
  text: string;
  mode?: string;
}

const EmptyMatchingComponent: React.SFC<EmptyMatchingComponentProps> = ({ text, mode }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mt: ["20px", "36px"],
        mx: ["48px", 0],
        borderTop: `2px solid ${theme.lightGray}`,
        height: ["470px", "490px"],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          my: "40px",
          fontSize: ["16px", "20px"],
          fontWeight: 400,
        }}
      >
        {text}
      </Typography>
      <Box display={mode === "community" && "none"}>
        <img src="/assets/images/svg/account_with_phone.svg" width="156px" alt="account_with_phone" />
      </Box>
      <ButtonComponent
        props={{
          mode: "gradient",
        }}
        sx={{
          mt: ["30px", "15px"],
        }}
      >
        {t("matching:button.find-engineer")}
      </ButtonComponent>

      <ButtonComponent
        props={{
          dimension: "medium",
          bgColor: theme.orange,
        }}
        sx={{
          mt: "40px",
          display: mode !== "community" && "none",
          borderRadius: "4px",
        }}
      >
        {t("matching:button.create-community")}
      </ButtonComponent>
    </Box>
  );
};
export default EmptyMatchingComponent;
