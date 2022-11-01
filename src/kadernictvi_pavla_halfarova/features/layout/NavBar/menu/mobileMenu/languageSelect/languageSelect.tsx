import i18next from 'i18next';
import { forwardRef, MouseEvent, Ref, useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import CzechFlag from '../../../../../../../shared/flags/czech-flag.png';
import Countries from '../../languageSelect/models/Countries';
import ToggleButtonGroupStyled from './styledComponents/ToggleButtonGroupStyled';
import ToggleButtonStyled from './styledComponents/ToggleButtonStyled';

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
      <ToggleButtonGroupStyled
        ref={ref}
        size='large'
        exclusive
        value={seldCountry}
      >
        {Countries.map((item, key) => (
          <ToggleButtonStyled
            value={item.Src}
            key={key}
            onClick={HandleLanguageOnChange}
          >
            <img src={item.Src} alt={item.Label} />
          </ToggleButtonStyled>
        ))}
      </ToggleButtonGroupStyled>
    );
  }
);

export default LanguageSelect;
