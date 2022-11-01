import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SectionTitleStyled = styled(Box)(({ theme }) => ({
  marginBottom: "40px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .main-text": {
    fontWeight: 400,
    fontSize: "2.125rem",
    lineHeight: "1.235",
    letterSpacing: "0.00735em",
  },

  "& .secondary-text": {
    fontFamily: "'Caveat',cursive",
  },
}));

export default SectionTitleStyled;
