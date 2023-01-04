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
  opacity: 0,

  "&.is-opened": {
    pointerEvents: "auto",
    opacity: "1",
    transition: "all 350ms linear",
    transitionDelay: "400ms",
  },
}));

export default ToggleButtonGroupStyled;
