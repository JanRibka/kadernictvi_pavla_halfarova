import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SuspenseFallbackStyled = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default SuspenseFallbackStyled;
