import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const SwiperText2Styled = styled(Typography)(({theme}) => 
`
    font-size: 3rem;
    font-family: 'Caveat', cursive;
    color: ${theme.palette.common.text.pink};
    // display: flex;
    // opacity: 0;
    overflow: hidden; /* Ensures the content is not revealed until the animation */    
    white-space: nowrap; /* Keeps the content on a single line */
    // margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    // transition: opacity 1ms linear 1200ms;
    animation: typing 1000ms steps(27, end);
    animation-delay: 1200ms;

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
`
);

export default SwiperText2Styled;