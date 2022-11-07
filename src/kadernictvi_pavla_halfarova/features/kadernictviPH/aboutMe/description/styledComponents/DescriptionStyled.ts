import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const DescriptionStyled = styled(Box)(({ theme }) => ({
  margin: "0 40px",

  [theme.breakpoints.up("xl")]: {
    margin: "0 0 0 100px",
  },
}));

export default DescriptionStyled;
