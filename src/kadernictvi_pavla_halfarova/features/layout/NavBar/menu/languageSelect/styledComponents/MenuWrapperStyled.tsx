import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MenuWrapperStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "24px",
  right: "6px",
  opacity: 0,
  transition: "opacity 200ms linear",

  "&.opened": {
    opacity: 1,
  },

  "& .MuiPaper-root": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default MenuWrapperStyled;
