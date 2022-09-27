import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const LanguageSelectStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: "25px",

  ".main-menu-language-icon": {
    color: theme.palette.common.color.pink,
  },

  ".MuiInputBase-root": {
    marginLeft: "5px",

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
    },

    "& .MuiSvgIcon-root": {
      color: "white",
    },

    fieldset: {
      border: "none",
    },
  },
}));

export default LanguageSelectStyled;
