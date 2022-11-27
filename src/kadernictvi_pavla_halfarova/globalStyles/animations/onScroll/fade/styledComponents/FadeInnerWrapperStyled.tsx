import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps {
  direction?: "up" | "right" | "down" | "left";
  once?: boolean;
  duration?: number;
  delay?: number;
}

const FadeInnerWrapperStyled = styled(Box, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== "direction" &&
    prop !== "once" &&
    prop !== "duration" &&
    prop !== "delay",
  name: "FadeInnerWrapperStyled",
  slot: "Root",
})<IProps>(({ theme }) => ({
  position: "relative",
  opacity: 0,

  "&.active": {
    transform: "translate(0)",
    opacity: 1,
  },
}));

export default FadeInnerWrapperStyled;
