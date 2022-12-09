import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
  transition: "all 500ms ease-out",
  backgroundColor: "transparent",

  "&.loaded": {
    "& .main-menu-logo": {
      width: "130px",
      height: "130px",
      top: "10px",
      left: "50px",
      borderRadius: "50%",
      boxShadow: "0px 0px 20px -5px rgba(0,0,0,0.75)",

      [theme.breakpoints.down("sm")]: {
        left: "10px",
        width: "110px",
        height: "110px",

        button: {
          width: "110px",
          height: "110px",
        },
      },

      [theme.breakpoints.up("sm")]: {
        button: {
          width: "130px",
          height: "130px",
        },
      },

      button: {
        borderRadius: "50%",
      },
    },
  },

  "&.start-style": {
    boxShadow: "none",

    "& .MuiToolbar-root": {
      height: "110px",
    },
  },

  "&.scroll-on": {
    "& .MuiToolbar-root": {
      height: "80px",
      backgroundColor: theme.palette.primary.dark,
    },

    "& .main-menu-logo-background": {
      marginTop: "80px",
    },

    "& .main-menu-logo": {
      width: "110px",
      height: "110px",
      top: "10px",
      left: "50px",
      boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.75)",

      [theme.breakpoints.down("sm")]: {
        top: "10px",
        left: "10px",
        width: "90px",
        height: "90px",

        button: {
          width: "90px",
          height: "90px",
        },
      },

      [theme.breakpoints.up("sm")]: {
        button: {
          width: "110px",
          height: "110px",
        },
      },
    },
  },

  "& .MuiToolbar-root": {
    transition: "all 300ms ease-out",
  },
}));

export default AppBarStyled;
