import { MouseEvent, useEffect, useRef } from "react";
import useScrollPosition from "shared/customHooks/useScrollPosition/useScrollPosition";

import Logo from "./logo/Logo";
import LanguageSelect from "./menu/languageSelect/LanguageSelect";
import MainMenu from "./menu/mainMenu/MainMenu";
import MobileMenu from "./menu/mobileMenu/MobileMenu";
import AppBarStyled from "./styledComponents/AppBarStyled";
import LogoBackgroundStyled from "./styledComponents/LogoBackgroundStyled";
import ToolbarStyled from "./styledComponents/ToolbarStyled";

interface IProps {
  tabSelectOnChangeAction: (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => void;
  seldTab: number;
}

const NavBar = (props: IProps) => {
  // References
  const effectRan = useRef<boolean>(false);

  // Consts
  const scrollYPosition: number = useScrollPosition();

  // Other
  useEffect(() => {
    if (effectRan.current === true) {
      HeaderColorChange();
    }

    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYPosition]);

  const HeaderColorChange = () => {
    const changeColorOnScrollHeight: number = 100;

    if (scrollYPosition > changeColorOnScrollHeight) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("scroll-on");
      document.body
        .getElementsByClassName("mobile-menu-icon")[0]
        .classList.add("scroll-on");
      document.body
        .getElementsByClassName("mobile-menu-nav")[0]
        .classList.add("scroll-on");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("scroll-on");
      document.body
        .getElementsByClassName("mobile-menu-icon")[0]
        .classList.remove("scroll-on");
      document.body
        .getElementsByClassName("mobile-menu-nav")[0]
        .classList.remove("scroll-on");
    }
  };

  return (
    <AppBarStyled className='start-style'>
      <ToolbarStyled>
        {/* Logo background */}
        <LogoBackgroundStyled className='main-menu-logo-background' />
        {/* Main menu */}
        <MainMenu
          onChangeAction={props.tabSelectOnChangeAction}
          seldTab={props.seldTab}
        />
        {/* Language select */}
        <LanguageSelect />
        {/* Mobile menu */}
        <MobileMenu
          onClickAction={props.tabSelectOnChangeAction}
          seldTab={props.seldTab}
        />
      </ToolbarStyled>
      {/* Logo */}
      <Logo />
    </AppBarStyled>
  );
};

export default NavBar;
