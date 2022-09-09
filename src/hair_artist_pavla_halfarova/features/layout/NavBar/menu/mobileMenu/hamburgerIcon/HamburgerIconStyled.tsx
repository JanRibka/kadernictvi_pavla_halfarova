import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const HamburgerIconStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "1.8rem",
  left: "2rem",
  padding: "0",
  width: "30px",
  zIndex: "2",
  cursor: "pointer",
  "& .line": {
    padding: "0",
    width: "30px",
    background: "#fff",
    height: "2px",
    margin: "5px 0",
    transition: "all 700ms cubic-bezier(.9, 0, .33, 1)",
    "&.line-1": {
      width: "30px",
      transform: "rotate(0) translateY(0)",
      "&.line-cross": {
        width: "30px",
        transform: "rotate(45deg) translateY(10px)",
        background: "rgba(0,0,0,0.6)",
      },
    },
    "&.line-2": {
      width: "28px",
      transform: "translateX(2px)",
      "&.line-fade-out": {
        width: "28px",
        transform: "translate(-30px)",
        opacity: "0",
      },
    },
    "&.line-3": {
      width: "20px",
      transform: "rotate(0) translateY(0) translateX(10px)",
      "&.line-cross": {
        width: "30px",
        transform: "rotate(-45deg) translateY(-10px)",
        background: "rgba(0,0,0,0.6)",
      },
    },
  },
}));

export default HamburgerIconStyled;
