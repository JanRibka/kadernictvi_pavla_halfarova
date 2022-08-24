import { ReactNode, useState } from "react";

import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import Countries from "./Countries";

const LanguageSelect = () => {
  // State
  const [seldCountry, setSeldCountry] = useState<string>("");

  // Functions
  const HandleOnChange = (e: SelectChangeEvent<string>, child: ReactNode) => {
    const value: string = e.target.value;

    setSeldCountry(value);
  };

  return (
    <Box>
      <LanguageIcon />
      <FormControl size='small' variant='standard'>
        <Select
          name='country-select'
          value={seldCountry}
          onChange={HandleOnChange}
          inputProps={{
            id: "country-select",
          }}
        >
          {Countries.map((option, key) => (
            <MenuItem>
              <img src={option.Src} alt={option.Label}>
                {" "}
              </img>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelect;
