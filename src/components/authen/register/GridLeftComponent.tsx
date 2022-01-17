import React from "react";
import { Box, Grid, Typography, Avatar, Stack, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useTranslation } from "next-i18next";

const Item = styled(Paper)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  ${props => props.theme.breakpoints.up("xs")} {
    height: 96px;
    padding-left: 8px;
    padding-right: 8px;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    height: 64px;
  }
  ${props => props.theme.breakpoints.up("md")} {
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TypoNumber = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  color: #03BCDB;
`;

const BoxDescription = styled(Box)`
  color: #000;
  display: flex;
  align-items: center;
`;

const TypoContent = styled(Typography)`
  font-weight: 700;
  ${props => props.theme.breakpoints.up("xs")} {
    padding-left: 14px;
  }
  ${props => props.theme.breakpoints.up("md")} {
    padding-left: 20px;
  }
`;

interface GridLeftComponentProps {
  smAndUp?: boolean;
}

const GridLeftComponent: React.SFC<GridLeftComponentProps> = ({
  smAndUp,
}) => {
  const { t } = useTranslation();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        background: "#03BCDB",
        display: [smAndUp ? 'none' : 'block', 'block']
      }}
    >
      <Box
        sx={{
          pt: [5, 9],
          pb: [5, "176px"],
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            pb: ["40px", "48px"],
            fontSize: 20,
            color: "#fff",
            fontWeight: 700
          }}
        >
          { t('register:description.title') }
        </Typography>
        <Avatar
          variant="square"
          sx={{
            width: ["50.2%", "43.5%"],
            height: "100%"
          }}
          src="/image/register_account.svg"
        />
        <Stack spacing={{ xs: "20px", sm: 4 }}
          sx={{
            pt: ["40px", "57px"],
            width: ["90%", "92%"],
            height: "100%"
          }}
        >
          <Item>
            <BoxDescription color="#000">
              <TypoNumber>01</TypoNumber>
              <Box
                sx={{
                  pl: ["14px", "14px", "0"],
                  color: "#000",
                  display: "flex",
                  flexDirection: ["column", "column", "row"],
                  alignItems: ["space-between", "space-between", "center"],
                  justifyContent: ["space-between", "space-between", "center"]
                }}
              >
                <Typography 
                  fontWeight="700" 
                  pl={{ md: "20px" }}
                >
                  { t('register:description.text-1.1') }
                  </Typography>
                <Typography 
                  fontSize="12px" 
                  fontWeight="400"
                  pl={{ md: "20px" }} 
                >
                  { t('register:description.text-1.2') }
                </Typography>
              </Box>
            </BoxDescription>
          </Item>

          <Item>
            <BoxDescription color="#000">
              <TypoNumber>02</TypoNumber>
              <TypoContent>{ t('register:description.text-2') }</TypoContent>
            </BoxDescription>
          </Item>

          <Item>
            <BoxDescription color="#000">
              <TypoNumber>03</TypoNumber>
              <TypoContent>{ t('register:description.text-3') }</TypoContent>
            </BoxDescription>
          </Item>
        </Stack>
      </Box>
    </Grid>
  )
};
export default GridLeftComponent;
