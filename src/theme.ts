/* eslint-disable no-unused-vars */
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
    black: string;
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
    black?: string;
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
  components: {
    MuiButton: { 
      styleOverrides: {
        "root": {
          "&.Mui-disabled": {
            "background": "#F5F5F5",
            "color": "#989EA8"
          }
        },
        sizeSmall: {
          fontSize: "10px",
          height: "20px",
          lineHeight: "24px",
          fontWeight: 700
        },
        sizeMedium: {
          fontSize: "16px",
          height: "48px",
          lineHeight: "24px",
          fontWeight: 700
        }
      } 
    }
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
  gd: "linear-gradient(90deg, #03BCDB 0%, #03DBCE 100%)".big(),
  black: "#262A30"
});

export default theme;
