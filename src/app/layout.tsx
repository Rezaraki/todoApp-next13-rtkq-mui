"use client";

import "./globals.css";
import { darkTheme, lightTheme } from "./theme/themes";
import { Providers } from "@/redux/provider";

import {
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
  Container,
  Box,
} from "@mui/material";
import { ChangeEvent, PropsWithChildren, useState } from "react";
import Footer from "./components/Footer";

export default function RootLayout({ children }: PropsWithChildren) {
  let [useDarkTheme, setUseDarkTheme] = useState(false);

  const theme = useDarkTheme ? darkTheme : lightTheme;
  const changeThemeHandler = (target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue);
  };

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Providers>
        <ThemeProvider theme={theme}>
          <body id="__next">
            <CssBaseline />
            <Container
              maxWidth="xs"
              sx={{
                bgcolor: "red",
                height: "100svh",
                padding: 0,
              }}
            >
              <Box
                sx={{
                  height: "calc(100svh - 7rem)",
                  overflowY: "scroll",
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={useDarkTheme}
                      inputProps={{ "aria-label": "Dark Mode" }}
                      onChange={(target, value) =>
                        changeThemeHandler(target, value)
                      }
                    ></Switch>
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
      </Providers>
    </html>
  );
}

// import "./globals.css";
// import { Providers } from "@/redux/provider";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }
