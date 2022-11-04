import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const AboutMeStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "4em 0px",
  // backgroundColor: theme.palette.primary.dark,
}));

export default AboutMeStyled;
