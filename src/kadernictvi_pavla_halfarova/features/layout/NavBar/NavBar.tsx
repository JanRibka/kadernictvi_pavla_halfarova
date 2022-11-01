import { MouseEvent, useEffect } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import useScrollPosition from 'shared/customHooks/useScrollPosition/useScrollPosition';

import Logo from './logo/Logo';
import LanguageSelect from './menu/languageSelect/LanguageSelect';
import MainMenu from './menu/mainMenu/MainMenu';
import MobileMenu from './menu/mobileMenu/MobileMenu';
import AppBarStyled from './styledComponents/AppBarStyled';
import ToolbarStyled from './styledComponents/ToolbarStyled';

interface IProps {
  tabSelectOnChangeAction: (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => void;
  seldTab: number;
}

const NavBar = (props: IProps) => {
  // Consts
  const scrollYPosition: number = useScrollPosition();

  // Other
  useEffect(() => {
    HeaderColorChange();
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
  // TODO: Zrušit grid a místo toho dát na tlačítka flex grow 1
  return (
    <AppBarStyled className='start-style'>
      <ToolbarStyled>
        <GridContainer>
          <GridItem xs={12} md={3} alignItems='center'>
            <Logo />
          </GridItem>
          <GridItem
            xs={9}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/* Main menu */}
            <MainMenu
              onChangeAction={props.tabSelectOnChangeAction}
              seldTab={props.seldTab}
            />
            {/* Language select */}
            <LanguageSelect />
          </GridItem>
        </GridContainer>
        {/* Mobile menu */}
        <MobileMenu
          onClickAction={props.tabSelectOnChangeAction}
          seldTab={props.seldTab}
        />
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default NavBar;
