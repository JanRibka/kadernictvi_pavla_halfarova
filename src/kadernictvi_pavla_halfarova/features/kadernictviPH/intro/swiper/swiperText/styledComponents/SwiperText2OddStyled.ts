import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SwiperText2OddStyled = styled(Typography)(
  ({ theme }) =>
    `
    font-size: 3rem;
    font-family: 'Caveat', cursive;    
    overflow: hidden; /* Ensures the content is not revealed until the animation */    
    white-space: nowrap; /* Keeps the content on a single line */    
    letter-spacing: .15em; /* Adjust as needed */
    transition: opacity 1ms linear;  
    color: ${theme.palette.common.third.main}; 

    span {
      opacity: 0;
      transition: opacity 300ms linear;

      &:nth-of-type(1) {
        transition-delay: 2000ms;        
      }
      &:nth-of-type(2) {
        transition-delay: 2050ms;        
      }
      &:nth-of-type(3) {
        transition-delay: 2100ms;        
      }
      &:nth-of-type(4) {
        transition-delay: 2150ms;        
      }
      &:nth-of-type(5) {
        transition-delay: 2200ms;        
      }
      &:nth-of-type(6) {
        transition-delay: 2250ms;        
      }
      &:nth-of-type(7) {
        transition-delay: 2300ms;        
      }
      &:nth-of-type(8) {
        transition-delay: 2350ms;        
      }
      &:nth-of-type(9) {
        transition-delay: 2400ms;        
      }
      &:nth-of-type(10) {
        transition-delay: 2450ms;        
      }
      &:nth-of-type(11) {
        transition-delay: 2500ms;        
      }
      &:nth-of-type(12) {
        transition-delay: 2550ms;        
      }
      &:nth-of-type(13) {
        transition-delay: 2600ms;        
      }
      &:nth-of-type(14) {
        transition-delay: 2650ms;        
      }
      &:nth-of-type(15) {
        transition-delay: 2700ms;        
      }
    }

    ${theme.breakpoints.down("md")} {
      font-size: 1.8rem;
    }

    /* The typing effect */
    // @keyframes typing {
    //     from { width: 0 }
    //     to { width: 100% }
    // }
`
);

export default SwiperText2OddStyled;
