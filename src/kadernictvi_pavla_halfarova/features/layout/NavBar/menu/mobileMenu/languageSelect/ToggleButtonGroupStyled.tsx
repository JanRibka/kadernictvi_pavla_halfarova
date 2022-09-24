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
  button: {
    border: "0",
    position: "realtive",
    // background: "transparent",
    // backgroundColor: "transparent",

    "&:after": {
      position: "absolute",
      content: "''",
      bottom: "0px",
      left: "0%",
      width: "100%",
      height: "2px",
      backgroundColor: theme.palette.common.background.pink,
      transform: "scaleX(0)",
      transformOrigin: "right",
      transition: "transform 0.5s",
    },

    "&:active": {
      backgroundColor: "transparent",
    },

    "&:hover": {
      paddingBottom: "20px",
      paddingTop: "10px",
      backgroundColor: "transparent",
    },

    "&.Mui-selected": {
      backgroundColor: "transparent",

      "&:hover": {
        backgroundColor: "transparent",
      },

      "&:after": {
        transform: "scaleX(1)",
        transformOrigin: "left",
      },
    },
    span: {
      display: "none",
    },
    img: {
      height: "3rem",
      borderRadius: "3px",
    },
  },
}));

export default ToggleButtonGroupStyled;
