import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transform: "translateX(0px)",
  opacity: "0",
  transition: "all 900ms cubic-bezier(.9, 0, .33, 1)",
  "&.fade-in": {
    opacity: "1",
    transform: "translateX(0px)",
  },
}));

export default NavLinksStyled;
