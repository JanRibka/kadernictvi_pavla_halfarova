import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(({ theme }) => ({
  button: {
    position: "relative",
    fontSize: "1rem",
    color: "white",
    marginRight: "25px",

    "&:last-of-type": {
      marginRight: "0px",
    },

    "&:before": {
      content: "''",
      position: "absolute",
      top: "100%",
      left: "0%",
      width: "100%",
      height: "0.2em",
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary.main,
      transform: "scaleX(0)",
      transformOrigin: "right",
      transition: "transform 0.5s",
    },

    "&.active": {
      "&:before": {
        transform: "scaleX(1)",
        transformOrigin: "left",
      },
    },

    "&:hover": {
      color: theme.palette.text.secondary,
    },

    span: {
      display: "none",
    },
  },
}));

export default NavLinksStyled;
