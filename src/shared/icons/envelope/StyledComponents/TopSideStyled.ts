import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const TopSideStyled = styled(Box)(({ theme }) => ({
  top: "-24px",
  transformOrigin: "bottom",
  transform: "rotateX(180deg)",
  transition: "all 0.8s ease",
  transitionDelay: "0.6s",
  zIndex: 6,
  borderLeft: "24px solid transparent",
  borderRight: "24px solid transparent",
  position: "relative",
  borderBottom: "24px solid " + theme.palette.secondary.main,
}));

export default TopSideStyled;
