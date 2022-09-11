import { alpha, styled } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 6,
  transform: "translateY(-50%)",
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
  // TODO: Vybrany jazyk bude ozna4en stejne, jako polo6ky menu
  button: {
    border: "0",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
    },
    "&.Mui-selected": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.3),
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
      },
    },
    img: {
      height: "4vh",
      borderRadius: "3px",
    },
  },
}));

export default ToggleButtonGroupStyled;
