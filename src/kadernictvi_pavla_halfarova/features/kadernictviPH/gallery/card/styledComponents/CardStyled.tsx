import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const CardStyled = styled(Card)(({ theme }) => ({
  "&:before": {
    filter: "url(#wavy2)",
  },
}));

export default CardStyled;
