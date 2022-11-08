import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const ImageButtonStyled = styled(ButtonBase)(({ theme }) => ({
  height: "100%",
  width: "100%",

  ".MuiTouchRipple-root": {
    color: "transparent",
  },

  ".MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    "&.opened": {
      rotate: "180deg",
    },
  },
}));

export default ImageButtonStyled;
