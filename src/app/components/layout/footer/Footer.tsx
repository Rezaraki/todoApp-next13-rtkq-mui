"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CenteredBox } from "../../utils/CenteredBox";
import { VCenteredBox } from "../../utils/VCenteredBox";
import { MiddleCircle } from "./MiddleCircle";
import { appOrange } from "@/utils";
import { useAppSelector } from "@/redux/hooks";
// import NightLight from "../../../../../public/NightLight.svg";

//extracted  middle circle to seperate components that don't need to use theme or any client side actions so they could be server components
export default function Footer() {
  const { darkMode } = useAppSelector((state) => state.appSlice);
  return (
    <Box
      display="flex"
      sx={{
        // backgroundColor: "#FFFFFF",
        height: "7rem",
        flexDirection: "column",
        justifyContent: "end",
      }}
    >
      <Box
        display="flex"
        sx={{
          backgroundColor: "background.default",
          height: "4rem",
        }}
      >
        <CenteredBox sx={{ width: "50%" }}>
          <VCenteredBox sx={{ alignItems: "center" }}>
            <Image src="./Home.svg" alt="Home icon" width={18} height={20} />

            <Typography component="span" sx={{ color: appOrange }}>
              Home
            </Typography>
          </VCenteredBox>
        </CenteredBox>

        <MiddleCircle />

        <CenteredBox sx={{ width: "50%" }}>
          <VCenteredBox sx={{ alignItems: "center" }}>
            <Image
              src={darkMode ? "./sun.svg" : "./NightLight.svg"}
              alt="Night Light icon"
              className=""
              width={18}
              height={20}
            />
            <Typography component="span">Night Light</Typography>
          </VCenteredBox>
        </CenteredBox>
      </Box>
    </Box>
  );
}
