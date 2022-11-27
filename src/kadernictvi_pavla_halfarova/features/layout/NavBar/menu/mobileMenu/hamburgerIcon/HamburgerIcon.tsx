import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';

import HamburgerIconStyled from './styledComponents/HamburgerIconStyled';

interface IProps {
  handleOnClick: () => void;
  isOpnd: boolean;
}

const HamburgerIcon = (props: IProps) => {
  // References
  const effectRan = useRef<boolean>(false);

  // Refrences
  const refMobileMenuIcon = useRef<HTMLDivElement>(null);

  // Other
  useEffect(() => {
    if (effectRan.current === true) {
      SetOpndClsd(props.isOpnd);
    }

    return () => {
      effectRan.current = true;
    };
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
