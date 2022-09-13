import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const LanguageSelectStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: "25px",

  "&:hover": {
    borderColor: "red",
  },

  ".main-menu-language-icon": {
    color: theme.palette.secondary.main,
  },

  ".MuiInputBase-root": {
    marginLeft: "5px",

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
    },

    fieldset: {
      border: "none",
    },
  },
}));

export default LanguageSelectStyled;
