import i18next from 'i18next';
import { useState } from 'react';
import { LanguageEnum } from 'shared/enums/LanguageEnum';
import i18n from 'shared/infrastructure/localize/i18n';

import LanguageIcon from '@mui/icons-material/Language';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, SxProps } from '@mui/material';

import CzechFlag from '../../../../shared/flags/czech-flag.png';
import Countries from './Countries';

const LanguageSelect = () => {
  const i18nextLng: string | null = i18next.language || localStorage.getItem("i18nextLng");
  const seldLanguage: string | undefined = Countries.find(f => f.Value === i18nextLng)?.Src;
  const deafultCountry: string = Countries.find(f => f.Value === LanguageEnum.Cz)?.Src ?? CzechFlag;

  // State  
  const [seldCountry, setSeldCountry] = useState<string>(seldLanguage ?? deafultCountry);

  // Functions
  const HandleOnChange = (e: SelectChangeEvent<string>) => {
    const value: string = e.target.value;
    const newLanguage: LanguageEnum | undefined = Countries.find(f => f.Src === value)?.Value;

    if (newLanguage !== undefined) {
      i18n.changeLanguage(newLanguage);
    }
    
    setSeldCountry(value);
  };

  return (
    <Box sx={wrapper}>
      <LanguageIcon color='secondary'/>
      <FormControl size='small' variant='outlined'>        
        <Select
          name='country-select'
          value={seldCountry}
          onChange={HandleOnChange}          
          inputProps={{
            id: "country-select",
          }}
          sx={select}          
        >
          {Countries.map((option, key) => (
            <MenuItem value={option.Src} key={key}>
              <img src={option.Src} alt={option.Label} style={{height: "20px"}}/>{" "}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelect;

// Styles
const wrapper: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: "25px"
};

const select: SxProps = {
  marginLeft: "5px",
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center"
  },  
}
