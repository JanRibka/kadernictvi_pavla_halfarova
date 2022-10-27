import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(
  ({ theme }) =>
    `
  button {
    background: transparent;
    padding: 15px;    
    text-align: center;
    text-decoration: none;
    position: relative;
    color: white;
    font-size: 1.5em;     
    letter-spacing: 0.02857em;    

    span {
      display: inline-block;
      min-width: 0.30em;
      text-transform: uppercase;
      transition: .25s cubic-bezier(0.5,-1, 0.5, 2);
      opacity: 0;
      transform: translate(0,-20px);      
    }

    &:before {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      left: 0;
      transition: .25s cubic-bezier(0.5,-1, 0.5, 2);
      text-transform: uppercase;      
      opacity: 1;
      transform: translate(0,0px);      
    }

    &:hover, &:focus {
      background: transparent;
      &:before {
        opacity: 0;
        transform: translate(0, 20px);
      }

      span {
        opacity: 1;
        transform: translate(0, 0);
      }

      span:nth-of-type(1) {
        transition-delay: 25ms;
      }   

      span:nth-of-type(2) {
        transition-delay: 50ms;
      }

      span:nth-of-type(3) {
        transition-delay: 75ms;
      }

      span:nth-of-type(4) {
        transition-delay: 100ms;
      }

      span:nth-of-type(5) {
        transition-delay: 125ms;
      }

      span:nth-of-type(6) {
        transition-delay: 150ms;
      }

      span:nth-of-type(7) {
        transition-delay: 175ms;
      }

      span:nth-of-type(8) {
        transition-delay: 200ms;
      }

      span:nth-of-type(9) {
        transition-delay: 225ms;
      }
      
      span:nth-of-type(10) {
        transition-delay: 250ms;
      }

      span:nth-of-type(11) {
        transition-delay: 275ms;
      }

      span:nth-of-type(12) {
        transition-delay: 300ms;
      }

      span:nth-of-type(13) {
        transition-delay: 325ms;
      }

      span:nth-of-type(14) {
        transition-delay: 350ms;
      }

      span:nth-of-type(15) {
        transition-delay: 375ms;
      }
    }    
  }
  `
);

export default NavLinksStyled;
