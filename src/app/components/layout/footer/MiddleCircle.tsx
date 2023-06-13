import { CenteredBox } from "../../utils/CenteredBox";
import { Circle } from "../../utils/Circle";
import { VCenteredBox } from "../../utils/VCenteredBox";

export const MiddleCircle = () => {
  return (
    <Circle
      width="60px"
      backgroundColor="#ff4444"
      sx={{ position: "relative", bottom: "2.2rem" }}
      onClick={() => {}}
    >
      <CenteredBox sx={{ height: "100%" }}>
        <VCenteredBox sx={{ color: "white" }}>+</VCenteredBox>
      </CenteredBox>
    </Circle>
  );
};
