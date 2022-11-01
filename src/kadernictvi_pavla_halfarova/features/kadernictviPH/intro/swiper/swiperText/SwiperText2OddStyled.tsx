import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SwiperText2OddStyled = styled(Typography)(
  ({ theme }) =>
    `
    font-size: 3rem;
    font-family: 'Caveat', cursive;
    // color: ${theme.palette.common.text.pink};    
    // opacity: 0;
    overflow: hidden; /* Ensures the content is not revealed until the animation */    
    white-space: nowrap; /* Keeps the content on a single line */
    // margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    transition: opacity 1ms linear;
    // animation: typing 1000ms steps(27, end);
    // animation: none 1000ms steps(27, end);    
    // animation-delay: 1200ms;

    span {
      opacity: 0;
      transition: opacity 1ms linear;

      &:nth-of-type(1) {
        transition-delay: 1200ms;
        opacity: 1;
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
