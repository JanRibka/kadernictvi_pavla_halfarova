import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MobileMenuStyled = styled(Box)(({ theme }) => ({
  // TODO: P5idat box shadow
  overflow: "hidden",
  position: "absolute",
  top: "0px",
  right: "0px",
  transform: "translateX(300px)",
  height: "100vh",
  width: "400px",
  transition: "all 800ms cubic-bezier(.8, 0, .33, 1)",
  borderRadius: "0% 0% 50% 100%",
  "&.nav-opnd": {
    transform: "translateX(0px)",
    borderRadius: "0% 0% 0% 0%",
    background: "rgba(255, 255, 255, 1)",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}));

export default MobileMenuStyled;
