import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';

import HamburgerIconStyled from './HamburgerIconStyled';

interface IProps {
  handleOnClick: () => void;
  isOpnd: boolean;
}

const HamburgerIcon = (props: IProps) => {
  // Refrences
  const refMobileMenuIcon = useRef<HTMLDivElement>(null);

  // Other
  useEffect(() => {
    SetOpndClsd(props.isOpnd);
  }, [props.isOpnd]);

  const SetOpndClsd = (isOpnd: boolean) => {
    if (!!refMobileMenuIcon.current) {
      if (isOpnd) {
        refMobileMenuIcon.current.classList.add("is-opened");
      } else {
        refMobileMenuIcon.current.classList.remove("is-opened");
      }
    }
  };

  return (
    <HamburgerIconStyled
      className='hamburger-btn'
      onClick={props.handleOnClick}
    >
      <Box ref={refMobileMenuIcon} className='mobile-menu-icon'></Box>
    </HamburgerIconStyled>
  );
};

export default HamburgerIcon;
