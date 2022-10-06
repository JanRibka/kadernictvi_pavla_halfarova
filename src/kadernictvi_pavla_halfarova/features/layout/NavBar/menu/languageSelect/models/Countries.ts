import { LanguageEnum } from 'shared/enums/LanguageEnum';

import CzechFlag from '../../../../../../shared/flags/czech-flag.png';
import PolishFlag from '../../../../../../shared/flags/polish-flag.png';
import CountryModel from './CountrieModel';

const Countries: CountryModel[] = [
  {
    Label: "Česky",
    Src: CzechFlag,
    Value: LanguageEnum.Cz,
    Title: "Česky",
  },
  {
    Label: "Polski",
    Src: PolishFlag,
    Value: LanguageEnum.Pl,
    Title: "Polsky",
  },
];

export default Countries;
