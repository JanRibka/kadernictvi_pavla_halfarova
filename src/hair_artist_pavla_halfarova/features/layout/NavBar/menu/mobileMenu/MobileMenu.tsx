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
import NavLinksStyled from './const NavLinksStyled';
import HamburgerIcon from './hamburgerIcon/HamburgerIcon';
import LanguageSelect from './languageSelect/languageSelect';
import MobileMenuStyled from './MobileMenuStyled';

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
    if (!!navLinskRef.current && mobileMenuRef.current) {
      if (isOpnd) {
        navLinskRef.current.classList.add("fade-in");
        mobileMenuRef.current.classList.add("nav-opnd");
      } else {
        navLinskRef.current.classList.remove("fade-in");
        mobileMenuRef.current.classList.remove("nav-opnd");
      }
    }
  };

  const HandleIsOpnd = () => {
    setIsOpnd(!isOpnd);
  };

  const toggleButtonStyle: SxProps = {};

  return (
    <MobileMenuStyled ref={mobileMenuRef} display={{ xs: "block", md: "none" }}>
      <HamburgerIcon handleOnClick={HandleIsOpnd} isOpnd={isOpnd} />
      <NavLinksStyled ref={navLinskRef}>
        <LanguageSelect />
        <NavLinks />
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
