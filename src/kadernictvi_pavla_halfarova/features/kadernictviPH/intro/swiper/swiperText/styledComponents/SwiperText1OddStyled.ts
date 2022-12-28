import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SwiperText2Styled = styled(Typography)(
  ({ theme }) =>
    `
    height: 3.5rem;
    visibility: hidden;    
    color: white;
    font-size: 3rem;
    transition: font-size 300ms linear 1500ms, visibility 1ms linear 1500ms;
    
    ${theme.breakpoints.down("md")} {
      font-size: 2rem;
    }
`
);

export default SwiperText2Styled;
