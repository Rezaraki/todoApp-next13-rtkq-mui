import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CenteredBox } from "./utils/CenteredBox";
import { VCenteredBox } from "./utils/VCenteredBox";
import { Circle } from "./utils/Circle";

export default function Footer() {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "#FFFFFF",
        height: "7rem",
        flexDirection: "column",
        justifyContent: "end",
      }}
    >
      <Box
        display="flex"
        sx={{
          backgroundColor: "#FFFFFF",
          height: "4rem",
        }}
      >
        <CenteredBox sx={{ width: "50%" }}>
          <VCenteredBox sx={{ alignItems: "center" }}>
            <Image src="./Home.svg" alt="Home icon" width={18} height={20} />

            <Typography component="span" color="primary">
              Home
            </Typography>
          </VCenteredBox>
        </CenteredBox>

        <Circle
          width="60px"
          backgroundColor="#ff4444"
          sx={{ position: "relative", bottom: "2.5rem" }}
        >
          <CenteredBox>
            <VCenteredBox>+ </VCenteredBox>
          </CenteredBox>
        </Circle>

        <CenteredBox sx={{ width: "50%" }}>
          <VCenteredBox sx={{ alignItems: "center" }}>
            <Image
              src="./NightLight.svg"
              alt="Night Light icon"
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
