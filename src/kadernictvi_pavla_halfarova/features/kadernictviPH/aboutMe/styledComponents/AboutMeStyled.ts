import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const AboutMeStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "8em 0px",
  backgroundColor: theme.palette.secondary.main,
}));

export default AboutMeStyled;
