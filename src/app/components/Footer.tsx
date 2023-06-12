import { Box } from "@mui/material";
import Image from "next/image";
import { CenteredBox } from "./utils/CenteredBox";
import { VCenteredBox } from "./utils/VCenteredBox";

export default function Footer() {
  return (
    <Box display="flex" sx={{ backgroundColor: "#FFFFFF", height: "4rem" }}>
      <CenteredBox sx={{ width: "50%" }}>
        <VCenteredBox sx={{ alignItems: "center" }}>
          <Image src="./Home.svg" alt="Home icon" width={18} height={20} />
          <span>Home</span>
        </VCenteredBox>
      </CenteredBox>

      <CenteredBox sx={{ width: "50%" }}>
        <VCenteredBox sx={{ alignItems: "center" }}>
          <Image
            src="./NightLight.svg"
            alt="Night Light icon"
            width={18}
            height={20}
          />
          <span>Night Light</span>
        </VCenteredBox>
      </CenteredBox>
    </Box>
  );
}
