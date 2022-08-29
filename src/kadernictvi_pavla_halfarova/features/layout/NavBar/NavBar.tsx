import { Spin as HamburgerIcon } from 'hamburger-react';
import { MouseEvent, SyntheticEvent, useEffect, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';

import LanguageSelect from './LanguageSelect';
import Logo from './Logo';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';

interface IProps {
  tabSelectOnChangeAction: (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => void;
  tabSelectMobileOnClickAction: (event: MouseEvent<HTMLLIElement>) => void;
  seldTab: number;
}

const NavBar = (props: IProps) => {
  // Consts
  const theme = useTheme();
  const closeMenu: boolean = useMediaQuery(theme.breakpoints.up("md"));

  // State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Other
  useEffect(() => {
    if (closeMenu) {
      setIsOpen(false);
    }
  }, [closeMenu]);

  useEffect(() => {
    window.addEventListener("scroll", HeaderColorChange);

    return () => {
      window.removeEventListener("scroll", HeaderColorChange);
    };
  }, []);

  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };

  const TabSelectMobileOnClickAction = (event: MouseEvent<HTMLLIElement>) => {
    props.tabSelectMobileOnClickAction(event);
    setIsOpen(false);
  };

  const HeaderColorChange = () => {
    const changeColorOnScrollHeight: number = 400;
    const changeColorOnScrollColor: string = "white";
    const windowScrollTop = window.pageYOffset;
    debugger;
    if (windowScrollTop > changeColorOnScrollHeight) {
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.remove(_classes[props.Color]);
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.add(_classes[changeColorOnScrollColor]);
    } else {
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.add(_classes[props.Color]);
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.remove(_classes[changeColorOnScrollColor]);
    }
  };

  return (
    <Box flexGrow={1}>
      <AppBar>
        <Toolbar sx={appBarStyle}>
          <GridContainer>
            <GridItem xs={10} md={5} alignItems='center'>
              <Logo />
            </GridItem>
            <GridItem xs={7} sx={menuLanguageStyle}>
              <MainMenu
                onChangeAction={props.tabSelectOnChangeAction}
                seldTab={props.seldTab}
              />
              <LanguageSelect />
            </GridItem>
            <GridItem sx={menuIconStyle} xs={2} justifyContent='end'>
              <HamburgerIcon toggled={isOpen} toggle={handleDrawerOpen} />
            </GridItem>
          </GridContainer>
        </Toolbar>
        {isOpen && (
          <GridContainer display={{ xs: "block", md: "none" }}>
            <GridItem xs={12}>
              <MobileMenu
                onClickAction={TabSelectMobileOnClickAction}
                seldTab={props.seldTab}
              />
            </GridItem>
          </GridContainer>
        )}
      </AppBar>
    </Box>
  );
};

export default NavBar;

// Styles
const appBarStyle: SxProps = {
  height: "70px",
};
const menuLanguageStyle: SxProps = {
  display: {
    xs: "none",
    sm: "none",
    md: "flex",
    lg: "flex",
    xl: "flex",
    xxl: "flex",
  },
  justifyContent: "end",
};
const menuIconStyle: SxProps = {
  display: {
    sx: "block",
    md: "none",
  },
  svg: {
    fontSize: "xx-large",
    color: "white",
  },
};
