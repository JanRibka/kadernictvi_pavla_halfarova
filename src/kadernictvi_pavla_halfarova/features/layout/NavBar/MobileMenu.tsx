import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { alpha, SxProps, useTheme } from '@mui/material/styles';

interface IProps {
  onClickAction: (event: MouseEvent<HTMLLIElement>) => void;
  seldTab: number;
}

const MobileMenu = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["layout\\mainMenu"]);
  const theme = useTheme();

  // Styles
  const menuItemStyle: SxProps = {
    minHeight: "unset",
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
    },
    "&.Mui-selected": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.3),
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
      },
    },
  };
  // TODO: P5idat p5ep9nani jazyka
  return (
    <MenuList sx={menuListStyle}>
      <MenuItem
        sx={menuItemStyle}
        value={0}
        selected={0 === props.seldTab}
        onClick={props.onClickAction}
      >
        <ListItemText sx={listItemTextStyle}>{t("intro")}</ListItemText>
      </MenuItem>
      <MenuItem
        sx={menuItemStyle}
        value={1}
        selected={1 === props.seldTab}
        onClick={props.onClickAction}
      >
        <ListItemText sx={listItemTextStyle}>{t("services")}</ListItemText>
      </MenuItem>
      <MenuItem
        sx={menuItemStyle}
        value={2}
        selected={2 === props.seldTab}
        onClick={props.onClickAction}
      >
        <ListItemText sx={listItemTextStyle}>{t("gallery")}</ListItemText>
      </MenuItem>
      <MenuItem
        sx={menuItemStyle}
        value={3}
        selected={3 === props.seldTab}
        onClick={props.onClickAction}
      >
        <ListItemText sx={listItemTextStyle}>{t("contact")}</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default MobileMenu;

// Styles
const menuListStyle: SxProps = {
  width: "100%",
  padding: "8px",
};
const listItemTextStyle: SxProps = {
  textAlign: "center",
};
