import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LogoStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 10,
  top: "0",
  left: "0",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 0,
  boxShadow: "unset",
  transition: `height 500ms ease-out, 
    width 500ms ease-out, 
    top 500ms ease-out, 
    left 500ms ease-out,
    box-shadow 500ms ease-out 500ms`,

  "&.mobile-menu-opened": {
    top: "10px",
    left: "10px !important",
  },

  img: {
    height: "inherit",
    borderRadius: "inherit",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default LogoStyled;
