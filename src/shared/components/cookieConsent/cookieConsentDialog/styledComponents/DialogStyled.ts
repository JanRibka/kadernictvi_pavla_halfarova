import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const DialogStyled = styled(Dialog)(({ theme }) => ({
  top: "auto",
  right: 0,
  bottom: 0,
  left: "auto",

  [theme.breakpoints.down("md")]: {
    left: 0,
  },
}));

export default DialogStyled;
