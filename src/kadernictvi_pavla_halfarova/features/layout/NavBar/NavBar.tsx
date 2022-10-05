import { MouseEvent, useEffect } from "react";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";

import { Box, Toolbar } from "@mui/material";

import Logo from "./logo/Logo";
import AppBarStyled from "./menu/AppBarStyled";
import LanguageSelect from "./menu/languageSelect/LanguageSelect";
import MainMenu from "./menu/mainMenu/MainMenu";
import MobileMenu from "./menu/mobileMenu/MobileMenu";

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
    const changeColorOnScrollHeight: number = 100;
    const windowScrollTop = window.pageYOffset;

    if (windowScrollTop > changeColorOnScrollHeight) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("scroll-on");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("scroll-on");
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("start-style");
    }
  };

  return (
    // <Box flexGrow={1}>
    <AppBarStyled className='start-style'>
      <Toolbar>
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
      </Toolbar>
    </AppBarStyled>
    // </Box>
  );
};

export default NavBar;
