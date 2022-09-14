import { MouseEvent, useEffect } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { AppBar, Box, Toolbar } from '@mui/material';

import Logo from './logo/Logo';
import LanguageSelect from './menu/languageSelect/LanguageSelect';
import MainMenu from './menu/mainMenu/MainMenu';
import MobileMenu from './menu/mobileMenu/MobileMenu';

interface IProps {
  tabSelectOnChangeAction: (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => void;
  seldTab: number;
}

const NavBar = (props: IProps) => {
  // Other
  useEffect(() => {
    window.addEventListener("scroll", HeaderColorChange);

    return () => {
      window.removeEventListener("scroll", HeaderColorChange);
    };
  }, []);

  const HeaderColorChange = () => {
    const changeColorOnScrollHeight: number = 400;
    const windowScrollTop = window.pageYOffset;

    if (windowScrollTop > changeColorOnScrollHeight) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("transparent");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("transparent");
    }
  };

  return (
    <Box flexGrow={1}>
      <AppBar>
        <Toolbar sx={{ height: "90px" }}>
          <GridContainer>
            <GridItem xs={12} md={3} alignItems='center'>
              <Logo />
            </GridItem>
            <GridItem
              xs={9}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
