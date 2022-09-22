import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(({ theme }) => ({
  button: {
    position: "relative",
    fontSize: "1rem",
    color: "white",
    padding: "6px 0",
    marginLeft: "1.5rem",
    lineHeight: "1rem",
    background: "transparent",
    backgroundColor: "transparent",
    minWidth: "unset",
    transition: "all 200ms linear",

    "&:first-of-type": {
      marginLeft: "0px",
    },

    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "-6px",
      left: "0%",
      width: "100%",
      height: "1px",
      backgroundColor: theme.palette.common.background.pink,
      opacity: "0",
      transition: "all 200ms linear",
    },

    "&:hover": {
      color: theme.palette.common.text.pink,
      "&:after": {
        bottom: "0",
        opacity: "1",
      },
    },

    span: {
      display: "none",
    },
  },
}));

export default NavLinksStyled;
