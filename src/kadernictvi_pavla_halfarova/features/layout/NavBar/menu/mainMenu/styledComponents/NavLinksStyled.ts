import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(
  ({ theme }) =>
    `
    align-item: center;
    flex-grow: 1;
    align-items: center;
    justify-content: end;

    ul {
      display: flex;
      list-style-type: none;
      align-items: center;

      li {
        color: ${theme.palette.text.primary};
        padding: 15px;
        font-size: 1.1em;     
        letter-spacing: 0.02857em;
        transition: padding 200ms ease-in-out;
        text-transform: uppercase;
        cursor: pointer;

        a {
          position: relative;
          transition: padding 200ms ease-in-out; 
          
          &:after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 2px;
            background-color: ${theme.palette.common.third.main};            
            transform: translateX(0px) scaleX(0);
            transform-origin: center;
            transition: transform 300ms ease-in-out;         
          }

          &.active {
            &:after {        
              transform: translateX(0px) scaleX(1);
              transform-origin: center;
            }
          }
        } 
        
        &:hover {
          padding-top: 10px;
          padding-bottom: 20px;

          a {
            padding-bottom: 5px;
          }
        } 
      }
    }
  `
);

export default NavLinksStyled;
