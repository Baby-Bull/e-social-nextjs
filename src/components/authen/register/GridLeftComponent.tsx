import React from "react";
import { Box, Grid, Typography, Avatar, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";

import theme from "src/theme";

import styles from "../authen.module.scss";

const Item = styled(Paper)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  ${(props) => props.theme.breakpoints.up("xs")} {
    height: 96px;
    padding-left: 8px;
    padding-right: 8px;
  }
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 64px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TypoNumber = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blue};
`;

const BoxDescription = styled(Box)`
  color: #000;
  display: flex;
  align-items: center;
`;

const TypoCustom = styled(Typography)`
  letter-spacing: 6px;
`;

const TypoContent = styled(TypoCustom)`
  font-weight: 700;
  ${(props) => props.theme.breakpoints.up("xs")} {
    padding-left: 14px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    padding-left: 20px;
  }
`;

const GridLeftComponent = () => {
  const { t } = useTranslation();

  return (
    <Grid
      className={styles["left-component-wrapper"]}
      item
      sx={{
        background: theme.whiteGray,
      }}
    >
      <Box className={styles["left-component-container"]}>
        <Typography className={styles["left-component--tittle"]}>{t("register:description.title")}</Typography>
        <Avatar
          className={styles["left-component--avatar"]}
          variant="square"
          src="/assets/images/svg/register_account.svg"
        />
        <Stack className={styles["left-component--stack"]} spacing={{ xs: "20px", sm: 4 }}>
          <Item>
            <BoxDescription color="#000">
              <TypoNumber>01</TypoNumber>
              <Box className={styles["left-component--box-item"]}>
                <TypoCustom className={styles["left-component--box-item-1-1"]}>
                  {t("register:description.text-1.1")}
                </TypoCustom>
                <Typography className={styles["left-component--box-item-1-2"]}>
                  {t("register:description.text-1.2")}
                </Typography>
              </Box>
            </BoxDescription>
          </Item>

          <Item>
            <BoxDescription color="#000">
              <TypoNumber>02</TypoNumber>
              <TypoContent>{t("register:description.text-2")}</TypoContent>
            </BoxDescription>
          </Item>

          <Item>
            <BoxDescription color="#000">
              <TypoNumber>03</TypoNumber>
              <TypoContent>{t("register:description.text-3")}</TypoContent>
            </BoxDescription>
          </Item>
        </Stack>
      </Box>
    </Grid>
  );
};
export default GridLeftComponent;
