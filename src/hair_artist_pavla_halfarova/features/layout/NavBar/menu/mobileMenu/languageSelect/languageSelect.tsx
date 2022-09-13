import i18next from 'i18next';
import { forwardRef, MouseEvent, Ref, useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import CzechFlag from '../../../../../../../shared/flags/czech-flag.png';
import Countries from '../../../languageSelect/Countries';
import ToggleButtonGroupStyled from './ToggleButtonGroupStyled';

const LanguageSelect = forwardRef(
  (props, ref: Ref<HTMLDivElement> | undefined) => {
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
      <ToggleButtonGroupStyled ref={ref}>
        <ToggleButtonGroup size='large' exclusive value={seldCountry}>
          {Countries.map((item, key) => (
            <ToggleButton
              value={item.Src}
              key={key}
              onClick={HandleLanguageOnChange}
            >
              <img src={item.Src} alt={item.Label} />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ToggleButtonGroupStyled>
    );
  }
);

export default LanguageSelect;
