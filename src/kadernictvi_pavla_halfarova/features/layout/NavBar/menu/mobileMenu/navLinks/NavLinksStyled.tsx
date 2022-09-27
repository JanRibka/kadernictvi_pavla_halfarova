import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
    alignItems: "center",
    flexDirection: "column",
    marginTop: "1rem",
    button: {
      color: "white",
      position: "relative",
      disply: "block",
      width: "fit-content",
      padding: "0",
      margin: "25px 0",
      pointerEvents: "none",
      opacity: "0",
      visibility: "hidden",
      transform: "translateY(30px)",
      transition: "all 250ms linear",
      fontSize: "3rem",
      lineHeight: "1.1",

      "&:after": {
        content: "''",
        position: "absolute",
        left: "0%",
        bottom: "-10px",
        width: "100%",
        height: "2px",
        backgroundColor: theme.palette.common.background.pink,
        opacity: 0,
        transition: "all 200ms linear",
      },

      // "&.active": {
      //   "&:after": {
      //     transform: "scaleX(1)",
      //     transformOrigin: "left",
      //   },
      // },

      "&:hover": {
        backgroundColor: "transparent",
        color: theme.palette.common.text.pink,
        "&:after": {
          bottom: "-3px",
          opacity: "1",
        },
      },

      span: {
        display: "none",
      },

      "&:nth-of-type(1)": {
        transitionDelay: "250ms",
      },
      "&:nth-of-type(2)": {
        transitionDelay: "200ms",
      },
      "&:nth-of-type(3)": {
        transitionDelay: "150ms",
      },
      "&:nth-of-type(4)": {
        transitionDelay: "100ms",
      },
      "&:nth-of-type(5)": {
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
        "&:nth-of-type(1)": {
          transitionDelay: "1480ms",
        },
        "&:nth-of-type(2)": {
          transitionDelay: "1560ms",
        },
        "&:nth-of-type(3)": {
          transitionDelay: "1640ms",
        },
        "&:nth-of-type(4)": {
          transitionDelay: "1720ms",
        },
        "&:nth-of-type(5)": {
          transitionDelay: "1800ms",
        },

        "&.active": {},
      },
    },
  },
}));

export default NavLinksStyled;
