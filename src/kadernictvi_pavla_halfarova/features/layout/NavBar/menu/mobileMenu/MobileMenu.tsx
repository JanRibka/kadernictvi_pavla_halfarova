import { MouseEvent, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import NavLinks from "../navLinks/NavLinks";
import HamburgerIcon from "./hamburgerIcon/HamburgerIcon";
import LanguageSelect from "./languageSelect/languageSelect";
import NavLinksStyled from "./navLinks/styledComponents/NavLinksStyled";
import NavLinksWrapperStyled from "./navLinks/styledComponents/NavLinksWrapperStyled";

interface IProps {
  onClickAction: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  seldTab: number;
}
// TODO: Zmensit text menu a posunout dolu kvuli loga
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
    if (effectSetNavLinksRan.current === true) {
      SetNavLinksFadeOut(isOpnd);
    }

    return () => {
      effectSetNavLinksRan.current = true;
    };
  }, [isOpnd]);

  useEffect(() => {
    if (effectSetIsOpenRan.current === true && !breakpointMdUp) {
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
        refNavLinskWrapper.current.classList.add("is-opened");
        refNavLinks.current.classList.add("is-opened");
        refLanguageSelect.current.classList.add("is-opened");
      } else {
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
    event: MouseEvent<HTMLButtonElement> | undefined
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
              actValue={props.seldTab}
            />
          </NavLinksStyled>
        </Box>
      </NavLinksWrapperStyled>
    </Box>
  );
};

export default MobileMenu;
