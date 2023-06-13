"use client";

import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4444",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#0E0D0E",
      paper: "#000000",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF4444",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});
