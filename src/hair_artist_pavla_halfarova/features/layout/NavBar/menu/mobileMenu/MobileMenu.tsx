import i18next from 'i18next';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import { ToggleButton, ToggleButtonGroup, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { alpha, SxProps, useTheme } from '@mui/material/styles';

import CzechFlag from '../../../../../../shared/flags/czech-flag.png';
import Countries from '../../languageSelect/Countries';
import NavLinks from '../NavLinks';
import HamburgerIcon from './hamburgerIcon/HamburgerIcon';
import LanguageSelect from './languageSelect/languageSelect';
import MobileMenuStyled from './MobileMenuStyled';
import NavLinksStyled from './NavLinksStyled';

interface IProps {
  onClickAction: (event: MouseEvent<HTMLLIElement>) => void;
  seldTab: number;
}

const MobileMenu = (props: IProps) => {
  // State
  const [isOpnd, setIsOpnd] = useState<boolean>(false);
  // TODO: Rav59t menu při přepnutí na klasické menu

  // References
  const navLinskRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Consts
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));

  // Other
  useEffect(() => {
    SetNavLinksFadeOut(isOpnd);
  }, [isOpnd]);

  useEffect(() => {
    if (!breakpointMdUp) {
      setIsOpnd(false);
    }
  }, [breakpointMdUp]);

  const SetNavLinksFadeOut = (isOpnd: boolean) => {
    if (!!navLinskRef.current) {
      if (isOpnd) {
        navLinskRef.current.classList.add("is-opened");
      } else {
        navLinskRef.current.classList.remove("is-opened");
      }
    }
  };

  const HandleIsOpnd = () => {
    setIsOpnd(!isOpnd);
  };

  return (
    <MobileMenuStyled
      display={{ xs: "block", md: "none" }}
      className='mobile-menu'
    >
      {/* Hamburger Icon */}
      <HamburgerIcon handleOnClick={HandleIsOpnd} isOpnd={isOpnd} />
      {/* Navigation */}
      <NavLinksStyled>
        <Box
          ref={navLinskRef}
          className='mobile-menu-nav'
          sx={{
            backgroundColor: theme.palette.primary.light,
          }}
        >
          <LanguageSelect />
          <NavLinks />
        </Box>
      </NavLinksStyled>

      {/* <MenuList sx={menuListStyle}>
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
      </MenuList> */}
    </MobileMenuStyled>
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
