import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
  transition: "all 300ms ease-out",

  "&.start-style": {
    boxShadow: "none",

    "& .MuiToolbar-root": {
      height: "110px",
    },
  },

  "&.scroll-on": {
    "& .MuiToolbar-root": {
      height: "80px",
    },
    "& .main-menu-logo-background": {
      marginTop: "80px",
    },
    "& .main-menu-logo": {
      top: "10px",
    },
  },

  "& .MuiToolbar-root": {
    transition: "all 300ms ease-out",
  },

  "& .main-menu-logo": {
    transition: "all 300ms ease-out",
  },
}));

export default AppBarStyled;
