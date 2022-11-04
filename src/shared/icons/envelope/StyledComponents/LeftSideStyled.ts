import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const LeftSideStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "0",
  top: "0",
  borderTop: "16px solid transparent",
  borderBottom: "16px solid transparent",
  zIndex: 4,
  borderLeft: "20px solid " + theme.palette.common.third.main,
}));

export default LeftSideStyled;
