import i18next from 'i18next';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { alpha, SxProps, useTheme } from '@mui/material/styles';

import CzechFlag from '../../../../shared/flags/czech-flag.png';
import Countries from './Countries';

interface IProps {
  onClickAction: (event: MouseEvent<HTMLLIElement>) => void;
  seldTab: number;
}

const MobileMenu = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["layout\\mainMenu"]);
  const theme = useTheme();
  const i18nextLng: string | null =
    i18next.language || localStorage.getItem("i18nextLng");
  const seldLanguage: string | undefined = Countries.find(
    (f) => f.Value === i18nextLng
  )?.Src;
  const deafultCountry: string =
    Countries.find((f) => f.Value === LanguageEnum.Cz)?.Src ?? CzechFlag;

  // State
  const [seldCountry, setSeldCountry] = useState<string>(
    seldLanguage ?? deafultCountry
  );

  // Styles
  const menuItemStyle: SxProps = {
    // minHeight: "unset",
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

  const toggleButtonStyle: SxProps = {
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

  // Other
  const HandleLanguageOnCHange = (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    value: any
  ) => {
    const newLanguage: LanguageEnum | undefined = Countries.find(
      (f) => f.Src === value
    )?.Value;

    if (newLanguage !== undefined) {
      i18n.changeLanguage(newLanguage);
    }

    setSeldCountry(value);
  };

  return (
    <Box width={"100%"}>
      <ToggleButtonGroup
        size='small'
        exclusive
        sx={toggleButtonGroupStyle}
        value={seldCountry}
        // onChange={HandleLanguageOnCHange}
      >
        {Countries.map((item, key) => (
          <ToggleButton
            value={item.Src}
            key={key}
            onClick={HandleLanguageOnCHange}
            sx={toggleButtonStyle}
          >
            <img src={item.Src} alt={item.Label} style={{ height: "20px" }} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
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
    </Box>
  );
};

export default MobileMenu;

// Styles
const toggleButtonGroupStyle: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
const menuListStyle: SxProps = {
  width: "100%",
  padding: "8px",
};
const listItemTextStyle: SxProps = {
  textAlign: "center",
};
