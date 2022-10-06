import i18next from 'i18next';
import { MouseEvent, useRef, useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

import CzechFlag from '../../../../../../shared/flags/czech-flag.png';
import Countries from './Countries';
import ImageButtonStyled from './ImageButtonStyled';
import ImageSrcStyled from './ImageSrcStyled';
import LanguageSelectStyled from './LanguageSelectStyled';
import MenuWrapperStyled from './MenuWrapperStyled';

const LanguageSelect = () => {
  // References
  const refMenu = useRef<HTMLDivElement>(null);

  // Consts
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

  // Functions
  const HandleMenuItemOnClick = (e: MouseEvent<HTMLLIElement>) => {
    const value: string =
      e?.currentTarget?.firstElementChild?.getAttribute("src") ?? "";
    const newLanguage: LanguageEnum | undefined = Countries.find(
      (f) => f.Src === value
    )?.Value;

    if (newLanguage !== undefined) {
      i18n.changeLanguage(newLanguage);
    }

    setSeldCountry(value);
    refMenu?.current?.classList.remove("opened");
  };

  const HandleLanguageButtonOnClick = () => {
    if (refMenu?.current?.classList.contains("opened")) {
      refMenu.current.classList.remove("opened");
    } else {
      refMenu?.current?.classList.add("opened");
    }
  };

  const HandleOnClicAway = (e: globalThis.MouseEvent | TouchEvent) => {
    refMenu?.current?.classList.remove("opened");
  };

  return (
    <LanguageSelectStyled>
      <ClickAwayListener onClickAway={HandleOnClicAway}>
        <Box position='relative'>
          <ImageButtonStyled onClick={HandleLanguageButtonOnClick}>
            <ImageSrcStyled src={seldCountry} />
          </ImageButtonStyled>
          {/* Menu */}
          <MenuWrapperStyled ref={refMenu}>
            <Paper>
              {Countries.map((option, key) => (
                <MenuItem
                  value={option.Src}
                  key={key}
                  onClick={HandleMenuItemOnClick}
                >
                  <img
                    src={option.Src}
                    alt={option.Label}
                    title={option.Label}
                    height='20px'
                  />
                </MenuItem>
              ))}
            </Paper>
          </MenuWrapperStyled>
        </Box>
      </ClickAwayListener>
    </LanguageSelectStyled>
  );
};

export default LanguageSelect;
