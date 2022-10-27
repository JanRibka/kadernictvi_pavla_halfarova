import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SwiperText2Styled = styled(Typography)(
  ({ theme }) =>
    `
    font-size: 5rem;
    visibility: hidden;    
    color: white;    
    transition: font-size 100ms linear 700ms, visibility 1ms linear 700ms;
    
    ${theme.breakpoints.down("md")} {
      font-size: 2rem;
    }
`
);

export default SwiperText2Styled;
