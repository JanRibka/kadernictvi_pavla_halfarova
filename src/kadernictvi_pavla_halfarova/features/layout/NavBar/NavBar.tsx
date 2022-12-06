import { MouseEvent } from "react";

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
