import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const HamburgerIconStyled = styled(({ className, ...props }: BoxProps) => (
  <Box {...props} className={className} />
))`
  & .mobile-menu-icon {
    position: fixed;
    top: 35px;
    right: 40px;
    display: block;
    width: 30px;
    height: 20px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;

    &:before {
      position: absolute;
      content: "";
      display: block;
      width: 30px;
      height: 20px;
      z-index: 20;
      top: 0;
      left: 0;
      border-top: 2px solid #ececee;
      border-bottom: 2px solid #ececee;
      transition: border-width 100ms 1500ms ease,
        top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
        height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
        background-color 200ms ease,
        transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:after {
      position: absolute;
      content: "";
      display: block;
      width: 22px;
      height: 2px;
      z-index: 20;
      top: 10px;
      right: 4px;
      background-color: #ececee;
      margin-top: -1px;
      transition: width 100ms 1750ms ease, right 100ms 1750ms ease,
        margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &.is-opened {
      :before {
        top: 10px;
        transform: rotate(45deg);
        height: 2px;
        background-color: #ececee;
        border-width: 0;
        transition: border-width 100ms 340ms ease,
          top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
          height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
          background-color 200ms 500ms ease,
          transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
      }

      :after {
        width: 30px;
        margin-top: 0;
        right: 0;
        transform: rotate(-45deg);
        transition: width 100ms ease, right 100ms ease,
          margin-top 100ms 500ms ease,
          transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
      }
    }
  }
`;

export default HamburgerIconStyled;
