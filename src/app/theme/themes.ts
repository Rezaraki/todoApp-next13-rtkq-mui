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
    text: { primary: "#FFFFFF", secondary: "#000000" },
    background: {
      default: "#0E0D0E",
      paper: "#000000",
    },
    common: { white: "#FFFFFF", black: "#000000" },
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
    text: { primary: "#000000", secondary: "#FFFFFF" },
    background: {
      default: "#FFFFFF",
    },
    common: { white: "#FFFFFF", black: "#000000" },
  },
});
