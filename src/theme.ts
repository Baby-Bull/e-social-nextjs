import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    lightBlue: string;
    blue: string;
    whiteBlue: string;
    whiteGray: string;
    gray: string;
    green: string;
    orange: string;
    cleam: string;
    navy: string;
    red: string;
    gd: string;
  }

  interface ThemeOptions {
    lightBlue?: string;
    blue?: string;
    whiteBlue?: string;
    whiteGray?: string;
    gray?: string;
    green?: string;
    orange?: string;
    cleam?: string;
    navy?: string;
    red?: string;
    gd?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  lightBlue: "#A9F3FF",
  blue: "#03BCDB",
  whiteBlue: "#F4FDFF",
  whiteGray: "#F5F5F5",
  gray: "#989EA8",
  green: "#1BD0B0",
  orange: "#FF9458",
  cleam: "#FFF9E5",
  navy: "#1A2944",
  red: "#FF5454",
  gd: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)"
});

export default theme;
