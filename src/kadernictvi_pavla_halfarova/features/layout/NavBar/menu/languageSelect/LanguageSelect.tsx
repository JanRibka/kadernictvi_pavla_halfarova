import i18next from 'i18next';
import { useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import LanguageIcon from '@mui/icons-material/Language';
import { ButtonBase, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import CzechFlag from '../../../../../../shared/flags/czech-flag.png';
import Countries from './Countries';
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
  // TODO: Barva trojuhelniku pro vyber dropdownu bude bily nebo podle toho, zda je pozadi pruhledne
  return (
    <LanguageSelectStyled>
      {/* <ImageButtonStyled onClick={HandleLanguageButtonOnClick}>
        <ImageSrcStyled src={CzechFlag} />
      </ImageButtonStyled>
      <LanguageSelectDialog open={opnDialog}></LanguageSelectDialog> */}
      <FormControl size='small' variant='outlined'>
        <Select
          name='country-select'
          value={seldCountry}
          onChange={HandleOnChange}
          inputProps={{
            id: "country-select",
          }}
        >
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
        </Select>
      </FormControl>
    </LanguageSelectStyled>
  );
};

export default LanguageSelect;
