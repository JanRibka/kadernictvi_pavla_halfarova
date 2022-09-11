import { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";

import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import NavLinks from "../navLinks/NavLinks";
import MainMenuStyled from "./MainMenuStyled";

interface IProps {
  onChangeAction: (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => void;
  seldTab: number;
}

const MainMenu = (props: IProps) => {
  const { t } = useTranslation(["layout\\mainMenu"]);

  return (
    // <Box sx={mainMenuWrapperStyle}>
    <MainMenuStyled>
      <NavLinks handleOnClick={() => {}} actValue={0} />
      {/* // <Box>
      //   <Tabs
      //     value={props.seldTab}
      //     onChange={props.onChangeAction}
      //     textColor='primary'
      //     indicatorColor='secondary'
      //   >
      //     <Tab sx={tabStyle} label={t("intro")} />
      //     <Tab sx={tabStyle} label={t("services")} />
      //     <Tab sx={tabStyle} label={t("gallery")} />
      //     <Tab sx={tabStyle} label={t("contact")} />
      //   </Tabs>
      // </Box> */}
    </MainMenuStyled>
  );
};

export default MainMenu;

// Styles
const mainMenuWrapperStyle: SxProps = {
  marginRight: "25px",
};

const tabStyle: SxProps = {
  // TODO: Pokliku at se tlačítko nepodbaruje
  // borderRadius: "25px 0 25px 0",
  "&.Mui-selected": {
    color: "white",
  },
};
