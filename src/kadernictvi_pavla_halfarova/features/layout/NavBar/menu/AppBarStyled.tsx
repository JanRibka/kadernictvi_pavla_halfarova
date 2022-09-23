import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  transition: "all 300ms ease-out",
  "&.start-style": {
    backgroundColor: "transparent",
    boxShadow: "none",
    "& .MuiToolbar-root": {
      height: "110px",
      "& .main-menu-logo": {
        height: "45px",
      },
    },
  },

  "&.scroll-on": {
    "& .MuiToolbar-root": {
      height: "80px",
    },
    "& .main-menu-logo": {
      height: "35px",
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
