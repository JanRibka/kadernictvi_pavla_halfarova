import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const FooterStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "1em 0 0 0",
  backgroundColor: theme.palette.primary.dark,
}));

export default FooterStyled;
