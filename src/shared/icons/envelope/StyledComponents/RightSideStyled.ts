import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const RightSideStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
  borderTop: "16px solid transparent",
  borderBottom: "16px solid transparent",
  zIndex: 4,
  borderRight: "20px solid " + theme.palette.secondary.dark,
}));

export default RightSideStyled;
