import { MouseEvent, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import NavLinks from '../navLinks/NavLinks';
import HamburgerIcon from './hamburgerIcon/HamburgerIcon';
import LanguageSelect from './languageSelect/languageSelect';
import NavLinksStyled from './navLinks/styledComponents/NavLinksStyled';
import NavLinksWrapperStyled from './navLinks/styledComponents/NavLinksWrapperStyled';

interface IProps {
  onClickAction: (event: MouseEvent<HTMLLIElement> | undefined) => void;
  seldTab: number;
}

const MobileMenu = (props: IProps) => {
  // References
  const effectSetNavLinksRan = useRef<boolean>(false);
  const effectSetIsOpenRan = useRef<boolean>(false);

  // State
  const [isOpnd, setIsOpnd] = useState<boolean>(false);

  // References
  const refNavLinskWrapper = useRef<HTMLDivElement>(null);
  const refNavLinks = useRef<HTMLDivElement>(null);
  const refLanguageSelect = useRef<HTMLDivElement>(null);

  // Consts
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectSetNavLinksRan.current === true
    ) {
      SetNavLinksFadeOut(isOpnd);
    }

    return () => {
      effectSetNavLinksRan.current = true;
    };
  }, [isOpnd]);

  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      (effectSetIsOpenRan.current === true && !breakpointMdUp)
    ) {
      setIsOpnd(false);
    }

    return () => {
      effectSetIsOpenRan.current = true;
    };
  }, [breakpointMdUp]);

  const SetNavLinksFadeOut = (isOpnd: boolean) => {
    if (
      !!refNavLinskWrapper.current &&
      !!refNavLinks.current &&
      !!refLanguageSelect.current
    ) {
      if (isOpnd) {
        document.body
          .getElementsByClassName("main-menu-logo")[0]
          .classList.add("mobile-menu-opened");
        refNavLinskWrapper.current.classList.add("is-opened");
        refNavLinks.current.classList.add("is-opened");
        refLanguageSelect.current.classList.add("is-opened");
      } else {
        document.body
          .getElementsByClassName("main-menu-logo")[0]
          .classList.remove("mobile-menu-opened");
        refNavLinskWrapper.current.classList.remove("is-opened");
        refNavLinks.current.classList.remove("is-opened");
        refLanguageSelect.current.classList.remove("is-opened");
      }
    }
  };

  const HandleIsOpnd = () => {
    setIsOpnd(!isOpnd);
  };

  const HandleOnCLickAction = (
    event: MouseEvent<HTMLLIElement> | undefined
  ) => {
    props.onClickAction(event);
    setIsOpnd(false);
  };

  return (
    <Box display={{ xs: "block", md: "none" }} className='mobile-menu'>
      {/* Hamburger Icon */}
      <HamburgerIcon handleOnClick={HandleIsOpnd} isOpnd={isOpnd} />
      {/* Navigation */}
      <NavLinksWrapperStyled>
        <Box
          ref={refNavLinskWrapper}
          className='mobile-menu-nav'
          sx={{
            backgroundColor: theme.palette.primary.light,
          }}
        >
          <NavLinksStyled>
            <LanguageSelect ref={refLanguageSelect} />
            <NavLinks
              ref={refNavLinks}
              handleOnClick={HandleOnCLickAction}
              seldTab={props.seldTab}
            />
          </NavLinksStyled>
        </Box>
      </NavLinksWrapperStyled>
    </Box>
  );
};

export default MobileMenu;
