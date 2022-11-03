import { styled } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 6,
  transform: "translateY(30px)",
  transition: "all 250ms linear",
  transitionDelay: "300ms",
  pointerEvents: "none",
  opacity: "0",
  visibility: "hidden",

  "&.is-opened": {
    pointerEvents: "auto",
    opacity: "1",
    visibility: "visible",
    transform: "translateY(0)",
    transition: "opacity 350ms ease, transform 250ms ease",
    transitionDelay: "1400ms",
  },
}));

export default ToggleButtonGroupStyled;
