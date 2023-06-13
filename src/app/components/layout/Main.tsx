"use client";
import {
  CssBaseline,
  Switch,
  FormControlLabel,
  Container,
  Box,
  ThemeProvider,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleDarkMode } from "@/redux/features/appSlice";
import { darkTheme, lightTheme } from "@/app/theme/themes";
import Footer from "./footer/Footer";
import { Header } from "./Header";

export const Main = ({ children }: PropsWithChildren) => {
  const { darkMode } = useAppSelector((state) => state.appSlice);
  const dispatch = useAppDispatch();

  const theme = darkMode ? darkTheme : lightTheme;

  const changeThemeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <ThemeProvider theme={theme}>
      <body id="__next">
        <CssBaseline />

        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: "background.paper",
            height: "100svh",
            padding: 0,
          }}
        >
          <Header />
          <Box
            sx={{
              height: "calc(100svh - 11rem)",
              overflowY: "scroll",
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  inputProps={{ "aria-label": "Dark Mode" }}
                  onChange={changeThemeHandler}
                />
              }
              label="Dark Mode"
              labelPlacement="start"
            />
            {children}
          </Box>
          <Footer />
        </Container>
      </body>
    </ThemeProvider>
  );
};
