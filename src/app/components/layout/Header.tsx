import { appOrange } from "@/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: "15px", height: "4rem", backgroundColor: "background.paper" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Image src="./gridview.svg" alt="Home icon" width={28} height={27} />
        <Typography component="h1" color="primary" ml={2} fontSize={24}>
          My Tasks
        </Typography>
      </Box>
      <Image src="./Search.svg" alt="Home icon" width={23} height={23} />
    </Box>
  );
};
