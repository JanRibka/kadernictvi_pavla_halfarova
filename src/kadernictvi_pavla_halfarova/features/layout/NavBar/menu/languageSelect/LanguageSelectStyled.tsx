import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const LanguageSelectStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "25px",
  height: "20px",
  transition: "all 200ms linear",

  "&:hover": {
    paddingBottom: "2px",
  },
}));

export default LanguageSelectStyled;
