import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Circle = styled(Box)(
  ({ width, backgroundColor }: { width: string; backgroundColor: string }) => {
    return {
      borderRadius: "50%",
      width,
      height: width,
      backgroundColor,
    };
  }
);
