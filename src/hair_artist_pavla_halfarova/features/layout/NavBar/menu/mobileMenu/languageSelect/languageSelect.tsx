import i18next from 'i18next';
import { MouseEvent, useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import { alpha, useTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import CzechFlag from '../../../../../../../shared/flags/czech-flag.png';
import Countries from '../../../languageSelect/Countries';

const LanguageSelect = () => {
  // Consts
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
  // Other
  const HandleLanguageOnChange = (
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
    <ToggleButtonGroup
      size='small'
      exclusive
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      value={seldCountry}
    >
      {Countries.map((item, key) => (
        <ToggleButton
          value={item.Src}
          key={key}
          onClick={HandleLanguageOnChange}
          sx={{
            "&:hover": {
              backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
            },
            "&.Mui-selected": {
              backgroundColor: alpha(theme.palette.secondary.main, 0.3),
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
              },
            },
          }}
        >
          <img src={item.Src} alt={item.Label} style={{ height: "20px" }} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default LanguageSelect;
