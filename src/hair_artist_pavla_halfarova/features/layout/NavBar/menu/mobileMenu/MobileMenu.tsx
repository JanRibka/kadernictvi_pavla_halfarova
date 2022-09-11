import { MouseEvent, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import NavLinks from "../navLinks/NavLinks";
import HamburgerIcon from "./hamburgerIcon/HamburgerIcon";
import LanguageSelect from "./languageSelect/languageSelect";
import MobileMenuStyled from "./MobileMenuStyled";
import NavLinksStyled from "./NavLinksStyled";
import NavLinksWrapperStyled from "./NavLinksWrapperStyled";

interface IProps {
  onClickAction: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  seldTab: number;
}

const MobileMenu = (props: IProps) => {
  // State
  const [isOpnd, setIsOpnd] = useState<boolean>(false);
  // TODO: Zav59t menu při přepnutí na klasické menu

  // References
  const refNavLinskWrapper = useRef<HTMLDivElement>(null);
  const refNavLinks = useRef<HTMLDivElement>(null);
  const refLanguageSelect = useRef<HTMLDivElement>(null);

  // Consts
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));

  // Other
  useEffect(() => {
    SetNavLinksFadeOut(isOpnd);
  }, [isOpnd]);

  useEffect(() => {
    if (!breakpointMdUp) {
      setIsOpnd(false);
    }
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

  return (
    <MobileMenuStyled
      display={{ xs: "block", md: "none" }}
      className='mobile-menu'
    >
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
              handleOnClick={props.onClickAction}
              actValue={props.seldTab}
            />
          </NavLinksStyled>
        </Box>
      </NavLinksWrapperStyled>
    </MobileMenuStyled>
  );
};

export default MobileMenu;
