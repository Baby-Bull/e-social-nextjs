import React from "react";
import { Button, ButtonProps, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';

const ButtonRounded = styled(Button)({
  height: 48,
  width: 280,
  borderRadius: 40,
  fontSize: 16,
  fontWeight: 700,
  textTransform: "capitalize",
  "&:hover": {
    opacity: 0.9
  }
});

const ButtonTwitter = styled(ButtonRounded)({
  background: '#55ACEE',
  "&:hover": {
    background: "#55ACEE"
  },
  color: "white"
});

const ButtonGoogle = styled(ButtonRounded)({
  background: '#fff',
  "&:hover": {
    borderColor: '#000'
  },
  color: "#1A2944",
  borderColor: '#DADADA'
});

const ButtonGithub = styled(ButtonRounded)({
  background: '#101010',
  "&:hover": {
    background: "#101010"
  },
  color: "#fff",
  borderColor: '#DADADA'
});

const ButtonGradient = styled(ButtonRounded)({
  width: 200,
  color: "#fff",
  background: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)"
});

function renderSwitch(mode, children, rest) {
  switch (mode) {
    case 'twitter':
      return <ButtonTwitter
        disableElevation
        startIcon={
          <Avatar
            variant="square"
            sx={{ width: "100%", height: "100%" }}
            src="/image/twitter.svg"
          />
        }
      >
        {children}
      </ButtonTwitter>
    case 'google':
      return <ButtonGoogle
        variant="outlined"
        disableElevation
        startIcon={
          <Avatar
            sx={{ width: "100%", height: "100%" }}
            src="/image/google.svg"
          />
        }
      >
        {children}
      </ButtonGoogle>
    case 'github':
      return <ButtonGithub
        disableElevation
        startIcon={
          <Avatar
            variant="square"
            sx={{ width: "100%", height: "100%" }}
            src="/image/github.svg"
          />
        }>
        {children}
      </ButtonGithub>
    case 'gradient':
      return <ButtonGradient {...rest}>{children}</ButtonGradient>
    default:
      return <ButtonRounded {...rest}>{children}</ButtonRounded>
  }
}

interface ButtonComponentProps extends ButtonProps {
  children: any;
  mode?: string;
}

const ButtonComponent: React.SFC<ButtonComponentProps> = ({
  children,
  mode,
  ...rest
}) => (
  <React.Fragment>
    {renderSwitch(mode, children, rest)}
  </React.Fragment>
);

export default ButtonComponent;