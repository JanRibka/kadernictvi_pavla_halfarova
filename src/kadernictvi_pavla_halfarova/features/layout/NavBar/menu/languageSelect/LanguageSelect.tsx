import i18next from 'i18next';
import { useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CzechFlag from '../../../../../../shared/flags/czech-flag.png';
import Countries from './Countries';
import ImageButtonStyled from './ImageButtonStyled';
import ImageSrcStyled from './ImageSrcStyled';
import LanguageSelectStyled from './LanguageSelectStyled';

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

  const HandleLanguageButtonOnClick = () => {
    setOpnDialog(true);
  };

  return (
    <LanguageSelectStyled>
      <ImageButtonStyled onClick={HandleLanguageButtonOnClick}>
        <ImageSrcStyled src={CzechFlag} />
      </ImageButtonStyled>
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
