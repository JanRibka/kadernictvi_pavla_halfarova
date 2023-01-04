import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "53%",
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

    ul: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      listStyleType: "none",
      paddingInlineStart: 0,

      li: {
        color: theme.palette.text.primary,
        disply: "block",
        width: "fit-content",
        padding: "0",
        margin: "15px 0",
        transform: "translateY(30px)",
        transition: "all 250ms linear",
        fontSize: "2rem",
        lineHeight: "1.1",
        cursor: "pointer",

        a: {
          position: "relative",
          transition: "padding 200ms ease-in-out",
          color: theme.palette.text.secondary,

          "&:after": {
            position: "absolute",
            content: "''",
            left: "0%",
            bottom: "-5px",
            width: "100%",
            height: "2px",
            backgroundColor: theme.palette.text.secondary,
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
        },
      },
    },
  },
}));

export default NavLinksStyled;
