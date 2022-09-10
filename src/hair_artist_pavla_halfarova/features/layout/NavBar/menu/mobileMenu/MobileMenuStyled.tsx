import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MobileMenuStyled = styled(({ className, ...props }: BoxProps) => (
  <Box {...props} className={className} />
))`
  // [type="checkbox"]:checked,
  // [type="checkbox"]:not(:checked) {
  //   position: absolute;
  //   left: -9999px;
  // }
  // .mobile-menu-icon:checked + label,
  // .mobile-menu-icon:not(:checked) + label {
  //   position: fixed;
  //   top: 35px;
  //   right: 40px;
  //   display: block;
  //   width: 30px;
  //   height: 30px;
  //   padding: 0;
  //   margin: 0;
  //   cursor: pointer;
  //   z-index: 10;
  // }
  // .mobile-menu-icon:checked + label:before,
  // .mobile-menu-icon:not(:checked) + label:before {
  //   position: absolute;
  //   content: "";
  //   display: block;
  //   width: 30px;
  //   height: 20px;
  //   z-index: 20;
  //   top: 0;
  //   left: 0;
  //   border-top: 2px solid #ececee;
  //   border-bottom: 2px solid #ececee;
  //   transition: border-width 100ms 1500ms ease,
  //     top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
  //     height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
  //     background-color 200ms ease,
  //     transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  // }
  // .mobile-menu-icon:checked + label:after,
  // .mobile-menu-icon:not(:checked) + label:after {
  //   position: absolute;
  //   content: "";
  //   display: block;
  //   width: 22px;
  //   height: 2px;
  //   z-index: 20;
  //   top: 10px;
  //   right: 4px;
  //   background-color: #ececee;
  //   margin-top: -1px;
  //   transition: width 100ms 1750ms ease, right 100ms 1750ms ease,
  //     margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  // }
  // .mobile-menu-icon:checked + label:before {
  //   top: 10px;
  //   transform: rotate(45deg);
  //   height: 2px;
  //   background-color: #ececee;
  //   border-width: 0;
  //   transition: border-width 100ms 340ms ease,
  //     top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
  //     height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
  //     background-color 200ms 500ms ease,
  //     transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
  // }
  // .mobile-menu-icon:checked + label:after {
  //   width: 30px;
  //   margin-top: 0;
  //   right: 0;
  //   transform: rotate(-45deg);
  //   transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease,
  //     transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
  // }
  // .mobile-menu-icon:checked ~ .mobile-menu-nav {
  //   animation-play-state: paused;
  //   top: 50%;
  //   right: 50%;
  //   transform: translate(50%, -50%);
  //   width: 200%;
  //   height: 200%;
  //   transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
  //     right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
  //     transform 250ms 700ms ease,
  //     width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
  //     height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
  // }
`;

export default MobileMenuStyled;
