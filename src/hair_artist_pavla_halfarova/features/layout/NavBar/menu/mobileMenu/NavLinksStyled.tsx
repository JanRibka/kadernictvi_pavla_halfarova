import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const NavLinksStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "0",
  display: "block",
  width: "100%",
  padding: "0",
  margin: "0",
  zIndex: 6,
  textAlign: "center",
  transform: "translateY(-50%)",

  "& .nav-links-wrapper": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "1rem",
    button: {
      position: "relative",
      disply: "block",
      width: "100%",
      padding: "0",
      margin: "10px 0",
      pointerEvents: "none",
      opacity: "0",
      visibility: "hidden",
      transform: "translateY(30px)",
      transition: "all 250ms linear",
      fontSize: "4vh",

      "&:nth-child(1)": {
        transitionDelay: "200ms",
      },
      "&:nth-child(2)": {
        transitionDelay: "150ms",
      },
      "&:nth-child(3)": {
        transitionDelay: "100ms",
      },
      "&:nth-child(4)": {
        transitionDelay: "50ms",
      },
    },

    "&.is-opened": {
      button: {
        pointerEvents: "auto",
        opacity: "1",
        visibility: "visible",
        transform: "translateY(0)",
        transition: "opacity 350ms ease, transform 250ms ease",
        "&:nth-child(1)": {
          transitionDelay: "1480ms",
        },
        "&:nth-child(2)": {
          transitionDelay: "1560ms",
        },
        "&:nth-child(3)": {
          transitionDelay: "1640ms",
        },
        "&:nth-child(4)": {
          transitionDelay: "1720ms",
        },

        "&.active": {},
      },
    },
  },
}));

export default NavLinksStyled;
