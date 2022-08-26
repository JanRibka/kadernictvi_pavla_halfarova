import { SyntheticEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";

import { AppBar, Box, SxProps, Toolbar } from "@mui/material";

import LanguageSelect from "./LanguageSelect";
import MainMenu from "./MainMenu";

interface IProps {
  tabSelectOnChangeAction: (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => void;
  seldTab: number;
}

const NavBar = (props: IProps) => {
  useEffect(() => {
    window.addEventListener("scroll", HeaderColorChange);

    return () => {
      window.removeEventListener("scroll", HeaderColorChange);
    };
  }, []);

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
        <Toolbar style={{ color: "w" }}>
          <GridContainer>
            <GridItem xs={5}>Logo</GridItem>
            <GridItem xs={7} sx={menuLanguage}>
              <MainMenu
                onChangeAction={props.tabSelectOnChangeAction}
                seldTab={props.seldTab}
              />
              <LanguageSelect />
            </GridItem>
          </GridContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

// Styles
const menuLanguage: SxProps = {
  display: "flex",
  justifyContent: "end",
};
