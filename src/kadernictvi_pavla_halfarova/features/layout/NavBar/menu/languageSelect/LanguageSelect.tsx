import i18next from "i18next";
import { MouseEvent, useState } from "react";
import { LanguageEnum } from "shared/enums/LanguageEnum";
import i18n from "shared/infrastructure/localize/i18n";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CzechFlag from "../../../../../../shared/flags/czech-flag.png";
import Countries from "./Countries";
import ImageButtonStyled from "./ImageButtonStyled";
import ImageSrcStyled from "./ImageSrcStyled";
import LanguageSelectStyled from "./LanguageSelectStyled";

const LanguageSelect = () => {
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
  const [opnDialog, setOpnDialog] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Functions
  const HandleOnChange = (e: SelectChangeEvent<string>) => {
    const value: string = e.target.value;
    const newLanguage: LanguageEnum | undefined = Countries.find(
      (f) => f.Src === value
    )?.Value;

    if (newLanguage !== undefined) {
      i18n.changeLanguage(newLanguage);
    }

    setSeldCountry(value);
  };

  const HandleLanguageButtonOnClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event?.currentTarget);
  };

  const HandleCloseMenuOnClick = () => {
    setAnchorEl(null);
  };

  return (
    <LanguageSelectStyled>
      <ImageButtonStyled onClick={HandleLanguageButtonOnClick}>
        <ImageSrcStyled src={CzechFlag} />
      </ImageButtonStyled>
      {/* Menu */}
      <Box sx={{ mt: "45px", position: "absolute" }}>
        {/* <Menu
          // sx={{ mt: "25px", position: "absolute" }}
          // id='menu-appbar'
          // anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          // open={Boolean(anchorEl)}
          open={true}
          onClose={HandleCloseMenuOnClick}
        > */}
        {Countries.map((option, key) => (
          <MenuItem
            value={option.Src}
            key={key}
            onClick={HandleCloseMenuOnClick}
          >
            <img
              src={option.Src}
              alt={option.Label}
              title={option.Label}
              height='20px'
            />
          </MenuItem>
        ))}
        {/* </Menu> */}
      </Box>

      {/* <FormControl size='small' variant='outlined'>
        <Select
          name='country-select'
          value={seldCountry}
          onChange={HandleOnChange}
          inputProps={{
            id: "country-select",
          }}
        >
          <Menu open>
            {Countries.map((option, key) => (
              <MenuItem value={option.Src} key={key}>
                <img
                  src={option.Src}
                  alt={option.Label}
                  title={option.Label}
                  height='20px'
                />
              </MenuItem>
            ))}
          </Menu>
        </Select>
      </FormControl> */}
    </LanguageSelectStyled>
  );
};

export default LanguageSelect;
