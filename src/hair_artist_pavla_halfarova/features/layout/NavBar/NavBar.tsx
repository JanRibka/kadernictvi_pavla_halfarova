import { MouseEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';

import LanguageSelect from './languageSelect/LanguageSelect';
import Logo from './logo/Logo';
import MainMenu from './menu/mainMenu/MainMenu';
import MobileMenu from './menu/mobileMenu/MobileMenu';
import MobileMenuStyled from './menu/mobileMenu/MobileMenuStyled';

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

  const handleDrawerOpen = (event: MouseEvent<HTMLDivElement> | undefined) => {
    if (!isOpen) {
      debugger;
    }
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
            <GridItem xs={12} md={5} alignItems='center'>
              <Logo />
            </GridItem>
            <GridItem xs={7} sx={menuLanguageStyle}>
              {/* Main menu */}
              <MainMenu
                onChangeAction={props.tabSelectOnChangeAction}
                seldTab={props.seldTab}
              />
              {/* Language select */}
              <LanguageSelect />
            </GridItem>
            {/* <GridItem sx={menuIconStyle} xs={2} justifyContent='end'>
              <div className='hamburger-icon-button' onClick={handleDrawerOpen}>
                <div className='icon-1'></div>
                <div className='icon-2'></div>
                <div className='icon-3'></div>
              </div>
            </GridItem> */}
          </GridContainer>
          {/* Mobile menu */}
          {/* <Box position='relative'> */}
          <MobileMenu
            onClickAction={TabSelectMobileOnClickAction}
            seldTab={props.seldTab}
          />
          {/* </Box> */}
        </Toolbar>
        {/* {isOpen && (
          <GridContainer display={{ xs: "block", md: "none" }}>
            <GridItem xs={12}>
              <MobileMenu
                onClickAction={TabSelectMobileOnClickAction}
                seldTab={props.seldTab}
              />
            </GridItem>
          </GridContainer>
        )} */}
      </AppBar>
    </Box>
  );
};

export default NavBar;

// Styles
const appBarStyle: SxProps = {
  height: "90px",
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
  ".hamburger-icon-button": {
    position: "relative",
    height: "60px",
    width: "60px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.2s ease-in-out",
    background: "rgba(255, 255, 255, 0.2)",
    "&:hover": {
      transform: "scale(1.2)",
      boxShadow: "0px 0px 30px rgba(0,0,0,0.1)",
    },
  },
  ".icon-1, .icon-2, .icon-3": {
    position: "absolute",
    left: "25%",
    top: "50%",
    width: "32px",
    height: "3px",
    backgroundColor: "white",
  },
  ".icon-1": {
    transform: "translateY(-8px)",
    animationDelay: "100ms",
  },
  ".icon-3": {
    transform: "translateY(8px)",
    animationDelay: "250ms",
  },
};
