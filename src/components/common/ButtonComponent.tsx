import React from "react";
import { Button, ButtonProps, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

import theme from "src/theme";

const ButtonRounded = styled(Button)({
  height: 48,
  width: 280,
  borderRadius: 40,
  fontSize: 16,
  fontWeight: 700,
  textTransform: "capitalize",
  "&:hover": {
    opacity: 0.9,
  },
});

const ButtonTwitter = styled(ButtonRounded)({
  background: "#55ACEE",
  "&:hover": {
    background: "#55ACEE",
  },
  color: "white",
});

const ButtonGoogle = styled(ButtonRounded)({
  background: "white",
  "&:hover": {
    borderColor: "black",
  },
  color: theme.navy,
  borderColor: "#DADADA",
});

const ButtonGithub = styled(ButtonRounded)({
  background: "#101010",
  "&:hover": {
    background: "#101010",
  },
  color: "white",
  borderColor: "#DADADA",
});

const ButtonGradient = styled(ButtonRounded)({
  width: 200,
  color: "white",
  background: theme.gd,
});

function renderSwitch(mode, children, rest) {
  switch (mode) {
    case "twitter":
      return (
        <ButtonTwitter
          disableElevation
          startIcon={
            <Avatar variant="square" sx={{ width: "100%", height: "100%" }} src="/assets/images/svg/twitter.svg" />
          }
        >
          {children}
        </ButtonTwitter>
      );
    case "google":
      return (
        <ButtonGoogle
          variant="outlined"
          disableElevation
          startIcon={<Avatar sx={{ width: "100%", height: "100%" }} src="/assets/images/svg/google.svg" />}
        >
          {children}
        </ButtonGoogle>
      );
    case "github":
      return (
        <ButtonGithub
          disableElevation
          startIcon={
            <Avatar variant="square" sx={{ width: "100%", height: "100%" }} src="/assets/images/svg/github.svg" />
          }
        >
          {children}
        </ButtonGithub>
      );
    case "gradient":
      return <ButtonGradient {...rest}>{children}</ButtonGradient>;
    default:
      return <ButtonRounded {...rest}>{children}</ButtonRounded>;
  }
}

interface ButtonComponentProps extends ButtonProps {
  children: any;
  mode?: string;
}

const ButtonComponent: React.SFC<ButtonComponentProps> = ({ children, mode, ...rest }) => (
  <React.Fragment>{renderSwitch(mode, children, rest)}</React.Fragment>
);

export default ButtonComponent;
