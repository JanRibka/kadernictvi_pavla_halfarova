import i18next from "i18next";
import { MouseEvent, useRef, useState } from "react";
import { LanguageEnum } from "shared/enums/LanguageEnum";
import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";
import i18n from "shared/infrastructure/localize/i18n";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

import CzechFlag from "../../../../../../shared/flags/czech-flag.png";
import Countries from "./models/Countries";
import ImageButtonStyled from "./styledComponents/ImageButtonStyled";
import ImageSrcStyled from "./styledComponents/ImageSrcStyled";
import LanguageSelectStyled from "./styledComponents/LanguageSelectStyled";
import MenuWrapperStyled from "./styledComponents/MenuWrapperStyled";

const LanguageSelect = () => {
  // References
  const refMenu = useRef<HTMLDivElement>(null);
  const refArrowIcon = useRef<SVGSVGElement>(null);

  // Consts
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();
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
    const title = e?.currentTarget?.firstElementChild?.getAttribute("title");
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
    googleAnalyticsHelper.SendEventToGA(
      "Hlavní menu",
      title as string,
      ("Přepnutí jazyka na " + title) as string
    );
  };

  const HandleLanguageButtonOnClick = () => {
    if (refMenu?.current?.classList.contains("opened")) {
      refMenu.current.classList.remove("opened");
      refArrowIcon.current?.classList.remove("opened");
    } else {
      refMenu?.current?.classList.add("opened");
      refArrowIcon.current?.classList.add("opened");
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
            <ArrowDropDownIcon ref={refArrowIcon} />
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
                    title={option.Title}
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
