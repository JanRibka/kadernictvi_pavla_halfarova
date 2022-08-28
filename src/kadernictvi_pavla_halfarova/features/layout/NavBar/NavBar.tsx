import { SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { AlignHorizontalCenter } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, SxProps, Toolbar } from '@mui/material';

import LanguageSelect from './LanguageSelect';
import Logo from './Logo';
import MainMenu from './MainMenu';

interface IProps {
  tabSelectOnChangeAction: (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => void;
  seldTab: number;
}

const NavBar = (props: IProps) => {
  // State
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", HeaderColorChange);

    return () => {
      window.removeEventListener("scroll", HeaderColorChange);
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(!open);
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
            <GridItem sx={menuIconStyle} xs={2}>
              <IconButton onClick={handleDrawerOpen}>
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </GridItem>
          </GridContainer>
          {/* TODO: Mobile menu           */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

// Styles
const appBarStyle: SxProps = {
  height: "70px",
  display: "flex",
  justifyContent: "center",
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
