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
        position: "absolute",
        content: "''",
        left: "0%",
        bottom: "-5px",
        width: "100%",
        height: "2px",
        backgroundColor: "white",
        transform: "scaleX(0)",
        transformOrigin: "center",
        transition: "transform 300ms ease-in-out",
      },

      "&.active": {
        "&:after": {
          transform: "scaleX(1)",
          transformOrigin: "center",
        },
      },

      "&:hover": {
        paddingBottom: "10px",
        marginTop: "15px",
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
        transition:
          "opacity 350ms ease, transform 250ms ease, margin 200ms ease-in-out, padding 200ms ease-in-out",
        "&:nth-of-type(1)": {
          transitionDelay: "1480ms, 0ms, 0ms, 0ms",
          transitionProperty: "opacity, transform, margin, padding",
        },
        "&:nth-of-type(2)": {
          transitionDelay: "1560ms, 0ms, 0ms, 0ms",
          transitionProperty: "opacity, transform, margin, padding",
        },
        "&:nth-of-type(3)": {
          transitionDelay: "1640ms, 0ms, 0ms, 0ms",
          transitionProperty: "opacity, transform, margin, padding",
        },
        "&:nth-of-type(4)": {
          transitionDelay: "1720ms, 0ms, 0ms, 0ms",
          transitionProperty: "opacity, transform, margin, padding",
        },
        "&:nth-of-type(5)": {
          transitionDelay: "1800ms, 0ms, 0ms, 0ms",
          transitionProperty: "opacity, transform, margin, padding",
        },

        "&.active": {},
      },
    },
  },
}));

export default NavLinksStyled;
