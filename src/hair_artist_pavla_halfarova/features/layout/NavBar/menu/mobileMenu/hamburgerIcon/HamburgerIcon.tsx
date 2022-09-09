import { MouseEvent, useEffect, useRef } from 'react';

import Box from '@mui/material/Box';

import HamburgerIconStyled from './HamburgerIconStyled';

interface IProps {
  handleOnClick: () => void;
  isOpnd: boolean;
}

const HamburgerIcon = (props: IProps) => {
  // Refrences
  const refLine1 = useRef<HTMLDivElement>(null);
  const refLine2 = useRef<HTMLDivElement>(null);
  const refLine3 = useRef<HTMLDivElement>(null);

  // Other
  useEffect(() => {
    SetOpndClsd(props.isOpnd);
  }, [props.isOpnd]);

  const SetOpndClsd = (isOpnd: boolean) => {
    if (!!refLine1.current && !!refLine2.current && !!refLine3.current) {
      if (isOpnd) {
        refLine1.current.classList.add("line-cross");
        refLine2.current.classList.add("line-fade-out");
        refLine3.current.classList.add("line-cross");
      } else {
        refLine1.current.classList.remove("line-cross");
        refLine2.current.classList.remove("line-fade-out");
        refLine3.current.classList.remove("line-cross");
      }
    }
  };

  return (
    <HamburgerIconStyled
      className='hamburger-btn'
      onClick={props.handleOnClick}
    >
      <Box ref={refLine1} className='line line-1'></Box>
      <Box ref={refLine2} className='line line-2'></Box>
      <Box ref={refLine3} className='line line-3'></Box>
    </HamburgerIconStyled>
  );
};

export default HamburgerIcon;
