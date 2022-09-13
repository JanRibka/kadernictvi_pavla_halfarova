import { styled } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 6,
  transform: "translateY(30px)",
  transition: "all 250ms linear",
  transitionDelay: "250ms",
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
  button: {
    border: "0",
    position: "realtive",

    "&:before": {
      position: "absolute",
      content: "''",
      top: "100%",
      left: "0%",
      width: "100%",
      height: "0.3em",
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary.main,
      transform: "scaleX(0)",
      transformOrigin: "right",
      transition: "transform 0.5s",
    },

    "&:active": {
      backgroundColor: "transparent",
    },

    "&.Mui-selected": {
      "&:before": {
        transform: "scaleX(1)",
        transformOrigin: "left",
      },
    },
    span: {
      display: "none",
    },
    img: {
      height: "4vh",
      borderRadius: "3px",
    },
  },
}));

export default ToggleButtonGroupStyled;
