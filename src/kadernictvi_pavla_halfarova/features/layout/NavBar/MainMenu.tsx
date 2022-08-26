import { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";

import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

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
    <Box sx={mainMenuWrapper}>
      <Box>
        <Tabs value={props.seldTab} onChange={props.onChangeAction}>
          <Tab label={t("intro")} />
          <Tab label={t("services")} />
          <Tab label={t("gallery")} />
          <Tab label={t("contact")} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default MainMenu;

// Styles
const mainMenuWrapper: SxProps = {
  marginRight: "25px",
};
