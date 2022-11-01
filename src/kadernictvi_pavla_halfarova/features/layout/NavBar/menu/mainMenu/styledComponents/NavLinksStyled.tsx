import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(
  ({ theme }) =>
    `
  button {
    color: white;
    position: relative;
    padding: 15px;    
    background: transparent;
    text-align: center;
    text-decoration: none;
    font-size: 1.1em;     
    letter-spacing: 0.02857em;
    transition: all 200ms ease-in-out;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 10px;
      width: calc(100% - 30px);
      height: 2px;
      background-color: white;            
      transform: translateX(15px) scaleX(0);
      transform-origin: center;
      transition: transform 300ms ease-in-out;      
    }

    & .MuiTouchRipple-root {
      color: transparent;
    }

    &.active {
      &:after {        
        transform: translateX(15px) scaleX(1);
        transform-origin: center;
      }
    }

    &:hover {
      padding-top: 10px;
      padding-bottom: 20px;
    }    
  }
  `
);

export default NavLinksStyled;
