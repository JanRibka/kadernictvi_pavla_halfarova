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

    span {
      opacity: 0;
      transition: opacity 200ms linear;

      &:nth-of-type(1) {
        transition-delay: 1200ms;        
      }
      &:nth-of-type(2) {
        transition-delay: 1250ms;        
      }
      &:nth-of-type(3) {
        transition-delay: 1300ms;        
      }
      &:nth-of-type(4) {
        transition-delay: 1350ms;        
      }
      &:nth-of-type(5) {
        transition-delay: 1400ms;        
      }
      &:nth-of-type(6) {
        transition-delay: 1450ms;        
      }
      &:nth-of-type(7) {
        transition-delay: 1500ms;        
      }
      &:nth-of-type(8) {
        transition-delay: 1550ms;        
      }
      &:nth-of-type(9) {
        transition-delay: 1600ms;        
      }
      &:nth-of-type(10) {
        transition-delay: 1650ms;        
      }
      &:nth-of-type(11) {
        transition-delay: 1700ms;        
      }
      &:nth-of-type(12) {
        transition-delay: 1750ms;        
      }
      &:nth-of-type(13) {
        transition-delay: 1800ms;        
      }
      &:nth-of-type(14) {
        transition-delay: 1850ms;        
      }
      &:nth-of-type(15) {
        transition-delay: 1900ms;        
      }
    }

    ${theme.breakpoints.down("md")} {
      font-size: 1.5rem;
    }

    /* The typing effect */
    // @keyframes typing {
    //     from { width: 0 }
    //     to { width: 100% }
    // }
`
);

export default SwiperText2OddStyled;
